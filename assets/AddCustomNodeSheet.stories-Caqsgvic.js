import{A as n}from"./AddCustomNodeSheet-DH8AK_wf.js";import"./theme-CiNQ9tnV.js";import"./iframe-BONNEfx2.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DEtOxdri.js";import"./Animated-DZpzYPxE.js";import"./extends-CF3RwP-h.js";import"./index-B_p013at.js";import"./index-QM5v7C0K.js";import"./index-BslmBNqt.js";import"./index-C1ljuv1j.js";import"./NativeEventEmitter-CYKJmPxg.js";import"./index-D-ZjIVYJ.js";import"./index-k6tIaml9.js";import"./index-C0GAc4go.js";import"./index-BKmf4mHU.js";import"./Input-CJARCmy2.js";import"./index-LXmpFb67.js";import"./circle-alert-CqvfXUVg.js";import"./createLucideIcon-D_P4aotJ.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-CCq-A4H2.js";import"./Button-CC9NT0bN.js";import"./index-THQIcbEB.js";import"./info-C_vKvYRW.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
