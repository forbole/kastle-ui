import{A as n}from"./AddCustomNodeSheet-C9eDkN8W.js";import"./theme-CYuAIMJK.js";import"./iframe-UKeZJ1p4.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-ClWCN4Aq.js";import"./Animated-CYwA4JOs.js";import"./extends-CF3RwP-h.js";import"./index-DXoSCWKd.js";import"./index-D-vgo2ls.js";import"./index-CVAWnVcZ.js";import"./index-BkqpxmWS.js";import"./NativeEventEmitter-DBYDmiND.js";import"./index-D7ZYgqNi.js";import"./index-BQMV-55v.js";import"./index-Cts2jnKk.js";import"./index-BsbLsTtS.js";import"./index-CQ4Czw3E.js";import"./Input-Cj-3u5hh.js";import"./index-WV-R_mBg.js";import"./circle-alert-Bk5rB2Oy.js";import"./createLucideIcon-BoPKkHzp.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-Df3S8Qzg.js";import"./Button-CD4KAokL.js";import"./index-woGbu8e9.js";import"./info-DXGCkVnj.js";const y={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
