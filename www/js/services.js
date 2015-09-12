angular.module('bucketList.services', [])
    .factory('API', function ($rootScope, $http, $ionicLoading, $window) {
       var base = "http://hourhive.herokuapp.com";
        $rootScope.show = function (text) {
            $rootScope.loading = $ionicLoading.show({
                content: text ? text : 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        };

        $rootScope.hide = function () {
            $ionicLoading.hide();
        };

        $rootScope.logout = function () {
            $rootScope.setToken("");
            $window.location.href = '#/auth/signin';
        };

        $rootScope.notify =function(text){
            $rootScope.show(text);
            $window.setTimeout(function () {
              $rootScope.hide();
            }, 1999);
        };

        $rootScope.doRefresh = function (tab) {
            if(tab == 1)
                $rootScope.$broadcast('fetchAll');
            else if(tab == 2)
                $rootScope.$broadcast('fetchMy');
            else
                $rootScope.$broadcast('fetchCompleted');
            
            $rootScope.$broadcast('scroll.refreshComplete');
        };

        $rootScope.setToken = function (token) {
            return $window.localStorage.token = token;
        }

        $rootScope.getToken = function () {
            return $window.localStorage.token;
        }

        $rootScope.isSessionActive = function () {
            return $window.localStorage.token ? true : false;
        }

        return {
            signin: function (form) {
                return $http.post(base+'/api/v1/bucketList/auth/login', form);

            },
            signinStaff: function (form) {
                return $http.post(base+'/api/v1/bucketList/org/auth/login', form);

            },
            signup: function (form) {
                return $http.post(base+'/api/v1/bucketList/auth/register', form);

            },
            signupOrg: function (form) {
                return $http.post(base+'/api/v1/bucketList/org/auth/register', form);

            },
            getAll: function (session) {
                return $http.get(base+'/api/v1/bucketList/data/list', {
                    method: 'GET',
                    params: {
                        token: session
                    }
                });
            },
            getYourList: function(session){
                return $http.get(base+'/api/v1/bucketList/org/data/list',{
                    method: 'GET',
                    params: {
                        token: session
                    }
                })
            },
            getOne: function (id, email) {
                return $http.get(base+'/api/v1/bucketList/data/item/' + id, {
                    method: 'GET',
                    params: {
                        token: email
                    }
                });
            },
            saveItem: function (form, email) {
                return $http.post(base+'/api/v1/bucketList/data/item', form, {
                    method: 'POST',
                    params: {
                        token: email
                    }
                });
            },
            putItem: function (id, form, email) {
                return $http.put(base+'/api/v1/bucketList/data/item/' + id, form, {
                    method: 'PUT',
                    params: {
                        token: email
                    }
                });
            },
            deleteItem: function (id, email) {
                return $http.delete(base+'/api/v1/bucketList/data/item/' + id, {
                    method: 'DELETE',
                    params: {
                        token: email
                    }
                });
            },
            getappUser: function (session) {
                return $http.get(base+'/api/v1/bucketList/data/user', {
                    method: 'GET',
                    params: {
                        token: session
                    }
                })
            },
            getActivity: function (session) {
                return $http.get(base+'/api/v1/bucketList/data/activity',{
                    method: 'GET',
                    params: {
                        token: session
                    }
                })
            }

        }
    });
