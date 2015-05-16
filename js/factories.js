/*
  Factories
*/

IASR.factory('aboutFactory', function($http) {
  return {
    getAbout: function() {
      return $http.get('http://localhost:8888/iamshawnrice/api/wp-json/pages/27')
        .then(function(result) {
          return result.data;
        });
      }
   };
});

IASR.factory('playlistsFactory', function($http, $q) {
  var service = {};

  service.getPlaylists = function() {
    var deferred = $q.defer();

    $http.get('http://localhost:8888/iamshawnrice/api/wp-json/posts?type=playlist')
      .success(function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
  }

  service.getPlaylist = function(id) {
    var deferred = $q.defer(),
        urlBase = 'http://localhost:8888/iamshawnrice/api/wp-json/posts/',
        urlId = id.toString(),
        urlParam = '?type=playlist', 
        link = urlBase + urlId + urlParam;

    $http.get(link)
      .success(function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
  }

  return service;
});