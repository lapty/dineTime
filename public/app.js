(function () {
    "use strict";

    angular.module('restaurantour',[
    "ngRoute",
    "ngCookies",
    "rests",
    "ui.bootstrap"
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: "views/main.html",
                controller: "restsController"
            })
            .otherwise({
                redirectTo: '/'
            });
    });


})();
