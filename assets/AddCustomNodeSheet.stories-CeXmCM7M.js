import{A as n}from"./AddCustomNodeSheet-DVYPNhvJ.js";import"./theme-r5-eZ7bw.js";import"./iframe-DpKdhamd.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DCPdC-qX.js";import"./Animated-CX_vftDY.js";import"./extends-CF3RwP-h.js";import"./index-C6ZQaAfM.js";import"./index-CuJ3ZiV3.js";import"./index-C_fuHNGy.js";import"./index-B33R1muN.js";import"./NativeEventEmitter-Czi8xCvn.js";import"./index-BJmDfAHO.js";import"./index-yBpjSMgJ.js";import"./index-Kq1zU_P3.js";import"./index-cv7DIpR8.js";import"./Input-elgGMM_u.js";import"./index-D52x20Qo.js";import"./circle-alert-BTUd31QW.js";import"./createLucideIcon-DyAkOOqF.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-BauOIFfq.js";import"./Button-rHot5j5s.js";import"./index-BbYVkM31.js";import"./info-C640LHAf.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
