const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-D4w8qvcq.js","assets/index-CvYaQ-s6.js","assets/index-DUq9wHKT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/InputHr-C9oU7r1J.js","assets/InputHr-M3rJ9grQ.css","assets/SVG-DJK66ZUv.js","assets/Util-D_-lrQft.js","assets/DropDwnSearch-B-4UsNkp.js","assets/PDFButton-CSS0jQgP.js","assets/DropDwnSearch-BQ1Fmfah.css","assets/ContainerElasticView-Do6tltLf.js","assets/ContainerElasticView-LzOd6fDI.css","assets/FlexSpace-C5MSGPEs.js","assets/wrappAddView-zf1Bj6Z9.js","assets/Toast-Cr22bH7f.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-oeegtrC_.js","assets/DialogHRM-V9_lZntj.css","assets/ButonHrm-BSeWNUGQ.css","assets/ItemOnEnvios-B_YpzmLL.js","assets/globalSignal-BQY5JgUu.js","assets/fontkit.es-Dm0cGHgD.js"])))=>i.map(i=>d[i]);
import{l as d,_ as u,c as h,a as l,o as L,b as V,d as w,i as c,e as i,f as T,g as F,t as v,S as Q,h as q,F as M,E as N,s as B,j as S}from"./index-CvYaQ-s6.js";import{f as z,a as A,g as x,b as m,q as g,c as j}from"./Util-D_-lrQft.js";import{u as H}from"./PDFButton-CSS0jQgP.js";import{i as W}from"./globalSignal-BQY5JgUu.js";import"./fontkit.es-Dm0cGHgD.js";import"./Toast-Cr22bH7f.js";var G=v('<div><div class="_dsplFlx flxWrp spaceAround centerBx"><h2>Clientes</h2><div class="centerBx bottombx"style=margin-top:10px;><div style=padding:4px></div></div></div><div>'),J=v("<div> <!>."),K=v("<div> ");const U=d(()=>u(()=>import("./LoadingColorSpinner-D4w8qvcq.js"),__vite__mapDeps([0,1,2,3]))),X=d(()=>u(()=>import("./InputHr-C9oU7r1J.js"),__vite__mapDeps([4,1,2,5])));d(()=>u(()=>import("./SVG-DJK66ZUv.js"),__vite__mapDeps([6,1,2,7])));d(()=>u(()=>import("./DropDwnSearch-B-4UsNkp.js"),__vite__mapDeps([8,1,2,9,7,6,10])));d(()=>u(()=>import("./ContainerElasticView-Do6tltLf.js"),__vite__mapDeps([11,1,2,6,7,12])));const y=d(()=>u(()=>import("./FlexSpace-C5MSGPEs.js"),__vite__mapDeps([13,1,2]))),Y=d(()=>u(()=>import("./wrappAddView-zf1Bj6Z9.js"),__vite__mapDeps([14,1,2,6,7,15,16,17,18,19]))),Z=d(()=>u(()=>import("./ItemOnEnvios-B_YpzmLL.js"),__vite__mapDeps([20,1,2,7,17,18,11,6,12,21,9,22,15,16])));function de(){const[t,r]=h({list:{manifest:{id:"",label:""},search:"",status:""}});h({}),h({});const[e,n]=l("");l(!1);const[s,f]=l(64);l(!1),l(!1);const[$,re]=l("33"),E=H(n,500);l(!1),l(!1);const P=(_,o)=>{r("list",{[_]:o}),E(x())};L(()=>{}),V(()=>{});const[k,{refetch:se}]=w(e,async _=>{let o=await ee(t?.list?.search,$());return j(o)});return(()=>{var _=G(),o=_.firstChild,b=o.firstChild,O=b.nextSibling,R=O.firstChild,I=o.nextSibling;return c(o,i(y,{}),b),c(R,i(X,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return t?.list?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:a=>P("search",a)})),c(o,i(y,{}),null),c(o,i(Y,{}),null),c(o,i(y,{}),null),c(I,i(N,{fallback:a=>(()=>{var p=J(),D=p.firstChild,C=D.nextSibling;return C.nextSibling,c(p,()=>a.toString(),C),p})(),get children(){return i(Q,{get fallback(){return(()=>{var a=K();return a.firstChild,c(a,i(U,{stroke:"rgb(200 25 60 / 1)",size:62}),null),a})()},get children(){return i(q,{get when(){return k()},get children(){return i(M,{get each(){return k()?.slice(0,s())},children:(a,p)=>i(Z,{item:a,refresh:()=>E(x())})})}})}})}})),T(a=>B(I,` ${W()?"":"width:94vw;"} margin: 0 auto;`,a)),_})()}const ee=async(t,r)=>{let e={params:{},fldsQry:["street","agency","idairguide","currentStatus","cidentity","ssg_track_key","bagnumber","tracking","estate","city","zone","consigneeInfo:phoneNumber","consigneeInfo:altPhoneNumber","consigneeInfo:firstName","consigneeInfo:middleName","consigneeInfo:lastName","consigneeInfo:ybestate","consigneeInfo:ybcity"]};t&&t.split(" ").map((s,f)=>{s&&(e.params[":search"+f]=s.trim())}),S?.profile?.isAdmin||(e.params.businessId=S?.profile?.businessId),!t&&r&&(e.params[":status"]=r);let n={...m(g())}.search_notary;if(e={...e,...n},t.length>=2||!t&&r){const s=await A(e);return s?.data?.error?{}:s}return{}},ue=async t=>{t.map(r=>{let e={params:{id:r?.ssg_track_key,idairguide:r?.idairguide}},n={...m(g())}[802002];e={...e,...n}})},_e=async t=>{t.map(r=>{let e={params:{ssg_track_key:r?.ssg_track_key,idairguide:r?.idairguide}},n={...m(g())}[802005];e={...e,...n}})},fe=async(t,r)=>{let e=[];t.map(n=>{let s={params:{ssg_track_key:n?.ssg_track_key,idairguide:n?.idairguide},data2update:{currentStatus:r}},f={...m(g())}[802004];s={...s,...f},e.push(s)}),z(e,te)},te=async t=>{const e=await A(t);if(e)return e};F(["click"]);export{de as default,_e as deleteManifest,te as fetchCSVInve,ue as loadManifest,fe as updateManifest};