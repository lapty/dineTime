(function () {
    "use strict";

    angular
        .module('rests')
        .factory('restsService', ['$http', '$rootScope', function ($http, $rootScope) {

            var userList = [];

            // restaurant services
            function getRests() {

                return $http.get("api/collections/demotiy");
            }

            function getRest(restId) {
                return $http.get("api/collections/demotiy/" + restId);
            }

            function createRest(newRest) {
                $http.post("api/collections/demotiy", newRest).then(function (res) {
                    $rootScope.$broadcast("rest:added");
                });
            }

            function editRest(rest) {
                $http.put("api/collections/demotiy/" + rest._id, rest).then(function (res)              {
                    $rootScope.$broadcast("rest:updated");
                });

            }

            function deleteRest(restId) {
                $http.delete("api/collections/demotiy/" + restId).then(function (res) {
                    $rootScope.$broadcast("rest:deleted");
                });
            }


            return {
                getRests: getRests,
                getRest: getRest,
                createRest: createRest,
                editRest: editRest,
                deleteRest: deleteRest,
                userList: userList,
            };

        }]);
})();
