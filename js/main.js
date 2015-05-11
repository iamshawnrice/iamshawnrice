/* global angular:true, IASR:true */

var IASR = angular.module('IASR', ['ui.router']);

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
    });
});

/*
  Controllers
*/

IASR.controller('PlaylistsController', function($scope, playlistsFactory) {
  playlistsFactory.getPlaylists().then(function(data) {
    $scope.playlists = data;
  });
});

IASR.controller('AboutController', function($scope, aboutFactory) {
  aboutFactory.getAbout().then(function(data) {
    $scope.about = data;
  });
});

/*
  Factories
*/

IASR.factory('playlistsFactory', function($http) {
  return {
    getPlaylists: function() {
      return $http.get('/iamshawnrice-api/wp-json/posts?type=playlist')
        .then(function(result) {
        //resolve the promise as the data
          return result.data;
        });
      }
   };
});

IASR.factory('aboutFactory', function($http) {
  return {
    getAbout: function() {
      return $http.get('/iamshawnrice-api/wp-json/pages/27')
        .then(function(result) {
        //resolve the promise as the data
          return result.data;
        });
      }
   };
});
