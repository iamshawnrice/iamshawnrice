define([
    'angularAMD',
    'angular-ui-router'
], function(angularAMD) {
  'use strict';

  var app = angular.module('IASR', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('about', angularAMD.route({
        url: '/about',
        templateUrl: 'partials/page.html',
        controller: 'AboutController',
        controllerUrl: './controllers/about-controller'
      }))
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
        templateUrl: 'partials/page.html',
        controller: 'DevController'
      });
  });

  return angularAMD.bootstrap(app);
});
