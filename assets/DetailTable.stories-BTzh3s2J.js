import{j as s,V as r,s as t,a as n,b as l}from"./theme-DYzhAaDx.js";import{D as p}from"./DetailTable-da0lis1w.js";import{S as i}from"./StatusPill-C0oJ5d-I.js";import"./iframe-D24O7SeT.js";import"./preload-helper-Zf8nSx-t.js";import"./index-T6TIxRK5.js";import"./info-ztn1t4My.js";import"./createLucideIcon-DLhpeO6J.js";import"./registry-BNXumi8c.js";import"./index-vDJtv3wJ.js";import"./index-CIg8Mr94.js";import"./extends-CF3RwP-h.js";import"./copy-BHRr0iWg.js";import"./external-link-BVbVif0f.js";import"./undo-2-DnQRQwmb.js";import"./circle-x-Dj9Jd0bF.js";import"./circle-check-B3V3Edhv.js";const d=[{label:"Vault Status",valueNode:s.jsx(i,{status:"success",label:"Locked",icon:"dot"})},{label:"Vault amount",value:"~ 20,000 KAS",subValue:"$200.232 USD"},{label:"Protection window",value:"3 days",onPressInfo:()=>{}},{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Recovery address",value:"kaspa:pfdf…v45s",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Created",value:"23/5/2025, 5:14:12"},{label:"Total from wallet",value:"20,001.5001 KAS",emphasis:!0}],R={title:"Protections/Components/DetailTable",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>s.jsx(r,{style:c.decorator,children:s.jsx(a,{})})]},e={args:{rows:d}},o={args:{rows:[{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}}]}},c=t.create({decorator:{backgroundColor:l.bg0,padding:n.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
