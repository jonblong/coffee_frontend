(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(4),o=n.n(i),h=n(3);n(10),n(11);var r=function(){var e="big",t=Object(s.useState)([]),n=Object(h.a)(t,2),a=n[0],i=n[1],o=Object(s.useState)(e),r=Object(h.a)(o,2),j=r[0];return r[1],Object(s.useEffect)((function(){fetch("https://jon-coffee-api.herokuapp.com/get_drinks").then((function(e){return e.json()})).then((function(e){i(e.json_list)}))}),[]),Object(c.jsx)("div",{className:"App",children:j===e&&Object(c.jsxs)("div",{className:"big-container",children:[Object(c.jsx)("h3",{className:"subhead",children:"Jon has had"}),Object(c.jsxs)("h2",{className:"head",children:[a.length," coffees"]}),Object(c.jsx)("h3",{className:"subhead",children:"in 2021."})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(r,{})}),document.getElementById("root")),j()}},[[12,1,2]]]);
//# sourceMappingURL=main.516f03e1.chunk.js.map