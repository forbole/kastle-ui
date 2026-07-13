import{i as m}from"./icon-DhbqID1i.js";import{j as n,V as d,s as c,b as u}from"./theme-CYVVbNaG.js";import{A as p}from"./ActivityRow-kgnQk8s1.js";import"./iframe-Dtt0RuuL.js";import"./preload-helper-Zf8nSx-t.js";import"./DualAssetImage-BJcotHb6.js";import"./index-BOGh4Q6l.js";import"./extends-CF3RwP-h.js";import"./index-BQ7xfXyH.js";import"./index-Bo0TRZaI.js";const s=m,h={title:"Swap-bridge-activity/Components/ActivityRow",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{pair:{fromImage:s,toImage:s,chainImage:s,fallback:s},onPress:()=>console.log("row pressed")},decorators:[i=>n.jsx(d,{style:l.decorator,children:n.jsx(i,{})})]},e={args:{title:"Swapped",dateTime:"8 Oct | 02:03",amountNumber:"+1,234",amountSymbol:"NACHO",amountUsd:"≈ $12.34 USD",isPositive:!0}},t={args:{title:"Bridged",dateTime:"8 Oct | 03:45",amountNumber:"+240",amountSymbol:"KAS",amountUsd:"≈ $240.00 USD",isPositive:!0}},o={args:{title:"Swapped",dateTime:"8 Oct | 02:03",amountNumber:"+1,234",amountSymbol:"NACHO",amountUsd:"≈ $12.34 USD",isPending:!0}},a={args:{title:"Swapped",dateTime:"8 Oct | 02:03",amountNumber:"+1,000,000,000.888888",amountSymbol:"NACHO",amountUsd:"≈ $9,486.17 USD",isPositive:!0}},r={args:{title:"Swapped",dateTime:"8 Oct | 02:03",amountNumber:"+1,234",amountSymbol:"NACHO",amountUsd:"≈ $12.34 USD",isPositive:!0,pair:{fromImage:void 0,toImage:void 0,chainImage:void 0,fallback:void 0}}},l=c.create({decorator:{flex:1,backgroundColor:u.bg0,padding:20}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Swapped",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "NACHO",
    amountUsd: "≈ $12.34 USD",
    isPositive: true
  }
}`,...e.parameters?.docs?.source},description:{story:"Swap on Kaspa — green positive amount",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Bridged",
    dateTime: "8 Oct | 03:45",
    amountNumber: "+240",
    amountSymbol: "KAS",
    amountUsd: "≈ $240.00 USD",
    isPositive: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Bridge cross-chain — title shows chain names",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Swapped",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "NACHO",
    amountUsd: "≈ $12.34 USD",
    isPending: true
  }
}`,...o.parameters?.docs?.source},description:{story:"Pending — amount renders in amber warning colour",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Swapped",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,000,000,000.888888",
    amountSymbol: "NACHO",
    amountUsd: "≈ $9,486.17 USD",
    isPositive: true
  }
}`,...a.parameters?.docs?.source},description:{story:"Long amount — number truncates with tail ellipsis, token symbol stays visible",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Swapped",
    dateTime: "8 Oct | 02:03",
    amountNumber: "+1,234",
    amountSymbol: "NACHO",
    amountUsd: "≈ $12.34 USD",
    isPositive: true,
    pair: {
      fromImage: undefined,
      toImage: undefined,
      chainImage: undefined,
      fallback: undefined
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Without images — both tokens fall back to plain coloured circles",...r.parameters?.docs?.description}}};const A=["Swap","Bridge","Pending","LongAmount","WithoutImages"];export{t as Bridge,a as LongAmount,o as Pending,e as Swap,r as WithoutImages,A as __namedExportsOrder,h as default};
