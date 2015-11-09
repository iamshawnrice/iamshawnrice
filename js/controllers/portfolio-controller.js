angular.module('app.iasr').controller('PortfolioController', function($scope, getPage) {
  getPage(83).then(function(data) {
    $scope.contentClass = 'portfolio';

    $scope.title = data.title;
    // process array so items are in reverse chronological order
    $scope.portfolio = data.meta.portfolio_items.reverse();
  });
});
