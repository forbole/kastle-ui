import{j as t,V as o,s as n,a as c,b as i}from"./theme-C_cWzS-4.js";import{S as p}from"./StatusPill-B2yG7V22.js";import"./iframe-DMIFxX_x.js";import"./preload-helper-Zf8nSx-t.js";import"./clock-fading-CTFZkgDn.js";import"./createLucideIcon-BONm68I-.js";import"./registry-BNXumi8c.js";import"./circle-x-DvwbhNSw.js";import"./circle-check-Rl23ES-5.js";import"./index-BpPZ0Km4.js";const h={title:"Components/StatusPill",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>t.jsx(o,{style:d.decorator,children:t.jsx(a,{})})]},s={args:{status:"success"}},e={args:{status:"failed"}},r={args:{status:"pending"}},d=n.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:i.bg0,padding:c.s5}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  }
}`,...s.parameters?.docs?.source},description:{story:"Transaction confirmed — green",...s.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    status: "failed"
  }
}`,...e.parameters?.docs?.source},description:{story:"Transaction failed — red",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pending"
  }
}`,...r.parameters?.docs?.source},description:{story:"Transaction in-flight — amber",...r.parameters?.docs?.description}}};const k=["Success","Failed","Pending"];export{e as Failed,r as Pending,s as Success,k as __namedExportsOrder,h as default};
