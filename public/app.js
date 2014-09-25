(function () {
    "use strict";

    angular.module('dinetime',[
    "ngRoute",
    "ngCookies",
    "rests",
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
