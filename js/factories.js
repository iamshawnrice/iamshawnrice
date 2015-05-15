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

  return service;
});

IASR.factory('playlistFactory', function($http, $q) {
  var service = {};

  service.getPlaylists = function(slug) {
    var deferred = $q.defer(),
        url = 


    $http.get('http://localhost:8888/iamshawnrice/api/wp-json/posts?type=playlist')
      .success(function(data) {
        deferred.resolve(data);
      });
      return deferred.promise;
  }

  return service;
});