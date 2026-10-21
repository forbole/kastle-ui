import{A as n}from"./AddCustomNodeSheet-apQYKRjC.js";import"./theme-CCmuuQ4c.js";import"./iframe-CbUwcMTK.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BPSEhxAD.js";import"./Animated-DaYi7OwV.js";import"./extends-CF3RwP-h.js";import"./index-BZTpTMyg.js";import"./index-BOEVp_gm.js";import"./index-CX96r99P.js";import"./index-BDvRl0d3.js";import"./NativeEventEmitter-0xSt7yDf.js";import"./index-Bmu0YB2B.js";import"./index-Cmr_M_OP.js";import"./index-dA1DOLZk.js";import"./index-DVYQWggB.js";import"./Input-DXdAqyUN.js";import"./index-C-p2P4Ei.js";import"./circle-alert-DCWdgAg6.js";import"./createLucideIcon-px4LNY_i.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BUQGDNfI.js";import"./Button-D816jmNK.js";import"./index-Dh0gZ2Eq.js";import"./info-BjxmevR3.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
