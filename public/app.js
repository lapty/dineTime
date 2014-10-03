(function () {
    "use strict";

    angular.module('dinetime',[
    "ngRoute",
    "ngCookies",
    "rests",
    "ngAnimate",
    "ui.bootstrap",
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: "views/main.html",
                controller: "restsController"
            })
            .when('/admin',{
                templateUrl: "views/adminmain.html",
                controller: "restsController"
            })
            .otherwise({
                redirectTo: '/'
            });
    });


})();
