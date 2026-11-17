import{A as i}from"./AddCustomNodeSheet-CncTFPOL.js";import"./theme-jkAK6PKL.js";import"./iframe-DhidVUQV.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-7rTDzda5.js";import"./Animated-CwWXSCTY.js";import"./extends-CF3RwP-h.js";import"./index-LjXFnOBp.js";import"./index-_1objsqj.js";import"./index-N7i6SfTM.js";import"./index-DWddP1mu.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-BChM0mkR.js";import"./index-CzJc6WPs.js";import"./index-gpQE1fxR.js";import"./index-_w8TxXiO.js";import"./index-BJ03fJbI.js";import"./index-DNhJZhP5.js";import"./index-DBfl_XJ9.js";import"./Input-DHX4oK6n.js";import"./index-Bksw5Hvk.js";import"./circle-alert-1RjNzzMi.js";import"./createLucideIcon-Cd9UjiyI.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-DM8uvi-f.js";import"./Button-yfeKKyCL.js";import"./index-CzRKQXtT.js";import"./info-BNEWiHQX.js";const R={title:"Custom-RPC/Components/AddCustomNodeSheet",component:i},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const j=["Default","Filled","Validating","Error"];export{r as Default,t as Error,e as Filled,o as Validating,j as __namedExportsOrder,R as default};
