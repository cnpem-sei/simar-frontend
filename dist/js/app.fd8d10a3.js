(function(e){function t(t){for(var i,r,a=t[0],c=t[1],l=t[2],d=0,v=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11e2":function(e,t,n){"use strict";n("db34")},"336c":function(e,t,n){e.exports=n.p+"img/back.ab239617.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",{attrs:{fluid:""}},[n("toolbar",{attrs:{settings:e.settings},on:{sort:e.updateSort,desc:e.updateDesc,view:e.updateView,search:e.updateSearch}}),n("iterator",{attrs:{settings:e.settings}})],1),n("ft")],1)},s=[],r=(n("ac1f"),n("841c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-data-iterator",{directives:[{name:"show",rawName:"v-show",value:this.settings.viewMode,expression:"this.settings.viewMode"}],attrs:{items:e.items,"items-per-page":e.itemsPerPage,page:e.page,search:this.settings.search,"sort-by":this.settings.sortBy,"sort-desc":this.settings.sortDesc,"hide-default-footer":""},on:{"update:itemsPerPage":function(t){e.itemsPerPage=t},"update:items-per-page":function(t){e.itemsPerPage=t},"update:page":function(t){e.page=t}},scopedSlots:e._u([{key:"default",fn:function(t){return[n("v-row",e._l(t.items,(function(t){return n("v-col",{key:t.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",[n("v-card-title",{staticClass:"subheading font-weight-bold"},[e._v(" "+e._s(t.name)+" ")]),n("v-divider"),n("v-list",{attrs:{dense:""}},e._l(e.filteredKeys,(function(i,o){return n("v-list-item",{key:o},[n("v-list-item-content",[e._v(" "+e._s(i)+": ")]),n("v-chip",{staticClass:"align-end",attrs:{color:e.get_pv_color(t,i),"text-color":"white"}},[e._v(" "+e._s(t[i.toLowerCase()])+" ")])],1)})),1)],1)],1)})),1)]}},{key:"footer",fn:function(){return[n("v-row",{staticClass:"mt-2 no-margin",attrs:{align:"center",justify:"center"}},[n("span",{staticClass:"white--text"},[e._v("Items per page")]),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"ml-2 blue-background",attrs:{dark:"",text:"",color:"white"}},"v-btn",o,!1),i),[e._v(" "+e._s(e.itemsPerPage)+" "),n("v-icon",[e._v("mdi-chevron-down")])],1)]}}])},[n("v-list",e._l([8,12,16,20],(function(t,i){return n("v-list-item",{key:i,on:{click:function(n){return e.updateItemsPerPage(t)}}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1),n("v-spacer"),n("span",{staticClass:"mr-4 white--text"},[e._v(" Page "+e._s(e.page)+" of "+e._s(e.numberOfPages)+" ")]),n("v-btn",{staticClass:"mr-1",attrs:{dark:"",color:"blue darken-3"},on:{click:e.formerPage}},[n("v-icon",[e._v("mdi-chevron-left")])],1),n("v-btn",{staticClass:"ml-1",attrs:{dark:"",color:"blue darken-3"},on:{click:e.nextPage}},[n("v-icon",[e._v("mdi-chevron-right")])],1)],1)]},proxy:!0}])}),n("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!this.settings.viewMode,expression:"!this.settings.viewMode"}],staticClass:"elevation-1",attrs:{items:e.items,headers:e.headers,search:this.settings.search},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[n("tr",e._l(e.headers,(function(t,o){return n("td",{key:o},[o>0?n("div",[n("v-chip",{attrs:{"text-color":"white",color:e.get_pv_color(i,t.text)}},[e._v(e._s(i[t.value]))])],1):0==o||1==o?n("div",[n("p",[e._v(e._s(i[t.value]))])]):e._e()])})),0)]}}])})],1)}),a=[],c=(n("99af"),n("4de4"),n("c740"),n("caad"),n("baa5"),n("b0c0"),n("b680"),n("d3b7"),n("acd8"),n("2532"),n("ddb0"),n("b85c")),l=(n("96cf"),n("1da1")),u=(n("fb6a"),u||{});u.epics2web=u.epics2web||{},u.contextPrefix=u.contextPrefix||"",function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),u.epics2web.ClientConnection=function(e){var t="ws:";"https:"===window.location.protocol&&(t="wss:");var n={url:t+"//"+window.location.host+u.contextPrefix+"/epics2web/monitor",autoOpen:!0,autoReconnect:!0,autoLivenessPingAndTimeout:!0,autoDisplayClasses:!0,pingIntervalMillis:3e3,livenessTimoutMillis:2e3,reconnectWaitMillis:1e3,chunkedRequestPvsCount:400,clientName:window.location.href};for(var i in e||(e={}),n)"undefined"!==typeof e[i]?this[i]=e[i]:this[i]=n[i];var o=null,s=document.createElement("div"),r=null,a=this,c=null,l=!1,d=function(){null!==o&&o.readyState===WebSocket.OPEN&&(a.ping(),null!==c||(c=setTimeout((function(){o.readyState===WebSocket.OPEN&&o.close(),c=null}),a.livenessTimoutMillis)))};s.addEventListener("open",(function(e){a.onopen(e)})),s.addEventListener("close",(function(e){a.onclose(e)})),s.addEventListener("connecting",(function(e){a.onconnecting(e)})),s.addEventListener("closing",(function(e){a.onclosing(e)})),s.addEventListener("error",(function(e){a.onerror(e)})),s.addEventListener("message",(function(e){a.onmessage(e)})),s.addEventListener("info",(function(e){a.oninfo(e)})),s.addEventListener("update",(function(e){a.onupdate(e)})),s.addEventListener("pong",(function(e){a.onpong(e)})),this.addEventListener=s.addEventListener.bind(s),this.removeEventListener=s.removeEventListener.bind(s),this.dispatchEvent=s.dispatchEvent.bind(s),this.open=function(){if(null!==o&&o.readyState!==WebSocket.CLOSED)return console.log("already connected"),1;var e=new CustomEvent("connecting");s.dispatchEvent(e);var t=this.url;null!==this.clientName&&(t=t+"?clientName="+encodeURIComponent(this.clientName)),o=new WebSocket(t),o.onerror=function(e){console.log("server connection error"),console.log(e);var t=new CustomEvent("error");s.dispatchEvent(t)},o.onclose=function(e){console.log("server connection closed"),console.log(e.reason);var t=new CustomEvent("close");s.dispatchEvent(t),null!==c&&(clearTimeout(c),c=null);var n=null===o||o.readyState===WebSocket.CLOSED;a.autoReconnect&&!l&&n&&(l=!0,setTimeout((function(){a.open(),l=!1}),a.reconnectWaitMillis))},o.onmessage=function(e){null!==c&&(clearTimeout(c),c=null),r=new Date;var t=JSON.parse(e.data);if(t.date=r,"update"===t.type){var n=new CustomEvent("update",{detail:t});s.dispatchEvent(n)}else if("info"===t.type){var i=new CustomEvent("info",{detail:t});s.dispatchEvent(i)}else if("pong"===t.type){var o=new CustomEvent("pong");s.dispatchEvent(o)}var a=new CustomEvent("message");s.dispatchEvent(a,{detail:t})},o.onopen=function(){r=new Date;var e=new CustomEvent("open");s.dispatchEvent(e)}},this.close=function(e,t){console.log("close"),null!==o&&o.readyState!==WebSocket.CLOSED?("undefined"===typeof e&&(e=1e3),o.close(e,t)):console.log("already closed")},this.monitorPvs=function(e){var t,n,i;if(a.chunkedRequestPvsCount>0)for(t=0,n=e.length;t<n;t+=a.chunkedRequestPvsCount)i=e.slice(t,t+a.chunkedRequestPvsCount),this.monitorPvsChunk(i);else this.monitorPvsChunk(e)},this.monitorPvsChunk=function(e){var t={type:"monitor",pvs:e};o.send(JSON.stringify(t))},this.clearPvs=function(e){var t,n,i;if(a.chunkedRequestPvsCount>0)for(t=0,n=e.length;t<n;t+=a.chunkedRequestPvsCount)i=e.slice(t,t+a.chunkedRequestPvsCount),this.clearPvsChunk(i);else this.clearPvsChunk(e)},this.clearPvsChunk=function(e){var t={type:"clear",pvs:e};o.send(JSON.stringify(t))},this.ping=function(){var e={type:"ping"};o.send(JSON.stringify(e))},!0===this.autoOpen&&this.open(),!0===this.autoLivenessPingAndTimeout&&window.setInterval(d,this.pingIntervalMillis)},u.epics2web.ClientConnection.prototype.onopen=function(){},u.epics2web.ClientConnection.prototype.onclose=function(){},u.epics2web.ClientConnection.prototype.onconnecting=function(){},u.epics2web.ClientConnection.prototype.onclosing=function(){},u.epics2web.ClientConnection.prototype.onmessage=function(){},u.epics2web.ClientConnection.prototype.onerror=function(){},u.epics2web.ClientConnection.prototype.onupdate=function(){},u.epics2web.ClientConnection.prototype.oninfo=function(){},u.epics2web.ClientConnection.prototype.onpong=function(){},u.epics2web.isNumericEpicsType=function(e){var t;switch(e){case"DBR_DOUBLE":case"DBR_FLOAT":case"DBR_INT":case"DBR_SHORT":case"DBR_BYTE":t=!0;break;default:t=!1}return t};var d=function(){var e="10.0.38.42";if("vpn.cnpem.br"===window.location.host){var t=/https?\/((?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])))\//,n=t.exec(window.location.href);n&&n.length>1&&(e=n[1])}else e=window.location.host;return(e.includes("0.0.0.0")||e.includes("localhost"))&&(e="10.0.38.42",console.log("DEBUG SERVER. Setting host to 10.0.38.42")),e},v=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){var n=[];fetch("config.json").then((function(e){return e.json()})).then((function(i){t.headers=i.headers;var o,s=Object(c["a"])(i.items);try{for(s.s();!(o=s.n()).done;){var r=o.value;t.config.push(r.config),t.items.push(r.fields),n=n.concat(r.config.pvs)}}catch(a){s.e(a)}finally{s.f()}e(n)}))}),100)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={props:["settings"],data:function(){return{filter:{},page:1,itemsPerPage:8,headers:[],items:[],config:[]}},computed:{numberOfPages:function(){return Math.ceil(this.items.length/this.itemsPerPage)},filteredKeys:function(){return this.settings.keys.filter((function(e){return"Name"!==e}))}},methods:{nextPage:function(){this.page+1<=this.numberOfPages&&(this.page+=1)},formerPage:function(){this.page-1>=1&&(this.page-=1)},updateItemsPerPage:function(e){this.itemsPerPage=e},get_pv_color:function(e,t){if("?"===e[t.toLowerCase()])return"gray";var n=this.items.findIndex((function(t){return t.name===e.name})),i=parseFloat(e[t.toLowerCase()]),o=t.toLowerCase().substring(0,1);switch(t){case"Temperature":return i>this.config[n].t_hihi?"red":i>this.config[n].t_hi?"orange":"green";case"Hatch open":return"No"===e["hatch open"]?"green":"orange";default:return i>this.config[n][o+"_hihi"]||i<this.config[n][o+"_lolo"]?"red":i>this.config[n][o+"_hi"]||i<this.config[n][o+"_lo"]?"orange":"green"}}},created:function(){var e=this,t=d(),n={url:"ws://"+t+"/epics2web/monitor"},i=new u.epics2web.ClientConnection(n);i.onopen=Object(l["a"])(regeneratorRuntime.mark((function n(){var o,s,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,v(e);case 2:o=n.sent,s=Object(c["a"])(e.config);try{for(a=function(){var e,n=r.value,i=Object(c["a"])(n.pvs);try{var o=function(){var i=e.value,o=i.lastIndexOf(":")+1,s=i.substring(o,o+1);fetch("http://"+t+"/retrieval/bpl/getMetadata?pv="+i).then((function(e){return e.json()})).then((function(e){var t,i,o,r;n[s+"_hihi"]=null!==(t=e.HIHI)&&void 0!==t?t:n[s+"_hihi"],n[s+"_hi"]=null!==(i=e.HIGH)&&void 0!==i?i:n[s+"_hi"],n[s+"_lolo"]=null!==(o=e.LOLO)&&void 0!==o?o:n[s+"_lolo"],n[s+"_lo"]=null!==(r=e.LO)&&void 0!==r?r:n[s+"_lo"]}))};for(i.s();!(e=i.n()).done;)o()}catch(s){i.e(s)}finally{i.f()}},s.s();!(r=s.n()).done;)a()}catch(l){s.e(l)}finally{s.f()}i.monitorPvs(o);case 6:case"end":return n.stop()}}),n)}))),i.onupdate=function(t){var n=t.detail.pv,i=n.substring(n.lastIndexOf(":")+1),o=e.config.findIndex((function(e){return e.pvs.includes(n)}));switch(i){case"Temperature":e.items[o].temperature=t.detail.value.toFixed(2)+" C";break;case"Pressure":e.items[o].pressure=t.detail.value.toFixed(2)+" hPa",e.items[o]["hatch open"]=t.detail.value>e.config[o].hatch?"No":"Yes";break;default:break}}}},f=p,h=(n("8969"),n("2877")),m=n("6544"),g=n.n(m),w=n("8336"),b=n("b0af"),y=n("99d9"),_=n("cc20"),C=n("62ad"),k=n("a523"),P=n("c377"),E=n("8fea"),x=n("ce7e"),O=n("132d"),S=n("8860"),V=n("da13"),M=n("5d23"),L=n("e449"),N=n("0fd9"),T=n("2fa4"),D=Object(h["a"])(f,r,a,!1,null,"6f88cee2",null),R=D.exports;g()(D,{VBtn:w["a"],VCard:b["a"],VCardTitle:y["a"],VChip:_["a"],VCol:C["a"],VContainer:k["a"],VDataIterator:P["a"],VDataTable:E["a"],VDivider:x["a"],VIcon:O["a"],VList:S["a"],VListItem:V["a"],VListItemContent:M["a"],VListItemTitle:M["b"],VMenu:L["a"],VRow:N["a"],VSpacer:T["a"]});var j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("v-toolbar",{staticClass:"mb-1",attrs:{src:n("336c"),dark:"",color:"blue darken-3"}},[i("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"},on:{input:function(t){return e.$emit("search",t)}}}),e.$vuetify.breakpoint.mdAndUp?[i("v-spacer"),i("v-select",{directives:[{name:"show",rawName:"v-show",value:this.settings.viewMode,expression:"this.settings.viewMode"}],attrs:{flat:"","solo-inverted":"","hide-details":"",items:this.settings.keys,"prepend-inner-icon":"mdi-magnify",label:"Sort by"},on:{change:function(t){return e.$emit("desc",t)}}}),i("v-spacer"),i("v-btn-toggle",{directives:[{name:"show",rawName:"v-show",value:this.settings.viewMode,expression:"this.settings.viewMode"}],attrs:{mandatory:""},on:{change:function(t){return e.$emit("sort",t)}}},[i("v-btn",{attrs:{large:"",depressed:"",color:"blue",value:!1,align:"start"}},[i("v-icon",[e._v("mdi-trending-up")])],1),i("v-btn",{attrs:{large:"",depressed:"",color:"blue",value:!0}},[i("v-icon",[e._v("mdi-trending-down")])],1)],1),i("v-spacer"),i("v-btn-toggle",{attrs:{mandatory:""},on:{change:function(t){return e.$emit("view",t)}}},[i("v-btn",{attrs:{large:"",depressed:"",color:"blue",value:!1}},[i("v-icon",[e._v("mdi-table")])],1),i("v-btn",{attrs:{large:"",depressed:"",color:"blue",value:!0}},[i("v-icon",[e._v("mdi-view-module")])],1)],1)]:e._e(),e.$vuetify.breakpoint.smAndDown?[i("v-btn",{attrs:{icon:""},on:{click:function(t){e.dropdown=!e.dropdown}}},[i("v-icon",[e._v("mdi-menu")])],1)]:e._e()],2),e.dropdown&&e.$vuetify.breakpoint.smAndDown?i("v-toolbar",{staticClass:"mb-1",attrs:{dark:"",color:"blue darken-3"}},[i("v-select",{directives:[{name:"show",rawName:"v-show",value:this.settings.viewMode,expression:"this.settings.viewMode"}],attrs:{flat:"","solo-inverted":"","hide-details":"",items:this.settings.keys,"prepend-inner-icon":"mdi-magnify",label:"Sort by"},on:{change:function(t){return e.$emit("desc",t)}}}),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:this.settings.viewMode,expression:"this.settings.viewMode"}],attrs:{icon:""},on:{click:function(t){return e.$emit("view",!1)}}},[i("v-icon",[e._v("mdi-table")])],1),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:!this.settings.viewMode,expression:"!this.settings.viewMode"}],attrs:{icon:""},on:{click:function(t){return e.$emit("view",!0)}}},[i("v-icon",[e._v("mdi-view-module")])],1),i("v-btn-toggle",{directives:[{name:"show",rawName:"v-show",value:this.settings.viewMode,expression:"this.settings.viewMode"}],attrs:{mandatory:""},on:{change:function(t){return e.$emit("sort",t)}}},[i("v-btn",{attrs:{large:"",depressed:"",color:"blue",value:!1,align:"start"}},[i("v-icon",[e._v("mdi-trending-up")])],1),i("v-btn",{attrs:{large:"",depressed:"",color:"blue",value:!0}},[i("v-icon",[e._v("mdi-trending-down")])],1)],1)],1):e._e()],1)},I=[],$={props:["settings"],data:function(){return{filter:{},dropdown:!1}}},B=$,A=n("a609"),F=n("b974"),W=n("8654"),q=n("71d9"),H=Object(h["a"])(B,j,I,!1,null,null,null),J=H.exports;g()(H,{VBtn:w["a"],VBtnToggle:A["a"],VContainer:k["a"],VIcon:O["a"],VSelect:F["a"],VSpacer:T["a"],VTextField:W["a"],VToolbar:q["a"]});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{color:"primary darken-2",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-btn",{staticClass:"my-2",attrs:{href:"https://wiki-sirius.lnls.br/mediawiki/index.php/CON:CON",color:"white",text:"",rounded:""}},[e._v(" wiki ")]),n("v-btn",{staticClass:"my-2",attrs:{href:"https://gitlab.cnpem.br/IoT/simar-vue",color:"white",text:"",rounded:""}},[e._v(" gitlab ")]),n("v-btn",{staticClass:"my-2",attrs:{href:"mailto:guilherme.freitas@cnpem.br",color:"white",text:"",rounded:""}},[e._v(" contact ")]),n("v-col",{staticClass:"primary darken-3 py-4 text-center white--text",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("CNPEM")])])],1)],1)},Y=[],G=n("553a"),K={},z=Object(h["a"])(K,U,Y,!1,null,null,null),Q=z.exports;g()(z,{VBtn:w["a"],VCol:C["a"],VFooter:G["a"],VRow:N["a"]});var X={name:"App",components:{toolbar:J,iterator:R,ft:Q},data:function(){return{settings:{sortDesc:!1,viewMode:!0,sortBy:"name",search:"",keys:["Name","Temperature","Pressure","Voltage","Hatch open","Fan speed"]}}},methods:{updateSearch:function(e){this.settings.search=e},updateView:function(e){this.settings.viewMode=e},updateDesc:function(e){this.settings.sortBy=e.toLowerCase()},updateSort:function(e){this.settings.sortDesc=e}}},Z=X,ee=(n("11e2"),n("7496")),te=n("f6c4"),ne=Object(h["a"])(Z,o,s,!1,null,"8f6f870c",null),ie=ne.exports;g()(ne,{VApp:ee["a"],VMain:te["a"]});var oe=n("f309");i["a"].use(oe["a"]);var se=new oe["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:se,render:function(e){return e(ie)}}).$mount("#app")},8969:function(e,t,n){"use strict";n("a2d2")},a2d2:function(e,t,n){},db34:function(e,t,n){}});
//# sourceMappingURL=app.fd8d10a3.js.map