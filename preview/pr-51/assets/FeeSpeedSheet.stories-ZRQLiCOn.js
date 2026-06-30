import{j as e,V as S,e as b,s as w,t as k,a as s,c as y,p as x,b as h}from"./theme-tm8qW0eE.js";import{r as d}from"./iframe-CDjD0oNl.js";import{F as m}from"./FeeSpeedSheet-DZCKV5_a.js";import{M as f}from"./index-D23WFTFq.js";import{T as j}from"./index-BVAvSE2L.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-n4fWIsD2.js";import"./Animated-LUdsOf-H.js";import"./extends-CF3RwP-h.js";import"./index-vSHd9duR.js";import"./index-CLMb-hXG.js";import"./index-C1uhAoru.js";import"./NativeEventEmitter-BcvIvlUE.js";import"./index-BKs8cgYw.js";import"./index-CGIopG2H.js";import"./index-dbO7HnvI.js";import"./StatusPill-BWmoyg9J.js";import"./clock-fading-DqSw56YJ.js";import"./createLucideIcon-BQIvXPMK.js";import"./registry-BNXumi8c.js";import"./circle-x-CzeI3y27.js";import"./info-B66s3QP7.js";const N=[{id:"low",label:"Low",time:"<1 min"},{id:"medium",label:"Medium",time:"<10 sec"},{id:"high",label:"High",time:"<1 sec"}],i=({networkStatus:c,initialSelected:p})=>{const[l,n]=d.useState(!0),[u,g]=d.useState(p);return e.jsxs(S,{style:a.demo,children:[e.jsx(f,{style:a.trigger,onPress:()=>n(!0),children:e.jsx(j,{allowFontScaling:!1,style:[b.bodySemiboldMD,a.triggerText],children:"Open Fee & Speed"})}),e.jsx(m,{isOpen:l,onClose:()=>n(!1),options:N,selectedId:u,recommendedId:"medium",networkStatus:c,onSelect:g})]})},Q={title:"Send/FeeSpeedSheet",component:m,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}}},t={render:()=>e.jsx(i,{networkStatus:{label:"Network: Smooth",status:"success"},initialSelected:"medium"})},r={render:()=>e.jsx(i,{networkStatus:{label:"Network: Busy",status:"pending"},initialSelected:"medium"})},o={render:()=>e.jsx(i,{networkStatus:{label:"Network: Congested",status:"failed"},initialSelected:"medium"})},a=w.create({demo:{flex:1,justifyContent:"flex-start",alignItems:"center",paddingTop:s.s16,backgroundColor:h.bg0},trigger:{backgroundColor:x.p500,borderRadius:y.full,paddingHorizontal:s.s6,paddingVertical:s.s3},triggerText:{color:k.t0}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Smooth",
    status: "success"
  }} initialSelected="medium" />
}`,...t.parameters?.docs?.source},description:{story:"Network smooth (green) — Medium selected + recommended",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Busy",
    status: "pending"
  }} initialSelected="medium" />
}`,...r.parameters?.docs?.source},description:{story:"Network busy (amber)",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Demo networkStatus={{
    label: "Network: Congested",
    status: "failed"
  }} initialSelected="medium" />
}`,...o.parameters?.docs?.source},description:{story:"Network congested (red)",...o.parameters?.docs?.description}}};const U=["Smooth","Busy","Congested"];export{r as Busy,o as Congested,t as Smooth,U as __namedExportsOrder,Q as default};
