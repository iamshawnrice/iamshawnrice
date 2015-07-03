define(['app'], function(app) {
  'use strict';

  app.directive('iasrAccordion', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/accordion.html'
    };
  });
});
