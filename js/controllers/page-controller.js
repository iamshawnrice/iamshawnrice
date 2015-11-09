angular.module('app.iasr').controller('PageController', function($scope, $state, $http) {
  $scope.page = null;

  function getPageContent(id) {
    $http.get('/api/wp-json/pages/' + id).then(
      function(response) {
        $scope.page = response.data;
      },
      function(response) {
        console.error('There was an issue retrieving this page');
        console.log(response);
      });
  };

  getPageContent($state.current.data.pageID);
});
