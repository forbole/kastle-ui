import{i as C}from"./icon-DhbqID1i.js";import{j as t,V as P,f as y,s as O,a as h,c as v}from"./theme-BOKYgWy2.js";import{r as B}from"./iframe-Ogo3UuBR.js";import{A}from"./ActivityDetailSheet-Bb8bg7rX.js";import{S as s}from"./StatusPill-sB22VYQ7.js";import{B as a}from"./bridgeExitCopy-i8PKbv8n.js";import{M as D}from"./index-CwKHlYOk.js";import{T as N}from"./index-JBCSNUA2.js";import{I as L}from"./index-CeHtu8j0.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-piYkxZB4.js";import"./Animated-BknRpsys.js";import"./extends-CF3RwP-h.js";import"./index-EuOpC6nE.js";import"./index-ErkzclZf.js";import"./index-BUhHuM05.js";import"./index-D36kqJVt.js";import"./NativeEventEmitter-CCu3W7ud.js";import"./index-CQ9KUgiP.js";import"./index-BWQl1cgu.js";import"./AssetTransferCard-tmsK9F6i.js";import"./Layer2AssetImage-QfN9q6SS.js";import"./arrow-right-BCanCdyV.js";import"./createLucideIcon-B9vLRcAl.js";import"./registry-BNXumi8c.js";import"./WithdrawConfirmSheet-Duu7Z2_Z.js";import"./index-CRG3p-_x.js";import"./undo-2-Awo1DMW-.js";import"./circle-x-DnBfsvOi.js";import"./circle-check-CY6rb_2X.js";import"./triangle-alert-B0_wWpw5.js";import"./external-link-DzMu92c8.js";const e=C,me={title:"Swap-bridge-activity/Components/ActivityDetailSheet",component:A,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}}},r=K=>{const[I,f]=B.useState(!1);return t.jsxs(P,{style:b.harness,children:[t.jsx(D,{onPress:()=>f(!0),style:b.openButton,children:t.jsx(N,{allowFontScaling:!1,style:[y.bodySemiboldMD,b.openButtonText],children:"Open detail sheet"})}),t.jsx(A,{...K,visible:I,onClose:()=>f(!1)})]})},p=t.jsx(L,{source:e,style:{width:20,height:20,borderRadius:10}}),o={render:()=>t.jsx(r,{title:"Swap KAS → NACHO",subtitle:"8 Oct, 2025 | 02:03",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"999.9996 NACHO",receivedUsd:"≈ $9,486.01 USD"},details:[{label:"Status",value:"",valueNode:t.jsx(s,{status:"success"})},{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:p},{label:"Transaction",value:"View",onPressValue:()=>console.log("open explorer")}]})},n={render:()=>t.jsx(r,{title:"Bridge KAS (Kaspa → Kasplex)",subtitle:"8 Oct, 2025 | 02:03",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"1,000 KAS",receivedUsd:"≈ $9,486.17 USD"},details:[{label:"Status",value:"",valueNode:t.jsx(s,{status:"success"})},{label:"Fees",value:"0.0002 KAS"},{label:"Provider",value:"Kurve Bridge",valuePrefix:p},{label:"Source TX",value:"View",onPressValue:()=>console.log("open source")},{label:"Destination TX",value:"View",onPressValue:()=>console.log("open dest")}]})},i={render:()=>t.jsx(r,{title:"Swap KAS → NACHO",subtitle:"8 Oct, 2025 | 02:03",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedLabel:"You'll receive",receivedAmount:"999.9996 NACHO",receivedUsd:"≈ $9,486.01 USD"},details:[{label:"Status",value:"",valueNode:t.jsx(s,{status:"pending"})},{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:p},{label:"Transaction",value:"View",onPressValue:()=>console.log("open explorer")}]})},S={fromImage:e,fromSymbol:"iKAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"1,000 iKAS",sentUsd:"≈ $100.17 USD",receivedLabel:"You'll receive",receivedAmount:"999.5 KAS",receivedUsd:"≈ $100.17 USD"},w=[{label:"Fees",value:"0.5 iKAS"},{label:"Provider",value:"KAT Bridge",valuePrefix:p},{label:"Source TX",value:"View",onPressValue:()=>console.log("open source")}],g=[...w,{label:"Destination TX",value:"-"}],U=[...w,{label:"Refund TX",value:"View",onPressValue:()=>console.log("open refund tx")}],x={label:"Status",value:a.submitted,valueNode:t.jsx(s,{status:"pending",label:a.submitted}),valueSubtext:a.stuckSubtext,valueSubtextTone:"warning"},l={render:()=>t.jsx(r,{title:"Bridge iKAS (Igra → Kaspa)",subtitle:"8 Oct, 2025 | 02:03",transfer:S,details:[{label:"Status",value:"",valueNode:t.jsx(s,{status:"pending",label:a.submitted}),valueSubtext:a.submittedSubtext},...g]})},d={render:()=>t.jsx(r,{title:"Bridge iKAS (Igra → Kaspa)",subtitle:"8 Oct, 2025 | 02:03",transfer:S,details:[{label:"Status",value:"",valueNode:t.jsx(s,{status:"pending",label:a.confirmed}),valueSubtext:a.confirmedSubtext},...g]})},u={render:()=>t.jsx(r,{title:"Bridge iKAS (Igra → Kaspa)",subtitle:"8 Oct, 2025 | 02:03",transfer:S,details:[x,...g],notice:a.withdrawNotice,withdrawAmount:"1,000 iKAS",onWithdrawConfirm:()=>console.log("withdraw confirmed")})},c={render:()=>t.jsx(r,{title:"Bridge iKAS (Igra → Kaspa)",subtitle:"8 Oct, 2025 | 02:03",transfer:S,details:[x,...g],notice:a.withdrawNotice,withdrawAmount:"1,000 iKAS",onWithdrawConfirm:()=>console.log("withdraw confirmed"),isWithdrawing:!0})},m={render:()=>t.jsx(r,{title:"Bridge iKAS (Igra → Kaspa)",subtitle:"8 Oct, 2025 | 02:03",transfer:{fromImage:e,fromSymbol:"iKAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"1,000 iKAS",sentUsd:"≈ $100.17 USD",isSentStruck:!0,extraLabel:"Refunded",extraAmount:"1,000 iKAS",extraUsd:"≈ $100.17 USD"},details:[{label:"Status",value:"",valueNode:t.jsx(s,{status:"refunded"}),valueSubtext:"Returned in full, fee included"},...U]})},b=O.create({harness:{flex:1,height:700,alignItems:"center",justifyContent:"center",backgroundColor:v.backgroundScreen},openButton:{backgroundColor:v.primary,paddingHorizontal:h.s6,paddingVertical:h.s3,borderRadius:9999},openButtonText:{color:"#fff"}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Swap KAS → NACHO" subtitle="8 Oct, 2025 | 02:03" transfer={{
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
  }} details={[
  // Status is a KV row between the transfer card and Fees, never a pill
  // beside the subtitle — Nicole standardised all nine stories on this
  // 2026-08-14. No Figma node covers the success case, so it follows the
  // pending pattern (14085:392178) with the status value unchanged.
  {
    label: "Status",
    value: "",
    valueNode: <StatusPill status="success" />
  }, {
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
  render: () => <SheetHarness title="Bridge KAS (Kaspa → Kasplex)" subtitle="8 Oct, 2025 | 02:03" transfer={{
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
  }} details={[
  // See SwapSuccess — Status is always a KV row here.
  {
    label: "Status",
    value: "",
    valueNode: <StatusPill status="success" />
  }, {
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
}`,...n.parameters?.docs?.source},description:{story:"Bridge success",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Swap KAS → NACHO" subtitle="8 Oct, 2025 | 02:03" transfer={{
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
    receivedLabel: "You'll receive",
    receivedAmount: "999.9996 NACHO",
    receivedUsd: "≈ $9,486.01 USD"
  }} details={[
  // Figma node 14085:392178 — Status is a KV row between the transfer card
  // and Fees, NOT a pill beside the subtitle.
  {
    label: "Status",
    value: "",
    valueNode: <StatusPill status="pending" />
  }, {
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
}`,...i.parameters?.docs?.source},description:{story:"Swap pending — amber status pill",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Bridge iKAS (Igra → Kaspa)" subtitle="8 Oct, 2025 | 02:03" transfer={bridgeExitTransfer} details={[{
    label: "Status",
    value: "",
    valueNode: <StatusPill status="pending" label={BRIDGE_EXIT_COPY.submitted} />,
    valueSubtext: BRIDGE_EXIT_COPY.submittedSubtext
  }, ...bridgeExitDetailsNoDestination]} />
}`,...l.parameters?.docs?.source},description:{story:"Bridge exit just submitted — inside the normal 48-hour window, nothing to do.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Bridge iKAS (Igra → Kaspa)" subtitle="8 Oct, 2025 | 02:03" transfer={bridgeExitTransfer} details={[{
    label: "Status",
    value: "",
    valueNode: <StatusPill status="pending" label={BRIDGE_EXIT_COPY.confirmed} />,
    valueSubtext: BRIDGE_EXIT_COPY.confirmedSubtext
  }, ...bridgeExitDetailsNoDestination]} />
}`,...d.parameters?.docs?.source},description:{story:"Bridge acknowledged the transfer — still amber, but there is nothing for the user to do.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Bridge iKAS (Igra → Kaspa)" subtitle="8 Oct, 2025 | 02:03" transfer={bridgeExitTransfer} details={[stuckStatusRow, ...bridgeExitDetailsNoDestination]} notice={BRIDGE_EXIT_COPY.withdrawNotice} withdrawAmount="1,000 iKAS" onWithdrawConfirm={() => console.log("withdraw confirmed")} />
}`,...u.parameters?.docs?.source},description:{story:"Past 48 hours and still unacknowledged — the ONLY state that shows Withdraw.\n`claimRefund` reverts everywhere else, so a button there would cost the user\ngas on a guaranteed failure.",...u.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Bridge iKAS (Igra → Kaspa)" subtitle="8 Oct, 2025 | 02:03" transfer={bridgeExitTransfer} details={[stuckStatusRow, ...bridgeExitDetailsNoDestination]} notice={BRIDGE_EXIT_COPY.withdrawNotice} withdrawAmount="1,000 iKAS" onWithdrawConfirm={() => console.log("withdraw confirmed")} isWithdrawing />
}`,...c.parameters?.docs?.source},description:{story:"Withdrawal in flight — same args as `BridgeRefundable` plus `isWithdrawing`.\nThe Withdraw button is locked at 40% opacity, and the backdrop no longer\ndismisses. In the real feature this state is only visible between the confirm\ntap and the tx going out; the story exists so the state is reviewable at all.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <SheetHarness title="Bridge iKAS (Igra → Kaspa)" subtitle="8 Oct, 2025 | 02:03" transfer={{
    fromImage: placeholderLogo,
    fromSymbol: "iKAS",
    fromChainImage: placeholderLogo,
    toImage: placeholderLogo,
    toSymbol: "KAS",
    toChainImage: placeholderLogo,
    fallback: placeholderLogo,
    sentLabel: "Sent",
    sentAmount: "1,000 iKAS",
    sentUsd: "≈ $100.17 USD",
    isSentStruck: true,
    extraLabel: "Refunded",
    extraAmount: "1,000 iKAS",
    extraUsd: "≈ $100.17 USD"
  }} details={[{
    label: "Status",
    value: "",
    valueNode: <StatusPill status="refunded" />,
    valueSubtext: "Returned in full, fee included"
  }, ...bridgeExitDetailsRefundTx]} />
}`,...m.parameters?.docs?.source},description:{story:"Refund landed — Sent is struck through and a Refunded row is added, no Received row.",...m.parameters?.docs?.description}}};const pe=["SwapSuccess","BridgeSuccess","SwapPending","BridgeSubmitted","BridgeConfirmed","BridgeRefundable","BridgeWithdrawing","BridgeRefunded"];export{d as BridgeConfirmed,u as BridgeRefundable,m as BridgeRefunded,l as BridgeSubmitted,n as BridgeSuccess,c as BridgeWithdrawing,i as SwapPending,o as SwapSuccess,pe as __namedExportsOrder,me as default};
