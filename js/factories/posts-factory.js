angular.module('app.iasr').service('posts', function($http) {
  var posts = {};

  $http.get('/api/wp-json/posts?filter[posts_per_page]=-1').then(
    function(response) {
      response.data.forEach(function(currentValue) {
        posts[currentValue.slug] = currentValue;
      });
    },
    function(response) {
      console.error('There was a problem retrieving the playlists');
      console.log(response);
    }
  );

  return posts;
});
