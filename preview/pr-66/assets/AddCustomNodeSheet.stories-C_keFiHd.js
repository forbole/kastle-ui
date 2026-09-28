import{A as n}from"./AddCustomNodeSheet-B4QuNweX.js";import"./theme-wP9RlZRM.js";import"./iframe-CFm_rjMm.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-G2gfbgQu.js";import"./Animated-Bee7hbti.js";import"./extends-CF3RwP-h.js";import"./index-CDtCChKM.js";import"./index-m0Q4tz4Z.js";import"./index-IeyLb-Vx.js";import"./index-DZXGs7LO.js";import"./NativeEventEmitter-D1_kvAjs.js";import"./index-B-5JEVnn.js";import"./index-B-t7h6kb.js";import"./index-CmjvyzCy.js";import"./index-m66UXxvk.js";import"./index-BFkkwh5T.js";import"./index-B_Scdc6q.js";import"./Input-HWlurbGX.js";import"./index-wq19z8jz.js";import"./circle-alert-DycRW7HS.js";import"./createLucideIcon-qAR8mMf4.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-B8s1u6eB.js";import"./Button-Dlz70oj0.js";import"./index-B3lzwAwJ.js";import"./info-BiKovaLt.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
