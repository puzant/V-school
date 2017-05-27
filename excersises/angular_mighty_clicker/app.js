var app = angular.module("app", []);

app.controller("ctrl", function ($scope, blueservice, redservice) {
    $scope.score1 = 10;
    $scope.score2 = 10;
    $scope.bluefunc = function () {
        $scope.score1 = blueservice.bleuInc($scope.score1);
        $scope.score2 = blueservice.redDec($scope.score2);
        if ($scope.score2 === 0) {
            $scope.score2 = redservice.reset();
        }
    }
    $scope.redfunc = function () {
        $scope.score2 = redservice.redInc($scope.score2);
        $scope.score1 = redservice.blueDec($scope.score1);
        if ($scope.score1 === 0) {
            $scope.score1 = blueservice.rest2();
        }
    }
})

app.service('blueservice', function () {
    this.bleuInc = function (x) {
        return x + 1;
    };
    this.redDec = function (z) {
        return z - 1;
    }
    this.rest2 = function () {
        return 100;
    }
})

app.service('redservice', function () {
    this.redInc = function (y) {
        return y + 1;
    };
    this.blueDec = function (d) {
        return d - 1;
    }
    this.reset = function () {
        return 100;
    }
})
