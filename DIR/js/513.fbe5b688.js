"use strict";(self["webpackChunkvaya"]=self["webpackChunkvaya"]||[]).push([[513],{9513:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"vinylvideo",attrs:{id:"vinylvideo"}},[s("transition",{attrs:{appear:"",name:"fadein"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showControls,expression:"showControls"}],staticClass:"controls"},[s("div",{staticClass:"playarea"},[s("img",{staticClass:"speedup",attrs:{src:e(982)}}),s("img",{staticClass:"play",attrs:{src:e(6461),id:"play"}}),s("img",{staticClass:"speedup",attrs:{src:e(9469)}})]),s("div",{staticClass:"bar"},[s("div",{staticClass:"line"})]),s("div",{staticClass:"volume"},[s("img",{staticClass:"volumebars",attrs:{src:e(9748)}}),s("div",{staticClass:"line"})])])]),s("transition",{attrs:{appear:"",name:"fadein"}},[s("video",{ref:"video",staticClass:"video",attrs:{autoplay:"",id:"video"}},[s("source",{attrs:{src:t.videoUrl,type:"video/mp4"}})])])],1)},a=[],o={name:"VinylVideo",components:{},data(){return{showControls:!1,timeout:null,videoUrl:e(1050)}},computed:[],methods:{mousemove(){clearTimeout(this.timeout),this.showControls=!0,this.timeout=setTimeout((()=>{this.showControls=!1,clearTimeout(this.timeout)}),3e3)},clickEvents(t){switch(console.log(t.target.id),t.target.id){case"play":document.getElementById("video").play();break}},ended(){this.$refs.video.removeEventListener("ended",this.ended),window.location.href="/"}},mounted(){this.$refs.video.addEventListener("ended",this.ended)}},n=o,r=e(1001),d=(0,r.Z)(n,i,a,!1,null,"f9f57238",null),l=d.exports},982:function(t,s,e){t.exports=e.p+"img/Fast Backward.dee80793.svg"},9469:function(t,s,e){t.exports=e.p+"img/Fast forward.4060c740.svg"},6461:function(t,s,e){t.exports=e.p+"img/Play button.db3d0a0f.svg"},9748:function(t,s,e){t.exports=e.p+"img/volumeicon.86c991d4.svg"},1050:function(t,s,e){t.exports=e.p+"media/VAYA_Vinyle_et_Credits.f8c02a1b.mp4"}}]);
//# sourceMappingURL=513.fbe5b688.js.map