webpackJsonp([1],{"Lai+":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},s,!1,function(t){n("dMva")},null,null).exports,a=n("/ocq"),l=n("NYxO");o.a.use(l.a);var r=new l.a.Store({state:{count:0},mutations:{add:function(t){t.count++},remove:function(t){t.count--}}}),u=new o.a,c={name:"HelloWorld",data:function(){return{nowheader:"my-header-1",message:"Hello World",list:["第一项","第二项","第三项"]}},computed:{count:function(){return r.state.count}},methods:{changebnt:function(t){this.nowheader="my-header-"+t},first:function(t){this.message=t},deine:function(){console.log("a")}},components:{"my-header-1":{template:'<div>住监狱<input type="text"></div>'},"my-header-2":{template:'<div>汤玉鹏<input type="text"></div>'},"my-header-3":{template:'<div>唐宇<input type="text"></div>'},addbtn:{template:'<button @click="setCount">+</button>',methods:{setCount:function(){r.commit("add")}}},removebtn:{template:'<button @click="setCount">-</button>',methods:{setCount:function(){r.commit("remove")}}},one:{template:"<h2>{{message}}</h2>",data:function(){return{message:"非父子组件传值"}},mounted:function(){u.$on("chave",function(t){console.log(t),this.message=t}.bind(this))}},two:{template:'<ul><li @click="getfate" v-for="item in list">{{item}}</li></ul>',data:function(){return{list:["one","two","three","four"]}},methods:{getfate:function(t){u.$emit("chave",t.target.innerHTML)}}},"my-header":{props:["list"],template:'<div>\n                  <h1>{{message}}</h1>\n                  <h2 v-on:click=\'changeCount\'>{{count}}</h2>\n                  <ul>\n                    <li @click="first" v-for=\'item in list\'>{{item}}</li>\n                  </ul>\n                  <my-nav @changeevent="changeevent" :list="list"></my-nav>\n                  </div>',data:function(){return{count:0,message:"Hello typ"}},methods:{changeCount:function(){this.count++},first:function(t){console.log(t.target.innerHTML),this.$emit("first",t.target.innerHTML)},changeevent:function(t){console.log(t),this.message=t}},components:{"my-nav":{template:"<ul>\n                      <li v-for=\"item in list\" @click='getcoutent'>{{item}}</li>\n                    </ul>",props:["list"],methods:{getcoutent:function(t){console.log(t),console.log(t.target.innerHTML),this.$emit("changeevent",t.target.innerHTML)}}}}}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" "),n("router-link",{attrs:{to:"/phone"}},[t._v("通讯录")]),t._v(" "),n("button",{on:{click:function(e){t.changebnt(1)}}},[t._v("第一项")]),t._v(" "),n("button",{on:{click:function(e){t.changebnt(2)}}},[t._v("第二项")]),t._v(" "),n("button",{on:{click:function(e){t.changebnt(3)}}},[t._v("第三项")]),t._v(" "),n("keep-alive",[n(t.nowheader,{tag:"component"})],1),t._v("\n  "+t._s(t.count)+"\n  "),n("br"),t._v(" "),n("addbtn"),t._v(" "),n("removebtn"),t._v(" "),n("br"),t._v("\n  "+t._s(t.message)+"\n  "),n("one"),t._v(" "),n("two"),t._v(" "),n("my-header",{attrs:{list:t.list},on:{first:t.first},nativeOn:{click:function(e){return t.deine(e)}}})],1)},staticRenderFns:[]};var d=n("VU/8")(c,m,!1,function(t){n("OBUR")},null,null).exports,f=[{index:"A",users:[{name:"a1",tel:"13333333331"},{name:"a2",tel:"13333333332"},{name:"a3",tel:"13333333333"}]},{index:"B",users:[{name:"b1",tel:"13333333331"},{name:"b2",tel:"13333333332"},{name:"b3",tel:"13333333333"}]},{index:"C",users:[{name:"c1",tel:"13333333331"},{name:"c2",tel:"13333333332"},{name:"c3",tel:"13333333333"}]},{index:"D",users:[{name:"d1",tel:"13333333331"},{name:"d2",tel:"13333333332"},{name:"d3",tel:"13333333333"}]},{index:"E",users:[{name:"e1",tel:"13333333331"},{name:"e2",tel:"13333333332"},{name:"e3",tel:"13333333333"}]},{index:"F",users:[{name:"f1",tel:"13333333331"},{name:"f2",tel:"13333333332"},{name:"f3",tel:"13333333333"}]},{index:"F1",users:[{name:"f1",tel:"13333333331"},{name:"f2",tel:"13333333332"},{name:"f3",tel:"13333333333"}]},{index:"F2",users:[{name:"f1",tel:"13333333331"},{name:"f2",tel:"13333333332"},{name:"f3",tel:"13333333333"}]},{index:"F3",users:[{name:"f1",tel:"13333333331"},{name:"f2",tel:"13333333332"},{name:"f3",tel:"13333333333"}]},{index:"F4",users:[{name:"f1",tel:"13333333331"},{name:"f2",tel:"13333333332"},{name:"f3",tel:"13333333333"}]},{index:"F5",users:[{name:"f1",tel:"13333333331"},{name:"f2",tel:"13333333332"},{name:"f3",tel:"13333333333"}]}],v=new o.a;o.a.component("my-header",{template:'<div id="header" :style="{\'position\':customFixed ? \'fixed\':\'static\'}">\n      <slot name="left"></slot>\n      {{customTitle}}\n      <slot name="right"></slot>\n  </div>',props:{customTitle:{type:String,default:"标题"},customFixed:{type:Boolean,default:!1}}}),o.a.component("my-alert",{template:'<div id="alert" ref="alert">\n        <div class="alert_content">\n          <div class="alert_title">\n            {{customTitle}}\n          </div>\n          <div class="alert_body">{{customBody}}</div>\n          <slot></slot>\n        </div>\n    </div>',props:{customTitle:{type:String,default:"弹窗"}},data:function(){return{customBody:""}},mounted:function(){v.$on("changeEvents",function(t){console.log(t),this.customBody=t,this.$refs.alert.style.display="flex"}.bind(this))}}),o.a.component("my-list",{template:'<div id="list">\n            <ul class="list_user" ref="listuser" @touchmove="bMove=true">\n              <li v-for="item in userData">\n                <p>{{item.index}}</p>\n                <ul>\n                  <li @touchend="showtel(user.tel)" v-for="user in item.users">{{user.name}}</li>\n                </ul>\n              </li>\n            </ul>\n            <ul class="list_index" ref="listIndex">\n              <li @touchstart="setScroll" v-for="item in userIndex">{{item}}</li>\n            </ul>\n          </div>',props:{"user-data":{type:Array,default:function(){return[]}}},data:function(){return{bMove:!1}},computed:{userIndex:function(){return console.log(this.userData),console.log(this.filterIndex(this.userData)),this.filterIndex(this.userData)}},methods:{filterIndex:function(t){for(var e=[],n=0;n<t.length;n++)t[n].index&&e.push(t[n].index);return e},setlistIndexPos:function(){var t=this.$refs.listIndex.offsetHeight;this.$refs.listIndex.style.marginTop=-t/2+"px"},showtel:function(t){this.bMove?this.bMove=!1:v.$emit("changeEvents",t)},setScroll:function(t){console.log(t.target.innerHTML);for(var e=this.$refs.listuser.getElementsByTagName("p"),n=0;n<e.length;n++)e[n].innerHTML==t.target.innerHTML&&(document.body.scrollTop=e[n].offsetTop,document.documentElement.scrollTop=e[n].offsetTop,window.scrollTop=e[n].offsetTop,console.log(e[n].offsetTop))}},mounted:function(){this.setlistIndexPos()}});var h={name:"HelloWorld",data:function(){return{userData:f}},methods:{backBtn:function(){alert("123")},homeBtn:function(){alert("123")},confirmBtn:function(){alert("a")},cancelBtn:function(){console.log(this),this.$children[2].$el.style.display="none"}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("my-header",{attrs:{"custom-title":"通讯录","custom-fixed":""}},[n("button",{attrs:{slot:"left"},on:{touchstart:t.backBtn},slot:"left"},[t._v("首页")]),t._v(" "),n("button",{attrs:{slot:"right"},on:{touchstart:t.homeBtn},slot:"right"},[t._v("+")])]),t._v(" "),n("my-list",{attrs:{"user-data":t.userData}}),t._v(" "),n("my-alert",{attrs:{"custom-title":"呼叫"}},[n("div",{staticClass:"alert_btn"},[n("button",{staticClass:"aler_tbn",on:{touchstart:t.confirmBtn}},[t._v("确认")]),t._v(" "),n("button",{staticClass:"aler_tbn",on:{touchstart:t.cancelBtn}},[t._v("取消")])])])],1)},staticRenderFns:[]};var g=n("VU/8")(h,p,!1,function(t){n("Lai+")},null,null).exports;o.a.use(a.a);var _=new a.a({routes:[{path:"/",name:"HelloWorld",component:d},{path:"/phone",name:"phone",component:g}]}),b=n("M6Dg"),x=n.n(b);o.a.use(l.a),o.a.use(x.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:_,components:{App:i},template:"<App/>"})},OBUR:function(t,e){},dMva:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a2c1cd4982cb09c6a067.js.map