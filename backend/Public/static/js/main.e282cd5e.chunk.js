(this.webpackJsonpinotebook=this.webpackJsonpinotebook||[]).push([[0],{53:function(e,t,s){},82:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),o=s(31),a=s.n(o),r=(s(53),s(13)),l=s(4),i=s(2),d=Object(n.createContext)(),b=s(20),j=s.n(b),m=s(24),u=s(18),x=s.n(u),h=function(e){return x.a.post("/api/auth/createuser",e)},g=function(e){return x.a.post("/api/auth/login",e)},f=function(){var e=Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/auth/getuser",{headers:{token:localStorage.getItem("token")}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/notes/fetchnotes",{headers:{token:localStorage.getItem("token")}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=Object(n.createContext)(),v=s(1),y=function(e){var t=Object(n.useState)([]),s=Object(i.a)(t,2),c=s[0],o=s[1],a=Object(n.useState)(!0),r=Object(i.a)(a,2),b=r[0],j=r[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),x=(u[0],u[1]),h=Object(n.useState)("hidden"),g=Object(i.a)(h,2),f=(g[0],g[1]),y=Object(n.useContext)(p).islogin;Object(l.f)(),Object(l.g)();return Object(n.useEffect)((function(){Promise.resolve(O()).then((function(e){o(e.data.notes)})).catch((function(e){"jwt malformed"===e.response.data.error&&x("Login again"),f("block"),setTimeout((function(){f("hidden")}),2e3)}))}),[y,b]),Object(v.jsx)(d.Provider,{value:[c,o,b,j],children:e.children})},w=s(26),N=s.p+"static/media/logo.0b3eb43c.png",k=s.p+"static/media/userLogo.05a58d93.png",C=s(84),S=s(85),P=Object(n.createContext)(),F=function(e){var t=Object(n.useState)(null),s=Object(i.a)(t,2),c=s[0],o=s[1];return Object(v.jsx)("div",{children:Object(v.jsx)(P.Provider,{value:[c,o],children:e.children})})},T=function(e){return Object(v.jsx)("div",{className:"w-max bg-red-400 fixed top-6 text-center right-0 md:right-24 md:top-12 rounded-lg px-4 py-2 font-semibold ",children:e.message})},I=function(){var e=Object(n.useContext)(P),t=Object(i.a)(e,2),s=(t[0],t[1]),c=Object(n.useState)("hidden"),o=Object(i.a)(c,2),a=o[0],r=o[1],l=Object(n.useState)(""),d=Object(i.a)(l,2),b=d[0],j=d[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"".concat(a),children:Object(v.jsx)(T,{message:b})}),Object(v.jsx)("div",{className:"flex bg-white items-center mx-8 gap-3 shadow-md px-8",children:Object(v.jsxs)("div",{className:"flex items-center w-1/2 md:w-max gap-3",onChange:function(e){var t;Promise.resolve((t=e.target.value,x.a.get("/api/notes/searchnote/".concat(t),{headers:{token:localStorage.getItem("token")}}))).then((function(e){r("hidden"),s(e.data.notes)})).catch((function(t){"no note found"==={error:t}.error.response.data.e&&(s(null),j("No note found for ".concat(e.target.value)),r("flex"))}))},children:[Object(v.jsx)(w.e,{className:"text-zomato-500"}),Object(v.jsx)("input",{type:"text",placeholder:"Search By Note Or By Tag",name:"location",id:"location",className:"py-2 w-max rounded-md text-md"})]})})]})},L=function(){return Object(v.jsx)("div",{className:"w-44 h-36",children:Object(v.jsx)(r.b,{to:"/",children:Object(v.jsx)("img",{className:"w-full h-full",src:N,alt:"logo"})})})},E=function(){var e=Object(l.f)(),t=Object(n.useContext)(p),s=t.gPhoto,c=t.setGPhoto,o=(t.islogin,t.setlogin);return c(localStorage.getItem("googlePhoto")),Object(v.jsxs)(C.a,{as:"div",className:"ml-3 relative",children:[Object(v.jsx)("div",{children:Object(v.jsxs)(C.a.Button,{className:"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[Object(v.jsx)("span",{className:"sr-only",children:"Open user menu"}),s?Object(v.jsx)("img",{className:"h-12 w-12 rounded-full",src:s,alt:"profile pic"}):Object(v.jsx)("img",{className:"h-12 w-12 rounded-full",src:k,alt:"profile pic"})]})}),Object(v.jsx)(S.a,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(v.jsxs)(C.a.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:[Object(v.jsx)(C.a.Item,{children:function(e){e.active;return Object(v.jsx)(r.b,{to:"/about",className:"block px-4 py-2 text-sm text-gray-700",children:"Your Profile"})}}),Object(v.jsx)(C.a.Item,{children:function(t){t.active;return Object(v.jsx)("button",{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("googlePhoto"),o(!1),c(null),e.push("/")},className:"block px-4 py-2 text-sm text-gray-700",children:"Sign out"})}})]})})]})},G=function(){return Object(v.jsxs)(C.a,{as:"div",className:"ml-3 relative",children:[Object(v.jsx)("div",{children:Object(v.jsxs)(C.a.Button,{className:"bg-red-500 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-1",children:[Object(v.jsx)("span",{className:"sr-only",children:"Open user menu"}),Object(v.jsx)(w.d,{className:"w-6 h-6 text-white"})]})}),Object(v.jsx)(S.a,{as:n.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(v.jsxs)(C.a.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:[Object(v.jsx)(C.a.Item,{children:function(e){e.active;return Object(v.jsx)(r.b,{to:"/login",className:"block px-4 py-2 text-sm text-gray-700",children:"Log in"})}}),Object(v.jsx)(C.a.Item,{children:function(e){e.active;return Object(v.jsx)(r.b,{to:"/signup",className:"block px-4 py-2 text-sm text-gray-700",children:"Sign up"})}})]})})]})},A=function(){var e=Object(n.useContext)(p).islogin;return Object(v.jsxs)("div",{className:" md:hidden ",children:[Object(v.jsxs)("div",{className:"p-4 flex items-center justify-between w-full ",children:[Object(v.jsx)(L,{}),Object(v.jsxs)("div",{className:"flex items-center px-8 cursor-pointer",children:[e&&Object(v.jsx)("div",{children:Object(v.jsx)(E,{})}),!e&&Object(v.jsx)("span",{className:"text-red-500 ",children:Object(v.jsx)(G,{})})]})]}),Object(v.jsx)(I,{})]})},U=function(){var e=Object(n.useContext)(p).islogin;return Object(v.jsx)("div",{className:"flex items-center justify-center w-full text-gray-400 hidden md:flex ",children:Object(v.jsxs)("div",{className:"flex w-4/5 justify-evenly items-center",children:[Object(v.jsx)(L,{}),Object(v.jsx)(I,{}),e&&Object(v.jsx)("div",{children:Object(v.jsx)(E,{})}),!e&&Object(v.jsxs)("div",{className:"flex gap-5 cursor-pointer",children:[Object(v.jsx)(r.b,{to:"/login",children:"Log In"}),Object(v.jsx)(r.b,{to:"/signup",children:"Sign Up"})]})]})})};var _=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("nav",{children:[Object(v.jsx)(A,{}),Object(v.jsx)(U,{}),Object(v.jsx)("hr",{className:"mx-5 md:mx-44"})]})})},B=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(_,{}),e.children]})},D=function(e){return Object(v.jsx)("div",{className:"w-max bg-green-300 fixed top-6 text-center right-0 md:right-24 md:top-12 rounded-lg px-4 py-2 font-semibold ",children:e.message})},R=function(){var e=Object(n.useContext)(p).islogin,t=Object(l.f)(),s=Object(n.useState)(""),c=Object(i.a)(s,2),o=c[0],a=c[1],r=Object(n.useState)(""),b=Object(i.a)(r,2),j=b[0],m=b[1],u=Object(n.useState)(""),h=Object(i.a)(u,2),g=h[0],f=h[1],O=Object(n.useContext)(d),y=Object(i.a)(O,4),w=(y[0],y[1],y[2]),N=y[3],k=Object(n.useState)("hidden"),C=Object(i.a)(k,2),S=C[0],P=C[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"".concat(S),children:Object(v.jsx)(D,{message:"note created"})}),e?Object(v.jsx)("div",{className:"m-8 md:mx-44",children:Object(v.jsxs)("div",{className:"w-full bg-gradient-to-br from-pink-500 to-yellow-200 rounded-xl",children:[Object(v.jsx)("h2",{className:"text-lg font-bold mx-5",children:"Add a note"}),Object(v.jsxs)("form",{onSubmit:function(e){var s;e.preventDefault(),Promise.resolve((s={title:o,description:j,tag:g},x.a.post("/api/notes/addnote",s,{headers:{token:localStorage.getItem("token")}}))).then((function(e){P("block"),a(""),m(""),f(""),N(!w),setTimeout((function(){P("hidden"),t.push("/")}),[1e3])})).catch((function(e){}))},children:[" ",Object(v.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[Object(v.jsx)("div",{className:"px-4 py-5 bg-transparent sm:p-6",children:Object(v.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(v.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(v.jsx)("label",{htmlFor:"title",className:"block text-lg font-medium text-gray-700",children:"Title"}),Object(v.jsx)("input",{type:"text",name:"title",id:"title",autoComplete:"title",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md border-gray-300 rounded-md",onChange:function(e){a(e.target.value)},value:o})]}),Object(v.jsxs)("div",{className:"col-span-6",children:[Object(v.jsx)("label",{htmlFor:"description",className:"block text-lg font-medium text-gray-700",children:"Description"}),Object(v.jsx)("input",{type:"text",name:"description",id:"description",autoComplete:"description",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md border-gray-300 rounded-md",onChange:function(e){m(e.target.value)},value:j})]}),Object(v.jsxs)("div",{className:"col-span-6 sm:col-span-6 lg:col-span-2",children:[Object(v.jsx)("label",{htmlFor:"tag",className:"block text-lg font-medium text-gray-700",children:"Tag"}),Object(v.jsx)("input",{type:"text",name:"tag",id:"tag",autoComplete:"address-level2",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md  border-gray-300 rounded-md",onChange:function(e){f(e.target.value)},value:g})]})]})}),Object(v.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:Object(v.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-notebook-400 hover:bg-notebook-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notebook-400",children:"Add Note"})})]})]})]})}):Object(v.jsxs)("div",{className:"flex justify-center gap-3 p-4 items-center flex-col bg-gradient-to-br from-pink-500 to-yellow-100 rounded-xl mx-6 md:mx-32 h-44",children:[Object(v.jsx)("h1",{className:"text-xl text-black text-center ",children:"Cant add your notes? try logging in."}),Object(v.jsx)("h1",{className:"text-xl text-black text-center ",children:"New to this website, why dont you sign up?"})]})]})},Y=s(7),q=s.p+"static/media/addNoteHere.388d2b57.png",z=Object(n.createContext)(),H=function(e){var t=Object(n.useState)({id:"",title:"",description:"",tag:"",date:""}),s=Object(i.a)(t,2),c=s[0],o=s[1];return Object(v.jsx)("div",{children:Object(v.jsx)(z.Provider,{value:[c,o],children:e.children})})};var J=function(){var e=Object(n.useContext)(z),t=Object(i.a)(e,2),s=t[0],c=t[1],o=Object(n.useContext)(p).islogin,a=Object(n.useContext)(P),b=Object(i.a)(a,2),j=b[0],m=(b[1],Object(n.useContext)(d)),u=Object(i.a)(m,4),x=u[0],h=(u[1],u[2],u[3],Object(n.useState)("flex")),g=Object(i.a)(h,2),f=g[0],O=g[1],y=Object(n.useState)("flex"),w=Object(i.a)(y,2),N=w[0],k=w[1],C=Object(l.f)();return Object(n.useEffect)((function(){console.log("0 "+j),console.log(j),null!==j?(O("hidden"),k("flex")):(O("flex"),k("hidden"))}),[j]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"".concat(f," m-8 md:mx-44 p-4 flex-row-reverse items-center"),children:[Object(v.jsx)("img",{src:q,className:"w-40 h-40"}),Object(v.jsx)(r.b,{to:"/addnote",children:Object(v.jsx)("button",{className:"py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-notebook-400 hover:bg-notebook-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notebook-400 h-12",children:"Add Note"})})]}),o?Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"bg-gradient-to-br from-pink-500 to-yellow-100 rounded-xl m-8 md:mx-44 p-4",children:[Object(v.jsx)("div",{className:"flex w-full justify-center align-center mb-4 ",children:Object(v.jsxs)("h2",{className:"text-3xl my-4 font-semibold ",children:[" ",x.length?"Your Note":"Add Your First Note \ud83d\udcd3"," "]})}),Object(v.jsx)("div",{className:"".concat(f," justify-evenly flex-wrap gap-4"),children:x.map((function(e){return Object(v.jsxs)("div",{className:"bg-white md:w-64 w-full mb-4 relative rounded-lg p-6 cursor-pointer",onClick:function(){c(Object(Y.a)(Object(Y.a)({},s),{},{id:e._id,title:e.title,description:e.description,tag:e.tag,date:e.date.toString()})),C.push("/singlenote")},children:[Object(v.jsxs)("h3",{className:"text-lg font-bold",children:[e.title," "]}),Object(v.jsxs)("p",{className:"text-md text-gray-800 my-6",children:[e.description.length>20?e.description.slice(0,50)+" ...":e.description," "]}),Object(v.jsx)("div",{className:"text-md absolute top-0 right-0 rounded-full bg-notebook-400 p-3 text-white font-semibold",children:e.tag}),Object(v.jsx)("p",{className:"text-md text-gray-800 ",children:e.date})]})}))}),Object(v.jsx)("div",{className:"".concat(N," justify-evenly flex-wrap gap-4"),children:null!==j&&j.map((function(e){return Object(v.jsxs)("div",{className:"bg-white md:w-1/4 w-full mb-4 relative rounded-lg p-6 cursor-pointer",onClick:function(){c(Object(Y.a)(Object(Y.a)({},s),{},{id:e._id,title:e.title,description:e.description,tag:e.tag,date:e.date})),C.push("/singlenote")},children:[Object(v.jsxs)("h3",{className:"text-lg font-bold",children:[e.title," "]}),Object(v.jsxs)("p",{className:"text-md text-gray-800 my-6",children:[e.description.length>20?e.description.slice(0,50)+" ...":e.description," "]}),Object(v.jsx)("div",{className:"text-md absolute top-0 right-0 rounded-full bg-notebook-400 p-3 text-white font-semibold",children:e.tag}),Object(v.jsx)("p",{className:"text-md text-gray-800 ",children:e.date})]})}))})]})}):Object(v.jsxs)("div",{className:"flex justify-center gap-3 p-4 items-center flex-col bg-gradient-to-br from-pink-500 to-yellow-100 rounded-xl mx-6 md:mx-32 h-44",children:[Object(v.jsx)("h1",{className:"text-xl text-black text-center ",children:"Cant see your notes? try logging in."}),Object(v.jsx)("h1",{className:"text-xl text-black text-center ",children:"New to this website, why dont you sign up?"})]})]})},M=function(){var e=Object(n.useContext)(p),t=e.gPhoto,s=(e.setGPhoto,e.islogin),c=(e.setlogin,Object(n.useContext)(d)),o=Object(i.a)(c,1)[0],a=Object(n.useState)(""),r=Object(i.a)(a,2),b=(r[0],r[1]),j=Object(n.useState)("hidden"),m=Object(i.a)(j,2),u=(m[0],m[1]),x=Object(l.f)(),h=Object(n.useState)({name:"",email:"",phoneNumber:null,date:"",count:o.length}),g=Object(i.a)(h,2),O=g[0],y=g[1];return Object(n.useEffect)((function(){Promise.resolve(f()).then((function(e){console.log("phle ye "),y(Object(Y.a)(Object(Y.a)({},O),{},{name:e.data.name,email:e.data.email,phoneNumber:e.data.phoneNumber,date:e.data.date}))})).catch((function(e){"jwt expired"===e.response.data.error&&b("Login again"),u("block"),setTimeout((function(){u("hidden"),x.push("/login")}),2e3)}))}),[]),console.log(s),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"flex flex-col items-center py-2 gap-10 px-6 md:mx-full border border-gray-300 w-max mx-auto",children:[t?Object(v.jsx)("img",{className:"h-32 w-32 rounded-full bg-black",src:t,alt:"profile pic"}):Object(v.jsx)("img",{className:"h-32 w-32 rounded-full bg-black",src:k,alt:"profile pic"}),Object(v.jsxs)("h2",{className:"text-xl self-end md:self-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-notebook-400 to-yellow-100 mb-2 ",children:[Object(v.jsx)("strong",{children:"Name : "})," ",O.name]}),Object(v.jsxs)("h2",{className:"text-xl self-end md:self-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-notebook-400 to-yellow-100 mb-2 ",children:[Object(v.jsx)("strong",{children:"Email : "})," ",O.email]}),Object(v.jsxs)("h2",{className:"text-xl self-end md:self-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-notebook-400 to-yellow-100 mb-2 ",children:[Object(v.jsx)("strong",{children:"Since : "})," ",O.date.slice(0,10)]}),Object(v.jsxs)("h2",{className:"text-xl self-end md:self-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-notebook-400 to-yellow-100 mb-2 ",children:[Object(v.jsx)("strong",{children:"No. of Notes : "})," ",O.count]}),O.phoneNumber&&Object(v.jsxs)("h2",{className:"text-xl text-center self-start md:self-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-notebook-400 to-yellow-100 mb-2 ",children:["PhoneNumber: ",O.phoneNumber]})]})})};var K=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(M,{})})},Q=s(34);var V=function(){var e=Object(n.useContext)(p),t=e.setGPhoto,s=e.setlogin,c=Object(l.f)(),o=Object(n.useState)("hidden"),a=Object(i.a)(o,2),r=a[0],d=a[1],b=Object(n.useState)(""),u=Object(i.a)(b,2),x=u[0],h=u[1],f=function(){var e=Object(m.a)(j.a.mark((function e(n){var o,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),o=n.profileObj.googleId,a=n.profileObj.email,Promise.resolve(g({password:o,email:a})).then((function(e){localStorage.setItem("token",e.data.jwtToken),localStorage.setItem("googlePhoto",n.profileObj.imageUrl),c.push("/"),s(!0),t(n.profileObj.imageUrl)})).catch((function(e){h(e.response.data.error),d("block"),setTimeout((function(){d("hidden"),500!==e.response.status&&c.push("/signup")}),2e3)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"".concat(r),children:Object(v.jsx)(T,{message:x})}),Object(v.jsx)("div",{className:"my-3  flex",children:Object(v.jsx)("div",{className:"m-auto rounded-lg",children:Object(v.jsx)(Q.GoogleLogin,{clientId:"430560948108-l48c3dssgupp977dti4au6g5vc3dsfp6.apps.googleusercontent.com",buttonText:"Login with google",onSuccess:f,cookiePolicy:"single_host_origin"})})})]})},W=function(){var e=Object(l.f)(),t=Object(n.useState)("gray-400"),s=Object(i.a)(t,2),c=s[0],o=s[1],a=Object(n.useState)("not-allowed"),r=Object(i.a)(a,2),d=r[0],b=r[1],j=Object(n.useState)(""),m=Object(i.a)(j,2),u=m[0],x=m[1],h=Object(n.useState)(""),f=Object(i.a)(h,2),O=f[0],y=f[1],w=Object(n.useState)("hidden"),N=Object(i.a)(w,2),k=N[0],C=N[1],S=Object(n.useState)(""),P=Object(i.a)(S,2),F=P[0],I=P[1],L=Object(n.useContext)(p),E=L.setGPhoto,G=L.setlogin;Object(n.useEffect)((function(){u.length>4&&O.length>10&&O.includes("@")?(o("notebook-400"),b("pointer")):(o("gray-400"),b("not-allowed"))}),[u,O]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"".concat(k),children:Object(v.jsx)(T,{message:F})}),Object(v.jsx)("div",{className:"flex justify-center text-center items-center h-max w-full",children:Object(v.jsxs)("div",{className:"border border-gray-300 rounded-md bg-gradient-to-br from-pink-400 to-yellow-100",children:[Object(v.jsx)("h2",{className:"text-2xl font-semibold my-3",children:"Login"}),Object(v.jsxs)("form",{className:"my-3",children:[Object(v.jsx)("input",{type:"text",placeholder:"email",className:"border border-gray-300 rounded-md text-center m-2 p-2 w-4/5",onChange:function(e){y(e.target.value)},value:O}),Object(v.jsx)("input",{type:"password",placeholder:"password",className:"border border-gray-300 rounded-md text-center m-2 p-2 w-4/5",onChange:function(e){x(e.target.value)},value:u})]}),Object(v.jsx)("form",{children:Object(v.jsx)("button",{className:"text-white bg-".concat(c,' rounded-md p-2 px-6 mb-3" cursor-').concat(d),onClick:function(t){t.preventDefault(),Promise.resolve(g({password:u,email:O})).then((function(t){localStorage.setItem("token",t.data.jwtToken),E("userLogo"),G(!0),e.push("/")})).catch((function(t){var s;s=Array.isArray(t.response.data.errors)?t.response.data.errors[0].msg:t.response.data.error,I(s),C("block"),setTimeout((function(){C("hidden"),500!==t.response.status&&e.push("/signup")}),2e3)}))},children:"Login"})}),Object(v.jsx)("hr",{className:"mx-8 my-3"}),Object(v.jsx)("p",{className:"text-xl text-gray-500 my-3",children:"Or"}),Object(v.jsx)("div",{children:Object(v.jsx)(V,{})})]})})]})};var X=function(){var e=Object(n.useContext)(p).setGPhoto,t=Object(l.f)(),s=Object(n.useState)("hidden"),c=Object(i.a)(s,2),o=c[0],a=c[1],r=Object(n.useState)(""),d=Object(i.a)(r,2),b=d[0],u=d[1],x=function(){var s=Object(m.a)(j.a.mark((function s(n){var c,o,r;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:console.log(n),c=n.profileObj.googleId,o=n.profileObj.email,r=n.profileObj.givenName,e(n.profileObj.imageUrl),Promise.resolve(h({password:c,email:o,name:r})).then((function(e){localStorage.setItem("token",e.data.jwtToken),t.push("/")})).catch((function(e){u(e.response.data.error),a("block"),setTimeout((function(){a("hidden"),500!==e.response.status&&t.push("/login")}),2e3)}));case 6:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:o,children:Object(v.jsx)(T,{message:b})}),Object(v.jsx)("div",{className:"my-3  flex",children:Object(v.jsx)("div",{className:"m-auto rounded-lg",children:Object(v.jsx)(Q.GoogleLogin,{clientId:"430560948108-l48c3dssgupp977dti4au6g5vc3dsfp6.apps.googleusercontent.com",buttonText:"Signup with google",onSuccess:x,cookiePolicy:"single_host_origin"})})})]})},Z=function(){var e=Object(l.f)(),t=Object(n.useState)({name:"",email:"",phoneNumber:"",password:"",cnfpassword:""}),s=Object(i.a)(t,2),c=s[0],o=s[1],a=Object(n.useState)("hidden"),r=Object(i.a)(a,2),d=r[0],b=r[1],j=Object(n.useState)(""),m=Object(i.a)(j,2),u=m[0],x=m[1],g=Object(n.useState)("not-allowed"),f=Object(i.a)(g,2),O=f[0],y=f[1],w=Object(n.useContext)(p),N=w.setGPhoto,C=w.setlogin;Object(n.useEffect)((function(){c.password===c.cnfpassword&&""!==c.password?y("pointer"):(y("not-allowed"),x("Confirm Password does not match"))}),[c.password,c.cnfpassword]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"".concat(d),children:Object(v.jsx)(T,{message:u})}),Object(v.jsxs)("div",{className:"w-full mx-auto md:w-2/3 lg:w-1/3 bg-gradient-to-br from-pink-400 to-yellow-100 rounded-xl p-4",children:[Object(v.jsx)("h2",{className:"text-lg font-bold mx-5 text-center",children:"New User? Sign up to start creating free notes, accessible from anywhere anytime."}),Object(v.jsxs)("form",{onSubmit:function(t){""!==c.name&&""!==c.email&&(t.preventDefault(),Promise.resolve(h(c)).then((function(t){localStorage.setItem("token",t.data.jwtToken),e.push("/"),C(!0),N(k)})).catch((function(e){x(e.response.data.error),b("block"),setTimeout((function(){b("hidden")}),4e3)})))},children:[" ",Object(v.jsxs)("div",{className:"m-2 py-3 overflow-hidden sm:rounded-md",children:[Object(v.jsx)("div",{className:"px-4 py-5 bg-transparent sm:p-6",children:Object(v.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(v.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(v.jsx)("label",{htmlFor:"name",className:"block text-lg font-medium text-gray-700",children:"Name"}),Object(v.jsx)("input",{required:!0,type:"text",name:"name",id:"name",autoComplete:"name",value:c.name,onChange:function(e){o(Object(Y.a)(Object(Y.a)({},c),{},{name:e.target.value}))},className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md border-gray-300 rounded-md p-2"})]}),Object(v.jsxs)("div",{className:"col-span-6",children:[Object(v.jsx)("label",{htmlFor:"email",className:"block text-lg font-medium text-gray-700",children:"Email"}),Object(v.jsx)("input",{required:!0,type:"email",name:"email",id:"email",autoComplete:"email",value:c.email,onChange:function(e){o(Object(Y.a)(Object(Y.a)({},c),{},{email:e.target.value}))},className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md border-gray-300 rounded-md p-2"})]}),Object(v.jsxs)("div",{className:"col-span-6 sm:col-span-6 lg:col-span-3",children:[Object(v.jsx)("label",{htmlFor:"phone-number",className:"block text-lg font-medium text-gray-700",children:"Phone-number"}),Object(v.jsx)("input",{type:"number",name:"phone-number",id:"phone-number",autoComplete:"address-level2",value:c.phoneNumber,onChange:function(e){o(Object(Y.a)(Object(Y.a)({},c),{},{phoneNumber:e.target.value}))},className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md  border-gray-300 rounded-md p-2"})]}),Object(v.jsxs)("div",{className:"col-span-6 sm:col-span-6 lg:col-span-4",children:[Object(v.jsx)("label",{htmlFor:"pass",className:"block text-lg font-medium text-gray-700",children:"Password"}),Object(v.jsx)("input",{type:"password",name:"pass",id:"pass",autoComplete:"pass",value:c.password,onChange:function(e){o(Object(Y.a)(Object(Y.a)({},c),{},{password:e.target.value}))},className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md  border-gray-300 rounded-md p-2"})]}),Object(v.jsxs)("div",{className:"col-span-6 sm:col-span-6 lg:col-span-4",children:[Object(v.jsx)("label",{htmlFor:"cnfpass",className:"block text-lg font-medium text-gray-700",children:"Confirm Password"}),Object(v.jsx)("input",{type:"password",name:"cnfpass",id:"cnfpass",autoComplete:"pass",value:c.cnfPassword,onChange:function(e){o(Object(Y.a)(Object(Y.a)({},c),{},{cnfpassword:e.target.value}))},className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md  border-gray-300 rounded-md p-2"})]})]})}),Object(v.jsx)("div",{className:"w-max text-right sm:px-6",children:Object(v.jsx)("button",{disabled:"not-allowed"===O,type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-notebook-400 hover:bg-notebook-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notebook-400 cursor-".concat(O),children:"Create Account"})})]})]}),Object(v.jsx)("hr",{className:"my-4"}),Object(v.jsx)("div",{className:"flex items-center justify-center ",children:Object(v.jsx)(X,{})})]})]})},$=s.p+"static/media/Home.64f1036d.png",ee=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(r.b,{to:"/",children:Object(v.jsx)("img",{src:$,alt:"home",className:"w-36 h-36 mb-12 mx-auto"})}),e.children]})},te=function(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),c=s[0],o=s[1],a=Object(n.useState)(!1),r=Object(i.a)(a,2),l=r[0],d=r[1];Object(n.useEffect)((function(){Promise.resolve(f()).then((function(e){d(!0),console.log("sbse phle ye ")})).catch((function(e){console.log(e.response)}))}),[]);var b={gPhoto:c,setGPhoto:o,islogin:l,setlogin:d};return Object(v.jsx)(p.Provider,{value:b,children:e.children})},se=s(83),ne=Object(n.createContext)(),ce=function(e){var t=Object(n.useState)(!1),s=Object(i.a)(t,2),c=s[0],o=s[1];return Object(v.jsx)(ne.Provider,{value:[c,o],children:e.children})};function oe(e){var t=Object(n.useRef)(null),s=Object(n.useContext)(d),c=Object(i.a)(s,4),o=(c[0],c[1],c[2]),a=c[3],r=Object(n.useContext)(z),b=Object(i.a)(r,2),j=b[0],m=b[1],u=Object(n.useContext)(ne),h=Object(i.a)(u,2),g=h[0],f=h[1],O=Object(n.useState)(j.title),p=Object(i.a)(O,2),y=p[0],w=p[1],N=Object(n.useState)(j.description),k=Object(i.a)(N,2),C=k[0],P=k[1],F=Object(n.useState)(j.tag),T=Object(i.a)(F,2),I=T[0],L=T[1],E=j.id;Object(l.f)();return Object(v.jsx)(S.a.Root,{show:g,as:n.Fragment,children:Object(v.jsx)(se.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:t,onClose:f,children:Object(v.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(v.jsx)(S.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(v.jsx)(se.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(v.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(v.jsx)(S.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(v.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(v.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(v.jsx)("div",{className:"sm:flex sm:items-start",children:Object(v.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[Object(v.jsx)(se.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Edit Note"}),Object(v.jsxs)("div",{className:"mt-2",children:[Object(v.jsx)("input",{placeholder:"title",className:"w-full h-12 border border-gray-300 rounded-md text-center my-2",onChange:function(e){w(e.target.value)},value:y}),Object(v.jsx)("input",{placeholder:"description",className:"w-full h-12 border border-gray-300 rounded-md text-center my-2",onChange:function(e){P(e.target.value)},value:C}),Object(v.jsx)("input",{placeholder:"tag",className:"w-full h-12 border border-gray-300 rounded-md text-center my-2",onChange:function(e){L(e.target.value)},value:I})]})]})})}),Object(v.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(v.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-notebook-400 text-base font-medium text-white hover:bg-notebook-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notebook-400 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){Promise.resolve(function(e){var t=e.title,s=e.tag,n=e.description,c=e.id;return x.a.put("/api/notes/updatenote/".concat(c),{title:t,tag:s,description:n},{headers:{token:localStorage.getItem("token")}})}({title:y,description:C,tag:I,id:E})).then((function(e){f(!1),console.log(e),a(!o),m(Object(Y.a)(Object(Y.a)({},j),{},{title:e.data.note.title,description:e.data.note.description,tag:e.data.note.tag}))}))},children:"Save"}),Object(v.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return f(!1)},ref:t,children:"Cancel"})]})]})})]})})})}var ae=function(){var e=Object(n.useContext)(z),t=Object(i.a)(e,1)[0],s=Object(n.useContext)(d),c=Object(i.a)(s,4),o=(c[0],c[1],c[2]),a=c[3],r=Object(n.useState)("gray-600"),b=Object(i.a)(r,2),j=b[0],m=b[1],u=Object(n.useState)("hidden"),h=Object(i.a)(u,2),g=h[0],f=h[1],O=Object(n.useState)("block"),p=Object(i.a)(O,2),y=p[0],N=(p[1],Object(n.useContext)(ne)),k=Object(i.a)(N,2),C=(k[0],k[1]),S=Object(l.f)();return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"".concat(g),children:Object(v.jsx)(D,{message:"text-copied"})}),Object(v.jsxs)("div",{className:"".concat(y," bg-gradient-to-br from-pink-500 to-yellow-100 rounded-xl m-8 md:mx-44 p-4"),children:[Object(v.jsxs)("div",{className:"w-full text-center mb-4 ",children:[Object(v.jsx)("h2",{className:"text-3xl my-4 font-bold ",children:t.title}),Object(v.jsxs)("div",{className:"flex justify-center py-4",children:[Object(v.jsx)("button",{className:"py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 h-12 mx-2",children:Object(v.jsx)(w.b,{className:"w-6 h-8 cursor-pointer",onClick:function(){C(!0)}})}),Object(v.jsx)("button",{className:"py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-red-600 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 h-12 mx-2",onClick:function(){var e;Promise.resolve((e=t.id,x.a.delete("/api/notes/delete/".concat(e),{headers:{token:localStorage.getItem("token")}}))).then((function(e){a(!o),S.push("/")})).catch((function(e){}))},children:Object(v.jsx)(w.a,{className:"w-6 h-8 cursor-pointer"})}),Object(v.jsx)("button",{className:"text-".concat(j," py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 h-12 mx-2"),onClick:function(){m("green-700"),navigator.clipboard.writeText(t.description),f("block"),setTimeout((function(){f("hidden"),console.log("color"),console.log(j),m("gray-600")}),[1e3])},children:Object(v.jsx)(w.c,{className:"w-6 h-8 cursor-pointer"})})]})]}),Object(v.jsx)("div",{className:"",children:Object(v.jsxs)("div",{className:"bg-white w-full mb-4 relative text-center rounded-lg p-6 cursor-pointer",children:[Object(v.jsx)("div",{className:"text-md text-gray-800 my-6 md:px-44 text-center",children:t.description}),Object(v.jsx)("div",{className:"text-md absolute top-0 right-0 rounded-full bg-notebook-400 p-3 text-white font-semibold",children:t.tag}),Object(v.jsx)("p",{className:"text-md text-gray-800 ",children:t.date})]})})]})]})};x.a.defaults.baseURL="https://boobook-1305.herokuapp.com/",x.a.defaults.params={};var re=function(){return Object(v.jsx)(r.a,{children:Object(v.jsx)("div",{children:Object(v.jsx)(te,{children:Object(v.jsx)(y,{children:Object(v.jsx)(H,{children:Object(v.jsx)(ce,{children:Object(v.jsx)(F,{children:Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{exact:!0,path:"/",children:Object(v.jsx)(B,{children:Object(v.jsx)(J,{})})}),Object(v.jsx)(l.a,{exact:!0,path:"/addnote",children:Object(v.jsx)(B,{children:Object(v.jsx)(R,{})})}),Object(v.jsx)(l.a,{exact:!0,path:"/about",children:Object(v.jsx)(ee,{children:Object(v.jsx)(K,{})})}),Object(v.jsx)(l.a,{exact:!0,path:"/singlenote",children:Object(v.jsxs)(B,{children:[Object(v.jsx)(ae,{}),Object(v.jsx)(oe,{})]})}),Object(v.jsx)(l.a,{exact:!0,path:"/login",children:Object(v.jsx)(ee,{children:Object(v.jsx)(W,{})})}),Object(v.jsx)(l.a,{exact:!0,path:"/signup",children:Object(v.jsx)(ee,{children:Object(v.jsx)(Z,{})})})]})})})})})})})})};a.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(re,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.e282cd5e.chunk.js.map