webpackJsonp([1],{"5RqA":function(t,e){},"7Auq":function(t,e){},B7at:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("t7J3")},null,null).exports,r=n("/ocq"),o={name:"IndexHeader",data:function(){return{difficulty:"难度 :",levels:[{id:"0001",content:"初级"},{id:"0002",content:"中级"},{id:"0003",content:"高级"}],questionClassification:[{id:"0001",content:"思考题"},{id:"0001",content:"选择题"},{id:"0002",content:"综合题"},{id:"0003",content:"功能题"}]}},methods:{addEventListenerNavClick:function(t){console.log(t.content),alert("此部分功能尚未扩展")}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-shadow"}),t._v(" "),n("header",{staticClass:"header"}),t._v(" "),n("div",{staticClass:"top-nav"},[n("ul",{staticClass:"top-nav-ul"},[n("div",[n("li",{staticClass:"top-nav-ul-li level0"},[t._v(t._s(t.difficulty))]),t._v(" "),t._l(t.levels,function(e,i){return n("li",{key:i.id,staticClass:"top-nav-ul-li level1",on:{click:function(n){return t.addEventListenerNavClick(e)}}},[t._v(t._s(e.content))])})],2),t._v(" "),n("div",t._l(t.questionClassification,function(e,i){return n("li",{key:i.id,staticClass:"top-nav-ul-li level4",on:{click:function(n){return t.addEventListenerNavClick(e)}}},[t._v(t._s(e.content))])}),0)])])])},staticRenderFns:[]};var c=n("VU/8")(o,l,!1,function(t){n("B7at")},"data-v-07d67232",null).exports,d={name:"IndexKnowledge",props:{levels:Array},data:function(){return{classification:"分类："}},methods:{addEventListenerNavClick:function(t){console.log(t.title)}},mounted:function(){}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"top-knowledge-ul"},[n("li",{staticClass:"top-knowledge-ul-li",staticStyle:{background:"darkgray",color:"white"}},[t._v(t._s(t.classification))]),t._v(" "),t._l(t.levels,function(e,i){return n("li",{key:i.id,staticClass:"top-knowledge-ul-li",on:{click:function(n){return t.addEventListenerNavClick(e)}}},[t._v(t._s(e.title))])})],2)])},staticRenderFns:[]};var v=n("VU/8")(d,u,!1,function(t){n("PuBs")},"data-v-6fcd83ff",null).exports,h={name:"IndexArticleList",props:{articleList:Array},data:function(){return{hotArticle:"文章列表",articleLists:!0,godColor:0,questions:[{question:"node",answer:"yes"},{question:"node",answer:"yes"}]}},methods:{addEventListenerNavClick:function(t,e){this.godColor=e}},mounted:function(){},watch:{}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-wrap"},[n("div",{staticClass:"article-size article-left-width"},[n("span",{staticClass:"hot-article"},[t._v("文章列表")]),t._v(" "),n("ol",t._l(t.articleList,function(e,i){return n("li",{key:i,ref:"article",refInFor:!0,class:{articleList:t.articleLists,godColor:i==t.godColor},on:{click:function(n){return t.addEventListenerNavClick(e,i)}}},[t._v(t._s(e.titleList))])}),0)]),t._v(" "),n("div",{staticClass:"article-size article-right-width"},t._l(t.questions,function(e,i){return n("div",{key:i},[n("div",{staticClass:"questions"},[t._v(t._s(e.question))]),t._v(" "),n("div",{staticClass:"answer"},[t._v(t._s(e.answer))])])}),0)])},staticRenderFns:[]};var p=n("VU/8")(h,f,!1,function(t){n("7Auq")},"data-v-37e8b2d0",null).exports,m={name:"canvasBg",data:function(){return{}},methods:{initCanvas:function(){var t=this.$refs.canvas,e=t.getContext("2d"),n=document.body.clientWidth,i=document.body.clientHeight,a=100,s=[];function r(t,n){e.save(),e.fillStyle="rgba(255, 255, 255, 0)",e.beginPath(),e.arc(t,n,1.2,0,2*Math.PI,!1),e.closePath(),e.fill(),e.restore()}function o(e,n,i,a){var s=t.getContext("2d"),r=s.createLinearGradient(e,n,i,a);r.addColorStop(0,"#bcbcbc"),r.addColorStop(1,"#f2f2f2"),s.save(),s.strokeStyle=r,s.beginPath(),s.moveTo(e,n),s.lineTo(i,a),s.lineCap="butt",s.closePath(),s.stroke(),s.restore()}!function(){t.width=n,t.height=i;for(var e=0;e<a;e++)s[e]={x:Math.random()*n,y:Math.random()*i,cx:2.2*(.6*Math.random()-.4),cy:2.2*(.6*Math.random()-.4)},r(s[e].x,s[e].y)}(),setInterval(function(){e.clearRect(0,0,n,i);for(var t=0;t<a;t++){s[t].x+=s[t].cx,s[t].y+=s[t].cy,r(s[t].x,s[t].y),s[t].x<0||s[t].x>n?s[t].cx=-s[t].cx:(s[t].y<0||s[t].y>i)&&(s[t].cy=-s[t].cy);for(var l=t+1;l<a;l++)Math.pow(s[t].x-s[l].x,2)+Math.pow(s[t].y-s[l].y,2)<8100&&o(s[t].x,s[t].y,s[l].x,s[l].y)}},25)}},mounted:function(){this.initCanvas()}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{ref:"canvas",staticClass:"canvasss",attrs:{id:"canvas"}})])},staticRenderFns:[]};var C=n("VU/8")(m,g,!1,function(t){n("QXRn")},"data-v-6eb14b45",null).exports,_=n("mtWM"),x=n.n(_),w={name:"index",components:{IndexHeader:c,IndexKnowledge:v,IndexArticleList:p,IndexCanvasBg:C},data:function(){return{levels:[],articleList:[]}},methods:{getHomeInfo:function(){x.a.get("https://leedeea.github.io/Online-website/./static/mock/primaryKnowledage.json").then(this.handleGetKnowleageInfoSucc)},handleGetKnowleageInfoSucc:function(t){t=t.data,this.levels=t.data.knowledge,this.articleList=t.data.articleList}},mounted:function(){this.getHomeInfo()}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bodySize"},[e("IndexCanvasBg"),this._v(" "),e("Index-Header"),this._v(" "),e("Index-Knowledge",{attrs:{levels:this.levels}}),this._v(" "),e("Index-ArticleList",{attrs:{articleList:this.articleList}})],1)},staticRenderFns:[]};var b=n("VU/8")(w,y,!1,function(t){n("tEPb")},null,null).exports,k={name:"LoginCanvasBg",data:function(){return{}},methods:{initCanvas:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),n=t.width=document.body.clientWidth,i=t.height=window.innerHeight,a=217,s=[],r=0,o=document.createElement("canvas"),l=o.getContext("2d");o.width=100,o.height=100;var c=o.width/2,d=l.createRadialGradient(c,c,0,c,c,c);function u(t,e){if(arguments.length<2&&(e=t,t=0),t>e){var n=e;e=t,t=n}return Math.floor(Math.random()*(e-t+1))+t}d.addColorStop(.025,"#CCC"),d.addColorStop(.1,"hsl("+a+", 61%, 33%)"),d.addColorStop(.25,"hsl("+a+", 64%, 6%)"),d.addColorStop(1,"transparent"),l.fillStyle=d,l.beginPath(),l.arc(c,c,c,0,2*Math.PI),l.fill();var v=function(){var t,e,a;this.orbitRadius=u((t=n,e=i,a=Math.max(t,e),Math.round(Math.sqrt(a*a+a*a))/2)),this.radius=u(60,this.orbitRadius)/8,this.orbitX=n/2,this.orbitY=i/2,this.timePassed=u(0,900),this.speed=-u(this.orbitRadius)/5e4,this.alpha=u(2,10)/10,s[++r]=this};v.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,n=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,i=u(10);1===i&&this.alpha>0?this.alpha-=.05:2===i&&this.alpha<1&&(this.alpha+=.05),e.globalAlpha=this.alpha,e.drawImage(o,t-this.radius/2,n-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var h=0;h<900;h++)new v;!function t(){e.globalCompositeOperation="source-over",e.globalAlpha=.5,e.fillStyle="hsla("+a+", 64%, 6%, 2)",e.fillRect(0,0,n,i),e.globalCompositeOperation="lighter";for(var r=1,o=s.length;r<o;r++)s[r].draw();window.requestAnimationFrame(t)}()}},mounted:function(){this.initCanvas()}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"canvasBg"}),this._v(" "),e("canvas",{ref:"canvas",staticClass:"canvass",attrs:{id:"canvas"}})])},staticRenderFns:[]};var I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"top_logo"}),this._v(" "),e("div",{staticClass:"nav"},[e("div",{staticClass:"introduce",attrs:{onselectstart:"return false"}},[this._v("来自一位刚毕业的前端学童的介绍：本网站内主要存放一些前端常用知识，有兴趣的同学可以收藏一下哟~")]),this._v(" "),e("router-link",{attrs:{to:"/index"}},[e("div",{staticClass:"gv",attrs:{onselectstart:"return false",href:""}},[this._v("点击新世界")])])],1)])},staticRenderFns:[]};var R={name:"index",components:{LoginCanvasBg:n("VU/8")(k,L,!1,function(t){n("fPlS")},"data-v-c4920292",null).exports,LoginImg:n("VU/8")({name:"LoginImg",data:function(){return{}}},I,!1,function(t){n("5RqA")},"data-v-98a6ebfa",null).exports},data:function(){return{}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvasSize"},[e("Login-Img"),this._v(" "),e("Login-CanvasBg")],1)},staticRenderFns:[]};var P=n("VU/8")(R,E,!1,function(t){n("qaCU")},null,null).exports;i.a.use(r.a);var q=new r.a({routes:[{path:"/index",name:"Index",component:b},{path:"/",name:"login",component:P}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:q,components:{App:s},template:"<App/>"})},PuBs:function(t,e){},QXRn:function(t,e){},fPlS:function(t,e){},qaCU:function(t,e){},t7J3:function(t,e){},tEPb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9b0b44da5f694d1cf3d1.js.map