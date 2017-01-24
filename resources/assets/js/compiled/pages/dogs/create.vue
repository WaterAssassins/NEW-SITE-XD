<template>
<div class="panel-heading">
	Make a dog!
</div>
<div class="panel-body">
	<div id="alerts" v-if="messages.length > 0">
		<div v-for="message in messages" class="alert alert-{{ message.type }} alert-dismissible" role="alert">
			{{ message.message }}
		</div>
	</div>
	<form class="form-horizontal" role="form" v-on:submit="createDog">
		<div class="form-group">
			<label for="name" class="col-sm-2 col-sm-offset-1 control-label">Name your dog</label>
			<div class="col-sm-5">
				<input class="form-control" required="required" name="name" type="text" v-model="dog.name" id="nameInput">
			</div>
		</div>
		<div class="form-group">
			<label for="age" class="col-sm-2 col-sm-offset-1 control-label">What's the age?</label>
			<div class="col-sm-5">
				<input class="form-control" required="required" name="age" type="text" v-model="dog.age">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-4 col-sm-offset-3">
				<button type="submit" class="btn btn-primary" :disabled="creating">
					<i class="fa fa-btn fa-save"></i>Make the dog!
				</button>
			</div>
		</div>
	</form>
</div></template>

<script>
module.exports = {
  data: function () {
    return {
      dog: {
        name: '',
        age: ''
      },
      messages: [],
      creating: false
    }
  },

  methods: {
    createDog: function (e) {
      e.preventDefault()
      var that = this
      that.creating = true
      client({path: 'dogs', entity: this.dog}).then(
        function (response, status) {
          that.dog.name = ''
          that.dog.age = ''
          that.messages = [ {type: 'success', message: 'Woof woof! Your dog was created'} ]
          Vue.nextTick(function () {
            document.getElementById('nameInput').focus()
          })
          that.creating = false
        },
        function (response, status) {
          that.messages = []
          for (var key in response.entity) {
            that.messages.push({type: 'danger', message: response.entity[key]})
            that.creating = false
          }
        }
      )
    }
  }
}
</script>

