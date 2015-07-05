define(['app'], function(app) {
  'use strict';

  app.directive('iasrTrackList', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/track-list.html'
    };
  });
});
