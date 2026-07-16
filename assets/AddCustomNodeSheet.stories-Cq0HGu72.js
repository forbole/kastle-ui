import{A as n}from"./AddCustomNodeSheet-DcM_xsNV.js";import"./theme-BuvnJnPa.js";import"./iframe-D6R8CMx7.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-B8r7ucbY.js";import"./Animated-vRsWeMDg.js";import"./extends-CF3RwP-h.js";import"./index-BlHtojOB.js";import"./index-BfKzamwu.js";import"./index-w5c20Sw8.js";import"./index-BJ2oxcP1.js";import"./NativeEventEmitter-BFzRP1Sh.js";import"./index-s0ukbItA.js";import"./index-DweBPXix.js";import"./index-BG0xEzbE.js";import"./index-YeJAaeCd.js";import"./index-DKEOixHS.js";import"./Input-Cu68Xeue.js";import"./index-UM84ojFB.js";import"./circle-alert-CEgxboC3.js";import"./createLucideIcon-DtCGPtUA.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-xuOOoMD1.js";import"./index-BprqkvUj.js";import"./info-Sl-ZdnR8.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
