var deployment = require('./deployment.js');
module.exports = function(app, config){

    app.post('/:code', function (req, res) {
        // if the request contains a secret code
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
    });
}