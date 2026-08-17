import{i as c}from"./icon-DhbqID1i.js";import{j as m,V as u,s as p,b as l}from"./theme-BNPDQF8F.js";import{A as g}from"./ActivityRow-DnZHCQeT.js";import"./iframe-D9RBSdh4.js";import"./preload-helper-Zf8nSx-t.js";import"./DualAssetImage-CPqLkUsG.js";import"./index-bEwrHws4.js";import"./extends-CF3RwP-h.js";import"./index-DOtiBfGZ.js";import"./index-C_zUMvuC.js";import"./index-CriPBHGm.js";const i=c,T={title:"Swap-bridge-activity/Components/ActivityRow",component:g,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{pair:{fromImage:i,toImage:i,chainImage:i,fallback:i},onPress:()=>console.log("row pressed")},decorators:[d=>m.jsx(u,{style:S.decorator,children:m.jsx(d,{})})]},e={args:{title:"Swapped",dateTime:"8 Oct | 02:03",amountNumber:"+1,234",amountSymbol:"NACHO",amountUsd:"≈ $12.34 USD",tone:"credit"}},t={args:{title:"Bridged",dateTime:"8 Oct | 03:45",amountNumber:"+240",amountSymbol:"KAS",amountUsd:"≈ $240.00 USD",tone:"credit"}},a={args:{title:"Bridging",dateTime:"8 Oct | 02:03",amountNumber:"+1,234",amountSymbol:"iKAS",amountUsd:"≈ $12.34 USD",tone:"neutral"}},o={args:{title:"Refunded",dateTime:"8 Oct | 02:03",amountNumber:"+1,000",amountSymbol:"iKAS",amountUsd:"≈ $1,000.00 USD",tone:"credit"}},r={args:{title:"Bridging",dateTime:"8 Oct | 02:03",amountNumber:"+1,234",amountSymbol:"iKAS",amountUsd:"≈ $12.34 USD",tone:"neutral",attention:1}},n={args:{title:"Swapped",dateTime:"8 Oct | 02:03",amountNumber:"+1,000,000,000.888888",amountSymbol:"NACHO",amountUsd:"≈ $9,486.17 USD",tone:"credit"}},s={args:{title:"Swapped",dateTime:"8 Oct | 02:03",amountNumber:"+1,234",amountSymbol:"NACHO",amountUsd:"≈ $12.34 USD",tone:"credit",pair:{fromImage:void 0,toImage:void 0,chainImage:void 0,fallback:void 0}}},S=p.create({decorator:{flex:1,backgroundColor:l.bg0,padding:20}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Swapped",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "NACHO",
    amountUsd: "≈ $12.34 USD",
    tone: "credit"
  }
}`,...e.parameters?.docs?.source},description:{story:'Swap on Kaspa — tone="credit", green positive amount',...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Bridged",
    dateTime: "8 Oct | 03:45",
    amountNumber: "+240",
    amountSymbol: "KAS",
    amountUsd: "≈ $240.00 USD",
    tone: "credit"
  }
}`,...t.parameters?.docs?.source},description:{story:'Bridge cross-chain — tone="credit" — title shows chain names',...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Bridging",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "iKAS",
    amountUsd: "≈ $12.34 USD",
    tone: "neutral"
  }
}`,...a.parameters?.docs?.source},description:{story:"Bridging — transfer still in flight, amount stays neutral white",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Refunded",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,000",
    amountSymbol: "iKAS",
    amountUsd: "≈ $1,000.00 USD",
    tone: "credit"
  }
}`,...o.parameters?.docs?.source},description:{story:"Refunded — money came back, amount reads as a credit (green)",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Bridging",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "iKAS",
    amountUsd: "≈ $12.34 USD",
    tone: "neutral",
    attention: 1
  }
}`,...r.parameters?.docs?.source},description:{story:"Bridging, past 48h — the badge tells the user there is something to withdraw",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Swapped",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,000,000,000.888888",
    amountSymbol: "NACHO",
    amountUsd: "≈ $9,486.17 USD",
    tone: "credit"
  }
}`,...n.parameters?.docs?.source},description:{story:"Long amount — number truncates with tail ellipsis, token symbol stays visible",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Swapped",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "NACHO",
    amountUsd: "≈ $12.34 USD",
    tone: "credit",
    pair: {
      fromImage: undefined,
      toImage: undefined,
      chainImage: undefined,
      fallback: undefined
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Without images — both tokens fall back to plain coloured circles",...s.parameters?.docs?.description}}};const $=["SwapDefault","BridgeDefault","Bridging","BridgeRefunded","BridgingWithdrawable","LongAmount","WithoutImages"];export{t as BridgeDefault,o as BridgeRefunded,a as Bridging,r as BridgingWithdrawable,n as LongAmount,e as SwapDefault,s as WithoutImages,$ as __namedExportsOrder,T as default};
