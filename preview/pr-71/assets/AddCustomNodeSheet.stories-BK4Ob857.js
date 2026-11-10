import{A as n}from"./AddCustomNodeSheet-BW7Q5Jr6.js";import"./theme-_gWyqNuQ.js";import"./iframe-CMthgzyI.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DxHuarpg.js";import"./Animated-eofYnDim.js";import"./extends-CF3RwP-h.js";import"./index-BhjTi5xB.js";import"./index-QgidL2MC.js";import"./index-DanFBzwn.js";import"./index-R3p43u7i.js";import"./NativeEventEmitter-CMnow03N.js";import"./index-D2LPC8ez.js";import"./index-jLMJ36ET.js";import"./index-CYDsz8hA.js";import"./index-BzRMcVZW.js";import"./index-CqkCHmep.js";import"./index-H9cgkJFp.js";import"./Input-6VDMeI8V.js";import"./index-jq2YKJ5s.js";import"./circle-alert-GI594b2a.js";import"./createLucideIcon-mHbuJU9U.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-G5VILSpW.js";import"./Button-C83fSDsU.js";import"./index-CLXxTdlc.js";import"./info-CA5weyL6.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
