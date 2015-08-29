(function() {
  'use strict';

  angular.module('app.iasr').directive('iasrPaplow', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/paplow.html',
      link: function($rootScope) {
        $rootScope.$$listeners.$stateChangeStart = [];
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          // var stateChangeInfo = {
          //   toState: toState,
          //   fromState: fromState,
          // };

          // console.log(stateChangeInfo);
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
          console.log('paplow out');
          console.log('================');
        });
      }
    };
  });
})();
