(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9371f8c4"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31beffb3"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],b.parentNode.removeChild(b),n(c)},b.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vuefirebase/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t){var n=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(n)}const a={};a.render=o;var c=a,i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=Object(r["g"])("div",{class:"jumbotron bg-primary text-white text-center"},[Object(r["g"])("h2",{class:"lead display-3"},"#SLACK#"),Object(r["g"])("p",null,"Realtime communication")],-1),s={key:0,class:"alert alert-info"},l={key:1,class:"alert alert-danger"},f={class:"container-fluid"},b={class:"row mt-5"},d={class:"col text-center"},p={class:"row mt-5"},h={class:"col text-center"};function g(e,t,n,o,a,c){return Object(r["p"])(),Object(r["d"])("div",null,[u,o.loading?(Object(r["p"])(),Object(r["d"])("div",s,"Processing...")):Object(r["e"])("",!0),""!=o.errorsMsd?(Object(r["p"])(),Object(r["d"])("div",l,[Object(r["g"])("div",null,Object(r["y"])(o.errorsMsd),1)])):Object(r["e"])("",!0),Object(r["g"])("div",f,[Object(r["g"])("div",b,[Object(r["g"])("div",d,[Object(r["g"])("button",{class:"btn btn-outline-danger btn-lg",onClick:t[1]||(t[1]=function(e){return o.sicialLogin("google")})}," Login with google ")])]),Object(r["g"])("div",p,[Object(r["g"])("div",h,[Object(r["g"])("button",{class:"btn btn-outline-info btn-lg",onClick:t[2]||(t[2]=function(e){return o.sicialLogin("facebook")})}," Login with Facebook ")])])])])}n("ea7b"),n("66ce");var v=n("5502"),m=n("a1e9"),j=n("5c40"),O={name:"Home",setup:function(){var e=Object(v["b"])(),t=Object(i["c"])(),n="",r=firebase.database().ref("users"),o=Object(m["k"])(""),a=Object(m["k"])(!1),c=Object(j["e"])((function(){return o.length>0})),u=function(e){return console.log(e),r.child(e.uid).set({name:e.displayName,avatar:e.photoURL})},s=function(r){"facebook"==r?n=new firebase.auth.FacebookAuthProvider:"google"==r&&(n=new firebase.auth.GoogleAuthProvider),console.log(n.value),a.value=!0,firebase.auth().signInWithPopup(n).then((function(n){console.log(n.user),u(n.user),e.dispatch("setUser",n.user),t.push("/chat")})).catch((function(e){console.log(e),o.value=e.message,a.value=!1}))};return{sicialLogin:s,errorsMsd:o,loading:a,hasError:c}}};O.render=g;var y=O,w=[{path:"/",name:"Home",component:y},{path:"/chat",name:"Chat",component:function(){return n.e("about").then(n.bind(null,"293a"))},beforeEnter:function(e,t,n){firebase.auth().currentUser?n():n("/")}}],E=Object(i["a"])({history:Object(i["b"])("/vuefirebase/"),routes:w}),C=E,P=Object(v["a"])({state:{userInfo:null,currentChannel:null,isPrivate:!1},actions:{setUser:function(e,t){var n=e.commit;n("SET_USER",t)},setCurrentChannel:function(e,t){var n=e.commit;n("SET_CURRENT_CHANNEL",t)},setPrivate:function(e,t){var n=e.commit;n("SET_PRIVATE",t)}},mutations:{SET_USER:function(e,t){e.userInfo=t},SET_CURRENT_CHANNEL:function(e,t){e.currentChannel=t},SET_PRIVATE:function(e,t){e.isPrivate=t}},getters:{userInfo:function(e){return e.userInfo},currentChannel:function(e){return e.currentChannel},isPrivate:function(e){return e.isPrivate}},modules:{}}),S=n("1157"),k=n.n(S),A=(n("7b17"),n("ab8b"),n("260b"));window.$=window.jQuery=k.a;var T={apiKey:"AIzaSyAA5BhCNK-BOzFTKtlE4228UKps34knbO4",authDomain:"vuefirebase-5602f.firebaseapp.com",projectId:"vuefirebase-5602f",storageBucket:"vuefirebase-5602f.appspot.com",messagingSenderId:"951054366724",appId:"1:951054366724:web:453a081c755acae0d31d51"};A["a"].initializeApp(T),window.firebase=A["a"];var _=A["a"].auth().onAuthStateChanged((function(e){P.dispatch("setUser",e),Object(r["c"])(c).use($).use(P).use(C).mount("#app"),_()}))}});
//# sourceMappingURL=app.8f80833e.js.map