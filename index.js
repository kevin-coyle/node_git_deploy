var fs = require('fs');
if (!fs.existsSync('./config.json')) {
	console.error("No config file found");
    process.exit(1);
}
var express = require('express'),
	app = express(),
	sys = require('sys'),
	exec = require('child_process').exec,
	child,
	config = require('./config.json'),
	path = config.path;
	origin = config.origin;
	branch = config.branch;
	listen_port = config.listen_port;



app.post('/:code', function (req, res) {

	// add all tasks to be triggered into the array
	// below as an anon function.
	var tasks = [
		function(){
			// git pull function
			execTask.runner("cd " + path + ";git pull" + origin + branch);
		},
		function(){
			// register new tasks here. e.g
			execTask("cd " + path + ";touch README.md");
		}
	]

	var execTask = function(execArg){
		exec(execArg, function(error, stdout, stderr) {
			sys.print('stdout: ' + stdout);
			sys.print('stderr: ' + stderr);
			if (error !== null) {
				console.log('exec error: ' + error);
				res.send(stderr);
			} else {
				res.send(stdout);
			}
		});
	}

	// if the request contains a secret code
	if(req.params.code){
		// if the request is authenticated 
		if (req.params.code == config.secure_code) {
			// run the tasks
			tasks.forEach(function(task) {
				task();
			});
		} else {
			res.send("Invalid authentication code");
		}
	}else{
		res.send("No authentication code send");
	}



var server = app.listen(listen_port, function () {
	var host = server.address().address
	var port = server.address().port
});
