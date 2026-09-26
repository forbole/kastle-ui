import{j as e,V as b,T as h,c as y,s as x,t as N,a as n,e as f,p as j,b as O}from"./theme-CiNQ9tnV.js";import{r as c}from"./iframe-BONNEfx2.js";import{F as l}from"./FeeSpeedSheet-zF1E5MLF.js";import{M as C}from"./index-BKmf4mHU.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DEtOxdri.js";import"./Animated-DZpzYPxE.js";import"./extends-CF3RwP-h.js";import"./index-B_p013at.js";import"./index-QM5v7C0K.js";import"./index-BslmBNqt.js";import"./index-C1ljuv1j.js";import"./NativeEventEmitter-CYKJmPxg.js";import"./index-D-ZjIVYJ.js";import"./index-k6tIaml9.js";import"./index-C0GAc4go.js";import"./StatusPill-tFQn6GKN.js";import"./undo-2-CBYeaYIE.js";import"./createLucideIcon-D_P4aotJ.js";import"./registry-BNXumi8c.js";import"./circle-x-DrYQoFW6.js";import"./circle-check-12FaMu-w.js";import"./info-C_vKvYRW.js";const D=[{id:"low",label:"Low",time:"<1 min"},{id:"medium",label:"Medium",time:"<10 sec"},{id:"high",label:"High",time:"<1 sec"}],i=({networkStatus:p,initialSelected:u,options:S=D})=>{const[g,m]=c.useState(!0),[k,w]=c.useState(u);return e.jsxs(b,{style:d.demo,children:[e.jsx(C,{style:d.trigger,onPress:()=>m(!0),children:e.jsx(h,{allowFontScaling:!1,style:[y.bodySemiboldMD,d.triggerText],children:"Open Fee & Speed"})}),e.jsx(l,{isOpen:g,onClose:()=>m(!1),options:S,selectedId:k,recommendedId:"medium",networkStatus:p,onSelect:w})]})},Y={title:"Send/FeeSpeedSheet",component:l,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}}},t={render:()=>e.jsx(i,{networkStatus:{label:"Network: Smooth",status:"success"},initialSelected:"medium"})},s={render:()=>e.jsx(i,{networkStatus:{label:"Network: Busy",status:"pending"},initialSelected:"medium"})},o={render:()=>e.jsx(i,{networkStatus:{label:"Network: Congested",status:"failed"},initialSelected:"medium"})},r={render:()=>e.jsx(i,{networkStatus:{label:"Network: Smooth",status:"success"},initialSelected:"custom"})},a={render:()=>e.jsx(i,{networkStatus:{label:"Network: Smooth",status:"success"},initialSelected:"medium",options:[]})},d=x.create({demo:{flex:1,justifyContent:"flex-start",alignItems:"center",paddingTop:n.s16,backgroundColor:O.bg0},trigger:{backgroundColor:j.p500,borderRadius:f.full,paddingHorizontal:n.s6,paddingVertical:n.s3},triggerText:{color:N.t0}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Smooth",
    status: "success"
  }} initialSelected="medium" />
}`,...t.parameters?.docs?.source},description:{story:"Network smooth (green) — Medium selected + recommended",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Busy",
    status: "pending"
  }} initialSelected="medium" />
}`,...s.parameters?.docs?.source},description:{story:"Network busy (amber)",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Congested",
    status: "failed"
  }} initialSelected="medium" />
}`,...o.parameters?.docs?.source},description:{story:"Network congested (red)",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Smooth",
    status: "success"
  }} initialSelected="custom" />
}`,...r.parameters?.docs?.source},description:{story:"selectedId not in options — falls back to the recommended option (Medium)",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Smooth",
    status: "success"
  }} initialSelected="medium" options={[]} />
}`,...a.parameters?.docs?.source},description:{story:"No options — the segmented bar is omitted rather than rendered empty",...a.parameters?.docs?.description}}};const Z=["Smooth","Busy","Congested","UnknownSelection","NoOptions"];export{s as Busy,o as Congested,a as NoOptions,t as Smooth,r as UnknownSelection,Z as __namedExportsOrder,Y as default};
