(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{280:function(t,o,n){"use strict";n.r(o);var e={name:"signin",data:function(){return{value:"",showpass:!1,inputType:"password"}},components:{},methods:{showPassword:function(){0!==this.value.length&&(this.showpass=!this.showpass,this.showpass?this.inputType="text":this.inputType="password")}}},r=(n(308),n(60)),l=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-form",{staticClass:"account"},[n("div",{staticClass:"nav pb-4"},[n("b-button",{attrs:{variant:"primary"}},[n("unicon",{attrs:{name:"facebook-f",fill:"white",width:"18"}}),t._v("\r\n            Facebook\r\n        ")],1),t._v(" "),n("b-button",{attrs:{variant:"danger"}},[n("unicon",{attrs:{name:"google",fill:"white",width:"16"}}),t._v("\r\n            Google+\r\n        ")],1)],1),t._v(" "),n("div",{staticClass:"or-line mb-4"},[n("div",{staticClass:"or"},[t._v("OR")])]),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"form-group email"},[n("b-form-input",{attrs:{type:"email",placeholder:"Enter your Email-ID"}}),t._v(" "),n("b-icon",{attrs:{icon:"envelope"}})],1)])],1),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"form-group password"},[n("b-form-input",{ref:"password",attrs:{type:t.inputType,placeholder:"Enter your password"},model:{value:t.value,callback:function(o){t.value=o},expression:"value"}}),t._v(" "),n("b-icon",{attrs:{icon:"lock"}}),t._v(" "),t.showpass?n("b-icon",{attrs:{icon:"eye-slash"},on:{click:t.showPassword}}):n("b-icon",{attrs:{icon:"eye"},on:{click:t.showPassword}})],1)])],1),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-flex justify-content-between"},[n("b-form-checkbox",{staticClass:"mb-3 kmsi",attrs:{id:"checkbox-1",name:"checkbox-1"}},[t._v("Keep me signed in ")]),t._v(" "),n("b-link",{staticClass:"forget-pass"},[t._v("Forget Password?")])],1)])],1),t._v(" "),n("b-row",{staticClass:"mt-5",staticStyle:{"padding-top":"1.99rem"}},[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"form-group"},[n("b-button",{staticClass:"btn btn-login btn-block",attrs:{size:"lg",type:"button"}},[t._v("Sign In")])],1)])],1)],1)}),[],!1,null,"19c7c898",null).exports,c={name:"signup",data:function(){return{value:"",showpass:!1,inputType:"password",selected:null,options:[{value:null,text:"Title"},{value:"a",text:"Mr"},{value:"b",text:"Mrs"},{value:{C:"c"},text:"Miss"}]}},components:{},methods:{showPassword:function(){0!==this.value.length&&(this.showpass=!this.showpass,this.showpass?this.inputType="text":this.inputType="password")}}},d=(n(310),{name:"main_navbar",data:function(){return{emailIdText:"",emailText:"",tripIdtext:"",isHovered:!1,isSelected:"signin",active_el:1,emailhasValue:!1,tripIdhasValue:!1,emailIdhasValue:!1,forget:!0}},methods:{handleHover:function(t){this.isHovered=t},select_component:function(t){if(this.active_el=t,1!=t)return 2==t?(this.active_el=t,void(this.isSelected="signup")):void 0;this.isSelected="signin"},hideBookingModal:function(){this.$root.$emit("bv::hide::modal","booking-modal"),this.forget=!0,this.emailIdText="",this.emailText="",this.tripIdtext=""}},watch:{emailText:function(){this.emailText.length>0?this.emailhasValue=!0:this.emailText.length<1&&(this.emailhasValue=!1)},tripIdtext:function(){this.tripIdtext.length>0?this.tripIdhasValue=!0:this.tripIdtext.length<1&&(this.tripIdhasValue=!1)},emailIdText:function(){this.emailIdText.length>0?this.emailIdhasValue=!0:this.emailIdText.length<1&&(this.emailIdhasValue=!1)}},components:{signin:l,signup:Object(r.a)(c,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-form",{staticClass:"account"},[n("div",{staticClass:"nav pb-4"},[n("b-button",{attrs:{variant:"primary"}},[n("unicon",{attrs:{name:"facebook-f",fill:"white",width:"18"}}),t._v("\r\n            Facebook\r\n        ")],1),t._v(" "),n("b-button",{attrs:{variant:"danger"}},[n("unicon",{attrs:{name:"google",fill:"white",width:"16"}}),t._v("\r\n            Google+\r\n        ")],1)],1),t._v(" "),n("div",{staticClass:"or-line mb-4"},[n("div",{staticClass:"or"},[t._v("OR")])]),t._v(" "),n("div",{staticClass:"personal-detail"},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{staticClass:"px-2",attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"form-group"},[n("b-form-select",{staticClass:"form-control",attrs:{options:t.options},model:{value:t.selected,callback:function(o){t.selected=o},expression:"selected"}})],1)]),t._v(" "),n("b-col",{staticClass:"px-2",attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"form-group"},[n("b-form-input",{attrs:{placeholder:"First Name"}})],1)]),t._v(" "),n("b-col",{staticClass:"px-2",attrs:{md:"4",cols:"12"}},[n("div",{staticClass:"form-group"},[n("b-form-input",{attrs:{placeholder:"Last Name"}})],1)])],1)],1),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"form-group email"},[n("b-form-input",{attrs:{type:"email",placeholder:"Enter your Email-ID"}}),t._v(" "),n("b-icon",{attrs:{icon:"envelope"}})],1)])],1),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"form-group password"},[n("b-form-input",{ref:"password",attrs:{type:t.inputType,placeholder:"Enter your password"},model:{value:t.value,callback:function(o){t.value=o},expression:"value"}}),t._v(" "),n("b-icon",{attrs:{icon:"lock"}}),t._v(" "),t.showpass?n("b-icon",{attrs:{icon:"eye-slash"},on:{click:t.showPassword}}):n("b-icon",{attrs:{icon:"eye"},on:{click:t.showPassword}})],1)])],1),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-flex mb-1"},[n("b-form-checkbox",{staticClass:"agree",attrs:{id:"checkbox-1",name:"checkbox-1"}},[t._v("I have read and agree to the ")]),t._v(" "),n("b-link",{staticClass:"terms"},[t._v("Terms and Conditions")])],1),t._v(" "),n("div",{staticClass:"d-flex"},[n("b-form-checkbox",{staticClass:"agree",attrs:{id:"checkbox-2",name:"checkbox-2"}},[t._v("Enroll to Flyin Rewards ")]),t._v(" "),n("b-link",{staticClass:"terms"},[t._v("Terms and Conditions")])],1)])],1),t._v(" "),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"form-group"},[n("b-button",{staticClass:"btn btn-login btn-block",attrs:{size:"lg"}},[t._v("Sign Up")])],1)])],1)],1)}),[],!1,null,"78a254d2",null).exports},mounted:function(){}}),v=(n(312),Object(r.a)(d,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"position-relative",attrs:{id:"main_nav"}},[e("b-navbar",{staticClass:"px-0",attrs:{toggleable:"lg",type:"dark",variant:"transparent"}},[e("b-navbar-brand",{attrs:{href:"/"}},["index"==t.$route.name?e("b-img",{attrs:{src:n(307),fluid:"",width:"70"}}):e("b-img",{attrs:{src:n(296),fluid:"",width:"70"}})],1),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-row",{staticClass:"w-100",attrs:{"align-h":"between"}},[e("b-col",{attrs:{md:"3"}},[e("b-navbar-nav",{staticClass:"left-nav"},[e("b-nav-item",{attrs:{href:"#"}},[t._v("Flights")]),t._v(" "),e("b-nav-item",{attrs:{href:"#"}},[t._v("Staycations\r\n                            "),e("b-badge",[t._v("New")])],1),t._v(" "),e("b-nav-item",{attrs:{href:"#"}},[t._v("Activities\r\n                            "),e("b-badge",[t._v("New")])],1)],1)],1),t._v(" "),e("b-col",{attrs:{md:"8"}},[e("b-navbar-nav",{staticClass:"nav-right align-items-center"},[e("b-nav-item",{attrs:{href:"#"}},[e("b-icon",{attrs:{icon:"tag-fill","aria-hidden":"true"}}),t._v("\r\n                            Deals\r\n                            "),e("b-badge",[t._v("1")])],1),t._v(" "),e("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.signin-modal",modifiers:{"signin-modal":!0}}],staticClass:"mx-3",attrs:{href:"#"}},[t._v("\r\n                            Sign In\r\n                            "),e("b-icon",{attrs:{icon:"caret-down-fill","aria-hidden":"true"}})],1),t._v(" "),e("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.booking-modal",modifiers:{"booking-modal":!0}}],attrs:{href:"#"}},[t._v("\r\n                            My Bookings\r\n                            "),e("b-icon",{attrs:{icon:"caret-down-fill","aria-hidden":"true"}})],1),t._v(" "),e("b-dropdown",{staticClass:"mx-3",attrs:{variant:"outline-warning"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("b-icon",{attrs:{icon:"globe","aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"lang"},[t._v("English")]),t._v("\r\n                                |"),e("span",{staticClass:"currancy"},[t._v("$")])]},proxy:!0}])},[t._v(" "),e("b-dropdown-item",{attrs:{href:"#"}},[t._v("An item")]),t._v(" "),e("b-dropdown-item",{attrs:{href:"#"}},[t._v("Another item")])],1),t._v(" "),e("b-nav-item",{attrs:{href:"#"}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"telephone","aria-hidden":"true"}}),t._v("\r\n                            0123456789\r\n\r\n                        ")],1)],1)],1)],1)],1),t._v(" "),t.$screen.width<992?e("unicon",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-mobile",modifiers:{"sidebar-mobile":!0}}],attrs:{name:"bars",fill:"#333"}}):t._e()],1),t._v(" "),e("b-modal",{attrs:{id:"signin-modal",size:"lg",name:"signInModal","hide-footer":"","hide-header":"","modal-class":"sign-in-modal"}},[e("b-icon",{attrs:{icon:"x"},on:{click:function(o){return t.$root.$emit("bv::hide::modal","signin-modal")}}}),t._v(" "),e("b-row",{attrs:{"no-gutters":""}},[e("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"7"}},[e("div",{staticClass:"section-heading mb-5"},[e("h2",[t._v("Register with flyin")]),t._v(" "),e("span",[t._v("& get following benefits")])]),t._v(" "),e("b-list-group",[e("b-list-group-item",[e("b-icon",{staticClass:"mr-3",attrs:{icon:"check2-circle"}}),t._v("\r\n                        Special offers for Flights, Hotels, Flight+ Hotel & Holidays\r\n                    ")],1),t._v(" "),e("b-list-group-item",[e("b-icon",{staticClass:"mr-3",attrs:{icon:"credit-card2-front"}}),t._v("\r\n                        Add and store traveller's information of family or friends\r\n                    ")],1),t._v(" "),e("b-list-group-item",[e("b-icon",{staticClass:"mr-3",attrs:{icon:"bag-check"}}),t._v("\r\n                        Easy and quick checkout\r\n                    ")],1),t._v(" "),e("b-list-group-item",[e("b-icon",{staticClass:"mr-3",attrs:{icon:"card-checklist"}}),t._v("\r\n                        Manage Your Booking\r\n                    ")],1),t._v(" "),e("b-list-group-item",[e("b-icon",{staticClass:"mr-3",attrs:{icon:"gift"}}),t._v("\r\n                        Earn reward points for each booking\r\n                    ")],1),t._v(" "),e("b-list-group-item",[e("b-icon",{staticClass:"mr-3",attrs:{icon:"credit-card2-back"}}),t._v("\r\n                        Get immediate refund to wallet\r\n                    ")],1)],1)],1),t._v(" "),e("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"5"}},[e("div",{staticClass:"account-wrapper"},[e("div",{staticClass:"form-group mb-4"},[e("b-nav",[e("b-nav-item",{staticClass:"btn-account",class:{active:1==t.active_el},on:{click:function(o){return t.select_component(1)}}},[t._v("Sign In")]),t._v(" "),e("b-nav-item",{staticClass:"btn-account",class:{active:2==t.active_el},on:{click:function(o){return t.select_component(2)}}},[t._v("Sign Up")])],1)],1),t._v(" "),e("keep-alive",[e(t.isSelected,{tag:"component"})],1)],1)])],1)],1),t._v(" "),e("b-modal",{attrs:{id:"booking-modal",size:"md",centered:"",name:"bookingModal","hide-footer":"","hide-header":"","modal-class":"my-booking-modal"}},[e("b-icon",{attrs:{icon:"x"},on:{click:t.hideBookingModal}}),t._v(" "),t.forget?e("b-form",[e("div",{staticClass:"section-heading text-center"},[e("h3",[t._v("Manage Your Booking")]),t._v(" "),e("p",[t._v("View, Print, Email or Change your Itinerary")])]),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("div",{staticClass:"form-group email"},[e("label",{style:[t.emailhasValue?{opacity:1,"z-index":1,top:"-26px"}:""]},[t._v("Email-ID")]),t._v(" "),e("b-form-input",{attrs:{type:"email",placeholder:"Email address used while Booking"},model:{value:t.emailText,callback:function(o){t.emailText=o},expression:"emailText"}})],1)])],1),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("div",{staticClass:"form-group email"},[e("label",{style:[t.tripIdhasValue?{opacity:1,"z-index":1,top:"-26px"}:""]},[t._v("Flyin trip ID")]),t._v(" "),e("b-form-input",{attrs:{placeholder:"Flyin trip ID"},model:{value:t.tripIdtext,callback:function(o){t.tripIdtext=o},expression:"tripIdtext"}})],1)])],1),t._v(" "),e("b-link",{staticClass:"forget-id",on:{click:function(o){t.forget=!1}}},[t._v("Forgot Flyin Trip ID?")]),t._v(" "),e("div",{staticClass:"form-group text-center"},[e("b-button",{staticClass:"btn-ret"},[t._v("Retrieve Booking")])],1)],1):t._e(),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.forget?t._e():e("b-form",[e("div",{staticClass:"section-heading"},[e("h3",[t._v("Forgot Flyin Trip ID?")]),t._v(" "),e("p",[t._v("We will send the latest reference number to the email address that you have used while booking.")])]),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("div",{staticClass:"form-group email"},[e("label",{style:[t.emailIdhasValue?{opacity:1,"z-index":1,top:"-26px"}:""]},[t._v("Email-ID")]),t._v(" "),e("b-form-input",{attrs:{type:"email",placeholder:"Please enter your Email-ID"},model:{value:t.emailIdText,callback:function(o){t.emailIdText=o},expression:"emailIdText"}})],1)])],1),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"form-group text-center mt-4"},[e("b-button",{staticClass:"btn-send"},[t._v("Send")])],1)],1)],1)],1),t._v(" "),e("b-sidebar",{attrs:{id:"sidebar-mobile","backdrop-variant":"dark",backdrop:"",shadow:""}},[e("div",{staticClass:"pl-3"},[e("b-img",{attrs:{src:n(296),fluid:"",width:"70"}})],1),t._v(" "),e("b-navbar-nav",{staticClass:"mt-3 pl-3"},[e("b-nav-item",{attrs:{href:"#"}},[t._v("Flights")]),t._v(" "),e("b-nav-item",{attrs:{href:"#"}},[t._v("Staycations\r\n                "),e("b-badge",[t._v("New")])],1),t._v(" "),e("b-nav-item",{attrs:{href:"#"}},[t._v("Activities\r\n                "),e("b-badge",[t._v("New")])],1)],1)],1)],1)}),[],!1,null,"3d9e210a",null));o.default=v.exports},282:function(t,o,n){var content=n(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("5267dfa1",content,!0,{sourceMap:!1})},283:function(t,o,n){var content=n(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("9feb8820",content,!0,{sourceMap:!1})},284:function(t,o,n){var content=n(313);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("3837fc60",content,!0,{sourceMap:!1})},285:function(t,o,n){t.exports=n.p+"img/support-cards.v12346.a31cdcc.png"},296:function(t,o,n){t.exports=n.p+"img/flyinLogo.c555f58.png"},307:function(t,o,n){t.exports=n.p+"img/flyinLogo-white.d3aba75.png"},308:function(t,o,n){"use strict";var e=n(282);n.n(e).a},309:function(t,o,n){(o=n(54)(!1)).push([t.i,'.account[data-v-19c7c898]{font-family:"Roboto Regular";font-size:14px}.account .nav button[data-v-19c7c898]:active,.account .nav button[data-v-19c7c898]:focus{outline:none;box-shadow:none}.account .nav button[data-v-19c7c898]{flex:1}.account .nav button.btn-primary[data-v-19c7c898]{background:#607ecb!important;border-color:#607ecb!important;height:40px;margin-right:10px;font-size:12px;border-radius:4px;position:relative}.account .nav button.btn-primary[data-v-19c7c898]:before{background:#5273c7;content:"";position:absolute;left:0;font-size:14px;top:0;padding:0 12px;height:100%;width:35px}.account .nav button.btn-danger .unicon[data-v-19c7c898],.account .nav button.btn-primary .unicon[data-v-19c7c898]{position:absolute;left:5px;top:8px}.account .nav button.btn-danger[data-v-19c7c898]{background:#f4675f;border-color:#f4675f;margin-left:10px;height:40px;font-size:12px;border-radius:4px;position:relative}.account .or-line[data-v-19c7c898]{border-top:1px solid #cad6e3;position:relative;font-weight:400;text-align:center}.account .or-line .or[data-v-19c7c898]{background:#fcfcfc;bottom:0;color:#4d6f93;left:0;margin:-13px auto 0;padding:0;position:absolute;right:0;top:0;width:30px;font-size:14px}.account .form-control[data-v-19c7c898]{padding-left:30px;padding-right:30px;color:#203152;font-size:14px;height:45px;border:1px solid #cad6e3}.account .email[data-v-19c7c898]{position:relative}.account .email .b-icon[data-v-19c7c898]{position:absolute;top:calc(50% - 8px);color:#4d6f93;left:10px}.account .password[data-v-19c7c898]{position:relative}.account .password .b-icon[data-v-19c7c898]{color:#4d6f93;position:absolute;top:calc(50% - 8px)}.account .password .bi-lock[data-v-19c7c898]{left:10px}.account .password .bi-eye[data-v-19c7c898],.account .password .bi-eye-slash[data-v-19c7c898]{right:10px}.account .forget-pass[data-v-19c7c898],.account .kmsi[data-v-19c7c898]{font-size:12px;color:#4d6f93}.account .forget-pass[data-v-19c7c898]{text-decoration:underline}.account .forget-pass[data-v-19c7c898]:hover{text-decoration:none}[data-v-19c7c898] .custom-checkbox .custom-control-label:before,[data-v-19c7c898] .custom-control-label:after{top:1px}.account .btn-login[data-v-19c7c898]{background:linear-gradient(90deg,#427ecb 0,#1f5599);font-size:16px;border-color:#427ecb;transition:all .3s}.account .btn-login[data-v-19c7c898]:hover{background:linear-gradient(90deg,#1f5599 0,#427ecb)}',""]),t.exports=o},310:function(t,o,n){"use strict";var e=n(283);n.n(e).a},311:function(t,o,n){(o=n(54)(!1)).push([t.i,'.account[data-v-78a254d2]{font-family:"Roboto Regular";font-size:14px}.account .nav button[data-v-78a254d2]:active,.account .nav button[data-v-78a254d2]:focus{outline:none;box-shadow:none}.account .nav button[data-v-78a254d2]{flex:1}.account .nav button.btn-primary[data-v-78a254d2]{background:#607ecb!important;border-color:#607ecb!important;height:40px;margin-right:10px;font-size:12px;border-radius:4px;position:relative}.account .nav button.btn-primary[data-v-78a254d2]:before{background:#5273c7;content:"";position:absolute;left:0;font-size:14px;top:0;padding:0 12px;height:100%;width:35px}.account .nav button.btn-danger .unicon[data-v-78a254d2],.account .nav button.btn-primary .unicon[data-v-78a254d2]{position:absolute;left:5px;top:8px}.account .nav button.btn-danger[data-v-78a254d2]{background:#f4675f;border-color:#f4675f;margin-left:10px;height:40px;font-size:12px;border-radius:4px;position:relative}.account .or-line[data-v-78a254d2]{border-top:1px solid #cad6e3;position:relative;font-weight:400;text-align:center}.account .or-line .or[data-v-78a254d2]{background:#fcfcfc;bottom:0;color:#4d6f93;left:0;margin:-13px auto 0;padding:0;position:absolute;right:0;top:0;width:30px;font-size:14px}.account .form-control[data-v-78a254d2]{padding-left:30px;padding-right:30px;color:#203152;font-size:14px;height:45px;border:1px solid #cad6e3}.account .email[data-v-78a254d2]{position:relative}.account .email .b-icon[data-v-78a254d2]{position:absolute;top:calc(50% - 8px);color:#4d6f93;left:10px}.account .password[data-v-78a254d2]{position:relative}.account .password .b-icon[data-v-78a254d2]{color:#4d6f93;position:absolute;top:calc(50% - 8px)}.account .password .bi-lock[data-v-78a254d2]{left:10px}.account .password .bi-eye[data-v-78a254d2],.account .password .bi-eye-slash[data-v-78a254d2]{right:10px}.account .forget-pass[data-v-78a254d2],.account .kmsi[data-v-78a254d2]{font-size:12px;color:#4d6f93}.account .forget-pass[data-v-78a254d2]{text-decoration:underline}.account .forget-pass[data-v-78a254d2]:hover{text-decoration:none}[data-v-78a254d2] .custom-checkbox .custom-control-label:before,[data-v-78a254d2] .custom-control-label:after{top:1px}.account .btn-login[data-v-78a254d2]{background:linear-gradient(90deg,#427ecb 0,#1f5599);font-size:16px;border-color:#427ecb;transition:all .3s}.account .btn-login[data-v-78a254d2]:hover{background:linear-gradient(90deg,#1f5599 0,#427ecb)}.account .personal-detail .form-control[data-v-78a254d2]{padding-left:5px;padding-right:5px}.account .personal-detail .row[data-v-78a254d2]{margin-left:-7px;margin-right:-7px}.account .agree[data-v-78a254d2],.account .terms[data-v-78a254d2]{font-size:12px}.account .terms[data-v-78a254d2]{margin-left:5px}',""]),t.exports=o},312:function(t,o,n){"use strict";var e=n(284);n.n(e).a},313:function(t,o,n){(o=n(54)(!1)).push([t.i,'#sidebar-mobile ul li a[data-v-3d9e210a]{color:#4d6f93}#sidebar-mobile ul li a .badge[data-v-3d9e210a]{border-radius:0;font-weight:400;background-color:#f4675f;font-size:9px;letter-spacing:1px}.fade-enter[data-v-3d9e210a]{opacity:0}.fade-enter-active[data-v-3d9e210a]{transition:opacity 1s}.fade-leave-active[data-v-3d9e210a]{transition:opacity 1s;opacity:0}.navbar-dark .navbar-nav.left-nav .nav-link[data-v-3d9e210a]{font-family:"Roboto Medium";position:relative;color:#fff;font-size:14px;font-weight:500;transition:all .3s}.nav-link[data-v-3d9e210a]:hover{color:#fec524!important}.navbar-dark .navbar-nav.nav-right[data-v-3d9e210a]{justify-content:flex-end}.navbar-dark .navbar-nav.nav-right .nav-link[data-v-3d9e210a]{font-family:"Roboto Regular";position:relative;color:#fff;font-size:12px;font-weight:400;transition:all .3s}.navbar-dark .navbar-nav.left-nav .nav-link .badge[data-v-3d9e210a]{position:absolute;right:0;top:-6px;border-radius:0;font-weight:400;background-color:#f4675f;font-size:9px;letter-spacing:1px}.navbar-dark .navbar-nav.left-nav .nav-link .badge[data-v-3d9e210a]:after{content:"";width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #f4675f;position:absolute;left:3px;bottom:-3px}.navbar-dark .navbar-nav.nav-right .nav-link .bi-tag-fill[data-v-3d9e210a]{transform:rotate(90deg)}.navbar-dark .navbar-nav.nav-right .nav-link .badge[data-v-3d9e210a]{position:absolute;right:0;top:-5px;font-weight:400;background-color:#f4675f;font-size:10px;letter-spacing:1px;border-radius:10px}.navbar-dark .navbar-nav.nav-right .nav-link .bi-caret-down-fill[data-v-3d9e210a]{font-size:98%}[data-v-3d9e210a] .navbar-dark .navbar-nav.nav-right .btn-outline-warning{font-family:"Roboto Regular";background-color:transparent;color:#fff;border-color:#fff;font-size:12px;display:flex;align-items:center;padding:5px}[data-v-3d9e210a] .navbar-dark .navbar-nav.nav-right .btn-outline-warning .bi-globe{margin-right:5px;font-size:98%}[data-v-3d9e210a] .navbar-dark .navbar-nav.nav-right .btn-outline-warning .currancy{margin-left:5px}[data-v-3d9e210a] .navbar-dark .navbar-nav.nav-right .btn-outline-warning .lang{margin-right:5px}[data-v-3d9e210a] .navbar-dark .navbar-nav.nav-right .btn-outline-warning:hover{color:#fec524!important;border-color:#fec524!important}[data-v-3d9e210a] .navbar-dark .navbar-nav.nav-right .dropdown-toggle:after{border-top:.5em solid;border-right:.5em solid transparent;border-bottom:0;border-left:.5em solid transparent}[data-v-3d9e210a] .modal.fade .modal-dialog{transform:none}[data-v-3d9e210a] .modal{padding-left:0!important}[data-v-3d9e210a] .sign-in-modal .modal-body{background-color:#3771bb;padding:30px}[data-v-3d9e210a] .modal-content{border:none}.sign-in-modal .bi-x[data-v-3d9e210a]{position:absolute;right:0;top:0;font-size:24px;color:#fff;cursor:pointer;transition:all .3s}.sign-in-modal .bi-x[data-v-3d9e210a]:hover{background-color:#fff;color:#3771bb}.sign-in-modal .section-heading h2[data-v-3d9e210a]{color:#fff;font-size:28px;font-family:"Roboto Bold"}.sign-in-modal .section-heading span[data-v-3d9e210a]{color:#fff;display:block;font-size:22px;font-family:"Roboto Regular"}.sign-in-modal .list-group .list-group-item[data-v-3d9e210a]{background-color:transparent;border:0;color:#fff;font-family:"Roboto Regular";padding-left:0;font-size:14px;display:flex}.sign-in-modal .list-group .list-group-item .b-icon.bi[data-v-3d9e210a]{font-size:22px}.sign-in-modal .account-wrapper[data-v-3d9e210a]{background:#fff;border-radius:4px;padding:30px;min-height:480px;position:relative;box-shadow:0 0 10px #063c80}.sign-in-modal .btn-account[data-v-3d9e210a]{font-size:18px;font-family:"Roboto Bold";cursor:pointer;color:#203152;position:relative;background:transparent;border:0}[data-v-3d9e210a] .sign-in-modal .btn-account a{color:#203152!important;position:relative}[data-v-3d9e210a] .sign-in-modal .btn-account a:after{content:"";height:2px;width:0;background:#4092fb;position:absolute;left:0;bottom:0}[data-v-3d9e210a] .sign-in-modal .btn-account.active a{color:#4092fb!important}[data-v-3d9e210a] .sign-in-modal .btn-account.active a:after{width:100%;transition:all .2s}[data-v-3d9e210a] .my-booking-modal .modal-body{padding:20px 60px}.my-booking-modal .bi-x[data-v-3d9e210a]{position:absolute;right:0;top:0;font-size:28px;font-weight:600;cursor:pointer;background:#f4675f;color:#fff;transition:all .3s}.my-booking-modal .bi-x[data-v-3d9e210a]:hover{color:#203152}.my-booking-modal .section-heading h3[data-v-3d9e210a]{padding:0 0 8px;font-size:24px;line-height:32px;font-family:"Roboto Bold";margin-bottom:0}.my-booking-modal .section-heading p[data-v-3d9e210a]{margin:5px 0 30px;color:#4d6f93;font-size:14px;font-family:"Roboto Regular"}.my-booking-modal .form-control[data-v-3d9e210a]{font-family:"Roboto Regular";background:transparent;height:45px;font-size:14px;font-weight:400}.my-booking-modal label[data-v-3d9e210a]{font-family:"Roboto Regular";color:#9b9b9b;font-size:14px;position:absolute;top:15px;opacity:0;z-index:-1;transition:all .2s linear 0s}.my-booking-modal .form-group[data-v-3d9e210a]{position:relative;margin-bottom:2rem}.my-booking-modal .forget-id[data-v-3d9e210a]{color:#4d6f93;font-size:12px;text-decoration:underline;margin-top:0;display:block;line-height:18px;text-align:center;font-family:"Roboto Regular"}@media (min-width:768px){.sign-in-modal .col-lg-7[data-v-3d9e210a]{flex:0 0 54.333333%;max-width:54.333333%}}.my-booking-modal .btn-ret[data-v-3d9e210a]{border-radius:4px;color:#fff;font-size:16px;background:#00a368;border-color:#00a368;padding:10px 40px;margin:20px auto 0;line-height:22px;font-family:"Roboto Medium"}.my-booking-modal .btn-ret[data-v-3d9e210a]:active{background-color:#00a368!important}.my-booking-modal .btn-send[data-v-3d9e210a]{background:linear-gradient(90deg,#427ecb 0,#1f5599);padding:10px 40px;font-family:"Roboto Medium";font-size:14px;border-color:#427ecb}@media (min-width:768px){.sign-in-modal .col-lg-5[data-v-3d9e210a]{flex:0 0 45.666667%;max-width:45.666667%}}@media (min-width:992px){[data-v-3d9e210a] .modal-lg{max-width:900px}}',""]),t.exports=o}}]);