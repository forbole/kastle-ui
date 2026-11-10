import{A as n}from"./AddCustomNodeSheet-BmVEOKZR.js";import"./theme-CvtKae92.js";import"./iframe-D_g5qihE.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BMCVrY7L.js";import"./Animated-DlNIZ4wZ.js";import"./extends-CF3RwP-h.js";import"./index-DH9uczcW.js";import"./index-CgXQfuNp.js";import"./index-8b4FVJSG.js";import"./index-Cu_ge-RS.js";import"./NativeEventEmitter-CU4C7hlO.js";import"./index-CFpIXNa1.js";import"./index-B570ok8F.js";import"./index-BruYWIvV.js";import"./index-__jGpVvv.js";import"./index-D3taSDII.js";import"./index-yxtjKpYJ.js";import"./Input-DHrqbbK_.js";import"./index-DqZCgASP.js";import"./circle-alert-DiusMRSB.js";import"./createLucideIcon-BKMQ98uw.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BiZ5QX1h.js";import"./Button-dVuKQ42V.js";import"./index-n5FGmvQJ.js";import"./info-j5MAgped.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
