import{A as n}from"./AddCustomNodeSheet-JlUKaswH.js";import"./theme-7NxzQjFP.js";import"./iframe-C4vmSYnN.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BYt0qyU8.js";import"./Animated-BGgyK_1G.js";import"./extends-CF3RwP-h.js";import"./index-BRzTNaO5.js";import"./index-C1BvqI76.js";import"./index-DUDLpeip.js";import"./index-BkwRkk-R.js";import"./NativeEventEmitter-DsrUiW9w.js";import"./index-DgYye7Cj.js";import"./index-dwtQSYn0.js";import"./index-B4l6WRgo.js";import"./index-sAArDLFF.js";import"./index-DLv7QJWE.js";import"./Input-BgXobhzG.js";import"./index-eYUUuK7J.js";import"./circle-alert-Di0gdVD5.js";import"./createLucideIcon-BZY-joqi.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-WP6TIxMB.js";import"./Button-p6qWpy5G.js";import"./index-C7q-gKfL.js";import"./info-Dh2dc1Vv.js";const y={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const P=["Default","Filled","Validating","Error"];export{r as Default,t as Error,e as Filled,o as Validating,P as __namedExportsOrder,y as default};
