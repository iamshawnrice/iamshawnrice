/* global angular:true, IASR:true */

var IASR = angular.module('IASR', ['ui.router', 'ngSanitize']);

IASR.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
    })
    .state('playlists', {
      url: '/playlists',
      templateUrl: 'partials/playlists.html',
      controller: 'PlaylistsController'
    })
    .state('playlist', {
      url: '/playlists/:id',
      templateUrl: 'partials/playlist.html',
      controller: function($scope, $stateParams, playlistsFactory) {
        playlistsFactory.getPlaylist($stateParams.id).then(function(data) {
          $scope.playlist = data;
        });
      }
    });
});
