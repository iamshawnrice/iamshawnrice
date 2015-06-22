define([
    'app',
    'page-factory'
], function(app) {
  app.controller('AboutController', function($scope, pageFactory) {
    pageFactory.getPage(2).then(function(data) {
      debugger;
      $scope.page = data;
    });
  });
});
