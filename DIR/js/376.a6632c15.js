"use strict";(self["webpackChunkvaya"]=self["webpackChunkvaya"]||[]).push([[376],{3376:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"livevideo",attrs:{id:"livevideo"}},[e("transition",{attrs:{appear:"",name:"fadein"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showControls,expression:"showControls"}],staticClass:"controls"},[e("div",{staticClass:"playarea"},[e("img",{staticClass:"speedup",attrs:{src:s(982)}}),e("img",{staticClass:"play",attrs:{src:s(6461),id:"play"}}),e("img",{staticClass:"speedup",attrs:{src:s(9469)}})]),e("div",{staticClass:"bar"},[e("div",{staticClass:"line"})]),e("div",{staticClass:"volume"},[e("img",{staticClass:"volumebars",attrs:{src:s(9748)}}),e("div",{staticClass:"line"})])])]),e("transition",{attrs:{appear:"",name:"fadein"}},[e("video",{ref:"video",staticClass:"video",attrs:{autoplay:"",id:"video"}},[e("source",{attrs:{src:t.videoUrl,type:"video/mp4"}})])])],1)},a=[],o={name:"LiveVideo",components:{},data(){return{showControls:!1,timeout:null,videoUrl:s(2749)}},computed:[],methods:{mousemove(){clearTimeout(this.timeout),this.showControls=!0,this.timeout=setTimeout((()=>{this.showControls=!1,clearTimeout(this.timeout)}),3e3)},clickEvents(t){switch(console.log(t.target.id),t.target.id){case"play":document.getElementById("video").play();break}},ended(){this.$refs.video.removeEventListener("ended",this.ended),window.location.href="/"}},mounted(){this.$refs.video.addEventListener("ended",this.ended)}},r=o,n=s(1001),d=(0,n.Z)(r,i,a,!1,null,"6fd3b57c",null),l=d.exports},982:function(t,e,s){t.exports=s.p+"img/Fast Backward.dee80793.svg"},9469:function(t,e,s){t.exports=s.p+"img/Fast forward.4060c740.svg"},6461:function(t,e,s){t.exports=s.p+"img/Play button.db3d0a0f.svg"},9748:function(t,e,s){t.exports=s.p+"img/volumeicon.86c991d4.svg"},2749:function(t,e,s){t.exports=s.p+"media/VAYA_Live.2e36f19a.mp4"}}]);
//# sourceMappingURL=376.a6632c15.js.map