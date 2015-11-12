var Q = require('q');
var statusApi = module.exports;
statusApi.status = function () {
	return createPromise(
		{
			status:'ok',
			last_updated:'2015-11-09T22:03:36Z'
		}
	);
}
statusApi.messages = function (handler) {
	return createPromise([
			{
				status: 'first',
				body:'This is the first message',
				created_on: '2015-11-09T21:03:36Z'
			},
			{
				status: 'second',
				body:'This is the second message',
				created_on: '2015-11-09T20:03:36Z'
			}
		]);
}

function createPromise(data) {
	var deferred = Q.defer();
	setTimeout(function() {deferred.resolve(data)},0);
	return deferred.promise;
}