(function(){"use strict";var e={2406:function(e,t,n){var o=n(9242),r=n(3396);function i(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var c=n(89);const u={},a=(0,c.Z)(u,[["render",i]]);var d=a,s=n(2483),l=n(7139);const v={id:"carouselExampleFade",class:"carousel slide carousel-fade vh-100","data-bs-ride":"carousel","data-bs-pause":"false"},f={key:0,class:"carousel-inner h-100"},p=["id"],h={style:{"background-size":"cover",width:"100%","min-height":"100vh"}};function m(e,t,n,o,i,c){const u=(0,r.up)("video-section");return(0,r.wg)(),(0,r.iD)("div",v,[o.slides?((0,r.wg)(),(0,r.iD)("div",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.slides,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,id:t,class:(0,l.C_)(["carousel-item bg-dark h-100",{active:0==t}]),"data-bs-interval":25e3},[(0,r._)("div",h,[(0,r.Wm)(u,{vdo:[e,t],autoplay:"",loop:""},null,8,["vdo"])])],10,p)))),128))])):(0,r.kq)("",!0)])}var w=n(4870);const y={class:"p-0 m-0 w-100 vh-100",style:{overflow:"hidden"}};function b(e,t,n,o,i,c){const u=(0,r.up)("AdvancedVideo");return(0,r.wg)(),(0,r.iD)("div",y,[(0,r.Wm)(u,{class:"vdo p-0 w-100",id:"vdo_"+o.index,style:{"margin-bottom":"-10px"},cldVid:o.myVdo,autoplay:"",muted:"muted",loop:""},null,8,["id","cldVid"])])}var g=n(9413),O=n(2806),k={name:"VideoSection",props:["vdo"],components:{Cloudinary:g.r,AdvancedVideo:O.xl},setup(e){const t=new g.r({cloud:{cloudName:"dpg1tz64p"}}),n=t.video(e.vdo[0]),o=e.vdo[1];return{cld:t,myVdo:n,index:o}}};const x=(0,c.Z)(k,[["render",b]]);var V=x,j={name:"HomeView",components:{VideoSection:V},setup(){const e=(0,w.iH)(),t=(0,w.iH)([]),n="https://panel.recycle.webagent.ir",o=()=>{t.value=["01/01","01/02","01/03","01/04","01/05","01/06","01/07","01/08"]},i=()=>{fetch("https://panel.recycle.webagent.ir/api/site").then((e=>e.json())).then((t=>e.value=t)).catch((e=>console.error(e)))};(0,r.bv)((()=>{setInterval((function(){window.location.reload(1)}),72e5),o(),i(),c()}));const c=()=>{window.setInterval(e,200);function e(){let e=document.querySelector(".active"),t=e.id;document.querySelectorAll(".vdo").forEach((e=>{e.id=="vdo_"+t?e.removeAttribute("muted"):e.setAttribute("muted","muted")}))}};return{getData:i,data:e,slides:t,getSlides:o,url:n,see:c}}};const D=(0,c.Z)(j,[["render",m]]);var _=D;const A=[{path:"/",name:"home",component:_}],S=(0,s.p7)({history:(0,s.PO)("/"),routes:A});var C=S;(0,o.ri)(d).use(C).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var c=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(u=!1,i<c&&(c=i));if(u){e.splice(s--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,c=o[0],u=o[1],a=o[2],d=0;if(c.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(a)var s=a(n)}for(t&&t(o);d<c.length;d++)i=c[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkrecycle"]=self["webpackChunkrecycle"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2406)}));o=n.O(o)})();
//# sourceMappingURL=app.fb52800c.js.map