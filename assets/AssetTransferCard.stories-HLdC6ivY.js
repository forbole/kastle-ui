import{i as a}from"./icon-DhbqID1i.js";import{j as o,V as n,s as m,a as i,b as c}from"./theme-Bd6ptLXT.js";import{A as d}from"./AssetTransferCard-C3y-kFD-.js";import"./iframe-CXKJtrDw.js";import"./preload-helper-Zf8nSx-t.js";import"./Layer2AssetImage-CkTDMRs-.js";import"./index-VnS4iJJ1.js";import"./extends-CF3RwP-h.js";import"./index-DYcSQgIc.js";import"./arrow-right-CMqnjHn6.js";import"./createLucideIcon-CvPL3rqZ.js";import"./registry-BNXumi8c.js";const e=a,D={title:"Swap-bridge-activity/Components/AssetTransferCard",component:d,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{fromImage:e,fromChainImage:e,toImage:e,toChainImage:e,fallback:e},decorators:[t=>o.jsx(n,{style:p.decorator,children:o.jsx(t,{})})]},r={args:{fromSymbol:"KAS",toSymbol:"NACHO",sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"999.9996 NACHO",receivedUsd:"≈ $9,486.01 USD"}},s={args:{fromSymbol:"KAS",toSymbol:"KAS",sentLabel:"Sent",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"1,000 KAS",receivedUsd:"≈ $9,486.17 USD"}},p=m.create({decorator:{flex:1,backgroundColor:c.bg0,padding:i.s5,justifyContent:"center"}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    fromSymbol: "KAS",
    toSymbol: "NACHO",
    sentLabel: "Paid",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedAmount: "999.9996 NACHO",
    receivedUsd: "≈ $9,486.01 USD"
  }
}`,...r.parameters?.docs?.source},description:{story:"Swap success — paid KAS, received NACHO",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fromSymbol: "KAS",
    toSymbol: "KAS",
    sentLabel: "Sent",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedAmount: "1,000 KAS",
    receivedUsd: "≈ $9,486.17 USD"
  }
}`,...s.parameters?.docs?.source},description:{story:"Bridge success — same symbol across chains",...s.parameters?.docs?.description}}};const $=["Swap","Bridge"];export{s as Bridge,r as Swap,$ as __namedExportsOrder,D as default};
