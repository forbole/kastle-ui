import{A as n}from"./AddCustomNodeSheet-B56Sl3oP.js";import"./theme-MCKW7A70.js";import"./iframe-CEQ2x2Sj.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BbqMeHaw.js";import"./Animated-wb4Z0zlE.js";import"./extends-CF3RwP-h.js";import"./index-B38bI2Ya.js";import"./index-CVD2KRKh.js";import"./index-b4goAUR3.js";import"./index-DGZaVrSz.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-C7PvJwFQ.js";import"./index-DAFIQ0Qv.js";import"./index-BM7YNmEh.js";import"./index-ByeYIbSa.js";import"./index-BKKg9C2b.js";import"./index-BaWkcwS2.js";import"./Input-BEFNpM6f.js";import"./index-DgnXSd5u.js";import"./circle-alert-CZZdfcv3.js";import"./createLucideIcon-P9AE_Ti5.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BlDWZB6l.js";import"./Button-DbdelZ5q.js";import"./index-Bzfvi3Q7.js";import"./info-CowxKcuk.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
