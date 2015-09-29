(function() {
  'use strict';

  angular.module('app.iasr').controller('BlogController', function($scope, postsFactory) {
    $scope.contentClass = 'development';

    postsFactory.getPosts('development').then(function(data) {
      $scope.posts = data;
    });
  });
})();
