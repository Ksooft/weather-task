(this["webpackJsonpweather-task"]=this["webpackJsonpweather-task"]||[]).push([[0],{28:function(e,t,c){},30:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(21),s=c.n(r),i=(c(28),c(12)),l=c(8),o=c(2),j=c(10),u=c.n(j),d=c(22),h=c(15),b=c(20),p=c(7),m=(c(30),c(0)),O=function(e){var t=e.requestWeather,c=Object(a.useState)(""),n=Object(p.a)(c,2),r=n[0],s=n[1];return Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"row",children:[Object(m.jsx)("div",{style:{marginLeft:"0"},className:"input-field col s4",children:Object(m.jsx)("input",{id:"city",type:"text",className:"validate",placeholder:"Enter city",value:r,onChange:function(e){return s(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t(r,s)}})}),Object(m.jsx)("div",{style:{marginLeft:"0"},className:"col s2",children:Object(m.jsxs)("button",{className:"btn waves-effect waves-light light-blue darken-3",type:"submit",name:"action",onClick:function(){return t(r,s)},children:["Add city",Object(m.jsx)("i",{className:"material-icons right",children:"send"})]})})]})},f=function(e){var t=e.cityOne,c=e.deleteCity,a=t.temperature,n=t.wind,r=t.description,s=t.city;return Object(m.jsxs)("ul",{className:"collection with-header","data-city":s,children:[Object(m.jsxs)("li",{className:"collection-header",children:[Object(m.jsx)(l.b,{to:"/weather-task/".concat(s),children:s}),Object(m.jsx)("span",{className:"remove-card",onClick:function(){return c(s)},children:Object(m.jsx)("i",{className:"material-icons",children:"close"})})]}),Object(m.jsxs)("li",{className:"collection-item",children:["Temperature: ",a]}),Object(m.jsxs)("li",{className:"collection-item",children:["Wind: ",n]}),Object(m.jsxs)("li",{className:"collection-item",children:["Description: ",r]})]})},x=function(e){var t=e.cities,c=void 0===t?[]:t,a=e.deleteCity;return Object(m.jsx)("div",{className:"cards-weather",children:c.map((function(e,t){return Object(m.jsx)(f,{cityOne:e,deleteCity:a},t+Date.now())}))})},g=function(){return Object(m.jsx)("div",{style:{display:"block",margin:"15px auto 100px auto"},className:"preloader-wrapper big active",children:Object(m.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(m.jsx)("div",{className:"circle-clipper left",children:Object(m.jsx)("div",{className:"circle"})}),Object(m.jsx)("div",{className:"gap-patch",children:Object(m.jsx)("div",{className:"circle"})}),Object(m.jsx)("div",{className:"circle-clipper right",children:Object(m.jsx)("div",{className:"circle"})})]})})};var y=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(p.a)(r,2),l=s[0],o=s[1],j=function(e,t){var c=JSON.parse(localStorage.getItem(t))?JSON.parse(localStorage.getItem(t)):[],a=c.length?[].concat(Object(b.a)(c),[e]):[e];localStorage.setItem(t,JSON.stringify(a))};function f(e){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://weather-restful.herokuapp.com/weather/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(e){return t.apply(this,arguments)}function t(){return(t=Object(h.a)(u.a.mark((function e(t){var c,a,n,r,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=[],a=Object(d.a)(t),e.prev=2,a.s();case 4:if((n=a.n()).done){e.next=13;break}return r=n.value,e.next=8,f(r);case 8:s=e.sent,l=Object(i.a)({city:r},s),c.push(l);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),a.e(e.t0);case 18:return e.prev=18,a.f(),e.finish(18);case 21:return e.abrupt("return",c);case 22:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})))).apply(this,arguments)}function c(){return(c=Object(h.a)(u.a.mark((function t(){var c,a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=JSON.parse(localStorage.getItem("cities"))?JSON.parse(localStorage.getItem("cities")):[],a=JSON.parse(localStorage.getItem("cityNames")),!c.length){t.next=9;break}return n(c),t.next=6,e(a);case 6:r=t.sent,localStorage.setItem("cities",JSON.stringify(r)),"/"===window.location.pathname&&n(r);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()}),[]),Object(m.jsxs)("div",{className:"App container",children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("h1",{children:"React Weather App"}),Object(m.jsx)("a",{href:"https://github.com/Ksooft",target:"_blank",rel:"noopener noreferrer",className:"github",children:Object(m.jsx)("i",{className:"fab fa-github"})})]}),Object(m.jsx)(O,{requestWeather:function(e,t){var c=JSON.parse(localStorage.getItem("cityNames"))?JSON.parse(localStorage.getItem("cityNames")):[];e=e[0].toUpperCase()+e.slice(1).toLowerCase(),o(!0),fetch("https://weather-restful.herokuapp.com/weather/".concat(e)).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(a){if(c.length&&c.includes(e))return alert("\u0414\u0430\u043d\u043d\u044b\u0439 \u0433\u043e\u0440\u043e\u0434 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435");var r=Object(i.a)({city:e},a);n((function(e){return[].concat(Object(b.a)(e),[r])})),j(r,"cities"),j(e,"cityNames"),o(!1),t("")})).catch((function(e){return o(!1),alert("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status,", \u0442\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438: ").concat(e.statusText))}))}}),Object(m.jsx)(x,{cities:c,deleteCity:function(e){document.querySelector('.collection[data-city="'.concat(e,'"')).classList.add("hideAnimation"),setTimeout((function(){n(c.filter((function(t){return t.city!==e})));var t=JSON.parse(localStorage.getItem("cities")).filter((function(t){return t.city!==e}));localStorage.setItem("cities",JSON.stringify(t));var a=JSON.parse(localStorage.getItem("cityNames")).filter((function(t){return t!==e}));localStorage.setItem("cityNames",JSON.stringify(a))}),230)},loading:l}),l?Object(m.jsx)(g,{}):""]})},N=function(e){var t=e.day,c=e.month,a=e.temp,n=e.wind;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{style:{marginLeft:"10px",fontSize:"17px",textAlign:"left"},children:[function(e){var t=new Date,c=new Date;return c.setDate(t.getDate()+e),c.getDate()}(t)," ",c,":"]}),Object(m.jsxs)("ul",{className:"detail-info",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"Temperature:"})," ",a]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"Wind:"})," ",n]})]})]})},v=function(e){var t=e.day,c=e.month,a=e.infoCity,n=e.nameCity;return Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col s12 m12",children:Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"card-content",children:[Object(m.jsx)("span",{style:{fontWeight:500},className:"card-title left-align",children:n}),Object(m.jsxs)("p",{style:{marginLeft:"10px",fontSize:"17px",textAlign:"left"},children:["Today (",t," ",c,"):"]}),Object(m.jsxs)("ul",{className:"detail-info",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"Temperature:"})," ",a.temperature]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"Wind:"})," ",a.wind]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"Description:"})," ",a.description]})]}),a.forecast.map((function(e,t){return Object(m.jsx)(N,{day:+e.day,month:c,temp:e.temperature,wind:e.wind},t)}))]})})})})},w=function(e){var t=e.check,c=Object(a.useState)({}),n=Object(p.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(!0),o=Object(p.a)(i,2),j=o[0],u=o[1],d=t.match.params.city,h=(JSON.parse(localStorage.getItem("cityNames"))?JSON.parse(localStorage.getItem("cityNames")):[]).includes(d);if(Object(a.useEffect)((function(){var e;h&&(e=d,u(!0),fetch("https://weather-restful.herokuapp.com/weather/".concat(e)).then((function(e){return e.json()})).then((function(e){s(e),u(!1)})))}),[]),h){var b=(new Date).getDate(),O=(new Date).toLocaleString("en",{month:"long"});return Object(m.jsxs)("div",{className:"container detail App",children:[Object(m.jsx)(l.b,{to:"/weather-task",className:"detail-back",children:Object(m.jsx)("i",{className:"material-icons",children:"arrow_back"})}),Object(m.jsx)("h1",{style:{textAlign:"center"},children:"React Weather App"}),j?Object(m.jsx)(g,{}):Object(m.jsx)(v,{day:b,month:O,infoCity:r,nameCity:d})]})}return Object(m.jsxs)("div",{className:"notfound",children:[Object(m.jsx)(l.b,{to:"/weather-task",className:"detail-back",children:Object(m.jsx)("i",{className:"material-icons",children:"arrow_back"})}),Object(m.jsx)("h2",{className:"center-align red-text",children:"There is not found page!"})]})},S=function(){return Object(m.jsx)(l.a,{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/weather-task",component:y}),Object(m.jsx)(o.a,{path:"/weather-task/:city",render:function(e){return Object(m.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{check:e}))}})]})})};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.311bf61d.chunk.js.map