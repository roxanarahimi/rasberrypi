(function(){"use strict";var e={3533:function(e,t,o){var n=o(9242),r=o(3396);function i(e,t){const o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(o)}var c=o(89);const u={},a=(0,c.Z)(u,[["render",i]]);var d=a,l=o(2483);const s={id:"carouselExampleFade",class:"carousel slide carousel-fade vh-100","data-bs-ride":"carousel","data-bs-pause":"false","data-bs-interval":2e3},v=(0,r._)("video",{class:"w-100",loop:"true",autoplay:"autoplay",muted:"",id:"vdo"},[(0,r._)("source",{type:"video/mp4",src:"/vdo/vdo.mp4"})],-1),p=[v];function f(e,t,o,n,i,c){return(0,r.wg)(),(0,r.iD)("div",s,p)}var m=o(4870);const h={class:"p-0 m-0 w-100 vh-100",style:{overflow:"hidden"}};function y(e,t,o,n,i,c){const u=(0,r.up)("AdvancedVideo");return(0,r.wg)(),(0,r.iD)("div",h,[(0,r.Wm)(u,{class:"vdo p-0 w-100",style:{"margin-bottom":"-10px"},cldVid:n.myVdo,autoplay:"",loop:""},null,8,["cldVid"])])}var b=o(9413),w=o(2806),g={name:"VideoSection",props:["vdo"],components:{Cloudinary:b.r,AdvancedVideo:w.xl},setup(e){const t=new b.r({cloud:{cloudName:"dpg1tz64p"}}),o=t.video(e.vdo);return{cld:t,myVdo:o}}};const O=(0,c.Z)(g,[["render",y]]);var V=O,j={name:"HomeView",components:{VideoSection:V},setup(){const e=(0,m.iH)(),t=(0,m.iH)([]),o=(0,m.iH)([]),n="https://panel.recycle.webagent.ir",i=()=>{t.value=["01/01","01/02","01/03","01/04","01/05","01/06","01/07","01/08"],o.value=[["/vdo/birth.mp4",27],["/vdo/code.mp4",31],["/vdo/copa.mp4",21],["/vdo/football.mp4",10],["/vdo/qym.mp4",27],["/vdo/travel.mp4",28]]},c=()=>{fetch("https://panel.recycle.webagent.ir/api/site").then((e=>e.json())).then((t=>e.value=t)).catch((e=>console.error(e)))};(0,r.bv)((()=>{setTimeout((()=>{document.getElementById("vdo").muted=!1}),2500),setInterval((function(){window.location.reload(1)}),147e6),i(),c()}));const u=()=>{window.setInterval(e,200);function e(){let e=document.querySelector(".active"),t=e.id;document.querySelectorAll(".vdo").forEach((e=>{e.id=="vdo_"+t?e.removeAttribute("muted"):e.setAttribute("muted","muted")}))}};return{getData:c,data:e,slides:t,slides1:o,getSlides:i,url:n,see:u}}};const x=(0,c.Z)(j,[["render",f]]);var k=x;const A=[{path:"/",name:"home",component:k}],S=(0,l.p7)({history:(0,l.PO)("/"),routes:A});var _=S;(0,n.ri)(d).use(_).mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var c=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,a=0;a<n.length;a++)(!1&i||c>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(u=!1,i<c&&(c=i));if(u){e.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,c=n[0],u=n[1],a=n[2],d=0;if(c.some((function(t){return 0!==e[t]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(a)var l=a(o)}for(t&&t(n);d<c.length;d++)i=c[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(l)},n=self["webpackChunkrecycle"]=self["webpackChunkrecycle"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3533)}));n=o.O(n)})();
//# sourceMappingURL=app.860fa49b.js.map