(function () {
    "use strict";

    angular
        .module('rests', [
            "ngRoute",
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/userlist', {
                    templateUrl: 'views/admin/list.html',
                    controller: 'restsController'
                })
                .when('/rests/new', {
                    templateUrl: 'views/admin/create.html',
                    controller: 'restsController'
                })
                .when('/rests/:restId', {
                    templateUrl: 'views/admin/show.html',
                    controller: 'restsController'
                })
                .when('/rests/:restId/edit', {
                    templateUrl: 'views/admin/edit.html',
                    controller: 'restsController'
                })
                .when('/rests/:restId/editMenu', {
                    templateUrl: 'views/admin/editMenu.html',
                    controller: 'restsController'
                });
        });

})();
