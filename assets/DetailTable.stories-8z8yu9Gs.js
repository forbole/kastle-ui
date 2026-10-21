import{j as o,V as r,s as t,a as n,b as l}from"./theme-CCmuuQ4c.js";import{D as p}from"./DetailTable-D_3WIHTv.js";import{S as i}from"./StatusPill-DVWJ3BGn.js";import"./iframe-CbUwcMTK.js";import"./preload-helper-Zf8nSx-t.js";import"./info-BjxmevR3.js";import"./createLucideIcon-px4LNY_i.js";import"./registry-BNXumi8c.js";import"./index-BOEVp_gm.js";import"./index-DVYQWggB.js";import"./extends-CF3RwP-h.js";import"./copy-ulH_sGLu.js";import"./external-link-aMhRYY8Q.js";import"./undo-2-C7NYD7D3.js";import"./circle-x-CD9Ob4HB.js";import"./circle-check-CJccW7X-.js";const d=[{label:"Vault Status",valueNode:o.jsx(i,{status:"success",label:"Locked",icon:"dot"})},{label:"Vault amount",value:"~ 20,000 KAS",subValue:"$200.232 USD"},{label:"Protection window",value:"3 days",onPressInfo:()=>{}},{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Recovery address",value:"kaspa:pfdf…v45s",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Created",value:"23/5/2025, 5:14:12"},{label:"Total from wallet",value:"20,001.5001 KAS",emphasis:!0}],D={title:"Protections/Components/DetailTable",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>o.jsx(r,{style:c.decorator,children:o.jsx(a,{})})]},e={args:{rows:d}},s={args:{rows:[{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}}]}},c=t.create({decorator:{backgroundColor:l.bg0,padding:n.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
