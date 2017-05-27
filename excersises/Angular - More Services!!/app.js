var app = angular.module("app", [])

app.controller("ctrl", function($scope, cartoonservice){
    $scope.arr = cartoonservice.arr;
 $scope.add = function(imageUrl, imageTitle, imagedesc) {
   $scope.print = cartoonservice.myfunc(imageUrl, imageTitle, imagedesc);
 }
});