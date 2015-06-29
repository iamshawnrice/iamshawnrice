define([
    'angularAMD',
    'angular-ui-router',
    'angular-sanitize'
], function(angularAMD) {
  'use strict';

  var app = angular.module('IASR', ['ui.router', 'ngSanitize']);

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('about', angularAMD.route({
        url: '/about',
        templateUrl: 'partials/page.html',
        controller: 'AboutController',
        controllerUrl: './controllers/about-controller'
      }))
      .state('playlists', angularAMD.route({
        url: '/playlists',
        templateUrl: 'partials/playlists.html',
        controller: 'PlaylistsController',
        controllerUrl: './controllers/playlists-controller'
      }))
      .state('playlist', angularAMD.route({
        url: '/playlists/:slug',
        templateUrl: 'partials/playlist.html',
        controller: 'PlaylistController',
        controllerUrl: './controllers/playlist-controller'
      }))
      .state('webdeveloper', angularAMD.route({
        url: '/web-developer',
        templateUrl: 'partials/page.html',
        controller: 'DevController',
        controllerUrl: './controllers/dev-controller'
      }));

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });

  return angularAMD.bootstrap(app);
});
