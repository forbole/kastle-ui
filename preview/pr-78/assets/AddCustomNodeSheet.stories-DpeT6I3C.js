import{A as i}from"./AddCustomNodeSheet-Bf3QnmJM.js";import"./theme-EaGHEDeH.js";import"./iframe-DOgRovjb.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CjoVVmAX.js";import"./Animated-DNjKSU2M.js";import"./extends-CF3RwP-h.js";import"./index-BZ1Nhbfz.js";import"./index-wUwFDFDT.js";import"./index-BEdIy_gZ.js";import"./index-DdlO-cV0.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-geb6Dh_a.js";import"./index-DGvV-W3G.js";import"./index-BTcF033-.js";import"./index-CmBEmytU.js";import"./index-_WVdSqQl.js";import"./index-IaR0DOK6.js";import"./index-CTSQgxXF.js";import"./Input-BsAj3zvy.js";import"./index-K2OCxyoo.js";import"./circle-alert-QiAuYkNx.js";import"./createLucideIcon-DWBMUElK.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-Cs9eacgi.js";import"./Button-DpOWVXpD.js";import"./index-DofvestM.js";import"./info-Dbt5LPO3.js";const R={title:"Custom-RPC/Components/AddCustomNodeSheet",component:i},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
