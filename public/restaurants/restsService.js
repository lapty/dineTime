(function () {
    "use strict";

    angular
        .module('rests')
        .factory('restsService', ['$http', '$rootScope', function ($http, $rootScope) {

            var userList = [];
            var restList = "api/collections/restaurants/";



            ////////Restaurant services
            function getRests() {

                return $http.get(restList);
            }

            function getRest(restId) {
                return $http.get(restList + restId);
            }

            function createRest(newRest) {
                $http.post(restList, newRest).then(function (res) {
                    $rootScope.$broadcast("rest:added");
                });
            }

            function editRest(rest) {
                $http.put(restList + rest._id, rest).then(function (res)              {
                    $rootScope.$broadcast("rest:updated");
                });

            }

            function deleteRest(restId) {
                $http.delete(restList + restId).then(function (res) {
                    $rootScope.$broadcast("rest:deleted");
                });
            }

            ///////

            return {
                userList: userList,
                getRests: getRests,
                getRest: getRest,
                createRest: createRest,
                editRest: editRest,
                deleteRest: deleteRest,
                /////

            };

        }]);
})();
