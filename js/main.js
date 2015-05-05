/* global angular:true, IASR:true */

var IASR = angular.module('IASR', ['ui.router']);

IASR.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html',
      controller: 'AboutCtrl'
    })
    .state('playlists', {
      url: '/playlists',
      templateUrl: 'partials/playlists.html',
      controller: 'PlaylistsCtrl'
    });
});

IASR.controller('PlaylistsCtrl', function($scope, $http) {
  $scope.playlists = [];

  $http.get('/iamshawnrice-api/wp-json/posts?type=playlist')
    .success(function(data) {
      $scope.playlists = data;
    });
});

IASR.controller('AboutCtrl', function($scope, $http, $sce) {
  $scope.about = [];
  $scope.aboutContent = '';

  $http.get('/iamshawnrice-api/wp-json/pages/27')
    .success(function(data) {
      $scope.about = data;
    });

  $scope.about.aboutContent = $sce.trustAsHtml($scope.about.content);
});