import{A as n}from"./AddCustomNodeSheet-BMBuMmH6.js";import"./theme-DvqkvYvz.js";import"./iframe-DpI4YFSt.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-cQDiNJ1d.js";import"./Animated-C2tAAFXs.js";import"./extends-CF3RwP-h.js";import"./index-uw0eQTL-.js";import"./index-BI3QZd9T.js";import"./index-DCyWiIq3.js";import"./index-D3Tc0iIq.js";import"./NativeEventEmitter-BE35yA9U.js";import"./index-ByYI6Zuh.js";import"./index-C0NGADTo.js";import"./index-Dqul_KNi.js";import"./index-Gacglc9J.js";import"./index-erEf1DuA.js";import"./index-CxjhOjCQ.js";import"./Input-LzDwkbWQ.js";import"./index-C_cR7voF.js";import"./circle-alert-BlZHYjb5.js";import"./createLucideIcon-a0_exxZf.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BRLJGckB.js";import"./Button-OUmlMD96.js";import"./index-Ao93k1Ml.js";import"./info-BxClHp3U.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
