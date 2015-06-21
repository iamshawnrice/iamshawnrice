/* global angular:true, IASR:true */

(function() {
  var IASR = angular.module('IASR');

  IASR.directive('iasrArticleHeader', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        title: '=',
        date: '=?'
      },
      template: '<h1 class="article-title" ng-animate-ref="article-title">{{ ::title }}</h1><p ng-if="date" class="date">{{ ::date | date : \'longDate\' }}</p><span ng-transclude></span>'
    };
  });

  IASR.directive('iasrPaplow', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/paplow.html'
    };
  });
})();
