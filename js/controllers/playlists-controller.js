(function() {
  'use strict';

  angular.module('app.iasr').controller('PlaylistsController', function($scope, playlistsFactory) {
    $scope.contentClass = 'playlists'

    playlistsFactory.getPlaylists().then(function(data) {
      $scope.playlists = data;
      $scope.$emit('paplowOut');
    });
  });
})();
