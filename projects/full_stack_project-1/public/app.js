function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "ngComp/banner.html"
        })
        .when("/home", {
            templateUrl: "ngComp/home.html"
        })
        .when("/exercises", {
            controller: "myCtrl",
            templateUrl: "ngComp/exercises.html"
        })
        .when('/Fittness_info', {
        controller: "ctrl",
        templateUrl: 'ngComp/Fittness_info/index.html'
    })
});
