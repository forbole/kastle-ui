import{A as n}from"./AddCustomNodeSheet-D_A5ZQAP.js";import"./theme-D5QllvKu.js";import"./iframe-Dx-8gkZT.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BCvjK1FL.js";import"./Animated-D4G_K_H6.js";import"./extends-CF3RwP-h.js";import"./index-NvcPEbGE.js";import"./index-C5KS9oMG.js";import"./index-BR-Y5Sz3.js";import"./index-CxTZa0jx.js";import"./NativeEventEmitter-F6mcDHbX.js";import"./index-C8JCGSMM.js";import"./index-BWFw-6wm.js";import"./index-DlNmS1KX.js";import"./index-BSJGRPGt.js";import"./index-BeanB3jE.js";import"./index-BHCCxso1.js";import"./Input-DHsqVpc3.js";import"./index-CaMVidXf.js";import"./circle-alert-CD8gearm.js";import"./createLucideIcon-B9dIegYl.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-B0Ur7LE7.js";import"./Button-wRvITufa.js";import"./index-CRP4bzlJ.js";import"./info-G9MyYVrm.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const R=["Default","Filled","Validating","Error"];export{r as Default,t as Error,e as Filled,o as Validating,R as __namedExportsOrder,P as default};
