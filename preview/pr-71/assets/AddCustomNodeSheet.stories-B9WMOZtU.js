import{A as n}from"./AddCustomNodeSheet-B2a_R-8W.js";import"./theme-BGyPpq8J.js";import"./iframe-B3K_C_b5.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-Dyf67dRD.js";import"./Animated-BiDaS_Ur.js";import"./extends-CF3RwP-h.js";import"./index-CMOGcArj.js";import"./index-Ds1ldf_V.js";import"./index-CPN9pdQq.js";import"./index-Dyj4Uq4r.js";import"./NativeEventEmitter-C1gyLLpF.js";import"./index-Xnwtyc__.js";import"./index-CxPJtwZP.js";import"./index-CFa5oh58.js";import"./index-CrKqrAHd.js";import"./index-BJYtXG7I.js";import"./index-Clvpvjfi.js";import"./Input-Zoy-eADo.js";import"./index-BkxFjgQ4.js";import"./circle-alert-CHwDZNtP.js";import"./createLucideIcon-C2-zm3MF.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-B0cNSj76.js";import"./Button-BlBjCYzU.js";import"./index-BmCnybyy.js";import"./info-BifnmjAj.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
