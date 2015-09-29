(function() {
  'use strict';

  angular.module('app.iasr', ['ui.router', 'ngSanitize', 'ngAnimate']);

  angular.module('app.iasr').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'partials/page.html',
        controller: 'AboutController'
      })
      .state('default', {
        url: '/',
        templateUrl: 'partials/page.html',
        controller: 'DevController'
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
        templateUrl: 'partials/portolio.html',
        controller: 'PortfolioController'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'partials/blog.html',
        controller: 'BlogController'
      })
      .state('post', {
        url: '/post/:slug',
        templateUrl: 'partials/post.html',
        controller: 'PostController'
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
})();
