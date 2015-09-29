(function() {
  'use-strict';

  angular.module('app.iasr').directive('iasrSyntax', function() {
    return {
      restrict: 'A',
      link: function($scope, element, attrs) {
        $scope.$on('post-loaded', function() {
          Prism.highlightAll(true, function() {
            debugger;
          });
        });
      }
    }
  });
})();
