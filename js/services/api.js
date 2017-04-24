(function() {
    'use strict';

    angular
        .module('money')
        .factory('API', function($http) {
        	return {
        		getCurrency:(market) => {
        			return $http({
        				type:'GET',
        				url:`http://www.apilayer.net/api/live?access_key=d82404de06a0fe24a89dc7f3edead428`,
        			})
                }
            };
        });

})();