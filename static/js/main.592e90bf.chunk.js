(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},429:function(e,t,n){},451:function(e,t,n){},452:function(e,t,n){},453:function(e,t,n){},454:function(e,t,n){},455:function(e,t,n){},456:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(70),s=n.n(o),i=(n(149),n(18)),u=n(19),l=n(488),d=n(487),j=(n(150),n(2)),b=function(e){var t=e.onClick,n=e.pending,r=e.children,a=e.variant,c=e.size,o=e.endIcon,s=e.fullwidth,i=e.error,u=Object(d.a)({button:{color:"#fff !important",borderColor:"#fff !important"}})();return Object(j.jsx)("div",{className:"button",children:Object(j.jsx)(l.a,{size:c||"large",fullWidth:!s,className:n&&u.button,color:i?"error":"primary",loading:n,onClick:t,loadingPosition:"end",variant:a||"contained",endIcon:o||null,children:r})})},p=n(14),f=n(27),x=(n(155),n(39)),h=n.n(x),O=n(126),m=n.n(O),v=n(125),A=n.n(v),g=function(e){var t=e.name,n=e.collectUserData,r=e.userData,c=e.error,o=e.pageName,s=t.toLowerCase(),i=Object(a.useState)(!0),l=Object(u.a)(i,2),d=l[0],b=l[1];return Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)("label",{className:h()("input__label",{"input__label--error":c}),htmlFor:"input",children:t}),"password"===s&&"login"===o?Object(j.jsx)("span",{className:"input__helper__box",children:Object(j.jsx)("button",{onClick:function(){return alert("\u0422\u0430\u043a \u0432\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u0439 \u0431\u043b\u044f\u0442\u044c")},className:"input__helper",children:"\u0417\u0430\u0431\u044b\u043b \u043f\u0430\u0440\u043e\u043b\u044c?"})}):null,Object(j.jsx)("span",{onClick:function(){return b(!d)},className:"password--eye",children:"password"===s?d?Object(j.jsx)(A.a,{}):Object(j.jsx)(m.a,{}):null}),Object(j.jsx)("input",{autoComplete:"off",onChange:function(e){n(Object(f.a)(Object(f.a)({},r),{},Object(p.a)({},e.target.name,e.target.value)))},type:"password"===s&&d?"password":"type",name:s,className:h()("input__field",{"input__field--error":c}),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ".concat(s)})]})},w=n(491),N=(n(156),function(e){var t=e.path;return Object(j.jsxs)("div",{className:"auth--logo",children:[Object(j.jsx)("a",{href:t.toLowerCase(),children:Object(j.jsx)(w.a,{children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"Reload",width:40,height:40})})}),Object(j.jsx)("p",{className:"auth--logo__text",children:"DoTo"})]})}),I=(n(157),function(e){var t=e.children,n=e.large;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:h()({"box--large":n},"box"),children:Object(j.jsx)("div",{className:h()({"box--large__container":n},"box__container"),children:t})}),Object(j.jsx)("div",{className:"box__footer"})]})}),y=n(127),B=n.n(y),C=function(){return Object(j.jsx)(B.a,{options:{background:{color:{value:"#141318"}},fpsLimit:60,particles:{groups:{z5000:{number:{value:70},zIndex:{value:5e3}},z7500:{number:{value:30},zIndex:{value:75}},z2500:{number:{value:50},zIndex:{value:25}},z1000:{number:{value:40},zIndex:{value:10}}},number:{value:200,density:{enable:!1,value_area:800}},color:{value:"#fff",animation:{enable:!1,speed:10,sync:!0}},shape:{type:"circle"},opacity:{value:1,random:!1,animation:{enable:!1,speed:3,minimumValue:.1,sync:!1}},size:{value:3},links:{enable:!1,distance:100,color:"#ffffff",opacity:.4,width:1},move:{angle:{value:10,offset:0},enable:!0,speed:5,direction:"right",random:!1,straight:!0,outModes:{default:"out"},attract:{enable:!1,rotateX:600,rotateY:1200}},zIndex:{value:5,opacityRate:.5}},interactivity:{detectsOn:"canvas",events:{onHover:{enable:!1,mode:"repulse"},onClick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,links:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:.8},repulse:{distance:200},push:{quantity:4,groups:["z5000","z7500","z2500","z1000"]},remove:{quantity:2}}},detectRetina:!0,emitters:{position:{y:55,x:-30},rate:{delay:7,quantity:1},size:{width:0,height:0}}}})},T=n(58),k=(n(429),function(e){var t=e.text,n=e.path,r=e.children;return Object(j.jsxs)("div",{className:"link",children:[Object(j.jsx)("span",{className:"link__text",children:t}),Object(j.jsx)(T.b,{className:"link__field",to:n,children:r})]})}),E=n(29),D=n(7),G=n.n(D),Q=n(43);!function(e){e[e.Success=200]="Success",e[e.EmailIsBusy=300]="EmailIsBusy",e[e.FormatError=400]="FormatError"}(r||(r={}));var Y=n(130),z=n.n(Y).a.create({baseURL:"https://arcane-ravine-92827.herokuapp.com/"}),P=function(e){var t=e.email,n=e.name,r=e.password;return z.post("api/auth/registration",{email:t,name:n,password:r}).then((function(e){return e.data}))},S=function(e){var t=e.email,n=e.password;return z.post("api/auth/login",{email:t,password:n}).then((function(e){return e.data}))},L=function(e){return z.get("api/todo/",{headers:{"Content-Type":"application/json"},params:{userId:e}}).then((function(e){return e.data}))},K=function(e){var t=e.userId,n=e.text;return z.post("api/todo/add",{userId:t,text:n}).then((function(e){return e.data}))},R=function(e){return z.delete("api/todo/delete/".concat(e)).then((function(e){return e.data}))},V=function(e){return z.put("api/todo/completed/".concat(e)).then((function(e){return e.data}))},U=function(e){return z.put("api/todo/important/".concat(e)).then((function(e){return e.data}))},q="auth/SET_PENDING",Z="auth/SET_ERRORS",M="auth/SET_IS_AUTH",J={errors:null,pending:!1,isAuth:!1},X=function(e){return{type:q,boolean:e}},_=function(e){return{type:Z,errors:e}},H=function(e){return{type:M,boolean:e}},F=function(e){return function(){var t=Object(Q.a)(G.a.mark((function t(n){var a;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(X(!0)),t.next=3,P(e);case 3:(a=t.sent).status===r.Success?n(W({email:e.email,password:e.password})):a.status!==r.FormatError&&a.status!==r.EmailIsBusy||(n(_(a.errors)),n(X(!1)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(e){return function(){var t=Object(Q.a)(G.a.mark((function t(n){var a;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(X(!0)),t.next=3,S(e);case 3:(a=t.sent).status===r.Success?(localStorage.setItem("userData",JSON.stringify({name:a.payload.name,id:a.payload.userId,token:a.payload.token})),n(H(!0))):a.status!==r.FormatError&&a.status!==r.EmailIsBusy||n(_(a.errors)),n(X(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(f.a)(Object(f.a)({},e),{},{pending:t.boolean});case Z:return Object(f.a)(Object(f.a)({},e),{},{errors:t.errors});case M:return Object(f.a)(Object(f.a)({},e),{},{isAuth:t.boolean});default:return e}},ee=function(e){var t=e.pageName,n=e.userData,r=e.collectUserData,c=e.inputNames,o=e.buttonClickThunk,s=e.buttonIcon,i=e.buttonText,u=e.linkPath,l=e.linkPrevText,d=e.linkText,p=Object(E.b)();Object(a.useEffect)((function(){return p(_(null))}),[p]);var f=Object(E.c)((function(e){return function(e){return e.auth.errors}(e)})),x=Object(E.c)((function(e){return function(e){return e.auth.pending}(e)}));return Object(j.jsxs)(I,{children:[Object(j.jsx)(N,{path:t}),Object(j.jsxs)("h1",{children:[t," page"]}),Object(j.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[c.map((function(e){return Object(j.jsx)(g,{name:e.field,collectUserData:r,userData:n,pageName:t.toLowerCase(),error:f&&f.fields[e.field.toLowerCase()]},e.id)})),Object(j.jsx)(re,{errors:f}),Object(j.jsx)(b,{onClick:function(){p(o(n))},pending:x,endIcon:s,size:"large",variant:"contained",children:i}),Object(j.jsx)(k,{path:"/".concat(u),text:l,children:d})]})]})},te=(n(451),n(131)),ne=n.n(te),re=function(e){var t=e.errors;return Object(j.jsx)("div",{children:t?Object(j.jsxs)("div",{className:"errors",children:[Object(j.jsx)(ne.a,{color:"error",fontSize:"medium"}),Object(j.jsx)("div",{children:t.messages.map((function(e){return Object(j.jsx)("div",{className:"errors__item",children:e.message})}))})]}):null})},ae=(n(452),n(132)),ce=n.n(ae),oe=n(133),se=n.n(oe),ie=n(484),ue=(n(453),function(e){var t=e.leftIcon,n=e.rightIcon,r=e.children;return Object(j.jsxs)("div",{className:"note--box",children:[Object(j.jsxs)("div",{className:"note--box__left",children:[Object(j.jsx)("div",{className:"note--box__icon__box",children:t}),Object(j.jsx)("div",{className:"note--box__body",children:r})]}),Object(j.jsx)("div",{className:"note--box__right--icon",children:n?n.map((function(e){return Object(j.jsx)("div",{children:e.icon},e.id)})):null})]})}),le=n(36),de="todo/SET_PENDING",je="todo/SET_TODO",be="todo/SET_TODO_OBJECT",pe={pending:!1,todos:[]},fe=function(e){return{type:de,boolean:e}},xe=function(e){return function(){var t=Object(Q.a)(G.a.mark((function t(n){var r;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(fe(!0)),t.next=3,L(e);case 3:r=t.sent,n({type:je,todo:r}),n(fe(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(f.a)(Object(f.a)({},e),{},{todos:t.todo.reverse()});case be:return Object(f.a)(Object(f.a)({},e),{},{todos:[t.todo].concat(Object(le.a)(e.todos))});case de:return Object(f.a)(Object(f.a)({},e),{},{pending:t.boolean});default:return e}},Oe=function(e){var t=e.body,n=e.completed,r=e.important,a=e.noteId,c=e.userId,o=Object(E.b)();return Object(j.jsx)(ue,{leftIcon:Object(j.jsx)("div",{onClick:function(){o(function(e,t){return function(){var n=Object(Q.a)(G.a.mark((function n(r){return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V(e);case 2:r(xe(t));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(a,c))},className:h()("note__check__box",{note__check__box__completed:n}),children:Object(j.jsx)(ce.a,{className:h()("note__check",{note__check__completed:n})})}),rightIcon:[{id:1,icon:Object(j.jsx)(se.a,{onClick:function(){o(function(e,t){return function(){var n=Object(Q.a)(G.a.mark((function n(r){return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U(e);case 2:r(xe(t));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(a,c))},className:h()("note__important",{note__important__active:r})})},{id:2,icon:Object(j.jsx)(ie.a,{onClick:function(){o(function(e,t){return function(){var n=Object(Q.a)(G.a.mark((function n(r){return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R(e);case 2:r(xe(t));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(a,c))},className:"note__delete"})}],children:Object(j.jsx)("span",{className:h()("note__text",{note__text__completed:n}),children:t})})},me=(n(454),n(485)),ve=n(486),Ae=function(e){var t=e.setNoteData,n=e.userData,r=e.noteData,a=Object(E.b)();return Object(j.jsx)("div",{style:{marginBottom:"30px"},children:Object(j.jsx)(ue,{leftIcon:Object(j.jsx)(me.a,{}),rightIcon:[{id:1,icon:Object(j.jsx)(ve.a,{style:{cursor:"pointer"},onClick:function(){var e,t;a((e=n.id,t=r,function(){var n=Object(Q.a)(G.a.mark((function n(r){var a;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(fe(!0)),n.next=3,K({userId:e,text:t});case 3:a=n.sent,r({type:be,todo:a}),r(fe(!1));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))}})}],children:Object(j.jsx)("textarea",{className:"main--input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442...",onChange:function(e){t(e.target.value)}})})})},ge=n(134),we=n.n(ge),Ne=function(e){var t=Object(a.useState)({email:"",name:"",password:""}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(j.jsx)(ee,{pageName:"Registration",userData:r,collectUserData:c,inputNames:[{id:1,field:"Email"},{id:2,field:"Name"},{id:3,field:"Password"}],buttonClickThunk:F,buttonIcon:Object(j.jsx)(we.a,{}),buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",linkPath:"login",linkPrevText:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?",linkText:"Log In"})},Ie=n(135),ye=n.n(Ie),Be=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(j.jsx)(ee,{pageName:"Login",userData:r,collectUserData:c,inputNames:[{id:1,field:"Email"},{id:2,field:"Password"}],buttonClickThunk:W,buttonIcon:Object(j.jsx)(ye.a,{}),buttonText:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442",linkPath:"registration",linkPrevText:"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?",linkText:"Sign In"})},Ce=(n(455),n(137)),Te=n.n(Ce),ke=n(136),Ee=n.n(ke),De=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return function(e){return e.todo.todos}(e)})),n=JSON.parse(localStorage.getItem("userData"));Object(a.useEffect)((function(){e(xe(n.id))}),[e,n.id]);var r=Object(a.useState)(""),c=Object(u.a)(r,2),o=c[0],s=c[1];return Object(j.jsx)(I,{large:!0,children:Object(j.jsxs)("div",{className:"main",children:[Object(j.jsxs)("div",{className:"main__nav",children:[Object(j.jsx)(N,{path:"/"}),Object(j.jsxs)("div",{className:"main__name__block",children:[Object(j.jsx)(Ee.a,{}),Object(j.jsx)("p",{children:n.name})]}),Object(j.jsx)(b,{fullwidth:!0,onClick:function(){return e(function(){var e=Object(Q.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userData"),t(H(!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},pending:!1,size:"medium",variant:"outlined",error:!0,endIcon:Object(j.jsx)(Te.a,{}),children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(j.jsxs)("div",{className:"main__content",children:[Object(j.jsx)("div",{style:{},children:Object(j.jsx)(Ae,{setNoteData:s,userData:n,noteData:o})}),t.map((function(e){return Object(j.jsx)(Oe,{noteId:e._id,userId:e.owner,completed:e.completed,important:e.important,body:e.text},e._id)}))]})]})})},Ge=function(){var e=Object(E.c)((function(e){return function(e){return e.auth.isAuth}(e)})),t=Object(E.b)();return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&t(H(!0))}),[t]),Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(C,{}),Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/login",children:e?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)(Be,{})}),Object(j.jsx)(i.b,{path:"/registration",children:e?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)(Ne,{})}),Object(j.jsx)(i.b,{exact:!0,path:"/",children:e?Object(j.jsx)(De,{}):Object(j.jsx)(i.a,{to:"login"})}),Object(j.jsx)(i.b,{path:"*",children:Object(j.jsx)(I,{children:Object(j.jsx)("div",{style:{color:"rgb(210, 0, 0)",fontSize:"26px"},children:"Error 404. Page not found."})})})]})]})},Qe=n(63),Ye=n(138),ze=Object(Qe.b)({todo:he,auth:$}),Pe=Object(Qe.d)(ze,Object(Qe.c)(Object(Qe.a)(Ye.a)));window.__store__=Pe;var Se=Pe;s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(E.a,{store:Se,children:Object(j.jsx)(T.a,{children:Object(j.jsx)(Ge,{})})})}),document.getElementById("root"))}},[[456,1,2]]]);
//# sourceMappingURL=main.592e90bf.chunk.js.map