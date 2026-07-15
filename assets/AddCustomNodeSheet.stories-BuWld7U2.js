import{A as n}from"./AddCustomNodeSheet-Xizs29Am.js";import"./theme-nCvFhhJs.js";import"./iframe-DDLVCzk4.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-Bs3oCfyx.js";import"./Animated-FrDvige9.js";import"./extends-CF3RwP-h.js";import"./index-DRNzwSGh.js";import"./index-C1jR2Ymb.js";import"./index-BfDM4C6d.js";import"./index-TU-Iyboo.js";import"./NativeEventEmitter-DjWa44vJ.js";import"./index-BTdWiMEo.js";import"./index-B_O_kbLO.js";import"./index-IvOrJqs8.js";import"./index-DKrWBGjr.js";import"./index-DiLEWO5s.js";import"./Input-D-tudgxG.js";import"./index-D7Dj6ep9.js";import"./circle-alert-CZrEPLx1.js";import"./createLucideIcon-Dsa48IwM.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-9bEVVwUh.js";import"./index-C2il_sCj.js";import"./info-Qxd8jVjO.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
