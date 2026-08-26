import{A as n}from"./AddCustomNodeSheet-CHu-_rLV.js";import"./theme-CI3XLjdX.js";import"./iframe-BRTfYPGp.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-B95dfGvK.js";import"./Animated-C3vtFFZ4.js";import"./extends-CF3RwP-h.js";import"./index-DFTc8yWS.js";import"./index-ClyrT4qx.js";import"./index-C1Wf_w99.js";import"./index-Ca2rKSTy.js";import"./NativeEventEmitter-B8zbeVp5.js";import"./index-XozokZnn.js";import"./index-DjhBL4d3.js";import"./index-BMrQmVmh.js";import"./index-CJSFGT_l.js";import"./Input-BkyRbDLA.js";import"./index-QKHM6fOK.js";import"./circle-alert-DDgg3r9W.js";import"./createLucideIcon-B1McIo9u.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-DSLeeYEa.js";import"./index-QfDaSQVD.js";import"./info-BBsNOb_Y.js";const _={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const k=["Default","Filled","Validating","Error"];export{r as Default,s as Error,e as Filled,o as Validating,k as __namedExportsOrder,_ as default};
