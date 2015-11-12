var config = require('./config.json');
if ("true" === config.test) {
	module.exports = require('./mock.js');
} else{
	module.exports = require('./ghapi.js');
}