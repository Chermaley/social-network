(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{130:function(e,t,n){},132:function(e,t,n){e.exports={profile:"profile_profile__1d7zg"}},133:function(e,t,n){e.exports={item:"post_item__1y2Bx"}},134:function(e,t,n){e.exports={postBlock:"myPosts_postBlock__1gIeR"}},136:function(e,t,n){e.exports={photo:"user_photo__3bUfE"}},16:function(e,t,n){e.exports={navbar:"nav_navbar__1sgBY",items:"nav_items__1HLGi",item:"nav_item__7oIdo",active:"nav_active__1Qdkv"}},173:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r,a=n(0),s=n(62),o=n.n(s),i=n(1),c=n.n(i),u=n(27),l=n(28),j=n(31),d=n(30),p=n(16),b=n.n(p),f=n(13),h=n(11),O=Object(h.b)()((function(){return Object(a.jsx)("nav",{className:b.a.navbar,children:Object(a.jsxs)("div",{className:b.a.items,children:[Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/profile",children:"Profile"})}),Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/dialogs",children:"Messages"})}),Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/users",children:"Users"})}),Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/news",children:"News"})}),Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/music",children:"Music"})}),Object(a.jsx)("div",{className:b.a.item,children:Object(a.jsx)(f.b,{activeClassName:b.a.active,to:"/settings",children:"Settings"})})]})})})),g=n(12),m=(n(173),function(){return Object(a.jsx)("p",{children:"Settings"})}),x=n(67),v=n.n(x),_=n(92),w=n.n(_),P=function(e){var t=e.person,n=e.id,r="/dialogs/".concat(n);return Object(a.jsx)("div",{className:w.a.dialog+" "+w.a.active,children:Object(a.jsx)(f.b,{to:r,children:t})})},S=n(130),C=n.n(S),y=function(e){var t=e.label;return Object(a.jsx)("div",{className:C.a.message,children:t})},N=n(36),E=n(3),k="DIALOGS/ADD_MESSAGE",U={messages:[{id:1,message:"hey"},{id:2,message:"lol"}],dialogs:[{person:"Andrey",id:1},{person:"Sergey",id:2}]},A=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k:return e={id:5,message:n.message},Object(E.a)(Object(E.a)({},t),{},{messages:[].concat(Object(N.a)(t.messages),[e])});default:return t}},I=function(e){return Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){var n=t.isAuth,r=t.props;return n?Object(a.jsx)(e,Object(E.a)({},r)):Object(a.jsx)(g.a,{to:"/login"})}))},T=n(9),D=n(126),L=n(127),R=n(71),F=n(43),M=n.n(F),z=function(e){var t=e.meta,n=Object(R.a)(e,["meta"]),r=t.touched&&t.error,s=r?Object(a.jsx)("span",{children:t.error}):null;return Object(a.jsxs)("div",{className:r?M.a.formControl+" "+M.a.error:M.a.formControl,children:[Object(a.jsx)("div",{children:n.children}),s]})},G=function(e){var t=e.input,n=Object(R.a)(e,["input"]);return Object(a.jsx)(z,Object(E.a)(Object(E.a)({},e),{},{children:Object(a.jsx)("textarea",Object(E.a)(Object(E.a)({},n),t))}))},B=function(e){var t=e.input,n=Object(R.a)(e,["input"]);return Object(a.jsx)(z,Object(E.a)(Object(E.a)({},e),{},{children:Object(a.jsx)("input",Object(E.a)(Object(E.a)({},t),n))}))},H=function(e){if(!e)return"Field is required"},K=Object(L.a)({form:"addMessageForm"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)(D.a,{component:G,name:"newMessageText",validate:[H]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Send"})})]})})),q=Object(T.d)(I,Object(h.b)((function(e){return{dialogsData:e.dialogsPage.dialogs,messagesData:e.dialogsPage.messages}}),{addNewMessage:function(e){return{type:k,message:e}}}))((function(e){var t=e.dialogsData,n=e.messagesData,r=e.addNewMessage,s=t.map((function(e){var t=e.id,n=e.person;return Object(a.jsx)(P,{id:t,person:n},t)})),o=n.map((function(e){var t=e.message,n=e.id;return Object(a.jsx)(y,{label:t},n)}));return Object(a.jsxs)("div",{className:v.a.dialogs,children:[Object(a.jsx)("div",{className:v.a.dialogsItems,children:s}),Object(a.jsxs)("div",{className:v.a.messages,children:[Object(a.jsx)("div",{children:o}),Object(a.jsx)(K,{onSubmit:function(e){var t=e.newMessageText;r(t)}})]})]})})),J=n(132),V=n.n(J),W=n(69),X=n.n(W),Y=n(95),Q=n.n(Y),Z=function(){return Object(a.jsx)("div",{className:Q.a.preloader,children:Object(a.jsx)("div",{className:Q.a.spinner})})},$=n.p+"static/media/avatar.00971467.png",ee=n(53),te=function(e){var t=e.status,n=e.updateStatus,r=Object(i.useState)(!1),s=Object(ee.a)(r,2),o=s[0],c=s[1],u=Object(i.useState)(t),l=Object(ee.a)(u,2),j=l[0],d=l[1];Object(i.useEffect)((function(){d(t)}),[t]);var p=o?Object(a.jsx)("input",{onBlur:function(){c(!1),n(j)},autoFocus:!0,type:"text",onChange:function(e){d(e.target.value)},value:j}):Object(a.jsx)("span",{onDoubleClick:function(){c(!0)},children:t||"..."});return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:p})})},ne=function(e){var t=e.profile,n=e.status,r=e.updateStatus,s=e.isOwner,o=e.savePhoto;if(console.log(t),!t)return Object(a.jsx)(Z,{});var i=t.photos,c=t.aboutMe,u=t.lookingForAJob,l=t.lookingForAJobDescription,j=t.fullName,d=t.contacts;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:X.a.description,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:X.a.profilePhoto,alt:"user photo",src:i.large||$}),s&&Object(a.jsx)("input",{onChange:function(e){if(e.preventDefault(),1===e.target.files.length){var t=e.target.files[0];o(t)}},type:"file"}),Object(a.jsx)(te,{status:n,updateStatus:r})]}),Object(a.jsxs)("div",{className:X.a.descr,children:[Object(a.jsxs)("div",{children:["FullName: ",j]}),Object(a.jsxs)("div",{children:["About me:  ",c]}),Object(a.jsx)("div",{children:u?l:null}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:["facebook: ",d.facebook]}),Object(a.jsxs)("li",{children:["insta: ",d.instagram]}),Object(a.jsxs)("li",{children:["twitter: ",d.twitter]}),Object(a.jsxs)("li",{children:["youtube: ",d.youtube]}),Object(a.jsxs)("li",{children:["github: ",d.github]}),Object(a.jsxs)("li",{children:["website: ",d.website]}),Object(a.jsxs)("li",{children:["mainlink: ",d.mainlink]})]})]})]})})},re=n(133),ae=n.n(re),se=function(e){var t=e.img,n=e.text,r=e.likesCount;return Object(a.jsxs)("div",{className:ae.a.item,children:[Object(a.jsx)("img",{src:t,alt:"avatar"}),n,Object(a.jsx)("div",{children:Object(a.jsxs)("span",{children:["like ",r]})})]})},oe=n(134),ie=n.n(oe),ce=n(10),ue=n.n(ce),le=n(15),je=n(135),de=n.n(je).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"f68a4cda-2f4c-4785-816b-4190cdf2b12c"}}),pe={getUsers:function(){var e=Object(le.a)(ue.a.mark((function e(){var t,n,r,a=arguments;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,n=a.length>1&&void 0!==a[1]?a[1]:10,e.next=4,de.get("/users?page=".concat(t,"&count=").concat(n));case 4:return r=e.sent,e.next=7,r.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),followUser:function(e){return de.post("/follow/".concat(e))},unFollowUser:function(e){return de.delete("/follow/".concat(e))}},be=function(){return de.get("/auth/me")},fe=function(e,t,n){return de.post("/auth/login",{email:e,password:t,rememberMe:n})},he=function(){return de.delete("/auth/login")},Oe=function(e){return de.get("/profile/".concat(e))},ge=function(e){return de.get("/profile/status/".concat(e))},me=function(e){return de.put("/profile/status",{status:e})},xe=function(e){var t=new FormData;return t.append("image",e),de.put("/profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})},ve="PROFILE/ADD-POST",_e="PROFILE/SET_PROFILE",we="PROFILE/SET_STATUS",Pe="PROFILE/DELETE_POST",Se="PROFILE/SAVE_PHOTO_SUCCESS",Ce={posts:[{img:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",text:"wow",likesCount:2,id:1}],profile:null,status:""},ye=function(e){return{type:we,status:e}},Ne=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ve:return e={id:2,text:n.postText,likesCount:0},Object(E.a)(Object(E.a)({},t),{},{posts:[].concat(Object(N.a)(t.posts),[e])});case _e:return Object(E.a)(Object(E.a)({},t),{},{profile:n.profile});case we:return Object(E.a)(Object(E.a)({},t),{},{status:n.status});case Pe:return Object(E.a)(Object(E.a)({},t),{},{posts:t.posts.filter((function(e){return e.id!==n.id}))});case Se:return Object(E.a)(Object(E.a)({},t),{},{profile:Object(E.a)(Object(E.a)({},t.profile),{},{photos:n.photos})});default:return t}},Ee=(r=10,function(e){if(e.length>r)return"Max length is ".concat(r," symbols")});var ke=Object(L.a)({form:"postForm"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)(D.a,{placeholder:"Enter your post text",validate:[H,Ee],name:"postText",component:G}),Object(a.jsx)("button",{children:"Add post"})]})})),Ue=c.a.memo((function(e){var t=e.postData,n=e.addNewPost,r=t.map((function(e){var t=e.img,n=e.text,r=e.id,s=e.likesCount;return Object(a.jsx)(se,{img:t,text:n,likesCount:s},r)}));return Object(a.jsxs)("div",{className:ie.a.postBlock,children:[Object(a.jsx)("h3",{children:"My post"}),Object(a.jsx)("div",{children:"New post"}),Object(a.jsx)(ke,{onSubmit:function(e){var t=e.postText;n(t)}}),Object(a.jsx)("div",{children:r})]})})),Ae=Object(h.b)((function(e){return{postData:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addNewPost:function(e){return{type:ve,postText:e}}})(Ue),Ie=function(e){var t=e.profile,n=e.status,r=e.updateStatus,s=e.isOwner,o=e.savePhoto;return Object(a.jsxs)("div",{className:V.a.profile,children:[Object(a.jsx)(ne,{savePhoto:o,isOwner:s,status:n,profile:t,updateStatus:r}),Object(a.jsx)(Ae,{})]})},Te=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).savePhoto=function(t){(0,e.props.savePhoto)(t)},e.refreshProfileData=function(){var t=e.props,n=t.getProfile,r=t.match,a=t.getStatus,s=t.authUserId,o=r.params.id;o||(o=s)||e.props.history.push("/login"),n(o),a(o)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.refreshProfileData()}},{key:"componentDidUpdate",value:function(e){!e.match.params.id===this.props.match.params.id&&this.refreshProfileData()}},{key:"render",value:function(){var e=this,t=this.props,n=t.profile,r=t.status,s=t.updateStatus;return Object(a.jsx)(Ie,Object(E.a)(Object(E.a)({},this.props),{},{isOwner:!this.props.match.params.id,profile:n,status:r,savePhoto:function(t){return e.savePhoto(t)},updateStatus:s}))}}]),n}(i.Component),De=Object(T.d)(I,g.f,Object(h.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.userId}}),{getProfile:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){var r;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Oe(e);case 2:r=t.sent,n((a=r.data,{type:_e,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){var r;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge(e);case 2:r=t.sent,n(ye(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me(e);case 2:0===t.sent.data.resultCode&&n(ye(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){var r;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xe(e);case 2:r=t.sent,console.log(r),0===r.data.resultCode&&n((a=r.data.data.photos,{type:Se,photos:a}));case 5:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Te),Le="USERS/CHANGE_TERM",Re="USERS/TOGGLE_FOLLOW",Fe="USERS/TOGGLE_LOADING",Me="USERS/SET_USERS",ze="USERS/SET_TOTAL_USERS_COUNT",Ge="USERS/SET_CURRENT_PAGE",Be="USERS/TOGGLE_FOLLOWING_PROGRESS",He={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isLoading:!1,followingInProgress:[],term:""},Ke=function(e){return{type:Re,id:e}},qe=function(){return{type:Fe}},Je=function(e,t){return{type:Be,id:e,isFetching:t}},Ve=function(){var e=Object(le.a)(ue.a.mark((function e(t,n,r,a){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Je(n,!0)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&(t(r(n)),t(Je(n,!1)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:return Object(E.a)(Object(E.a)({},e),{},{users:Object(N.a)(t.users)});case Re:return Object(E.a)(Object(E.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(E.a)(Object(E.a)({},e),{},{followed:!e.followed}):e}))});case ze:return Object(E.a)(Object(E.a)({},e),{},{totalUsersCount:t.usersCount});case Ge:return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.pageNumber});case Fe:return Object(E.a)(Object(E.a)({},e),{},{isLoading:!e.isLoading});case Be:return Object(E.a)(Object(E.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(N.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!==t.id}))});case Le:return Object(E.a)(Object(E.a)({},e),{},{term:t.term});default:return e}},Xe=n(136),Ye=n.n(Xe),Qe=function(e){var t=e.fullName,n=e.onFollowClick,r=e.followStatus,s=e.location,o=e.photoUrl,i=e.status,c=e.id,u=e.followingInProgress,l=r?"unfollow":"follow";return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(f.b,{to:"/profile/".concat(c),children:Object(a.jsx)("img",{src:o,alt:"user photo",className:Ye.a.photo})})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{disabled:u.some((function(e){return e===c})),onClick:n,children:l})})]}),Object(a.jsxs)("span",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:t}),Object(a.jsx)("div",{children:i})]}),Object(a.jsx)("span",{children:Object(a.jsx)("div",{children:s})})]})]})},Ze=n(65),$e=n(70),et=n.n($e),tt=n(137),nt=n.n(tt),rt=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,o=e.portionSize,c=void 0===o?10:o,u=Math.ceil(t/n),l=[],j=1;j<=u;j++)l.push(j);var d=Math.ceil(u/c),p=Object(i.useState)(1),b=Object(ee.a)(p,2),f=b[0],h=b[1],O=(f-1)*c+1,g=f*c;return Object(a.jsxs)("div",{className:et.a.paginator,children:[f>1&&Object(a.jsx)("button",{onClick:function(){h(f-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(a.jsx)("span",{className:nt()(Object(Ze.a)({},et.a.selectedPage,r===e),et.a.pageNumber),onClick:function(){s(e)},children:e},e)})),d>f&&Object(a.jsx)("button",{onClick:function(){h(f+1)},children:"NEXT"})]})},at=function(e){var t=e.usersData,n=e.term,r=e.totalUsersCount,s=e.pageSize,o=e.currentPage,i=e.onChangeTerm,c=e.onPageChanged,u=e.followingInProgress,l=e.followUser,j=e.unFollowUser,d=e.isLoading,p=t.map((function(e){var t=e.id,n=e.name,r=e.status,s=e.followed,o=e.photos;return Object(a.jsx)(Qe,{onFollowClick:function(){return s?j(t):l(t)},photoUrl:o.small?o.small:$,followStatus:s,fullName:n,location:"Russia",status:r,id:t,followingInProgress:u},t)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)(rt,{totalItemsCount:r,pageSize:s,currentPage:o,onPageChanged:c}),Object(a.jsx)("textarea",{onChange:i,value:n}),d?Object(a.jsx)(Z,{}):p]})},st=function(e){return e.usersPage.users},ot=function(e){return e.usersPage.pageSize},it=function(e){return e.usersPage.totalUsersCount},ct=function(e){return e.usersPage.currentPage},ut=function(e){return e.usersPage.isLoading},lt=function(e){return e.usersPage.followingInProgress},jt=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onChangeTerm=function(t){var n=t.target.value;e.props.changeTerm(n)},e.onPageChanged=function(t){var n=e.props,r=n.pageSize,a=n.requestUsers;(0,n.setCurrentPage)(t),a(t,r)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;(0,e.requestUsers)(t,n)}},{key:"render",value:function(){var e=this.props,t=e.usersData,n=e.followUser,r=e.unFollowUser,s=e.term,o=e.totalUsersCount,i=e.pageSize,c=e.currentPage,u=e.isLoading,l=e.followingInProgress;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(at,{isLoading:u,usersData:t,term:s,totalUsersCount:o,pageSize:i,currentPage:c,onChangeTerm:this.onChangeTerm,onPageChanged:this.onPageChanged,followingInProgress:l,followUser:n,unFollowUser:r})})}}]),n}(i.Component),dt=Object(h.b)((function(e){return{usersData:st(e),term:e.usersPage.term,totalUsersCount:it(e),pageSize:ot(e),currentPage:ct(e),isLoading:ut(e),followingInProgress:lt(e)}}),{changeTerm:function(e){return{type:Le,term:e}},follow:Ke,setCurrentPage:function(e){return{type:Ge,pageNumber:e}},toggleFollowingProgress:Je,requestUsers:function(e,t){return function(){var n=Object(le.a)(ue.a.mark((function n(r){var a;return ue.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(qe()),n.next=3,pe.getUsers(e,t);case 3:a=n.sent,r(qe()),r((o=a.totalCount,{type:ze,usersCount:o})),r((s=a.items,{type:Me,users:s}));case 7:case"end":return n.stop()}var s,o}),n)})));return function(e){return n.apply(this,arguments)}}()},followUser:function(e){return function(t){Ve(t,e,Ke,pe.followUser)}},unFollowUser:function(e){return function(){var t=Object(le.a)(ue.a.mark((function t(n){return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ve(n,e,Ke,pe.unFollowUser);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(jt),pt=n(96),bt=n.n(pt),ft=function(e){var t=e.isAuth,n=e.login,r=e.logout;return Object(a.jsxs)("header",{className:bt.a.header,children:[Object(a.jsx)("img",{alt:"logo",src:"https://i.exclipart.com/images/mushroom-clipart-realistic-2.png"}),Object(a.jsx)("div",{className:bt.a.loginBlock,children:t?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:n})," ",Object(a.jsx)("span",{onClick:r,children:"Logout"})]}):Object(a.jsx)(f.b,{to:"/login",children:"Login"})})]})},ht=n(38),Ot="AUTH/SET_USER_DATA",gt="AUTH/DELETE_USER_DATA",mt={isLoading:!1,userId:null,email:null,login:null,isAuth:!1},xt=function(e,t,n){return{type:Ot,data:{userId:e,email:t,login:n}}},vt=function(){return function(){var e=Object(le.a)(ue.a.mark((function e(t){var n,r,a,s,o;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,o=r.email,t(xt(a,o,s)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ot:return Object(E.a)(Object(E.a)(Object(E.a)({},e),t.data),{},{isAuth:!0});case gt:return Object(E.a)(Object(E.a)({},e),{},{userId:null,email:null,login:null,isAuth:!1});default:return e}},wt=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isAuth,n=e.login,r=e.logout;return Object(a.jsx)(ft,Object(E.a)(Object(E.a)({},this.props),{},{logout:r,isAuth:t,login:n}))}}]),n}(i.Component),Pt=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(le.a)(ue.a.mark((function e(t){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he();case 2:0===e.sent.data.resultCode&&t({type:gt});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(wt),St=Object(L.a)({form:"login"})((function(e){var t=e.error,n=t?Object(a.jsx)("div",{className:M.a.summaryError,children:t}):null;return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)(D.a,{validate:[H],type:"text",name:"email",placeholder:"login",component:B})}),Object(a.jsx)("div",{children:Object(a.jsx)(D.a,{validate:[H],type:"password",name:"password",placeholder:"password",component:B})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(D.a,{type:"checkbox",name:"rememberMe",component:B}),"remember me"]}),n,Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Submit"})})]})})),Ct=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(le.a)(ue.a.mark((function r(a){var s,o,i;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fe(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(vt()):(o=0!==s.data.messages?s.data.messages[0]:"some error",i=Object(ht.a)("login",{_error:o}),a(i));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.login;return e.isAuth?Object(a.jsx)(g.a,{to:"/profile"}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsx)(St,{onSubmit:function(e){var n=e.email,r=e.password,a=e.rememberMe;t(n,r,a)}})]})})),yt="APP/INITIALIZED_SUCCESS",Nt={initialized:!1},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case yt:return Object(E.a)(Object(E.a)({},e),{},{initialized:!0});default:return e}},kt={friends:[{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"},{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"},{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"},{id:4,name:"Anton",photo:"https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg"}]},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt;return e},At=n(138),It=n(128),Tt=Object(T.c)({profilePage:Ne,dialogsPage:A,sidebar:Ut,usersPage:We,auth:_t,app:Et,form:It.a}),Dt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,Lt=Object(T.e)(Tt,Dt(Object(T.a)(At.a))),Rt=c.a.lazy((function(){return n.e(4).then(n.bind(null,290))})),Ft=c.a.lazy((function(){return n.e(3).then(n.bind(null,291))})),Mt=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.initializeApp)()}},{key:"render",value:function(){return this.props.initialized?Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(Pt,{}),Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"app-wrapper-content",children:Object(a.jsxs)(i.Suspense,{fallback:Object(a.jsx)(Z,{}),children:[Object(a.jsx)(g.b,{path:"/profile/:id?",render:function(){return Object(a.jsx)(De,{})}}),Object(a.jsx)(g.b,{path:"/dialogs",render:function(){return Object(a.jsx)(q,{})}}),Object(a.jsx)(g.b,{path:"/music",component:Ft}),Object(a.jsx)(g.b,{path:"/news",component:Rt}),Object(a.jsx)(g.b,{path:"/users",render:function(){return Object(a.jsx)(dt,{})}}),Object(a.jsx)(g.b,{path:"/settings",component:m}),Object(a.jsx)(g.b,{path:"/login",component:Ct})]})})]}):Object(a.jsx)(Z,{})}}]),n}(i.Component),zt=Object(T.d)(g.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(vt()).then((function(){e({type:yt})}))}}}))(Mt),Gt=function(){return Object(a.jsx)(f.a,{children:Object(a.jsx)(h.a,{store:Lt,children:Object(a.jsx)(zt,{})})})};o.a.render(Object(a.jsx)(Gt,{}),document.getElementById("root"))},43:function(e,t,n){e.exports={formControl:"formControls_formControl__nwszG",error:"formControls_error__23Zih",summaryError:"formControls_summaryError__4h2HN"}},67:function(e,t,n){e.exports={dialogs:"dialogs_dialogs__14W0_",messages:"dialogs_messages__Odv3N"}},69:function(e,t,n){e.exports={description:"profileInfo_description__3o5_0",profilePhoto:"profileInfo_profilePhoto__splgS"}},70:function(e,t,n){e.exports={paginator:"paginator_paginator__2ARdb",pageNumber:"paginator_pageNumber__2YQgy",selectedPage:"paginator_selectedPage__2Px8m"}},92:function(e,t,n){e.exports={dialog:"dialog_dialog__SgFmC",active:"dialog_active__2_S4l"}},95:function(e,t,n){e.exports={preloader:"spinner_preloader__1jMg2",spinner:"spinner_spinner__1Hetg",spin:"spinner_spin__A_APw"}},96:function(e,t,n){e.exports={header:"header_header__18sGI",loginBlock:"header_loginBlock__2ztlx"}}},[[289,1,2]]]);
//# sourceMappingURL=main.85d567da.chunk.js.map