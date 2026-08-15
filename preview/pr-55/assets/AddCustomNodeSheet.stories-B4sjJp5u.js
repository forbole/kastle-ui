import{A as n}from"./AddCustomNodeSheet-CVmJcE_m.js";import"./theme-DxaJaBsI.js";import"./iframe-C962YQtf.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-Bh_9w8Ha.js";import"./Animated-DZ-xbWyV.js";import"./extends-CF3RwP-h.js";import"./index-Cy6NAgUL.js";import"./index-BUQ2MD6q.js";import"./index-24uf5umT.js";import"./index-CF_BqSzE.js";import"./NativeEventEmitter-UANmf3dZ.js";import"./index-BLHs1Q4p.js";import"./index-BdLoWLEw.js";import"./index-BDpiJxW8.js";import"./index-nLPAyo4j.js";import"./index-B9kcF9op.js";import"./Input-3fb01T1S.js";import"./index-DsRmYimX.js";import"./circle-alert-BEBtotE7.js";import"./createLucideIcon-CRxP4_93.js";import"./registry-BNXumi8c.js";import"./ButtonGroup-DZKKYGM2.js";import"./index-CBdmpk1q.js";import"./info-DULDVM1i.js";const k={title:"Custom-RPC/Components/AddCustomNodeSheet",component:n},t={onClose:()=>{},onAdd:()=>{}},a={defaultName:"Home node",defaultUrl:"wss://my-node.kaspa.home:17110"},r={args:{isOpen:!0,...t}},e={args:{isOpen:!0,...a,...t}},o={args:{isOpen:!0,...a,isValidating:!0,...t}},s={args:{isOpen:!0,defaultName:"Home node",defaultUrl:"wss://bad-node",error:"Can't reach this address.",...t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
