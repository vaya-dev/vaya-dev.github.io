"use strict";(self["webpackChunkvaya"]=self["webpackChunkvaya"]||[]).push([[304],{304:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("GalaxyComponent"),t("MainMenu")],1)},n=[],s=function(){var e=this,t=e._self._c;return t("div",{ref:"model",staticClass:"model"})},o=[],a=(i(7658),i(7471));let h=i(6101);var c={name:"ThreeJS",watch:{},props:{width:{type:Number,default:window.innerWidth},height:{type:Number,default:window.innerHeight},zoom:{type:Number,default:18}},data(){let e,t,i,r,n,s,o,a,h;return{scene:e,camera:t,renderer:i,mixer:r,clock:n,texture:s,particlesGeometry:o,particlesMaterial:a,particles:h,xMove:1e-4,yMove:1e-4}},methods:{init(){this.scene=new a.xsS,this.camera=new a.cPb(1e3,this.width/this.height,.1,1e3),this.camera.position.set(0,0,this.zoom),this.clock=new a.SUY,this.renderer=new a.CP7({alpha:!1,antialias:!0}),this.renderer.setClearColor(0,1),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.outputEncoding=a.knz,this.renderer.toneMapping=a.LY2,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.$refs.model.appendChild(this.renderer.domElement)},stars(){const e=[];for(let o=0;o<6e3;o++){const t=a.M8C.randFloatSpread(2e3),i=a.M8C.randFloatSpread(2e3),r=a.M8C.randFloatSpread(2e3);e.push(t,i,r)}const t=new a.dpR;t.setCrossOrigin("anonymous");let i=t.load(h);i.wrapS=a.rpg,i.wrapT=a.rpg,i.repeat.set(1,1);const r=new a.u9r;r.setAttribute("position",new a.a$l(e,3));let n=new a.UY4({size:5,transparent:!0,depthWrite:!1,color:12100144,map:i}),s=new a.woe(r,n);this.scene.add(s)},animate(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera);let e=this.clock.getDelta();this.camera.rotation.y-=this.xMove,this.camera.rotation.x-=this.yMove,this.mixer&&this.mixer.update(e)},mousemove(e){this.xMove=((e.screenX-window.innerWidth/2)/Math.abs(e.screenX-window.innerWidth/2)||1)/1e4,this.yMove=((e.screenY-window.innerHeight/2)/Math.abs(e.screenY-window.innerHeight/2)||1)/1e4}},emits:["loaded"],mounted(){this.init(),this.stars(),this.animate(),window.addEventListener("mousemove",this.mousemove)}},l=c,d=i(1001),p=(0,d.Z)(l,s,o,!1,null,"aace437c",null),m=p.exports,u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mainmenu"},[t("img",{staticClass:"logo",attrs:{src:i(7615)}}),t("table",{staticClass:"nav"},[t("tr",[e._m(0),t("td",[t("router-link",{attrs:{to:"./projectionvideo"}},[t("img",{attrs:{src:i(9159)}}),t("h2",[e._v("PROJECTION")])])],1),t("td",[t("router-link",{attrs:{to:"./vinylvideo"}},[t("img",{attrs:{src:i(7143)}}),t("h2",[e._v("VINYLE")])])],1),e._m(1),e._m(2)])]),e._m(3)])},v=[function(){var e=this,t=e._self._c;return t("td",[t("a",{attrs:{href:"./#/live"}},[t("img",{attrs:{src:i(277)}}),t("h2",[e._v("LIVE")])])])},function(){var e=this,t=e._self._c;return t("td",[t("img",{attrs:{src:i(2188)}}),t("h2",[e._v("Short-film"),t("br"),e._v("SEXUAL")])])},function(){var e=this,t=e._self._c;return t("td",[t("img",{attrs:{src:i(2551)}}),t("h2",[e._v("Short-film"),t("br"),e._v("PULSE")])])},function(){var e=this,t=e._self._c;return t("small",[e._v(" Copyright © 2023 VAYA BRUTAL. All Rights Reserved. Reproduction of any kind is "),t("strong",[e._v("strictly prohibited.")])])}],g={name:"HelloWorld",props:{msg:String},methods:{},mounted(){}},f=g,w=(0,d.Z)(f,u,v,!1,null,"ec3b0962",null),_=w.exports,x={name:"App",components:{GalaxyComponent:m,MainMenu:_}},M=x,b=(0,d.Z)(M,r,n,!1,null,null,null),y=b.exports},277:function(e,t,i){e.exports=i.p+"img/Live icon.f8088ea5.svg"},2551:function(e,t,i){e.exports=i.p+"img/PULSE.dc510c4b.svg"},9159:function(e,t,i){e.exports=i.p+"img/Projection icon.2ca44812.svg"},2188:function(e,t,i){e.exports=i.p+"img/SEXUAL.25b65109.svg"},7143:function(e,t,i){e.exports=i.p+"img/Vinyl icon.808fe2db.svg"},7615:function(e,t,i){e.exports=i.p+"img/VAYA Words Logo.8402f413.png"},6101:function(e,t,i){e.exports=i.p+"img/star.85455c00.png"}}]);
//# sourceMappingURL=304.92cee49d.js.map