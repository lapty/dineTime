(function () {
    "use strict";

    angular
    .module('rests')
    .controller('restsController', ['$scope', 'restsService', '$location', '$routeParams', function ($scope, restsService, $location, $routeParams, $modal, $modalInstance) {

        restsService.getRests().success(function (rests) {
            $scope.rests = rests;
        });

        restsService.getRest($routeParams.restId).success(function (rest) {
            $scope.rest = rest;
        });


        $scope.userList = restsService.userList;

        var phrases = [" sounds good to me!", "? Yes, please.", " is a great idea!", " is a good choice.", "? Let's do it!", " sounds tasty!", "? I could go for that.", " is something I can go for.", " is a smart decision.", "? You can't go wrong.", " would be wonderful."];

        $scope.menuIndex = +"";

        $scope.createRest = function (newRest) {
            restsService.createRest({
                name:newRest.name,
                image:newRest.image,
                content:newRest.content,
                menus:[]
            })
            $location.path("/admin/");

        };

        $scope.editRest = function (rest) {
            restsService.editRest(rest);
            // $location.path('/rests/' + $routeParams.restId);
        };
        

        $scope.deleteRest = function (id) {
            restsService.deleteRest(id);
            $location.path('/admin');
        };
        $scope.getSample = function () {

            var rests = $scope.rests;
            $scope.randomRest = _.sample(rests);
            $scope.randomPhrase = _.sample(phrases);
        };

        $scope.getSampleList = function () {

            var userList = $scope.userList;
            $scope.randomRest = _.sample(userList);
            $scope.randomPhrase = _.sample(phrases);
        };

        $scope.addToList = function(rest) {

            $scope.userList.push(rest);

            console.log($scope.userList);
        };

        $scope.addMenu = function (menu) {
            restsService.getRest($routeParams.restId).success(function(rest) {
                $scope.rest = rest;

                var newMenu = {
                    type: menu.type,
                    menu:[],
                };
                $scope.rest.menus.push(newMenu);
                restsService.editRest($scope.rest);
            });
            $scope.menus = {};
        }

        $scope.addItem = function (item) {
            restsService.getRest($routeParams.restId).success(function(rest) {
                $scope.rest = rest;

                var menuItem = {
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    vote: 0
                };
                console.log($scope.menuIndex);
                $scope.rest.menus[+$scope.menuIndex].menu.push(menuItem);
                restsService.editRest($scope.rest);
            });
            $scope.menu = {};
        }

        $scope.deleteMenu = function ($index) {
            $scope.rest.menus.splice($index, 1);
        };

        $scope.deleteItem = function ($index) {
            $scope.rest.menus[$scope.menuIndex].menu.splice($index, 1);
        };

                ///disable vote after voting
                $scope.changeClass = function () {
                    this.class = "disabled";
                };


                ///Click scroll
                $(function() {
                    $(".jumbotron").on("click", "#scrollButt", function() {
                        $('html, body').animate({
                            scrollTop: $("#scroll").offset().top }, 750);  });
                        });


                ///Alerts
                $scope.addAlert = function() {
                    $('#alert').html('<a href="#/userlist"><div class="alert"><span>Added restaurant to dine list! Check it out! </span></div></a>')
                    setTimeout(function() {
                        $("div.alert").fadeOut();
                    }, 3000);
                }
                ///Modal
                $scope.hideModal = function () {
                    $('#ranModal').modal('hide')
                }

                ////"user authentication"
                $scope.login = function (username, password) {
                    if ( username === 'admin' && password === 'admin') {
                        $location.path('/admin');
                    } else {
                        $scope.loginError = "Invalid username/password.";
                    };
                };

                ///side-menu start collapsed
                $scope.isCollapsed = true;
                $scope.isCollapse = true;
                $scope.menuCollapse = true;


            }])
        })();///END MODULE
