#Simple Node Git Deployer

## Pre-requisites
- NodeJS
- Git

# Installation
1. Clone the repo onto your server
2  Copy config.json.sample to config.json and fill in the fields
3. Run `node index.js`. Make sure that the user that runs the node script has permissions to read/write in the deployment directory

## Usage
1. Copy the config sample file to config.json.
2. Deploy and run the application on your server.
3. Set up your githook in the appropriate service.


##Notes
It would be a good idea to use node forever to keep the node server up.