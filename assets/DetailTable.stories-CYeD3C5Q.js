import{j as o,V as r,s as t,a as n,b as l}from"./theme-CmBBLDAF.js";import{D as p}from"./DetailTable-C0UP6S8Y.js";import{S as i}from"./StatusPill-s10VirAx.js";import"./iframe-D2lw4O5V.js";import"./preload-helper-Zf8nSx-t.js";import"./info-Da7TKhG-.js";import"./createLucideIcon-CctySh2A.js";import"./registry-BNXumi8c.js";import"./index-Cno7ZKKB.js";import"./index-DUuqBE2O.js";import"./extends-CF3RwP-h.js";import"./copy-BQQjNH0X.js";import"./external-link-DdKhSSZd.js";import"./undo-2-Hh9HWZW7.js";import"./circle-x-ivHtxa8v.js";import"./circle-check-gj1rzCE2.js";const d=[{label:"Vault Status",valueNode:o.jsx(i,{status:"success",label:"Locked",icon:"dot"})},{label:"Vault amount",value:"~ 20,000 KAS",subValue:"$200.232 USD"},{label:"Protection window",value:"3 days",onPressInfo:()=>{}},{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Recovery address",value:"kaspa:pfdf…v45s",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Created",value:"23/5/2025, 5:14:12"},{label:"Total from wallet",value:"20,001.5001 KAS",emphasis:!0}],D={title:"Protections/Components/DetailTable",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>o.jsx(r,{style:c.decorator,children:o.jsx(a,{})})]},e={args:{rows:d}},s={args:{rows:[{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}}]}},c=t.create({decorator:{backgroundColor:l.bg0,padding:n.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    rows: ROWS
  }
}`,...e.parameters?.docs?.source},description:{story:`Every row shape at once: plain value, StatusPill, tooltip-only, the address
rows' 3 independent tap zones (ⓘ / value+copy / external), and the bold
emphasis total row.`,...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [{
      label: "Vault address",
      value: "kaspa:pq8z…v4k2",
      onPressCopy: () => {},
      onPressExternal: () => {},
      onPressInfo: () => {}
    }]
  }
}`,...s.parameters?.docs?.source},description:{story:`Address row alone — tap the label for the tooltip, the value or copy icon
to copy, the external icon to open the explorer. Each is its own target.`,...s.parameters?.docs?.description}}};const R=["Default","AddressRow"];export{s as AddressRow,e as Default,R as __namedExportsOrder,D as default};
