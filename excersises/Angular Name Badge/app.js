var app = angular.module('myapp', []);

app.controller('myctrl', function ($scope) {
    $scope.fname = "";
    $scope.lname = "";
    $scope.email = "";
    $scope.birth = "";
    $scope.phone = "";
    $scope.food = "";
    $scope.comment= "";

    $scope.makeForm = function () {
        $scope.arr = [];

        $scope.obj = {
            fname: $scope.fname,
            lname: $scope.lname,
            email: $scope.email,
            birth: $scope.birth,
            phone: $scope.phone,
            food: $scope.food,
            comment: $scope.comment
        }

        $scope.arr.push($scope.obj);
        document.getElementById('myform').reset();


    }
})