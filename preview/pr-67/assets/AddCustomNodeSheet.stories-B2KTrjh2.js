import{A as n}from"./AddCustomNodeSheet-DqHuQNYf.js";import"./theme-CDDAum2J.js";import"./iframe-BxfHI4vY.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-B3nJR4Z_.js";import"./Animated-Bo8hT9Ai.js";import"./extends-CF3RwP-h.js";import"./index-CyRt7i1c.js";import"./index-DVXQIxiV.js";import"./index-BelhNlRa.js";import"./index-yFwTT9Ez.js";import"./NativeEventEmitter-Ddlet7B_.js";import"./index-Bfzz9Suu.js";import"./index-_Dwq83yi.js";import"./index-C6WqPlhC.js";import"./index-BtM_YAzl.js";import"./Input-BtuDLhFO.js";import"./index-CVyqp57x.js";import"./circle-alert-Ducc6jiw.js";import"./createLucideIcon-B_59d7vS.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BysAkvrx.js";import"./Button-6T5fo2D5.js";import"./index-BjjhjN3s.js";import"./info-B_fx1-Si.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
