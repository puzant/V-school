var app = angular.module("app");

app.controller("homectrl", function($scope, $routeParams){
    $scope.data = "hello there";
    $scope.param = $routeParams.favoritemovie;
})