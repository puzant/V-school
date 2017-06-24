var app = angular.module("app", []);

app.controller("ctrl", function($scope){
    $scope.name = "james";
    $scope.chessburger = ['meat', 'tomato', 'mastured', 'pickes', 'potato', 'cheese', 'mayonesses'];
    $scope.mejadra = ['onion', 'oil', 'lentil', 'rice'];
})

app.directive("showRec", function(){
    return {
        restrict: "AECM",
        templateUrl: "foodREC.html",
        scope: {
            'food': '=myinfo'
        },
    };
});

