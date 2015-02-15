var fs = require('fs');
if (!fs.existsSync('./config.json')) {
	console.error("No config file found");
    process.exit(1);
}
var express = require('express'),
	app = express(),
	config = require('./config.json'),
	routes = require('./lib/routes')(app,config),
	listen_port = config.listen_port;

var server = app.listen(listen_port, function () {
	var host = server.address().address
	var port = server.address().port
});