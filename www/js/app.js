angular.module('bucketList', ['ionic', 'bucketList.controllers', 'bucketList.services','ngCordova'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('auth', {
                url: "/auth",
                abstract: true,
                templateUrl: "templates/auth.html"
            })
            .state('auth.signin', {
                url: '/signin',
                views: {
                    'auth-signin': {
                        templateUrl: 'templates/auth-signin.html',
                        controller: 'SignInCtrl'
                    }
                }
            })
            .state('auth.signinOrg', {
                url: '/signinOrg',
                views: {
                    'auth-signinOrg': {
                        templateUrl: 'templates/auth-signinOrg.html',
                        controller: 'SignInCtrl'
                    }
                }
            })
            .state('auth.signup', {
                url: '/signup',
                views: {
                    'auth-signup': {
                        templateUrl: 'templates/auth-signup.html',
                        controller: 'SignUpCtrl'
                    }
                }
            })
            .state('auth.signupOrg', {
                url: '/signupOrg',
                views: {
                    'auth-signupOrg': {
                        templateUrl: 'templates/auth-signupOrg.html',
                        controller: 'SignUpCtrl'
                    }
                }
            })
            .state('bucket', {
                url: "/bucket",
                abstract: true,
                templateUrl: "templates/bucket.html"
            })

            .state('bucket.list', {
                url: '/list',
                views: {
                    'bucket-list': {
                        templateUrl: 'templates/bucket-list.html',
                        controller: 'allListCtrl'
                    }
                }
            })
            .state('bucket.completed', {
                url: '/completed',
                views: {
                    'bucket-completed': {
                        templateUrl: 'templates/bucket-completed.html',
                        controller: 'completedCtrl'
                    }
                }
            })
            .state('bucket.myprofile', {
                url: '/myprofile',
                views: {
                    'bucket-profile': {
                        templateUrl: 'templates/bucket-myprofile.html',
                        controller: 'myProfileCtrl'
                    }
                }
            })
            .state('bucket.edit', {
                url: '/edit',
                views: {
                    'bucket-edit': {
                        templateUrl: 'templates/bucket-edit.html',
                        controller: 'editProfileCtrl'
                    }
                }
            })
            .state('org', {
                url: "/org",
                abstract: true,
                templateUrl: "templates/org.html"
            })
            .state('org.list', {
                url: '/list',
                views: {
                    'org-list': {
                        templateUrl: 'templates/org-list.html',
                        controller: 'myListCtrl'
                    }
                }
            })
            .state('org.edit', {
                url: '/edit',
                views: {
                    'org-edit': {
                        templateUrl: 'templates/org-edit.html',
                        controller: 'completedCtrl'
                    }
                }
            })
        $urlRouterProvider.otherwise('/auth/signin');
    });