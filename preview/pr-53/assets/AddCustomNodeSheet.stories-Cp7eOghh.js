import{A as n}from"./AddCustomNodeSheet-BaexuhtF.js";import"./theme-BqYMy_pQ.js";import"./iframe-DyX1_DgY.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BAjiLLiO.js";import"./Animated-DVDE__Cd.js";import"./extends-CF3RwP-h.js";import"./index-6Huqwo6r.js";import"./index-BjH-MALJ.js";import"./index-B0EZDTTD.js";import"./index-D6VibFAM.js";import"./NativeEventEmitter-CRGXb2VJ.js";import"./index-C6mDQV8P.js";import"./index-CFW6ixWj.js";import"./index-Bpby9Bp9.js";import"./index-t8CL4rv6.js";import"./index-cChUFaRk.js";import"./Input-BI628P7x.js";import"./index-f4yjLRV8.js";import"./circle-alert-CZ1Dl9EN.js";import"./createLucideIcon-DvNJsJek.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-Durimj4J.js";import"./index-CVK-m5O4.js";import"./info-CamKWV75.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
