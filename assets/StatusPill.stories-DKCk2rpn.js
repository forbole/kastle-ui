import{j as t,V as o,s as n,a as c,b as i}from"./theme-BMtPSiVD.js";import{S as p}from"./StatusPill-Cb4_uFTJ.js";import"./iframe-BwQUZMQt.js";import"./preload-helper-Zf8nSx-t.js";import"./clock-fading-CSNWPppb.js";import"./createLucideIcon-C6PWtBwk.js";import"./registry-BNXumi8c.js";import"./index-ByDU6i4n.js";import"./circle-x-lVatLcgw.js";import"./circle-check-ChuIlFBu.js";import"./index-Ccr2xj_k.js";const k={title:"Components/StatusPill",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>t.jsx(o,{style:d.decorator,children:t.jsx(a,{})})]},s={args:{status:"success"}},r={args:{status:"failed"}},e={args:{status:"pending"}},d=n.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:i.bg0,padding:c.s5}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
