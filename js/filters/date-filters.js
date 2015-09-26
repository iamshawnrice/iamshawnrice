(function() {
  'use strict';

  angular.module('app.iasr').filter('customDateFilter', function() {
    return {
      verbal: function(date) {
        var description = moment(date).format('DD'),
            month = moment(date).format('MMMM'),
            year = moment(date).format('YYYY');

        function parseDay(description) {
          if (description < 10) {
            return 'early';
          } else if (description > 10 && description < 21) {
            return 'mid';
          } else {
            return 'late';
          }
        }

        return parseDay(description) + month + year;
      }
    }
  });
})();
