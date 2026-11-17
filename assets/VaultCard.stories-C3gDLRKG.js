import{v as c}from"./vault-CprMANYZ.js";import{j as r,V as s,s as m,a as d,b as u}from"./theme-jkAK6PKL.js";import{V as p}from"./VaultCard-CWU8251Q.js";import"./iframe-DhidVUQV.js";import"./preload-helper-Zf8nSx-t.js";import"./StatusPill-p8uk6Hcc.js";import"./undo-2-D9P-UoDg.js";import"./createLucideIcon-Cd9UjiyI.js";import"./registry-BNXumi8c.js";import"./index-_1objsqj.js";import"./circle-x-D3Td7hEG.js";import"./circle-check-78FKHF8I.js";import"./index-gpQE1fxR.js";import"./index-DBfl_XJ9.js";import"./extends-CF3RwP-h.js";import"./Image-Dzy_Emuy.js";import"./NativeEventEmitter-BChM0mkR.js";import"./EventEmitter-DNVZYx7c.js";import"./timer-D_rmHizf.js";const l=c,E={title:"Protections/Components/VaultCard",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},layout:"fullscreen"},args:{onPress:()=>{},illustration:l},decorators:[n=>r.jsx(s,{style:i.screen,children:r.jsx(n,{})})]},e=n=>r.jsx(s,{style:i.cell,children:r.jsx(n,{})}),o={args:{status:"locked",name:"Vault 1",amount:"1,000,000.999999",amountUnit:"KAS",caption:"3 days window"},decorators:[e]},a={args:{status:"withdrawing",name:"Vault 3",amount:"1,200",amountUnit:"KAS",caption:"withdrawing",countdown:"20h:02m:02s"},decorators:[e]},t={args:{status:"withdrawing",name:"Vault 3",amount:"1,000,000,000.9999999",amountUnit:"KAS",caption:"withdrawing",countdown:"89d:23h:59m"},decorators:[e]},i=m.create({screen:{flex:1,backgroundColor:u.bg0,padding:d.s5},cell:{width:173}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "locked",
    name: "Vault 1",
    amount: "1,000,000.999999",
    amountUnit: "KAS",
    caption: "3 days window"
  },
  decorators: [cellDecorator]
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "withdrawing",
    name: "Vault 3",
    amount: "1,200",
    amountUnit: "KAS",
    caption: "withdrawing",
    countdown: "20h:02m:02s"
  },
  decorators: [cellDecorator]
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "withdrawing",
    name: "Vault 3",
    amount: "1,000,000,000.9999999",
    amountUnit: "KAS",
    caption: "withdrawing",
    countdown: "89d:23h:59m"
  },
  decorators: [cellDecorator]
}`,...t.parameters?.docs?.source},description:{story:`Overflow — a withdrawing vault whose amount fills the whole line. The number
truncates with an ellipsis so "KAS" stays pinned on the same line and the
card keeps its 222 height instead of the unit wrapping.
⚠️ The truncate-number / pin-unit behaviour is my proposal for the overflow
case — Figma doesn't specify it. Confirm with Nicole.`,...t.parameters?.docs?.description}}};const T=["Locked","Withdrawing","WithdrawingLongAmount"];export{o as Locked,a as Withdrawing,t as WithdrawingLongAmount,T as __namedExportsOrder,E as default};
