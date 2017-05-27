var app = angular.module("app", []);

app.controller("ctrl", function ($scope, $http) {
    $scope.translate = function () {

        var config = {
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'

            }
        }
        $http.get("https://yoda.p.mashape.com/yoda?sentence=" + $scope.text, config).then(function(res){
            console.log(res.data);
            $scope.message = res.data;
        });

    }
})
