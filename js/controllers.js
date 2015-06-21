/* global angular:true, IASR:true */

(function() {
  var app = angular.module('IASR');

  app.controller('AboutController', function($scope, pageFactory) {
    pageFactory.getPage(2).then(function(data) {
      $scope.page = data;
    });
  });

  app.controller('PlaylistsController', function($scope, playlistsFactory) {
    playlistsFactory.getPlaylists().then(function(data) {
      $scope.playlists = data;
    });
  });

  app.controller('PlaylistController', function($scope, $stateParams, playlistsFactory, $sce) {
    playlistsFactory.getPlaylist($stateParams.id).then(function(data) {
      $scope.playlist = data;
      $scope.playerUrl = $sce.trustAsResourceUrl('http://everyonesmixtape.com/e/#' + $scope.playlist.meta.player_id);
    });
  });

  app.controller('DevController', function($scope, pageFactory) {
    pageFactory.getPage(27).then(function(data) {
      $scope.page = data;
    });
  });
})();
