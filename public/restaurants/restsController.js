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
            $location.path("/admin/");

        };

        $scope.editRest = function (rest) {
            restsService.editRest(rest);
            $location.path('/rests/' + $routeParams.restId);
        };
        $scope.vote = function (rest) {
            restsService.editRest(rest);
        };

        $scope.deleteRest = function (id) {
            restsService.deleteRest(id);
            $location.path('/rests');
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

        $scope.changeClass = function () {
            this.class = "disabled";
        };


        $scope.addToList = function(rest) {

            $scope.userList.push(rest);

            console.log($scope.userList);
        };

        $scope.addItem = function(item){
            restsService.getRest($routeParams.restId).success(function(rest) {
                $scope.rest = rest;
                $scope.rest.menu.push({

                    name: item.name,
                    description: item.description,
                    price: parseInt(item.price),
                    vote: 0

                });
                restsService.editRest($scope.rest);
            });
            $scope.item = {};
        };

        $scope.deleteItem = function ($index) {
            $scope.rest.menu.splice($index, 1);
        };

        $scope.isCollapsed = true;
        $scope.menuCollapse = true;

        $scope.login = function (username, password) {
            if ( username === 'admin' && password === 'admin') {
                $location.path('/admin');
            } else {
                $scope.loginError = "Invalid username/password.";
            };
        };

        ///Click scroll
        $(function() {
            $(".jumbotron").on("click", "#scrollButt", function() {
                $('html, body').animate({
                    scrollTop: $("#scroll").offset().top }, 750);  });
                });


        ///Alerts
        $scope.addAlert = function() {
            $('#alert').html('<div class="alert"><span>Added restaurant to list! Check your dine list <a href="#/userlist">[here]</a>.</span></div>')
            setTimeout(function() {
                $("div.alert").fadeOut();
            }, 3000);
        }
        ///Modal
        $scope.hideModal = function () {
            $('#ranModal').modal('hide')
        }

        $scope.click = function(){
            $scope.active = true;

}


    }])
        })();///END MODULE
