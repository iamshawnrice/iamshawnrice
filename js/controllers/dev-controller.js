define([
    'app',
    'page-factory'
], function(app) {
  app.controller('DevController', function($scope, pageFactory) {
    pageFactory.getPage(27).then(function(data) {
      $scope.page = data;
    });
  });
});
