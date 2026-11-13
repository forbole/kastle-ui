import{A as n}from"./AddCustomNodeSheet-2EfFfouF.js";import"./theme-CJ8_PI9R.js";import"./iframe-yhmx6fiF.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-cdubqiRs.js";import"./Animated-CnvlCwNZ.js";import"./extends-CF3RwP-h.js";import"./index-DLDFY-y5.js";import"./index-CEJH9BBi.js";import"./index-BdYTDHTf.js";import"./index-CiMD4dwf.js";import"./NativeEventEmitter-Cm6znRWd.js";import"./index-Cx2w0EOK.js";import"./index-CmLX3XqU.js";import"./index--KnWMXp7.js";import"./index-6eg9y3ym.js";import"./index-DKExyOls.js";import"./index-DfZyJVea.js";import"./Input-B04RDlcS.js";import"./index-DvHojD8y.js";import"./circle-alert-Dz9PEsPN.js";import"./createLucideIcon-BcnDIAD1.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-D3ZQoTCT.js";import"./Button-BS_BOmhX.js";import"./index-CnUOlz5-.js";import"./info-N080Ea_q.js";const P={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
