const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');


app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
    console.log('server is active on port 3000');
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/quotes', (req, res) => {
    console.log(req.body);
})