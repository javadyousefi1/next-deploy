(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(7770)}])},7770:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return b}});var a=l(5893),i=l(8840),n=l.n(i),s=l(5708),r=l.n(s),o=l(5152),c=l.n(o),d=l(7294),u=e=>{let{chartData:t,option:l}=e;return console.log(t),t[1][0].value,t[1][1].value,t[1][2].value,t[0].chartTitle,t[1][0].title,t[1][1].title,t[1][2].title,t[0].tableYAsixTitle,t[0].tableYAsixTitle,(0,a.jsxs)(a.Fragment,{children:["2",(0,a.jsx)(r(),{highcharts:n(),options:l})]})},x=l(5121);function b(e){let[t,l]=(0,d.useState)("");(0,d.useEffect)(()=>{x.Z.get("/api/hello").then(e=>{console.log(e.data.name),l(e.data.name)})},[]);let[i,n]=(0,d.useState)("");console.log(e);let[s,r]=(0,d.useState)([{tableYAsixTitle:"چارت کنار",chartTitle:"عنوان چارت"},[{title:"جو",value:10},{title:"گندم",value:40},{title:"آرد",value:10}]]),o={chart:{type:"pie",backgroundColor:"#fff",style:{fontFamily:"iransansx"}},title:{text:s[0].chartTitle},plotOptions:{pie:{}},series:[{name:"مقدار هر بخش",data:[[s[1][0].title,s[1][0].value],[s[1][1].title,s[1][1].value],[s[1][2].title,s[1][2].value]],borderColor:"white",color:"red",borderRadius:7,borderWidth:2,center:["50%","50%"],events:{click:e=>console.log(e)},allowPointSelect:!0,dataLabels:[{enabled:!0,distance:15,format:"{point.name} ",style:{fontSize:"0.9em",textOutline:"none"}},{enabled:!0,distance:"-40%",filter:{property:"percentage",operator:">",value:5},format:"{point.y:.1f}%",style:{fontSize:"0.9em",color:"black",textOutline:"none"}}]}]},c={chart:{type:"column",style:{fontFamily:"iransansx"}},title:{text:s[0].chartTitle},xAxis:{categories:[s[1][0].title,s[1][1].title,s[1][2].title],labels:{rotation:-45}},yAxis:{title:{text:s[0].tableYAsixTitle}},series:[{name:s[0].tableYAsixTitle,data:[s[1][0].value,s[1][1].value,s[1][2].value]}]},b={chart:{type:"line",style:{fontFamily:"iransansx"}},title:{text:s[0].chartTitle},xAxis:{categories:[s[1][0].title,s[1][1].title,s[1][2].title],labels:{rotation:-45}},yAxis:{title:{text:s[0].tableYAsixTitle}},series:[{name:s[0].tableYAsixTitle,data:[s[1][0].value,s[1][1].value,s[1][2].value]}]},[h,p]=(0,d.useState)(o);return(0,a.jsxs)("main",{className:"flex  flex-col items-center justify-between  mt-2 ",children:[(0,a.jsx)(u,{chartData:s,option:h}),(0,a.jsx)("div",{className:"grid grid-cols-1 grid-rows-1 gap-2"}),(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsxs)("div",{className:"text-white",children:["نام عنوان :",s[0].chartTitle]}),(0,a.jsx)("div",{children:s[1].map((e,t)=>(0,a.jsxs)("li",{children:["عنوان : ",e.title+" ","مقدار : ","%"+e.value]},t))}),(0,a.jsxs)("div",{className:"flex flex-col gap-y-2 mt-2",children:[(0,a.jsx)("button",{className:"bg-white text-black px-4 py-2 rounded-lg",onClick:()=>p(o),children:"نمودار پای"}),(0,a.jsx)("button",{className:"bg-white text-black px-4 py-2 rounded-lg",onClick:()=>p(c),children:"نمودار ستونی"}),(0,a.jsx)("button",{className:"bg-white text-black px-4 py-2 rounded-lg",onClick:()=>p(b),children:"نمودار خطی"})]})]})]})}c()(()=>l.e(555).then(l.bind(l,6555)),{loadableGenerated:{webpack:()=>[6555]},ssr:!1}),c()(()=>Promise.all([l.e(520),l.e(754)]).then(l.bind(l,8578)),{loadableGenerated:{webpack:()=>[8578]},ssr:!1}),c()(()=>Promise.all([l.e(864),l.e(344)]).then(l.bind(l,1344)),{loadableGenerated:{webpack:()=>[1344]},ssr:!1}),c()(()=>l.e(921).then(l.bind(l,7921)),{loadableGenerated:{webpack:()=>[7921]},ssr:!1}),c()(()=>Promise.all([l.e(864),l.e(63)]).then(l.bind(l,2063)),{loadableGenerated:{webpack:()=>[2063]},ssr:!1})}},function(e){e.O(0,[898,800,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);