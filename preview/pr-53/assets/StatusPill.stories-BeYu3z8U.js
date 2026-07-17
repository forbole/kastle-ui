import{j as o,V as i,s as c,a as d,b as p}from"./theme-BqYMy_pQ.js";import{S as m}from"./StatusPill-BYuE-gY2.js";import"./iframe-DyX1_DgY.js";import"./preload-helper-Zf8nSx-t.js";import"./clock-fading-D38eyxTK.js";import"./createLucideIcon-DvNJsJek.js";import"./registry-BNXumi8c.js";import"./index-BjH-MALJ.js";import"./circle-x-C2sd9K0i.js";import"./circle-check-CtrKR7Lg.js";import"./index-CFW6ixWj.js";const L={title:"Components/StatusPill",component:m,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[n=>o.jsx(i,{style:u.decorator,children:o.jsx(n,{})})]},s={args:{status:"success"}},r={args:{status:"failed"}},e={args:{status:"pending"}},t={args:{status:"success",label:"Locked",indicator:"dot"}},a={args:{status:"pending",label:"Withdrawing",indicator:"dot"}},u=c.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:p.bg0,padding:d.s5}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  }
}`,...s.parameters?.docs?.source},description:{story:"Transaction confirmed — green",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: "failed"
  }
}`,...r.parameters?.docs?.source},description:{story:"Transaction failed — red",...r.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pending"
  }
}`,...e.parameters?.docs?.source},description:{story:"Transaction in-flight — amber",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success",
    label: "Locked",
    indicator: "dot"
  }
}`,...t.parameters?.docs?.source},description:{story:"Vault — Locked (green dot indicator)",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pending",
    label: "Withdrawing",
    indicator: "dot"
  }
}`,...a.parameters?.docs?.source},description:{story:"Vault — Withdrawing (amber dot indicator)",...a.parameters?.docs?.description}}};const V=["Success","Failed","Pending","LockedDot","WithdrawingDot"];export{r as Failed,t as LockedDot,e as Pending,s as Success,a as WithdrawingDot,V as __namedExportsOrder,L as default};
