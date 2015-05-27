/*
  Controllers
*/

IASR.controller('AboutController', function($scope, pageFactory) {
  pageFactory.getPage(2).then(function(data) {
    $scope.page = data;
  });
});

IASR.controller('PlaylistsController', function($scope, playlistsFactory) {
  playlistsFactory.getPlaylists().then(function(data) {
    $scope.playlists = data;
  });
});

IASR.controller('PlaylistController', function($scope, $stateParams, playlistsFactory, $sce) {
  playlistsFactory.getPlaylist($stateParams.id).then(function(data) {
    $scope.playlist = data;
    $scope.playerUrl = $sce.trustAsResourceUrl('http://everyonesmixtape.com/e/#' + $scope.playlist.meta.player_id);
  });
});

IASR.controller('DevController', function($scope, pageFactory) {
  pageFactory.getPage(27).then(function(data) {
    $scope.page = data;
  });
});