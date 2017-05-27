var app = angular.module("app");

app.service("cartoonservice", function () {
    var self = this;
            this.arr = [];
    this.myfunc = function (imageUrl, imageTitle, imagedesc) {
        var obj = {
            url: imageUrl,
            title: imageTitle,
            desc: imagedesc
        };
        self.arr.push(obj);

    }
})