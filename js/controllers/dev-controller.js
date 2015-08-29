(function(pageFactory) {
  'use strict';

  angular.module('app.iasr').controller('DevController', function($scope, pageFactory) {
    pageFactory.getPage(27).then(function(data) {
      $scope.page = data;
      $scope.$emit('paplowOut');
    });
  });
})();
