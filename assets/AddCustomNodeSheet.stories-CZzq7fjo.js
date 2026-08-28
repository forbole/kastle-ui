import{A as n}from"./AddCustomNodeSheet-ByJk-4OY.js";import"./theme-8QOGWT04.js";import"./iframe-zWxnyr7p.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BIhCkhvE.js";import"./Animated-C0kAQgDx.js";import"./extends-CF3RwP-h.js";import"./index-C_2ivueB.js";import"./index-BDF7tMil.js";import"./index-DRAPD8hI.js";import"./index-BxDtMcPY.js";import"./NativeEventEmitter-Dyue3d_c.js";import"./index-D6ZXtCRJ.js";import"./index-CJru1tUL.js";import"./index-BWLhblzF.js";import"./index-_M07a0qs.js";import"./index-DR7f6Xxm.js";import"./Input-BkGw8SUb.js";import"./index-C-LiljA-.js";import"./circle-alert-DtObplg0.js";import"./createLucideIcon-Ddhol5HT.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-D9py32LG.js";import"./Button-qOrb_UHK.js";import"./index-DhDu0dKE.js";import"./info-a1o9BHMg.js";const y={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
