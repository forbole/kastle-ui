import{j as i,V as d,s as p,a as m,b as u}from"./theme-CiNQ9tnV.js";import{S as l}from"./StatusPill-tFQn6GKN.js";import"./iframe-BONNEfx2.js";import"./preload-helper-Zf8nSx-t.js";import"./undo-2-CBYeaYIE.js";import"./createLucideIcon-D_P4aotJ.js";import"./registry-BNXumi8c.js";import"./index-QM5v7C0K.js";import"./circle-x-DrYQoFW6.js";import"./circle-check-12FaMu-w.js";const j={title:"Components/StatusPill",component:l,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[c=>i.jsx(d,{style:g.decorator,children:i.jsx(c,{})})]},e={args:{status:"success"}},s={args:{status:"failed"}},r={args:{status:"pending"}},t={args:{status:"refunded"}},a={args:{status:"pending",label:"Submitted"}},o={args:{status:"pending",label:"Confirmed"}},n={args:{status:"success",label:"Network: Smooth",icon:"dot"}},g=p.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0,padding:m.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Dot variant — network status badge (e.g. Fee & Speed sheet)",...n.parameters?.docs?.description}}};const N=["Success","Failed","Pending","Refunded","Submitted","Confirmed","NetworkDot"];export{o as Confirmed,s as Failed,n as NetworkDot,r as Pending,t as Refunded,a as Submitted,e as Success,N as __namedExportsOrder,j as default};
