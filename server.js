const	http = require('http'),
		express = require('express'),
		app     = express(),
    	morgan  = require('morgan'),
    	url 	= require('url'),
    	port = 8080;
    
Object.assign=require('object-assign');

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'));

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " "+ q.month;
  	res.end(txt);
}).listen(port);

console.log("Servidor inicado en puerto: %s",port);