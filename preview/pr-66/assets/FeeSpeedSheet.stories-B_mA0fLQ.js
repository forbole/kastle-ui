import{j as e,V as b,c as h,s as y,t as x,a as n,e as f,p as N,b as j}from"./theme-MCKW7A70.js";import{r as c}from"./iframe-CEQ2x2Sj.js";import{F as p}from"./FeeSpeedSheet-Xv2495xS.js";import{M as O}from"./index-BaWkcwS2.js";import{T as C}from"./index-BM7YNmEh.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BbqMeHaw.js";import"./Animated-wb4Z0zlE.js";import"./extends-CF3RwP-h.js";import"./index-B38bI2Ya.js";import"./index-CVD2KRKh.js";import"./index-b4goAUR3.js";import"./index-DGZaVrSz.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-C7PvJwFQ.js";import"./index-DAFIQ0Qv.js";import"./index-ByeYIbSa.js";import"./index-BKKg9C2b.js";import"./StatusPill-BhqPyd95.js";import"./undo-2-CbsmOT_V.js";import"./createLucideIcon-P9AE_Ti5.js";import"./registry-BNXumi8c.js";import"./circle-x-CTN86DQM.js";import"./circle-check-C7wSsHMw.js";import"./info-CowxKcuk.js";const D=[{id:"low",label:"Low",time:"<1 min"},{id:"medium",label:"Medium",time:"<10 sec"},{id:"high",label:"High",time:"<1 sec"}],i=({networkStatus:l,initialSelected:u,options:S=D})=>{const[g,m]=c.useState(!0),[k,w]=c.useState(u);return e.jsxs(b,{style:d.demo,children:[e.jsx(O,{style:d.trigger,onPress:()=>m(!0),children:e.jsx(C,{allowFontScaling:!1,style:[h.bodySemiboldMD,d.triggerText],children:"Open Fee & Speed"})}),e.jsx(p,{isOpen:g,onClose:()=>m(!1),options:S,selectedId:k,recommendedId:"medium",networkStatus:l,onSelect:w})]})},$={title:"Send/FeeSpeedSheet",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}}},t={render:()=>e.jsx(i,{networkStatus:{label:"Network: Smooth",status:"success"},initialSelected:"medium"})},o={render:()=>e.jsx(i,{networkStatus:{label:"Network: Busy",status:"pending"},initialSelected:"medium"})},r={render:()=>e.jsx(i,{networkStatus:{label:"Network: Congested",status:"failed"},initialSelected:"medium"})},s={render:()=>e.jsx(i,{networkStatus:{label:"Network: Smooth",status:"success"},initialSelected:"custom"})},a={render:()=>e.jsx(i,{networkStatus:{label:"Network: Smooth",status:"success"},initialSelected:"medium",options:[]})},d=y.create({demo:{flex:1,justifyContent:"flex-start",alignItems:"center",paddingTop:n.s16,backgroundColor:j.bg0},trigger:{backgroundColor:N.p500,borderRadius:f.full,paddingHorizontal:n.s6,paddingVertical:n.s3},triggerText:{color:x.t0}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Smooth",
    status: "success"
  }} initialSelected="medium" />
}`,...t.parameters?.docs?.source},description:{story:"Network smooth (green) — Medium selected + recommended",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Busy",
    status: "pending"
  }} initialSelected="medium" />
}`,...o.parameters?.docs?.source},description:{story:"Network busy (amber)",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Congested",
    status: "failed"
  }} initialSelected="medium" />
}`,...r.parameters?.docs?.source},description:{story:"Network congested (red)",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Smooth",
    status: "success"
  }} initialSelected="custom" />
}`,...s.parameters?.docs?.source},description:{story:"selectedId not in options — falls back to the recommended option (Medium)",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Smooth",
    status: "success"
  }} initialSelected="medium" options={[]} />
}`,...a.parameters?.docs?.source},description:{story:"No options — the segmented bar is omitted rather than rendered empty",...a.parameters?.docs?.description}}};const ee=["Smooth","Busy","Congested","UnknownSelection","NoOptions"];export{o as Busy,r as Congested,a as NoOptions,t as Smooth,s as UnknownSelection,ee as __namedExportsOrder,$ as default};
