#Simple Node Git Deployer

A very simple node application that responds to a POST request to a given URL and then runs a `git pull` at a configurable directory.

This should be a cross platform tool and has been tested to work in both OS X and Linux (Ubuntu and CentOS).

## Pre-requisites
- NodeJS
- Git
- forever (if you want to deamonize the process)

# Installation and Usage
1. Clone the repo onto your server
<<<<<<< HEAD
2  Copy config.json.sample to config.json and fill in the fields
3. Run `node index.js`. Make sure that the user that runs the node script has permissions to read/write in the deployment directory

## Usage
1. Edit the config file

    {
      "path": "/var/www",
      "secure_code": "ajsodiasdasjdiaosdja9349023jdsdjsddsd",
      "listen_port": 3080
    }


__path__
This is the path of your local git repository.

__secure_code__
This is the secure code that us going to be sent by your github webjook post request.

__listen_port__
This is the port that node will be listening to for your ghub post request.

2. Deploy and run the application on your server by running either:

`node index.js`

or 

`node forever.js` (to deamonize the process with forever)

3. Set up your webhook to post to:

http:// _your domain_ : _listen_port_ / _secure_code_
=======
2. Copy config.json.sample to config.json and fill in the fields
3. Change the settings in config.json to somethings thats appropriate to your project. Ensure that you put in a unique secure code.
4. Run `npm install`
5. Run `node index.js`

##Notes
It would be a good idea to use node forever to keep the node server up.

## Roadmap
- Use nodegit library instead of shell commands
>>>>>>> 1feb42d62f452d85323d3bc9adb127ce4c96b5fa
