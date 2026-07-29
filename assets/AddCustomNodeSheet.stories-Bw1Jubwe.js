import{A as n}from"./AddCustomNodeSheet-BdEJ30Uk.js";import"./theme-sYXfjpou.js";import"./iframe-BNDZO8tf.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BDraex3o.js";import"./Animated-et5I-yDa.js";import"./extends-CF3RwP-h.js";import"./index-DOAlaOTf.js";import"./index-5Hw9FKXs.js";import"./index-DiCML-6f.js";import"./index-DGtR8q7T.js";import"./NativeEventEmitter-DMN2Iu65.js";import"./index-BlY8bi7a.js";import"./index-DzjMCP5s.js";import"./index-qfs-E8ad.js";import"./index-BRuLWjby.js";import"./index-97wyV61Y.js";import"./Input-Du03rWKZ.js";import"./index-jnMh50LL.js";import"./circle-alert-DgEkXyu5.js";import"./createLucideIcon-BzllA_ZO.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-NbOtG5Qd.js";import"./index-Bz9H9YeZ.js";import"./info-BMoHc_ZG.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
