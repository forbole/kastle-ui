import{A as n}from"./AddCustomNodeSheet-Y3sTmeek.js";import"./theme-BtKapHSy.js";import"./iframe-BknR4Qgk.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-TriaV5zr.js";import"./Animated-DVTlnfav.js";import"./extends-CF3RwP-h.js";import"./index-CFu16CSF.js";import"./index-3l-Jjoce.js";import"./index-tFHqG-TW.js";import"./index-BmanuUWc.js";import"./NativeEventEmitter-CUN96EcP.js";import"./index-DCNkbZNB.js";import"./index-DwjPW7rc.js";import"./index-wUDe7m24.js";import"./index-CuhM6FwZ.js";import"./index-Bo4pje1R.js";import"./Input-T3YeR6m_.js";import"./index-BzooAZ2z.js";import"./circle-alert-BRWm6_by.js";import"./createLucideIcon-Bb93KJRL.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-CPbaJuSo.js";import"./Button-Dg_egZD9.js";import"./index-DEaiIiH1.js";import"./info-CvSvOVTE.js";const y={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
