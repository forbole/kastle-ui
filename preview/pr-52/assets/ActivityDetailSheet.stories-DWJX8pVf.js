import{i as g}from"./icon-DhbqID1i.js";import{j as a,V as b,f as v,s as A,a as d,c as m}from"./theme-DglJhicK.js";import{r as f}from"./iframe-CU-Zjm2b.js";import{A as p}from"./ActivityDetailSheet-BbT5CYFO.js";import{M as h}from"./index-6GpvJ_gk.js";import{T as K}from"./index-Bz88AlIB.js";import{I as P}from"./index-C4tRQv6Y.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-1OiOK0KF.js";import"./Animated-BFjZoZkP.js";import"./extends-CF3RwP-h.js";import"./index-CV6nhDdt.js";import"./index-CXWo9_IW.js";import"./index-14LLgglL.js";import"./index-KoLHHI-L.js";import"./NativeEventEmitter-jc1HuR-1.js";import"./index-CthkpQpd.js";import"./index-DJVjq_hC.js";import"./StatusPill-B5pgm309.js";import"./clock-fading-DGPABE_t.js";import"./createLucideIcon-BD6Rl3dZ.js";import"./registry-BNXumi8c.js";import"./circle-x-N4mbmgar.js";import"./circle-check-BpAB7EPb.js";import"./AssetTransferCard-De7rm7XL.js";import"./Layer2AssetImage-W8DmhMHM.js";import"./arrow-right-Cp63Fjdn.js";import"./DetailKVRow-CDg5ACv5.js";import"./external-link-D1rru5O1.js";const e=g,Q={title:"Swap-bridge-activity/Components/ActivityDetailSheet",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}}},l=u=>{const[S,c]=f.useState(!1);return a.jsxs(b,{style:i.harness,children:[a.jsx(h,{onPress:()=>c(!0),style:i.openButton,children:a.jsx(K,{allowFontScaling:!1,style:[v.bodySemiboldMD,i.openButtonText],children:"Open detail sheet"})}),a.jsx(p,{...u,visible:S,onClose:()=>c(!1)})]})},t=a.jsx(P,{source:e,style:{width:20,height:20,borderRadius:10}}),o={render:()=>a.jsx(l,{title:"Swap KAS → NACHO",subtitle:"8 Oct, 2025 | 02:03",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"999.9996 NACHO",receivedUsd:"≈ $9,486.01 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:t},{label:"Transaction",value:"View",onPressValue:()=>console.log("open explorer")}]})},n={render:()=>a.jsx(l,{title:"Bridge KAS (Kaspa → Kasplex)",subtitle:"8 Oct, 2025 | 02:03",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"1,000 KAS",receivedUsd:"≈ $9,486.17 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Provider",value:"Kurve Bridge",valuePrefix:t},{label:"Source TX",value:"View",onPressValue:()=>console.log("open source")},{label:"Destination TX",value:"View",onPressValue:()=>console.log("open dest")}]})},r={render:()=>a.jsx(l,{title:"Swap KAS → NACHO",subtitle:"8 Oct, 2025 | 02:03",status:"pending",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"-",receivedUsd:"Pending"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:t},{label:"Transaction",value:"View",onPressValue:()=>console.log("open explorer")}]})},s={render:()=>a.jsx(l,{title:"Bridge KAS (Kaspa → Kasplex)",subtitle:"8 Oct, 2025 | 02:03",status:"pending",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"-",receivedUsd:"Pending"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Provider",value:"Kurve Bridge",valuePrefix:t},{label:"Source TX",value:"View",onPressValue:()=>console.log("open source")},{label:"Destination TX",value:"-"}]})},i=A.create({harness:{flex:1,height:700,alignItems:"center",justifyContent:"center",backgroundColor:m.backgroundScreen},openButton:{backgroundColor:m.primary,paddingHorizontal:d.s6,paddingVertical:d.s3,borderRadius:9999},openButtonText:{color:"#fff"}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Bridge pending — amber status pill",...s.parameters?.docs?.description}}};const Y=["SwapSuccess","BridgeSuccess","SwapPending","BridgePending"];export{s as BridgePending,n as BridgeSuccess,r as SwapPending,o as SwapSuccess,Y as __namedExportsOrder,Q as default};
