var http = require('http'),
	fs = require('fs');

//sincronica
//var html = fs.readFileSync('./index.html');
//asincrona 



http.createServer(function(req , res) {
	var html = fs.readFile('./index.html', function(err, html){
	// body
		res.write(html);
		res.end();
	});


}).listen(8080);

