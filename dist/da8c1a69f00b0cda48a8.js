(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(t,e,r){var content=r(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("82550144",content,!0,{sourceMap:!1})},179:function(t,e,r){var content=r(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("e933dba8",content,!0,{sourceMap:!1})},183:function(t,e,r){"use strict";var n=r(178);r.n(n).a},184:function(t,e,r){(t.exports=r(37)(!1)).push([t.i,".logo{float:left;margin:16px 46px;color:#fff;font-weight:700;font-size:20px;letter-spacing:2px}.logo,nav{line-height:60px;position:fixed}nav{z-index:999999;width:100%;background:#000}nav ul{line-height:60px;list-style:none;background:transparent;overflow:hidden;color:#fff;text-align:right;margin:0;padding:0 40px 0 0;transition:1s}nav.black ul{background:#000}nav ul li{display:inline-block;padding:16px 40px}nav ul li a{text-decoration:none;color:#fff;font-size:16px}.menu-icon{line-height:60px;width:100%;background:#000;text-align:right;box-sizing:border-box;padding:15px 24px;cursor:pointer;color:#fff;display:none}@media (max-width:786px){.logo{position:fixed;top:0;margin-top:16px}nav ul{max-height:0}nav.black ul,nav ul{background:#000}.showing{max-height:34em}nav ul li{box-sizing:border-box;width:100%;padding:24px;text-align:center}.menu-icon{display:block}}",""])},185:function(t,e,r){"use strict";var n=r(179);r.n(n).a},186:function(t,e,r){(t.exports=r(37)(!1)).push([t.i,"header{width:100%;height:100vh;background:url(https://firebasestorage.googleapis.com/v0/b/fir-cyut.appspot.com/o/myFirst%2Fbanner1.png?alt=media&token=cc6528e3-d605-4602-ade3-ae86d412c120) no-repeat 50% 50%;background-size:cover;background-attachment:fixed}",""])},187:function(t,e,r){"use strict";r.r(e);var n=r(25),l=r(182),c=r.n(l),o={},v=(r(183),r(19)),header=Object(v.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("nav",[r("div",{staticClass:"menu-icon"},[r("i",{staticClass:"fa fa-bars fa-2x"})]),t._v(" "),r("div",{staticClass:"logo"},[t._v("LOGO")]),t._v(" "),r("div",{staticClass:"menu"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#myData"}},[t._v("About")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#myExperience"}},[t._v("Experience")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#myskill"}},[t._v("Skill")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#callme"}},[t._v("Contact")])])])])])])}],!1,null,null,null).exports,d={},_=(r(185),{}),h={},m={mounted:function(){this.addbar(void 0,".bar-front")},methods:{FrontClick:function(){$(".front-end").removeClass("visibility"),$(".back-end").addClass("visibility"),$(".Other").addClass("visibility"),this.addbar(void 0,".bar-front"),this.cleanbar(void 0,".bar-back"),this.cleanbar(void 0,".bar-other")},BackClick:function(){$(".front-end").addClass("visibility"),$(".back-end").removeClass("visibility"),$(".back-end").removeClass("visibility"),$(".Other").addClass("visibility"),this.addbar(void 0,".bar-back"),this.cleanbar(void 0,".bar-front"),this.cleanbar(void 0,".bar-other")},OtherClick:function(){$(".front-end").addClass("visibility"),$(".back-end").addClass("visibility"),$(".Other").removeClass("visibility"),this.addbar(void 0,".bar-other"),this.cleanbar(void 0,".bar-front"),this.cleanbar(void 0,".bar-back")},addbar:function(t,e){console.log("test"),[].slice.call(document.querySelectorAll(e)).map((function(t,e){setTimeout((function(){t.style.width=t.dataset.percent}),200*e)}))},cleanbar:function(t,e){[].slice.call(document.querySelectorAll(e)).map((function(t,e){setTimeout((function(){t.style.width="0%"}),e)}))}}},f={},C={data:function(){return{isFBReady:!1,list:[]}},mounted:function(){c()(window).scroll((function(){var t=c()(this).scrollTop();console.log(Object(n.a)(this.list)),t>=1e3&&c()(".myExperience").addClass(".w3-container w3-animate-bottom"),t>=1400&&(c()(".myskill").removeClass("visibility"),c()(".myskill").addClass(".w3-container w3-animate-bottom"))}))},methods:{},components:{navbar:header,myself:Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"myself-text"},[r("h1",[t._v("賴哲彥 Kevin")]),t._v(" "),t._m(0),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"bg-3"},[r("button",{staticClass:"button button--rayen button--border-thick button--text-thick",attrs:{"data-text":"Read More"}},[r("nuxt-link",{attrs:{to:"/pro_memberAPI"}},[t._v("\n        MyProduct\n      ")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      對於新的知識感興趣\n      "),e("br"),this._v("樂於分享技術及各種想法\n      "),e("br"),this._v("嚮往可以互相成長\n      "),e("br"),this._v("互相學習的團隊\n    ")])}],!1,null,null,null).exports,mydata:Object(v.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"myData"},[e("div",{staticClass:"aboutme"},[this._m(0),this._v(" "),e("div",{staticClass:"Mytext"},[e("H3",[this._v("關於我")]),this._v(" "),this._m(1)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pic"},[e("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/fir-cyut.appspot.com/o/myFirst%2FIMG_0261.png?alt=media&token=36ff3368-894e-4aa1-bf4d-0f5934bfc2d1"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n        畢業於朝陽科大資訊管理系"),r("br"),t._v("\n        個性開朗，喜歡分享事情，也善於傾聽他人意見"),r("br"),t._v("\n        不怕犯錯，就怕沒試過就先放棄"),r("br"),t._v("\n        喜歡撰寫App前端/Web前端，\n        因為覺得可以給使用者良好的體驗會很有成就感，\n        並且撰寫程式時也可以即時看到成果，\n        同時又可以培養自己的美觀及設計能力。"),r("br"),t._v(" "),r("br"),t._v("\n        曾參予過熱舞社，職位是舞監"),r("br"),t._v("\n        主要是負責協助管理社團及教導新生"),r("br"),t._v("\n        曾經也擔任過社團舞展負責人，\n        從開會、規劃活動、分工、督促目前狀況、時程安排、活動費用等等，\n        一切都有詳細參與及負責。"),r("br")])}],!1,null,null,null).exports,myExperience:Object(v.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myExperience",attrs:{id:"myExperience"}},[r("div",{staticClass:"Expergird"},[r("div",{staticClass:"MyPython"},[r("div",{staticClass:"Expic"},[r("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/fir-cyut.appspot.com/o/myFirst%2FPython.png?alt=media&token=6a624710-2554-45c7-908b-befd4636ca4d"}})]),t._v(" "),r("div",{staticClass:"Extext"},[r("h3",[t._v("Python大專院校競賽")]),t._v(" "),r("p",[t._v("\n          參加過Python大專院校比賽\n          "),r("br"),t._v("熟悉基本邏輯上的運算\n          "),r("br"),t._v(" "),r("strong",[t._v("包含迴圈/判斷/陣列/字典等等")]),t._v(" "),r("br"),t._v("經過比賽後加強了程式邏輯和提升了對日後撰寫程式的能力\n          "),r("br")])])]),t._v(" "),r("div",{staticClass:"MySpecialSubject"},[r("div",{staticClass:"Expic"},[r("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/fir-cyut.appspot.com/o/myFirst%2Fcyut.png?alt=media&token=170e01cd-6d6e-4657-939a-1590c8efc542"}})]),t._v(" "),r("div",{staticClass:"Extext"},[r("h3",[t._v("專題競賽")]),t._v(" "),r("p",[t._v("\n          專題所運用到技術有\n          "),r("br"),t._v(" "),r("strong",[t._v("Android系統Java(AndroidStudio)")]),t._v(" "),r("br"),t._v(" "),r("strong",[t._v("web端Javascript/Jquery/Css/Php")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v("過程中最大的收穫是自學能力和團隊合作\n          "),r("br"),t._v("並且團隊中的每個人都互相有所成長\n          "),r("br"),t._v("此專題也很榮幸在本系上獲得佳作的成績\n        ")])])]),t._v(" "),r("div",{staticClass:"MyCurrent"},[r("div",{staticClass:"Expic"},[r("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/fir-cyut.appspot.com/o/myFirst%2FToolbox.jpg?alt=media&token=5536bd5a-1b4d-4efb-af13-9dc5385a0e44"}})]),t._v(" "),r("div",{staticClass:"Extext"},[r("h3",[t._v("目前狀況")]),t._v(" "),r("p",[t._v("\n          參與了一項專案製作開發\n          "),r("br"),t._v("此專案是由幾位朋友共同開發研究\n          "),r("br"),t._v("專案所運用到技術有\n          "),r("br"),t._v(" "),r("strong",[t._v("\n            Webpack/RWD/Ionic/\n            laravel/Gitlab(Github)/Api\n          ")]),t._v(" "),r("br"),t._v("目前我負責網頁前端部分\n          "),r("br"),t._v(" "),r("strong",[t._v("\n            Jquery/Javascript/Css3/\n            Webpack/Vue.js/RWD\n          ")])])])])])])}],!1,null,null,null).exports,myskill:Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myskill visibility",attrs:{id:"myskill"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"skill-btn"},[r("div",{staticClass:"box bg-1"},[r("button",{staticClass:"button button--ujarak button--border-thin button--text-thick",on:{click:t.FrontClick}},[t._v("Front-End")]),t._v(" "),r("button",{staticClass:"button button--ujarak button--border-thin button--text-thick",on:{click:t.BackClick}},[t._v("Back-End")]),t._v(" "),r("button",{staticClass:"button button--ujarak button--border-thin button--text-thick",on:{click:t.OtherClick}},[t._v("Other")])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"front-end"},[r("div",{staticClass:"skill-text"},[r("h2",[t._v("FRONT-END")]),t._v(" "),r("p",[t._v("\n        第一次接觸網頁前端是大學二年級在課程當中學到\n        "),r("br"),t._v("並且最後有製作出一個簡單小成品。\n        "),r("br"),t._v(" "),r("br"),t._v("因為大三的專題開始接觸大量的Java(AndroidStudio)以及JavaScript/Juery/PHP。\n        "),r("br"),t._v(" "),r("br"),t._v("目前因為參與其他專案開發，當中自學到很多新知識\n        "),r("br"),t._v("例如Webpack/RWD/Vue.js框架等等。\n      ")])]),t._v(" "),r("div",{staticClass:"skill-chart"},[r("h5",[t._v("HTML / CSS / RWD")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-front",attrs:{"data-percent":"83%"}})]),t._v(" "),r("h5",[t._v("JAVASCRIPT / JQUERY")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-front",attrs:{"data-percent":"70%"}})]),t._v(" "),r("h5",[t._v("BOOTSTRAP")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-front",attrs:{"data-percent":"55%"}})]),t._v(" "),r("h5",[t._v("VUE.JS(Learning...)")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-front",attrs:{"data-percent":"30%"}})]),t._v(" "),r("h5",[t._v("ANDROID STUDIO(Java)")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-front",attrs:{"data-percent":"70%"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"back-end visibility"},[r("div",{staticClass:"skill-text"},[r("h2",[t._v("BACK-END")]),t._v(" "),r("p",[t._v("\n        Javascript/Firebase的Authentication、Database、Storge及架設Hosting等都相當熟悉。\n        "),r("br"),t._v(" "),r("br"),t._v("PHP/Mysql的新增/刪除/修改/查詢及資料表關聯都有撰寫過。\n        "),r("br"),t._v(" "),r("br"),t._v("Python則是在課程中學習到並且透過比賽更加深入了解。\n        "),r("br")])]),t._v(" "),r("div",{staticClass:"skill-chart"},[r("h5",[t._v("Javascript/ FIREBASE")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-back",attrs:{"data-percent":"70%"}})]),t._v(" "),r("h5",[t._v("PHP/ MYSQL")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-back",attrs:{"data-percent":"45%"}})]),t._v(" "),r("h5",[t._v("PYTHON")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-back",attrs:{"data-percent":"60%"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Other visibility"},[r("div",{staticClass:"skill-text"},[r("h2",[t._v("OTHER")]),t._v(" "),r("p",[t._v("\n        熟悉Github/Gitlab基本的指令操作\n        "),r("br"),t._v("ex.git branch/checkout/status/commit/push等等。\n        "),r("br"),t._v(" "),r("br"),t._v("API處於自學中，嘗試利用open data做基本的測試。\n        "),r("br"),t._v(" "),r("br"),t._v("Selenium自動化測試，曾使用Katalon寫過類似自動打卡的小成品，除了WebUI.click、waitForElementVisible、setText等特定函式外，也使用的迴圈陣列等等去執行程式。\n      ")])]),t._v(" "),r("div",{staticClass:"skill-chart"},[r("h5",[t._v("GITHUB / GITLAB")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-other",attrs:{"data-percent":"60%"}})]),t._v(" "),r("h5",[t._v("Restful API串接 (Learning...)")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-other",attrs:{"data-percent":"30%"}})]),t._v(" "),r("h5",[t._v("SELENIUM")]),t._v(" "),r("div",{staticClass:"bar"},[r("div",{staticClass:"bar-other",attrs:{"data-percent":"60%"}})])])])}],!1,null,null,null).exports,callme:Object(v.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"callme",attrs:{id:"callme"}},[r("div",{staticClass:"item-group"},[r("div",{staticClass:"item"},[r("div",{staticClass:"cpic"},[r("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/fir-cyut.appspot.com/o/myFirst%2Ffacebook.png?alt=media&token=5d7d7c08-753d-482e-b67e-d9aa28098392"}})]),t._v(" "),r("div",{staticClass:"calltext"},[r("p",[t._v("賴哲彥")])])]),t._v(" "),r("div",{staticClass:"item"},[r("div",{staticClass:"cpic"},[r("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/fir-cyut.appspot.com/o/myFirst%2Fphone.png?alt=media&token=d9512cfc-13c0-4d24-aee0-567ea3c543d2"}})]),t._v(" "),r("div",{staticClass:"calltext"},[r("p",[t._v("0979919834")])])]),t._v(" "),r("div",{staticClass:"item"},[r("div",{staticClass:"cpic"},[r("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/fir-cyut.appspot.com/o/myFirst%2Femail.png?alt=media&token=de606c78-33da-453a-aed2-c80af611c272"}})]),t._v(" "),r("div",{staticClass:"calltext"},[r("p",[t._v("zx2515296964@gmail.com")])])])]),t._v(" "),r("div",{staticClass:"contact-bottom"},[r("a",{attrs:{href:"#"}},[t._v("Home")]),t._v(" "),r("a",{attrs:{href:"#myData"}},[t._v("About")]),t._v(" "),r("a",{attrs:{href:"#myExperience"}},[t._v("Experience")]),t._v(" "),r("a",{attrs:{href:"#myskill"}},[t._v("Skill")]),t._v(" "),r("a",{attrs:{href:"#callme"}},[t._v("Contact")])])])}],!1,null,null,null).exports}},x=Object(v.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("navbar"),t._v(" "),r("myself"),t._v(" "),r("mydata"),t._v(" "),r("hr"),t._v(" "),r("myExperience"),t._v(" "),r("hr"),t._v(" "),r("myskill"),t._v(" "),r("callme"),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"fb-root"}},[e("div",{staticClass:"fb-customerchat",attrs:{attribution:"setup_tool",logged_out_greeting:"嗨~有問題可以私訊我喔！",logged_in_greeting:"您好，很高興為您服務"}})])}],!1,null,null,null);e.default=x.exports}}]);