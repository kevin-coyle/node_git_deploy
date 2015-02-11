#Simple Node Git Deployer

A very simple node application that responds to a POST request to a given URL and then runs a `git pull` at a configurable directory.
 
## Pre-requisites
- NodeJS
- Git

# Installation
1. Clone the repo onto your server
2  Copy config.json.sample to config.json and fill in the fields
3. Change the settings in config.json to somethings thats appropriate to your project. Ensure that you put in a unique secure code.


## Usage
1. Copy the config sample file to config.json.
2. Deploy the application to your server.
3. Run `node index.js`. Make sure that the user that runs the node script has permissions to read/write in the deployment directory
4. Set up your githook in the appropriate service.


##Notes
It would be a good idea to use node forever to keep the node server up.