var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var config = {
    "path": "/tmp/fake",
    "secure_code": "abc",
    "remote_name": "origin",
    "branch": "master",
    "listen_port": 3080
};
var deployment = require('../lib/deployment')(config);

var deploymentAction = deployment.do;

describe("Routes", function() {
    describe("POST Deployment", function() {
        it("should respond when the code is correct", function(){
            var req,res,spy;

            req = res = {};
            //set a blank object for the params too;
            req.params = {};
            req.params.code = config.secure_code;
            spy = res.send = sinon.spy();

            deploymentAction(req, res);
            expect(spy.calledOnce).to.equal(true);
        });
        it("should give error when incorrect code", function() {
            var req,res,spy;

            req = res = {};
            //set a blank object for the params too;
            req.params = {};
            //send an invalid code
            req.params.code = config.secure_code + "123";
            spy = res.send = sinon.spy();

            deploymentAction(req, res);
            expect(spy.calledWith("Invalid authentication code")).to.equal(true);
        })
    });
});