"use strict";(self["webpackChunkvaya"]=self["webpackChunkvaya"]||[]).push([[339],{7950:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e.showGalaxy?t("GalaxyComponent",{attrs:{resizeObj:e.resizeObj},on:{showGalaxy:e.handleshowGalaxy}}):e._e(),t("MainMenu"),e._m(0)],1)},s=[function(){var e=this,t=e._self._c;return t("audio",{attrs:{autoplay:"",loop:""}},[t("source",{attrs:{src:i(907),type:"audio/ogg"}}),t("source",{attrs:{src:i(907),type:"audio/mpeg"}})])}],a=function(){var e=this,t=e._self._c;return t("div",{ref:"model",staticClass:"model"})},n=[],o=(i(7658),i(7471)),d={name:"ThreeJS",watch:{resizeObj:{handler(){this.camera&&this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))},deep:!0,immediate:!0}},props:{width:{type:Number,default:window.innerWidth},assets:{type:Object,default:()=>{}},height:{type:Number,default:window.innerHeight},zoom:{type:Number,default:18},resizeObj:{type:Event,default:()=>{}}},data(){let e,t,i,r,s,a,n,o,d;return{scene:e,camera:t,renderer:i,mixer:r,clock:s,texture:a,particlesGeometry:n,particlesMaterial:o,particles:d,xMove:1e-4,yMove:1e-4,starImg:this.$store.state.prismicData.star_image.url,tigerImg:this.$store.state.prismicData.tiger_image.url,cameraZoomLimit:0,activeGeometries:[],tiger:null}},methods:{init(){this.scene=new o.xsS,this.camera=new o.cPb(1e3,this.width/this.height,.1,1e3),this.camera.position.set(0,0,this.zoom),this.clock=new o.SUY,this.renderer=new o.CP7({alpha:!1,antialias:!0}),this.renderer.setClearColor(0,1),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.outputEncoding=o.knz,this.renderer.toneMapping=o.LY2,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.$refs.model.appendChild(this.renderer.domElement)},tigers(){var e=new o.DvJ(18,20,1),t=new o.vBJ({map:(new o.dpR).load(this.tigerImg),transparent:!0});this.tiger=new o.Kj0(e,t),this.tiger.rotation.z=3.15,this.scene.add(this.tiger)},stars(){const e=[];for(let n=0;n<6e3;n++){const t=o.M8C.randFloatSpread(2e3),i=o.M8C.randFloatSpread(2e3),r=o.M8C.randFloatSpread(2e3);e.push(t,i,r)}const t=new o.dpR;let i;t.setCrossOrigin("anonymous"),i=t.load(this.starImg,void 0,void 0,(()=>{this.$emit("showGalaxy",!1)})),i.wrapS=o.rpg,i.wrapT=o.rpg,i.repeat.set(1,1);const r=new o.u9r;r.setAttribute("position",new o.a$l(e,3));let s=new o.UY4({size:8,transparent:!0,depthWrite:!1,color:12100144,map:i}),a=new o.woe(r,s);a.position.z=this.cameraZoomLimit,this.activeGeometries.push(a.uuid),this.scene.add(a)},remove(){let e=this.scene.getObjectByProperty(this.activeGeometries[0]);this.scene.remove(e),this.activeGeometries.pop()},animate(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera);let e=this.clock.getDelta();this.camera.rotation.y-=this.xMove,this.camera.rotation.x-=this.yMove,this.camera.position.z+=.5,this.tiger&&(this.tiger.position.z+=.5),this.camera.position.z>=this.cameraZoomLimit&&(this.remove(),this.cameraZoomLimit+=1500,this.stars()),this.mixer&&this.mixer.update(e)},mousemove(e){this.xMove=-((e.screenX-window.innerWidth/2)/Math.abs(e.screenX-window.innerWidth/2)||1)/1500,this.yMove=-((e.screenY-window.innerHeight/2)/Math.abs(e.screenY-window.innerHeight/2)||1)/1500}},emits:["loaded"],mounted(){this.init(),this.stars(),this.tigers(),this.animate(),window.addEventListener("mousemove",this.mousemove),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}},h=d,c=i(3736),l=(0,c.Z)(h,a,n,!1,null,"68bf5cea",null),m=l.exports,p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mainmenu"},[t("img",{staticClass:"logo",attrs:{src:i(7615)}}),t("table",{staticClass:"nav"},[t("tr",[t("td",[t("router-link",{attrs:{to:"live"}},[t("img",{attrs:{src:i(277)}}),t("h2",[e._v("LIVE")])])],1),t("td",[t("router-link",{attrs:{to:"projectionvideo"}},[t("img",{attrs:{src:i(9159)}}),t("h2",[e._v("PROJECTION")])])],1),t("td",[t("router-link",{attrs:{to:"sexualvideo"}},[t("img",{attrs:{src:i(2188)}}),t("h2",[e._v("Short-film"),t("br"),e._v("SEXUAL")])])],1),t("td",[t("router-link",{attrs:{to:"pulsevideo"}},[t("img",{attrs:{src:i(2551)}}),t("h2",[e._v("Short-film"),t("br"),e._v("PULSE")])])],1),t("td",[t("router-link",{attrs:{to:"vinylevideo"}},[t("img",{attrs:{src:i(7143)}}),t("h2",[e._v("CREDITS")])])],1)])]),t("small",{staticClass:"copyright"},[e._v(" Copyright © "+e._s(e.getCurrentYear())+" "),t("a",{attrs:{href:"https://www.vaya-official.com/",target:"_blank"}},[e._v("VAYA BRUTAL")]),e._v(". All Rights Reserved. "),t("br"),e._v("Reproduction of any kind is "),t("strong",[e._v("strictly prohibited.")]),t("br"),e._v(" Experience designed and developed by "),t("a",{attrs:{href:e.$cms.textField(e.designer_credits.social_link),target:"_blank"}},[e._v("Design By Reb J")])]),e.designer_credits?t("a",{staticClass:"designer_credits",attrs:{href:e.$cms.textField(e.designer_credits.social_link),target:"_blank"}},[t("img",{attrs:{src:e.designer_credits.logo.url}})]):e._e()])},u=[],g={name:"MainMenu",methods:{getCurrentYear(){return(new Date).getFullYear()}},data(){return{designer_credits:this.$store.state.prismicData.designer_credits[0]}},mounted(){},beforeMount(){}},w=g,v=(0,c.Z)(w,p,u,!1,null,"3fa9ad62",null),f=v.exports,_={name:"App",components:{GalaxyComponent:m,MainMenu:f},props:{resizeObj:{type:Event,default:()=>{}}},data(){return{showGalaxy:!0,link:null}},methods:{handleshowGalaxy(e){this.showGalaxy=e}},beforeMount(){window.navigator.onLine||(window.location.href="./index.html")},mounted(){}},x=_,y=(0,c.Z)(x,r,s,!1,null,null,null),b=y.exports},277:function(e,t,i){e.exports=i.p+"img/Live icon.201eb542.svg"},2551:function(e,t,i){e.exports=i.p+"img/PULSE.43dd42a1.svg"},9159:function(e,t,i){e.exports=i.p+"img/Projection icon.ae7314d1.svg"},2188:function(e,t,i){e.exports=i.p+"img/SEXUAL.1e8314c9.svg"},7143:function(e,t,i){e.exports=i.p+"img/Vinyl icon.31c072b4.svg"},7615:function(e,t,i){e.exports=i.p+"img/VAYA Words Logo.8402f413.png"},907:function(e,t,i){e.exports=i.p+"media/bg audio.5258c224.mp3"}}]);
//# sourceMappingURL=339.900cd676.js.map