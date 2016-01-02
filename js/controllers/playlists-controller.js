angular.module('app.iasr').controller('PlaylistsController', function($scope, posts) {
  $scope.contentClass = 'playlists';

  $scope.playlists = posts;
});
