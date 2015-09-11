(function() {
  'use strict';

  angular.module('app.iasr')
    .animation('.main-content', function() {
      return {
        enter: function(element, doneFn) {
          // Figure out why the content is popping in
          $(element).fadeIn(500, doneFn);
        },
        leave: function(element, doneFn) {
          $(element).fadeOut(500, doneFn);
        }
      }
    });
})();
