(function(pageFactory) {
  'use strict';

  angular.module('app.iasr').controller('AboutController', function($scope, pageFactory) {
    $scope.contentClass = 'about';

    pageFactory.getPage(2).then(function(data) {
      $scope.page = data;
    });
  });
})();
