(function() {
  'use strict';

  angular.module('app.iasr').controller('PlaylistsController', function($scope, postsFactory) {
    $scope.contentClass = 'playlists'

    postsFactory.getPosts('playlists').then(function(data) {
      $scope.playlists = data;
    });
  });
})();
