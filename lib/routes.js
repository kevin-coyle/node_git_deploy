var deployment = require('./deployment.js');
module.exports = function(app, config){

    app.post('/:code', function (req, res) {
        // if the request contains a secret code
        deployment.do(req,res);
    });
}