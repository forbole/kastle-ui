import{A as n}from"./AddCustomNodeSheet-D-be6zPY.js";import"./theme-BvEG2el5.js";import"./iframe-DE-pcUbF.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BTxG06xe.js";import"./Animated-BbiTTNbp.js";import"./extends-CF3RwP-h.js";import"./index-BjkTfFpE.js";import"./index-D5r3Kqah.js";import"./index-QvfsiVsO.js";import"./index-C32hrTTR.js";import"./NativeEventEmitter-BlMYH-Wc.js";import"./index-wpC9lfzq.js";import"./index-WXyEva2y.js";import"./index-CeABpYd5.js";import"./index-a4b8Jy4s.js";import"./index-CO6hy7-K.js";import"./InlineActionSheet-BpUSBO5M.js";import"./Input-Nib8djPH.js";import"./index-BPX4WrZT.js";import"./circle-alert-BWxx-sip.js";import"./createLucideIcon-CP23B5re.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-Btbd6FZ0.js";import"./index-Ce34u9x1.js";import"./index-BczQpI8Z.js";import"./info-DWV9-sr5.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
