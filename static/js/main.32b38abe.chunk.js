(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(1),i=n(0),a=n(16),l=n(3),r=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=s.NODE_ENV,o=s.REACT_APP_GA_TRACKING_ID;"production"===j&&r.a.initialize(o);var b=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},u=n(5),d=n(24),h=[{index:!0,label:"Elena Feraru",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(3).then(n.t.bind(null,59,7))})),m=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return a(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Elena Feraru"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:nferaru07@gmail.com",children:"nferaru07@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Imi place deosebit de mult sa citesc, sa schitez portrete si sa gatesc. De asemenea, sunt cinefil si imi place sa imi ghidez creativitatea spre a face powerpointuri personalizate."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsx)("section",{id:"footer",children:Object(c.jsx)(p.a,{})})]})},g=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(a.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | Elena Feraru",defaultTitle:"Elena Feraru",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Elena Feraru's personal website."};t.a=v},25:function(e,t,n){"use strict";var c=n(1),i=(n(0),n(29)),a=n(30),l=n(31),r=n(32),s=n(33),j=n(34),o=n(35),b=[{link:"https://github.com/",label:"Github",icon:a.faGithub},{link:"https://facebook.com/",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/_elicraft/",label:"Instagram",icon:r.faInstagram},{link:"https://www.linkedin.com",label:"LinkedIn",icon:s.faLinkedinIn},{link:"https://twitter.com",label:"Twitter",icon:j.faTwitter},{link:"mailto:nferaru07@gmail.com",label:"Email",icon:o.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:b.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),a=n.n(i),l=n(15),r=n(5),s=n(3),j=n(21),o=(n(48),Object(i.lazy)((function(){return n.e(5).then(n.bind(null,56))}))),b=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,62))})),u=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,57))})),d=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,58))})),h=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,61))})),O=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,60))})),m=function(){return Object(c.jsx)(r.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(s.a,{path:"/about",component:o}),Object(c.jsx)(s.a,{path:"/projects",component:h}),Object(c.jsx)(s.a,{path:"/contact",component:b}),Object(c.jsx)(s.a,{path:"/resume",component:O}),Object(c.jsx)(s.a,{component:d,status:404})]})})})},x=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})})},p=document.getElementById("root");p.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(x,{}),p):Object(l.render)(Object(c.jsx)(x,{}),p)}},[[49,1,2]]]);
//# sourceMappingURL=main.32b38abe.chunk.js.map