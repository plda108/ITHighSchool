var http = require('http');

http.createServer(function (req, res){
	res.writeHead(200, {'content-type' : 'text/plain'});
	res.end('younglok homepage\n');
}).listen(8000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8000/');