(function(t){function e(e){for(var a,n,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0383":function(t,e,s){"use strict";var a=s("7505"),i=s.n(a);i.a},"1a8a":function(t,e,s){"use strict";var a=s("b5e8"),i=s.n(a);i.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18c","./et.js":"ec18c","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),s("router-view")],1)},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[s("router-link",{staticClass:"navbar-brand text-light",attrs:{to:{name:"Home"}}},[t._v("Bug-Spray")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[s("router-link",{staticClass:"nav-link text-light",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[s("router-link",{staticClass:"nav-link text-light",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger mx-1",attrs:{type:"button","data-toggle":"modal","data-target":"#bugForm"}},[t._v(" Add Bug ")]):t._e(),t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon icon-color"})])}],c=s("bc3a"),l=s.n(c),d=s("335d"),u={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},f=u,p=(s("1a8a"),s("2877")),b=Object(p["a"])(f,n,r,!1,null,null,null),g=b.exports,m={name:"App",async beforeCreate(){await Object(d["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:g}},h=m,v=(s("5c0b"),Object(p["a"])(h,i,o,!1,null,null,null)),j=v.exports,C=s("c1df"),y=s.n(C),_=s("8c4f"),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"home container-fluid"},[s("section",{staticClass:"row"},[s("div",{staticClass:"col-12 justify-content-center d-flex"},[s("div",{staticClass:"card m-2 bug-window d-flex justify-content-center flex-wrap align-content-center"},[s("section",{staticClass:"row",attrs:{id:"bug-interface"}},[s("div",{staticClass:"card bug-screen border-primary d-flex justifty-content-center"},[s("div",{staticClass:"col-12 d-flex justify-content-between"},[s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-danger m-1 dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Filter ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){t.allFilter=!0,t.closedFilter=!1,t.openFilter=!1}}},[t._v("All")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){t.closedFilter=!0,t.openFilter=!1,t.allFilter=!1}}},[t._v(" Closed")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){t.openFilter=!0,t.closedFilter=!1,t.allFilter=!1}}},[t._v("Open")])])])]),t._m(0),s("section",{attrs:{id:"bug-injection"}},[t.allFilter?s("div",{staticClass:"bug-list"},t._l(t.bugs,(function(t){return s("bug",{key:t.id,attrs:{bug:t}})})),1):t._e(),t.closedFilter?s("div",{staticClass:"bug-list"},t._l(t.closedBugs,(function(t){return s("bug",{key:t.id,attrs:{bug:t}})})),1):t._e(),t.openFilter?s("div",{staticClass:"bug-list"},t._l(t.openBugs,(function(t){return s("bug",{key:t.id,attrs:{bug:t}})})),1):t._e()])])])])])]),s("section",{attrs:{id:"modals"}},[s("form-modal",{attrs:{id:"bugForm"},scopedSlots:t._u([{key:"header",fn:function(){return[s("h5",[t._v("Create New Bug")])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"text-center d-flex"},[s("form",{staticClass:"m-2",on:{submit:function(e){return e.preventDefault(),t.addBug(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"text-light",attrs:{type:"text",placeholder:"description",required:""},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}}),s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[s("i",{staticClass:"fa fa-plus pointer text-light m-2"})])])])]},proxy:!0}])})],1)])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"card bg-info",attrs:{id:"title"}},[s("h4",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"col-3"},[t._v("Title:")]),s("span",{staticClass:"col-3"},[t._v("Creator:")]),s("span",{staticClass:"col-3"},[t._v("Status:")]),s("span",{staticClass:"col-3"},[t._v("Last Modified:")])])])}],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content bg-primary border-secondary"},[s("div",{staticClass:" text-light modal-header text-center"},[t._t("header"),s("i",{staticClass:"fa fa-times  text-warning",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}})],2),t._t("body"),s("div",{staticClass:"modal-footer"})],2)])])},k=[],E={name:"form-modal",data(){return{}},computed:{},methods:{},components:{}},P=E,N=Object(p["a"])(P,B,k,!1,null,"72db4dce",null),z=N.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bug"},[s("router-link",{attrs:{to:{name:"Details",params:{id:t.bug.id}}}},[t.bug.closed?t._e():s("section",{staticClass:"card d-flex bg-secondary",attrs:{id:"open-bug"}},[s("p",{staticClass:"text-light d-flex justify-content-between"},[s("span",{staticClass:"col-3"},[t._v(t._s(t.bug.title))]),s("span",{staticClass:"col-3"},[t._v(t._s(t.bug.creatorEmail))]),s("span",{staticClass:"col-3 text-open"},[t._v("Open")]),s("span",{staticClass:"col-3"},[t._v(t._s(t._f("formatDate")(t.bug.updatedAt,"timezone","America/Denver")))])])]),t.bug.closed?s("section",{staticClass:"card d-flex bg-secondary",attrs:{id:"closed-bug"}},[s("p",{staticClass:"text-info d-flex justify-content-between"},[s("span",{staticClass:"col-3"},[t._v(t._s(t.bug.title))]),s("span",{staticClass:"col-3"},[t._v(t._s(t.bug.creatorEmail))]),s("span",{staticClass:"col-3 text-closed"},[t._v("Closed")]),s("span",{staticClass:"col-3",attrs:{type:"date",id:"date"}},[t._v(t._s(t._f("formatDate")(t.bug.updatedAt,"timezone","America/Denver")))])])]):t._e()])],1)},F=[],D={name:"bug",mounted(){},props:{bug:{}},data(){return{date:{}}},computed:{},methods:{},components:{}},A=D,M=Object(p["a"])(A,O,F,!1,null,"f5950f30",null),S=M.exports,T={name:"home",mounted(){this.$store.dispatch("getResource",{path:"bugs",resource:"bugs"})},data(){return{newBug:{},allFilter:!0,closedFilter:!1,openFilter:!1}},computed:{bugs(){return this.$store.state.bugs},activeBug(){return this.$store.state.activeBug},openBugs(){return this.$store.state.bugs.filter(t=>!t.closed)},closedBugs(){return this.$store.state.bugs.filter(t=>t.closed)}},methods:{addBug(){this.$store.dispatch("createBug",{path:"bugs",resource:"activeBug",data:this.newBug}),this.newBug={},$(".modal-backdrop").hide()},filterBugs(){return this.$store.state.bugs.filter(t=>0==t.closed)}},components:{Bug:S,FormModal:z}},R=T,q=(s("f532"),Object(p["a"])(R,x,w,!1,null,"5e122ebb",null)),U=q.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"bug-details container-fluid"},[s("section",{staticClass:"row justify-content-center",attrs:{id:"bug-body"}},[s("div",{staticClass:"col-12 col-md-8 bg-bug p-2 m-2"},[s("div",{staticClass:"card bg-bug p-2 m-2"},[s("div",{staticClass:"d-flex justify-content-between p-1",attrs:{id:"bug-buttons"}},[t.isCreator&&!t.activeBug.closed?s("i",{staticClass:"fa fa-pencil-square-o text-light text-left pointer",attrs:{type:"button","data-toggle":"modal","data-target":"#editForm"}}):t._e(),t.isCreator&&!t.activeBug.closed?s("i",{staticClass:"fa fa-times text-light text-right pointer",on:{click:t.closeBug}}):t._e()]),s("div",{attrs:{id:"bug-info"}},[s("div",{attrs:{id:"email-title"}},[s("h1",{staticClass:"text-light text-center p-2"},[t._v(t._s(t.activeBug.title))]),s("h5",{staticClass:"text-warning"},[t._v(" Created By: "),s("span",{staticClass:"email text-info align-self-start"},[t._v(t._s(t.activeBug.creatorEmail))])])]),s("div",{attrs:{id:"open-info"}},[t.activeBug.closed?t._e():s("h5",{staticClass:"open text-open"},[s("span",{staticClass:"text-warning"},[t._v("Status: ")]),t._v("Open ")]),t.activeBug.closed?t._e():s("h5",{staticClass:"text-warning"},[t._v(" Last Modified: "),s("span",{staticClass:"date text-info justify-self-end"},[t._v(t._s(t._f("formatDate")(t.activeBug.updatedAt)))])])]),s("div",{attrs:{id:"closed-info"}},[t.activeBug.closed?s("h5",{staticClass:"text-closed"},[s("span",{staticClass:"text-warning"},[t._v("Status: ")]),t._v("Closed ")]):t._e(),t.activeBug.closed?s("h5",{staticClass:"text-warning"},[t._v(" Time Closed: "),s("span",{staticClass:"date text-info date"},[t._v(t._s(t._f("formatDate")(t.activeBug.closedDate)))])]):t._e()])]),s("div",{staticClass:"card text-light bg-bug p-1"},[s("p",[t._v(t._s(t.activeBug.description))])])])])]),s("section",{staticClass:"row justify-content-center",attrs:{id:"note-card"}},[s("div",{staticClass:"card col-12 col-md-8 p-2 m-2 bg-bug",attrs:{id:"note-col"}},[s("div",{staticClass:"card-title bg-bug",attrs:{id:"note-title"}},[t.$auth.isAuthenticated?s("i",{staticClass:"fa fa-plus text-light p-1",attrs:{type:"button","data-toggle":"modal","data-target":"#noteForm"}}):t._e(),s("h4",{staticClass:"d-flex justify-content-between bg-bug text-info p-1"},[t._v(" Notes: ")]),s("div",{staticClass:"card-body",attrs:{id:"note-injection"}},t._l(t.notes,(function(t){return s("note",{key:t.id,attrs:{note:t}})})),1)])])]),s("section",{attrs:{id:"add-note"}},[s("form-modal",{attrs:{id:"noteForm"},scopedSlots:t._u([{key:"header",fn:function(){return[s("h5",[t._v("New Note")])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"text-center d-flex"},[s("form",{staticClass:"m-2",on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"bg-bug text-info",attrs:{type:"text",placeholder:"Content...",required:""},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}}),s("i",{staticClass:"fa fa-plus pointer text-light m-2",attrs:{type:"submit"}})])])]},proxy:!0}])})],1),s("section",[s("form-modal",{attrs:{id:"editForm"},scopedSlots:t._u([{key:"header",fn:function(){return[s("h5",[t._v("Edit Bug")])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"text-center d-flex"}),s("form",{staticClass:"m-2",on:{submit:function(e){return e.preventDefault(),t.editBug(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bugEdit.title,expression:"bugEdit.title"}],staticClass:"bg-bug text-info",attrs:{type:"text",placeholder:"Title..."},domProps:{value:t.bugEdit.title},on:{input:function(e){e.target.composing||t.$set(t.bugEdit,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.bugEdit.description,expression:"bugEdit.description"}],staticClass:"bg-bug text-info",attrs:{type:"text",placeholder:"Body..."},domProps:{value:t.bugEdit.description},on:{input:function(e){e.target.composing||t.$set(t.bugEdit,"description",e.target.value)}}}),s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[s("i",{staticClass:"fa fa-plus pointer text-light m-2"})])])]},proxy:!0}])})],1)])},L=[],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"note"},[s("section",{staticClass:"text-light",attrs:{id:"note-info"}},[s("div",{staticClass:"col-12 text-warning p-1 m-1"},[s("div",{staticClass:"d-flex justify-content-between p-1",attrs:{id:"note-buttons"}},[t.isCreator?s("i",{staticClass:"fa fa-pencil-square-o text-light pointer",on:{click:function(e){t.toggleEdit=!t.toggleEdit}}}):t._e(),t.isCreator?s("i",{staticClass:"fa fa-times text-light pointer",on:{click:t.deleteNote}}):t._e()]),t.toggleEdit?s("form",{staticClass:"m-2",on:{submit:function(e){return e.preventDefault(),t.editNote(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.noteEdit.content,expression:"noteEdit.content"}],attrs:{type:"text",placeholder:"Content...",required:""},domProps:{value:t.noteEdit.content},on:{input:function(e){e.target.composing||t.$set(t.noteEdit,"content",e.target.value)}}})]):t._e(),s("p",[t._v(t._s(t.note.creatorEmail))])]),s("section",{staticClass:"card bg-bug text-info",attrs:{id:"note-body"}},[t._v(" "+t._s(t.note.content)+" ")])]),s("form-modal",{attrs:{id:"noteEdit"},scopedSlots:t._u([{key:"header",fn:function(){return[s("h5",[t._v("Create New Bug")])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"text-center d-flex"},[s("form",{staticClass:"m-2",on:{submit:function(e){return e.preventDefault(),t.editNote(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.noteEdit.content,expression:"noteEdit.content"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.noteEdit.content},on:{input:function(e){e.target.composing||t.$set(t.noteEdit,"content",e.target.value)}}}),s("button",{staticClass:"btn btn-success border-dark",attrs:{"data-toggle":"modal",type:"submit"}},[t._v(" Create Bug ")])])])]},proxy:!0}])})],1)},Y=[],W={name:"note",props:{note:{}},data(){return{noteEdit:{},toggleEdit:!1}},computed:{isCreator(){let t=this.$store.state.profile.email,e=this.note.creatorEmail;return t==e}},methods:{editNote(){this.noteEdit.creatorEmail=this.note.creatorEmail,this.$store.dispatch("edit",{getPath:"bugs/"+this.note.bugId+"/notes",path:"notes/"+this.note.id,data:this.noteEdit,resource:"notes"}),this.noteEdit={}},deleteNote(){this.$store.dispatch("delete",{deletePath:"notes/"+this.note.id,resource:"notes",path:"bugs/"+this.note.bugId+"/notes"})}},components:{FormModal:z}},J=W,Q=Object(p["a"])(J,I,Y,!1,null,"588550fe",null),K=Q.exports,X={name:"bug-details",props:{},mounted(){this.$store.dispatch("getResource",{path:"bugs/"+this.$route.params.id,resource:"activeBug"}),this.$store.dispatch("getResource",{path:"bugs/"+this.$route.params.id+"/notes",resource:"notes"})},data(){return{bugEdit:{},date:{},newNote:{}}},computed:{activeBug(){return this.$store.state.activeBug},notes(){return this.$store.state.notes},isCreator(){return this.$store.state.profile.email==this.activeBug.creatorEmail}},methods:{editBug(){this.bugEdit.creatorEmail=this.activeBug.creatorEmail,this.$store.dispatch("edit",{getPath:"bugs/"+this.activeBug.id,path:"bugs/"+this.activeBug.id,data:this.bugEdit,resource:"activeBug"}),$(".modal-backdrop").hide(),$(".modal").hide(),this.bugEdit={}},addNote(){this.newNote.bugId=this.$route.params.id,this.newNote.creatorEmail=this.$store.state.profile.email,this.$store.dispatch("create",{getPath:"bugs/"+this.$route.params.id+"/notes",path:"notes",resource:"notes",data:this.newNote}),this.newNote={},$(".modal-backdrop").hide(),$(".modal").hide()},closeBug(){this.$store.dispatch("delete",{deletePath:"bugs/"+this.activeBug.id,resource:"activeBug",path:"bugs/"+this.activeBug.id})}},components:{Note:K,FormModal:z}},G=X,V=(s("e453"),Object(p["a"])(G,H,L,!1,null,"52e007e9",null)),Z=V.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about text-center"},[s("h1",[t._v("Welcome "+t._s(t.profile.name))]),s("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),s("p",[t._v(t._s(t.profile.email))])])},et=[],st={name:"Profile",computed:{profile(){return this.$store.state.profile}}},at=st,it=(s("0383"),Object(p["a"])(at,tt,et,!1,null,"59c2bb44",null)),ot=it.exports;a["a"].use(_["a"]);const nt=[{path:"/",name:"Home",component:U},{path:"/profile",name:"Profile",component:ot,beforeEnter:d["b"]},{path:"/details/:id",name:"Details",component:Z,beforeEnter:d["b"]}],rt=new _["a"]({routes:nt});var ct=rt,lt=s("2f62");let dt=location.host.includes("localhost")?"http://localhost:3000/":"/";const ut=l.a.create({baseURL:dt+"api",timeout:3e3,withCredentials:!0});var ft=s("3d20"),pt=s.n(ft);class bt{static async confirmAction(t="Are you sure",e="Whats done can't be Undone!"){try{let s=await pt.a.fire({title:t,text:e,icon:"warning",showCancelButton:!0,confirmButtonColor:"aquamarine",cancelButtonColor:"dodgerblue",confirmButtonText:"Do it"});return!!s.value}catch(s){}}static toast(t="Default Toast",e=5e3,s="info"){pt.a.fire({title:t,icon:s,timer:e,toast:!0,position:"top-right",showConfirmButton:!1,timerProgressBar:!0})}}a["a"].use(lt["a"]);var gt=new lt["a"].Store({state:{profile:{},activeBug:{},bugs:[],notes:[]},mutations:{setProfile(t,e){t.profile=e},setResource(t,e){t[e.resource]=e.data}},actions:{setBearer({},t){ut.defaults.headers.authorization=t},resetBearer(){ut.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await ut.get("profile");console.log(e),t("setProfile",e.data)}catch(e){console.error(e)}},async getResource({commit:t},e){try{let s=await ut.get(e.path);t("setResource",{data:s.data,resource:e.resource})}catch(s){console.error(s)}},async createBug({dispatch:t},e){try{let s=await ut.post(e.path,e.data);t("getResource",{path:"bugs/"+s.data.id,resource:e.resource}),ct.push({name:"Details",params:{id:s.data.id}}),bt.toast("Created!",2e3,"success")}catch(s){console.error(s)}},async create({dispatch:t},e){try{await ut.post(e.path,e.data);t("getResource",{path:e.getPath,resource:e.resource}),bt.toast("Created!",2e3,"success")}catch(s){console.error(s)}},async edit({dispatch:t},e){try{await ut.put(e.path,e.data),t("getResource",{path:e.getPath,resource:e.resource}),bt.toast("Saved!",2e3,"success")}catch(s){console.error(s)}},async delete({dispatch:t},e){try{await bt.confirmAction()&&await ut.delete(e.deletePath),t("getResource",{path:e.path,resource:e.resource})}catch(s){console.error(s)}}}});const mt="dev-tunnelvision77.us.auth0.com",ht="https://bug-log.com",vt="eQUQPei4McK7en6z83AM60MdsqXCBeMr";a["a"].use(d["a"],{domain:mt,clientId:vt,audience:ht,onRedirectCallback:t=>{ct.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),a["a"].filter("formatDate",(function(t){if(t)return y()(String(t)).format("MM/DD/YYYY h:mm:ss a")})),new a["a"]({router:ct,store:gt,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},7505:function(t,e,s){},"9c0c":function(t,e,s){},b5e8:function(t,e,s){},d547:function(t,e,s){},e453:function(t,e,s){"use strict";var a=s("d547"),i=s.n(a);i.a},ec18:function(t,e,s){},f532:function(t,e,s){"use strict";var a=s("ec18"),i=s.n(a);i.a}});