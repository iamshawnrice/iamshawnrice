(function() {
  'use strict';

  angular.module('app.iasr', ['ui.router', 'ngSanitize']);

  angular.module('app.iasr').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'partials/page.html',
        controller: 'AboutController'
      })
      .state('playlists', {
        url: '/playlists',
        templateUrl: 'partials/playlists.html',
        controller: 'PlaylistsController'
      })
      .state('playlist', {
        url: '/playlists/:slug',
        templateUrl: 'partials/playlist.html',
        controller: 'PlaylistController'
      })
      .state('webdeveloper', {
        url: '/web-developer',
        templateUrl: 'partials/page.html',
        controller: 'DevController'
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
})();
