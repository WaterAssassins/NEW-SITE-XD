<template>
<nav-component></nav-component>
<!--<div class="container app-screen">-->
	<!-- Tabs -->
	<!--<div class="col-md-3">
		<div class="panel panel-default panel-flush">
			<div class="panel-heading">
				Home
			</div>
			<div class="panel-body">
				<div class="app-tabs">
					<ul class="nav app-tabs-stacked">
						<li v-if="! $root.authenticated">
							<a v-link="{ path: '/auth/login' }">
								<i class="fa fa-btn fa-fw fa-sign-in"></i>&nbsp;Sign in</span>
							</a>
						</li>
						<li v-if="! $root.authenticated">
							<a v-link="{ path: '/auth/register' }">
								<i class="fa fa-btn fa-fw fa-chevron-circle-up"></i>&nbsp;Register</span>
							</a>
						</li>
						<li v-if="$root.authenticated">
							<a v-link="{ path: '/auth/profile' }">
								<i class="fa fa-btn fa-fw fa-user"></i>&nbsp;My Profile</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>-->

	<router-view></router-view>

<!--</div>&lt;!&ndash; End container &ndash;&gt;-->
<footer-component></footer-component></template>

