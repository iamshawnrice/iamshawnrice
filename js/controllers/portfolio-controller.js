(function(pageFactory) {
  angular.module('app.iasr').controller('PortfolioController', function($scope, pageFactory) {
    pageFactory.getPage(83).then(function(data) {
      $scope.title = data.title;
      $scope.portfolio = data.meta.portfolio_items;
    });
  });
})();
