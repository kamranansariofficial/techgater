(this["webpackJsonpadmin-techgater"]=this["webpackJsonpadmin-techgater"]||[]).push([[0],{77:function(e,t,a){},78:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),c=a.n(r),i=a(11),s=a.n(i),o=(a(77),a(78),a(57)),l=a(9),j=a(41),d=a(23),m=a(58),h=a(137),u=a(131),b=a(130),g=a(135),O=a(127),p=a(136),x=a(55),f=a.n(x),v=a(91),w=a(128),y=a(129);function C(){return Object(n.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(O.a,{color:"inherit",href:"https://material-ui.com/",children:"Techgater"})," ",(new Date).getFullYear(),"."]})}var S=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var I=Object(l.f)((function(e){var t=S(),a=c.a.useState({email:"",password:"",error:!1,message:""}),r=Object(m.a)(a,2),i=r[0],s=r[1],o=function(e){return function(t){s(Object(d.a)(Object(d.a)({},i),{},Object(j.a)({},e,t.target.value)))}},l="kamran@techgater.com",O="Rattokala@786";c.a.useEffect((function(){localStorage.getItem("login")&&e.history.push("/admin")}),[]);var x=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Object(n.jsxs)(y.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(b.a,{}),i.error&&Object(n.jsx)(p.a,{textAlign:"center",color:"red",fontSize:20,mb:10,children:i.message}),Object(n.jsxs)("div",{className:t.paper,children:[Object(n.jsx)(h.a,{className:t.avatar,children:Object(n.jsx)(f.a,{})}),Object(n.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,onChange:o("email"),id:"email",helperText:!i.email.match(x)&&"Please enter valid email address",label:"Email Address",name:"email",autoComplete:"email",error:!i.email.match(x),autoFocus:!0}),Object(n.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,error:i.password.length<5,helperText:i.password.length<5&&"Password should contains 6 charts",fullWidth:!0,onChange:o("password"),name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(n.jsx)(u.a,{fullWidth:!0,onClick:function(t){t.preventDefault(),i.email.match(x)&&i.password.length>5&&(i.email!==l?(s(Object(d.a)(Object(d.a)({},i),{},{error:!0,message:"Please enter a valid Email Address!"})),i.password!==O&&s(Object(d.a)(Object(d.a)({},i),{},{error:!0,message:"Password is not correct!"}))):(s(Object(d.a)(Object(d.a)({},i),{},{error:!1,message:""})),localStorage.setItem("login",!0),e.history.push("/admin")))},variant:"contained",color:"primary",className:t.submit,children:"Sign In"})]}),Object(n.jsx)(p.a,{mt:8,children:Object(n.jsx)(C,{})})]})})),k=a(138),F=a(132),N=a(133),P=a(134),T=a(56),A=a.n(T),E=Object(w.a)((function(e){return Object(k.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));var B=Object(l.f)((function(e){var t=E();return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(F.a,{position:"static",children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)(P.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(v.a,{variant:"h6",className:t.title,children:"News"}),Object(n.jsx)(u.a,{onClick:function(){localStorage.removeItem("login"),e.history.push("/admin/login")},color:"inherit",children:"logout"})]})})})}));var D=Object(l.f)((function(e){return c.a.useEffect((function(){localStorage.getItem("login")||e.history.push("/admin/login")}),[]),Object(n.jsx)("div",{children:Object(n.jsx)(B,{})})}));function W(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/admin/login",children:Object(n.jsx)(I,{})}),Object(n.jsx)(l.a,{path:"/admin",children:Object(n.jsx)(D,{})})]})})}var z=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(W,{})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,141)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),q()}},[[89,1,2]]]);
//# sourceMappingURL=main.22f21801.chunk.js.map