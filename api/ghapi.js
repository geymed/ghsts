var request = require('request');
var Q = require('q');
var statusApi = module.exports;

statusApi.status = function () {
	return ghStatusReq('status');
}

statusApi.messages = function () {
	return ghStatusReq('messages');
}

function ghStatusReq (type) {
	var deferred = Q.defer();
	request('https://status.github.com/api/'+type+'.json', 
		function (error, response, body) {
			if (error) {
				deferred.reject(error);
			} else {
				var b = JSON.parse(body);
				deferred.resolve(b);
			}
		}
	);
	return deferred.promise;
}