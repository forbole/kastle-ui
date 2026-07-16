import{j as t,V as o,s as n,a as c,b as i}from"./theme-BvEG2el5.js";import{S as p}from"./StatusPill-3arM08Hg.js";import"./iframe-DE-pcUbF.js";import"./preload-helper-Zf8nSx-t.js";import"./clock-fading-3CARcRa4.js";import"./createLucideIcon-CP23B5re.js";import"./registry-BNXumi8c.js";import"./index-D5r3Kqah.js";import"./circle-x-DePSKIZy.js";import"./circle-check-C6bEd1E8.js";import"./index-WXyEva2y.js";const k={title:"Components/StatusPill",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>t.jsx(o,{style:d.decorator,children:t.jsx(a,{})})]},s={args:{status:"success"}},r={args:{status:"failed"}},e={args:{status:"pending"}},d=n.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:i.bg0,padding:c.s5}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source},description:{story:"Transaction in-flight — amber",...e.parameters?.docs?.description}}};const P=["Success","Failed","Pending"];export{r as Failed,e as Pending,s as Success,P as __namedExportsOrder,k as default};
