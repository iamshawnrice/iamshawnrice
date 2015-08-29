(function(pageFactory) {
  'use strict';

  angular.module('app.iasr').controller('PortfolioController', function($scope, pageFactory) {
    pageFactory.getPage(83).then(function(data) {
      $scope.title = data.title;
      // process array so items are in reverse chronological order
      $scope.portfolio = data.meta.portfolio_items.reverse();
      $scope.$emit('paplowOut');
    });
  });
})();
