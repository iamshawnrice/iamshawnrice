angular.module('app.iasr').controller('PlaylistController',
  function($scope, $stateParams, posts, dateService) {
  $scope.contentClass = 'playlist';

  $scope.posts = posts;

  $scope.$watch('posts', function(newVal, oldVal) {
    if (Object.keys(newVal).length) {
      $scope.playlist = $scope.posts[$stateParams.slug];
      $scope.playlist.published = dateService.verbal($scope.playlist.date);
    }
  }, true);

  // postsFactory.getPost($stateParams.slug).then(function(data) {
  //   $scope.playlist = data[0];
  //   $scope.playlist.published = dateService.verbal($scope.playlist.date);
  // });
});
