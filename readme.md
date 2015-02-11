#Simple Node Git Deployer

A very simple node application that responds to a POST request to a given URL and then runs a `git pull` at a configurable directory.

This should be a cross platform tool and has been tested to work in both OS X and Linux (Ubuntu and CentOS).

## Pre-requisites
- NodeJS
- Git

# Installation and Usage
1. Clone the repo onto your server
2. Copy config.json.sample to config.json and fill in the fields
3. Change the settings in config.json to somethings thats appropriate to your project. Ensure that you put in a unique secure code.
4. Run `npm install`
5. Run `node index.js`

##Notes
It would be a good idea to use node forever to keep the node server up.

## Roadmap
- Use nodegit library instead of shell commands