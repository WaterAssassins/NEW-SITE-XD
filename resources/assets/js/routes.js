module.exports = {

    configRouter: function (router) {

        router.map({
            '/': {
                component: require('./compiled/pages/home.vue'),
            },
            '/auth': {
                component: require('./compiled/pages/auth.vue'),
                subRoutes: {
                    '/login': {
                        component: require('./compiled/pages/auth/login.vue'),
                        guest: true
                    },
                    '/register': {
                        component: require('./compiled/pages/auth/register.vue'),
                        guest: true
                    },
                    '/profile': {
                        component: require('./compiled/pages/auth/profile.vue'),
                        auth: true
                    },
                    '/logout': {
                        component: require('./compiled/pages/auth/logout.vue'),
                        auth: true
                    }
                }
            },
            '/dogs': {
                component: require('./compiled/pages/dogs.vue'),
                auth: true,
                subRoutes: {
                    '/': {
                        component: require('./compiled/pages/dogs/index.vue')
                    },
                    '/:id': {
                        component: require('./compiled/pages/dogs/show.vue')
                    },
                    '/create': {
                        component: require('./compiled/pages/dogs/create.vue')
                    }
                }
            },
            '/terms': {
                component: require('./compiled/pages/terms.vue')
            },
            '*': {
                component: require('./compiled/pages/404.vue')
            }
        })

        router.alias({
            '/auth': '/auth/login'
        })

        router.beforeEach(function (transition) {

            var token = localStorage.getItem('jwt-token')
            if (transition.to.auth) {
                if (!token || token === null) {
                    transition.redirect('/auth/login')
                }
            }
            if (transition.to.guest) {
                if (token) {
                    transition.redirect('/')
                }
            }
            transition.next()
        })
    }
}
