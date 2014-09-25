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
                $scope.userList = restsService.userList;

                $scope.addToList = function(index) {

                    $scope.userList.push();

                    console.log("adding to list");
                    console.log($scope.userList);
                    this.disabled = true;

                  }

            });

            $scope.createRest = function (newRest) {
                restsService.createRest(newRest);
                $location.path('/rests');
            };

            $scope.editRest = function (rest) {
                restsService.editRest(rest);
                $location.path('/rests');
            };

            $scope.deleteRest = function (id) {
                restsService.deleteRest(id);
                $location.path('/rests');
            }

            $scope.getSample = function () {

                var rests = $scope.rests;
                $scope.randomRest = _.sample(rests);
            }

            $scope.changeClass = function () {
                this.class = "disabled";
          }

        }]);
})();///END MODULE
