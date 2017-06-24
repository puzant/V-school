var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

app.use(bodyParser.json());


app.use('/api/thing', require('./thing_routes/thing-routing'));

mongoose.connect('mongodb://localhost/things_schema/schema', function(){
    console.log('connected to the database');
})

app.listen(8000, function(){
    console.log("server is online on port 8000");
})