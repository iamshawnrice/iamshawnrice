IASR.factory("playlistsFactory",function(t){return{getPlaylists:function(){return t.get("http://localhost:8888/iamshawnrice/api/wp-json/posts?type=playlist").then(function(t){var t=t.data,n={};return t.forEach(function(t){n[t.ID]=t}),n})}}}),IASR.factory("aboutFactory",function(t){return{getAbout:function(){return t.get("http://localhost:8888/iamshawnrice/api/wp-json/pages/27").then(function(t){return t.data})}}});