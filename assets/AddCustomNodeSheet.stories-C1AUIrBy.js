import{A as n}from"./AddCustomNodeSheet-BYk-ex-m.js";import"./theme-BQPMGyA0.js";import"./iframe-DWuhBMh9.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-YKKLs-Tg.js";import"./Animated-DSz7WbTK.js";import"./extends-CF3RwP-h.js";import"./index-Dp-U9UG9.js";import"./index-DEi_GWca.js";import"./index-Ep6CF1Hk.js";import"./index-m4WpeeGG.js";import"./NativeEventEmitter-tjdAokAq.js";import"./index-B2mX3OOn.js";import"./index-DuIDIdAw.js";import"./index-D40kbNxI.js";import"./index-zxtS2_3A.js";import"./Input-ChlHeHtB.js";import"./index-Dz306UKS.js";import"./circle-alert-BM9egtyF.js";import"./createLucideIcon-CqNmEb8A.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-4ifsxcMa.js";import"./index-CQovHtgI.js";import"./info-px59CCGg.js";const _={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const k=["Default","Filled","Validating","Error"];export{r as Default,s as Error,e as Filled,o as Validating,k as __namedExportsOrder,_ as default};
