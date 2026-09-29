import{j as o,V as r,s as t,a as n,b as l}from"./theme-CDDAum2J.js";import{D as p}from"./DetailTable-CxFJTPVk.js";import{S as i}from"./StatusPill-Dub2JqPN.js";import"./iframe-BxfHI4vY.js";import"./preload-helper-Zf8nSx-t.js";import"./info-B_fx1-Si.js";import"./createLucideIcon-B_59d7vS.js";import"./registry-BNXumi8c.js";import"./index-DVXQIxiV.js";import"./index-BtM_YAzl.js";import"./extends-CF3RwP-h.js";import"./copy-BHrkqrsm.js";import"./external-link-DXNksKMS.js";import"./undo-2-CU2gv9yB.js";import"./circle-x-BN_oOnav.js";import"./circle-check-C2nt_1V7.js";const d=[{label:"Vault Status",valueNode:o.jsx(i,{status:"success",label:"Locked",icon:"dot"})},{label:"Vault amount",value:"~ 20,000 KAS",subValue:"$200.232 USD"},{label:"Protection window",value:"3 days",onPressInfo:()=>{}},{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Recovery address",value:"kaspa:pfdf…v45s",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Created",value:"23/5/2025, 5:14:12"},{label:"Total from wallet",value:"20,001.5001 KAS",emphasis:!0}],D={title:"Protections/Components/DetailTable",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>o.jsx(r,{style:c.decorator,children:o.jsx(a,{})})]},e={args:{rows:d}},s={args:{rows:[{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}}]}},c=t.create({decorator:{backgroundColor:l.bg0,padding:n.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
