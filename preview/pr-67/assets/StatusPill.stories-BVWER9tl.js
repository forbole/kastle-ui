import{j as d,V as u,s as m,a as l,b as g}from"./theme-B7L-G7Fa.js";import{S as b}from"./StatusPill-BXym3FHf.js";import"./iframe-BKm5BNzI.js";import"./preload-helper-Zf8nSx-t.js";import"./undo-2-BrEHGoam.js";import"./createLucideIcon-0oyPSJ8A.js";import"./registry-BNXumi8c.js";import"./index-DhuRbUcl.js";import"./circle-x-BMl6w78o.js";import"./circle-check-BmFGt-bY.js";const L={title:"Components/StatusPill",component:b,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[p=>d.jsx(u,{style:f.decorator,children:d.jsx(p,{})})]},e={args:{status:"success"}},s={args:{status:"failed"}},r={args:{status:"pending"}},t={args:{status:"refunded"}},a={args:{status:"pending",label:"Submitted"}},o={args:{status:"pending",label:"Confirmed"}},n={args:{status:"success",label:"Network: Smooth",icon:"dot"}},i={args:{status:"success",label:"Locked",icon:"dot"}},c={args:{status:"pending",label:"Withdrawing",icon:"dot"}},f=m.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:g.bg0,padding:l.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  }
}`,...e.parameters?.docs?.source},description:{story:"Transaction confirmed — green",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "failed"
  }
}`,...s.parameters?.docs?.source},description:{story:"Transaction failed — red",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pending"
  }
}`,...r.parameters?.docs?.source},description:{story:"Transaction in-flight — amber",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "refunded"
  }
}`,...t.parameters?.docs?.source},description:{story:"Bridge withdrawal returned in full — green, distinct icon from Success",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pending",
    label: "Submitted"
  }
}`,...a.parameters?.docs?.source},description:{story:'Bridge Activity label override — still status="pending" under the hood',...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pending",
    label: "Confirmed"
  }
}`,...o.parameters?.docs?.source},description:{story:'Bridge Activity label override — still status="pending" under the hood',...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success",
    label: "Network: Smooth",
    icon: "dot"
  }
}`,...n.parameters?.docs?.source},description:{story:"Dot variant — network status badge (e.g. Fee & Speed sheet)",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success",
    label: "Locked",
    icon: "dot"
  }
}`,...i.parameters?.docs?.source},description:{story:"Vault — Locked (green dot indicator)",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pending",
    label: "Withdrawing",
    icon: "dot"
  }
}`,...c.parameters?.docs?.source},description:{story:"Vault — Withdrawing (amber dot indicator)",...c.parameters?.docs?.description}}};const V=["Success","Failed","Pending","Refunded","Submitted","Confirmed","NetworkDot","LockedDot","WithdrawingDot"];export{o as Confirmed,s as Failed,i as LockedDot,n as NetworkDot,r as Pending,t as Refunded,a as Submitted,e as Success,c as WithdrawingDot,V as __namedExportsOrder,L as default};
