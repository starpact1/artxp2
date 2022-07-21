(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{8456:function(k,g,a){"use strict";a.d(g,{Z:function(){return D}});var l=a(3366),m=a(7462),h=a(7294),n=a(6010),o=a(4780),c=a(917),p=a(8216),q=a(1657),b=a(948),r=a(4867),i=a(1588);function s(a){return(0,r.Z)("MuiCircularProgress",a)}(0,i.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var t=a(5893);let u=["className","color","disableShrink","size","style","thickness","value","variant"],d=a=>a,e,f,v,w,x=(0,c.F4)(e||(e=d`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,c.F4)(f||(f=d`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),z=b=>{let{classes:c,variant:a,color:d,disableShrink:e}=b,f={root:["root",a,`color${(0,p.Z)(d)}`],svg:["svg"],circle:["circle",`circle${(0,p.Z)(a)}`,e&&"circleDisableShrink"]};return(0,o.Z)(f,s,c)},A=(0,b.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver(c,a){let{ownerState:b}=c;return[a.root,a[b.variant],a[`color${(0,p.Z)(b.color)}`]]}})(({ownerState:a,theme:b})=>(0,m.Z)({display:"inline-block"},"determinate"===a.variant&&{transition:b.transitions.create("transform")},"inherit"!==a.color&&{color:(b.vars||b).palette[a.color].main}),({ownerState:a})=>"indeterminate"===a.variant&&(0,c.iv)(v||(v=d`
      animation: ${0} 1.4s linear infinite;
    `),x)),B=(0,b.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(b,a)=>a.svg})({display:"block"}),C=(0,b.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver(c,a){let{ownerState:b}=c;return[a.circle,a[`circle${(0,p.Z)(b.variant)}`],b.disableShrink&&a.circleDisableShrink]}})(({ownerState:a,theme:b})=>(0,m.Z)({stroke:"currentColor"},"determinate"===a.variant&&{transition:b.transitions.create("stroke-dashoffset")},"indeterminate"===a.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:a})=>"indeterminate"===a.variant&&!a.disableShrink&&(0,c.iv)(w||(w=d`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y)),j=h.forwardRef(function(o,p){let c=(0,q.Z)({props:o,name:"MuiCircularProgress"}),{className:r,color:s="primary",disableShrink:v=!1,size:d=40,style:w,thickness:a=3.6,value:e=0,variant:h="indeterminate"}=c,x=(0,l.Z)(c,u),b=(0,m.Z)({},c,{color:s,disableShrink:v,size:d,thickness:a,value:e,variant:h}),f=z(b),g={},i={},j={};if("determinate"===h){let k=2*Math.PI*((44-a)/2);g.strokeDasharray=k.toFixed(3),j["aria-valuenow"]=Math.round(e),g.strokeDashoffset=`${((100-e)/100*k).toFixed(3)}px`,i.transform="rotate(-90deg)"}return(0,t.jsx)(A,(0,m.Z)({className:(0,n.Z)(f.root,r),style:(0,m.Z)({width:d,height:d},i,w),ownerState:b,ref:p,role:"progressbar"},j,x,{children:(0,t.jsx)(B,{className:f.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,t.jsx)(C,{className:f.circle,style:g,ownerState:b,cx:44,cy:44,r:(44-a)/2,fill:"none",strokeWidth:a})})}))});var D=j},4045:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return c(5772)}])},5772:function(c,b,a){"use strict";a.r(b);var d=a(603),e=a(5893),f=a(7294),g=a(7357),h=a(8456),i=[{image:"image 1",text:"text 1"},{image:"image 2",text:"text 2"},{image:"image 3",text:"text 3"},{image:"image 4",text:"text 4"}];b.default=function(){var b=(0,d.Z)(f.useState(0),2),a=b[0],l=b[1],c=(0,d.Z)(f.useState("red"),2);c[0],c[1];var j=(0,d.Z)(f.useState(1),2),k=j[0],m=j[1];return(0,f.useEffect)(function(){a>=100&&m(function(a){return a>=4?1:a+1})},[a]),(0,f.useEffect)(function(){console.log(i[k-1].text)},[k]),f.useEffect(function(){console.log(k);var a=setInterval(function(){l(function(a){return a>=100?0:a+1})},50);return function(){clearInterval(a)}},[]),(0,e.jsx)("div",{children:(0,e.jsxs)(g.Z,{sx:{width:"100%",height:"546px",pt:"220px",color:"red"},children:[(0,e.jsx)(h.Z,{color:"inherit",value:a,thickness:1,variant:"determinate",sx:{"& .MuiCircularProgress-circle":{transition:"none"}}}),(0,e.jsxs)(g.Z,{sx:{color:"".concat(a<50?"red":"green")},children:[a>=100&&console.log(a),a,(0,e.jsx)("br",{}),"watch: ",k]})]})})}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=4045)}),_N_E=a.O()}])