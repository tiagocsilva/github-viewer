(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0348":function(t,e,n){"use strict";var r=n("8835"),o=n.n(r);o.a},1082:function(t,e,n){},"26d3":function(t,e,n){"use strict";var r=n("bd1c"),o=n.n(r);o.a},"37c7":function(t,e,n){},3808:function(t,e,n){},4068:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),o=(n("d3b7"),n("bc3a")),a=n.n(o);a.a.defaults.baseURL="https://api.github.com";var i={},s=a.a.create(i);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["default"].use(Plugin);Plugin;var u=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(u["a"]);var c=n("1633"),l=n.n(c),f=(n("1ca9"),n("ecee")),p=n("c074"),d=n("f2d1"),h=n("ad3d"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticStyle:{"margin-top":"60px","margin-bottom":"30px"}})],1),n("app-footer")],1)},m=[],v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{staticClass:"app-header p-2 d-flex justify-content-between align-items-center",attrs:{fixed:"top"}},[r("h1",{staticClass:"ml-2 mb-0",on:{click:function(e){return t.$router.push({name:"Inicio"})}}},[t._v(" GitHub "),r("b",[t._v("Viewer")])]),r("img",{staticClass:"mr-3",attrs:{src:n("f0fc")}})])},b=[],A=(n("cea0"),n("0c7c")),C={},y=Object(A["a"])(C,v,b,!1,null,"5a689658",null),k=y.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-footer p-2 position-fixed pl-3"},[t._v(" Fonte das Informações: "),n("font-awesome-icon",{staticClass:"title-icon mr-1",attrs:{icon:["fab","github"]}}),n("a",{attrs:{target:"_blank",href:"http://github.com/"}},[t._v("http://github.com/")])],1)},S=[],w=(n("be3a"),{}),x=Object(A["a"])(w,R,S,!1,null,"70131bf4",null),E=x.exports,Q={components:{Navbar:k,AppFooter:E}},K=Q,B=(n("5c0b"),Object(A["a"])(K,g,m,!1,null,null,null)),I=B.exports,O=n("8c4f"),j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"inicioContainer",staticClass:"inicio d-flex"},[r("img",{ref:"icon",staticClass:"img-icon",attrs:{src:n("f0fc")}}),r("div",{staticClass:"question-container"},[r("h2",{ref:"question",staticClass:"mb-2"},[t._v(" SOBRE QUAL USUÁRIO GITHUB VOCÊ QUER SABER? ")]),r("div",{ref:"userInput",staticClass:"input-wrapper"},[r("b-input",{staticClass:"transparent-input",attrs:{placeholder:"Digite aqui o nome do usuário...",autocomplete:"off"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),r("small",{ref:"instruction",staticClass:"instruction"},[t._v(' *Utilize o nome exato do usuário, por exemplo: "tiagocsilva" ')]),r("div",{staticClass:"clear-fix"},[r("span",{attrs:{id:"tooltip-wrapper"}},[r("b-btn",{ref:"button",staticClass:"px-5 py-1 mt-3",attrs:{variant:"primary",disabled:t.invalidUser},on:{click:t.search}},[t._v(" BUSCAR ")])],1)]),r("b-tooltip",{attrs:{target:"tooltip-wrapper",triggers:"hover",disabled:!t.invalidUser}},[t._v(" Por favor, informe o usuário acima. ")])],1)])},z=[],J=(n("96cf"),n("1da1")),U=n("cffa"),M={data:function(){return{user:""}},computed:{invalidUser:function(){return!this.user}},methods:{search:function(){this.user&&this.$router.push("user/".concat(this.user))},animate:function(t){return U["a"].to(t,{visibility:"visible"}),U["a"].from(t,{opacity:0,y:-300,duration:.6})}},mounted:function(){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a,i,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$refs,r=n.icon,o=n.question,a=n.userInput,i=n.instruction,s=n.button,u=n.inicioContainer,e.next=3,t.animate(r);case 3:return t.animate(o),e.next=6,t.animate(s);case 6:t.animate(a),t.animate(i),U["a"].to(u,{visibility:"visible"});case 9:case"end":return e.stop()}}),e)})))()}},N=M,L=(n("26d3"),Object(A["a"])(N,j,z,!1,null,null,null)),P=L.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resultado pt-4"},[n("div",{staticClass:"username px-5"},[n("h1",[t._v(t._s(this.user.toLowerCase()))])]),n("div",{staticClass:"mt-3"},[n("a",{staticClass:"mt-5 text-decoration-none text-primary-dark",attrs:{href:"#"},on:{click:function(e){return t.$router.push({name:"Inicio"})}}},[n("font-awesome-icon",{staticClass:"title-icon mr-1",attrs:{icon:["fas","chevron-left"]}}),t._v(" Pesquisar outro usuário ")],1)]),t.loading?n("div",{ref:"loadingContainer",staticClass:"loading-container"},[n("scaling-squares-spinner",{attrs:{"animation-duration":1250,size:85,color:"#f9c5af"}})],1):n("div",[t.results.length>0?n("div",{staticClass:"results-container mt-4 pb-4"},t._l(t.results,(function(t,e){return n("card-resultado",{key:e,class:t.color,attrs:{result:t}})})),1):n("div",{staticClass:"mt-4 message"},[t._v(" "+t._s(t.errorMsg)+" ")])])])},q=[],F=(n("4160"),n("159b"),n("4583")),V=function(t){return a.a.get("/users/".concat(t,"/repos"))},D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"result",staticClass:"result",on:{click:t.redirect}},[n("div",{staticClass:"result-title"},[n("font-awesome-icon",{staticClass:"title-icon",attrs:{icon:["fas","code-branch"]}}),t._v(" "+t._s(t.result.name.toLowerCase())+" ")],1),n("hr",{staticClass:"separator-title"}),n("div",{staticClass:"result-description"},[t._v(" "+t._s(t.result.description||"...")+" ")]),n("hr",{staticClass:"separator-footer"}),n("div",{staticClass:"result-footer"},[n("div",[n("a",{attrs:{href:t.result.owner.html_url}},[n("img",{attrs:{src:t.result.owner.avatar_url}})]),t._v(" "),n("a",{attrs:{href:t.result.owner.html_url}},[t._v(" "+t._s(t.result.owner.login)+" ")])]),n("div",[n("b-badge",{staticClass:"bg-secondary",staticStyle:{"font-weight":"normal"},attrs:{pill:"",variant:"primary"}},[t._v(t._s(t.result.language))])],1)])])},H=[],Y={props:["result"],methods:{redirect:function(){location.href=this.result.html_url}},mounted:function(){U["a"].to(this.$refs.result,{opacity:1,duration:Math.random()})}},T=Y,Z=(n("e2a1"),Object(A["a"])(T,D,H,!1,null,"1a367eaa",null)),W=Z.exports,X={data:function(){return{isError:!1,loading:!0,results:[]}},components:{ScalingSquaresSpinner:F["a"],CardResultado:W},computed:{user:function(){return this.$route.params.user},errorMsg:function(){return this.isError?"Não foi possível encontrar o usuário informado...":0==this.results.length?"Nenhum repositório encontrado para o usuário informado...":void 0}},methods:{setColors:function(t){var e=["bg-tertiary","bg-primary","bg-quarterly"],n=0;t.forEach((function(t){n>e.length-1&&(n=0),t.color=e[n],n++})),this.results=t}},mounted:function(){var t=this;V(this.user).then((function(e){t.setColors(e.data)})).catch((function(){return t.isError=!0})).finally((function(){return t.loading=!1}))}},_=X,$=(n("0348"),Object(A["a"])(_,G,q,!1,null,null,null)),tt=$.exports;r["default"].use(O["a"]);var et=[{path:"/",name:"Inicio",component:P},{path:"/user/:user",name:"Resultado",component:tt},{path:"*",redirect:"/"}],nt=new O["a"]({routes:et}),rt=nt;n("bb35");f["c"].add(p["a"]),f["c"].add(d["a"]),r["default"].use(l.a),r["default"].component("font-awesome-icon",h["a"]),r["default"].config.productionTip=!1,new r["default"]({router:rt,render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("37c7"),o=n.n(r);o.a},8835:function(t,e,n){},bb35:function(t,e,n){},bd1c:function(t,e,n){},be3a:function(t,e,n){"use strict";var r=n("4068"),o=n.n(r);o.a},cea0:function(t,e,n){"use strict";var r=n("3808"),o=n.n(r);o.a},e2a1:function(t,e,n){"use strict";var r=n("1082"),o=n.n(r);o.a},f0fc:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.0a889baf.js.map