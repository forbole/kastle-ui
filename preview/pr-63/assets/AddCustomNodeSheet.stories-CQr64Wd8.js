import{A as n}from"./AddCustomNodeSheet-r6XNqpBc.js";import"./theme-BrnOGujP.js";import"./iframe-Bid9LiEz.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-icEwCEyq.js";import"./Animated-BWjFaXSq.js";import"./extends-CF3RwP-h.js";import"./index-By0C7WAp.js";import"./index-DBPZPp3W.js";import"./index-BP7_va3E.js";import"./index-DtzJT2q5.js";import"./NativeEventEmitter-DVicevGX.js";import"./index-DUba3Omf.js";import"./index-Byg0i5su.js";import"./index-St5aPUzd.js";import"./index-I3ozjhL-.js";import"./index-Di1UIHR6.js";import"./Input-CSRy62e1.js";import"./index-DXntWP5T.js";import"./circle-alert-nmSEwUPf.js";import"./createLucideIcon-DGFHsTCF.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-Cs3D2yzh.js";import"./Button-4Fi2evNE.js";import"./index-uvispa33.js";import"./info-Dvym0iNU.js";const y={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
