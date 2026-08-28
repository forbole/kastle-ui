import{j as n,V as d,s as c,a as p,b as m}from"./theme-8QOGWT04.js";import{S as u}from"./StatusPill-DPxSG2UB.js";import"./iframe-zWxnyr7p.js";import"./preload-helper-Zf8nSx-t.js";import"./undo-2-dfEpI37Q.js";import"./createLucideIcon-Ddhol5HT.js";import"./registry-BNXumi8c.js";import"./index-BDF7tMil.js";import"./circle-x-3r3jcxHz.js";import"./circle-check-BV-6WOFA.js";import"./index-CJru1tUL.js";const k={title:"Components/StatusPill",component:u,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[i=>n.jsx(d,{style:l.decorator,children:n.jsx(i,{})})]},e={args:{status:"success"}},s={args:{status:"failed"}},r={args:{status:"pending"}},t={args:{status:"refunded"}},a={args:{status:"pending",label:"Submitted"}},o={args:{status:"pending",label:"Confirmed"}},l=c.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:m.bg0,padding:p.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:'Bridge Activity label override — still status="pending" under the hood',...o.parameters?.docs?.description}}};const P=["Success","Failed","Pending","Refunded","Submitted","Confirmed"];export{o as Confirmed,s as Failed,r as Pending,t as Refunded,a as Submitted,e as Success,P as __namedExportsOrder,k as default};
