webpackJsonp([0],{"++G2":function(t,i,s){t.exports=s.p+"img/pick-4.dba6b03.png"},"+JkQ":function(t,i,s){"use strict";var e=s("PcyS"),a=s("O7IV"),n=s("smZX");i.a={head:{bodyAttrs:{class:"main-page",id:"page"}},data:function(){return{isPreload:!this.$device.isMobile}},components:{TopVideo:e.a,AppHeader:a.a,AppFooter:n.a},mounted:function(){this.$device.isMobile||(this.$nextTick(this.preloadAnim),this.$nextTick(this.firstAnim),this.$nextTick(this.secondAnim),this.$nextTick(this.thirdAnim),this.$nextTick(this.fourthAnim),this.$nextTick(this.fifthAnim))},methods:{preloadAnim:function(){var t=document.querySelector(".dotapick-section"),i=(new TimelineMax).to(".dotapick-section__parallax",.3,{opacity:1}),s=new this.$scrollmagic.Scene({triggerElement:t,triggerHook:.8,reverse:!1}).setTween(i);this.$ksvuescr.$emit("addScene","preloadAnim",s)},firstAnim:function(){var t=document.querySelector(".dotapick-section"),i=t.offsetHeight,s=(new TimelineMax).add([TweenMax.to(".liquid",1,{top:0,ease:Linear.easeNone}),TweenMax.to(".newbee",1,{top:"-10%",ease:Linear.easeNone}),TweenMax.to(".team-secret",1,{top:"-10%",ease:Linear.easeNone}),TweenMax.to(".empire",1,{top:"-10%",ease:Linear.easeNone}),TweenMax.to(".og",1,{top:"-10%",ease:Linear.easeNone}),TweenMax.to(".navi",1,{top:"-10%",ease:Linear.easeNone})]),e=new this.$scrollmagic.Scene({triggerElement:t,triggerHook:"onEnter",duration:i}).setTween(s);this.$ksvuescr.$emit("addScene","firstAnim",e)},secondAnim:function(){var t=document.querySelector(".dotapick-section .container"),i=(new TimelineMax).fromTo(".dotapick-section .main-screen",.3,{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}).fromTo(".screen--second img",.4,{width:"0%",transform:"translate(100%, 0) rotate(-20deg)",opacity:0},{width:"100%",transform:"rotate(0)",opacity:1,ease:Back.easeOut.config(1.7)}).fromTo(".screen--third img",.4,{width:"0%",transform:"translate(100%, 0) rotate(20deg)",opacity:0},{width:"100%",transform:"translate(0, 0) rotate(0)",opacity:1,ease:Back.easeOut.config(1.7)}).fromTo(".screen--first img",.4,{top:"-100%",opacity:0},{top:"0",opacity:1}),s=new this.$scrollmagic.Scene({triggerElement:t,reverse:!1}).setTween(i);this.$ksvuescr.$emit("addScene","secondAnim",s)},thirdAnim:function(){var t=document.querySelector(".quote-team"),i=(new TimelineMax).add([TweenMax.fromTo(".quote-team .animated-img",.4,{width:"100%",opacity:0},{width:"130%",opacity:1}),TweenMax.fromTo(".quote-team .animated-img",.4,{bottom:"102px"},{bottom:"62px",ease:Back.easeIn.config(.3)})]),s=new this.$scrollmagic.Scene({triggerElement:t,reverse:!1}).setTween(i);this.$ksvuescr.$emit("addScene","thirdAnim",s)},fourthAnim:function(){var t=document.querySelector(".player-statistic"),i={val:0},s=document.getElementById("js-counter"),e=(new TimelineMax).add([TweenMax.fromTo(".single-player-img",.4,{transform:"rotateY(90deg)",opacity:0},{transform:"rotateY(0deg)",opacity:1}),TweenMax.fromTo(".single-player-img img",.4,{opacity:0},{opacity:1,delay:.2})]).add([TweenMax.fromTo(".js-draw",.8,{"stroke-dashoffset":"452px"},{"stroke-dashoffset":"181px"}),TweenMax.fromTo(s,.4,{opacity:0},{opacity:1}),TweenLite.to(i,.8,{val:63,roundProps:"val",onUpdate:function(){return s.innerHTML=i.val+"%"},ease:Linear.easeNone}),TweenMax.fromTo(".js-anim-list",.4,{opacity:0},{opacity:1}),TweenMax.to(".js-anim-list__item",.4,{transform:"translateX(0)"}),TweenMax.fromTo(".js-slide-in-height span",.4,{height:"0"},{height:"24px"}),TweenMax.fromTo(".js-slide-in-left span",.4,{xPercent:-100},{xPercent:0}),TweenMax.staggerFromTo(".js-slide-in-top span",.2,{yPercent:-100},{yPercent:0},.05)]),a=new this.$scrollmagic.Scene({triggerElement:t,reverse:!1}).setTween(e);this.$ksvuescr.$emit("addScene","fourthAnim",a)},fifthAnim:function(){var t=document.querySelector(".coming-soon-section"),i=(new TimelineMax).add([TweenMax.staggerFromTo(".js-coming-soon-img",.4,{yPercent:"20%",opacity:0},{yPercent:"0%",opacity:1},.25)]),s=new this.$scrollmagic.Scene({triggerElement:t,triggerHook:.3,reverse:!1}).setTween(i);this.$ksvuescr.$emit("addScene","fifthAnim",s)}}}},"/TYz":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("+JkQ"),a=s("3CE2"),n=s("VU/8")(e.a,a.a,!1,null,null,null);n.options.__file="pages/index.vue",i.default=n.exports},"0lMm":function(t,i,s){t.exports=s.p+"img/ban-3.19a27d7.png"},"19XE":function(t,i,s){t.exports=s.p+"videos/main-mobile.c7324a2.webm"},"3CE2":function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"top-bg"},[e("top-video",{on:{timer1:function(i){t.isPreload=!1}}})],1),e("app-header"),e("section",{staticClass:"top-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"top-section__text"},[e("div",{staticClass:"transitioned",class:{preload:t.isPreload}},[e("h2",[t._v("Pick wisely")]),t._m(0),t._m(1)])])])]),e("section",{staticClass:"dotapick-section"},[t._m(2),e("div",{staticClass:"container"},[t._m(3),e("div",{staticClass:"dotapick-section__screens"},[e("img",{staticClass:"main-screen",attrs:{src:s("BZ/U"),alt:"Dota 2 Pick"}}),t._m(4),e("div",{staticClass:"screen screen--second"},[e("img",{attrs:{src:t.$device.isMobile?s("8uKc"):s("MrHr"),alt:"Dota 2 Pick"}})]),e("div",{staticClass:"screen screen--third"},[e("img",{attrs:{src:t.$device.isMobile?s("ThD6"):s("lj5B"),alt:"Dota 2 Pick"}})])]),t._m(5)])]),e("section",{staticClass:"how-it-works-section"},[e("div",{staticClass:"smoke-video-container"},[e("video",{attrs:{muted:"",loop:"",autoplay:""},domProps:{muted:!0}},[e("source",{attrs:{src:s("M8IM"),type:"video/webm"}}),e("source",{attrs:{src:s("kdXn"),type:"video/mp4"}})])]),e("div",{staticClass:"container"},[e("h2",[t._v("How it works?")]),e("div",{staticClass:"step first"},[t._m(6),e("img",{attrs:{src:t.$device.isMobile?s("7ctM"):s("feDm"),alt:"Dota 2 Pick"}})]),t._m(7),t._m(8),t._m(9),e("div",{staticClass:"single-player clearfix"},[e("div",{staticClass:"pull-left"},[e("div",{staticClass:"single-player-img"},[e("div",{staticClass:"single-player-img__bg"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("ellipse",{attrs:{id:"a",cx:"75.991",cy:"76.138",rx:"75.991",ry:"76.138"}}),e("filter",{attrs:{x:"-.3%",y:"-.3%",width:"100.7%",height:"100.7%",filterUnits:"objectBoundingBox",id:"b"}},[e("feOffset",{attrs:{dx:"1",in:"SourceAlpha",result:"shadowOffsetInner1"}}),e("feComposite",{attrs:{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}}),e("feColorMatrix",{attrs:{values:"0 0 0 0 0.521630527 0 0 0 0 0.521630527 0 0 0 0 0.521630527 0 0 0 0.197407156 0",in:"shadowInnerInner1"}})],1)]),e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("use",{attrs:{fill:"#121212","xlink:href":"#a"}}),e("use",{attrs:{fill:"#000",filter:"url(#b)","xlink:href":"#a"}})])])]),e("div",{staticClass:"single-player-img__progress"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","data-value":"17%"}},[e("defs",[e("linearGradient",{attrs:{x1:"50%",y1:"0%",x2:"5.624%",y2:"73.217%",id:"c"}},[e("stop",{attrs:{"stop-color":"#92EB00",offset:"0%"}}),e("stop",{attrs:{"stop-color":"#07E85E",offset:"100%"}})],1)],1),e("circle",{staticClass:"draw js-draw",attrs:{stroke:"url(#c)",cx:"77",cy:"77",r:"72"}})])]),e("img",{attrs:{src:s("VhzM"),alt:"Dota 2 Player"}})]),e("p",{attrs:{id:"js-counter"}},[t._v("0%")])]),t._m(10)])])]),e("section",{staticClass:"coming-soon-section"},[e("div",{staticClass:"container"},[t._m(11),e("div",{staticClass:"inline-block"},[e("div",{staticClass:"first-img js-coming-soon-img"},[e("img",{attrs:{src:t.$device.isMobile?s("mjkv"):s("doMa"),alt:"Dota 2 Pick"}})]),e("div",{staticClass:"second-img js-coming-soon-img"},[e("img",{attrs:{src:t.$device.isMobile?s("AcVw"):s("9bUf"),alt:"Dota 2 Pick"}})])])])]),e("app-footer")],1)},a=[function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("The most powerful and clear statistic instrument for "),i("strong",[this._v(" Dota 2.")]),this._v(" Wanna know "),i("strong",[this._v(" Miracle’s")]),this._v(" closest pick? We’ve already known)")])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"button with-arrow transitioned",attrs:{href:"#"}},[i("span",[this._v("Start free trial")]),i("b",{staticClass:"ico"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"dotapick-section__parallax"},[i("div",{staticClass:"logo liquid"},[i("img",{attrs:{src:s("wc/s"),alt:"Team Liquid"}})]),i("div",{staticClass:"logo newbee"},[i("img",{attrs:{src:s("dNuk"),alt:"Team Liquid"}})]),i("div",{staticClass:"logo team-secret"},[i("img",{attrs:{src:s("uEhe"),alt:"Team Secret"}})]),i("div",{staticClass:"logo empire"},[i("img",{attrs:{src:s("Flp1"),alt:"Team Empire"}})]),i("div",{staticClass:"logo og"},[i("img",{attrs:{src:s("EMMH"),alt:"Team OG"}})]),i("div",{staticClass:"logo navi"},[i("img",{attrs:{src:s("pF+7"),alt:"Team NAVI"}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"text-center"},[i("h3",[this._v("Dota 2 "),i("span",[this._v("Pick")])]),i("h4",[this._v("Now you know everyone’s pick")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"screen screen--first"},[i("img",{attrs:{src:s("9bUf"),alt:"Dota 2 Pick"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"dotapick-section__quote clearfix"},[i("div",{staticClass:"pull-left"},[i("div",{staticClass:"quote-block"},[i("div",{staticClass:"quote"},[i("h4",[i("q",[this._v("With Dota 2 Pick I can make some team prediction and  also be sure of team’s picks...")])])]),i("div",{staticClass:"author"},[i("img",{attrs:{src:s("3uWb"),alt:"V1lat"}}),i("h5",[this._v("V1lat")]),i("p",[this._v("Commentator")])])])]),i("div",{staticClass:"pull-right"},[i("div",{staticClass:"quote-team"},[i("img",{staticClass:"main-img",attrs:{src:s("XIYf"),alt:"Dota 2 Pick"}}),i("div",{staticClass:"ricki ricki--back"}),i("img",{staticClass:"animated-img",attrs:{src:s("BBpu"),alt:"Dota 2 Pick"}}),i("div",{staticClass:"ricki ricki--front"})])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("b",{staticClass:"ico"},[this._v("1")]),this._v(" First of all you have to choose "),i("br"),this._v(" teams for the both sides")])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"heroes-pick clearfix"},[i("div",{staticClass:"pull-right"},[i("div",{staticClass:"step second"},[i("p",[i("b",{staticClass:"ico"},[this._v("2")]),this._v(" Now you can pick and ban any hero from the buckets. Be free to experiment with picks, you can always change your mind.")])])]),i("div",{staticClass:"pull-left"},[i("img",{attrs:{src:s("vbCj"),alt:"Dota 2 Pick"}})]),i("div",{staticClass:"screen screen--secret"},[i("img",{attrs:{src:s("yQvl"),alt:"Dota 2 Pick"}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"player-statistic clearfix"},[i("div",{staticClass:"pull-left"},[i("div",{staticClass:"step third"},[i("p",[i("b",{staticClass:"ico"},[this._v("3")]),this._v(" Now you can pick and ban any hero from the buckets. Be free to experiment with picks, you can always change your mind.")])])]),i("div",{staticClass:"pull-right"},[i("div",{staticClass:"picks-bans"},[i("div",{staticClass:"inline-block pick"},[i("div",{staticClass:"inline-block pick__text"},[this._v("Picks")]),i("div",{staticClass:"inline-block js-anim-list"},[i("div",{staticClass:"inline-block pick__item js-anim-list__item"},[i("img",{attrs:{src:s("3y0v"),alt:"Dota 2 Pick"}})]),i("div",{staticClass:"inline-block pick__item js-anim-list__item"},[i("img",{attrs:{src:s("Hprt"),alt:"Dota 2 Pick"}})]),i("div",{staticClass:"inline-block pick__item js-anim-list__item"},[i("img",{attrs:{src:s("vubR"),alt:"Dota 2 Pick"}})]),i("div",{staticClass:"inline-block pick__item js-anim-list__item"},[i("img",{attrs:{src:s("++G2"),alt:"Dota 2 Pick"}})]),i("div",{staticClass:"inline-block pick__item js-anim-list__item"},[i("img",{attrs:{src:s("GXia"),alt:"Dota 2 Pick"}})])])]),i("div",{staticClass:"inline-block ban"},[i("div",{staticClass:"inline-block ban__text"},[this._v("Bans")]),i("div",{staticClass:"inline-block js-anim-list"},[i("div",{staticClass:"inline-block ban__item js-anim-list__item"},[i("img",{attrs:{src:s("OrPR"),alt:"Dota 2 Pick"}})]),i("div",{staticClass:"inline-block ban__item js-anim-list__item"},[i("img",{attrs:{src:s("IdL6"),alt:"Dota 2 Pick"}})]),i("div",{staticClass:"inline-block ban__item js-anim-list__item"},[i("img",{attrs:{src:s("0lMm"),alt:"Dota 2 Pick"}})]),i("div",{staticClass:"inline-block ban__item js-anim-list__item"},[i("img",{attrs:{src:s("wAs/"),alt:"Dota 2 Pick"}})]),i("div",{staticClass:"inline-block ban__item js-anim-list__item"},[i("img",{attrs:{src:s("JB7j"),alt:"Dota 2 Pick"}})]),i("div",{staticClass:"inline-block ban__item js-anim-list__item"},[i("img",{attrs:{src:s("J8EA"),alt:"Dota 2 Pick"}})])])])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"single-playre__mobile"},[i("img",{attrs:{src:s("p8pq"),alt:"How it works?"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pull-right"},[e("div",{staticClass:"name-status"},[e("div",{staticClass:"player-name inline-block js-slide-in-left"},[e("span",[t._v("Fata")])]),e("div",{staticClass:"player-status inline-block js-slide-in-left"},[e("span",[t._v("Offlane")])])]),e("div",{staticClass:"top-line"},[e("div",{staticClass:"table-cell inline-block creeps-cell"},[e("div",{staticClass:"cell-heading creeps"},[t._v("Creeps")]),e("div",{staticClass:"js-slide-in-height"},[e("span",[t._v("863")])])]),e("div",{staticClass:"table-cell inline-block"},[e("div",{staticClass:"cell-heading"},[t._v("Games")]),e("div",{staticClass:"js-slide-in-top"},[e("span",[t._v("1347")])])]),e("div",{staticClass:"table-cell inline-block"},[e("div",{staticClass:"cell-heading"},[t._v("Wins")]),e("div",{staticClass:"js-slide-in-top"},[e("span",[t._v("68,3%")])])]),e("div",{staticClass:"table-cell inline-block"},[e("div",{staticClass:"cell-heading"},[t._v("GPM")]),e("div",{staticClass:"js-slide-in-top"},[e("span",[t._v("567")])])]),e("div",{staticClass:"table-cell inline-block"},[e("div",{staticClass:"cell-heading"},[t._v("XPM")]),e("div",{staticClass:"js-slide-in-top"},[e("span",[t._v("786")])])])]),e("div",{staticClass:"bottom-line"},[e("div",{staticClass:"table-cell inline-block wards-cell"},[e("div",{staticClass:"cell-heading wards"},[t._v("Wards")]),e("div",{staticClass:"js-slide-in-height"},[e("span",[t._v("13")])])]),e("div",{staticClass:"table-cell inline-block"},[e("div",{staticClass:"cell-heading"},[t._v("Hero")]),e("div",{staticClass:"js-slide-in-top"},[e("span",[t._v("Abaddon")])])]),e("div",{staticClass:"table-cell inline-block"},[e("div",{staticClass:"cell-heading"},[t._v("KDA")]),e("div",{staticClass:"js-slide-in-top"},[e("span",[t._v("2,67")])])]),e("div",{staticClass:"table-cell inline-block"},[e("div",{staticClass:"cell-heading"},[t._v("ARM")]),e("div",{staticClass:"js-slide-in-top"},[e("span",[t._v("345")])])]),e("div",{staticClass:"table-cell inline-block"},[e("div",{staticClass:"cell-heading"},[t._v("Damage")]),e("div",{staticClass:"js-slide-in-top"},[e("span",[t._v("34 500")])])])]),e("div",{staticClass:"item-line js-anim-list"},[e("div",{staticClass:"inline-block player-item js-anim-list__item"},[e("img",{attrs:{src:s("tOWG"),alt:"Dota 2 Item"}}),e("span",[t._v("92%")])]),e("div",{staticClass:"inline-block player-item js-anim-list__item"},[e("img",{attrs:{src:s("Td2s"),alt:"Dota 2 Pick"}}),e("span",[t._v("71%")])]),e("div",{staticClass:"inline-block player-item js-anim-list__item"},[e("img",{attrs:{src:s("6xSz"),alt:"Dota 2 Pick"}}),e("span",[t._v("63%")])]),e("div",{staticClass:"inline-block player-item js-anim-list__item"},[e("img",{attrs:{src:s("Lr92"),alt:"Dota 2 Pick"}}),e("span",[t._v("87%")])]),e("div",{staticClass:"inline-block player-item js-anim-list__item"},[e("img",{attrs:{src:s("HAkF"),alt:"Dota 2 Pick"}}),e("span",[t._v("89%")])]),e("div",{staticClass:"inline-block player-item js-anim-list__item"},[e("img",{attrs:{src:s("UB4c"),alt:"Dota 2 Pick"}})])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"inline-block"},[i("div",{staticClass:"text-container"},[i("h3",[this._v("Coming soon...")]),i("p",[this._v("Check the item builds of your favorite players and see wether the "),i("b",[this._v("XPM")]),this._v(" and "),i("b",[this._v("GOLD")]),this._v(" are close to their usual positions")])]),i("img",{attrs:{src:s("4dnd"),alt:"Dota 2 Pick"}})])}];e._withStripped=!0;var n={render:e,staticRenderFns:a};i.a=n},"3r9O":function(t,i,s){(t.exports=s("FZ+f")(!1)).push([t.i,".subscription{max-width:480px;margin:50px auto 0}@media (max-width:640px){.subscription button{height:100%;padding-right:17px}.subscription .subscription-form input{padding-right:50px}}.subscription-form{position:relative;-webkit-box-shadow:0 3px 12px 0 rgba(0,0,0,.1);box-shadow:0 3px 12px 0 rgba(0,0,0,.1);border-radius:50px;overflow:hidden}.subscription-form input{width:100%;padding-right:150px}.subscription-form button{position:absolute;right:0;top:0}",""])},"3uWb":function(t,i,s){t.exports=s.p+"img/v1lat.3d649eb.png"},"3y0v":function(t,i,s){t.exports=s.p+"img/pick-1.a5fcff7.png"},"4dnd":function(t,i,s){t.exports=s.p+"img/earth-spirit.6a7a0a9.png"},"5jXS":function(t,i,s){"use strict";i.a={mounted:function(){var t=this,i=this.$el;i.load(),i.play(),i.ontimeupdate=function(){i.currentTime>=3.5&&t.$emit("timer1")}}}},"6ajy":function(t,i,s){t.exports=s.p+"videos/main.6f6e6f6.webm"},"6xSz":function(t,i,s){t.exports=s.p+"img/item-3.4450ef1.png"},"7ctM":function(t,i,s){t.exports=s.p+"img/how-it-works-first-mobile.bb39419.png"},"84/t":function(t,i,s){t.exports=s.p+"img/1-poster.0242d82.png"},"8uKc":function(t,i,s){t.exports=s.p+"img/player-mobile.3e6afb8.png"},"9bUf":function(t,i,s){t.exports=s.p+"img/storymode.2ee627a.png"},"9sNs":function(t,i,s){"use strict";var e=function(){var t=this.$createElement,i=this._self._c||t;return i("ul",{staticClass:"socials-list"},this._l(this.socials,function(t){return i("li",{staticClass:"inline-block",attrs:{title:t.title}},[i("a",{attrs:{href:t.url}},[i("img",{attrs:{src:t.ico,alt:t.title}})])])}))};e._withStripped=!0;var a={render:e,staticRenderFns:[]};i.a=a},AVHs:function(t,i,s){"use strict";i.a={data:function(){return{socials:[{title:"Dota",url:"http://dota2.com/",ico:"/socials/soc-1.svg"},{title:"Maincast",url:"#",ico:"/socials/soc-2.svg"},{title:"Dota Pick",url:"#",ico:"/socials/soc-3.svg"},{title:"Google Plus",url:"https://plus.google.com/",ico:"/socials/soc-4.svg"},{title:"Facebook",url:"https://facebook.com/",ico:"/socials/soc-5.svg"},{title:"Reddit",url:"https://www.reddit.com/",ico:"/socials/soc-6.svg"}]}}}},AcVw:function(t,i,s){t.exports=s.p+"img/storymode-mobile.f04312d.png"},Apxz:function(t,i,s){"use strict";var e=function(){var t=this.$createElement;this._self._c;return this._m(0)},a=[function(){var t=this.$createElement,i=this._self._c||t;return i("header",{staticClass:"main-header"},[i("div",{staticClass:"container"},[i("a",{staticClass:"main-logo",attrs:{href:"/"}},[i("img",{attrs:{src:s("LtId"),alt:"Dota 2 Pick"}})])])])}];e._withStripped=!0;var n={render:e,staticRenderFns:a};i.a=n},BBpu:function(t,i,s){t.exports=s.p+"img/quote-team-animated.445cf3e.png"},"BZ/U":function(t,i,s){t.exports=s.p+"img/dota-pick-img.7712505.jpg"},DQjC:function(t,i,s){"use strict";var e=s("AVHs"),a=s("9sNs"),n=!1;var o=function(t){n||s("Dg6i")},r=s("VU/8")(e.a,a.a,!1,o,null,null);r.options.__file="components/Socials.vue",i.a=r.exports},Dg6i:function(t,i,s){var e=s("pVhv");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("3cba5c0f",e,!1,{sourceMap:!1})},E9Kz:function(t,i,s){var e=s("reaM");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("d18c1040",e,!1,{sourceMap:!1})},EMMH:function(t,i,s){t.exports=s.p+"img/og.eac6750.png"},Flp1:function(t,i,s){t.exports=s.p+"img/empire.a1d9659.png"},GXia:function(t,i,s){t.exports=s.p+"img/pick-5.e6e2ba0.png"},HAkF:function(t,i,s){t.exports=s.p+"img/item-5.15e2403.png"},Hprt:function(t,i,s){t.exports=s.p+"img/pick-2.8e29dc2.png"},IdL6:function(t,i,s){t.exports=s.p+"img/ban-2.f9fe2a0.png"},IyZw:function(t,i,s){"use strict";var e=function(){var t=this.$createElement,i=this._self._c||t;return i("video",{staticClass:"top-bg__video",attrs:{id:"top-video",muted:"",poster:s("84/t")},domProps:{muted:!0}},[i("source",{attrs:{src:this.$device.isMobile?s("19XE"):s("6ajy"),type:"video/webm"}}),i("source",{attrs:{src:this.$device.isMobile?s("jkJn"):s("QMYu"),type:"video/mp4"}})])};e._withStripped=!0;var a={render:e,staticRenderFns:[]};i.a=a},J8EA:function(t,i,s){t.exports=s.p+"img/ban-6.ffd6a9c.png"},JB7j:function(t,i,s){t.exports=s.p+"img/ban-5.44c66eb.png"},Lr92:function(t,i,s){t.exports=s.p+"img/item-4.0e82abe.png"},LscD:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"subscription"},[t.visible?s("form",{staticClass:"subscription-form",on:{submit:function(i){return i.preventDefault(),t.subscribe(i)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Enter E-mail",name:"email"},domProps:{value:t.email},on:{input:function(i){i.target.composing||(t.email=i.target.value)}}}),s("button",{class:{"with-arrow":t.$device.isMobile},attrs:{type:"submit"}},[t.$device.isMobile?t._e():s("span",[t._v("Subscribe")]),s("b",{staticClass:"ico"})])]):t._e(),s("transition",{attrs:{name:"fade"}},[t.visible?t._e():s("h4",[t._v("Thanks for Subscribing!")])])],1)};e._withStripped=!0;var a={render:e,staticRenderFns:[]};i.a=a},LtId:function(t,i,s){t.exports=s.p+"img/logo.20d279e.svg"},M8IM:function(t,i,s){t.exports=s.p+"videos/smoke.39243fd.webm"},MrHr:function(t,i,s){t.exports=s.p+"img/player.5df8216.png"},O7IV:function(t,i,s){"use strict";var e=s("Apxz"),a=!1;var n=function(t){a||s("sF+8")},o=s("VU/8")(null,e.a,!1,n,null,null);o.options.__file="components/AppHeader.vue",i.a=o.exports},OrPR:function(t,i,s){t.exports=s.p+"img/ban-1.34a4516.png"},PcyS:function(t,i,s){"use strict";var e=s("5jXS"),a=s("IyZw"),n=s("VU/8")(e.a,a.a,!1,null,null,null);n.options.__file="components/TopVideo.vue",i.a=n.exports},QMYu:function(t,i,s){t.exports=s.p+"videos/main.ebdba35.mp4"},Td2s:function(t,i,s){t.exports=s.p+"img/item-2.95c6251.png"},ThD6:function(t,i,s){t.exports=s.p+"img/team-mobile.4fe3196.png"},UB4c:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAAAXNSR0IArs4c6QAAAPZJREFUaAXtmtENgzAMRJ1gwSpM1p06SSfpLkhECQ5VJ7j7qKtDKuLnTvZ7/XTZ9/15nuejtWbZnlKKbdtmHsO34zgsFrExRqo9aq33vB7vmH1Y7z3dEnODOftnlXufvC8t8SvuZEImiAT0dyLChKpkAsJHDMsEESZUJRMQPmJYJogwoSqZgPARwzJBhAlVyQSEjxiWCSJMqEomIHzEsEwQYUJVMgHhI4ZlgggTqpIJCB8xLBNEmFCVTED4iGGZIMKEqmQCwkcM/42JOFYpNn/Znu/MHh91WRZz93QHKvPKZs7t67q+Y5FX3A31+9wmkY6Yu4QAvwAgqSuOdQQEHQAAAABJRU5ErkJggg=="},VhzM:function(t,i,s){t.exports=s.p+"img/player-hero.edf74ca.png"},XIYf:function(t,i,s){t.exports=s.p+"img/quote-team.f6aeec6.png"},dNuk:function(t,i,s){t.exports=s.p+"img/newbee.42a6331.png"},doMa:function(t,i,s){t.exports=s.p+"img/coming-soon-first.9e7bf2d.png"},feDm:function(t,i,s){t.exports=s.p+"img/how-it-works-first.6d24b6e.png"},iEPQ:function(t,i,s){var e=s("3r9O");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("b9aceda0",e,!1,{sourceMap:!1})},jkJn:function(t,i,s){t.exports=s.p+"videos/main-mobile.180d060.mp4"},kdXn:function(t,i,s){t.exports=s.p+"videos/smoke.23f1e9d.mp4"},lj5B:function(t,i,s){t.exports=s.p+"img/team.deb9da9.png"},mjkv:function(t,i,s){t.exports=s.p+"img/coming-soon-first-mobile.6d73537.png"},mxXf:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("footer",{staticClass:"main-footer"},[s("div",{staticClass:"main-footer__content"},[t._m(0),s("p",[t._v("Subscribe to E-mail notifications.")]),t._m(1),s("subscribe-form"),s("div",{staticClass:"copyright"},[s("p",[s("span",[t._v("© ")]),s("b",[t._v(t._s(t.year)+" Dota 2 Picker")]),t._v(" All rights reserved.")]),t._m(2)])],1)])};e._withStripped=!0;var a={render:e,staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("h3",[this._v("Get it "),i("strong",[this._v("FREE")]),this._v(" now")])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("First "),i("strong",[this._v("10,000 ")]),this._v(" followers will get "),i("strong",[this._v("Dota 2 ")]),this._v(" Pick for free.")])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("Designed by "),i("a",{attrs:{href:"http://webmil.eu/",target:"_blank"}},[this._v("Webmil")])])}]};i.a=a},"p/LR":function(t,i,s){"use strict";i.a={data:function(){return{visible:!0,email:null}},methods:{subscribe:function(){this.email?(alert(this.email),this.visible=!1):alert("Enter email")}}}},p8pq:function(t,i,s){t.exports=s.p+"img/single-player-mobile.b39476b.png"},"pF+7":function(t,i,s){t.exports=s.p+"img/navi.2ab67de.png"},pVhv:function(t,i,s){(t.exports=s("FZ+f")(!1)).push([t.i,'.socials-list{margin-top:100px}@media (max-width:640px){.socials-list{width:300px;margin:60px auto 0}}.socials-list li{margin-right:60px}.socials-list li:last-child{margin-right:0}@media (max-width:640px){.socials-list li{margin-right:0;margin:0 24px 35px}.socials-list li:last-child{margin-right:30px}}.socials-list a{display:block}.socials-list a:hover{opacity:1;filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.8" /><feFuncG type="linear" slope="0.8" /><feFuncB type="linear" slope="0.8" /></feComponentTransfer></filter></svg>#filter\');-webkit-filter:brightness(80%);filter:brightness(80%)}',""])},qP1a:function(t,i,s){"use strict";var e=s("p/LR"),a=s("LscD"),n=!1;var o=function(t){n||s("iEPQ")},r=s("VU/8")(e.a,a.a,!1,o,null,null);r.options.__file="components/SubcribeForm.vue",i.a=r.exports},reaM:function(t,i,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},"sF+8":function(t,i,s){var e=s("tgUb");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("48ab208e",e,!1,{sourceMap:!1})},smZX:function(t,i,s){"use strict";var e=s("wWsh"),a=s("mxXf"),n=!1;var o=function(t){n||s("E9Kz")},r=s("VU/8")(e.a,a.a,!1,o,null,null);r.options.__file="components/AppFooter.vue",i.a=r.exports},tOWG:function(t,i,s){t.exports=s.p+"img/item-1.4ec7f4e.png"},tgUb:function(t,i,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},uEhe:function(t,i,s){t.exports=s.p+"img/teamsecret.ff29a47.png"},vbCj:function(t,i,s){t.exports=s.p+"img/heroes.0a3618e.png"},vubR:function(t,i,s){t.exports=s.p+"img/pick-3.e42d612.png"},"wAs/":function(t,i,s){t.exports=s.p+"img/ban-4.f44568d.png"},wWsh:function(t,i,s){"use strict";var e=s("qP1a"),a=s("DQjC");i.a={data:function(){return{year:(new Date).getFullYear()}},components:{SubscribeForm:e.a,Socials:a.a}}},"wc/s":function(t,i,s){t.exports=s.p+"img/liquid.24c4b3e.png"},yQvl:function(t,i,s){t.exports=s.p+"img/team-secret.5e8e0ef.png"}});