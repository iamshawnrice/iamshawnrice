(function() {
  'use strict';

  angular.module('app.iasr').controller('PlaylistsController', function($scope, playlistsFactory) {
    playlistsFactory.getPlaylists().then(function(data) {
      $scope.playlists = data;
      $scope.$emit('paplowOut');
    });
  });
})();
