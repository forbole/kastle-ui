import{A as i}from"./AddCustomNodeSheet-BeyZlsoS.js";import"./theme-CYzR7QY_.js";import"./iframe-CjwuzOz5.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-_z64yGEK.js";import"./Animated-BHHD7Qa6.js";import"./extends-CF3RwP-h.js";import"./index-Cf_-suJC.js";import"./index-BXwTTTK-.js";import"./index-Dz__hhGa.js";import"./index-CSijo8vk.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-DTLhOJvD.js";import"./index-DL-NNYlp.js";import"./index-Cz_8FiFD.js";import"./index-BrblGSI3.js";import"./index-JIp9yOpD.js";import"./index-Db6-LrcP.js";import"./index-0_vQxOdj.js";import"./Input-CH7F6Zyg.js";import"./index-EhoOFFZ2.js";import"./circle-alert-C5I-USmT.js";import"./createLucideIcon-BWxZFN1U.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-CmtEI45K.js";import"./Button-AXE15xbK.js";import"./index-QsEg6Hsw.js";import"./info-VE5zptoi.js";const R={title:"Custom-RPC/Components/AddCustomNodeSheet",component:i},s={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...s}},e={args:{isOpen:!0,...a,...s}},o={args:{isOpen:!0,...a,isValidating:!0,...s}},t={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...s}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
