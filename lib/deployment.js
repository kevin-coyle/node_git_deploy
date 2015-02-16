var sys = require('sys'),
    exec = require('child_process').exec,
    config = require('./../config.json'),
    path = config.path,
    origin = config.remote_name,
    branch = config.branch;

var deployment = {
    execTaskList : [
        "cd " + path + "&& git pull " + origin + " " + branch
    ],
    execTask : function(execArg){
        exec(execArg, function(error, stdout, stderr) {
            sys.print('stdout: ' + stdout);
            sys.print('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
                return (stderr);
            } else {
                return(stdout);
            }
        });
    }
}

module.exports = deployment;