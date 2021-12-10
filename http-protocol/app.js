var http = require('http');


http.createServer(function(req, res){
    res.end("Hello! nodemon test")
}).listen(8081)

console.log('Server Running!')