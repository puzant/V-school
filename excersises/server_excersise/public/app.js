
var app = angular.module("app", []);

app.controller("ctrl", function ($http, $scope) {

    $http.get('http://localhost:7000/bounty').then(function (res) {
        $scope.bounties = res.data;
        console.log(res.data);
    })

    $scope.add = function () {

        obj = {
            name: $scope.txt1,
            price: $scope.txt2,
            type: $scope.txt3,
            living: $scope.txt4
        }

        $http.post('http://localhost:7000/bounty', obj).then(function (res) {
            $http.get('http://localhost:7000/bounty').then(function (res) {
                $scope.bounties = res.data;
            })
        })
    }


    $scope.delete = function (x) {
        console.log(x)
        $http.delete('http://localhost:7000/bounty/' + x).then(function (res) {
            $http.get('http://localhost:7000/bounty').then(function (res) {
                $scope.bounties = res.data;
            })
        })
    }


})
