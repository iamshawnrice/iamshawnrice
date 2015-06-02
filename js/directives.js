IASR.directive('iasrArticleHeader', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '=',
      date: '=?'
    },
    template: '<h1>{{ ::title }}</h1><p ng-if="date" class="date">{{ ::date | date : \'longDate\' }}</p><span ng-transclude></span>'
  };
});

IASR.directive('iasrPaplow', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/paplow.html'
  };
});