define(['app'], function(app) {
  app.factory('playlistsFactory', function($http, $q) {
    var service = {};

    service.getPlaylists = function() {
      var deferred = $q.defer();

      $http.get('/api/wp-json/posts')
        .success(function(data) {
          deferred.resolve(data);
        });

        return deferred.promise;
    };

    service.getPlaylist = function(slug) {
      var deferred = $q.defer(),
          urlBase = '/api/wp-json/posts?filter[name]==',
          urlSlug = slug.toString(),
          link = urlBase + urlSlug;

      $http.get(link)
        .success(function(data) {
          deferred.resolve(data);
        });

        return deferred.promise;
    };

    return service;
  });
});
