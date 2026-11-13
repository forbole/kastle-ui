import{j as s,V as r,s as t,a as n,b as l}from"./theme-CvtKae92.js";import{D as p}from"./DetailTable-B50BrThs.js";import{S as i}from"./StatusPill-Bm-5Czo3.js";import"./iframe-D_g5qihE.js";import"./preload-helper-Zf8nSx-t.js";import"./index-B570ok8F.js";import"./info-j5MAgped.js";import"./createLucideIcon-BKMQ98uw.js";import"./registry-BNXumi8c.js";import"./index-CgXQfuNp.js";import"./index-yxtjKpYJ.js";import"./extends-CF3RwP-h.js";import"./copy-BmIp1K-m.js";import"./external-link-CHhTA1PM.js";import"./undo-2-Dpa951Pv.js";import"./circle-x-BDcyf-Bx.js";import"./circle-check-DihykGqC.js";const d=[{label:"Vault Status",valueNode:s.jsx(i,{status:"success",label:"Locked",icon:"dot"})},{label:"Vault amount",value:"~ 20,000 KAS",subValue:"$200.232 USD"},{label:"Protection window",value:"3 days",onPressInfo:()=>{}},{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Recovery address",value:"kaspa:pfdf…v45s",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}},{label:"Created",value:"23/5/2025, 5:14:12"},{label:"Total from wallet",value:"20,001.5001 KAS",emphasis:!0}],R={title:"Protections/Components/DetailTable",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[a=>s.jsx(r,{style:c.decorator,children:s.jsx(a,{})})]},e={args:{rows:d}},o={args:{rows:[{label:"Vault address",value:"kaspa:pq8z…v4k2",onPressCopy:()=>{},onPressExternal:()=>{},onPressInfo:()=>{}}]}},c=t.create({decorator:{backgroundColor:l.bg0,padding:n.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
