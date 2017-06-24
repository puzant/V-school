var app = angular.module("app");

app.controller("ctrl", function($scope, $http){
  $http.get('https://wger.de/api/v2/muscle/').then(function(res){
    console.log(res.data);
    $scope.results  = res.data.results;
  })

 $http.get('https://wger.de/api/v2/exercisecategory/').then(function(res){
   $scope.results3 = res.data.results;
 })

$http.get('https://wger.de/api/v2/equipment/').then(function(res){
  $scope.results4 = res.data.results;
})

$scope.search = function(x) {
  console.log(x.name);
}

})
