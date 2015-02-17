var deployment = require('./deployment.js');
module.exports = function(app, config){

    app.post('/:code', deployment.do);
}