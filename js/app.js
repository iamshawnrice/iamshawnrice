/* global angular:true, IASR:true */

var IASR = angular.module('IASR', ['ui.router', 'ngSanitize']);

IASR.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

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
      controller: 'PlaylistController'
    })
    .state('webdeveloper', {
      url: '/web-developer',
      templateUrl: 'partials/webdeveloper.html',
      controller: 'DevController'
    });
});
