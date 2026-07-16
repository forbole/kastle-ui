import{A as n}from"./AddCustomNodeSheet-DRWrN-5r.js";import"./theme-BMtPSiVD.js";import"./iframe-BwQUZMQt.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-Dm2qwoBD.js";import"./Animated-xjFMR-27.js";import"./extends-CF3RwP-h.js";import"./index-DkFxHgX3.js";import"./index-ByDU6i4n.js";import"./index-vNBP4IWG.js";import"./index-D_ghHfDS.js";import"./NativeEventEmitter-egFTkWca.js";import"./index-CVCRJxXT.js";import"./index-Ccr2xj_k.js";import"./index-BMo16Llm.js";import"./index-gOiGaJk-.js";import"./index-stlvCIdA.js";import"./Input-Di5FGC-1.js";import"./index-BEVWjPUE.js";import"./circle-alert-DyvUggeY.js";import"./createLucideIcon-C6PWtBwk.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-D6qsm9S_.js";import"./index-mNEKgtlB.js";import"./info-DruQpQ5h.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
