(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,n){e.exports={preloader:"spinner_preloader__1jMg2",spinner:"spinner_spinner__1Hetg",spin:"spinner_spin__A_APw"}},110:function(e,t,n){e.exports={login:"login_login__VKdDU",descr:"login_descr__u0f4g"}},146:function(e,t,n){e.exports={profile:"profile_profile__1d7zg"}},147:function(e,t,n){e.exports={item:"post_item__1y2Bx"}},148:function(e,t,n){e.exports={postBlock:"myPosts_postBlock__1gIeR"}},154:function(e,t,n){e.exports={pageNotFound:"pageNotFound_pageNotFound__2eM4K"}},206:function(e,t,n){},23:function(e,t,n){e.exports={header:"header_header__18sGI",content:"header_content__15Dq1",submit:"header_submit__vXiCC",logo:"header_logo__esTHP",logo_auth:"header_logo_auth__2BghE",logo_noAuth:"header_logo_noAuth__emH4y",menu:"header_menu__2b9oq",active:"header_active__19EXb",settings:"header_settings__26DpH",loginBlock:"header_loginBlock__2ztlx"}},28:function(e,t,n){e.exports={navbar:"nav_navbar__1sgBY",user:"nav_user__1bQo-",photo:"nav_photo__2Yr4u",name:"nav_name__1Q5pM",button:"nav_button__3WJH1",email:"nav_email__35rfu",interesting:"nav_interesting__2W2LG",title:"nav_title__7GmS6",content:"nav_content__2rbTP"}},306:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),s=n(74),o=n.n(s),i=n(1),u=n.n(i),l=n(76),j=n(77),d=n(84),p=n(83),f=n(28),b=n.n(f),O=n(7),h=n(104),m=n.n(h),x=function(){return Object(c.jsx)("div",{className:m.a.preloader,children:Object(c.jsx)("div",{className:m.a.spinner})})},g=n(6),_=n.n(g),v=n(11),S=n(2),E=n(144),w=n.n(E).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"f68a4cda-2f4c-4785-816b-4190cdf2b12c"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.captcha=10]="captcha"}(a||(a={}));var P=function(e){return w.get("/profile/".concat(e)).then((function(e){return e.data}))},N=function(e){return w.get("/profile/status/".concat(e)).then((function(e){return e.data}))},y=function(e){return w.put("/profile/status",{status:e})},C=function(e){var t=new FormData;return t.append("image",e),w.put("/profile/photo",t,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){return e.data}))},A=function(e){return w.put("/profile",e).then((function(e){return e.data}))},T={profileData:null},k=function(e){return{type:"SIDEBAR/SET_PROFILE",profile:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIDEBAR/SET_PROFILE":return Object(S.a)(Object(S.a)({},e),{},{profileData:t.profile})}return e},U=n(15),F=function(){var e=Object(O.d)((function(e){return e.auth.email})),t=Object(O.d)((function(e){return e.sidebar.profileData})),n=Object(O.c)();return t?Object(c.jsxs)("nav",{className:b.a.navbar,children:[Object(c.jsxs)("div",{className:b.a.user,children:[Object(c.jsx)("div",{className:b.a.photo,children:Object(c.jsx)("img",{src:t.photos.small,alt:"avatar"})}),Object(c.jsx)("p",{className:b.a.name,children:t.fullName}),Object(c.jsx)("span",{className:b.a.email,children:e}),Object(c.jsx)("div",{className:b.a.button,children:Object(c.jsx)(U.b,{to:"/",children:"Go to profile"})})]}),Object(c.jsxs)("div",{className:b.a.interesting,children:[Object(c.jsx)("span",{className:b.a.title,children:"CAN BE INTERESTING"}),Object(c.jsx)("div",{className:b.a.content})]})]}):(n(function(){var e=Object(v.a)(_.a.mark((function e(t,n){var r,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=n().auth.userId)){e.next=6;break}return e.next=4,P(r);case 4:a=e.sent,t(k(a));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Object(c.jsx)(x,{}))},L=n(13),R=(n(206),n(30)),D=function(){return w.get("/auth/me").then((function(e){return e.data}))},G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return w.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r})},M=function(){return w.delete("/auth/login")},H=function(){return w.get("/security/get-captcha-url").then((function(e){return e.data}))},z={isLoading:!1,userId:null,email:null,login:null,isAuth:!1,captcha:null},B=function(e,t,n){return{type:"AUTH/SET_USER_DATA",data:{userId:e,email:t,login:n}}},V=function(){return{type:"AUTH/DELETE_USER_DATA"}},W=function(e){return{type:"AUTH/SET_CAPTCHA_URL",url:e}},Y=function(){return{type:"AUTH/CAPTCHA_SUCCESS"}},J=function(){return function(){var e=Object(v.a)(_.a.mark((function e(t){var n,a,c,s,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:(n=e.sent).resultCode===r.Success&&(a=n.data,c=a.id,s=a.login,o=a.email,t(B(c,o,s)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X=function(){return function(){var e=Object(v.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:(n=e.sent).url&&t(W(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET_USER_DATA":return Object(S.a)(Object(S.a)(Object(S.a)({},e),t.data),{},{isAuth:!0});case"AUTH/DELETE_USER_DATA":return Object(S.a)(Object(S.a)({},e),{},{userId:null,email:null,login:null,isAuth:!1});case"AUTH/SET_CAPTCHA_URL":return Object(S.a)(Object(S.a)({},e),{},{captcha:t.url});case"AUTH/CAPTCHA_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{captcha:null});default:return e}},K=n(62);var Z,Q=function(e){return Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){var n=t.isAuth,r=Object(K.a)(t,["isAuth"]);return n?Object(c.jsx)(e,Object(S.a)({},r)):Object(c.jsx)(L.a,{to:"/login"})}))}((function(){var e=Object(O.c)();return Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:function(){e(function(){var e=Object(v.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:e.sent.data.resultCode===r.Success&&t(V());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})})})),$=n(63),ee=n.n($),te=n(64),ne=n.n(te),re=n.p+"static/media/avatar.00971467.png",ae=function(e){var t=e.person,n=e.id,r=e.photos,a="/dialogs/".concat(n);return t.length>8&&(t=t.slice(8)+"..."),Object(c.jsxs)(U.c,{to:a,activeClassName:ne.a.active,className:ne.a.dialog,children:[Object(c.jsx)("div",{className:ne.a.photo,children:Object(c.jsx)("img",{src:r.small||re,alt:""})}),Object(c.jsx)("div",{className:ne.a.name,children:t})]})},ce=n(41),se=n.n(ce),oe=function(e){return e.auth.captcha},ie=function(e){return e.auth.isAuth},ue=function(e){return e.auth.userId},le=function(e){var t=e.message,n=Object(O.d)(ue),r=t.senderId===n?se.a.message+" "+se.a.own:se.a.message+" "+se.a.noOwn;return Object(c.jsxs)("div",{className:r,children:[Object(c.jsx)("div",{className:se.a.senderName,children:Object(c.jsx)("p",{children:t.senderName})}),Object(c.jsx)("div",{className:se.a.text,children:t.body})]})},je=function(){return w.get("/dialogs").then((function(e){return e.data}))},de=function(e){return w.put("/dialogs/".concat(e)).then((function(e){return e.data}))},pe=function(e){return w.get("/dialogs/".concat(e,"/messages")).then((function(e){return e.data}))},fe=function(e,t){return w.post("/dialogs/".concat(e,"/messages"),{body:t}).then((function(e){return e.data}))},be={messages:[],dialogs:[]},Oe=function(e){return{type:"DIALOGS/SET_MESSAGES",messages:e}},he=function(e){return{type:"DIALOGS/SET_DIALOGS",dialogs:e}},me=function(){return function(){var e=Object(v.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:n=e.sent,t(he(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe(e);case 2:r=t.sent,n(Oe(r.items));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGS/SET_MESSAGES":return Object(S.a)(Object(S.a)({},e),{},{messages:t.messages});case"DIALOGS/SET_DIALOGS":return Object(S.a)(Object(S.a)({},e),{},{dialogs:t.dialogs});default:return e}},_e=n(140),ve=n(141),Se=n(48),Ee=n.n(Se),we=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r,o=s?Object(c.jsx)("span",{children:r}):null;return Object(c.jsxs)("div",{className:s?Ee.a.formControl+" "+Ee.a.error:Ee.a.formControl,children:[Object(c.jsx)("div",{children:a}),o]})},Pe=function(e){var t=e.input,n=Object(K.a)(e,["input"]);return Object(c.jsx)(we,Object(S.a)(Object(S.a)({},e),{},{children:Object(c.jsx)("textarea",Object(S.a)(Object(S.a)({},n),t))}))},Ne=function(e){var t=e.input,n=Object(K.a)(e,["input"]);return Object(c.jsx)(we,Object(S.a)(Object(S.a)({},e),{},{children:Object(c.jsx)("input",Object(S.a)(Object(S.a)({},t),n))}))},ye=n(85),Ce=n.n(ye),Ae=Object(ve.a)({form:"addMessageForm"})((function(e){return Object(c.jsxs)("div",{className:Ce.a.wrapper,children:[Object(c.jsx)("div",{className:Ce.a.photo,children:Object(c.jsx)("img",{src:re,alt:"userPhoto"})}),Object(c.jsxs)("form",{className:Ce.a.form,onSubmit:e.handleSubmit,children:[Object(c.jsx)(_e.a,{component:Ne,name:"newMessageText"}),Object(c.jsx)("button",{})]})]})})),Te=function(e){return e.dialogsPage.dialogs},ke=function(e){return e.dialogsPage.messages},Ie=function(){var e=Object(O.d)(ke),t=Object(L.i)().id,n=Object(O.c)();Object(i.useEffect)((function(){t&&n(xe(t))}),[t]);var a=e.map((function(e){return Object(c.jsx)(le,{message:e},e.id)}));return Object(c.jsxs)("div",{className:ee.a.messagesContainer,children:[Object(c.jsx)("div",{className:ee.a.messages,children:a}),Object(c.jsx)(Ae,{onSubmit:function(e){var a=e.newMessageText;n(function(e,t){return function(){var n=Object(v.a)(_.a.mark((function n(a){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fe(e,t);case 2:n.sent.resultCode===r.Success&&a(xe(e));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,a))}})]})},Ue=function(){var e=Object(O.d)(Te),t=Object(O.c)();Object(i.useEffect)((function(){t(me())}),[]);var n=e.map((function(e){var t=e.id,n=e.userName,r=e.photos;return Object(c.jsx)(ae,{id:t,person:n,photos:r},t)}));return Object(c.jsxs)("div",{className:ee.a.dialogs,children:[Object(c.jsx)("div",{className:ee.a.dialogsItems,children:n}),Object(c.jsx)(Ie,{})]})},Fe=n(146),Le=n.n(Fe),Re=n(40),De=n(87),Ge=n.n(De),Me=x,He=function(e){var t=e.status,n=e.updateStatus,r=Object(i.useState)(!1),a=Object(Re.a)(r,2),s=a[0],o=a[1],u=Object(i.useState)(t),l=Object(Re.a)(u,2),j=l[0],d=l[1];Object(i.useEffect)((function(){d(t)}),[t]);var p=s?Object(c.jsx)("input",{onBlur:function(){o(!1),n(j)},autoFocus:!0,type:"text",onChange:function(e){d(e.target.value)},value:j}):Object(c.jsx)("span",{onDoubleClick:function(){o(!0)},children:t||"..."});return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{children:p})})},ze=n(139),Be=function(e){if(!e)return"Field is required"},Ve=Object(ve.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error,a=r?Object(c.jsx)("div",{className:Ee.a.summaryError,children:r}):null,s=Object.keys(n.contacts).map((function(e){return Object(c.jsxs)("div",{children:[e," ",Object(c.jsx)(_e.a,{name:"contacts.".concat(e),component:Ne})]},e)}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(ze.a,{onSubmit:t,children:[Object(c.jsxs)("div",{children:["FullName: ",Object(c.jsx)(_e.a,{name:"fullName",placeholder:"Your full name",validate:[Be],component:Ne})]}),Object(c.jsxs)("div",{children:["About me: ",Object(c.jsx)(_e.a,{name:"aboutMe",placeholder:"About me",component:Ne})]}),Object(c.jsxs)("div",{children:["looking for a job: ",Object(c.jsx)(_e.a,{name:"lookingForAJob",component:Ne,type:"checkbox"})]}),Object(c.jsxs)("div",{children:["My professional skills: ",Object(c.jsx)(_e.a,{name:"lookingForAJobDescription",placeholder:"Your professional skills ?",component:Pe})]}),s,Object(c.jsx)("div",{children:a}),Object(c.jsx)("button",{children:"Save"})]})})})),We=function(e){var t=e.contactTitle,n=e.contactValue;return Object(c.jsxs)("div",{children:[t," : ",n]})},Ye=function(e){var t=e.profile,n=e.toggleEditMode,r=e.isOwner,a=t.fullName,s=t.aboutMe,o=t.lookingForAJob,i=t.lookingForAJobDescription,u=t.contacts;return Object(c.jsxs)("div",{className:Ge.a.descr,children:["data",r?Object(c.jsx)("button",{onClick:n,children:"edit"}):null,Object(c.jsxs)("div",{children:["FullName: ",a]}),Object(c.jsxs)("div",{children:["About me: ",s]}),Object(c.jsx)("div",{children:o?"looking for a job":"lol job?"}),Object(c.jsxs)("div",{children:["Skills: ",o?i:null]}),Object(c.jsxs)("div",{children:["Contacts: ",Object.keys(u).map((function(e){return Object(c.jsx)(We,{contactTitle:e,contactValue:u[e]},e)}))]})]})},Je=function(e){var t=e.profile,n=e.status,r=e.updateStatus,a=e.isOwner,s=e.savePhoto,o=e.saveProfile,u=Object(i.useState)(!1),l=Object(Re.a)(u,2),j=l[0],d=l[1],p=function(){d(!j)};if(!t)return Object(c.jsx)(Me,{});var f=t.photos;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:Ge.a.description,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{className:Ge.a.profilePhoto,alt:"user photo",src:f.large||re}),a&&Object(c.jsx)("input",{onChange:function(e){var t;if(e.preventDefault(),1===(null===(t=e.target.files)||void 0===t?void 0:t.length)){var n=e.target.files[0];s(n)}},type:"file"}),Object(c.jsx)("b",{children:"status: "}),Object(c.jsx)(He,{status:n,updateStatus:r})]}),j?Object(c.jsx)(Ve,{initialValues:t,profile:t,onSubmit:function(e){o(e).then((function(){p()}))}}):Object(c.jsx)(Ye,{isOwner:a,profile:t,toggleEditMode:p})]})})},Xe=n(147),qe=n.n(Xe),Ke=function(e){var t=e.img,n=e.text,r=e.likesCount;return Object(c.jsxs)("div",{className:qe.a.item,children:[Object(c.jsx)("img",{src:t,alt:"avatar"}),n,Object(c.jsx)("div",{children:Object(c.jsxs)("span",{children:["like ",r]})})]})},Ze=n(148),Qe=n.n(Ze),$e=n(57),et={posts:[{img:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",text:"wow",likesCount:2,id:1}],profile:null,status:"",onProfilePage:!1},tt=function(e){return{type:"PROFILE/ADD-POST",postText:e}},nt=function(e){return{type:"PROFILE/SET_PROFILE",profile:e}},rt=function(e){return{type:"PROFILE/SET_STATUS",status:e}},at=function(e){return{type:"PROFILE/SAVE_PHOTO_SUCCESS",photos:e}},ct=function(e){return{type:"PROFILE/ON_PROFILE_PAGE",bool:e}},st=function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:r=t.sent,n(nt(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ot=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"PROFILE/ADD-POST":return e={img:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",id:2,text:n.postText,likesCount:0},Object(S.a)(Object(S.a)({},t),{},{posts:[].concat(Object($e.a)(t.posts),[e])});case"PROFILE/SET_PROFILE":return Object(S.a)(Object(S.a)({},t),{},{profile:n.profile});case"PROFILE/SET_STATUS":return Object(S.a)(Object(S.a)({},t),{},{status:n.status});case"PROFILE/DELETE_POST":return Object(S.a)(Object(S.a)({},t),{},{posts:t.posts.filter((function(e){return e.id!==n.id}))});case"PROFILE/SAVE_PHOTO_SUCCESS":return Object(S.a)(Object(S.a)({},t),{},{profile:Object(S.a)(Object(S.a)({},t.profile),{},{photos:n.photos})});case"PROFILE/SAVE_PROFILE_DATA_SUCCESS":return Object(S.a)(Object(S.a)({},t),{},{profile:Object(S.a)(Object(S.a)({},t.profile),n.profile)});case"PROFILE/ON_PROFILE_PAGE":return Object(S.a)(Object(S.a)({},t),{},{onProfilePage:n.bool});default:return t}},it=(Z=10,function(e){if(e.length>Z)return"Max length is ".concat(Z," symbols")}),ut=Object(ve.a)({form:"postForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)(_e.a,{placeholder:"Enter your post text",validate:[Be,it],name:"postText",component:Pe}),Object(c.jsx)("button",{children:"Add post"})]})})),lt=Object(i.memo)((function(e){var t=e.postData,n=e.addNewPost,r=t.map((function(e){var t=e.img,n=e.text,r=e.id,a=e.likesCount;return Object(c.jsx)(Ke,{img:t,text:n,likesCount:a},r)}));return Object(c.jsxs)("div",{className:Qe.a.postBlock,children:[Object(c.jsx)("h3",{children:"My post"}),Object(c.jsx)("div",{children:"New post"}),Object(c.jsx)(ut,{onSubmit:function(e){var t=e.postText;n(t)}}),Object(c.jsx)("div",{children:r})]})})),jt=tt,dt=Object(O.b)((function(e){return{postData:e.profilePage.posts}}),{addNewPost:jt})(lt),pt=function(e){var t=e.profile,n=e.status,r=e.updateStatus,a=e.isOwner,s=e.savePhoto,o=e.saveProfile;return Object(c.jsxs)("div",{className:Le.a.profile,children:[Object(c.jsx)(Je,{saveProfile:o,savePhoto:s,isOwner:a,status:n,profile:t,updateStatus:r}),Object(c.jsx)(dt,{})]})},ft=n(12),bt=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).savePhoto=function(t){(0,e.props.savePhoto)(t)},e.refreshProfileData=function(){var t=e.props,n=t.getProfile,r=t.match,a=t.getStatus,c=t.authUserId,s=+r.params.id;s||(s=c)||e.props.history.push("/login"),n(s),a(s)},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.onProfilePage)(!0),this.refreshProfileData()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.refreshProfileData()}},{key:"componentWillUnmount",value:function(){Ot(!1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.profile,r=t.status,a=t.updateStatus,s=t.saveProfileData;return Object(c.jsx)(pt,Object(S.a)(Object(S.a)({},this.props),{},{isOwner:!this.props.match.params.id,profile:n,status:r,savePhoto:function(t){return e.savePhoto(t)},updateStatus:a,saveProfile:s}))}}]),n}(i.Component),Ot=ct,ht=Object(ft.d)(L.j,Object(O.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.userId}}),{onProfilePage:Ot,getProfile:st,getStatus:function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:r=t.sent,n(rt(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:t.sent.data.resultCode===r.Success&&n(rt(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n){var a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:(a=t.sent).resultCode===r.Success&&n(at(a.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfileData:function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n,a){var c,s,o,i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:if(c=t.sent,s=a().auth.userId,c.resultCode!==r.Success){t.next=12;break}if(null==s){t.next=9;break}n(st(s)),t.next=10;break;case 9:throw new Error("User id can`t be null");case 10:t.next=16;break;case 12:return o=0!==c.messages.length?c.messages[0]:"some error",i=Object(R.a)("edit-profile",{_error:o}),n(i),t.abrupt("return",Promise.reject(c.messages[0]));case 16:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}))(bt),mt=n(42),xt=n.n(mt),gt=n.p+"static/media/Plus-Icon-PNG.ac4270cf.png",_t=n.p+"static/media/check.c4294ef8.png",vt=function(e){var t=e.fullName,n=e.onFollowClick,r=e.followStatus,a=e.photoUrl,s=e.status,o=e.id,i=e.followingInProgress,u=e.startDialog;return Object(c.jsx)("div",{className:xt.a.user,children:Object(c.jsxs)("div",{className:xt.a.user,children:[Object(c.jsx)("div",{children:Object(c.jsx)(U.c,{to:"/profile/".concat(o),children:Object(c.jsx)("img",{src:a,alt:"user photo",className:xt.a.user_photo})})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:xt.a.user_name,children:t}),Object(c.jsx)("div",{className:xt.a.user_status,children:s})]}),Object(c.jsxs)("div",{children:[r?Object(c.jsx)("button",{onClick:function(){return u(o)},children:"Send"}):null,Object(c.jsx)("button",{className:xt.a.subscribe,disabled:i.some((function(e){return e===o})),onClick:n,children:Object(c.jsx)("img",{src:r?_t:gt,alt:"follow"})})]})]})})},St=n(78),Et=n(36),wt=n.n(Et),Pt=n(149),Nt=n.n(Pt),yt=n.p+"static/media/next.43c0e5d8.svg",Ct=n.p+"static/media/prev.07f693de.svg",At=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,s=e.portionSize,o=void 0===s?10:s,u=Math.ceil(t/n),l=[],j=1;j<=u;j++)l.push(j);var d=Math.ceil(u/o),p=Object(i.useState)(1),f=Object(Re.a)(p,2),b=f[0],O=f[1],h=(b-1)*o+1,m=b*o;return u<2?null:Object(c.jsxs)("div",{className:wt.a.paginator,children:[b>1&&Object(c.jsx)("span",{className:wt.a.navBtn+" "+wt.a.left,onClick:function(){O(b-1)},children:Object(c.jsx)("img",{src:Ct,alt:"next"})}),l.filter((function(e){return e>=h&&e<=m})).map((function(e){return Object(c.jsx)("span",{className:Nt()(Object(St.a)({},wt.a.selectedPage,r===e),wt.a.pageNumber),onClick:function(){a(e)},children:e},e)})),d>b&&Object(c.jsx)("span",{className:wt.a.navBtn+" "+wt.a.right,onClick:function(){O(b+1)},children:Object(c.jsx)("img",{src:yt,alt:"next"})})]})},Tt={getUsers:function(){var e=Object(v.a)(_.a.mark((function e(){var t,n,r,a,c,s=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:1,n=s.length>1&&void 0!==s[1]?s[1]:10,r=s.length>2&&void 0!==s[2]?s[2]:"",a=s.length>3&&void 0!==s[3]?s[3]:null,c="/users?page=".concat(t,"&count=").concat(n,"&term=").concat(r)+(null===a?"":"&friend=".concat(a)),e.abrupt("return",w.get(c).then((function(e){return e.data})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),followUser:function(e){return w.post("/follow/".concat(e)).then((function(e){return e.data}))},unFollowUser:function(e){return w.delete("/follow/".concat(e)).then((function(e){return e.data}))}},kt={users:[],pageSize:8,totalUsersCount:0,currentPage:1,isLoading:!1,followingInProgress:[],filter:{term:"",friend:null}},It=function(){return{type:"USERS/TOGGLE_LOADING"}},Ut=function(e){return{type:"USERS/SET_TOTAL_USERS_COUNT",usersCount:e}},Ft=function(e){return{type:"USERS/SET_CURRENT_PAGE",pageNumber:e}},Lt=function(e){return{type:"USERS/SET_USERS",users:e}},Rt=function(e,t){return{type:"USERS/TOGGLE_FOLLOWING_PROGRESS",id:e,isFetching:t}},Dt=function(e){return{type:"USERS/TOGGLE_FOLLOW",id:e}},Gt=function(e){return{type:"USERS/SET_FILTER",payload:e}},Mt=function(e,t){return function(){var n=Object(v.a)(_.a.mark((function n(r,a){var c,s;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(It()),s=a().usersPage.filter,n.next=4,Tt.getUsers(e,t,s.term,s.friend);case 4:c=n.sent,r(It()),r(Ut(c.totalCount)),r(Lt(c.items));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},Ht=function(){var e=Object(v.a)(_.a.mark((function e(t,n,a,c){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Rt(n,!0)),e.next=3,c(n);case 3:e.sent.resultCode===r.Success&&(t(a(n)),t(Rt(n,!1)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS/SET_USERS":return Object(S.a)(Object(S.a)({},e),{},{users:Object($e.a)(t.users)});case"USERS/TOGGLE_FOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(S.a)(Object(S.a)({},e),{},{followed:!e.followed}):e}))});case"USERS/SET_TOTAL_USERS_COUNT":return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.usersCount});case"USERS/SET_CURRENT_PAGE":return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.pageNumber});case"USERS/TOGGLE_LOADING":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!e.isLoading});case"USERS/TOGGLE_FOLLOWING_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object($e.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!==t.id}))});case"USERS/SET_FILTER":return Object(S.a)(Object(S.a)({},e),{},{filter:t.payload});default:return e}},Bt=n(49),Vt=n.n(Bt),Wt=function(e){return e.usersPage.users},Yt=function(e){return e.usersPage.pageSize},Jt=function(e){return e.usersPage.totalUsersCount},Xt=function(e){return e.usersPage.currentPage},qt=function(e){return e.usersPage.isLoading},Kt=function(e){return e.usersPage.followingInProgress},Zt=function(e){return e.usersPage.filter},Qt=n(109),$t=function(){var e=Object(O.d)(Jt),t=Object(O.d)(Xt),n=Object(O.d)(Yt),a=Object(O.d)(Wt),s=Object(O.d)(qt),o=Object(O.d)(Kt),u=Object(O.d)(Zt),l=Object(L.g)(),j=Object(O.c)();Object(i.useEffect)((function(){var e=Qt.parse(l.location.search.substr(1)),r=u,a=t;return e.page&&(a=+e.page),e.term&&(r=Object(S.a)(Object(S.a)({},r),{},{term:e.term})),e.friend&&(r=Object(S.a)(Object(S.a)({},r),{},{friend:"null"===e.friend?null:"false"!==e.friend})),j(Ft(a)),j(Gt(r)),j(Mt(a,n)),function(){j(Gt({term:"",friend:null}))}}),[]),Object(i.useEffect)((function(){var e={};u.term&&(e.term=u.term),null!==u.friend&&(e.friend=String(u.friend)),1!==t&&(e.page=String(t)),l.push({pathname:"/users",search:Qt.encode(e)})}),[u,t]);var d=function(e){l.push("/dialogs/".concat(e)),j(function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de(e);case 2:t.sent.resultCode===r.Success&&n(me());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},p=function(e){j(function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ht(n,e,Dt,Tt.followUser);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},f=function(e){j(function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ht(n,e,Dt,Tt.unFollowUser);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},b=a.map((function(e){var t=e.id,n=e.name,r=e.status,a=e.followed,s=e.photos;return Object(c.jsx)(vt,{onFollowClick:function(){return a?f(t):p(t)},photoUrl:s.small?s.small:re,followStatus:a,fullName:n,status:r,startDialog:d,id:t,followingInProgress:o},t)})),h=s?Object(c.jsx)(Me,{}):b;return 0!==a.length||s?Object(c.jsx)("div",{className:Vt.a.users,children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:Vt.a.usersContainer,children:h}),Object(c.jsx)("div",{className:Vt.a.paginator,children:Object(c.jsx)(At,{totalItemsCount:e,pageSize:n,currentPage:t,onPageChanged:function(e){j(Ft(e)),j(Mt(e,n))}})})]})}):Object(c.jsx)("div",{className:Vt.a.users,children:Object(c.jsxs)("div",{className:Vt.a.notFound,children:[Object(c.jsx)("img",{src:"http://vkclub.su/_data/stickers/gribson/sticker_vk_gribson_019.png",alt:"oops"}),Object(c.jsx)("p",{children:"Sorry users not found"})]})})},en=n(23),tn=n.n(en),nn=n(65),rn=function(e){var t=e.onSubmit,n=Object(O.d)(Zt);return Object(c.jsx)(nn.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:String(n.friend)},onSubmit:function(e){var n={term:e.term,friend:"null"===e.friend?null:"false"!==e.friend};t(n)},children:function(){return Object(c.jsxs)(nn.b,{children:[Object(c.jsxs)(nn.a,{as:"select",name:"friend",children:[Object(c.jsx)("option",{value:"null",children:"All"}),Object(c.jsx)("option",{value:"true",children:"Only followed"}),Object(c.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(c.jsx)(nn.a,{type:"text",name:"term"}),Object(c.jsx)("button",{className:tn.a.submit,type:"submit"})]})}})},an=u.a.memo(rn),cn=function(e){var t=e.onSearchSubmit;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:tn.a.content,children:[Object(c.jsx)("h1",{className:tn.a.logo+" "+tn.a.logo_auth,children:"mashroom"}),Object(c.jsx)(an,{onSubmit:t}),Object(c.jsxs)("ul",{className:tn.a.menu,children:[Object(c.jsx)("li",{children:Object(c.jsx)(U.c,{activeClassName:tn.a.active,to:"/profile",children:"PROFILE"})}),Object(c.jsx)("li",{children:Object(c.jsx)(U.c,{activeClassName:tn.a.active,to:"/users",children:"USERS"})}),Object(c.jsx)("li",{children:Object(c.jsx)(U.c,{activeClassName:tn.a.active,to:"/dialogs",children:"MESSAGES"})}),Object(c.jsx)(U.c,{className:tn.a.settings,activeClassName:tn.a.active,to:"/settings"})]})]})})},sn=function(e){var t=e.onSearchSubmit;return Object(c.jsx)("header",{className:tn.a.header,children:Object(c.jsx)(cn,{onSearchSubmit:t})})},on=function(e){var t=Object(O.c)(),n=Object(O.d)(Yt),r=Object(L.g)(),a=Object(L.h)();return Object(c.jsx)(sn,Object(S.a)(Object(S.a)({},e),{},{onSearchSubmit:function(e){"/users"!==a.pathname&&r.push("/users"),t(Ft(1)),t(Gt(e)),t(Mt(1,n))}}))},un=n(37),ln=n.n(un),jn=Object(ve.a)({form:"login"})((function(e){var t=e.error,n=e.captcha,r=e.handleSubmit,a=t?Object(c.jsx)("div",{className:ln.a.summaryError,children:t}):null;return Object(c.jsxs)("form",{className:ln.a.form,onSubmit:r,children:[Object(c.jsxs)("div",{className:ln.a.input,children:[Object(c.jsx)("div",{children:"Email"}),Object(c.jsx)(_e.a,{validate:[Be],type:"text",name:"email",placeholder:"login",component:Ne})]}),Object(c.jsxs)("div",{className:ln.a.input,children:[Object(c.jsx)("div",{children:"Password"}),Object(c.jsx)(_e.a,{validate:[Be],type:"password",name:"password",placeholder:"password",component:Ne})]}),Object(c.jsxs)("div",{className:ln.a.checkbox,children:[Object(c.jsx)(_e.a,{type:"checkbox",name:"rememberMe",component:Ne}),Object(c.jsx)("div",{className:ln.a.remember,children:"Remember me"})]}),a,n?Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:n,alt:"captcha"}),Object(c.jsx)(_e.a,{placeholder:"captcha text",validate:[Be],type:"text",name:"captcha",component:Ne})]}):null,Object(c.jsx)("div",{className:ln.a.button,children:Object(c.jsx)("button",{children:"Login"})})]})})),dn=n(110),pn=n.n(dn),fn=function(){var e=Object(O.d)(oe),t=Object(O.d)(ie),n=Object(O.c)();return t?Object(c.jsx)(L.a,{to:"/profile"}):Object(c.jsxs)("div",{className:pn.a.login,children:[Object(c.jsx)(jn,{captcha:e,onSubmit:function(e){var t=e.email,c=e.password,s=e.rememberMe,o=e.captcha;n(function(e,t,n,c){return function(){var s=Object(v.a)(_.a.mark((function s(o){var i,u,l;return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,G(e,t,n,c);case 2:(i=s.sent).data.resultCode===r.Success?(o(J()),o(Y())):(u=0!==i.data.messages.length?i.data.messages[0]:"some error",l=Object(R.a)("login",{_error:u}),i.data.resultCode===a.captcha&&(o(l),o(X())),o(l));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}(t,c,s,o))}}),Object(c.jsxs)("div",{className:pn.a.descr,children:[Object(c.jsx)("p",{children:"Welcome to the mashroom"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Communication"}),Object(c.jsx)("li",{children:"News"}),Object(c.jsx)("li",{children:"Self-expression"})]})]})]})},bn={initialized:!1},On=function(){return{type:"APP/INITIALIZED_SUCCESS"}},hn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/INITIALIZED_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},mn=n(152),xn=n(142),gn=n(153),_n=n.n(gn),vn=Object(ft.c)({profilePage:ot,dialogsPage:ge,sidebar:I,usersPage:zt,auth:q,app:hn,form:xn.a}),Sn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ft.d,En=Object(ft.e)(vn,Sn(Object(ft.a)(mn.a,_n.a))),wn=n(154),Pn=n.n(wn),Nn=function(){return Object(c.jsxs)("div",{className:Pn.a.pageNotFound,children:[Object(c.jsx)("img",{src:"http://vkclub.su/_data/stickers/gribson/sticker_vk_gribson_019.png",alt:""}),Object(c.jsxs)("p",{children:["Oooops! ",Object(c.jsx)("br",{})," Page not found"]})]})},yn=u.a.lazy((function(){return n.e(4).then(n.bind(null,308))})),Cn=u.a.lazy((function(){return n.e(3).then(n.bind(null,309))})),An=u.a.lazy((function(){return n.e(5).then(n.bind(null,307))})),Tn=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(){alert("some error occurred")},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.initializeApp)(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?this.props.isAuth?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"app _container",children:[Object(c.jsx)(on,{}),this.props.isAuth?Object(c.jsx)(F,{}):null,Object(c.jsx)("div",{className:"app-wrapper-content",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(Me,{}),children:Object(c.jsxs)(L.d,{children:[Object(c.jsx)(L.b,{exact:!0,path:"/",render:function(){return Object(c.jsx)(L.a,{to:"/profile"})}}),Object(c.jsx)(L.b,{path:"/profile/:id?",render:function(){return Object(c.jsx)(ht,{})}}),Object(c.jsx)(L.b,{path:"/dialogs/:id?",render:function(){return Object(c.jsx)(Ue,{})}}),Object(c.jsx)(L.b,{path:"/chat",render:function(){return Object(c.jsx)(An,{})}}),Object(c.jsx)(L.b,{path:"/music",component:Cn}),Object(c.jsx)(L.b,{path:"/news",component:yn}),Object(c.jsx)(L.b,{path:"/users",component:$t}),Object(c.jsx)(L.b,{path:"/settings",component:Q}),Object(c.jsx)(L.b,{path:"/login",component:fn}),Object(c.jsx)(L.b,{path:"*",component:Nn})]})})})]})}):Object(c.jsx)(fn,{}):Object(c.jsx)(Me,{})}}]),n}(i.Component),kn=Object(ft.d)(L.j,Object(O.b)((function(e){return{initialized:e.app.initialized,isAuth:e.auth.isAuth}}),{initializeApp:function(){return function(){var e=Object(v.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(J()).then((function(){t(On())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Tn),In=function(){return Object(c.jsx)(U.a,{children:Object(c.jsx)(O.a,{store:En,children:Object(c.jsx)(kn,{})})})};o.a.render(Object(c.jsx)(In,{}),document.getElementById("root"))},36:function(e,t,n){e.exports={paginator:"paginator_paginator__2ARdb",pageNumber:"paginator_pageNumber__2YQgy",selectedPage:"paginator_selectedPage__2Px8m",navBtn:"paginator_navBtn__3q56V",right:"paginator_right__1dCx0",left:"paginator_left__1Iv1A"}},37:function(e,t,n){e.exports={form:"loginForm_form__3Vb_K",input:"loginForm_input__ziBHz",checkbox:"loginForm_checkbox__3e9UO",remember:"loginForm_remember__jXYoO",button:"loginForm_button__1C0af"}},41:function(e,t,n){e.exports={message:"message_message__2SYi-",own:"message_own__2ClmB",noOwn:"message_noOwn__GZpCA",text:"message_text__3wddD",senderName:"message_senderName__3wTCt"}},42:function(e,t,n){e.exports={user:"user_user__1hjSD",user_photo:"user_user_photo__15M4Y",user_name:"user_user_name__1beMh",user_status:"user_user_status__30yOH",subscribe:"user_subscribe__HXmuo"}},48:function(e,t,n){e.exports={formControl:"formControls_formControl__nwszG",error:"formControls_error__23Zih",summaryError:"formControls_summaryError__4h2HN"}},49:function(e,t,n){e.exports={users:"users_users__1XLYr",paginator:"users_paginator__2pEaW",notFound:"users_notFound__2jHfh"}},63:function(e,t,n){e.exports={dialogs:"dialogs_dialogs__14W0_",dialogsItems:"dialogs_dialogsItems__oSSNC",messagesContainer:"dialogs_messagesContainer__DD0fF",messages:"dialogs_messages__Odv3N"}},64:function(e,t,n){e.exports={dialog:"dialog_dialog__SgFmC",active:"dialog_active__2_S4l",name:"dialog_name__Ax5JM",photo:"dialog_photo__27FwB"}},85:function(e,t,n){e.exports={wrapper:"dialogsForm_wrapper__3Ba7c",form:"dialogsForm_form__C9lDk",photo:"dialogsForm_photo__2t1e_"}},87:function(e,t,n){e.exports={description:"profileInfo_description__3o5_0",profilePhoto:"profileInfo_profilePhoto__splgS",contacts:"profileInfo_contacts__3I2Gx"}}},[[306,1,2]]]);
//# sourceMappingURL=main.56083678.chunk.js.map