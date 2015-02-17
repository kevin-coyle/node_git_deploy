module.exports = function(config) {
    var sys = require('sys'),
        exec = require('child_process').exec,
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
        },
        do : function(req,res) {
            if(req.params.code){
                // if the request is authenticated
                if (req.params.code == config.secure_code) {
                    // run the tasks
                    deployment.execTaskList.forEach( function(task){
                        res.send(deployment.execTask(task));
                    });
                } else {
                    res.send("Invalid authentication code");
                }
            }else{
                res.send("No authentication code send");
            }
        }
    }
    return deployment;
};