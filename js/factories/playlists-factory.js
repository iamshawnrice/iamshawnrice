(function() {
  angular.module('app.iasr').factory('playlistsFactory', function($http) {
    var service = {};

    service.getPlaylists = function() {
      return $http.get('/api/wp-json/posts').then(
        function(response) {
          return response.data;
        },
        function(response) {
          console.error('There was a problem retrieving the playlists');
          console.log(response);
        }
      );
    };

    service.getPlaylist = function(slug) {
      var urlBase = '/api/wp-json/posts?filter[name]==',
          urlSlug = slug.toString(),
          link = urlBase + urlSlug;

      return $http.get(link).then(
        function(response) {
          return response.data;
        },
        function(response) {
          console.error('There was a problem retrieving this playlist');
          console.log(response);
        }
      );
    };

    return service;
  });
})();
