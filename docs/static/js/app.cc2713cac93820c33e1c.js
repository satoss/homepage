webpackJsonp([0],{"53kc":function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("header"),this._v(" "),i("main",[i("transition",{attrs:{mode:"out-in"}},[i("router-view")],1)],1),this._v(" "),i("footer")])},staticRenderFns:[]};var a=e("VU/8")({name:"App"},n,!1,function(t){e("rVR1")},null,null).exports,r=e("/ocq"),o=1993,c=7,l=28,d={data:function(){return{msg:"プロフィール",profiles:[{id:1,title:"生年月日",description:o+"年"+c+"月"+l+"日"},{id:2,title:"年齢",description:function(){var t=new Date;t=1e4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();var i=1e4*parseInt(o,10)+100*parseInt(c,10)+parseInt(l,10);return Math.floor((t-i)/1e4)}()+"歳"},{id:3,title:"住所",description:"東京都中野区"},{id:4,title:"出身地",description:"秋田県潟上市"},{id:5,title:"血液型",description:"O型"},{id:6,title:"好きなこと",description:"おいしいご飯を食べること"}]}}},p={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h1",{staticClass:"section-index"},[t._v("About")]),t._v(" "),e("p",{staticClass:"msg"},[t._v(t._s(t.msg))]),t._v(" "),e("div",{attrs:{id:"table-block"}},[e("table",{staticClass:"table"},t._l(t.profiles,function(i){return e("tr",{key:i.id},[e("th",{staticClass:"caption"},[t._v(t._s(i.title))]),t._v(" "),e("td",{staticClass:"text"},[t._v(t._s(i.description))])])}),0)])])},staticRenderFns:[]};var u=e("VU/8")(d,p,!1,function(t){e("p4n4")},"data-v-c227eb3c",null).exports,v={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h1",{staticClass:"section-index"},[t._v("History")]),t._v(" "),e("br"),t._v(" "),e("ul",t._l(t.histories,function(i){return e("li",{key:i.id},[e("div",{attrs:{id:"history-block"}},[e("p",{attrs:{id:"title"}},[t._v("\n            "+t._s(i.title)+"\n            "),e("span",{staticClass:"margin-side"},[t._v(t._s(i.term))])]),t._v(" "),e("p",[t._v(t._s(i.comment))])])])}),0)])},staticRenderFns:[]};var m=e("VU/8")({data:function(){return{histories:[{id:1,term:"(2018年5月～2019年12月)",title:"■webフロントエンド開発",comment:"ポータルサイトに広告を配信するためのフロントエンド開発・改修を担当"},{id:2,term:"(2017年3月～2018年3月)",title:"■電話帳配達管理システム開発",comment:"Javaを使用し、既存システムのリプレースに携わる"},{id:3,term:"(2016年7月～2017年2月)",title:"■帳票作成支援",comment:"官公庁で発行する帳票作成業務を自動化するシステム開発を担当"},{id:4,term:"(2016年4月～2016年6月)",title:"■在庫管理システム開発（社内研修）",comment:"一般的なシステム開発の基礎を学ぶ"}]}}},v,!1,function(t){e("uOtU")},"data-v-ad1c9fb2",null).exports,_={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h1",{staticClass:"section-index"},[t._v("Skill")]),t._v(" "),e("p",{staticClass:"msg",attrs:{id:"skill-list"}},[t._v(t._s(t.msg))]),t._v(" "),e("ul",{staticClass:"inline-block"},[e("strong",[t._v("language")]),t._v(" "),t._l(t.languages,function(i){return e("li",{key:i.id},[t._v("\n        "+t._s(i.description)+"\n      ")])})],2),t._v(" "),e("ul",{staticClass:"inline-block",attrs:{id:"language-list"}},[e("strong",[t._v("DB")]),t._v(" "),t._l(t.databases,function(i){return e("li",{key:i.id},[t._v("\n        "+t._s(i.description)+"\n      ")])})],2),t._v(" "),e("ul",{staticClass:"inline-block",attrs:{id:"library-list"}},[e("strong",[t._v("FW or library")]),t._v(" "),t._l(t.libraries,function(i){return e("li",{key:i.id},[t._v("\n        "+t._s(i.description)+"\n      ")])})],2),t._v(" "),e("ul",{staticClass:"inline-block",attrs:{id:"other-list"}},[e("strong",[t._v("other")]),t._v(" "),t._l(t.others,function(i){return e("li",{key:i.id},[t._v("\n        "+t._s(i.description)+"\n      ")])})],2)])},staticRenderFns:[]};var f=e("VU/8")({data:function(){return{msg:"※は実務未経験",languages:[{id:1,description:"JavaScript"},{id:2,description:"Java"},{id:3,description:"HTML5"},{id:4,description:"CSS3"},{id:5,description:"VB.net"},{id:6,description:"VBA"},{id:7,description:"Ruby(※)"}],databases:[{id:1,description:"PostgreSQL"},{id:2,description:"Access"},{id:3,description:"SQL Server(※)"}],libraries:[{id:1,description:"JQuery"},{id:2,description:"Express"},{id:3,description:"Spring"},{id:4,description:"Bootstrap"},{id:5,description:"Vue.js(※)"},{id:6,description:"Struts(※)"},{id:7,description:"Ruby on Rails(※)"}],others:[{id:1,description:"Linux"},{id:2,description:"JIRA"},{id:3,description:"Confluence"},{id:4,description:"bitbucket"},{id:5,description:"npm"},{id:6,description:"Webpack"},{id:7,description:"JSP"},{id:8,description:"Junit"},{id:9,description:"Tomcat"},{id:10,description:"Illustrator"}]}}},_,!1,function(t){e("53kc")},"data-v-664bb57a",null).exports,h={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h1",{staticClass:"section-index"},[t._v("Contact")]),t._v(" "),e("form",{staticClass:"form-horizontal",attrs:{id:"inquiry",method:"post",novalidate:"true"},on:{submit:t.checkForm}},[e("fieldset",[e("legend",[t._v("お問い合わせ")]),t._v(" "),t.isSubmit?t._e():e("div",[t.errors.length?e("p",[e("ul",t._l(t.errors,function(i,s){return e("li",{key:s},[t._v(t._s(i))])}),0)]):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-sm-3 control-label",attrs:{for:"name1"}},[t._v("お名前")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text"},domProps:{value:t.name},on:{input:function(i){i.target.composing||(t.name=i.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-sm-3 control-label",attrs:{for:"email"}},[t._v("メールアドレス")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email"},domProps:{value:t.email},on:{input:function(i){i.target.composing||(t.email=i.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t.isSubmit?e("div",[e("h4",[t._v("お問い合わせ 送信完了")]),t._v(" "),t._m(2),t._v(" "),e("br")]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-3 control-label",attrs:{for:"ask1"}},[this._v("お問い合わせ内容")]),this._v(" "),i("div",{staticClass:"col-sm-6"},[i("textarea",{staticClass:"form-control",attrs:{id:"content",name:"content",rows:"7",type:"text"}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary center-block",attrs:{type:"submit"}},[this._v("送信")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("\n        お問い合わせありがとうございました。"),i("br"),this._v("\n        内容を確認のうえ、回答させて頂きます。"),i("br"),this._v("\n        しばらくお待ちください。\n        ")])}]};var b={components:{"about-page":u,"history-page":m,"skill-page":f,"contact-page":e("VU/8")({data:function(){return{errors:[],name:null,email:null,isSubmit:!1}},methods:{checkForm:function(t){this.errors=[],this.name||this.errors.push("名前が入力されていません。"),this.email?this.validEmail(this.email)||this.errors.push("入力されたメールアドレスが不正です。"):this.errors.push("メールアドレスが入力されていません。"),this.errors.length||(this.isSubmit=!0),t.preventDefault()},validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}}},h,!1,function(t){e("jcp+")},"data-v-0cb9616e",null).exports},data:function(){return{title:"Shoei Sato",msg:"Thanks for Coming",pageType:1,sections:[{id:1,title:"About",link:"about",icon:"fas fa-user"},{id:2,title:"History",link:"work",icon:"fas fa-images"},{id:3,title:"Skill",link:"skill",icon:"fas fa-list-ul"},{id:4,title:"Contact",link:"contact",icon:"far fa-envelope"}]}},methods:{changePageType:function(t){this.pageType=t}}},g={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"top-wrapper"},[e("div",{staticClass:"container"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("p",[t._v(t._s(t.msg))])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"items"},t._l(t.sections,function(i){return e("a",{key:i.id,attrs:{href:"#"},on:{click:function(e){return t.changePageType(i.id)}}},[e("p",{staticClass:"caption"},[t._v(t._s(i.title))])])}),0)])]),t._v(" "),1===t.pageType?e("about-page",{staticClass:"section",attrs:{id:"about"}}):2===t.pageType?e("history-page",{staticClass:"section",attrs:{id:"work"}}):3===t.pageType?e("skill-page",{staticClass:"section",attrs:{id:"skill"}}):e("contact-page",{staticClass:"section",attrs:{id:"contact"}})],1)},staticRenderFns:[]};var C=e("VU/8")(b,g,!1,function(t){e("pDaZ")},"data-v-7bbb4fe5",null).exports;s.a.use(r.a);var k=new r.a({routes:[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:u},{path:"/history",name:"History",component:m},{path:"/skill",name:"Skill",component:f}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:k,components:{App:a},template:"<App/>"})},"jcp+":function(t,i){},p4n4:function(t,i){},pDaZ:function(t,i){},rVR1:function(t,i){},uOtU:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.cc2713cac93820c33e1c.js.map