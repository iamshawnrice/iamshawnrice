(function() {
  'use strict';

  angular.module('app.iasr').controller('PostController', function($scope, $stateParams, postsFactory, dateService) {
    $scope.contentClass = 'post';

    postsFactory.getPost($stateParams.slug).then(function(data) {
      $scope.post = data[0];
      $scope.post.published = dateService.verbal($scope.post.date);
    });
  });
})();
