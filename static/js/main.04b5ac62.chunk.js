(this["webpackJsonpmakerepo-react-app"]=this["webpackJsonpmakerepo-react-app"]||[]).push([[0],{169:function(e,t){},214:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(102),r=c.n(s),l=(c(73),c(4)),i=function(){var e=window.localStorage.getItem("user");return e?JSON.parse(e):null},o=function(){return window.localStorage.getItem("token")||null},j=function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("user")},d=function(e,t){window.localStorage.setItem("token",e),window.localStorage.setItem("user",JSON.stringify(t))},b=Object(n.createContext)({loggedIn:!1,setLoggedIn:function(){}}),u=c(42),m=c.n(u),h="Alpha",O="1.0.0",A={config:{api_url:"https://staging.makerepo.com",app_release_type:h,app_version:O}},g=function(e){return m.a.get("".concat(A.config.api_url,"/").concat(e),{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}}).then((function(e){return e.data})).catch((function(e){return e}))},p=function(e,t){return m.a.patch("".concat(A.config.api_url,"/").concat(e),{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.getItem("token"))},body:JSON.stringify(t)}).then((function(e){return e.data})).catch((function(e){return e}))},x=function(e,t){return m.a.put("".concat(A.config.api_url,"/").concat(e),t,{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}}).then((function(e){return e.data})).catch((function(e){return e}))},f=c(0);var v=function(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],j=i[1],u=Object(n.useState)(!1),h=Object(l.a)(u,2),O=h[0],g=h[1],p=Object(n.useContext)(b),x=(p.loggedIn,p.setLoggedIn);return Object(f.jsx)("div",{className:"v-center",children:Object(f.jsxs)("div",{className:"d-block",children:[Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("img",{src:"data:image/png;base64,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",width:55,height:55,alt:"MakeRepo Logo"}),Object(f.jsx)("h5",{className:"m-2",children:"Login"})]}),O&&Object(f.jsx)("div",{className:"alert alert-danger",children:"Invalid username or password."}),Object(f.jsx)("div",{className:"mb-3",children:Object(f.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)},name:"username_email",className:"form-control",placeholder:"Email / Username"})}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("input",{type:"password",value:o,onChange:function(e){return j(e.target.value)},name:"password",className:"form-control",placeholder:"Password"}),Object(f.jsx)("a",{href:"https://makerepo.com/forgot_password",target:"_blank",rel:"noreferrer",children:"Forgot Your Password?"})]}),Object(f.jsx)("div",{className:"mb-3",children:Object(f.jsx)("div",{className:"d-grid gap-2",children:Object(f.jsx)("button",{type:"button",onClick:function(){var t,c;(t="login_authentication",c={username_email:a,password:o},m.a.post("".concat(A.config.api_url,"/").concat(t),c,{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}}).then((function(e){return e})).catch((function(e){return e}))).then((function(t){200===t.status?(d(t.data.token,t.data.user),x(!0),g(!1),e.history.push("/")):(x(!1),g(!0))})).catch((function(e){x(!1),g(!0),console.log("Something went wrong. Please try again later.",e)}))},className:"btn btn-primary",children:"Login"})})}),Object(f.jsx)("a",{href:"https://makerepo.com/new",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("span",{className:"",children:"You don't have an account?"})})]})})},N=c(25),w=c(11),C=function(){var e=Object(w.g)(),t=Object(n.useState)(null),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(null),i=Object(l.a)(r,2),o=i[0],j=i[1],d=Object(n.useState)(null),b=Object(l.a)(d,2),u=b[0],m=b[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){g("staff_dashboard").then((function(e){s(JSON.stringify(e))})).catch((function(e){console.error(e)}))},O=function(){g("staff_dashboard/search?query=".concat(u)).then((function(e){j(JSON.stringify(e))})).catch((function(e){console.error(e)}))};return Object(f.jsxs)("div",{className:"w-100vh px-2",children:[Object(f.jsx)("select",{value:null!==a&&JSON.parse(a).space.id,onChange:function(e){return t=e.target.value,void x("staff_dashboard/change_space?space_id=".concat(t),{}).then((function(){h()})).catch((function(e){console.log(e)}));var t},className:"form-select mb-2",children:null!==a&&JSON.parse(a).space_list.map((function(e){return Object(f.jsx)("option",{value:e[1],children:e[0]})}))}),Object(f.jsx)("div",{className:"d-grid gap-2",children:Object(f.jsx)("button",{type:"button",onClick:function(){return h()},className:"btn btn-primary",children:"Refresh Space"})}),Object(f.jsx)("h3",{className:"text-center mt-2",children:"Signed In Users"}),Object(f.jsx)("div",{className:"table-responsive",children:Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"Name"}),Object(f.jsx)("th",{scope:"col",children:"Email"}),Object(f.jsx)("th",{scope:"col",children:"Flagged?"}),Object(f.jsx)("th",{scope:"col",children:"Sign Out"})]})}),Object(f.jsx)("tbody",{children:null!==a&&JSON.parse(a).space_users.map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)("p",{onClick:function(){return c=t.username,void e.push("/profile/".concat(c));var c},children:t.name})}),Object(f.jsx)("td",{children:t.email}),Object(f.jsx)("td",{children:t.flagged?"Yes":"No"}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{type:"button",onClick:function(){return e=t.username,void x("staff_dashboard/remove_users?dropped_users[]=".concat(e),{}).then((function(){h()})).catch((function(e){console.log(e)}));var e},className:"btn btn-danger",children:"Sign Out"})})]})}))})]})}),Object(f.jsx)("h3",{className:"text-center mt-2",children:"Search Users"}),Object(f.jsx)("input",{type:"text",id:"rounded-email",onChange:function(e){return m(e.target.value)},placeholder:"Username, Name",className:"form-control mb-2"}),Object(f.jsx)("div",{className:"d-grid gap-2",children:Object(f.jsx)("button",{type:"button",onClick:function(){return O()},className:"btn btn-primary",children:"Search"})}),null!==o&&Object(f.jsx)("div",{className:"table-responsive",children:Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"Name"}),Object(f.jsx)("th",{scope:"col",children:"Email"}),Object(f.jsx)("th",{scope:"col",children:"Flagged?"}),Object(f.jsx)("th",{scope:"col",children:"Sign In"})]})}),Object(f.jsx)("tbody",{children:JSON.parse(o).map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)("div",{className:"flex items-center",children:Object(f.jsx)("div",{className:"ml-3",children:e.name})})}),Object(f.jsx)("td",{children:Object(f.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:e.email})}),Object(f.jsx)("td",{children:e.flagged?"Yes":"No"}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{type:"button",onClick:function(){return t=e.username,void x("staff_dashboard/add_users?added_users=".concat(t),{}).then((function(){h(),O()})).catch((function(e){console.log(e)}));var t},className:"btn btn-success",children:"Sign In"})})]})}))})]})})]})},I=c(56),y=c.n(I),S=c(238);function B(e){var t=function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,r=e.hour;try{t.split(".").forEach((function(e){r=r[e]}))}catch(l){return Object(f.jsx)(S.a,{variant:c,width:n,height:a})}return r?s?s(r):r:Object(f.jsx)(S.a,{variant:c,width:n,height:a})};return Object(f.jsx)("div",{className:"card",children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("h4",{className:"card-title",children:t("name")}),Object(f.jsx)("h6",{className:"card-subtitle mb-2",children:t("email")}),Object(f.jsx)("h6",{className:"card-subtitle mb-2",children:t("address")}),Object(f.jsx)("h6",{className:"card-subtitle mb-2",children:t("phone_number")}),Object(f.jsxs)("ul",{className:"list-group",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"card-header",children:"Students"}),Object(f.jsx)("div",{className:"card-body",children:t("opening_hour.students","rectangular",void 0,150,y.a)})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"card-header",children:"Public"}),Object(f.jsx)("div",{className:"card-body",children:t("opening_hour.public","text",void 0,void 0,y.a)})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"card-header",children:"Summer"}),Object(f.jsx)("div",{className:"card-body",children:t("opening_hour.summer","text",void 0,void 0,y.a)})]})]})]})})}var D=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(l.a)(s,2),i=r[0];r[1];return Object(n.useEffect)((function(){g("hours").then((function(e){a(e)})).catch((function(e){console.error(e)}))}),[]),Object(f.jsxs)("div",{children:["Space Hours",!i&&c?Object(f.jsx)("div",{children:c.map((function(e,t){return Object(f.jsx)(B,{hour:e},t)}))}):Object(f.jsxs)("div",{children:[Object(f.jsx)(B,{hour:{}}),Object(f.jsx)(B,{hour:{}})]})]})};var F=function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){s(i())}),[]),Object(f.jsx)("div",{children:a&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h1",{className:"text-center",children:["Hello ",a.name]}),"admin"===a.role?Object(f.jsx)(C,{}):Object(f.jsx)(D,{}),Object(f.jsx)("br",{})]})})},H=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){a(i())}),[]),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"bottom-nav",children:[Object(f.jsxs)(N.b,{to:"/",className:"bottom-nav-item active",children:[Object(f.jsx)("i",{className:"material-icons home-icon",children:"home"}),Object(f.jsx)("span",{className:"bottom-nav-text",children:"Home"})]}),Object(f.jsxs)(N.b,{to:"/profile/".concat(c?c.username:""),className:"bottom-nav-item",children:[Object(f.jsx)("i",{className:"material-icons person-icon",children:"person"}),Object(f.jsx)("span",{className:"bottom-nav-text",children:"Profile"})]}),Object(f.jsxs)(N.b,{to:"/help",className:"bottom-nav-item",children:[Object(f.jsx)("i",{className:"material-icons person-info",children:"help"}),Object(f.jsx)("span",{className:"bottom-nav-text",children:"Help"})]})]})})},U=c(18),P=function(e){return void 0===e||null==e?"Not Available":e},k=c(235),E=c(242),Q=c(34),M=c(241),W=c(240),q=["children","value","index"];function T(e){var t=e.children,c=e.value,n=e.index,a=Object(Q.a)(e,q);return Object(f.jsx)("div",Object(U.a)(Object(U.a)({role:"tabpanel",hidden:c!==n,id:"profile-tab-".concat(n),"aria-labelledby":"profile-tab-".concat(n)},a),{},{children:c===n&&Object(f.jsx)(W.a,{sx:{p:3},children:Object(f.jsx)(M.a,{children:t})})}))}function K(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var G=function(){var e=Object(w.h)().username,t=Object(n.useState)(null),c=Object(l.a)(t,2),s=c[0],r=c[1],o=Object(n.useState)(null),j=Object(l.a)(o,2),d=j[0],b=j[1],u=Object(n.useState)(null),m=Object(l.a)(u,2),h=m[0],O=m[1],A=Object(n.useState)(null),x=Object(l.a)(A,2),v=x[0],N=x[1],C=Object(n.useState)(null),I=Object(l.a)(C,2),y=I[0],S=I[1],B=Object(n.useState)(""),D=Object(l.a)(B,2),F=D[0],H=D[1],Q=Object(n.useState)(!1),M=Object(l.a)(Q,2),W=M[0],q=M[1],G=Object(n.useState)(!1),Y=Object(l.a)(G,2),z=Y[0],J=Y[1],R=function(e){H(e.target.value)},L=function(e){e.preventDefault(),"role-form"===e.target.id?V():"programs-form"===e.target.id&&Z()};Object(n.useEffect)((function(){r(i()),X()}),[]);var X=function(){g(e).then((function(e){b(e.user),O(e.programs),N(e.certifications),S(e.remaining_trainings),e.programs.includes("Volunteer Program")&&J(!0),e.programs.includes("Development Program")&&q(!0)})).catch((function(e){console.error(e)}))},V=function(){p("admin/users/set_role",{id:d.id,role:F}).then((function(){X()})).catch((function(e){console.error(e)}))},Z=function(){p("change_programs",{user_id:d.id,dev_program:W,volunteer:z}).then((function(){X()})).catch((function(e){console.error(e)}))},_=a.a.useState(0),$=Object(l.a)(_,2),ee=$[0],te=$[1];return Object(f.jsx)("div",{children:null==d||null==h||null==v||null==y?Object(f.jsx)("div",{children:"Loading ..."}):Object(f.jsxs)("div",{children:[Object(f.jsxs)(k.a,{style:{width:"100vw"},value:ee,onChange:function(e,t){te(t)},variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0,"aria-label":"scrollable auto tabs example",children:[Object(f.jsx)(E.a,Object(U.a)({label:"About"},K(0))),Object(f.jsx)(E.a,Object(U.a)({label:"Programs"},K(1))),Object(f.jsx)(E.a,Object(U.a)({label:"Certifications"},K(2))),"admin"===s.role&&Object(f.jsx)(E.a,Object(U.a)({label:"Role Manager"},K(3)))]}),Object(f.jsx)(T,{value:ee,index:0,children:Object(f.jsxs)("ul",{className:"list-group",children:[Object(f.jsxs)("li",{className:"list-group-item",children:["Username: ",P(d.username)]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Name: ",P(d.name)]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Email: ",P(d.email)]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Faculty: ",P(d.faculty)]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Program: ",P(d.program)]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Year of study: ",P(d.year_of_study)]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Identity: ",P(d.identity)]})]})}),Object(f.jsx)(T,{value:ee,index:1,children:Object(f.jsxs)("form",{onSubmit:L,id:"programs-form",children:[Object(f.jsxs)("div",{className:"list-group mx-0",children:[Object(f.jsxs)("label",{className:"list-group-item d-flex gap-2",children:[Object(f.jsx)("input",{className:"form-check-input flex-shrink-0",type:"checkbox",disabled:"admin"!==s.role,checked:W,value:String(W),onChange:function(){q(!W)}}),Object(f.jsx)("span",{children:"Dev Program"})]}),Object(f.jsxs)("label",{className:"list-group-item d-flex gap-2",children:[Object(f.jsx)("input",{className:"form-check-input flex-shrink-0",type:"checkbox",disabled:"admin"!==s.role,checked:z,value:String(z),onChange:function(){J(!z)}}),Object(f.jsx)("span",{children:"Volunteer"})]})]}),"admin"===s.role&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update Programs"})]})]})}),Object(f.jsxs)(T,{value:ee,index:2,children:["Certifications",Object(f.jsx)("ul",{className:"list-group",children:v.map((function(e,t){return Object(f.jsxs)("li",{className:"list-group-item",children:["Name: ",e.training.name,Object(f.jsx)("br",{}),"On: ",new Date(Date.parse(e.updated_at)).toDateString()]},t)}))})]}),Object(f.jsx)(T,{value:ee,index:3,children:"admin"===s.role&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("p",{children:["Current role: ",d.role]}),Object(f.jsxs)("form",{onSubmit:L,id:"role-form",children:[Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)("input",{className:"form-check-input",type:"radio",name:"role",id:"role-admin",value:"admin",checked:"admin"===F,onChange:R}),Object(f.jsx)("label",{className:"form-check-label",htmlFor:"role-admin",children:"Admin"})]}),Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)("input",{className:"form-check-input",type:"radio",name:"role",id:"radio-staff",value:"staff",checked:"staff"===F,onChange:R}),Object(f.jsx)("label",{className:"form-check-label",htmlFor:"radio-staff",children:"Staff"})]}),Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)("input",{className:"form-check-input",type:"radio",name:"role",id:"radio-regular",value:"regular_user",checked:"regular_user"===F,onChange:R}),Object(f.jsx)("label",{className:"form-check-label",htmlFor:"radio-regular",children:"Regular User"})]}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{className:"btn btn-primary",children:"Update role"})]})]})})]})})},Y=(c(189),c(190),["component"]),z=function(e){var t=e.component,c=Object(Q.a)(e,Y);return Object(f.jsx)(w.b,Object(U.a)(Object(U.a)({},c),{},{render:function(e){return Object(f.jsx)(t,Object(U.a)({},e))}}))},J=["component"],R=function(e){var t=e.component,c=Object(Q.a)(e,J);return Object(f.jsx)(w.b,Object(U.a)(Object(U.a)({},c),{},{render:function(e){return o()?Object(f.jsx)(t,Object(U.a)({},e)):Object(f.jsx)(w.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},L=c(109),X=c.n(L),V=c(239),Z=function(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)({}),i=Object(l.a)(r,2),o=i[0],d=i[1],u=Object(n.useState)(!1),m=Object(l.a)(u,2),h=m[0],O=m[1],p=Object(n.useState)(""),v=Object(l.a)(p,2),N=v[0],w=v[1],C=Object(n.useState)(""),I=Object(l.a)(C,2),y=I[0],S=I[1],B=Object(n.useState)(""),D=Object(l.a)(B,2),F=D[0],H=D[1],U=Object(n.useState)(""),P=Object(l.a)(U,2),k=P[0],E=P[1],Q=Object(n.useContext)(b),M=(Q.loggedIn,Q.setLoggedIn);return Object(f.jsxs)("div",{className:"p-5p",children:[Object(f.jsxs)("div",{className:"py-4 text-center",children:[Object(f.jsx)("h2",{children:"MakerRepo App"}),Object(f.jsxs)("p",{children:["Version ",A.config.app_version," ",A.config.app_release_type]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{className:"text-center py-1",children:"You need help? Contact Us through this form!"}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Full Name"}),Object(f.jsx)("input",{type:"text",name:"name",className:"form-control",value:N,onChange:function(e){return w(e.target.value)}}),o.name&&Object(f.jsx)("div",{className:"text-danger",children:o.name})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Email address"}),Object(f.jsx)("input",{type:"email",name:"email",className:"form-control",value:y,onChange:function(e){return S(e.target.value)}}),o.email&&Object(f.jsx)("div",{className:"text-danger",children:o.email})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Subject"}),Object(f.jsx)("input",{type:"text",name:"text",className:"form-control",value:F,onChange:function(e){return H(e.target.value)}}),o.subject&&Object(f.jsx)("div",{className:"text-danger",children:o.subject})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Comments"}),Object(f.jsx)("textarea",{name:"comments",className:"form-control",value:k,onChange:function(e){return E(e.target.value)}}),o.comments&&Object(f.jsx)("div",{className:"text-danger",children:o.comments})]}),Object(f.jsx)(V.a,{variant:"contained",onClick:function(){(function(e,t){var c={};return e.forEach((function(e){e[1]||(c[e[0]]="The ".concat(e[0]," field is required"))})),t&&t(c),0===Object.keys(c).length})([["name",N],["email",y],["subject",F],["comments",k]],d)&&x("send_email",{name:N,email:y,subject:F,comments:k,app_version:"".concat(A.config.app_version," ").concat(A.config.app_release_type)}).then((function(){O(!0),s(!1)})).catch((function(e){O(!0),console.log(e),s(!0)}))},children:"Submit"})]}),Object(f.jsx)("br",{}),h&&!a&&Object(f.jsx)("div",{className:"alert alert-success",children:"The help request has successfully been sent. You can expect an answer within 2 business days"}),h&&a&&Object(f.jsx)("div",{className:"alert alert-danger",children:"An error occurred while sending the email. Please try again later or contact uottawa.makerepo@gmail.com"}),Object(f.jsx)(V.a,{variant:"outlined",startIcon:Object(f.jsx)(X.a,{}),onClick:function(){g("logout").then((function(){M(!1),j(),e.history.push("/login")})).catch((function(e){console.error(e)}))},children:"Logout"})]})};var _=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(l.a)(s,2),i=r[0],u=r[1];return Object(n.useEffect)((function(){o()?g("check_signed_in").then((function(e){d(e.token,e.user),u(!0),a(!1)})).catch((function(e){console.error(e),u(!1),a(!1),j()})):a(!1)}),[]),c?Object(f.jsx)("div",{className:"content",children:"Checking Authentication..."}):Object(f.jsx)(N.a,{children:Object(f.jsx)(b.Provider,{value:{loggedIn:i,setLoggedIn:u},children:Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)("div",{className:"content",children:Object(f.jsxs)(w.d,{children:[Object(f.jsx)(z,{path:"/login",component:v}),Object(f.jsx)(z,{path:"/help",component:Z}),Object(f.jsx)(R,{path:"/profile/:username",children:Object(f.jsx)(G,{})}),Object(f.jsx)(R,{path:"/",component:F})]})}),i&&Object(f.jsx)(H,{})]})})})};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root"))},73:function(e,t,c){}},[[214,1,2]]]);
//# sourceMappingURL=main.04b5ac62.chunk.js.map