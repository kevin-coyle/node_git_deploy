var forever = require('forever');

forever.startDaemon('index.js', {
	max: 3,
	silent: true,
	args: []
});