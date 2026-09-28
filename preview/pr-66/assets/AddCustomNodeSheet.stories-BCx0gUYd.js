import{A as n}from"./AddCustomNodeSheet-Bmggy0Yl.js";import"./theme-qo1JknhX.js";import"./iframe-B_J3Iy1p.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CwZKNgJG.js";import"./Animated-By0aX-69.js";import"./extends-CF3RwP-h.js";import"./index-BL2HFhuA.js";import"./index-D5qOe2hC.js";import"./index-DDuQQy7E.js";import"./index-DSzgnnKZ.js";import"./NativeEventEmitter-D0_Owwaq.js";import"./index-K9NcUoUm.js";import"./index-Bqe8kY7_.js";import"./index-5wn_UjdG.js";import"./index-ZiMnrdkK.js";import"./index-CXeNlpyY.js";import"./index-CDYvhEJm.js";import"./Input-r-xBjaxy.js";import"./index-BojJprCp.js";import"./circle-alert-CpZouWhX.js";import"./createLucideIcon-DQBbprBX.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-YB3aAtrz.js";import"./Button-B_8ciUgL.js";import"./index-D3TdTc_p.js";import"./info-CPv18SLf.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
