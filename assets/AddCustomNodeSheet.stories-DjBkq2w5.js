import{A as n}from"./AddCustomNodeSheet-DPDbAn9X.js";import"./theme-CvdPgai5.js";import"./iframe-DSSG6PZI.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CYpNcuok.js";import"./Animated-DuRM5YS0.js";import"./extends-CF3RwP-h.js";import"./index-DCmuG3WT.js";import"./index-rBCh4CQz.js";import"./index-C1Qo6j1t.js";import"./index-5mBqr3td.js";import"./NativeEventEmitter-Cjxll_Kj.js";import"./index-BuGWousj.js";import"./index-CGPnJJ0x.js";import"./index-DZdfJDT-.js";import"./index-DccHJBlY.js";import"./index-CpyUQ5KE.js";import"./index-J_frm1xP.js";import"./Input-C2106806.js";import"./index-VkfclCor.js";import"./circle-alert-zFer1jBY.js";import"./createLucideIcon-DFpQLiBo.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BGgRzXot.js";import"./Button-CIsOkbpH.js";import"./index-CbTS2Mkm.js";import"./info-CENigsUb.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
