import{A as n}from"./AddCustomNodeSheet-CqfUhD1c.js";import"./theme-CMj5SAcx.js";import"./iframe-Dlitb8YL.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-Covxg6Gw.js";import"./Animated-Bk1IpNaA.js";import"./extends-CF3RwP-h.js";import"./index-Cl-KgIYa.js";import"./index-Dl0GLfCf.js";import"./index-DLqo91PL.js";import"./index-CvOprqXO.js";import"./NativeEventEmitter-j7_EaE43.js";import"./index-DsNvcbC0.js";import"./index-BWNiv2Vz.js";import"./index-rsbc8W62.js";import"./index-DM9C-eE_.js";import"./Input-BpA-TEH3.js";import"./index-x7gxRhjc.js";import"./circle-alert-Byyr7Ngn.js";import"./createLucideIcon-CsQHbI7R.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-CzoUaYT9.js";import"./Button-4k9FFVSs.js";import"./index-DcedkMHo.js";import"./info-DVcJ1sHM.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
