(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,n){e.exports={dialog:"dialog_dialog__SgFmC",active:"dialog_active__2_S4l"}},105:function(e,t,n){e.exports={preloader:"spinner_preloader__1jMg2",spinner:"spinner_spinner__1Hetg",spin:"spinner_spin__A_APw"}},106:function(e,t,n){e.exports={users:"users_users__1XLYr"}},107:function(e,t,n){e.exports={login:"login_login__VKdDU",descr:"login_descr__u0f4g"}},141:function(e,t,n){},143:function(e,t,n){e.exports={profile:"profile_profile__1d7zg"}},144:function(e,t,n){e.exports={item:"post_item__1y2Bx"}},145:function(e,t,n){e.exports={postBlock:"myPosts_postBlock__1gIeR"}},152:function(e,t,n){e.exports={pageNotFound:"pageNotFound_pageNotFound__2eM4K"}},17:function(e,t,n){e.exports={navbar:"nav_navbar__1sgBY",items:"nav_items__1HLGi",item:"nav_item__7oIdo",active:"nav_active__1Qdkv"}},186:function(e,t,n){},19:function(e,t,n){e.exports={header:"header_header__18sGI",content:"header_content__15Dq1",submit:"header_submit__vXiCC",logo:"header_logo__esTHP",logo_auth:"header_logo_auth__2BghE",logo_noAuth:"header_logo_noAuth__emH4y",menu:"header_menu__2b9oq",active:"header_active__19EXb",settings:"header_settings__26DpH",loginBlock:"header_loginBlock__2ztlx"}},302:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(69),s=n.n(a),c=n(1),o=n.n(c),i=n(71),u=n(72),l=n(79),j=n(78),d=n(17),b=n.n(d),p=n(12),f=n(8),h=Object(f.b)()((function(){return Object(r.jsx)("nav",{className:b.a.navbar,children:Object(r.jsxs)("div",{className:b.a.items,children:[Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{activeClassName:b.a.active,to:"/profile",children:"Profile"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{activeClassName:b.a.active,to:"/dialogs",children:"Messages"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{activeClassName:b.a.active,to:"/users",children:"Users"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{activeClassName:b.a.active,to:"/news",children:"News"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{activeClassName:b.a.active,to:"/music",children:"Music"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{activeClassName:b.a.active,to:"/settings",children:"Settings"})})]})})})),O=n(13),m=(n(186),function(){return Object(r.jsx)("p",{children:"Settings"})}),g=n(3),x=n(80),v=n.n(x),_=n(102),S=n.n(_),E=function(e){var t=e.person,n=e.id,a="/dialogs/".concat(n);return Object(r.jsx)("div",{className:S.a.dialog+" "+S.a.active,children:Object(r.jsx)(p.b,{to:a,children:t})})},P=n(141),w=n.n(P),N=function(e){var t=e.label;return Object(r.jsx)("div",{className:w.a.message,children:t})},A=n(39),C={messages:[{id:1,message:"hey"},{id:2,message:"lol"}],dialogs:[{person:"Andrey",id:1},{person:"Sergey",id:2}]},y=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"DIALOGS/ADD_MESSAGE":return e={id:5,message:n.message},Object(g.a)(Object(g.a)({},t),{},{messages:[].concat(Object(A.a)(t.messages),[e])});default:return t}},T=n(59);function k(e){return Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){var n=t.isAuth,a=Object(T.a)(t,["isAuth"]);return n?Object(r.jsx)(e,Object(g.a)({},a)):Object(r.jsx)(O.a,{to:"/login"})}))}var U,I,R=n(11),L=n(137),F=n(138),D=n(47),M=n.n(D),G=function(e){var t=e.meta,n=t.touched,a=t.error,s=e.children,c=n&&a,o=c?Object(r.jsx)("span",{children:a}):null;return Object(r.jsxs)("div",{className:c?M.a.formControl+" "+M.a.error:M.a.formControl,children:[Object(r.jsx)("div",{children:s}),o]})},H=function(e){var t=e.input,n=Object(T.a)(e,["input"]);return Object(r.jsx)(G,Object(g.a)(Object(g.a)({},e),{},{children:Object(r.jsx)("textarea",Object(g.a)(Object(g.a)({},n),t))}))},z=function(e){var t=e.input,n=Object(T.a)(e,["input"]);return Object(r.jsx)(G,Object(g.a)(Object(g.a)({},e),{},{children:Object(r.jsx)("input",Object(g.a)(Object(g.a)({},t),n))}))},B=function(e){if(!e)return"Field is required"},V=Object(F.a)({form:"addMessageForm"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)(L.a,{component:H,name:"newMessageText",validate:[B]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Send"})})]})})),K=Object(R.d)(k,Object(f.b)((function(e){return{dialogsData:e.dialogsPage.dialogs,messagesData:e.dialogsPage.messages}}),Object(g.a)({},{addNewMessage:function(e){return{type:"DIALOGS/ADD_MESSAGE",message:e}}})))((function(e){var t=e.dialogsData,n=e.messagesData,a=e.addNewMessage,s=t.map((function(e){var t=e.id,n=e.person;return Object(r.jsx)(E,{id:t,person:n},t)})),c=n.map((function(e){var t=e.message,n=e.id;return Object(r.jsx)(N,{label:t},n)}));return Object(r.jsxs)("div",{className:v.a.dialogs,children:[Object(r.jsx)("div",{className:v.a.dialogsItems,children:s}),Object(r.jsxs)("div",{className:v.a.messages,children:[Object(r.jsx)("div",{children:c}),Object(r.jsx)(V,{onSubmit:function(e){var t=e.newMessageText;a(t)}})]})]})})),X=n(143),Y=n.n(X),W=n(40),J=n(82),q=n.n(J),Z=n(105),Q=n.n(Z),$=function(){return Object(r.jsx)("div",{className:Q.a.preloader,children:Object(r.jsx)("div",{className:Q.a.spinner})})},ee=$,te=n.p+"static/media/avatar.00971467.png",ne=function(e){var t=e.status,n=e.updateStatus,a=Object(c.useState)(!1),s=Object(W.a)(a,2),o=s[0],i=s[1],u=Object(c.useState)(t),l=Object(W.a)(u,2),j=l[0],d=l[1];Object(c.useEffect)((function(){d(t)}),[t]);var b=o?Object(r.jsx)("input",{onBlur:function(){i(!1),n(j)},autoFocus:!0,type:"text",onChange:function(e){d(e.target.value)},value:j}):Object(r.jsx)("span",{onDoubleClick:function(){i(!0)},children:t||"..."});return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{children:b})})},re=n(128),ae=Object(F.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,a=e.error,s=a?Object(r.jsx)("div",{className:M.a.summaryError,children:a}):null,c=Object.keys(n.contacts).map((function(e){return Object(r.jsxs)("div",{children:[e," ",Object(r.jsx)(L.a,{name:"contacts.".concat(e),component:z})]},e)}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(re.a,{onSubmit:t,children:[Object(r.jsxs)("div",{children:["FullName: ",Object(r.jsx)(L.a,{name:"fullName",placeholder:"Your full name",validate:[B],component:z})]}),Object(r.jsxs)("div",{children:["About me: ",Object(r.jsx)(L.a,{name:"aboutMe",placeholder:"About me",component:z})]}),Object(r.jsxs)("div",{children:["looking for a job: ",Object(r.jsx)(L.a,{name:"lookingForAJob",component:z,type:"checkbox"})]}),Object(r.jsxs)("div",{children:["My professional skills: ",Object(r.jsx)(L.a,{name:"lookingForAJobDescription",placeholder:"Your professional skills ?",component:H})]}),c,Object(r.jsx)("div",{children:s}),Object(r.jsx)("button",{children:"Save"})]})})})),se=function(e){var t=e.contactTitle,n=e.contactValue;return Object(r.jsxs)("div",{children:[t," : ",n]})},ce=function(e){var t=e.profile,n=e.toggleEditMode,a=e.isOwner,s=t.fullName,c=t.aboutMe,o=t.lookingForAJob,i=t.lookingForAJobDescription,u=t.contacts;return Object(r.jsxs)("div",{className:q.a.descr,children:["data",a?Object(r.jsx)("button",{onClick:n,children:"edit"}):null,Object(r.jsxs)("div",{children:["FullName: ",s]}),Object(r.jsxs)("div",{children:["About me: ",c]}),Object(r.jsx)("div",{children:o?"looking for a job":"lol job?"}),Object(r.jsxs)("div",{children:["Skills: ",o?i:null]}),Object(r.jsxs)("div",{children:["Contacts: ",Object.keys(u).map((function(e){return Object(r.jsx)(se,{contactTitle:e,contactValue:u[e]},e)}))]})]})},oe=function(e){var t=e.profile,n=e.status,a=e.updateStatus,s=e.isOwner,o=e.savePhoto,i=e.saveProfile,u=Object(c.useState)(!1),l=Object(W.a)(u,2),j=l[0],d=l[1],b=function(){d(!j)};if(!t)return Object(r.jsx)(ee,{});var p=t.photos;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:q.a.description,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{className:q.a.profilePhoto,alt:"user photo",src:p.large||te}),s&&Object(r.jsx)("input",{onChange:function(e){var t;if(e.preventDefault(),1===(null===(t=e.target.files)||void 0===t?void 0:t.length)){var n=e.target.files[0];o(n)}},type:"file"}),Object(r.jsx)("b",{children:"status: "}),Object(r.jsx)(ne,{status:n,updateStatus:a})]}),j?Object(r.jsx)(ae,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){b()}))}}):Object(r.jsx)(ce,{isOwner:s,profile:t,toggleEditMode:b})]})})},ie=n(144),ue=n.n(ie),le=function(e){var t=e.img,n=e.text,a=e.likesCount;return Object(r.jsxs)("div",{className:ue.a.item,children:[Object(r.jsx)("img",{src:t,alt:"avatar"}),n,Object(r.jsx)("div",{children:Object(r.jsxs)("span",{children:["like ",a]})})]})},je=n(145),de=n.n(je),be=n(7),pe=n.n(be),fe=n(15),he=n(146),Oe=n.n(he).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"f68a4cda-2f4c-4785-816b-4190cdf2b12c"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(U||(U={})),function(e){e[e.captcha=10]="captcha"}(I||(I={}));var me,ge=n(26),xe=function(e){return Oe.get("/profile/".concat(e)).then((function(e){return e.data}))},ve=function(e){return Oe.get("/profile/status/".concat(e)).then((function(e){return e.data}))},_e=function(e){return Oe.put("/profile/status",{status:e})},Se=function(e){var t=new FormData;return t.append("image",e),Oe.put("/profile/photo",t,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){return e.data}))},Ee=function(e){return Oe.put("/profile",e).then((function(e){return e.data}))},Pe={posts:[{img:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",text:"wow",likesCount:2,id:1}],profile:null,status:""},we=function(e){return{type:"PROFILE/ADD-POST",postText:e}},Ne=function(e){return{type:"PROFILE/SET_PROFILE",profile:e}},Ae=function(e){return{type:"PROFILE/SET_STATUS",status:e}},Ce=function(e){return{type:"PROFILE/SAVE_PHOTO_SUCCESS",photos:e}},ye=function(e){return function(){var t=Object(fe.a)(pe.a.mark((function t(n){var r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xe(e);case 2:r=t.sent,n(Ne(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Te=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"PROFILE/ADD-POST":return e={img:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",id:2,text:n.postText,likesCount:0},Object(g.a)(Object(g.a)({},t),{},{posts:[].concat(Object(A.a)(t.posts),[e])});case"PROFILE/SET_PROFILE":return Object(g.a)(Object(g.a)({},t),{},{profile:n.profile});case"PROFILE/SET_STATUS":return Object(g.a)(Object(g.a)({},t),{},{status:n.status});case"PROFILE/DELETE_POST":return Object(g.a)(Object(g.a)({},t),{},{posts:t.posts.filter((function(e){return e.id!==n.id}))});case"PROFILE/SAVE_PHOTO_SUCCESS":return Object(g.a)(Object(g.a)({},t),{},{profile:Object(g.a)(Object(g.a)({},t.profile),{},{photos:n.photos})});case"PROFILE/SAVE_PROFILE_DATA_SUCCESS":return Object(g.a)(Object(g.a)({},t),{},{profile:Object(g.a)(Object(g.a)({},t.profile),n.profile)});default:return t}},ke=(me=10,function(e){if(e.length>me)return"Max length is ".concat(me," symbols")}),Ue=Object(F.a)({form:"postForm"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)(L.a,{placeholder:"Enter your post text",validate:[B,ke],name:"postText",component:H}),Object(r.jsx)("button",{children:"Add post"})]})})),Ie=Object(c.memo)((function(e){var t=e.postData,n=e.addNewPost,a=t.map((function(e){var t=e.img,n=e.text,a=e.id,s=e.likesCount;return Object(r.jsx)(le,{img:t,text:n,likesCount:s},a)}));return Object(r.jsxs)("div",{className:de.a.postBlock,children:[Object(r.jsx)("h3",{children:"My post"}),Object(r.jsx)("div",{children:"New post"}),Object(r.jsx)(Ue,{onSubmit:function(e){var t=e.postText;n(t)}}),Object(r.jsx)("div",{children:a})]})})),Re=we,Le=Object(f.b)((function(e){return{postData:e.profilePage.posts}}),{addNewPost:Re})(Ie),Fe=function(e){var t=e.profile,n=e.status,a=e.updateStatus,s=e.isOwner,c=e.savePhoto,o=e.saveProfile;return Object(r.jsxs)("div",{className:Y.a.profile,children:[Object(r.jsx)(oe,{saveProfile:o,savePhoto:c,isOwner:s,status:n,profile:t,updateStatus:a}),Object(r.jsx)(Le,{})]})},De=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).savePhoto=function(t){(0,e.props.savePhoto)(t)},e.refreshProfileData=function(){var t=e.props,n=t.getProfile,r=t.match,a=t.getStatus,s=t.authUserId,c=+r.params.id;c||(c=s)||e.props.history.push("/login"),n(c),a(c)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.refreshProfileData()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.refreshProfileData()}},{key:"render",value:function(){var e=this,t=this.props,n=t.profile,a=t.status,s=t.updateStatus,c=t.saveProfileData;return Object(r.jsx)(Fe,Object(g.a)(Object(g.a)({},this.props),{},{isOwner:!this.props.match.params.id,profile:n,status:a,savePhoto:function(t){return e.savePhoto(t)},updateStatus:s,saveProfile:c}))}}]),n}(c.Component),Me=Object(R.d)(k,O.g,Object(f.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.userId}}),{getProfile:ye,getStatus:function(e){return function(){var t=Object(fe.a)(pe.a.mark((function t(n){var r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ve(e);case 2:r=t.sent,n(Ae(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(fe.a)(pe.a.mark((function t(n){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e(e);case 2:t.sent.data.resultCode===U.Success&&n(Ae(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(fe.a)(pe.a.mark((function t(n){var r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Se(e);case 2:(r=t.sent).resultCode===U.Success&&n(Ce(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfileData:function(e){return function(){var t=Object(fe.a)(pe.a.mark((function t(n,r){var a,s,c,o;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee(e);case 2:if(a=t.sent,s=r().auth.userId,a.resultCode!==U.Success){t.next=12;break}if(null==s){t.next=9;break}n(ye(s)),t.next=10;break;case 9:throw new Error("User id can`t be null");case 10:t.next=16;break;case 12:return c=0!==a.messages.length?a.messages[0]:"some error",o=Object(ge.b)("edit-profile",{_error:c}),n(o),t.abrupt("return",Promise.reject(a.messages[0]));case 16:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}))(De),Ge=n(41),He=n.n(Ge),ze=n.p+"static/media/Plus-Icon-PNG.ac4270cf.png",Be=n.p+"static/media/check.c4294ef8.png",Ve=function(e){var t=e.fullName,n=e.onFollowClick,a=e.followStatus,s=e.photoUrl,c=e.status,o=e.id,i=e.followingInProgress;return Object(r.jsx)("div",{className:He.a.user,children:Object(r.jsxs)("div",{className:He.a.user,children:[Object(r.jsx)("div",{children:Object(r.jsx)(p.b,{to:"/profile/".concat(o),children:Object(r.jsx)("img",{src:s,alt:"user photo",className:He.a.user_photo})})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:He.a.user_name,children:t}),Object(r.jsx)("div",{className:He.a.user_status,children:c})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:He.a.subscribe,disabled:i.some((function(e){return e===o})),onClick:n,children:Object(r.jsx)("img",{src:a?Be:ze,alt:"follow"})})})]})})},Ke=n(73),Xe=n(83),Ye=n.n(Xe),We=n(147),Je=n.n(We),qe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,u=Math.ceil(t/n),l=[],j=1;j<=u;j++)l.push(j);var d=Math.ceil(u/i),b=Object(c.useState)(1),p=Object(W.a)(b,2),f=p[0],h=p[1],O=(f-1)*i+1,m=f*i;return Object(r.jsxs)("div",{className:Ye.a.paginator,children:[f>1&&Object(r.jsx)("button",{onClick:function(){h(f-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(r.jsx)("span",{className:Je()(Object(Ke.a)({},Ye.a.selectedPage,a===e),Ye.a.pageNumber),onClick:function(){s(e)},children:e},e)})),d>f&&Object(r.jsx)("button",{onClick:function(){h(f+1)},children:"NEXT"})]})},Ze={getUsers:function(){var e=Object(fe.a)(pe.a.mark((function e(){var t,n,r,a,s,c=arguments;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,n=c.length>1&&void 0!==c[1]?c[1]:10,r=c.length>2&&void 0!==c[2]?c[2]:"",a=c.length>3&&void 0!==c[3]?c[3]:null,s="/users?page=".concat(t,"&count=").concat(n,"&term=").concat(r)+(null===a?"":"&friend=".concat(a)),e.abrupt("return",Oe.get(s).then((function(e){return e.data})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),followUser:function(e){return Oe.post("/follow/".concat(e)).then((function(e){return e.data}))},unFollowUser:function(e){return Oe.delete("/follow/".concat(e)).then((function(e){return e.data}))}},Qe={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isLoading:!1,followingInProgress:[],filter:{term:"",friend:null}},$e=function(){return{type:"USERS/TOGGLE_LOADING"}},et=function(e){return{type:"USERS/SET_TOTAL_USERS_COUNT",usersCount:e}},tt=function(e){return{type:"USERS/SET_CURRENT_PAGE",pageNumber:e}},nt=function(e){return{type:"USERS/SET_USERS",users:e}},rt=function(e,t){return{type:"USERS/TOGGLE_FOLLOWING_PROGRESS",id:e,isFetching:t}},at=function(e){return{type:"USERS/TOGGLE_FOLLOW",id:e}},st=function(e){return{type:"USERS/SET_FILTER",payload:e}},ct=function(e,t){return function(){var n=Object(fe.a)(pe.a.mark((function n(r,a){var s,c;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r($e()),c=a().usersPage.filter,n.next=4,Ze.getUsers(e,t,c.term,c.friend);case 4:s=n.sent,r($e()),r(et(s.totalCount)),r(nt(s.items));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},ot=function(){var e=Object(fe.a)(pe.a.mark((function e(t,n,r,a){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(rt(n,!0)),e.next=3,a(n);case 3:e.sent.resultCode===U.Success&&(t(r(n)),t(rt(n,!1)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS/SET_USERS":return Object(g.a)(Object(g.a)({},e),{},{users:Object(A.a)(t.users)});case"USERS/TOGGLE_FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{followed:!e.followed}):e}))});case"USERS/SET_TOTAL_USERS_COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.usersCount});case"USERS/SET_CURRENT_PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.pageNumber});case"USERS/TOGGLE_LOADING":return Object(g.a)(Object(g.a)({},e),{},{isLoading:!e.isLoading});case"USERS/TOGGLE_FOLLOWING_PROGRESS":return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!==t.id}))});case"USERS/SET_FILTER":return Object(g.a)(Object(g.a)({},e),{},{filter:t.payload});default:return e}},ut=n(106),lt=n.n(ut),jt=function(e){return e.usersPage.users},dt=function(e){return e.usersPage.pageSize},bt=function(e){return e.usersPage.totalUsersCount},pt=function(e){return e.usersPage.currentPage},ft=function(e){return e.usersPage.isLoading},ht=function(e){return e.usersPage.followingInProgress},Ot=function(){var e=Object(f.d)(bt),t=Object(f.d)(pt),n=Object(f.d)(dt),a=Object(f.d)(jt),s=Object(f.d)(ft),o=Object(f.d)(ht),i=Object(f.c)();Object(c.useEffect)((function(){return i(ct(t,n)),function(){i(st({friend:null,term:""}))}}),[]);var u=function(e){i(function(e){return function(){var t=Object(fe.a)(pe.a.mark((function t(n){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ot(n,e,at,Ze.followUser);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},l=function(e){i(function(e){return function(){var t=Object(fe.a)(pe.a.mark((function t(n){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ot(n,e,at,Ze.unFollowUser);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},j=a.map((function(e){var t=e.id,n=e.name,a=e.status,s=e.followed,c=e.photos;return Object(r.jsx)(Ve,{onFollowClick:function(){return s?l(t):u(t)},photoUrl:c.small?c.small:te,followStatus:s,fullName:n,status:a,id:t,followingInProgress:o},t)}));return Object(r.jsx)("div",{className:lt.a.users,children:Object(r.jsxs)("div",{className:lt.a.usersContainer,children:[s?Object(r.jsx)(ee,{}):j,Object(r.jsx)(qe,{totalItemsCount:e,pageSize:n,currentPage:t,onPageChanged:function(e){i(tt(e)),i(ct(e,n))}})]})})},mt=function(){var e=Object(f.d)(ft);return Object(r.jsxs)(r.Fragment,{children:[e?Object(r.jsx)($,{}):null,Object(r.jsx)(Ot,{})]})},gt=n(19),xt=n.n(gt),vt=n(60),_t=function(e){var t=e.onSubmit;return Object(r.jsx)(vt.c,{initialValues:{term:"",friend:"null"},onSubmit:function(e){var n={term:e.term,friend:"null"===e.friend?null:"false"!==e.friend};t(n)},children:function(){return Object(r.jsxs)(vt.b,{children:[Object(r.jsx)(vt.a,{type:"text",name:"term"}),Object(r.jsxs)(vt.a,{as:"select",name:"friend",children:[Object(r.jsx)("option",{value:"null",children:"All"}),Object(r.jsx)("option",{value:"true",children:"Only followed"}),Object(r.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(r.jsx)("button",{className:xt.a.submit,type:"submit"})]})}})},St=o.a.memo(_t),Et=function(e){var t=e.onSearchSubmit;return Object(r.jsx)("div",{className:"_container",children:Object(r.jsxs)("div",{className:xt.a.content,children:[Object(r.jsx)("h1",{className:xt.a.logo+" "+xt.a.logo_auth,children:"mashroom"}),Object(r.jsx)(St,{onSubmit:t}),Object(r.jsxs)("ul",{className:xt.a.menu,children:[Object(r.jsx)("li",{children:Object(r.jsx)(p.b,{activeClassName:xt.a.active,to:"/profile",children:"PROFILE"})}),Object(r.jsx)("li",{children:Object(r.jsx)(p.b,{activeClassName:xt.a.active,to:"/users",children:"USERS"})}),Object(r.jsx)("li",{children:Object(r.jsx)(p.b,{activeClassName:xt.a.active,to:"/dialogs",children:"MESSAGES"})}),Object(r.jsx)(p.b,{className:xt.a.settings,activeClassName:xt.a.active,to:"/settings"})]})]})})},Pt=function(e){var t=e.login,n=e.logout,a=e.isAuth,s=e.onSearchSubmit;return Object(r.jsx)("header",{className:xt.a.header,children:a?Object(r.jsx)(Et,{onSearchSubmit:s,login:t,logout:n}):Object(r.jsx)("h1",{className:xt.a.logo_noAuth,children:"mashroom"})})},wt=function(){return Oe.get("/auth/me").then((function(e){return e.data}))},Nt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Oe.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r})},At=function(){return Oe.delete("/auth/login")},Ct=function(){return Oe.get("/security/get-captcha-url").then((function(e){return e.data}))},yt={isLoading:!1,userId:null,email:null,login:null,isAuth:!1,captcha:null},Tt=function(e,t,n){return{type:"AUTH/SET_USER_DATA",data:{userId:e,email:t,login:n}}},kt=function(){return{type:"AUTH/DELETE_USER_DATA"}},Ut=function(e){return{type:"AUTH/SET_CAPTCHA_URL",url:e}},It=function(){return{type:"AUTH/CAPTCHA_SUCCESS"}},Rt=function(){return function(){var e=Object(fe.a)(pe.a.mark((function e(t){var n,r,a,s,c;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wt();case 2:(n=e.sent).resultCode===U.Success&&(r=n.data,a=r.id,s=r.login,c=r.email,t(Tt(a,c,s)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Lt=function(){return function(){var e=Object(fe.a)(pe.a.mark((function e(t){var n;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ct();case 2:(n=e.sent).url&&t(Ut(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET_USER_DATA":return Object(g.a)(Object(g.a)(Object(g.a)({},e),t.data),{},{isAuth:!0});case"AUTH/DELETE_USER_DATA":return Object(g.a)(Object(g.a)({},e),{},{userId:null,email:null,login:null,isAuth:!1});case"AUTH/SET_CAPTCHA_URL":return Object(g.a)(Object(g.a)({},e),{},{captcha:t.url});case"AUTH/CAPTCHA_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{captcha:null});default:return e}},Dt=st,Mt=Object(O.g)(Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,pageSize:e.usersPage.pageSize}}),{logout:function(){return function(){var e=Object(fe.a)(pe.a.mark((function e(t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,At();case 2:e.sent.data.resultCode===U.Success&&t(kt());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},requestUsers:ct,setFilter:Dt})((function(e){var t=e.isAuth,n=e.login,a=e.logout,s=e.pageSize,c=e.setFilter,o=e.requestUsers;return Object(r.jsx)(Pt,Object(g.a)(Object(g.a)({},e),{},{onSearchSubmit:function(t){c(t),"/users"!==e.location.pathname&&e.history.push("/users"),o(1,s)},logout:a,isAuth:t,login:n}))}))),Gt=n(36),Ht=n.n(Gt),zt=Object(F.a)({form:"login"})((function(e){var t=e.error,n=e.captcha,a=e.handleSubmit,s=t?Object(r.jsx)("div",{className:Ht.a.summaryError,children:t}):null;return Object(r.jsxs)("form",{className:Ht.a.form,onSubmit:a,children:[Object(r.jsxs)("div",{className:Ht.a.input,children:[Object(r.jsx)("div",{children:"Email"}),Object(r.jsx)(L.a,{validate:[B],type:"text",name:"email",placeholder:"login",component:z})]}),Object(r.jsxs)("div",{className:Ht.a.input,children:[Object(r.jsx)("div",{children:"Password"}),Object(r.jsx)(L.a,{validate:[B],type:"password",name:"password",placeholder:"password",component:z})]}),Object(r.jsxs)("div",{className:Ht.a.checkbox,children:[Object(r.jsx)(L.a,{type:"checkbox",name:"rememberMe",component:z}),Object(r.jsx)("div",{className:Ht.a.remember,children:"Remember me"})]}),s,n?Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:n,alt:"captcha"}),Object(r.jsx)(L.a,{placeholder:"captcha text",validate:[B],type:"text",name:"captcha",component:z})]}):null,Object(r.jsx)("div",{className:Ht.a.button,children:Object(r.jsx)("button",{children:"Login"})})]})})),Bt=n(107),Vt=n.n(Bt),Kt=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,captcha:e.auth.captcha}}),{login:function(e,t,n,r){return function(){var a=Object(fe.a)(pe.a.mark((function a(s){var c,o,i;return pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Nt(e,t,n,r);case 2:(c=a.sent).data.resultCode===U.Success?(s(Rt()),s(It())):(o=0!==c.data.messages.length?c.data.messages[0]:"some error",i=Object(ge.b)("login",{_error:o}),c.data.resultCode===I.captcha&&(s(i),s(Lt())),s(i));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuth,a=e.captcha;return n?Object(r.jsx)(O.a,{to:"/profile"}):Object(r.jsxs)("div",{className:Vt.a.login,children:[Object(r.jsx)(zt,{captcha:a,onSubmit:function(e,n){n(Object(ge.a)("login"));var r=e.email,a=e.password,s=e.rememberMe,c=e.captcha;t(r,a,s,c)}}),Object(r.jsxs)("div",{className:Vt.a.descr,children:[Object(r.jsx)("p",{children:"Welcome to the mashroom"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Communication"}),Object(r.jsx)("li",{children:"News"}),Object(r.jsx)("li",{children:"Self-expression"})]})]})]})})),Xt={initialized:!1},Yt=function(){return{type:"APP/INITIALIZED_SUCCESS"}},Wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/INITIALIZED_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},Jt={friends:[{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"},{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"},{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"},{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"}]},qt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Jt;return e},Zt=n(150),Qt=n(139),$t=n(151),en=n.n($t),tn=Object(R.c)({profilePage:Te,dialogsPage:y,sidebar:qt,usersPage:it,auth:Ft,app:Wt,form:Qt.a}),nn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,rn=Object(R.e)(tn,nn(Object(R.a)(Zt.a,en.a))),an=n(152),sn=n.n(an),cn=function(){return Object(r.jsxs)("div",{className:sn.a.pageNotFound,children:[Object(r.jsx)("img",{src:"http://vkclub.su/_data/stickers/gribson/sticker_vk_gribson_019.png",alt:""}),Object(r.jsxs)("p",{children:["Oooops! ",Object(r.jsx)("br",{})," Page not found"]})]})},on=o.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),un=o.a.lazy((function(){return n.e(3).then(n.bind(null,304))})),ln=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(){alert("some error occurred")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.initializeApp)(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(Mt,{}),this.props.isAuth?Object(r.jsx)(h,{}):null,Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(ee,{}),children:Object(r.jsxs)(O.d,{children:[Object(r.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(O.a,{to:"/profile"})}}),Object(r.jsx)(O.b,{path:"/profile/:id?",render:function(){return Object(r.jsx)(Me,{})}}),Object(r.jsx)(O.b,{path:"/dialogs",render:function(){return Object(r.jsx)(K,{})}}),Object(r.jsx)(O.b,{path:"/music",component:un}),Object(r.jsx)(O.b,{path:"/news",component:on}),Object(r.jsx)(O.b,{path:"/users",component:mt}),Object(r.jsx)(O.b,{path:"/settings",component:m}),Object(r.jsx)(O.b,{path:"/login",component:Kt}),Object(r.jsx)(O.b,{path:"*",component:cn})]})})})]}):Object(r.jsx)(ee,{})}}]),n}(c.Component),jn=Object(R.d)(O.g,Object(f.b)((function(e){return{initialized:e.app.initialized,isAuth:e.auth.isAuth}}),{initializeApp:function(){return function(){var e=Object(fe.a)(pe.a.mark((function e(t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Rt()).then((function(){t(Yt())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ln),dn=function(){return Object(r.jsx)(p.a,{children:Object(r.jsx)(f.a,{store:rn,children:Object(r.jsx)(jn,{})})})};s.a.render(Object(r.jsx)(dn,{}),document.getElementById("root"))},36:function(e,t,n){e.exports={form:"loginForm_form__3Vb_K",input:"loginForm_input__ziBHz",checkbox:"loginForm_checkbox__3e9UO",remember:"loginForm_remember__jXYoO",button:"loginForm_button__1C0af"}},41:function(e,t,n){e.exports={user:"user_user__1hjSD",user_photo:"user_user_photo__15M4Y",user_name:"user_user_name__1beMh",user_status:"user_user_status__30yOH",subscribe:"user_subscribe__HXmuo"}},47:function(e,t,n){e.exports={formControl:"formControls_formControl__nwszG",error:"formControls_error__23Zih",summaryError:"formControls_summaryError__4h2HN"}},80:function(e,t,n){e.exports={dialogs:"dialogs_dialogs__14W0_",messages:"dialogs_messages__Odv3N"}},82:function(e,t,n){e.exports={description:"profileInfo_description__3o5_0",profilePhoto:"profileInfo_profilePhoto__splgS",contacts:"profileInfo_contacts__3I2Gx"}},83:function(e,t,n){e.exports={paginator:"paginator_paginator__2ARdb",pageNumber:"paginator_pageNumber__2YQgy",selectedPage:"paginator_selectedPage__2Px8m"}}},[[302,1,2]]]);
//# sourceMappingURL=main.d667e52d.chunk.js.map