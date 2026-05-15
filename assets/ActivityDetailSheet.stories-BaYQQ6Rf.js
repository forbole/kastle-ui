import{i as g}from"./icon-DhbqID1i.js";import{j as a,V as b,s as v,a as d,h as p}from"./theme-Br3UXtQO.js";import{r as A}from"./iframe-JF4SOhmV.js";import{A as m}from"./ActivityDetailSheet-Dg0Z-vKw.js";import{A as f}from"./AppText-CDytHUIv.js";import{M as h}from"./index-CNax0sSb.js";import{I as K}from"./index-DznuBaQe.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DtnF1_19.js";import"./Animated-sxfWt4-L.js";import"./index-CQPoNSoe.js";import"./extends-CF3RwP-h.js";import"./index-Bedt4Zcn.js";import"./index-fWo7jYSn.js";import"./NativeEventEmitter-W6TJjB5k.js";import"./index-Ycn2XHGV.js";import"./index-CAMOA1qm.js";import"./StatusPill-Db4qTX65.js";import"./clock-fading-BKt6Sxw2.js";import"./createLucideIcon-BQiQhgXK.js";import"./registry-BNXumi8c.js";import"./AssetTransferCard-BhWw0rQm.js";import"./Layer2AssetImage-jaszuyiG.js";import"./arrow-right-B6Sn42LY.js";import"./DetailKVRow-Cu5n7c-u.js";import"./external-link-C0tpRIf-.js";const e=g,W={title:"Swap-bridge-activity/Components/ActivityDetailSheet",component:m,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}}},l=u=>{const[S,c]=A.useState(!1);return a.jsxs(b,{style:i.harness,children:[a.jsx(h,{onPress:()=>c(!0),style:i.openButton,children:a.jsx(f,{weight:"600",style:i.openButtonText,children:"Open detail sheet"})}),a.jsx(m,{...u,visible:S,onClose:()=>c(!1)})]})},t=a.jsx(K,{source:e,style:{width:20,height:20,borderRadius:10}}),o={render:()=>a.jsx(l,{title:"Swap KAS → NACHO",subtitle:"8 Oct, 2025 | 02:03",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"999.9996 NACHO",receivedUsd:"≈ $9,486.01 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:t},{label:"Transaction",value:"View",onPressValue:()=>console.log("open explorer")}]})},n={render:()=>a.jsx(l,{title:"Bridge KAS (Kaspa → Kasplex)",subtitle:"8 Oct, 2025 | 02:03",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"1,000 KAS",receivedUsd:"≈ $9,486.17 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Provider",value:"Kurve Bridge",valuePrefix:t},{label:"Source TX",value:"View",onPressValue:()=>console.log("open source")},{label:"Destination TX",value:"View",onPressValue:()=>console.log("open dest")}]})},r={render:()=>a.jsx(l,{title:"Swap KAS → NACHO",subtitle:"8 Oct, 2025 | 02:03",status:"pending",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"-",receivedUsd:"Pending"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:t},{label:"Transaction",value:"View",onPressValue:()=>console.log("open explorer")}]})},s={render:()=>a.jsx(l,{title:"Bridge KAS (Kaspa → Kasplex)",subtitle:"8 Oct, 2025 | 02:03",status:"pending",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"-",receivedUsd:"Pending"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Provider",value:"Kurve Bridge",valuePrefix:t},{label:"Source TX",value:"View",onPressValue:()=>console.log("open source")},{label:"Destination TX",value:"-"}]})},i=v.create({harness:{flex:1,height:700,alignItems:"center",justifyContent:"center",backgroundColor:p.backgroundScreen},openButton:{backgroundColor:p.primary,paddingHorizontal:d.s6,paddingVertical:d.s3,borderRadius:9999},openButtonText:{color:"#fff",fontSize:16}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Swap KAS → NACHO" subtitle="8 Oct, 2025 | 02:03" status="success" transfer={{
    fromImage: placeholderLogo,
    fromSymbol: "KAS",
    fromChainImage: placeholderLogo,
    toImage: placeholderLogo,
    toSymbol: "NACHO",
    toChainImage: placeholderLogo,
    fallback: placeholderLogo,
    sentLabel: "Paid",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedAmount: "999.9996 NACHO",
    receivedUsd: "≈ $9,486.01 USD"
  }} details={[{
    label: "Fees",
    value: "0.0002 KAS"
  }, {
    label: "Rate",
    value: "1 KAS ≈ 0.032799 NACHO"
  }, {
    label: "Slippage",
    value: "0.3%"
  }, {
    label: "Provider",
    value: "Zealous Swap",
    valuePrefix: providerPrefix
  }, {
    label: "Transaction",
    value: "View",
    onPressValue: () => console.log("open explorer")
  }]} />
}`,...o.parameters?.docs?.source},description:{story:"Swap success",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Bridge KAS (Kaspa → Kasplex)" subtitle="8 Oct, 2025 | 02:03" status="success" transfer={{
    fromImage: placeholderLogo,
    fromSymbol: "KAS",
    fromChainImage: placeholderLogo,
    toImage: placeholderLogo,
    toSymbol: "KAS",
    toChainImage: placeholderLogo,
    fallback: placeholderLogo,
    sentLabel: "Sent",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedAmount: "1,000 KAS",
    receivedUsd: "≈ $9,486.17 USD"
  }} details={[{
    label: "Fees",
    value: "0.0002 KAS"
  }, {
    label: "Provider",
    value: "Kurve Bridge",
    valuePrefix: providerPrefix
  }, {
    label: "Source TX",
    value: "View",
    onPressValue: () => console.log("open source")
  }, {
    label: "Destination TX",
    value: "View",
    onPressValue: () => console.log("open dest")
  }]} />
}`,...n.parameters?.docs?.source},description:{story:"Bridge success",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Swap KAS → NACHO" subtitle="8 Oct, 2025 | 02:03" status="pending" transfer={{
    fromImage: placeholderLogo,
    fromSymbol: "KAS",
    fromChainImage: placeholderLogo,
    toImage: placeholderLogo,
    toSymbol: "NACHO",
    toChainImage: placeholderLogo,
    fallback: placeholderLogo,
    sentLabel: "Paid",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedAmount: "-",
    receivedUsd: "Pending"
  }} details={[{
    label: "Fees",
    value: "0.0002 KAS"
  }, {
    label: "Rate",
    value: "1 KAS ≈ 0.032799 NACHO"
  }, {
    label: "Slippage",
    value: "0.3%"
  }, {
    label: "Provider",
    value: "Zealous Swap",
    valuePrefix: providerPrefix
  }, {
    label: "Transaction",
    value: "View",
    onPressValue: () => console.log("open explorer")
  }]} />
}`,...r.parameters?.docs?.source},description:{story:"Swap pending — amber status pill",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Bridge KAS (Kaspa → Kasplex)" subtitle="8 Oct, 2025 | 02:03" status="pending" transfer={{
    fromImage: placeholderLogo,
    fromSymbol: "KAS",
    fromChainImage: placeholderLogo,
    toImage: placeholderLogo,
    toSymbol: "KAS",
    toChainImage: placeholderLogo,
    fallback: placeholderLogo,
    sentLabel: "Sent",
    sentAmount: "1,000 KAS",
    sentUsd: "≈ $9,486.17 USD",
    receivedAmount: "-",
    receivedUsd: "Pending"
  }} details={[{
    label: "Fees",
    value: "0.0002 KAS"
  }, {
    label: "Provider",
    value: "Kurve Bridge",
    valuePrefix: providerPrefix
  }, {
    label: "Source TX",
    value: "View",
    onPressValue: () => console.log("open source")
  }, {
    label: "Destination TX",
    value: "-"
  }]} />
}`,...s.parameters?.docs?.source},description:{story:"Bridge pending — amber status pill",...s.parameters?.docs?.description}}};const q=["SwapSuccess","BridgeSuccess","SwapPending","BridgePending"];export{s as BridgePending,n as BridgeSuccess,r as SwapPending,o as SwapSuccess,q as __namedExportsOrder,W as default};
