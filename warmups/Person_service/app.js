var app = angular.module("app", []);

app.service("nameService", function(){
   this.name = "";
    this.setName = function(newName) {
        this.name = newName;
    };
    this.deletName = function(newName) {
        this.name = "";
    };
});

app.controller("mainCtrl", function ($scope, nameService){
  $scope.name = nameService.name;
    $scope.save = function() {
        nameService.setName($scope.userText);
        $scope.name = nameService.name;
    }
    
 $scope.delete = function() {
     nameService.deletName($scope.userText);
     $scope.name = nameService.name;
 }
})



