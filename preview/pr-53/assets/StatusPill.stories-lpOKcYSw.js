import{j as d,V as p,s as u,a as m,b as l}from"./theme-Ct9G0APZ.js";import{S as g}from"./StatusPill-C05Vi50f.js";import"./iframe-pNpgG3AI.js";import"./preload-helper-Zf8nSx-t.js";import"./undo-2-CyWMDe2t.js";import"./createLucideIcon-CH6WyxvH.js";import"./registry-BNXumi8c.js";import"./index-D4W2EZUN.js";import"./circle-x-CK5g_F3P.js";import"./circle-check-Btk0WE_e.js";const L={title:"Components/StatusPill",component:g,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[c=>d.jsx(p,{style:f.decorator,children:d.jsx(c,{})})]},e={args:{status:"success"}},s={args:{status:"failed"}},r={args:{status:"pending"}},t={args:{status:"refunded"}},a={args:{status:"pending",label:"Submitted"}},o={args:{status:"pending",label:"Confirmed"}},n={args:{status:"success",label:"Locked",indicator:"dot"}},i={args:{status:"pending",label:"Withdrawing",indicator:"dot"}},f=u.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:l.bg0,padding:m.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    label: "Locked",
    indicator: "dot"
  }
}`,...n.parameters?.docs?.source},description:{story:"Vault — Locked (green dot indicator)",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pending",
    label: "Withdrawing",
    indicator: "dot"
  }
}`,...i.parameters?.docs?.source},description:{story:"Vault — Withdrawing (amber dot indicator)",...i.parameters?.docs?.description}}};const V=["Success","Failed","Pending","Refunded","Submitted","Confirmed","LockedDot","WithdrawingDot"];export{o as Confirmed,s as Failed,n as LockedDot,r as Pending,t as Refunded,a as Submitted,e as Success,i as WithdrawingDot,V as __namedExportsOrder,L as default};
