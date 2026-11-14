import{A as n}from"./AddCustomNodeSheet-C6oAixsD.js";import"./theme-BL901wsm.js";import"./iframe-D7ZVSzXT.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-C-Cya1f5.js";import"./Animated-ChMyxK_J.js";import"./extends-CF3RwP-h.js";import"./index-B71rpgce.js";import"./index-D352YTDK.js";import"./index-DF8hqNKG.js";import"./index-DNrp1jqU.js";import"./NativeEventEmitter-BE1gEug0.js";import"./index-DVuv6RZc.js";import"./index-B6MvyGFu.js";import"./index-BmZ3l-GP.js";import"./index-ZAh_1iL_.js";import"./index-NhLnENYY.js";import"./index-DmxNEST0.js";import"./Input-C0Jan3Yg.js";import"./index-BvZbX035.js";import"./circle-alert-D-Rdeo4R.js";import"./createLucideIcon-BUVOAs29.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-D7bYMTpL.js";import"./Button-CMBh1qwp.js";import"./index-CRyQJV-z.js";import"./info-CQgzUv2Z.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
