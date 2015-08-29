(function(pageFactory) {
  'use strict';

  angular.module('app.iasr').controller('AboutController', function($scope, pageFactory) {
    pageFactory.getPage(2).then(function(data) {
      $scope.page = data;
      $scope.$emit('paplowOut');
    });
  });
})();
