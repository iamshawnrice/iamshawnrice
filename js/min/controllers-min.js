!function(){var t=angular.module("IASR");t.controller("AboutController",function(t,l){l.getPage(2).then(function(l){t.page=l})}),t.controller("PlaylistsController",function(t,l){l.getPlaylists().then(function(l){t.playlists=l})}),t.controller("PlaylistController",function(t,l,e,n){e.getPlaylist(l.id).then(function(l){t.playlist=l,t.playerUrl=n.trustAsResourceUrl("http://everyonesmixtape.com/e/#"+t.playlist.meta.player_id)})}),t.controller("DevController",function(t,l){l.getPage(27).then(function(l){t.page=l})})}();