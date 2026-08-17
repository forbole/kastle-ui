import{A as n}from"./AddCustomNodeSheet-CYXvBiMS.js";import"./theme-BOKYgWy2.js";import"./iframe-Ogo3UuBR.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-piYkxZB4.js";import"./Animated-BknRpsys.js";import"./extends-CF3RwP-h.js";import"./index-EuOpC6nE.js";import"./index-ErkzclZf.js";import"./index-BUhHuM05.js";import"./index-D36kqJVt.js";import"./NativeEventEmitter-CCu3W7ud.js";import"./index-CeHtu8j0.js";import"./index-JBCSNUA2.js";import"./index-CQ9KUgiP.js";import"./index-BWQl1cgu.js";import"./index-CwKHlYOk.js";import"./Input-CsHtJLPU.js";import"./index-BSaIgYGb.js";import"./circle-alert-BrR7-nY4.js";import"./createLucideIcon-B9vLRcAl.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-DqXEM41Z.js";import"./index-CRG3p-_x.js";import"./info-CiI5lrTR.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
