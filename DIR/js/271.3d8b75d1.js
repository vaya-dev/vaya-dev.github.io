"use strict";(self["webpackChunkvaya"]=self["webpackChunkvaya"]||[]).push([[271],{5271:function(e,i,t){t.r(i),t.d(i,{default:function(){return u}});var n=function(){var e=this,i=e._self._c;return i("div",{staticClass:"pulsevideo",attrs:{id:"pulsevideo"}},[i("div",{class:"overlay "+(e.hideTransition?"hideTransition":"")},[i("transition",{attrs:{appear:"",name:"fadein"}},[i("h1",[e._v("P U L S E")])])],1),e.link?i("youtube",{key:e.hideTransition,attrs:{id:"video","video-id":e.link,"player-vars":{autoplay:e.hideTransition?1:0,rel:0}},on:{ended:e.ended}}):e._e()],1)},a=[],o=t(5537),d={name:"PulseVideo",components:{},data(){return{hideTransition:!1,link:null}},props:{mousemoveObj:{type:Object,default:()=>{}},clickObj:{type:Object,default:()=>{}}},watch:{},methods:{ended(){window.location.href="./index.html#/welcome"}},mounted(){this.$nextTick((()=>{setTimeout((()=>{this.hideTransition=!0}),3e3)}))},beforeMount(){window.navigator.onLine||(window.location.href="./index.html"),o.Z.getData().then((e=>{this.link=this.$cms.textField(e.pulse_video_youtube_id)}))}},s=d,l=t(3736),r=(0,l.Z)(s,n,a,!1,null,"4df67cf2",null),u=r.exports}}]);
//# sourceMappingURL=271.3d8b75d1.js.map