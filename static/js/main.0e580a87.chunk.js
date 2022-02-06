(this["webpackJsonpmakerepo-react-app"]=this["webpackJsonpmakerepo-react-app"]||[]).push([[0],{169:function(e,t){},214:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(102),r=c.n(s),l=(c(73),c(4)),i=function(){var e=window.localStorage.getItem("user");return e?JSON.parse(e):null},o=function(){return window.localStorage.getItem("token")||null},j=function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("user")},d=function(e,t){window.localStorage.setItem("token",e),window.localStorage.setItem("user",JSON.stringify(t))},b=c.p+"static/media/makerepo-logo.ccabe80b.jpg",u=Object(n.createContext)({loggedIn:!1,setLoggedIn:function(){}}),h=c(42),m=c.n(h),O="Alpha",p="1.0.0",x={config:{api_url:"https://dev.makerepo.com",app_release_type:O,app_version:p}},f=function(e){return m.a.get("".concat(x.config.api_url,"/").concat(e),{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}}).then((function(e){return e.data})).catch((function(e){return e}))},g=function(e,t){return m.a.patch("".concat(x.config.api_url,"/").concat(e),{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.getItem("token"))},body:JSON.stringify(t)}).then((function(e){return e.data})).catch((function(e){return e}))},v=function(e,t){return m.a.put("".concat(x.config.api_url,"/").concat(e),t,{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}}).then((function(e){return e.data})).catch((function(e){return e}))},N=c(0);var S=function(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],j=i[1],h=Object(n.useContext)(u),O=(h.loggedIn,h.setLoggedIn);return Object(N.jsx)("div",{className:"v-center",children:Object(N.jsxs)("div",{className:"d-block",children:[Object(N.jsxs)("div",{className:"text-center",children:[Object(N.jsx)("img",{src:b,alt:"MakeRepo Logo"}),Object(N.jsx)("h5",{className:"m-2",children:"Login"})]}),Object(N.jsx)("div",{className:"mb-3",children:Object(N.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)},name:"username_email",className:"form-control",placeholder:"Email / Username"})}),Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsx)("input",{type:"password",value:o,onChange:function(e){return j(e.target.value)},name:"password",className:"form-control",placeholder:"Password"}),Object(N.jsx)("a",{href:"https://makerepo.com/forgot_password",target:"_blank",rel:"noreferrer",children:"Forgot Your Password?"})]}),Object(N.jsx)("div",{className:"mb-3",children:Object(N.jsx)("div",{className:"d-grid gap-2",children:Object(N.jsx)("button",{type:"button",onClick:function(){var t,c;(t="login_authentication",c={username_email:a,password:o},m.a.post("".concat(x.config.api_url,"/").concat(t),c,{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}}).then((function(e){return e.data})).catch((function(e){return e}))).then((function(t){d(t.token,t.user),O(!0),e.history.push("/")})).catch((function(e){O(!1),console.log("Something went wrong. Please try again later.")}))},className:"btn btn-primary",children:"Login"})})}),Object(N.jsx)("a",{href:"https://makerepo.com/new",target:"_blank",rel:"noreferrer",children:Object(N.jsx)("span",{className:"",children:"You don't have an account?"})})]})})},y=c(25),k=c(11),_=function(){var e=Object(k.g)(),t=Object(n.useState)(null),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(null),i=Object(l.a)(r,2),o=i[0],j=i[1],d=Object(n.useState)(null),b=Object(l.a)(d,2),u=b[0],h=b[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){f("staff_dashboard").then((function(e){s(JSON.stringify(e))})).catch((function(e){console.error(e)}))},O=function(){f("staff_dashboard/search?query=".concat(u)).then((function(e){j(JSON.stringify(e))})).catch((function(e){console.error(e)}))};return Object(N.jsxs)("div",{className:"w-100vh px-2",children:[Object(N.jsx)("select",{value:null!==a&&JSON.parse(a).space.id,onChange:function(e){return t=e.target.value,void v("staff_dashboard/change_space?space_id=".concat(t),{}).then((function(){m()})).catch((function(e){console.log(e)}));var t},className:"form-select mb-2",children:null!==a&&JSON.parse(a).space_list.map((function(e){return Object(N.jsx)("option",{value:e[1],children:e[0]})}))}),Object(N.jsx)("div",{className:"d-grid gap-2",children:Object(N.jsx)("button",{type:"button",onClick:function(){return m()},className:"btn btn-primary",children:"Refresh Space"})}),Object(N.jsx)("h3",{className:"text-center mt-2",children:"Signed In Users"}),Object(N.jsx)("div",{className:"table-responsive",children:Object(N.jsxs)("table",{className:"table",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{scope:"col",children:"Name"}),Object(N.jsx)("th",{scope:"col",children:"Email"}),Object(N.jsx)("th",{scope:"col",children:"Flagged?"}),Object(N.jsx)("th",{scope:"col",children:"Sign Out"})]})}),Object(N.jsx)("tbody",{children:null!==a&&JSON.parse(a).space_users.map((function(t){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)("p",{onClick:function(){return c=t.username,void e.push("/profile/".concat(c));var c},children:t.name})}),Object(N.jsx)("td",{children:t.email}),Object(N.jsx)("td",{children:t.flagged?"Yes":"No"}),Object(N.jsx)("td",{children:Object(N.jsx)("button",{type:"button",onClick:function(){return e=t.username,void v("staff_dashboard/remove_users?dropped_users[]=".concat(e),{}).then((function(){m()})).catch((function(e){console.log(e)}));var e},className:"btn btn-danger",children:"Sign Out"})})]})}))})]})}),Object(N.jsx)("h3",{className:"text-center mt-2",children:"Search Users"}),Object(N.jsx)("input",{type:"text",id:"rounded-email",onChange:function(e){return h(e.target.value)},placeholder:"Username, Name",className:"form-control mb-2"}),Object(N.jsx)("div",{className:"d-grid gap-2",children:Object(N.jsx)("button",{type:"button",onClick:function(){return O()},className:"btn btn-primary",children:"Search"})}),null!==o&&Object(N.jsx)("div",{className:"table-responsive",children:Object(N.jsxs)("table",{className:"table",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{scope:"col",children:"Name"}),Object(N.jsx)("th",{scope:"col",children:"Email"}),Object(N.jsx)("th",{scope:"col",children:"Flagged?"}),Object(N.jsx)("th",{scope:"col",children:"Sign In"})]})}),Object(N.jsx)("tbody",{children:JSON.parse(o).map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)("div",{className:"flex items-center",children:Object(N.jsx)("div",{className:"ml-3",children:e.name})})}),Object(N.jsx)("td",{children:Object(N.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:e.email})}),Object(N.jsx)("td",{children:e.flagged?"Yes":"No"}),Object(N.jsx)("td",{children:Object(N.jsx)("button",{type:"button",onClick:function(){return t=e.username,void v("staff_dashboard/add_users?added_users=".concat(t),{}).then((function(){m(),O()})).catch((function(e){console.log(e)}));var t},className:"btn btn-success",children:"Sign In"})})]})}))})]})})]})},w=c(56),C=c.n(w),I=c(238);function A(e){var t=function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,r=e.hour;try{t.split(".").forEach((function(e){r=r[e]}))}catch(l){return Object(N.jsx)(I.a,{variant:c,width:n,height:a})}return r?s?s(r):r:Object(N.jsx)(I.a,{variant:c,width:n,height:a})};return Object(N.jsx)("div",{className:"card",children:Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("h4",{className:"card-title",children:t("name")}),Object(N.jsx)("h6",{className:"card-subtitle mb-2",children:t("email")}),Object(N.jsx)("h6",{className:"card-subtitle mb-2",children:t("address")}),Object(N.jsx)("h6",{className:"card-subtitle mb-2",children:t("phone_number")}),Object(N.jsxs)("ul",{className:"list-group",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"card-header",children:"Students"}),Object(N.jsx)("div",{className:"card-body",children:t("opening_hour.students","rectangular",void 0,150,C.a)})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"card-header",children:"Public"}),Object(N.jsx)("div",{className:"card-body",children:t("opening_hour.public","text",void 0,void 0,C.a)})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"card-header",children:"Summer"}),Object(N.jsx)("div",{className:"card-body",children:t("opening_hour.summer","text",void 0,void 0,C.a)})]})]})]})})}var E=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(l.a)(s,2),i=r[0];r[1];return Object(n.useEffect)((function(){f("hours").then((function(e){a(e)})).catch((function(e){console.error(e)}))}),[]),Object(N.jsxs)("div",{children:["Space Hours",!i&&c?Object(N.jsx)("div",{children:c.map((function(e,t){return Object(N.jsx)(A,{hour:e},t)}))}):Object(N.jsxs)("div",{children:[Object(N.jsx)(A,{hour:{}}),Object(N.jsx)(A,{hour:{}})]})]})};var P=function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){s(i())}),[]),Object(N.jsx)("div",{children:a&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("h1",{className:"text-center",children:["Hello ",a.name]}),"admin"===a.role?Object(N.jsx)(_,{}):Object(N.jsx)(E,{}),Object(N.jsx)("br",{})]})})},F=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){a(i())}),[]),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"bottom-nav",children:[Object(N.jsxs)(y.b,{to:"/",className:"bottom-nav-item active",children:[Object(N.jsx)("i",{className:"material-icons home-icon",children:"home"}),Object(N.jsx)("span",{className:"bottom-nav-text",children:"Home"})]}),Object(N.jsxs)(y.b,{to:"/profile/".concat(c?c.username:""),className:"bottom-nav-item",children:[Object(N.jsx)("i",{className:"material-icons person-icon",children:"person"}),Object(N.jsx)("span",{className:"bottom-nav-text",children:"Profile"})]}),Object(N.jsxs)(y.b,{to:"/help",className:"bottom-nav-item",children:[Object(N.jsx)("i",{className:"material-icons person-info",children:"help"}),Object(N.jsx)("span",{className:"bottom-nav-text",children:"Help"})]})]})})},J=c(18),L=function(e){return void 0===e||null==e?"Not Available":e},U=c(235),B=c(242),Y=c(34),D=c(241),T=c(240),M=["children","value","index"];function R(e){var t=e.children,c=e.value,n=e.index,a=Object(Y.a)(e,M);return Object(N.jsx)("div",Object(J.a)(Object(J.a)({role:"tabpanel",hidden:c!==n,id:"profile-tab-".concat(n),"aria-labelledby":"profile-tab-".concat(n)},a),{},{children:c===n&&Object(N.jsx)(T.a,{sx:{p:3},children:Object(N.jsx)(D.a,{children:t})})}))}function z(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var H=function(){var e=Object(k.h)().username,t=Object(n.useState)(null),c=Object(l.a)(t,2),s=c[0],r=c[1],o=Object(n.useState)(null),j=Object(l.a)(o,2),d=j[0],b=j[1],u=Object(n.useState)(null),h=Object(l.a)(u,2),m=h[0],O=h[1],p=Object(n.useState)(null),x=Object(l.a)(p,2),v=x[0],S=x[1],y=Object(n.useState)(null),_=Object(l.a)(y,2),w=_[0],C=_[1],I=Object(n.useState)(""),A=Object(l.a)(I,2),E=A[0],P=A[1],F=Object(n.useState)(!1),Y=Object(l.a)(F,2),D=Y[0],T=Y[1],M=Object(n.useState)(!1),H=Object(l.a)(M,2),q=H[0],V=H[1],G=function(e){P(e.target.value)},K=function(e){e.preventDefault(),"role-form"===e.target.id?W():"programs-form"===e.target.id&&X()};Object(n.useEffect)((function(){r(i()),Q()}),[]);var Q=function(){f(e).then((function(e){b(e.user),O(e.programs),S(e.certifications),C(e.remaining_trainings),e.programs.includes("Volunteer Program")&&V(!0),e.programs.includes("Development Program")&&T(!0)})).catch((function(e){console.error(e)}))},W=function(){g("admin/users/set_role",{id:d.id,role:E}).then((function(){Q()})).catch((function(e){console.error(e)}))},X=function(){g("change_programs",{user_id:d.id,dev_program:D,volunteer:q}).then((function(){Q()})).catch((function(e){console.error(e)}))},Z=a.a.useState(0),$=Object(l.a)(Z,2),ee=$[0],te=$[1];return Object(N.jsx)("div",{children:null==d||null==m||null==v||null==w?Object(N.jsx)("div",{children:"Loading ..."}):Object(N.jsxs)("div",{children:[Object(N.jsxs)(U.a,{style:{width:"100vw"},value:ee,onChange:function(e,t){te(t)},variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0,"aria-label":"scrollable auto tabs example",children:[Object(N.jsx)(B.a,Object(J.a)({label:"About"},z(0))),Object(N.jsx)(B.a,Object(J.a)({label:"Programs"},z(1))),Object(N.jsx)(B.a,Object(J.a)({label:"Certifications"},z(2))),"admin"===s.role&&Object(N.jsx)(B.a,Object(J.a)({label:"Role Manager"},z(3)))]}),Object(N.jsx)(R,{value:ee,index:0,children:Object(N.jsxs)("ul",{className:"list-group",children:[Object(N.jsxs)("li",{className:"list-group-item",children:["Username: ",L(d.username)]}),Object(N.jsxs)("li",{className:"list-group-item",children:["Name: ",L(d.name)]}),Object(N.jsxs)("li",{className:"list-group-item",children:["Email: ",L(d.email)]}),Object(N.jsxs)("li",{className:"list-group-item",children:["Faculty: ",L(d.faculty)]}),Object(N.jsxs)("li",{className:"list-group-item",children:["Program: ",L(d.program)]}),Object(N.jsxs)("li",{className:"list-group-item",children:["Year of study: ",L(d.year_of_study)]}),Object(N.jsxs)("li",{className:"list-group-item",children:["Identity: ",L(d.identity)]})]})}),Object(N.jsx)(R,{value:ee,index:1,children:Object(N.jsxs)("form",{onSubmit:K,id:"programs-form",children:[Object(N.jsxs)("div",{className:"list-group mx-0",children:[Object(N.jsxs)("label",{className:"list-group-item d-flex gap-2",children:[Object(N.jsx)("input",{className:"form-check-input flex-shrink-0",type:"checkbox",disabled:"admin"!==s.role,checked:D,value:String(D),onChange:function(){T(!D)}}),Object(N.jsx)("span",{children:"Dev Program"})]}),Object(N.jsxs)("label",{className:"list-group-item d-flex gap-2",children:[Object(N.jsx)("input",{className:"form-check-input flex-shrink-0",type:"checkbox",disabled:"admin"!==s.role,checked:q,value:String(q),onChange:function(){V(!q)}}),Object(N.jsx)("span",{children:"Volunteer"})]})]}),"admin"===s.role&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("br",{}),Object(N.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update Programs"})]})]})}),Object(N.jsxs)(R,{value:ee,index:2,children:["Certifications",Object(N.jsx)("ul",{className:"list-group",children:v.map((function(e,t){return Object(N.jsxs)("li",{className:"list-group-item",children:["Name: ",e.training.name,Object(N.jsx)("br",{}),"On: ",new Date(Date.parse(e.updated_at)).toDateString()]},t)}))})]}),Object(N.jsx)(R,{value:ee,index:3,children:"admin"===s.role&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("p",{children:["Current role: ",d.role]}),Object(N.jsxs)("form",{onSubmit:K,id:"role-form",children:[Object(N.jsxs)("div",{className:"form-check",children:[Object(N.jsx)("input",{className:"form-check-input",type:"radio",name:"role",id:"role-admin",value:"admin",checked:"admin"===E,onChange:G}),Object(N.jsx)("label",{className:"form-check-label",htmlFor:"role-admin",children:"Admin"})]}),Object(N.jsxs)("div",{className:"form-check",children:[Object(N.jsx)("input",{className:"form-check-input",type:"radio",name:"role",id:"radio-staff",value:"staff",checked:"staff"===E,onChange:G}),Object(N.jsx)("label",{className:"form-check-label",htmlFor:"radio-staff",children:"Staff"})]}),Object(N.jsxs)("div",{className:"form-check",children:[Object(N.jsx)("input",{className:"form-check-input",type:"radio",name:"role",id:"radio-regular",value:"regular_user",checked:"regular_user"===E,onChange:G}),Object(N.jsx)("label",{className:"form-check-label",htmlFor:"radio-regular",children:"Regular User"})]}),Object(N.jsx)("br",{}),Object(N.jsx)("button",{className:"btn btn-primary",children:"Update role"})]})]})})]})})},q=(c(189),c(190),["component"]),V=function(e){var t=e.component,c=Object(Y.a)(e,q);return Object(N.jsx)(k.b,Object(J.a)(Object(J.a)({},c),{},{render:function(e){return Object(N.jsx)(t,Object(J.a)({},e))}}))},G=["component"],K=function(e){var t=e.component,c=Object(Y.a)(e,G);return Object(N.jsx)(k.b,Object(J.a)(Object(J.a)({},c),{},{render:function(e){return o()?Object(N.jsx)(t,Object(J.a)({},e)):Object(N.jsx)(k.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Q=c(109),W=c.n(Q),X=c(239),Z=function(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)({}),i=Object(l.a)(r,2),o=i[0],d=i[1],b=Object(n.useState)(!1),h=Object(l.a)(b,2),m=h[0],O=h[1],p=Object(n.useState)(""),g=Object(l.a)(p,2),S=g[0],y=g[1],k=Object(n.useState)(""),_=Object(l.a)(k,2),w=_[0],C=_[1],I=Object(n.useState)(""),A=Object(l.a)(I,2),E=A[0],P=A[1],F=Object(n.useState)(""),J=Object(l.a)(F,2),L=J[0],U=J[1],B=Object(n.useContext)(u),Y=(B.loggedIn,B.setLoggedIn);return Object(N.jsxs)("div",{className:"p-5p",children:[Object(N.jsxs)("div",{className:"py-4 text-center",children:[Object(N.jsx)("h2",{children:"MakerRepo App"}),Object(N.jsxs)("p",{children:["Version ",x.config.app_version," ",x.config.app_release_type]})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"text-center py-1",children:"You need help? Contact Us through this form!"}),Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsx)("label",{className:"form-label",children:"Full Name"}),Object(N.jsx)("input",{type:"text",name:"name",className:"form-control",value:S,onChange:function(e){return y(e.target.value)}}),o.name&&Object(N.jsx)("div",{className:"text-danger",children:o.name})]}),Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsx)("label",{className:"form-label",children:"Email address"}),Object(N.jsx)("input",{type:"email",name:"email",className:"form-control",value:w,onChange:function(e){return C(e.target.value)}}),o.email&&Object(N.jsx)("div",{className:"text-danger",children:o.email})]}),Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsx)("label",{className:"form-label",children:"Subject"}),Object(N.jsx)("input",{type:"text",name:"text",className:"form-control",value:E,onChange:function(e){return P(e.target.value)}}),o.subject&&Object(N.jsx)("div",{className:"text-danger",children:o.subject})]}),Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsx)("label",{className:"form-label",children:"Comments"}),Object(N.jsx)("textarea",{name:"comments",className:"form-control",value:L,onChange:function(e){return U(e.target.value)}}),o.comments&&Object(N.jsx)("div",{className:"text-danger",children:o.comments})]}),Object(N.jsx)(X.a,{variant:"contained",onClick:function(){(function(e,t){var c={};return e.forEach((function(e){e[1]||(c[e[0]]="The ".concat(e[0]," field is required"))})),t&&t(c),0===Object.keys(c).length})([["name",S],["email",w],["subject",E],["comments",L]],d)&&v("send_email",{name:S,email:w,subject:E,comments:L,app_version:"".concat(x.config.app_version," ").concat(x.config.app_release_type)}).then((function(){O(!0),s(!1)})).catch((function(e){O(!0),console.log(e),s(!0)}))},children:"Submit"})]}),Object(N.jsx)("br",{}),m&&!a&&Object(N.jsx)("div",{className:"alert alert-success",children:"The help request has successfully been sent. You can expect an answer within 2 business days"}),m&&a&&Object(N.jsx)("div",{className:"alert alert-danger",children:"An error occurred while sending the email. Please try again later or contact uottawa.makerepo@gmail.com"}),Object(N.jsx)(X.a,{variant:"outlined",startIcon:Object(N.jsx)(W.a,{}),onClick:function(){f("logout").then((function(){Y(!1),j(),e.history.push("/login")})).catch((function(e){console.error(e)}))},children:"Logout"})]})};var $=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(l.a)(s,2),i=r[0],b=r[1];return Object(n.useEffect)((function(){o()&&(f("check_signed_in").then((function(e){d(e.token,e.user),b(!0)})).catch((function(e){console.error(e),b(!1),j()})),a(!1))}),[]),c&&o()?Object(N.jsx)("div",{className:"content",children:"Checking Authentication..."}):Object(N.jsx)(y.a,{children:Object(N.jsx)(u.Provider,{value:{loggedIn:i,setLoggedIn:b},children:Object(N.jsxs)("div",{className:"main",children:[Object(N.jsx)("div",{className:"content",children:Object(N.jsxs)(k.d,{children:[Object(N.jsx)(V,{path:"/login",component:S}),Object(N.jsx)(V,{path:"/help",component:Z}),Object(N.jsx)(K,{path:"/profile/:username",children:Object(N.jsx)(H,{})}),Object(N.jsx)(K,{path:"/",component:P})]})}),i&&Object(N.jsx)(F,{})]})})})};r.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)($,{})}),document.getElementById("root"))},73:function(e,t,c){}},[[214,1,2]]]);
//# sourceMappingURL=main.0e580a87.chunk.js.map