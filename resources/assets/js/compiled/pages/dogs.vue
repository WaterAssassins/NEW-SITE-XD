<template>
<nav-component></nav-component>
<div class="container app-screen">
	<!-- Tabs -->
	<div class="col-md-3">
		<div class="panel panel-default panel-flush">
			<div class="panel-heading">
				Dogs!
			</div>
			<div class="panel-body">
				<div class="app-tabs">
					<ul class="nav app-tabs-stacked">
						<li>
							<a v-link="{ path: '/dogs' }">
								<i class="fa fa-btn fa-fw fa-list"></i>&nbsp;Dog list</span>
							</a>
						</li>
						</li>
						<li>
							<a v-link="{ path: '/dogs/create' }">
								<i class="fa fa-btn fa-fw fa-heart"></i>&nbsp;Create one</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- Tab Panes -->
	<div class="col-md-9">
		<div class="tab-content">
			<div class="tab-pane">
				<div class="panel panel-default">
					<router-view></router-view>
				</div>
			</div><!-- End tab panel -->
		</div><!-- End tab content -->
	</div><!-- End tab panes col-md-9 -->
</div><!-- End container -->
<footer-component></footer-component>
</template>

