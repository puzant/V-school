var app = angular.module("app", ["ngRoute"])

.config(function($routeProvider){
    $routeProvider
      .when("/home", {
        controller: "homectrl",
        templateUrl: "comp/home.html"
    })
});