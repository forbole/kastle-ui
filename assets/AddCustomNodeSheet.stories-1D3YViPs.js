import{A as n}from"./AddCustomNodeSheet-k58o8qm7.js";import"./theme-c1S4MUln.js";import"./iframe-B_CInotu.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-hY9o-ktL.js";import"./Animated-RP3nMM0o.js";import"./extends-CF3RwP-h.js";import"./index-DWhqUe_1.js";import"./index-CswkZQN3.js";import"./index-B1ya1QsP.js";import"./index-C3Zj5MN2.js";import"./NativeEventEmitter-BUisezRF.js";import"./index-BU2mKE5I.js";import"./index-BQoSLIEm.js";import"./index-C9Elg7BP.js";import"./index-9h0BA1t1.js";import"./index-CAH4B0jM.js";import"./Input-CTbVVKYe.js";import"./index-C-JUKWXv.js";import"./circle-alert-C7lJyCWR.js";import"./createLucideIcon-B9BttUli.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-U9wm872i.js";import"./index-BI2AGw-A.js";import"./index-ZumxdgjG.js";import"./info-D_upjrUY.js";const y={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
