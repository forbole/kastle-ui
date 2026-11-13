import{A as n}from"./AddCustomNodeSheet-CGDYCp9f.js";import"./theme-C4-W9THC.js";import"./iframe-BkFF4pmQ.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DyLf638K.js";import"./Animated-C5Frsb71.js";import"./extends-CF3RwP-h.js";import"./index-kaCEKKOe.js";import"./index-YLe-iMQ7.js";import"./index-DLNQTK4j.js";import"./index-CUtl9PGm.js";import"./NativeEventEmitter-oTrNRKrH.js";import"./index-sO9IitNO.js";import"./index-CIkcyNIF.js";import"./index-DfDLajuC.js";import"./index-DX9T2mW9.js";import"./index-Ch0TAy2P.js";import"./index-CND7ytnD.js";import"./Input-BWpi2tUQ.js";import"./index-CDm-YoM0.js";import"./circle-alert-DVKT1kx4.js";import"./createLucideIcon-VoFvzMRH.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BqEkhKSs.js";import"./Button-CXwxWioO.js";import"./index-BfMMgjvN.js";import"./info-CR_34sAC.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    defaultName: "Home node",
    defaultUrl: "wss://bad-node",
    error: "Can't reach this address.",
    ...handlers
  }
}`,...t.parameters?.docs?.source}}};const R=["Default","Filled","Validating","Error"];export{r as Default,t as Error,e as Filled,o as Validating,R as __namedExportsOrder,P as default};
