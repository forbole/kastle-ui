import{j as t,V as o,s as n,a as c,b as i}from"./theme-C2Wfrodj.js";import{S as p}from"./StatusPill-BFdV7wfU.js";import"./iframe-Cees0VVP.js";import"./preload-helper-Zf8nSx-t.js";import"./clock-fading-CnQ__9Mx.js";import"./createLucideIcon-mT3D29t_.js";import"./registry-BNXumi8c.js";import"./index-CDIDfjPd.js";import"./circle-x-BXn_Oy5h.js";import"./circle-check-KElZig32.js";import"./index-D0uPuLc5.js";const k={title:"Components/StatusPill",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>t.jsx(o,{style:d.decorator,children:t.jsx(a,{})})]},s={args:{status:"success"}},r={args:{status:"failed"}},e={args:{status:"pending"}},d=n.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:i.bg0,padding:c.s5}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
