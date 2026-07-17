import{A as n}from"./AddCustomNodeSheet-zXRpGeZK.js";import"./theme-C2Wfrodj.js";import"./iframe-Cees0VVP.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-Bno_V2T3.js";import"./Animated-CBkJdtwZ.js";import"./extends-CF3RwP-h.js";import"./index-G5D8g_Ac.js";import"./index-CDIDfjPd.js";import"./index-R9VhtlIC.js";import"./index-CZ07B35o.js";import"./NativeEventEmitter-DOwegC0Y.js";import"./index-yd_1a2AF.js";import"./index-D0uPuLc5.js";import"./index-28yLR7ch.js";import"./index-DI6WmOzE.js";import"./index-BY81t-fP.js";import"./Input-WGa7di15.js";import"./index-BqxGlarg.js";import"./circle-alert-BuW40J3T.js";import"./createLucideIcon-mT3D29t_.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BwbVNo7X.js";import"./index-BpTLh3et.js";import"./info-Cs6xrVw0.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
