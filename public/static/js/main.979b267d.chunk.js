(this["webpackJsonpie-frontend"]=this["webpackJsonpie-frontend"]||[]).push([[0],{54:function(e,t,a){e.exports=a(77)},59:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),l=(a(59),a(10)),c=a(40),m=a(13),u=a(35);var s=Object(u.GoogleApiWrapper)({apiKey:"AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28",LoadingContainer:function(e){return r.a.createElement("div",{style:{height:"30vh",width:"30vh"}},"Loading map!")}})((function(e){var t=r.a.useState(e.initialCenter),a=Object(m.a)(t,2),n=a[0],i=a[1];return r.a.createElement("div",{style:{position:"relative",height:"40vh",minWidth:"60vh",maxWidth:"80vh"}},r.a.createElement(u.Map,{onClick:function(t,a,n){var r={lat:n.latLng.lat(),lng:n.latLng.lng()};i(r),void 0!==e.onMarkerChanged&&e.onMarkerChanged(r)},google:e.google,zoom:14,initialCenter:e.initialCenter,style:{width:"100%",height:"100%"}},r.a.createElement(u.Marker,{position:n})))})),d=(a(75),a(115)),p=a(120),h=a(109),f=a(118),E=a(114),v=a(116),g=a(106),b=Object(g.a)((function(e){return{formControl:{width:"100%",margin:e.spacing(1)},selectEmpty:{marginTop:e.spacing(2)},formTextField:{margin:e.spacing(1),width:"100%",height:"100%"},formMapElement:{width:"100%",height:"100%"}}}));var O=function(e){var t="LOADED",a=b(),i=Object(n.useState)(0),o=Object(m.a)(i,2),u=o[0],g=(o[1],r.a.useState({})),O=Object(m.a)(g,2),y=O[0],j=O[1],w=Object(n.useState)("LOADING"),k=Object(m.a)(w,2),N=k[0],S=k[1],x=Object(n.useState)(),C=Object(m.a)(x,2),D=C[0],L=C[1];Object(n.useEffect)((function(){S("LOADING"),fetch("https://ie-hw1.herokuapp.com/api/forms/".concat(e.formId)).then((function(e){return e.json()})).then((function(e){L(e),S(t)}))}),[u]);var I={lat:35.717752,lng:51.370039};function M(e){return"".concat(e,"MarkerPosition")}return"LOADING"===N?r.a.createElement("div",null,"loading"):"ERROR"===N?r.a.createElement("div",null,"error"):N===t?r.a.createElement("div",{className:"DynamicForm"},r.a.createElement("div",{className:"DynamicForm"},r.a.createElement("h1",null,D.title),r.a.createElement("form",{method:"post"},D.fields.map((function(e){return r.a.createElement("div",{key:e.name},function(e){if(void 0!==e.options){if(N===t)return r.a.createElement("div",null,r.a.createElement(h.a,{className:a.formControl,variant:"outlined"},r.a.createElement(f.a,{htmlFor:e.name+"Select"},e.title),r.a.createElement(v.a,{required:!0,labelWidth:9*e.title.length,inputProps:{name:e.name,id:e.name+"Select"}},e.options.map((function(e){return r.a.createElement(E.a,{key:e.value,value:JSON.stringify(e.value)},e.label)})))))}else switch(e.type){case"Text":return r.a.createElement(p.a,{variant:"outlined",required:e.required,className:a.formTextField,label:e.title,name:e.name,type:"text"});case"Number":return r.a.createElement(p.a,{variant:"outlined",className:a.formTextField,label:e.title,name:e.name,type:"number"});case"Location":return void 0===y[M(e.name)]&&(y[M(e.name)]=I),r.a.createElement("div",null,r.a.createElement("p",null,e.title),r.a.createElement("div",{className:a.formMapElement},r.a.createElement("input",{name:e.name,value:JSON.stringify(y[M(e.name)]),hidden:!0}),r.a.createElement(s,{onMarkerChanged:function(t){j((function(a){return Object(c.a)({},a,Object(l.a)({},M(e.name),t))})),console.log(y)},initialCenter:I})));case"Date":return r.a.createElement(p.a,{variant:"outlined",className:a.formTextField,label:e.title,name:e.name,type:"date"});default:return r.a.createElement("p",null,"type ",e.type," not supported")}}(e))})),r.a.createElement(d.a,{style:{margin:"8px",width:"100%"},type:"submit",variant:"contained",color:"primary"},"submit")))):void 0};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(113),j=a(78),w=a(119);o.a.render(r.a.createElement((function(e){var t="LOADING",a="ERROR",i="LOADED",l=Object(n.useState)(),c=Object(m.a)(l,2),u=c[0],s=c[1],d=Object(n.useState)(t),p=Object(m.a)(d,2),h=p[0],f=p[1],E=Object(n.useState)(0),v=Object(m.a)(E,2),g=v[0];return v[1],Object(n.useEffect)((function(){f(t),console.log("loading"),fetch("https://ie-hw1.herokuapp.com/api/forms").then((function(e){return e.json()})).then((function(e){s(e),f(i)}))}),[g]),function(){switch(h){case i:return r.a.createElement(y.a,{component:"nav","aria-label":"secondary mailbox folders"},u.map((function(e){return r.a.createElement(j.a,{button:!0,key:e.id},r.a.createElement(w.a,{primary:e.title,onClick:b.bind("id",e.id)}))})));case t:return r.a.createElement("p",null,"loading");case a:return r.a.createElement("p",null,"error")}}();function b(e){o.a.render(r.a.createElement(O,{formId:e}),document.getElementById("root"))}}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.979b267d.chunk.js.map