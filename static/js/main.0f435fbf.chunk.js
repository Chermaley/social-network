(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{131:function(e,t,n){},133:function(e,t,n){e.exports={profile:"profile_profile__1d7zg"}},134:function(e,t,n){e.exports={item:"post_item__1y2Bx"}},135:function(e,t,n){e.exports={postBlock:"myPosts_postBlock__1gIeR"}},137:function(e,t,n){e.exports={photo:"user_photo__3bUfE"}},16:function(e,t,n){e.exports={navbar:"nav_navbar__1sgBY",items:"nav_items__1HLGi",item:"nav_item__7oIdo",active:"nav_active__1Qdkv"}},173:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r,a=n(0),s=n(63),c=n.n(s),o=n(1),i=n.n(o),u=n(29),l=n(30),j=n(33),d=n(32),p=n(16),b=n.n(p),f=n(14),h=n(11),O=Object(h.b)()((function(){return Object(a.jsx)("nav",{className:b.a.navbar,children:Object(a.jsxs)("div",{className:b.a.items,children:[Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/profile",children:"Profile"})}),Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/dialogs",children:"Messages"})}),Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/users",children:"Users"})}),Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/news",children:"News"})}),Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/music",children:"Music"})}),Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/settings",children:"Settings"})})]})})})),m=n(12),g=(n(173),function(){return Object(a.jsx)("p",{children:"Settings"})}),v=n(68),x=n.n(v),_=n(92),w=n.n(_),P=function(e){var t=e.person,n=e.id,r="/dialogs/".concat(n);return Object(a.jsx)("div",{className:w.a.dialog+" "+w.a.active,children:Object(a.jsx)(f.b,{to:r,children:t})})},S=n(131),C=n.n(S),y=function(e){var t=e.label;return Object(a.jsx)("div",{className:C.a.message,children:t})},E=n(38),k=n(3),N="DIALOGS/ADD_MESSAGE",A={messages:[{id:1,message:"hey"},{id:2,message:"lol"}],dialogs:[{person:"Andrey",id:1},{person:"Sergey",id:2}]},U=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case N:return e={id:5,message:n.message},Object(k.a)(Object(k.a)({},t),{},{messages:[].concat(Object(E.a)(t.messages),[e])});default:return t}},T=function(e){return Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){var n=t.isAuth,r=t.props;return n?Object(a.jsx)(e,Object(k.a)({},r)):Object(a.jsx)(m.a,{to:"/login"})}))},I=n(8),L=n(127),D=n(128),F=n(71),R=n(35),M=n.n(R),z=function(e){var t=e.meta,n=Object(F.a)(e,["meta"]),r=t.touched&&t.error,s=r?Object(a.jsx)("span",{children:t.error}):null;return Object(a.jsxs)("div",{className:r?M.a.formControl+" "+M.a.error:M.a.formControl,children:[Object(a.jsx)("div",{children:n.children}),s]})},G=function(e){var t=e.input,n=Object(F.a)(e,["input"]);return Object(a.jsx)(z,Object(k.a)(Object(k.a)({},e),{},{children:Object(a.jsx)("textarea",Object(k.a)(Object(k.a)({},n),t))}))},H=function(e){var t=e.input,n=e.type,r=Object(F.a)(e,["input","type"]);return Object(a.jsx)(z,Object(k.a)(Object(k.a)({},e),{},{children:Object(a.jsx)("input",Object(k.a)(Object(k.a)({type:n},t),r))}))},B=function(e){if(!e)return"Field is required"},V=Object(D.a)({form:"addMessageForm"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)(L.a,{component:G,name:"newMessageText",validate:[B]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Send"})})]})})),J=Object(I.d)(T,Object(h.b)((function(e){return{dialogsData:e.dialogsPage.dialogs,messagesData:e.dialogsPage.messages}}),{addNewMessage:function(e){return{type:N,message:e}}}))((function(e){var t=e.dialogsData,n=e.messagesData,r=e.addNewMessage,s=t.map((function(e){var t=e.id,n=e.person;return Object(a.jsx)(P,{id:t,person:n},t)})),c=n.map((function(e){var t=e.message,n=e.id;return Object(a.jsx)(y,{label:t},n)}));return Object(a.jsxs)("div",{className:x.a.dialogs,children:[Object(a.jsx)("div",{className:x.a.dialogsItems,children:s}),Object(a.jsxs)("div",{className:x.a.messages,children:[Object(a.jsx)("div",{children:c}),Object(a.jsx)(V,{onSubmit:function(e){var t=e.newMessageText;r(t)}})]})]})})),K=n(133),Y=n.n(K),q=n(39),W=n(54),X=n.n(W),Q=n(95),Z=n.n(Q),$=function(){return Object(a.jsx)("div",{className:Z.a.preloader,children:Object(a.jsx)("div",{className:Z.a.spinner})})},ee=n.p+"static/media/avatar.00971467.png",te=function(e){var t=e.status,n=e.updateStatus,r=Object(o.useState)(!1),s=Object(q.a)(r,2),c=s[0],i=s[1],u=Object(o.useState)(t),l=Object(q.a)(u,2),j=l[0],d=l[1];Object(o.useEffect)((function(){d(t)}),[t]);var p=c?Object(a.jsx)("input",{onBlur:function(){i(!1),n(j)},autoFocus:!0,type:"text",onChange:function(e){d(e.target.value)},value:j}):Object(a.jsx)("span",{onDoubleClick:function(){i(!0)},children:t||"..."});return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:p})})},ne=n(118),re=Object(D.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error,s=r?Object(a.jsx)("div",{className:M.a.summaryError,children:r}):null,c=Object.keys(n.contacts).map((function(e){return Object(a.jsxs)("div",{children:[e," ",Object(a.jsx)(L.a,{name:"contacts.".concat(e),component:H})]},e)}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(ne.a,{onSubmit:t,children:[Object(a.jsxs)("div",{children:["FullName: ",Object(a.jsx)(L.a,{name:"fullName",placeholder:"Your full name",validate:[B],component:H})]}),Object(a.jsxs)("div",{children:["About me: ",Object(a.jsx)(L.a,{name:"aboutMe",placeholder:"About me",component:H})]}),Object(a.jsxs)("div",{children:["looking for a job: ",Object(a.jsx)(L.a,{name:"lookingForAJob",component:H,type:"checkbox"})]}),Object(a.jsxs)("div",{children:["My professional skills: ",Object(a.jsx)(L.a,{name:"lookingForAJobDescription",placeholder:"Your professional skills ?",component:G})]}),c,Object(a.jsx)("div",{children:s}),Object(a.jsx)("button",{children:"Save"})]})})})),ae=function(e){var t=e.contactTitle,n=e.contactValue;return Object(a.jsxs)("div",{children:[t," : ",n]})},se=function(e){var t=e.profile,n=e.toggleEditMode,r=e.contactsList,s=e.isOwner,c=t.fullName,o=t.aboutMe,i=t.lookingForAJob,u=t.lookingForAJobDescription;return Object(a.jsxs)("div",{className:X.a.descr,children:["data",s?Object(a.jsx)("button",{onClick:n,children:"edit"}):null,Object(a.jsxs)("div",{children:["FullName: ",c]}),Object(a.jsxs)("div",{children:["About me: ",o]}),Object(a.jsx)("div",{children:i?"looking for a job":"job?"}),Object(a.jsxs)("div",{children:["Skills: ",i?u:null]}),Object(a.jsx)("div",{children:"Contacts:"}),Object(a.jsx)("div",{className:X.a.contacts,children:r})]})},ce=function(e){var t=e.profile,n=e.status,r=e.updateStatus,s=e.isOwner,c=e.savePhoto,i=e.saveProfile,u=Object(o.useState)(!1),l=Object(q.a)(u,2),j=l[0],d=l[1],p=function(){d(!j)};if(!t)return Object(a.jsx)($,{});var b=t.photos,f=t.contacts,h=Object.keys(f).map((function(e){return Object(a.jsx)(ae,{contactTitle:e,contactValue:f[e]},e)}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:X.a.description,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:X.a.profilePhoto,alt:"user photo",src:b.large||ee}),s&&Object(a.jsx)("input",{onChange:function(e){if(e.preventDefault(),1===e.target.files.length){var t=e.target.files[0];c(t)}},type:"file"}),Object(a.jsx)("b",{children:"status: "}),Object(a.jsx)(te,{status:n,updateStatus:r})]}),j?Object(a.jsx)(re,{initialValues:t,profile:t,toggleEditMode:p,onSubmit:function(e){i(e).then((function(){p()}))}}):Object(a.jsx)(se,{contactsList:h,isOwner:s,profile:t,toggleEditMode:p})]})})},oe=n(134),ie=n.n(oe),ue=function(e){var t=e.img,n=e.text,r=e.likesCount;return Object(a.jsxs)("div",{className:ie.a.item,children:[Object(a.jsx)("img",{src:t,alt:"avatar"}),n,Object(a.jsx)("div",{children:Object(a.jsxs)("span",{children:["like ",r]})})]})},le=n(135),je=n.n(le),de=n(7),pe=n.n(de),be=n(13),fe=n(136),he=n.n(fe).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"f68a4cda-2f4c-4785-816b-4190cdf2b12c"}}),Oe={getUsers:function(){var e=Object(be.a)(pe.a.mark((function e(){var t,n,r,a=arguments;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,n=a.length>1&&void 0!==a[1]?a[1]:10,e.next=4,he.get("/users?page=".concat(t,"&count=").concat(n));case 4:return r=e.sent,e.next=7,r.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),followUser:function(e){return he.post("/follow/".concat(e))},unFollowUser:function(e){return he.delete("/follow/".concat(e))}},me=function(){return he.get("/auth/me")},ge=function(e,t,n,r){return he.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r})},ve=function(){return he.delete("/auth/login")},xe=function(){return he.get("/security/get-captcha-url")},_e=function(e){return he.get("/profile/".concat(e))},we=function(e){return he.get("/profile/status/".concat(e))},Pe=function(e){return he.put("/profile/status",{status:e})},Se=function(e){var t=new FormData;return t.append("image",e),he.put("/profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})},Ce=function(e){return he.put("/profile",e)},ye=n(23),Ee="PROFILE/ADD-POST",ke="PROFILE/SET_PROFILE",Ne="PROFILE/SET_STATUS",Ae="PROFILE/DELETE_POST",Ue="PROFILE/SAVE_PHOTO_SUCCESS",Te="SAVE_PROFILE_DATA_SUCCESS",Ie={posts:[{img:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",text:"wow",likesCount:2,id:1}],profile:null,status:""},Le=function(e){return{type:Ne,status:e}},De=function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(n){var r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e(e);case 2:r=t.sent,n((a=r.data,{type:ke,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},Fe=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ee:return e={img:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",id:2,text:n.postText,likesCount:0},Object(k.a)(Object(k.a)({},t),{},{posts:[].concat(Object(E.a)(t.posts),[e])});case ke:return Object(k.a)(Object(k.a)({},t),{},{profile:n.profile});case Ne:return Object(k.a)(Object(k.a)({},t),{},{status:n.status});case Ae:return Object(k.a)(Object(k.a)({},t),{},{posts:t.posts.filter((function(e){return e.id!==n.id}))});case Ue:return Object(k.a)(Object(k.a)({},t),{},{profile:Object(k.a)(Object(k.a)({},t.profile),{},{photos:n.photos})});case Te:return Object(k.a)(Object(k.a)({},t),{},{profile:Object(k.a)(Object(k.a)({},t.profile),n.profile)});default:return t}},Re=(r=10,function(e){if(e.length>r)return"Max length is ".concat(r," symbols")});var Me=Object(D.a)({form:"postForm"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)(L.a,{placeholder:"Enter your post text",validate:[B,Re],name:"postText",component:G}),Object(a.jsx)("button",{children:"Add post"})]})})),ze=i.a.memo((function(e){var t=e.postData,n=e.addNewPost,r=t.map((function(e){var t=e.img,n=e.text,r=e.id,s=e.likesCount;return Object(a.jsx)(ue,{img:t,text:n,likesCount:s},r)}));return Object(a.jsxs)("div",{className:je.a.postBlock,children:[Object(a.jsx)("h3",{children:"My post"}),Object(a.jsx)("div",{children:"New post"}),Object(a.jsx)(Me,{onSubmit:function(e){var t=e.postText;n(t)}}),Object(a.jsx)("div",{children:r})]})})),Ge=Object(h.b)((function(e){return{postData:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addNewPost:function(e){return{type:Ee,postText:e}}})(ze),He=function(e){var t=e.profile,n=e.status,r=e.updateStatus,s=e.isOwner,c=e.savePhoto,o=e.saveProfile;return Object(a.jsxs)("div",{className:Y.a.profile,children:[Object(a.jsx)(ce,{saveProfile:o,savePhoto:c,isOwner:s,status:n,profile:t,updateStatus:r}),Object(a.jsx)(Ge,{})]})},Be=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).savePhoto=function(t){(0,e.props.savePhoto)(t)},e.refreshProfileData=function(){var t=e.props,n=t.getProfile,r=t.match,a=t.getStatus,s=t.authUserId,c=r.params.id;c||(c=s)||e.props.history.push("/login"),n(c),a(c)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.refreshProfileData()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.refreshProfileData()}},{key:"render",value:function(){var e=this,t=this.props,n=t.profile,r=t.status,s=t.updateStatus,c=t.saveProfileData;return Object(a.jsx)(He,Object(k.a)(Object(k.a)({},this.props),{},{isOwner:!this.props.match.params.id,profile:n,status:r,savePhoto:function(t){return e.savePhoto(t)},updateStatus:s,saveProfile:c}))}}]),n}(o.Component),Ve=Object(I.d)(T,m.g,Object(h.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.userId}}),{getProfile:De,getStatus:function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(n){var r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,we(e);case 2:r=t.sent,n(Le(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(n){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Pe(e);case 2:0===t.sent.data.resultCode&&n(Le(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(n){var r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Se(e);case 2:r=t.sent,console.log(r),0===r.data.resultCode&&n((a=r.data.data.photos,{type:Ue,photos:a}));case 5:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfileData:function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(n,r){var a,s,c;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ce(e);case 2:if(0!==(a=t.sent).data.resultCode){t.next=7;break}n(De(r().auth.userId)),t.next=11;break;case 7:return s=0!==a.data.messages?a.data.messages[0]:"some error",c=Object(ye.b)("edit-profile",{_error:s}),n(c),t.abrupt("return",Promise.reject(a.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}))(Be),Je="USERS/CHANGE_TERM",Ke="USERS/TOGGLE_FOLLOW",Ye="USERS/TOGGLE_LOADING",qe="USERS/SET_USERS",We="USERS/SET_TOTAL_USERS_COUNT",Xe="USERS/SET_CURRENT_PAGE",Qe="USERS/TOGGLE_FOLLOWING_PROGRESS",Ze={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isLoading:!1,followingInProgress:[],term:""},$e=function(e){return{type:Ke,id:e}},et=function(){return{type:Ye}},tt=function(e,t){return{type:Qe,id:e,isFetching:t}},nt=function(){var e=Object(be.a)(pe.a.mark((function e(t,n,r,a){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(tt(n,!0)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&(t(r(n)),t(tt(n,!1)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case qe:return Object(k.a)(Object(k.a)({},e),{},{users:Object(E.a)(t.users)});case Ke:return Object(k.a)(Object(k.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(k.a)(Object(k.a)({},e),{},{followed:!e.followed}):e}))});case We:return Object(k.a)(Object(k.a)({},e),{},{totalUsersCount:t.usersCount});case Xe:return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.pageNumber});case Ye:return Object(k.a)(Object(k.a)({},e),{},{isLoading:!e.isLoading});case Qe:return Object(k.a)(Object(k.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(E.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!==t.id}))});case Je:return Object(k.a)(Object(k.a)({},e),{},{term:t.term});default:return e}},at=n(137),st=n.n(at),ct=function(e){var t=e.fullName,n=e.onFollowClick,r=e.followStatus,s=e.location,c=e.photoUrl,o=e.status,i=e.id,u=e.followingInProgress,l=r?"unfollow":"follow";return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(f.b,{to:"/profile/".concat(i),children:Object(a.jsx)("img",{src:c,alt:"user photo",className:st.a.photo})})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{disabled:u.some((function(e){return e===i})),onClick:n,children:l})})]}),Object(a.jsxs)("span",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:t}),Object(a.jsx)("div",{children:o})]}),Object(a.jsx)("span",{children:Object(a.jsx)("div",{children:s})})]})]})},ot=n(66),it=n(70),ut=n.n(it),lt=n(138),jt=n.n(lt),dt=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,u=Math.ceil(t/n),l=[],j=1;j<=u;j++)l.push(j);var d=Math.ceil(u/i),p=Object(o.useState)(1),b=Object(q.a)(p,2),f=b[0],h=b[1],O=(f-1)*i+1,m=f*i;return Object(a.jsxs)("div",{className:ut.a.paginator,children:[f>1&&Object(a.jsx)("button",{onClick:function(){h(f-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(a.jsx)("span",{className:jt()(Object(ot.a)({},ut.a.selectedPage,r===e),ut.a.pageNumber),onClick:function(){s(e)},children:e},e)})),d>f&&Object(a.jsx)("button",{onClick:function(){h(f+1)},children:"NEXT"})]})},pt=function(e){var t=e.usersData,n=e.term,r=e.totalUsersCount,s=e.pageSize,c=e.currentPage,o=e.onChangeTerm,i=e.onPageChanged,u=e.followingInProgress,l=e.followUser,j=e.unFollowUser,d=e.isLoading,p=t.map((function(e){var t=e.id,n=e.name,r=e.status,s=e.followed,c=e.photos;return Object(a.jsx)(ct,{onFollowClick:function(){return s?j(t):l(t)},photoUrl:c.small?c.small:ee,followStatus:s,fullName:n,location:"Russia",status:r,id:t,followingInProgress:u},t)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)(dt,{totalItemsCount:r,pageSize:s,currentPage:c,onPageChanged:i}),Object(a.jsx)("textarea",{onChange:o,value:n}),d?Object(a.jsx)($,{}):p]})},bt=function(e){return e.usersPage.users},ft=function(e){return e.usersPage.pageSize},ht=function(e){return e.usersPage.totalUsersCount},Ot=function(e){return e.usersPage.currentPage},mt=function(e){return e.usersPage.isLoading},gt=function(e){return e.usersPage.followingInProgress},vt=function(e){return e.usersPage.term},xt=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onChangeTerm=function(t){var n=t.target.value;e.props.changeTerm(n)},e.onPageChanged=function(t){var n=e.props,r=n.pageSize,a=n.requestUsers;(0,n.setCurrentPage)(t),a(t,r)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;(0,e.requestUsers)(t,n)}},{key:"render",value:function(){var e=this.props,t=e.usersData,n=e.followUser,r=e.unFollowUser,s=e.term,c=e.totalUsersCount,o=e.pageSize,i=e.currentPage,u=e.isLoading,l=e.followingInProgress;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(pt,{isLoading:u,usersData:t,term:s,totalUsersCount:c,pageSize:o,currentPage:i,onChangeTerm:this.onChangeTerm,onPageChanged:this.onPageChanged,followingInProgress:l,followUser:n,unFollowUser:r})})}}]),n}(o.Component),_t=Object(I.d)(Object(h.b)((function(e){return{usersData:bt(e),term:vt(e),totalUsersCount:ht(e),pageSize:ft(e),currentPage:Ot(e),isLoading:mt(e),followingInProgress:gt(e)}}),{requestUsers:function(e,t){return function(){var n=Object(be.a)(pe.a.mark((function n(r){var a;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(et()),n.next=3,Oe.getUsers(e,t);case 3:a=n.sent,r(et()),r((c=a.totalCount,{type:We,usersCount:c})),r((s=a.items,{type:qe,users:s}));case 7:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()},followUser:function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(n){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:nt(n,e,$e,Oe.followUser);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollowUser:function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(n){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:nt(n,e,$e,Oe.unFollowUser);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeTerm:function(e){return{type:Je,term:e}},setCurrentPage:function(e){return{type:Xe,pageNumber:e}}}))(xt),wt=n(96),Pt=n.n(wt),St=function(e){var t=e.isAuth,n=e.login,r=e.logout;return Object(a.jsxs)("header",{className:Pt.a.header,children:[Object(a.jsx)("img",{alt:"logo",src:"https://i.exclipart.com/images/mushroom-clipart-realistic-2.png"}),Object(a.jsx)("div",{className:Pt.a.loginBlock,children:t?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:n})," ",Object(a.jsx)("span",{onClick:r,children:"Logout"})]}):Object(a.jsx)(f.b,{to:"/login",children:"Login"})})]})},Ct="AUTH/SET_USER_DATA",yt="AUTH/DELETE_USER_DATA",Et="AUTH/SET_CAPTCHA_URL",kt="AUTH/CAPTCHA_SUCCESS",Nt={isLoading:!1,userId:null,email:null,login:null,isAuth:!1,captcha:null},At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ct:return Object(k.a)(Object(k.a)(Object(k.a)({},e),t.data),{},{isAuth:!0});case yt:return Object(k.a)(Object(k.a)({},e),{},{userId:null,email:null,login:null,isAuth:!1});case Et:return Object(k.a)(Object(k.a)({},e),{},{captcha:t.url});case kt:return Object(k.a)(Object(k.a)({},e),{},{captcha:null});default:return e}},Ut=function(e,t,n){return{type:Ct,data:{userId:e,email:t,login:n}}},Tt=function(){return function(){var e=Object(be.a)(pe.a.mark((function e(t){var n,r,a,s,c;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(Ut(a,c,s)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},It=function(){return function(){var e=Object(be.a)(pe.a.mark((function e(t){var n;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe();case 2:(n=e.sent).data.url&&t((r=n.data.url,{type:Et,url:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},Lt=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isAuth,n=e.login,r=e.logout;return Object(a.jsx)(St,Object(k.a)(Object(k.a)({},this.props),{},{logout:r,isAuth:t,login:n}))}}]),n}(o.Component),Dt=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(be.a)(pe.a.mark((function e(t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve();case 2:0===e.sent.data.resultCode&&t({type:yt});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Lt),Ft=Object(D.a)({form:"login"})((function(e){var t=e.error,n=e.captcha,r=t?Object(a.jsx)("div",{className:M.a.summaryError,children:t}):null;return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)(L.a,{validate:[B],type:"text",name:"email",placeholder:"login",component:H})}),Object(a.jsx)("div",{children:Object(a.jsx)(L.a,{validate:[B],type:"password",name:"password",placeholder:"password",component:H})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(L.a,{type:"checkbox",name:"rememberMe",component:H}),"remember me"]}),r,n?Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:n,alt:"captcha"}),Object(a.jsx)(L.a,{placeholder:"captcha text",validate:[B],type:"text",name:"captcha",component:H})]}):null,Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Submit"})})]})})),Rt=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,captcha:e.auth.captcha}}),{login:function(e,t,n,r){return function(){var a=Object(be.a)(pe.a.mark((function a(s){var c,o,i;return pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ge(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?(s(Tt()),s({type:kt})):(o=0!==c.data.messages?c.data.messages[0]:"some error",i=Object(ye.b)("login",{_error:o}),10===c.data.resultCode&&(s(i),s(It())),s(i));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuth,r=e.captcha;return n?Object(a.jsx)(m.a,{to:"/profile"}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsx)(Ft,{captcha:r,onSubmit:function(e,n){n(Object(ye.a)("login"));var r=e.email,a=e.password,s=e.rememberMe,c=e.captcha;t(r,a,s,void 0===c?null:c)}})]})})),Mt="APP/INITIALIZED_SUCCESS",zt={initialized:!1},Gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Mt:return Object(k.a)(Object(k.a)({},e),{},{initialized:!0});default:return e}},Ht={friends:[{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"},{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"},{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"},{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"}]},Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht;return e},Vt=n(139),Jt=n(129),Kt=Object(I.c)({profilePage:Fe,dialogsPage:U,sidebar:Bt,usersPage:rt,auth:At,app:Gt,form:Jt.a}),Yt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,qt=Object(I.e)(Kt,Yt(Object(I.a)(Vt.a))),Wt=i.a.lazy((function(){return n.e(4).then(n.bind(null,290))})),Xt=i.a.lazy((function(){return n.e(3).then(n.bind(null,291))})),Qt=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("some error occurred"),console.error(e)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.initializeApp)(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(Dt,{}),Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"app-wrapper-content",children:Object(a.jsx)(o.Suspense,{fallback:Object(a.jsx)($,{}),children:Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(m.a,{to:"/profile"})}}),Object(a.jsx)(m.b,{path:"/profile/:id?",render:function(){return Object(a.jsx)(Ve,{})}}),Object(a.jsx)(m.b,{path:"/dialogs",render:function(){return Object(a.jsx)(J,{})}}),Object(a.jsx)(m.b,{path:"/music",component:Xt}),Object(a.jsx)(m.b,{path:"/news",component:Wt}),Object(a.jsx)(m.b,{path:"/users",render:function(){return Object(a.jsx)(_t,{})}}),Object(a.jsx)(m.b,{path:"/settings",component:g}),Object(a.jsx)(m.b,{path:"/login",component:Rt}),Object(a.jsx)(m.b,{path:"*",render:function(){return Object(a.jsx)("div",{children:"404 PAGE NOT FOUND :("})}})]})})})]}):Object(a.jsx)($,{})}}]),n}(o.Component),Zt=Object(I.d)(m.g,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(be.a)(pe.a.mark((function e(t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Tt()).then((function(){t({type:Mt})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Qt),$t=function(){return Object(a.jsx)(f.a,{children:Object(a.jsx)(h.a,{store:qt,children:Object(a.jsx)(Zt,{})})})};c.a.render(Object(a.jsx)($t,{}),document.getElementById("root"))},35:function(e,t,n){e.exports={formControl:"formControls_formControl__nwszG",error:"formControls_error__23Zih",summaryError:"formControls_summaryError__4h2HN"}},54:function(e,t,n){e.exports={description:"profileInfo_description__3o5_0",profilePhoto:"profileInfo_profilePhoto__splgS",contacts:"profileInfo_contacts__3I2Gx"}},68:function(e,t,n){e.exports={dialogs:"dialogs_dialogs__14W0_",messages:"dialogs_messages__Odv3N"}},70:function(e,t,n){e.exports={paginator:"paginator_paginator__2ARdb",pageNumber:"paginator_pageNumber__2YQgy",selectedPage:"paginator_selectedPage__2Px8m"}},92:function(e,t,n){e.exports={dialog:"dialog_dialog__SgFmC",active:"dialog_active__2_S4l"}},95:function(e,t,n){e.exports={preloader:"spinner_preloader__1jMg2",spinner:"spinner_spinner__1Hetg",spin:"spinner_spin__A_APw"}},96:function(e,t,n){e.exports={header:"header_header__18sGI",loginBlock:"header_loginBlock__2ztlx"}}},[[289,1,2]]]);
//# sourceMappingURL=main.0f435fbf.chunk.js.map