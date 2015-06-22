define([
  'app',
  'playlists-factory'
], function(app) {
  app.controller('PlaylistController', function($scope, $stateParams, playlistsFactory, $sce) {
    playlistsFactory.getPlaylist($stateParams.id).then(function(data) {
      $scope.playlist = data;
      $scope.playerUrl = $sce.trustAsResourceUrl('http://everyonesmixtape.com/e/#' + $scope.playlist.meta.player_id);
    });
  });
});
