#Simple Node Git Deployer
[![Build Status](https://travis-ci.org/coyledesign/node_git_deploy.svg?branch=develop)](https://travis-ci.org/coyledesign/node_git_deploy)

A very simple node application that responds to a POST request to a given URL and then runs a `git pull` at a configurable directory.

This should be a cross platform tool and has been tested to work in both OS X and Linux (Ubuntu and CentOS).

### Pre-requisites
- NodeJS
- Git
- forever (if you want to deamonize the process)

## Installation and Usage
1. Copy the config.json.sample to config.json and edit the config file
```
    {
      "path": "/var/www",
      "secure_code": "ajsodiasdasjdiaosdja9349023jdsdjsddsd",
      "listen_port": 3080
    }
```

__path__

This is the path of your local git repository.

__secure_code__

This is the secure code that us going to be sent by your github webjook post request.

__listen_port__

This is the port that node will be listening to for your ghub post request.

2. Run `npm install`
3. Deploy and run the application on your server by running either:

    `node index.js`

    or 

    `node forever.js` (to deamonize the process with forever)

    _Make sure that the user that runs the node script has permissions to read/write in the deployment directory_

4. Set up your webhook to POST to:

    http:// _your domain_ : _listen_port_ / _secure_code_


## Roadmap
- [ ] Use nodegit library instead of shell commands
- [x] Add TravisCI 
- [x] Add testing
