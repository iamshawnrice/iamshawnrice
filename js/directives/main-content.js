(function() {
  'use-strict';

  angular.module('app.iasr').directive('iasrMainContent', function() {
    return {
      restrict: 'A',
      link: function($rootScope, element) {
        var $mainContent = $('.js-main-content');

        // Clear out previous listeners
        $rootScope.$$listeners.$stateChangeStart = [];
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          $mainContent.addClass('loading');

          console.log('paplow in');
        });

        // Clear out previous listeners
        $rootScope.$$listeners.$viewContentLoading = [];
        $rootScope.$on('$viewContentLoading', function(event, viewConfig){
          console.log('loading');
        });

        // Clear out previous listeners
        $rootScope.$$listeners.$viewContentLoaded = [];
        $rootScope.$on('$viewContentLoaded', function(event){
          console.log('loaded');
        });

        $rootScope.$$listeners.paplowOut = [];
        $rootScope.$on('paplowOut', function() {
          $mainContent.removeClass('loading');
          console.log('paplow out');
          // add bar to make clear when one transition 'cycle' is complete
          console.log('================');
        });
      }
    }
  });
})();
