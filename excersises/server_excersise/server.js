var express = require('express');
var bodyPareser = require('body-parser');
var path = require('path');

var app = express();


app.use(bodyPareser.json());

app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));


app.use('/bounty', require('./routes/bounty'));

app.listen(7000, function() {
    console.log('server is awake and he is ready to serve');
})
