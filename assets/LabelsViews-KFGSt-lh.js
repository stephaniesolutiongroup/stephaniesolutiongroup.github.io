const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InputHr-C9oU7r1J.js","assets/index-CvYaQ-s6.js","assets/index-DUq9wHKT.css","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as w,_ as $,a as h,e as n,g as C,i as a,h as o,z as k,f as x,q as E,t as b}from"./index-CvYaQ-s6.js";import{c as V}from"./ShowQRPrintLabel-1R_Ti2XR.js";import"./PDFButton-CSS0jQgP.js";import"./Util-D_-lrQft.js";import"./fontkit.es-Dm0cGHgD.js";import"./InitPrintServices-C0pVP2ci.js";import"./Toast-Cr22bH7f.js";var v=b("<div class=lbl_dtls>"),T=b('<div class="_dsplFlx dtls centerBx"><div class=lbl_h_dtls>');const y=w(()=>$(()=>import("./InputHr-C9oU7r1J.js"),__vite__mapDeps([0,1,2,3]))),R=e=>{const[i,s]=h(!1),[d,u]=h(!1),m=t=>{V(t?.trim())},r=()=>e?.value?e?.value:" ",_=()=>{s(!1),e?.confirm&&e?.confirm(d())},g=()=>{e?.allowChanges&&(u(e?.value),s(!i())),e?.callback&&e?.callback(e?.value)};return n(o,{get when(){return r()||e?.allowChanges||e?.callback},get children(){var t=T(),f=t.firstChild;return f.$$click=g,a(f,()=>e?.label),a(t,n(o,{get when(){return!i()},get children(){var l=v();return l.$$click=()=>m(r()),a(l,(()=>{var c=k(()=>!!e?.hidde);return()=>c()?"*******":r()})()),l}}),null),a(t,n(o,{get when(){return i()},get children(){var l=v();return a(l,n(y,{get width(){return e?.width?e?.width:"160px"},backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return d()},colors:"#2b2b2b",handleClick:c=>u(c),onEnter:c=>_()})),l}}),null),x(()=>E(t,"data-value",`${r()}`)),t}})};C(["click"]);export{R as default};
