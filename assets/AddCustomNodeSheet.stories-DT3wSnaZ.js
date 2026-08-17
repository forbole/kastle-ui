import{A as n}from"./AddCustomNodeSheet-DY9KGqQX.js";import"./theme-BNPDQF8F.js";import"./iframe-D9RBSdh4.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DeoTeKX0.js";import"./Animated-BBjBI4Tv.js";import"./extends-CF3RwP-h.js";import"./index-mk6JnJxS.js";import"./index-DOtiBfGZ.js";import"./index-Dz2juhDS.js";import"./index-Br1G8Emq.js";import"./NativeEventEmitter-CfGSBIBt.js";import"./index-bEwrHws4.js";import"./index-CriPBHGm.js";import"./index-YYrLNHCN.js";import"./index-CLEYtEIh.js";import"./index-C_zUMvuC.js";import"./Input-B1AwKjkZ.js";import"./index-B1XH9fZZ.js";import"./circle-alert-BPsWh-CS.js";import"./createLucideIcon-a9b2k8Db.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-Iy6gtQnU.js";import"./index-CnT4LuOh.js";import"./info-LteWQApT.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
