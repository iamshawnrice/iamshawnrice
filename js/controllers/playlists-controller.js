define([
  'app',
  'playlists-factory'
], function(app) {
  app.controller('PlaylistsController', function($scope, playlistsFactory) {
    playlistsFactory.getPlaylists().then(function(data) {
      $scope.playlists = data;
    });
  });
});
