import{A as n}from"./AddCustomNodeSheet-Cquesox5.js";import"./theme-DUUwpOBf.js";import"./iframe-tKf2LmYe.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CecZuSfa.js";import"./Animated-BYgnYqq6.js";import"./extends-CF3RwP-h.js";import"./index-Be8PXOfJ.js";import"./index-BJg_qW_-.js";import"./index-BApUK69x.js";import"./index-lLTJEeRa.js";import"./NativeEventEmitter-5PysfvWZ.js";import"./index-S3B10JZL.js";import"./index-BowEVcHw.js";import"./index-DdzobZ4F.js";import"./index-CiR86K3r.js";import"./index-CbmKKFBU.js";import"./Input-CQPOWChf.js";import"./index-jfUf2mXJ.js";import"./circle-alert-_PsgFArO.js";import"./createLucideIcon-DuzYLQ7k.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-hhtXTMxR.js";import"./index-C3z6wzzv.js";import"./info-gV-PtVBL.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
