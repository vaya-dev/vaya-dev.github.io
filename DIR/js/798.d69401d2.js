"use strict";(self["webpackChunkvaya"]=self["webpackChunkvaya"]||[]).push([[798],{1798:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("GalaxyComponent"),t("MainMenu")],1)},n=[],s=function(){var e=this,t=e._self._c;return t("div",{ref:"model",staticClass:"model"})},a=[],o=(r(7658),r(7471));let h="https://github.com/rebjane/vaya-demo/blob/main/DIR/star.png?raw=true";var l={name:"ThreeJS",watch:{},props:{width:{type:Number,default:window.innerWidth},height:{type:Number,default:window.innerHeight},zoom:{type:Number,default:18}},data(){let e,t,r,i,n,s,a,o,h;return{scene:e,camera:t,renderer:r,mixer:i,clock:n,texture:s,particlesGeometry:a,particlesMaterial:o,particles:h,xMove:1e-4,yMove:1e-4}},methods:{init(){this.scene=new o.xsS,this.camera=new o.cPb(1e3,this.width/this.height,.1,1e3),this.camera.position.set(0,0,this.zoom),this.clock=new o.SUY,this.renderer=new o.CP7({alpha:!1,antialias:!0}),this.renderer.setClearColor(0,1),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.outputEncoding=o.knz,this.renderer.toneMapping=o.LY2,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.$refs.model.appendChild(this.renderer.domElement)},stars(){const e=[];for(let a=0;a<6e3;a++){const t=o.M8C.randFloatSpread(2e3),r=o.M8C.randFloatSpread(2e3),i=o.M8C.randFloatSpread(2e3);e.push(t,r,i)}const t=new o.dpR;t.setCrossOrigin("anonymous");let r=t.load(h);r.wrapS=o.rpg,r.wrapT=o.rpg,r.repeat.set(1,1);const i=new o.u9r;i.setAttribute("position",new o.a$l(e,3));let n=new o.UY4({size:5,transparent:!0,depthWrite:!1,color:12100144,map:r}),s=new o.woe(i,n);this.scene.add(s)},animate(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera);let e=this.clock.getDelta();this.camera.rotation.y-=this.xMove,this.camera.rotation.x-=this.yMove,this.mixer&&this.mixer.update(e)},mousemove(e){this.xMove=((e.screenX-window.innerWidth/2)/Math.abs(e.screenX-window.innerWidth/2)||1)/1e4,this.yMove=((e.screenY-window.innerHeight/2)/Math.abs(e.screenY-window.innerHeight/2)||1)/1e4}},emits:["loaded"],mounted(){this.init(),this.stars(),this.animate(),window.addEventListener("mousemove",this.mousemove)}},d=l,c=r(1001),m=(0,c.Z)(d,s,a,!1,null,"15002409",null),p=m.exports,u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mainmenu"},[t("img",{staticClass:"logo",attrs:{src:r(7615)}}),t("table",{staticClass:"nav"},[t("tr",[e._m(0),t("td",[t("router-link",{attrs:{to:"./projectionvideo"}},[t("img",{attrs:{src:r(9159)}}),t("h2",[e._v("PROJECTION")])])],1),t("td",[t("router-link",{attrs:{to:"./vinylvideo"}},[t("img",{attrs:{src:r(7143)}}),t("h2",[e._v("VINYLE")])])],1),e._m(1),e._m(2)])]),e._m(3)])},v=[function(){var e=this,t=e._self._c;return t("td",[t("a",{attrs:{href:"./#/live"}},[t("img",{attrs:{src:r(277)}}),t("h2",[e._v("LIVE")])])])},function(){var e=this,t=e._self._c;return t("td",[t("img",{attrs:{src:r(2188)}}),t("h2",[e._v("Short-film"),t("br"),e._v("SEXUAL")])])},function(){var e=this,t=e._self._c;return t("td",[t("img",{attrs:{src:r(2551)}}),t("h2",[e._v("Short-film"),t("br"),e._v("PULSE")])])},function(){var e=this,t=e._self._c;return t("small",[e._v(" Copyright © 2023 VAYA BRUTAL. All Rights Reserved. Reproduction of any kind is "),t("strong",[e._v("strictly prohibited.")])])}],g={name:"HelloWorld",props:{msg:String},methods:{},mounted(){}},f=g,w=(0,c.Z)(f,u,v,!1,null,"ec3b0962",null),_=w.exports,x={name:"App",components:{GalaxyComponent:p,MainMenu:_}},b=x,y=(0,c.Z)(b,i,n,!1,null,null,null),M=y.exports},277:function(e,t,r){e.exports=r.p+"img/Live icon.f8088ea5.svg"},2551:function(e,t,r){e.exports=r.p+"img/PULSE.dc510c4b.svg"},9159:function(e,t,r){e.exports=r.p+"img/Projection icon.2ca44812.svg"},2188:function(e,t,r){e.exports=r.p+"img/SEXUAL.25b65109.svg"},7143:function(e,t,r){e.exports=r.p+"img/Vinyl icon.808fe2db.svg"},7615:function(e,t,r){e.exports=r.p+"img/VAYA Words Logo.8402f413.png"}}]);
//# sourceMappingURL=798.d69401d2.js.map