import{A as n}from"./AddCustomNodeSheet-a_CNGj8-.js";import"./theme-BFTgOA-H.js";import"./iframe-C8ieX1Gy.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CLi4Lhyy.js";import"./Animated-Ds3sGBYe.js";import"./extends-CF3RwP-h.js";import"./index-BwXV0EcN.js";import"./index-Dov8nqOm.js";import"./index-DE6cGQIb.js";import"./index-DhkFpudz.js";import"./NativeEventEmitter-CuF76sLu.js";import"./index-BeW1R1Jh.js";import"./index-CE4ZAtnW.js";import"./index-BN2imlbQ.js";import"./index-DPX8gub5.js";import"./index-DTIEYTlP.js";import"./index-Bg6tCG1S.js";import"./Input-h4OcdRVF.js";import"./index-CRdvxF5n.js";import"./circle-alert-DyZPjpPF.js";import"./createLucideIcon-BNtQW39R.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-s5c8_Lrw.js";import"./Button-4GIcWSMJ.js";import"./index-Dy_y9PEg.js";import"./info-C69Rdgca.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
