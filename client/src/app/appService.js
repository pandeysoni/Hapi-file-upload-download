app.factory('service', ['$resource', function($resource) {
	return $resource(':url/:file', {},
		{
			'get': { method:'GET' },
			'post': {method: 'POST'} 
		});
}]);