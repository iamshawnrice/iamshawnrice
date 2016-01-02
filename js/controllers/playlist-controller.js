angular.module('app.iasr').controller('PlaylistController',
  function($scope, $stateParams, posts, dateService) {
  $scope.contentClass = 'playlist';

  $scope.posts = posts;

  var unbindWatcher = $scope.$watch('posts', function(newVal, oldVal) {
    if (Object.keys(newVal).length) {
      $scope.playlist = $scope.posts[$stateParams.slug];
      $scope.playlist.published = dateService.verbal($scope.playlist.date);

      unbindWatcher();
    }
  }, true);
});
