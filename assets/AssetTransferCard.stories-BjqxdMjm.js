import{i as a}from"./icon-DhbqID1i.js";import{j as o,V as n,s as m,a as i,b as c}from"./theme-Bfa60eyo.js";import{A as d}from"./AssetTransferCard-Cqb9ZFH6.js";import"./iframe-D-6GMf5I.js";import"./preload-helper-Zf8nSx-t.js";import"./Layer2AssetImage-C19KSWAn.js";import"./index-CRGId9qT.js";import"./extends-CF3RwP-h.js";import"./index-QnBx12J3.js";import"./arrow-right-Cg5MmeKm.js";import"./createLucideIcon-BmoGGOcn.js";import"./registry-BNXumi8c.js";const e=a,D={title:"Swap-bridge-activity/Components/AssetTransferCard",component:d,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{fromImage:e,fromChainImage:e,toImage:e,toChainImage:e,fallback:e},decorators:[t=>o.jsx(n,{style:p.decorator,children:o.jsx(t,{})})]},r={args:{fromSymbol:"KAS",toSymbol:"NACHO",sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"999.9996 NACHO",receivedUsd:"≈ $9,486.01 USD"}},s={args:{fromSymbol:"KAS",toSymbol:"KAS",sentLabel:"Sent",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"1,000 KAS",receivedUsd:"≈ $9,486.17 USD"}},p=m.create({decorator:{flex:1,backgroundColor:c.bg0,padding:i.s5,justifyContent:"center"}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
