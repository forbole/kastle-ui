import{j as t,V as o,s as n,a as c,b as i}from"./theme-Bo0HRuE0.js";import{S as d}from"./StatusPill-CGoJMe_g.js";import"./iframe-CBgVg4dk.js";import"./preload-helper-Zf8nSx-t.js";import"./AppText-CDjwh2KQ.js";import"./index-BfHM5REs.js";import"./clock-fading-CPOxcXLJ.js";import"./createLucideIcon-dArL0BHr.js";import"./registry-BNXumi8c.js";const j={title:"Components/StatusPill",component:d,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>t.jsx(o,{style:p.decorator,children:t.jsx(a,{})})]},s={args:{status:"success"}},e={args:{status:"failed"}},r={args:{status:"pending"}},p=n.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:i.bg0,padding:c.s5}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Transaction in-flight — amber",...r.parameters?.docs?.description}}};const h=["Success","Failed","Pending"];export{e as Failed,r as Pending,s as Success,h as __namedExportsOrder,j as default};
