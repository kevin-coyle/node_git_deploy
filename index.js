var express = require('express'),
	app = express(),
	sys = require('sys'),
	exec = require('child_process').exec,
	child,
	config = require('./config.json'),
	path = config.path;

app.post('/:code', function (req, res) {
	if (req.params.code == config.secure_code) {
				  var child = exec("cd " + path + ";git pull origin master", function(error, stdout, stderr) {
				  	sys.print('stdout: ' + stdout);
			  		sys.print('stderr: ' + stderr);
			  		if (error !== null) {
			    		console.log('exec error: ' + error);
			    		res.send(stderr);
			  		} else {
			  			res.send(stdout);
			  		}
			  		
				  });

				
	} else {
		console.log("Invalid code");
	}
});

var server = app.listen(3080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});