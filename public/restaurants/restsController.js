(function () {
    "use strict";

    angular
    .module('rests')
    .controller('restsController', ['$scope', 'restsService', '$location', '$routeParams', function ($scope, restsService, $location, $routeParams, $modal) {

        restsService.getRests().success(function (rests) {
            $scope.rests = rests;
        });

        restsService.getRest($routeParams.restId).success(function (rest) {
            $scope.rest = rest;

        });

        $scope.createRest = function (newRest) {
            restsService.createRest({
                name:newRest.name,
                image:newRest.image,
                number:newRest.number,
                address:newRest.address,
                site:newRest.site,
                content:newRest.content,
                menu:[]
            })
            $location.path("/rests/");

        };

        $scope.editRest = function (rest) {
            restsService.editRest(rest);
            $location.path('/rests/' + $routeParams.restId);
        };

        $scope.deleteRest = function (id) {
            restsService.deleteRest(id);
            $location.path('/rests');
        };

        $scope.getSample = function () {

            var rests = $scope.rests;
            $scope.randomRest = _.sample(rests);
        };

        $scope.changeClass = function () {
            this.class = "disabled";
        };

        $scope.rests = restsService.getRests();
        $scope.userList = restsService.userList;
        $scope.addToList = function(index) {

            $scope.userList.push($scope.rests[index].name);
            console.log(index);
            console.log($scope.userList.length)
            console.log($scope.rests[index]);

        };

        $scope.addItem = function(item){
            restsService.getRest($routeParams.restId).success(function(rest) {
                $scope.rest = rest;
                $scope.rest.menu.push({

                    name: item.name,
                    description: item.description,
                    price: item.price,
                    vote: 0

                });
                restsService.editRest($scope.rest);
            });
            $scope.item = {};
        };

        $scope.deleteItem = function (index) {
            $scope.rest.menu.splice(index, 1);
        };


    }]);
})();///END MODULE
