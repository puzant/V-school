var http = require('http');
var port = 3000;

var requestHandler = function(request, response) {
    console.log(request.url);
    response.end("hello nodeJs server");
}

var server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err) {
        return console.log('something bad happend', err);
    }
    console.log(`server is listining on port ${port}`)
});