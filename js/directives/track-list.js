define([
  'app',
  'jquery'
], function(app, $) {
  'use strict';

  app.directive('iasrTrackList', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/track-list.html',
      link: function() {
        var $trigger = $('.js-accordion-trigger');

        $trigger.bind('click', function(e) {
          $(this).next('.js-accordion-panel').slideToggle('fast');  // apply the toggle to the ul
          $(this).parent().toggleClass('is-expanded');
          e.preventDefault();
        });
      }
    };
  });
});
