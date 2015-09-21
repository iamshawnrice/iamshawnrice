(function(pageFactory) {
  'use strict';

  angular.module('app.iasr').controller('DevController', function($scope, pageFactory) {
    $scope.contentClass = 'web-developer';

    pageFactory.getPage(27).then(function(data) {
      $scope.page = data;
    });
  });
})();
