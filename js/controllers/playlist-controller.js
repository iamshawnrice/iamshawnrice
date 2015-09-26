(function() {
  'use strict';

  angular.module('app.iasr').controller('PlaylistController',
    function($scope, $stateParams, playlistsFactory, dateService) {
    $scope.contentClass = 'playlist';

    playlistsFactory.getPlaylist($stateParams.slug).then(function(data) {
      $scope.playlist = data[0];
      $scope.playlist.published = dateService.verbal($scope.playlist.date);
    });
  });
})();
