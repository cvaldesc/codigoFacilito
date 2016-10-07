var http = require('http');

var manejador = function(require, response) {
	// body...
	console.log("recibido una nueva peticion");
	response.end("hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);