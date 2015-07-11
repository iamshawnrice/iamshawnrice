define([
  'app',
  'jquery'
], function(app, $) {
  'use strict';

  app.directive('iasrTrackList', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/track-list.html',
      link: function(scope) {
        scope.accordionToggle = function(e) {
          var $self = $(e.currentTarget),
              $next = $self.next('.js-accordion-panel'),
              $panels = $('.js-accordion-panel').not($next);

          $panels.velocity('slideUp', { duration: 250 });
          $next.velocity('slideDown', { duration: 250, delay: 250 });

          e.preventDefault();
        };
      }
    };
  });
});
