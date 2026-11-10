import{A as n}from"./AddCustomNodeSheet-DHUT3tl4.js";import"./theme-CePFS-Wc.js";import"./iframe-CWbl7Kgb.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BRb_YNbE.js";import"./Animated-DImH9o1r.js";import"./extends-CF3RwP-h.js";import"./index-Uo-rifuh.js";import"./index-BGM9uK7x.js";import"./index-CDaNDBQh.js";import"./index-BjFVNHRT.js";import"./NativeEventEmitter-Dj2AD5tg.js";import"./index-BI1ZUAWH.js";import"./index-DYnC1rFb.js";import"./index-Ct6l9FAG.js";import"./index-BLWcFOM8.js";import"./Input-Den46KI6.js";import"./index-DhZSnasO.js";import"./circle-alert-8y32RwcB.js";import"./createLucideIcon-CbTm18Bp.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-a_sOAAga.js";import"./Button-DwqUIyY2.js";import"./index-DLj1dhXy.js";import"./info-tLT2A6zg.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
