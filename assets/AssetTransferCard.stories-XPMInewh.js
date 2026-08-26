import{i as d}from"./icon-DhbqID1i.js";import{j as a,V as c,s as m,a as l,b as S}from"./theme-7NxzQjFP.js";import{A as u}from"./AssetTransferCard-Bfxo5-LG.js";import"./iframe-C4vmSYnN.js";import"./preload-helper-Zf8nSx-t.js";import"./Layer2AssetImage-DfE1aYIf.js";import"./index-DgYye7Cj.js";import"./extends-CF3RwP-h.js";import"./index-C1BvqI76.js";import"./index-dwtQSYn0.js";import"./arrow-right-B9xSTGOA.js";import"./createLucideIcon-BZY-joqi.js";import"./registry-BNXumi8c.js";const e=d,C={title:"Swap-bridge-activity/Components/AssetTransferCard",component:u,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{fromImage:e,fromChainImage:e,toImage:e,toChainImage:e,fallback:e},decorators:[i=>a.jsx(c,{style:A.decorator,children:a.jsx(i,{})})]},t={args:{fromSymbol:"KAS",toSymbol:"NACHO",sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"999.9996 NACHO",receivedUsd:"≈ $9,486.01 USD"}},r={args:{fromSymbol:"KAS",toSymbol:"NACHO",sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedLabel:"You'll receive",receivedAmount:"999.9996 NACHO",receivedUsd:"≈ $9,486.01 USD"}},o={args:{fromSymbol:"KAS",toSymbol:"KAS",sentLabel:"Sent",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"1,000 KAS",receivedUsd:"≈ $9,486.17 USD"}},n={args:{fromSymbol:"iKAS",toSymbol:"KAS",sentLabel:"Sent",sentAmount:"1,000 iKAS",sentUsd:"≈ $100.17 USD",receivedLabel:"You'll receive",receivedAmount:"999.5 KAS",receivedUsd:"≈ $100.17 USD"}},s={args:{fromSymbol:"iKAS",toSymbol:"KAS",sentLabel:"Sent",sentAmount:"1,000 iKAS",sentUsd:"≈ $100.17 USD",isSentStruck:!0,extraLabel:"Refunded",extraAmount:"1,000 iKAS",extraUsd:"≈ $100.17 USD"}},A=m.create({decorator:{flex:1,backgroundColor:S.bg0,padding:l.s5,justifyContent:"center"}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fromSymbol: "KAS",
    toSymbol: "NACHO",
    sentLabel: "Paid",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedAmount: "999.9996 NACHO",
    receivedUsd: "≈ $9,486.01 USD"
  }
}`,...t.parameters?.docs?.source},description:{story:'Swap completed — the default state. The funds have arrived, so the incoming\nrow falls back to the default `receivedLabel` of "Received" (contrast with\n`SwapPending`, which overrides it to "You\'ll receive"). Paid KAS, received\nNACHO.',...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    fromSymbol: "KAS",
    toSymbol: "NACHO",
    sentLabel: "Paid",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedLabel: "You'll receive",
    receivedAmount: "999.9996 NACHO",
    receivedUsd: "≈ $9,486.01 USD"
  }
}`,...r.parameters?.docs?.source},description:{story:`Swap still pending — nothing has arrived yet, so the incoming row reads "You'll receive" (Figma node 14085:392178)`,...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fromSymbol: "KAS",
    toSymbol: "KAS",
    sentLabel: "Sent",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedAmount: "1,000 KAS",
    receivedUsd: "≈ $9,486.17 USD"
  }
}`,...o.parameters?.docs?.source},description:{story:'Bridge completed — the default state. The funds have landed, so the incoming\nrow falls back to the default `receivedLabel` of "Received" (contrast with\n`BridgePending`, which overrides it to "You\'ll receive"). Same symbol across\nchains.',...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fromSymbol: "iKAS",
    toSymbol: "KAS",
    sentLabel: "Sent",
    sentAmount: "1,000 iKAS",
    sentUsd: "≈ $100.17 USD",
    receivedLabel: "You'll receive",
    receivedAmount: "999.5 KAS",
    receivedUsd: "≈ $100.17 USD"
  }
}`,...n.parameters?.docs?.source},description:{story:`Bridge still pending — the funds have not landed yet, so the incoming row reads "You'll receive" (Figma node 14044:370631)`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fromSymbol: "iKAS",
    toSymbol: "KAS",
    sentLabel: "Sent",
    sentAmount: "1,000 iKAS",
    sentUsd: "≈ $100.17 USD",
    isSentStruck: true,
    extraLabel: "Refunded",
    extraAmount: "1,000 iKAS",
    extraUsd: "≈ $100.17 USD"
  }
}`,...s.parameters?.docs?.source},description:{story:`Refunded — the bridge never delivered, so there is no Received row
(Figma node 14090:409577).

⚠️ Deliberate divergence from Figma — do NOT "fix" \`extraAmount\` back to
"999.9 KAS".
- Figma writes the refunded amount as \`999.9 KAS\`.
- This story writes \`1,000 iKAS\`.
- The code is right on both counts. A refund returns the token that was
  locked, which on this leg is iKAS (the \`fromSymbol\`), not KAS. And the
  amount must equal the sent amount: the paired sub-row reads "Returned in
  full, fee included", so anything under the 1,000 iKAS sent — 999.9
  included — contradicts its own label.
- Nicole decided on 2026-08-14 to leave Figma as-is rather than correct it,
  since those are dummy numbers; the code carries the correct values.`,...s.parameters?.docs?.description}}};const x=["SwapDefault","SwapPending","BridgeDefault","BridgePending","BridgeRefunded"];export{o as BridgeDefault,n as BridgePending,s as BridgeRefunded,t as SwapDefault,r as SwapPending,x as __namedExportsOrder,C as default};
