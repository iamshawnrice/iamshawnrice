define(['app'], function(app) {
  app.factory('playlistsFactory', function($http, $q) {
    var service = {};

    service.getPlaylists = function() {
      var deferred = $q.defer();

      $http.get('/api/wp-json/posts?type=playlist')
        .success(function(data) {
          deferred.resolve(data);
        });

        return deferred.promise;
    };

    service.getPlaylist = function(id) {
      var deferred = $q.defer(),
          urlBase = '/api/wp-json/posts/',
          urlId = id.toString(),
          urlParam = '?type=playlist',
          link = urlBase + urlId + urlParam;

      $http.get(link)
        .success(function(data) {
          deferred.resolve(data);
        });

        return deferred.promise;
    };

    return service;
  });
});
