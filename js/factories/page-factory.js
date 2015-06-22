define(['app'], function(app) {
  app.factory('pageFactory', function($http, $q) {
    var service = {};

    service.getPage = function(id) {
      var deferred = $q.defer(),
          urlBase = '/api/wp-json/pages/',
          urlId = id.toString(),
          link = urlBase + urlId;

      $http.get(link)
        .success(function(data) {
          deferred.resolve(data);
        });

        return deferred.promise;
      };

    return service;
  });
});
