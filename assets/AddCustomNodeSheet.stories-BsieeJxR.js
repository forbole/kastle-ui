import{A as n}from"./AddCustomNodeSheet-BHb7vJtq.js";import"./theme-q_7wiGV8.js";import"./iframe-CYc9jzjr.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-Vz47ZONN.js";import"./Animated-CkCh2B2v.js";import"./extends-CF3RwP-h.js";import"./index-Dfp5NBhs.js";import"./index-BRB09g9F.js";import"./index-DOpztuU1.js";import"./index-COW66coR.js";import"./NativeEventEmitter-xTeerVT7.js";import"./index-DqUHJdwI.js";import"./index-OMEVJfBv.js";import"./index-Dazu6cre.js";import"./index-5X-oGKJz.js";import"./Input-WGqunDVs.js";import"./index-B0LY_Qia.js";import"./circle-alert-CtrF8XPI.js";import"./createLucideIcon-ChR2uSvd.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-CI9_IVml.js";import"./Button-CsKOqA0d.js";import"./index-DhHlursN.js";import"./info-BzPOrSHw.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
