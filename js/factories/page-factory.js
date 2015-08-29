(function($rootScope) {
  'use strict';

  angular.module('app.iasr').factory('pageFactory', function($rootScope, $http) {
    var service = {};

    service.getPage = function(id) {
      var urlBase = '/api/wp-json/pages/',
          urlId = id.toString(),
          link = urlBase + urlId;

      return $http.get(link).then(
        function(response) {
          return response.data;
        },
        function(response) {
          console.error('There was an issue retrieving this page');
          console.log(response);
        });
      };

    return service;
  });
})();
