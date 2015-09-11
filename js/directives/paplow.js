(function() {
  'use strict';

  angular.module('app.iasr').directive('iasrPaplow', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/paplow.html',
      link: function($rootScope) {
      }
    };
  });
})();
