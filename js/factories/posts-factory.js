(function() {
  'use strict';

  angular.module('app.iasr').factory('postsFactory', function($http) {
    var service = {};

    service.getPosts = function(category) {
      return $http.get('/api/wp-json/posts?filter[category_name]=' + category).then(
        function(response) {
          return response.data;
        },
        function(response) {
          console.error('There was a problem retrieving the playlists');
          console.log(response);
        }
      );
    };

    service.getPost = function(slug) {
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
