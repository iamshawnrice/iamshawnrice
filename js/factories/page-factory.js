angular.module('app.iasr').service('getPage', function($rootScope, $http) {
  return function(id) {
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
});
