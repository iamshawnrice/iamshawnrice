angular.module('app.iasr').controller('DevController', function($scope, getPage) {
  $scope.contentClass = 'web-developer';

  getPage(27).then(function(data) {
    $scope.page = data;
  });
});
