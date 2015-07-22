(function() {
  'use strict';

  angular.module('app.iasr', ['ui.router', 'ngSanitize']);

  angular.module('app.iasr').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'partials/page.html',
        controller: 'AboutController',
        controllerUrl: './controllers/about-controller'
      })
      .state('playlists', {
        url: '/playlists',
        templateUrl: 'partials/playlists.html',
        controller: 'PlaylistsController',
        controllerUrl: './controllers/playlists-controller'
      })
      .state('playlist', {
        url: '/playlists/:slug',
        templateUrl: 'partials/playlist.html',
        controller: 'PlaylistController',
        controllerUrl: './controllers/playlist-controller'
      })
      .state('webdeveloper', {
        url: '/web-developer',
        templateUrl: 'partials/page.html',
        controller: 'DevController',
        controllerUrl: './controllers/dev-controller'
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
})();
