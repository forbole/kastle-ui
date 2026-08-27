import{A as n}from"./AddCustomNodeSheet-DfI5y6qv.js";import"./theme-09mISNsL.js";import"./iframe-Ct00E-B2.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DWR6GSKA.js";import"./Animated-C7d5gpx2.js";import"./extends-CF3RwP-h.js";import"./index-Dvp3P8fL.js";import"./index-J2tUWZ5M.js";import"./index-B6kWY1k6.js";import"./index-BFZDyS6Z.js";import"./NativeEventEmitter-CgEs_HkQ.js";import"./index-FHcxJb27.js";import"./index-CFkunfUf.js";import"./index-IlXRGZTx.js";import"./index-Dogi9zd4.js";import"./index-BjgCSB9U.js";import"./Input-CEYi7EJ-.js";import"./index-DPcPWAZH.js";import"./circle-alert-Buf3E6RN.js";import"./createLucideIcon-P9BBITrf.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-DODcgaLR.js";import"./Button-NXO4rNf-.js";import"./index-B9r19LBh.js";import"./info-BlZxQW8L.js";const y={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const P=["Default","Filled","Validating","Error"];export{r as Default,t as Error,e as Filled,o as Validating,P as __namedExportsOrder,y as default};
