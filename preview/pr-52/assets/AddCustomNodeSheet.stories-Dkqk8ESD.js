import{A as n}from"./AddCustomNodeSheet-BMtIF2a5.js";import"./theme-DglJhicK.js";import"./iframe-CU-Zjm2b.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-1OiOK0KF.js";import"./Animated-BFjZoZkP.js";import"./extends-CF3RwP-h.js";import"./index-CV6nhDdt.js";import"./index-CXWo9_IW.js";import"./index-14LLgglL.js";import"./index-KoLHHI-L.js";import"./NativeEventEmitter-jc1HuR-1.js";import"./index-C4tRQv6Y.js";import"./index-Bz88AlIB.js";import"./index-CthkpQpd.js";import"./index-DJVjq_hC.js";import"./index-6GpvJ_gk.js";import"./Input-Dq-ewO37.js";import"./index-Cn5OSSVG.js";import"./circle-alert-qntzwhRi.js";import"./createLucideIcon-BD6Rl3dZ.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-kXzPo8mH.js";import"./index-xtbRVQJE.js";import"./info-C9W7LAUu.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
