(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(8),s=n(3),l=n(17),u=n(18),d=(n(28),n(5)),h=n(6),b=n(9),f=n(7),p=n(10),g=function(e){var t=e.id,n=e.email,r=e.name;return o.a.createElement("div",{className:"pointer tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots",className:"w-100"}),o.a.createElement("div",{className:"details"},o.a.createElement("h2",null,r),o.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(g,{key:n.id,id:t[n].id,name:t[n].name,email:t[n].email})})))},E=function(e){e.searchfield;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--blue bg-light-blue",type:"search",placeholder:"Search robots",onChange:t}))},v=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),t}(r.Component),w=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},O=function(){return o.a.createElement("div",null,o.a.createElement("footer",null,o.a.createElement("address",null,"Lagos, Nigeria"," ","\xa9 2020"),o.a.createElement("p",null,"Built by"," ",o.a.createElement("a",{href:"https://twitter.com/codeg0d",className:"link black hover-bg-light-blue b"},"Oteri Eyenike"))))},y=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,i=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",null,"Robofriends"),o.a.createElement(E,{searchChange:n}),o.a.createElement(w,null,o.a.createElement(v,null,o.a.createElement(m,{robots:i}))),o.a.createElement(O,null))}}]),t}(r.Component),R=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(y),S=(n(29),{searchField:""}),j={isPending:!1,robots:[],error:""},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=Object(l.createLogger)(),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(s.d)(_,Object(s.a)(N,u.a));i.a.render(o.a.createElement(c.a,{store:T},o.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.9af245f7.chunk.js.map