var IASR=angular.module("IASR",["ui.router"]);IASR.config(function(t,l,o){l.otherwise("/"),o.html5Mode({enabled:!0,requireBase:!0}),t.state("about",{url:"/about",templateUrl:"partials/about.html",controller:"AboutController"}).state("playlists",{url:"/playlists",templateUrl:"partials/playlists.html",controller:"PlaylistsController"})}),IASR.controller("PlaylistsController",function(t,l){t.playlists=[],l.get("/iamshawnrice-api/wp-json/posts?type=playlist").success(function(l){t.playlists=l})}),IASR.controller("AboutController",function(t,l,o){t.about=[],t.aboutContent="",l.get("/iamshawnrice-api/wp-json/pages/27").success(function(l){t.about=l}),t.about.aboutContent=o.trustAsHtml(t.about.content)});