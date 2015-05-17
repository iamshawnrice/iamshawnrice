/*
  Controllers
*/

IASR.controller('AboutController', function($scope, pageFactory) {
  pageFactory.getPage(2).then(function(data) {
    $scope.about = data;
  });
});

IASR.controller('PlaylistsController', function($scope, playlistsFactory) {
  playlistsFactory.getPlaylists().then(function(data) {
    $scope.playlists = data;
  });
});

IASR.controller('DevController', function($scope, pageFactory) {
  pageFactory.getPage(27).then(function(data) {
    $scope.about = data;
  });
});