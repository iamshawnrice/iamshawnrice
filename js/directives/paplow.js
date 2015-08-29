(function() {
  'use strict';

  angular.module('app.iasr').directive('iasrPaplow', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/paplow.html',
      link: function($rootScope) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          var stateChangeInfo = {
            toState: toState,
            fromState: fromState,
          };

          console.log(stateChangeInfo);

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
        });
      }
    };
  });
})();
