var IASR=angular.module("IASR",["ui.router","ngSanitize"]);IASR.config(function(l,t,e){e.hashPrefix("!"),t.otherwise("/"),l.state("about",{url:"/about",templateUrl:"partials/about.html",controller:"AboutController"}).state("playlists",{url:"/playlists",templateUrl:"partials/playlists.html",controller:"PlaylistsController"}).state("playlist",{url:"/playlists/:id",templateUrl:"partials/playlist.html",controller:"PlaylistController"}).state("webdeveloper",{url:"/web-developer",templateUrl:"partials/webdeveloper.html",controller:"DevController"})});