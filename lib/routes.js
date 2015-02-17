
module.exports = function(app, config){
    var deployment = require('./deployment.js')(config);
    app.post('/:code', deployment.do);
}