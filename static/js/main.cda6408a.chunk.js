(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),l=(a(15),a(1)),i=a(2),o=a(4),u=a(3),m=a(5),p=(a(17),a(6),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={name:"",followers:{total:""},images:[{url:""}],genres:[]};return e=null!==this.props.artist?this.props.artist:e,r.a.createElement("div",{className:"row profile"},r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{alt:"profile",className:"img-fluid rounded-circle mx-auto profile-img",src:e.images[0].url})),r.a.createElement("div",{className:"col-8 text-center"},r.a.createElement("div",null,r.a.createElement("h3",null,e.name)),r.a.createElement("div",null,"Followers: ",e.followers.total),r.a.createElement("div",null,e.genres.map(function(t,a){return t=t!==e.genres[e.genres.length-1]?" ".concat(t,","):" & ".concat(t),r.a.createElement("span",{key:a},t)}))))}}]),t}(n.Component)),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={playingUrl:"",audio:null,playing:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"playAudio",value:function(e){var t=new Audio(e);this.state.playing?this.state.playingUrl===e?(this.state.audio.pause(),this.setState({playing:!1})):(this.state.audio.pause(),t.play(),this.setState({playing:!0,playingUrl:e,audio:t})):(t.play(),this.setState({playing:!0,playingUrl:e,audio:t}))}},{key:"render",value:function(){var e=this,t=this.props.tracks;return r.a.createElement("div",{className:"row pt-5 pb-5"},t.map(function(t,a){var n=t.album.images[0].url;return r.a.createElement("div",{key:a,className:"col-4 pb-4",onClick:function(){return e.playAudio(t.preview_url)}},r.a.createElement("img",{src:n,alt:"track",className:"img-fluid rounded"}),r.a.createElement("div",{className:"track-play"},r.a.createElement("div",{className:"track-play-inner"},e.state.playingUrl===t.preview_url?r.a.createElement("span",null,"| |"):r.a.createElement("span",null,"\u25b6"))),r.a.createElement("p",{className:"track-text text-center"},t.name))}))}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={query:"",artist:null,tracks:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"search",value:function(){var e=this,t="BQDTNI1-Ce214a4QS_KsF6FXybIRgNE2JkQT5wOoxdpN4Fsz9g0F8maRK0pHsWXhgoYc7NjlD1EE8AUTCggTyxpFe1F3U5bxMjfQ8ayclzaIJTNTG1njgRJZ9YeVupyq-imoPckS2pEgz0Ej3NCl",a="".concat("https://api.spotify.com/v1/search?","q=").concat(this.state.query,"&type=artist&limit=1");fetch(a,{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(a){if(a.error)console.log("error ",a.error);else{console.log(a.artists.items[0]);var n=a.artists.items[0];e.setState({artist:n});var r="".concat("https://api.spotify.com/v1/artists","/").concat(n.id,"/top-tracks?country=US&");fetch(r,{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(t){if(t.error)console.log("error ",t.error);else{console.log(t);var a=t.tracks;e.setState({tracks:a})}})}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"text-center"},"Music Master"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",placeholder:"Search for an artist ....",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&e.search()}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.search()}},"Search"))))),null!==this.state.artist?r.a.createElement(p,{artist:this.state.artist}):r.a.createElement("div",null),null!==this.state.tracks?r.a.createElement(h,{tracks:this.state.tracks}):r.a.createElement("div",null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){},9:function(e,t,a){e.exports=a(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.cda6408a.chunk.js.map