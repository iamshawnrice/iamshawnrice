(function() {
  'use strict';

  angular.module('app.iasr').controller('PostController',
    function($scope, $stateParams, postsFactory, dateService) {
    $scope.contentClass = 'post';
    $scope.disqusURL = window.location.href;
    $scope.contentLoaded = false;

    postsFactory.getPost($stateParams.slug).then(function(data) {
      $scope.post = data[0];
      $scope.post.published = dateService.verbal($scope.post.date);

      angular.element(document).ready(function() {
        Prism.highlightAll();
      });

      // tell disqus that all of our necessary values have been populated
      $scope.contentLoaded = true;
    });
  });
})();
