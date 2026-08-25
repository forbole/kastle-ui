import{A as n}from"./AddCustomNodeSheet-h_eWbLIS.js";import"./theme-Bd05M4rB.js";import"./iframe-Bex8TNAw.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BM59VBRL.js";import"./Animated-3W-6LII2.js";import"./extends-CF3RwP-h.js";import"./index-DL27yOwu.js";import"./index-C1KtGHAW.js";import"./index-DQGqaH-X.js";import"./index-DM7WyEBK.js";import"./NativeEventEmitter-CuNMg47i.js";import"./index-DWgjaQ3k.js";import"./index-BPpj8co9.js";import"./index-vHSYMIj8.js";import"./index-CSUFvXYJ.js";import"./index-aIOH_YtL.js";import"./Input-Du17_gNB.js";import"./index-BEJ6TZNK.js";import"./circle-alert-DORZk8MK.js";import"./createLucideIcon-rYFkDqfE.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-Dz0zHibq.js";import"./index-CiNW5wCa.js";import"./info-CzlB1_c4.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
