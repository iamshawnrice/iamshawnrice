define([
  'app',
  'moment',
  'playlists-factory'
], function(app, moment) {
  app.controller('PlaylistController', function($scope, $stateParams, playlistsFactory, $sce) {
    playlistsFactory.getPlaylist($stateParams.slug).then(function(data) {
      $scope.playlist = data[0];
      $scope.playlist.published = moment($scope.playlist.date).format('MMMM Do YYYY');
    });
  });
});
