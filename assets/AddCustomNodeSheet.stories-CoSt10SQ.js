import{A as i}from"./AddCustomNodeSheet-Bzs-gZg4.js";import"./theme-CkMMdLwS.js";import"./iframe-V_2_tdAM.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-Dv15CkbQ.js";import"./Animated-B_kPtmXD.js";import"./extends-CF3RwP-h.js";import"./index-DRdS6d_q.js";import"./index-CATfkrsY.js";import"./index-s12-EVeH.js";import"./index-CBWOs78p.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-BPUdZtDr.js";import"./index-g2wItwL9.js";import"./index-Deh8TsCW.js";import"./index-BCFeCHGC.js";import"./index-BYHyjroj.js";import"./index-B_wIMOrn.js";import"./index-CLvPcPP9.js";import"./Input-BEr-2uWU.js";import"./index-DTFCK0Jj.js";import"./circle-alert-Bk2uKup4.js";import"./createLucideIcon-zWUAFxB2.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-CPHlLYwf.js";import"./Button-K_h0xYHB.js";import"./index-Ci73GLmu.js";import"./info-CcG3LxeJ.js";const R={title:"Custom-RPC/Components/AddCustomNodeSheet",component:i},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const j=["Default","Filled","Validating","Error"];export{r as Default,t as Error,e as Filled,o as Validating,j as __namedExportsOrder,R as default};
