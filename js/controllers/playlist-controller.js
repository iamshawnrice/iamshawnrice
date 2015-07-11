define([
  'app',
  'moment',
  'playlists-factory',
  'iasrTrackList',
  'velocity'
], function(app, moment) {
  app.controller('PlaylistController', function($scope, $stateParams, playlistsFactory, $sce) {
    playlistsFactory.getPlaylist($stateParams.slug).then(function(data) {
      $scope.playlist = data[0];
      $scope.playlist.published = moment($scope.playlist.date).format('MMMM Do YYYY');

      $scope.accordionToggle = function(e) {
        var $self = $(e.currentTarget),
            $next = $self.next('.js-accordion-panel'),
            $panels = $('.js-accordion-panel').not($next);

        $panels.velocity('slideUp', { duration: 250 });
        $next.velocity('slideDown', { duration: 250, delay: 250 });

        e.preventDefault();
      };
    });
  });
});
