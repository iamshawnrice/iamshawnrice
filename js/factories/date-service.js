(function() {
  'use strict';

  angular.module('app.iasr').factory('dateService', function() {
    return {
      verbal: function(date) {
        var description = moment(date).format('DD'),
            month = moment(date).format('MMMM'),
            year = moment(date).format('YYYY'),
            date = '';

        function parseDay(description) {
          if (description < 10) {
            return 'Early';
          } else if (description > 10 && description < 21) {
            return 'Mid';
          } else {
            return 'Late';
          }
        }

        date = parseDay(description) + ' ';
        date += month + ', ';
        date += year;

        return date;
      }
    }
  });
})();
