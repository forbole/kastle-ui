import{A as n}from"./AddCustomNodeSheet-sc4rDzyA.js";import"./theme-BwhZGvfd.js";import"./iframe-CJF1aQW7.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-n5bt1i0W.js";import"./Animated-BPdszKbG.js";import"./extends-CF3RwP-h.js";import"./index-BXTOMBsb.js";import"./index-DWojNNaZ.js";import"./index-D-i5o7sY.js";import"./index-B2I0zkdp.js";import"./NativeEventEmitter-DwUCYPav.js";import"./index-COqq1QiL.js";import"./index-yYVY87gi.js";import"./index-DfIeJ3UV.js";import"./index-DWR59Bm7.js";import"./index-SUFA5VvO.js";import"./Input-nctLtarK.js";import"./index-DDkfShex.js";import"./circle-alert-Dgq3uUkH.js";import"./createLucideIcon-CLWO3Abk.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-DEEH_3DM.js";import"./index-CQuv8QNs.js";import"./info-BsDMe8aX.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
