(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),o=n(4),i=n.n(o),h=n(3);n(10);var r=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],o=Object(s.useState)("big"),i=Object(h.a)(o,2);return i[0],i[1],Object(s.useEffect)((function(){fetch("https://jon-coffee-api.herokuapp.com/get_drinks").then((function(e){return e.json()})).then((function(e){a(e.json_list)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h3",{className:"subhead",children:"Jon has consumed"}),Object(c.jsxs)("h2",{className:"head",children:[n.length," coffees"]}),Object(c.jsx)("h3",{className:"subhead",children:"in 2021."})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(r,{})}),document.getElementById("root")),u()}},[[11,1,2]]]);
//# sourceMappingURL=main.c398a4ee.chunk.js.map