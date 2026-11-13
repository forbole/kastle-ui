import{j as s,V as r,s as t,a as n,b as l}from"./theme-bYFjbd30.js";import{D as p}from"./DetailTable-CcNSPSL_.js";import{S as i}from"./StatusPill-B67E8R95.js";import"./iframe-DvLStzsE.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DeQ8fF9_.js";import"./info-UycQG_xS.js";import"./createLucideIcon-B_vpwc_g.js";import"./registry-BNXumi8c.js";import"./index-DC4yOEpa.js";import"./index-B3o-eRUe.js";import"./extends-CF3RwP-h.js";import"./copy-zq5cOM5n.js";import"./external-link-BcJt1x_3.js";import"./undo-2-BsHlKtOK.js";import"./circle-x-DLLc8eWd.js";import"./circle-check-CBHhKcqQ.js";const d=[{label:"Vault Status",valueNode:s.jsx(i,{status:"success",label:"Locked",icon:"dot"})},{label:"Vault amount",value:"~ 20,000 KAS",subValue:"$200.232 USD"},{label:"Protection window",value:"3 days",onPressInfo:()=>{}},{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Recovery address",value:"kaspa:pfdf…v45s",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Created",value:"23/5/2025, 5:14:12"},{label:"Total from wallet",value:"20,001.5001 KAS",emphasis:!0}],R={title:"Protections/Components/DetailTable",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>s.jsx(r,{style:c.decorator,children:s.jsx(a,{})})]},e={args:{rows:d}},o={args:{rows:[{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}}]}},c=t.create({decorator:{backgroundColor:l.bg0,padding:n.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    rows: ROWS
  }
}`,...e.parameters?.docs?.source},description:{story:`Every row shape at once: plain value, StatusPill, tooltip-only, the address
rows' 3 independent tap zones (ⓘ / value+copy / external), and the bold
emphasis total row.`,...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [{
      label: "Vault address",
      value: "kaspa:pq8z…v4k2",
      onPressCopy: () => {},
      onPressExternal: () => {},
      onPressInfo: () => {}
    }]
  }
}`,...o.parameters?.docs?.source},description:{story:`Address row alone — tap the label for the tooltip, the value or copy icon
to copy, the external icon to open the explorer. Each is its own target.`,...o.parameters?.docs?.description}}};const j=["Default","AddressRow"];export{o as AddressRow,e as Default,j as __namedExportsOrder,R as default};
