import{A as n}from"./AddCustomNodeSheet-CUaMeyOP.js";import"./theme-Ct9G0APZ.js";import"./iframe-pNpgG3AI.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DVzfx5em.js";import"./Animated-JChsmp0d.js";import"./extends-CF3RwP-h.js";import"./index-DGNddlVb.js";import"./index-D4W2EZUN.js";import"./index-BDH4ICE3.js";import"./index-C_dCbuCc.js";import"./NativeEventEmitter-DCyG36r4.js";import"./index-B4tdeOaA.js";import"./index-CqeyMOCQ.js";import"./index-jCpB3Avv.js";import"./index-CHgTjhcT.js";import"./Input-CXzaiG3T.js";import"./index-D0dTBC5-.js";import"./circle-alert-D_R-OPLt.js";import"./createLucideIcon-CH6WyxvH.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-B1DTPAF1.js";import"./Button-DRWpolqI.js";import"./index-BtRV-nBN.js";import"./info-6ivX5fIv.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
