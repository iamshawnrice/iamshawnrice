/* global angular:true, IASR:true */

var IASR = angular.module('IASR', ['ui.router']);

IASR.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html'
    })
    .state('playlists', {
      url: '/playlists',
      templateUrl: 'partials/playlists.html'
    });
});

IASR.controller('MainCtrl', function($scope) {

  var playlists = $.ajax({
    url: 'http://localhost:8888/iamshawnrice-api/wp-json/posts?type=playlist',
    dataType: 'json'
  });

  $scope.playlists = playlists;
});