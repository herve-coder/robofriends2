(this.webpackJsonprobofriends2=this.webpackJsonprobofriends2||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),i=n(8),s=n(10),l=n(17),u=n(18),d=(n(28),n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function h(e,t){console.log("actual registration"),navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=n(2),f=n(3),g=n(5),m=n(4),p=n(6),E=(n(30),function(e){var t=e.id,n=e.name,o=e.email;return r.a.createElement("article",{className:" br4 ba  bg-light-green grow b--black-10 mv4 dib  w-50-m w-25-l "},r.a.createElement("div",{className:"tc"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,".png?200x200"),className:"db br2 br--top center",alt:""}),r.a.createElement("h1",{className:"f4"},n),r.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"})," "),r.a.createElement("div",{className:"tc"},r.a.createElement("p",{className:"lh-copy measure center f6 black-70"},o)))}),v=(n(31),function(e){var t=e.robots;return r.a.createElement("div",{className:"layout"},t.map((function(e){return r.a.createElement(E,Object.assign({key:e.id},e))})))}),O=(n(32),function(e){var t=e.SearchChange;return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"search",className:"f6 b db mb2 white"},"Filter robots here"),r.a.createElement("input",{id:"search",className:"pa3 mb3 input",type:"search",placeholder:"Search robots",onChange:t}))}),w=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},y=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(g.a)(this,Object(m.a)(t).call(this))).state={hasError:!1},e}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops that is not good!"):this.props.children}}]),t}(o.Component),j=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(g.a)(this,Object(m.a)(t).call(this))).updateCounter=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(p.a)(t,e),Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return r.a.createElement("button",{style:{background:this.props.background,color:this.props.color,padding:"0 2rem",margin:"1rem 0",boxSizing:"border-box"},onClick:this.updateCounter},r.a.createElement("h1",null,"Count: ",this.state.count))}}]),t}(o.Component),S=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"white"},"ROBOFRIENDS"),r.a.createElement(j,{color:"#fff",background:"#001b44"}))}}]),t}(o.Component),R=(n(33),function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,o=e.onSearchChange,a=e.isPending,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(S,null),r.a.createElement(O,{SearchChange:o}),a?r.a.createElement("h1",null,"Loading"):r.a.createElement(w,null,r.a.createElement(y,null,r.a.createElement(v,{robots:c}))))}}]),t}(o.Component)),C=Object(s.b)((function(e){return{searchField:e.searchRobots.searchfield,isPending:e.getRobots.isPending,robots:e.getRobots.robots,error:e.getRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R),k={searchfield:""},N={robots:[],isPending:!1,error:""},T=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchfield:t.payload});default:return e}},getRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),_=(Object(u.createLogger)(),Object(i.d)(T,Object(i.a)(l.a)));c.a.render(r.a.createElement(s.a,{store:_},r.a.createElement(C,null)),document.getElementById("root")),function(e){if(console.log("beginning of registration"),console.log("production"),console.log(Boolean("serviceWorker"in navigator)),"serviceWorker"in navigator){if(console.log("1st condition matched"),new URL("/robofriends2",window.location.href).origin!==window.location.origin)return void console.log("SW not created");window.addEventListener("load",(function(){var t="".concat("/robofriends2","/service-worker.js");console.log("add eventlistener"),d?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}console.log("1st condition not matched")}(),console.log("App mounted")}},[[19,1,2]]]);
//# sourceMappingURL=main.e0618586.chunk.js.map