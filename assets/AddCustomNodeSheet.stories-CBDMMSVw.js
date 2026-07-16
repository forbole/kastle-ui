import{A as n}from"./AddCustomNodeSheet-5lx2JUgr.js";import"./theme-DDPaIB1X.js";import"./iframe-C0__Ltsv.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DvxUdlJr.js";import"./Animated-DJKOX9xM.js";import"./extends-CF3RwP-h.js";import"./index-Ekj8WKL8.js";import"./index-DrZ2CmGC.js";import"./index-DkCPsSdY.js";import"./index-CHxr0GrG.js";import"./NativeEventEmitter-CQZi2GAB.js";import"./index-DFGkYJg2.js";import"./index-CgXa9ahC.js";import"./index-3iVlI0mm.js";import"./index-B5MUOD7Q.js";import"./index-BQBSTirH.js";import"./Input-C24rrzTe.js";import"./index-BWmLAQFm.js";import"./circle-alert-B3SQU9AP.js";import"./createLucideIcon-CJQ7ynVx.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BG0KuamA.js";import"./index-sG4DWfBj.js";import"./info--1prSNQm.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    ...handlers
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    ...filled,
    ...handlers
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    ...filled,
    isValidating: true,
    ...handlers
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    defaultName: "Home node",
    defaultUrl: "wss://bad-node",
    error: "Can't reach this address.",
    ...handlers
  }
}`,...s.parameters?.docs?.source}}};const y=["Default","Filled","Validating","Error"];export{r as Default,s as Error,e as Filled,o as Validating,y as __namedExportsOrder,k as default};
