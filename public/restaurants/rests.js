(function () {
    "use strict";

    angular
        .module('rests', [
            "ngRoute",
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/userlist', {
                    templateUrl: 'restaurants/views/list.html',
                    controller: 'restsController'
                })
                .when('/rests/new', {
                    templateUrl: 'restaurants/views/create.html',
                    controller: 'restsController'
                })
                .when('/rests/:restId', {
                    templateUrl: 'restaurants/views/show.html',
                    controller: 'restsController'
                })
                .when('/rests/:restId/edit', {
                    templateUrl: 'restaurants/views/edit.html',
                    controller: 'restsController'
                })
                .when('/rests/:restId/editMenu', {
                    templateUrl: 'restaurants/views/editMenu.html',
                    controller: 'restsController'
                });
        });

})();
