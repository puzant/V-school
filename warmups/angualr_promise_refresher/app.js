var app = angular.module("app", []);

app.controller("ctrl", function($scope, getData){
    $scope.click = function() {
        getData.myfunc().then(function(res) {
            $scope.data = res.data;
            console.log($scope.data);
        }, function(err){
            console.log(err);
        })
        
    }
});


app.service("getData", function($http){
    this.myfunc = function(){
        return $http.get("http://swapi.co/api/people/");
    }
}); 



