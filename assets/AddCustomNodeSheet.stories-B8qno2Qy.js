import{A as i}from"./AddCustomNodeSheet-iV6v30YI.js";import"./theme-DYzhAaDx.js";import"./iframe-D24O7SeT.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CtNGcJo5.js";import"./Animated-BI3sfg-r.js";import"./extends-CF3RwP-h.js";import"./index-ClzUkvUE.js";import"./index-vDJtv3wJ.js";import"./index-XP8vgcWJ.js";import"./index-Bsd0IIl7.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-0gcp5Jzp.js";import"./index-DLTIQwEC.js";import"./index-T6TIxRK5.js";import"./index-Bf9v-kSC.js";import"./index-B5vvSMTT.js";import"./index-Crk0kmJo.js";import"./index-CIg8Mr94.js";import"./Input-CtRTW3Yg.js";import"./index-jZdmPKyu.js";import"./circle-alert-D0nGaURw.js";import"./createLucideIcon-DLhpeO6J.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BoaI6ZH7.js";import"./Button-KxXtBs26.js";import"./index-BBR3oiUD.js";import"./info-ztn1t4My.js";const R={title:"Custom-RPC/Components/AddCustomNodeSheet",component:i},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const j=["Default","Filled","Validating","Error"];export{r as Default,t as Error,e as Filled,o as Validating,j as __namedExportsOrder,R as default};
