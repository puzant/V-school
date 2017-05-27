var app = angular.module("app", []);

app.controller("ctrl", function ($scope, $http) {


    $scope.todoItems = [];

    $http.get("https://api.vschool.io/puzant/todo/").then(function (res) {
        $scope.todoItems = res.data;
        $scope.todoItems.map(function (item) {
            item.btn = "newbtn";
            return item;
        })
    });


    $scope.addItem = function (item) {
        $http.post("https://api.vschool.io/puzant/todo/", item).then(function (res) {
            $http.get("https://api.vschool.io/puzant/todo/").then(function (res) {
                $scope.todoItems = res.data;
                console.log($scope.todoItems);

            })
        }, function (res) {
            console.log(res);
        });
    };

    $scope.deleteItem = function (x) {
        $http.delete("https://api.vschool.io/puzant/todo/" + x._id).then(function (res) {
            $http.get("https://api.vschool.io/puzant/todo/").then(function (res) {
                console.log(res);
                $scope.todoItems = res.data;
            })
        }, function (res) {
            console.log(res);
        })
    }

});


function myFunction() {
//var modal = document.getElementById('myModal');
//
//// Get the button that opens the modal
//var btn = document.getElementById("BTN");
//
//// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
//
//// When the user clicks on the button, open the modal 
//btn.onclick = function() {
//    modal.style.display = "block";
//}
//
//// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//    modal.style.display = "none";
//}
//
//// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
// }
    alert("hello");
}

function add() {
    document.getElementById("myform").reset();
}
