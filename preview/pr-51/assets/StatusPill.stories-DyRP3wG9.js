import{j as a,V as n,s as c,a as i,b as d}from"./theme-tm8qW0eE.js";import{S as p}from"./StatusPill-BWmoyg9J.js";import"./iframe-CDjD0oNl.js";import"./preload-helper-Zf8nSx-t.js";import"./clock-fading-DqSw56YJ.js";import"./createLucideIcon-BQIvXPMK.js";import"./registry-BNXumi8c.js";import"./circle-x-CzeI3y27.js";import"./index-BVAvSE2L.js";const h={title:"Components/StatusPill",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[o=>a.jsx(n,{style:m.decorator,children:a.jsx(o,{})})]},s={args:{status:"success"}},e={args:{status:"failed"}},r={args:{status:"pending"}},t={args:{status:"success",label:"Network: Smooth",icon:"dot"}},m=c.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:d.bg0,padding:i.s5}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Transaction in-flight — amber",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success",
    label: "Network: Smooth",
    icon: "dot"
  }
}`,...t.parameters?.docs?.source},description:{story:"Dot variant — network status badge (e.g. Fee & Speed sheet)",...t.parameters?.docs?.description}}};const x=["Success","Failed","Pending","NetworkDot"];export{e as Failed,t as NetworkDot,r as Pending,s as Success,x as __namedExportsOrder,h as default};
