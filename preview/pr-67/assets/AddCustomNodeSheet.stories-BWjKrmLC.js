import{A as n}from"./AddCustomNodeSheet-4M0W52R1.js";import"./theme-B7L-G7Fa.js";import"./iframe-BKm5BNzI.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CLm8BnOc.js";import"./Animated-Cf-KXBf2.js";import"./extends-CF3RwP-h.js";import"./index-CBKOrLoF.js";import"./index-DhuRbUcl.js";import"./index-CMvbUHJT.js";import"./index-BO11ZeYV.js";import"./NativeEventEmitter-BkiGltt5.js";import"./index-BapGxwBT.js";import"./index-BZ6VsoQz.js";import"./index-BNGMIoe9.js";import"./index-BkS5KVbt.js";import"./Input-D0C4s1wQ.js";import"./index-KLpQtRIK.js";import"./circle-alert-BHH6zvoe.js";import"./createLucideIcon-0oyPSJ8A.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-B0IkAMc4.js";import"./Button-CXR_QD0T.js";import"./index-WxHDv6mm.js";import"./info-CRbLjcrS.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
