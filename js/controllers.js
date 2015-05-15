/*
  Controllers
*/

IASR.controller('PlaylistsController', function($scope, playlistsFactory) {
  // playlistsFactory.getPlaylists().then(function(data) {
  //   $scope.playlists = data;
  // });

  playlistsFactory.getPlaylists().then(function(data) {
    $scope.playlists = data;
  });
});

IASR.controller('AboutController', function($scope, aboutFactory) {
  aboutFactory.getAbout().then(function(data) {
    $scope.about = data;
  });
});