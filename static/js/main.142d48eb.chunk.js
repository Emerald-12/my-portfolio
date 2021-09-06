(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{61:function(n,e,t){"use strict";t.r(e);var r,i=t(0),c=t.n(i),a=t(38),o=t.n(a),l=t(8),s=t(6),d=t(3),j=t(2),b=Object(j.b)(r||(r=Object(d.a)(["\n    root{\n        box-sizing: border-box;\n        \n    }\n\n    html {\n        font-family: arial;\n    }\n\n    body{\n        margin: 0;\n        overflow-x: hidden;\n        position:relative;\n        min-height:100vh;\n        min-width:100%;\n        padding:0;\n        background-color: #171717;\n    }\n\n    ul {\n        margin:1rem;\n        padding:1rem;\n        list-style-type: none;\n      }\n"]))),h=t(1);var p,x,g,m,u=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{style:{color:"silver",textAlign:"center"},children:"Tom Knutsen"}),Object(h.jsx)("p",{style:{fontStyle:"italic",color:"silver",textAlign:"center"},children:"Siden om, av og for Tom"})]})},f=t.p+"static/media/Me.ed8f774d.jpg",O=t(22),v=t(42),w=j.c.div(p||(p=Object(d.a)(['\n    position:absolute;\n    bottom:0;\n    left:0;\n    background-color: #202020;\n    width:100%;\n    height:2.5rem;\n    padding:0;\n    margin:0;\n    display: grid;\n        grid-template-columns: 300px  2.5rem 2fr;\n        grid-template-rows: 1fr;\n        gap: 0px 0px;\n        grid-auto-flow: row;\n        grid-template-areas:\n            "copyright github something ";\n']))),k=Object(j.c)(O.a)(x||(x=Object(d.a)(["\nheight:2rem;\nwidth:2.5rem;\ncolor:silver;\npadding:0 ;\nmargin:0;\ngrid-area: github;\n\n\n\n:hover{\n    background-color: silver;\n    color:black;\n    border-radius:100%;\n}\n"]))),y=j.c.p(g||(g=Object(d.a)(["\n    grid-area: copyright;\n    margin:0;\n    /* padding: 0;  */\n    color:silver;\n    font-size: 1.5rem;\n    text-align: center;\n    align-self:center;\n\n"]))),z=j.c.a(m||(m=Object(d.a)(["\nalign-self:center;\njustify-self: center;\n"])));function C(){return Object(h.jsxs)(w,{children:[Object(h.jsx)(z,{href:"https://github.com/tomkhcoding",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(k,{icon:v.a,size:"2x"})}),Object(h.jsx)(y,{children:"\xa9 Tom Knutsen 2021"})]})}var A,T=t(14),E=c.a.createContext(),P=c.a.createContext();function S(){return Object(i.useContext)(E)}function H(){return Object(i.useContext)(P)}function I(n){var e=n.children,t=Object(i.useState)(!1),r=Object(T.a)(t,2),c=r[0],a=r[1];return Object(h.jsx)(E.Provider,{value:c,children:Object(h.jsx)(P.Provider,{value:function(){a((function(n){return!n})),console.log(c)},children:e})})}var _,F,J=j.c.button(A||(A=Object(d.a)(["\n    background-color: ",";\n    color: ",";\n    border:"," ;\n    margin: 0;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    border-radius: 15px;\n    width: 100%;\n    height:fit-content;\n    padding:5px;\n    width:200px;\n\n    text-decoration:none;\n    font-size:0.75em;\n    @media (max-width: 769px) {\n        min-height:100%;\n        width:150px;\n        min-width:75px;\n        max-width:150px;\n    }\n\n    .active & {\n        color:white;\n        text-decoration: underline;\n        background-color:black;\n        border: 2px solid silver;\n    }\n"])),(function(n){return n.disabled?"#d5131e":"silver"}),(function(n){return n.disabled?"black":null}),(function(n){return n.project?"solid black 3px":n.disabled?"solid black 1px":"none"}));function K(n){var e=S(),t=H();return Object(h.jsx)(J,{draggable:"false",onClick:!e&&!n.mobile||n.mobile?t:void 0,children:Object(h.jsx)("h1",{children:n.text})})}var M,B=j.c.div(_||(_=Object(d.a)(["\ndisplay:grid;\npadding:0;\nmargin:0;\nalign-items:'center';\ngap: 20% 0;\nmargin-top: 20%;\nalign-content: center;\njustify-content: center;\nheight: stretch;\n@media (max-width: 769px) {\n  height:auto;\n  gap: 30% 0;\n  margin-top:50%;\n}\n"]))),L=Object(j.c)(l.c)(F||(F=Object(d.a)(["\nwidth:75%;\n/* justify-self:center; */\n& :hover {\n    background-color:rgba(150, 150, 150);\n    border-radius: 15px;      \n    * {\n      text-decoration:underline;\n    }\n  }\n\n  & .active {\n    pointer-events:none;\n    user-select:none;\n    cursor:default;\n  }\n  text-decoration:none;\n"])));function R(n){return console.log(n),Object(h.jsxs)(B,{children:[n.mobile?Object(h.jsx)(L,{exact:!0,to:"/",children:Object(h.jsx)(K,{mobile:n.mobile,text:"Home"})}):null,Object(h.jsx)(L,{to:"/projects",children:Object(h.jsx)(K,{mobile:n.mobile,text:"Projects"})}),Object(h.jsx)(L,{to:"/about",children:Object(h.jsx)(K,{mobile:n.mobile,text:"About"})}),Object(h.jsx)(L,{to:"/contact",children:Object(h.jsx)(K,{mobile:n.mobile,text:"Contact"})})]})}var q=j.c.div(M||(M=Object(d.a)(["\n    position:absolute;\n    transition: all 1s;\n    height: 100%;\n    background-color: black;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    left: ",";\n    top:50%;\n    width:100%;\n    grid-area: picture, title;\n"])),(function(n){return n.theme.left}));function D(){var n=S()?{left:"50%"}:{left:"-100%"};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(j.a,{theme:n,children:Object(h.jsx)(q,{children:Object(h.jsx)(R,{mobile:!0})})})})}var G,N,Q,U,V,W=t(34),X=Object(j.c)(O.a)(G||(G=Object(d.a)(["\n\n"]))),Y=j.c.div(N||(N=Object(d.a)(["\n    z-index:1;\n    position: absolute;\n    top:0;\n    right:0;\n    color:white;\n    margin-right: 25px;\n    margin-top:13.75px;\n"])));function Z(){var n=S(),e=H();return Object(h.jsx)(Y,{children:Object(h.jsx)(X,{icon:n?W.b:W.a,size:"3x",onClick:e})})}function $(){var n=S(),e=H();return Object(i.useEffect)((function(){n&&e()}),[]),Object(h.jsx)("div",{children:Object(h.jsx)("p",{style:{color:"white"},children:"Hello projects world"})})}var nn,en,tn,rn,cn=j.c.div(Q||(Q=Object(d.a)(['\nposition: relative;\ndisplay: grid; \nheight:100vh;\n    grid-template-columns: 1fr; \n    grid-template-rows: 2fr 1fr min-content; \n    gap: 0px 0px; \n    grid-template-areas: \n        "picture"\n        "title"\n        "footer"; \n']))),an=j.c.img(U||(U=Object(d.a)(["\nwidth: 250px;\nborder-radius: 100%;\ngrid-area:picture;\njustify-self:center;\nalign-self: center;\n"]))),on=Object(j.c)(u)(V||(V=Object(d.a)(["\ngrid-area:title;\n"])));function ln(){return Object(h.jsx)(l.b,{children:Object(h.jsxs)(cn,{children:[Object(h.jsx)(Z,{}),Object(h.jsx)(D,{}),Object(h.jsxs)(s.c,{children:[Object(h.jsxs)(s.a,{exact:!0,path:"/",children:[Object(h.jsx)(an,{src:f,alt:"A handsome Tom"}),Object(h.jsx)(on,{})]}),Object(h.jsx)(s.a,{path:"/projects",component:$})]}),Object(h.jsx)(C,{})]})})}var sn=j.c.img(nn||(nn=Object(d.a)(["\n    width: 250px;\n    border-radius: 100%;\n    align-items: center;\n    z-index:-1;\n"]))),dn=j.c.div(en||(en=Object(d.a)(["\n    position: relative;\n    \n"]))),jn=j.c.div(tn||(tn=Object(d.a)(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 250px;\n    width: 250px;\n    opacity:0;\n    transition: .5s ease;\n    background-color: #aaa9ad99;\n    border-radius: 100%;\n    margin-left: 1.5rem;\n    z-index:1;\n\n    :hover {\n        opacity:",";\n        /* pointer-events:none; */\n        user-select:none;\n        cursor:default;\n        left:0;\n    }\n"])),(function(n){return n.theme.opacity})),bn=j.c.text(rn||(rn=Object(d.a)(["\n    position: absolute;\n    top:50%;\n    left:50%;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    text-align: center;\n    font-size: 32px;\n    color:#171717;\n"])));var hn,pn=function(){var n=Object(s.f)(),e=Object(i.useCallback)((function(){return n.push("/")}),[n]),t=c.a.useState({}),r=Object(T.a)(t,2),a=r[0],o=r[1],l=S(),d=H(),b={opacity:"1"},p={opacity:"0"},x=Object(s.g)();return Object(i.useEffect)((function(){"/"===x.pathname&&o(p),"/"!==x.pathname&&o(b)}),[x]),Object(h.jsx)(j.a,{theme:a,children:Object(h.jsxs)(dn,{children:[Object(h.jsx)(sn,{src:f,alt:""}),Object(h.jsx)(jn,{onClick:function(){"/"!==x.pathname&&e(),l&&d(!1)},children:Object(h.jsx)(bn,{children:"Home"})})]})})},xn=j.c.div(hn||(hn=Object(d.a)(["\n  position: absolute;\n  top:0;\n  text-align: center;\n  width:300px;\n  ","\n  transition: all 1s;\n  height:fill;\n"])),(function(n){return n.theme}));var gn,mn,un,fn,On=function(){var n=S()?{left:"0%"}:{left:"40%"};return Object(h.jsx)(j.a,{theme:n,children:Object(h.jsxs)(xn,{children:[Object(h.jsx)(pn,{}),Object(h.jsx)(u,{}),Object(h.jsx)(R,{mobile:!1})]})})},vn=t(43),wn=Object(j.c)(l.c)(gn||(gn=Object(d.a)(["\n  text-decoration:none;"]))),kn=j.c.div(mn||(mn=Object(d.a)(["\n    grid-area: list;\n    display:grid;\n    align-items:'center';\n    gap: 15px 0;\n    margin: 50% 0;\n    width:225px;\n    padding-left: 15px;\n    height:60vh;\n\n    ",",",", * "," {\n        min-height:0;\n        height: 100px;}\n\n    \n     ",":hover ","{\n      background-color:",";\n      border-radius: 15px;\n      text-decoration: ",";\n    }\n\n    * .active {\n      pointer-events:none;\n      user-select:none;\n      cursor:default;\n    }\n\n  "])),J,wn,J,wn,J,(function(n){return n.disabled?"none":"rgba(150, 150, 150)"}),(function(n){return n.disabled?"none":"underline"})),yn=j.c.div(un||(un=Object(d.a)(['\n    height:90vh;\n    max-width: calc(100vw - 300px);\n    padding-top:1rem;\n    margin-right:2rem;\n    display: grid; \n        grid-template-columns: 0.25fr 1fr 1fr; \n        grid-template-rows: 2fr 1fr; \n        gap: 15px 15px; \n        grid-template-areas: \n            "list iframe iframe"\n            "list info1 info2"; \n']))),zn=j.c.div(fn||(fn=Object(d.a)(["\nfont-size:1.25rem;\nborder-radius:15px;\npadding:8px;\ncolor:white;\nfont-weight:bold;\nmargin:0;\nwhite-space:pre-wrap;\n/* width:400px; */\n\na{\n    color:black;\n    transition: all 0.25s;\n} a:hover {\n    font-size:130%;\n    transition: all 0.25s;\n}\n\n"])));var Cn,An,Tn,En,Pn,Sn,Hn,In=function(){var n=S(),e=H();Object(i.useEffect)((function(){n||e()}),[]);var t=function(){var n=Object(vn.a)("https://tomkhcoding.github.io/api/projects.json",{headers:{accept:"application/json"}}),e=n.data,t=n.error;return t?t.message:e?Object(h.jsx)(l.b,{basename:"/projects",children:Object(h.jsxs)(yn,{children:[Object(h.jsx)(kn,{children:e.slice(0,5).map((function(n){return Object(h.jsx)(h.Fragment,{children:"disabled"===n.state?Object(h.jsx)(J,{disabled:!0,children:Object(h.jsx)("h1",{children:"".concat(n.name)})},n.id):Object(h.jsx)(wn,{exact:!0,to:"/".concat(n.path),children:Object(h.jsx)(J,{project:!0,children:Object(h.jsx)("h1",{children:"".concat(n.name)})})},n.id)})}))}),Object(h.jsx)(s.c,{children:e.slice(0,5).map((function(n){return Object(h.jsxs)(s.a,{exact:!0,path:"/".concat(n.path),children:[Object(h.jsx)("iframe",{style:{gridArea:"iframe",border:"none",borderRadius:"15px"},src:"".concat(n.url),title:"".concat(n.name),width:"100%",height:"100%",scrolling:"no"}),Object(h.jsx)(zn,{style:{gridArea:"info1"},children:Object(h.jsx)("p",{children:n.description})}),Object(h.jsx)(zn,{style:{gridArea:"info2"},children:Object(h.jsxs)("p",{children:["The Project is available, in it's current state, here:",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"".concat(n.url),target:"_blank",rel:"noreferrer",children:"tomkhcoding.github.io/pokemon-search"})]})})]},n.id)}))})]})}):null};return Object(h.jsx)(t,{})};function _n(){var n=j.c.div(Cn||(Cn=Object(d.a)(['\n        display: grid; \n            grid-template-columns: 1fr 1fr 1fr; \n            grid-template-rows: 1fr 1fr 1fr; \n            gap: 0px; \n            grid-template-areas: \n                ". general general"\n                ". general general"\n                ". . ."; \n        margin-right:1rem;\n        width:100%;\n\n    ']))),e=j.c.div(An||(An=Object(d.a)(["\n        grid-area: general;\n        background-color: #202020;\n        color:white;\n        padding: 1rem;\n    "])));return Object(h.jsx)(n,{children:Object(h.jsx)(e,{children:"I am a web developer in training"})})}function Fn(){var n=j.c.div(Tn||(Tn=Object(d.a)(['\n        display: grid; \n            grid-template-columns: 1fr 1fr 1fr; \n            grid-template-rows: 1fr 1fr 1fr 1fr; \n            gap: 0px; \n            grid-template-areas:\n                ". . ."\n                ". general general"\n                ". general general"\n                ". . ."; \n        margin-right: 5rem;\n        height: 100%;\n    ']))),e=j.c.div(En||(En=Object(d.a)(["\n        grid-area: general;\n        background-color: #202020;\n        color:white;\n        padding: 1rem;\n        border-radius: 15px;\n    "]))),t=j.c.a(Pn||(Pn=Object(d.a)(["\n        color: silver;\n    "])));return Object(h.jsx)(n,{children:Object(h.jsxs)(e,{children:[Object(h.jsx)("h2",{children:"Email:"})," ",Object(h.jsx)(t,{href:"mailto:tom.kodehode@gmail.com",children:"tom.kodehode@gmail.com"}),Object(h.jsx)("h2",{children:"LinkedIn:"})," ",Object(h.jsx)(t,{href:"https://www.linkedin.com/in/tom-knutsen-a2a2b021b/",target:"_blank",rel:"noreferrer",children:"https://www.linkedin.com/in/tom-knutsen-a2a2b021b/"})]})})}var Jn=j.c.div(Sn||(Sn=Object(d.a)(["\n  position: absolute;\n  bottom:0;\n  width:100%;\n  padding-bottom:1px;\n"]))),Kn=j.c.div(Hn||(Hn=Object(d.a)(["\n  position: absolute;\n  transition: all 1s;\n  width:stretch;\n  max-width: calc(100vw - 300px);\n  height: calc(100vh - 2.5rem - 3px);\n  left: ",";\n  padding: 0;\n  top: 0;\n  border-left: 3px solid silver;\n  border-bottom: 3px solid silver;\n  opacity:",";\n  background: linear-gradient(to bottom right, rgba(60,0,150,1) 0%,rgba(0,220,255,1)  100%);\n  /* background-color:#777777; */\n  "])),(function(n){return n.theme.left}),(function(n){return n.theme.opacity}));function Mn(){var n=S()?{left:"300px",opacity:"1"}:{left:"100%",opacity:"0"};return Object(h.jsxs)("div",{children:[Object(h.jsxs)(l.b,{children:[Object(h.jsx)(On,{}),Object(h.jsx)(j.a,{theme:n,children:Object(h.jsx)(s.c,{children:Object(h.jsxs)(Kn,{children:[Object(h.jsx)(s.a,{path:"/projects",component:In}),Object(h.jsx)(s.a,{path:"/about",component:_n}),Object(h.jsx)(s.a,{path:"/contact",component:Fn})]})})})]}),Object(h.jsx)(Jn,{children:Object(h.jsx)(C,{})})]})}var Bn=function(){var n=window.matchMedia("(max-width: 769px)"),e=window.location.href;return n.matches&&!e.includes("/m/")&&function(){var n=Object(s.f)();console.log(n),n.replace("/m/")}(),Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/",component:Mn}),Object(h.jsx)(s.a,{exact:!0,path:"/m/",component:ln})]})]})};o.a.render(Object(h.jsx)(I,{children:Object(h.jsx)(l.a,{basename:"/my-portfolio",hashType:"slash",children:Object(h.jsx)(Bn,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.142d48eb.chunk.js.map