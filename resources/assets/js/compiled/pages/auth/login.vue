<template>
<div class="panel-heading">
    Sign in to your account
</div>
<div class="panel-body">
    <form class="form-horizontal" role="form" v-on:submit="attempt">

		<div id="alerts" v-if="messages.length > 0">
			<div v-for="message in messages" class="alert alert-{{ message.type }} alert-dismissible" role="alert">
				{{ message.message }}
			</div>
		</div>

		<div class="form-group">
			<label class="col-md-4 control-label">E-Mail Address</label>
			<div class="col-md-6">
				<input type="email" class="form-control" v-model="user.email">
			</div>
		</div>

		<div class="form-group">
			<label class="col-md-4 control-label">Password</label>
			<div class="col-md-6">
				<input type="password" class="form-control" v-model="user.password">
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-6 col-md-offset-4">
				<button type="submit" class="btn btn-primary" :disabled="loggingIn">
					<i class="fa fa-btn fa-sign-in"></i>Login
				</button>

				<a class="btn btn-link" v-link="{ path: '/auth/forgot' }">Forgot Your Password?</a>
			</div>
		</div>
	</form>
</div>
</template>

<script>
module.exports = {

  data: function () {
    return {
      user: {
        email: null,
        password: null
      },
      messages: [],
      loggingIn: false
    }
  },

  methods: {
    attempt: function (e) {
      e.preventDefault()
      var that = this
      that.loggingIn = true
      client({ path: 'login', entity: this.user }).then(
        function (response) {
          that.$dispatch('userHasFetchedToken', response.token)
          that.getUserData()
        },
        function (response) {
          that.messages = []
          if (response.status && response.status.code === 401) that.messages.push({type: 'danger', message: 'Sorry, you provided invalid credentials'})
          that.loggingIn = false
        }
      )
    },

    getUserData: function () {
      var that = this
      client({ path: '/users/me' }).then(
        function (response) {
          that.$dispatch('userHasLoggedIn', response.entity.user)
          that.$route.router.go('/auth/profile')
        },
        function (response) {
          console.log(response)
        }
      )
    }
  },

  route: {
    activate: function (transition) {
      this.$dispatch('userHasLoggedOut')
      transition.next()
    }
  }
}
</script>

