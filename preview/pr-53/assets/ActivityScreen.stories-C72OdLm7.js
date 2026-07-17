import{i as U}from"./icon-DhbqID1i.js";import{j as t,V as o,s as w,a as b,c as A}from"./theme-BqYMy_pQ.js";import{e as N,a as k}from"./error-activity-BCfD9lOa.js";import{r as D}from"./iframe-DyX1_DgY.js";import{E as f}from"./EmptyState-BLeHtBuN.js";import{A as H}from"./ActivityRow-DOPUn_2a.js";import{A as y}from"./ActivitySkeletonRow-c3NRKvJI.js";import{A as V}from"./ActivityDetailSheet-qppFyHiq.js";import{F as j}from"./index-B0EZDTTD.js";import{I as R}from"./index-C6mDQV8P.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CFW6ixWj.js";import"./index-cChUFaRk.js";import"./extends-CF3RwP-h.js";import"./DualAssetImage-DCPlv-wu.js";import"./SkeletonBlock-EAp3HEO-.js";import"./Animated-DVDE__Cd.js";import"./index-6Huqwo6r.js";import"./index-BjH-MALJ.js";import"./NativeEventEmitter-CRGXb2VJ.js";import"./ActionSheet-BAjiLLiO.js";import"./index-Bpby9Bp9.js";import"./index-t8CL4rv6.js";import"./StatusPill-BYuE-gY2.js";import"./clock-fading-D38eyxTK.js";import"./createLucideIcon-DvNJsJek.js";import"./registry-BNXumi8c.js";import"./circle-x-C2sd9K0i.js";import"./circle-check-CtrKR7Lg.js";import"./AssetTransferCard-C_-Hddgm.js";import"./Layer2AssetImage-CVXMHG7l.js";import"./arrow-right-Bi1U4DbR.js";import"./DetailKVRow-VGcs3abp.js";import"./external-link-BSwwUQt4.js";import"./index-D6VibFAM.js";const T=({pageType:n,state:S,transactions:I=[],loadingMore:x=!1,onRetry:v})=>{const[r,h]=D.useState(null),C=n==="swap"?"No activity yet":"No bridges yet",O=n==="swap"?"Your swaps will appear here once you make one.":"Your bridge transactions will appear here.";return S==="loading"?t.jsx(o,{style:s.root,children:t.jsx(o,{style:s.list,children:Array.from({length:4}).map((a,K)=>t.jsx(y,{},K))})}):S==="empty"?t.jsx(o,{style:s.root,children:t.jsx(f,{image:N,imageHeight:160,imageWidth:192,heading:C,subtext:O})}):S==="error"?t.jsx(o,{style:s.root,children:t.jsx(f,{image:k,imageHeight:160,imageWidth:192,heading:"Couldn't load activity",subtext:"Check your connection and try again.",cta:v?{label:"Retry",onPress:v}:void 0})}):t.jsxs(o,{style:s.root,children:[t.jsxs(j,{style:s.list,contentContainerStyle:s.listContent,showsVerticalScrollIndicator:!1,children:[I.map(a=>t.jsx(H,{title:a.title,pair:a.pair,dateTime:a.dateTime,amountNumber:a.amountNumber,amountSymbol:a.amountSymbol,amountUsd:a.amountUsd,isPositive:a.isPositive,onPress:()=>h(a)},a.id)),x&&t.jsxs(t.Fragment,{children:[t.jsx(y,{}),t.jsx(y,{})]})]}),r&&t.jsx(V,{visible:!!r,onClose:()=>h(null),title:r.sheetTitle,subtitle:r.sheetSubtitle,status:r.status,transfer:r.transfer,details:r.details})]})},s=w.create({root:{flex:1,width:"100%",backgroundColor:A.backgroundScreen},list:{flex:1,width:"100%",paddingHorizontal:b.s5,paddingTop:b.s3},listContent:{paddingBottom:b.s6}});T.__docgenInfo={description:`Body-only screen for Swap / Bridge activity history.
The screen header is rendered by React Navigation in kastle-mobile;
the consumer wires \`<Stack.Screen options={{ title: "..." }} />\` separately.

Layout is fully responsive — root + list use \`flex: 1\` so the screen fills
whatever container React Navigation gives it.`,methods:[],displayName:"ActivityScreen",props:{pageType:{required:!0,tsType:{name:"union",raw:'"swap" | "bridge"',elements:[{name:"literal",value:'"swap"'},{name:"literal",value:'"bridge"'}]},description:""},state:{required:!0,tsType:{name:"union",raw:'"loading" | "empty" | "error" | "loaded"',elements:[{name:"literal",value:'"loading"'},{name:"literal",value:'"empty"'},{name:"literal",value:'"error"'},{name:"literal",value:'"loaded"'}]},description:""},transactions:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<ActivityRowProps, "onPress"> & {
  id: string;
  /** Title shown at the top of the detail sheet (mirrors row title format). */
  sheetTitle: string;
  /** Subtitle under the sheet title, e.g. "8 Oct, 2025 | 02:03". */
  sheetSubtitle: string;
  /** Status pill rendered next to the subtitle. */
  status?: StatusPillStatus;
  /** Boxed From → To + Sent / Received card. */
  transfer: AssetTransferCardProps;
  /** Standalone label/value rows below the transfer card. */
  details: ActivityDetailSheetProps["details"];
}`,elements:[{name:"Omit",elements:[{name:"ActivityRowProps"},{name:"literal",value:'"onPress"'}],raw:'Omit<ActivityRowProps, "onPress">'},{name:"signature",type:"object",raw:`{
  id: string;
  /** Title shown at the top of the detail sheet (mirrors row title format). */
  sheetTitle: string;
  /** Subtitle under the sheet title, e.g. "8 Oct, 2025 | 02:03". */
  sheetSubtitle: string;
  /** Status pill rendered next to the subtitle. */
  status?: StatusPillStatus;
  /** Boxed From → To + Sent / Received card. */
  transfer: AssetTransferCardProps;
  /** Standalone label/value rows below the transfer card. */
  details: ActivityDetailSheetProps["details"];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"sheetTitle",value:{name:"string",required:!0},description:"Title shown at the top of the detail sheet (mirrors row title format)."},{key:"sheetSubtitle",value:{name:"string",required:!0},description:'Subtitle under the sheet title, e.g. "8 Oct, 2025 | 02:03".'},{key:"status",value:{name:"union",raw:'"success" | "failed" | "pending"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"failed"'},{name:"literal",value:'"pending"'}],required:!1},description:"Status pill rendered next to the subtitle."},{key:"transfer",value:{name:"AssetTransferCardProps",required:!0},description:"Boxed From → To + Sent / Received card."},{key:"details",value:{name:'ActivityDetailSheetProps["details"]',raw:'ActivityDetailSheetProps["details"]',required:!0},description:"Standalone label/value rows below the transfer card."}]}}]}],raw:"ActivityScreenItem[]"},description:'Required when state === "loaded".',defaultValue:{value:"[]",computed:!1}},loadingMore:{required:!1,tsType:{name:"boolean"},description:"Show 2 skeleton rows at end of list while fetching next page.",defaultValue:{value:"false",computed:!1}},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Retry handler for the error state."}}};const e=U,i=t.jsx(R,{source:e,style:{width:20,height:20,borderRadius:10}}),P=[{id:"s1",title:"Swapped",pair:{fromImage:e,toImage:e,chainImage:e,fallback:e},dateTime:"8 Oct | 02:03",amountNumber:"+1,000,000.87",amountSymbol:"NACHO",amountUsd:"≈ $9,486.17 USD",isPositive:!0,sheetTitle:"Swap KAS → NACHO",sheetSubtitle:"8 Oct, 2025 | 02:03",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"1,000,000.87 NACHO",receivedUsd:"≈ $9,486.17 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:i},{label:"Transaction",value:"View",onPressValue:()=>{}}]},{id:"s2",title:"Swapped",pair:{fromImage:e,toImage:e,chainImage:e,fallback:e},dateTime:"8 Oct | 02:03",amountNumber:"+21.4545",amountSymbol:"NACHO",amountUsd:"≈ $1,454.55 USD",isPositive:!0,sheetTitle:"Swap KAS → NACHO",sheetSubtitle:"8 Oct, 2025 | 02:03",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"0.5 KAS",sentUsd:"≈ $1,454.55 USD",receivedAmount:"21.4545 NACHO",receivedUsd:"≈ $1,454.55 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 42.91 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:i},{label:"Transaction",value:"View",onPressValue:()=>{}}]},{id:"s3",title:"Swapped",pair:{fromImage:e,toImage:e,chainImage:e,fallback:e},dateTime:"5 Oct | 11:30",amountNumber:"+87.484822",amountSymbol:"NACHO",amountUsd:"≈ $98.45 USD",isPositive:!0,sheetTitle:"Swap KAS → NACHO",sheetSubtitle:"5 Oct, 2025 | 11:30",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"2 KAS",sentUsd:"≈ $98.45 USD",receivedAmount:"87.484822 NACHO",receivedUsd:"≈ $98.45 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 43.74 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:i},{label:"Transaction",value:"View",onPressValue:()=>{}}]}],B=[{id:"b1",title:"Bridged",pair:{fromImage:e,toImage:e,chainImage:e,fallback:e},dateTime:"8 Oct | 03:45",amountNumber:"+1,000,000.8",amountSymbol:"NACHO",amountUsd:"≈ $9,486.17 USD",isPositive:!0,sheetTitle:"Bridge KAS (Kaspa → Kasplex)",sheetSubtitle:"8 Oct, 2025 | 03:45",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"1,000,000 NACHO",sentUsd:"≈ $9,486.17 USD",receivedAmount:"1,000,000.8 NACHO",receivedUsd:"≈ $9,486.17 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Provider",value:"Kurve Bridge",valuePrefix:i},{label:"Source TX",value:"View",onPressValue:()=>{}},{label:"Destination TX",value:"View",onPressValue:()=>{}}]},{id:"b2",title:"Bridged",pair:{fromImage:e,toImage:e,chainImage:e,fallback:e},dateTime:"7 Oct | 11:00",amountNumber:"+240",amountSymbol:"KAS",amountUsd:"≈ $240.00 USD",isPositive:!0,sheetTitle:"Bridge KAS (Kasplex → Kaspa)",sheetSubtitle:"7 Oct, 2025 | 11:00",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"240 KAS",sentUsd:"≈ $240.00 USD",receivedAmount:"240 KAS",receivedUsd:"≈ $240.00 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Provider",value:"Kurve Bridge",valuePrefix:i},{label:"Source TX",value:"View",onPressValue:()=>{}},{label:"Destination TX",value:"View",onPressValue:()=>{}}]}],we={title:"Swap-bridge-activity/Screens/ActivityScreen",component:T,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},layout:"fullscreen"},decorators:[n=>t.jsx(o,{style:$.frame,children:t.jsx(n,{})})]},l={args:{pageType:"swap",state:"loaded",transactions:P}},m={args:{pageType:"swap",state:"empty"}},d={args:{pageType:"swap",state:"loading"}},u={args:{pageType:"swap",state:"error",onRetry:()=>console.log("retry")}},p={args:{pageType:"swap",state:"loaded",transactions:P,loadingMore:!0}},c={args:{pageType:"bridge",state:"loaded",transactions:B}},g={args:{pageType:"bridge",state:"empty"}},$=w.create({frame:{flex:1,width:"100%",backgroundColor:A.backgroundScreen}});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    pageType: "swap",
    state: "loaded",
    transactions: swapTxs
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    pageType: "swap",
    state: "empty"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    pageType: "swap",
    state: "loading"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    pageType: "swap",
    state: "error",
    onRetry: () => console.log("retry")
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    pageType: "swap",
    state: "loaded",
    transactions: swapTxs,
    loadingMore: true
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    pageType: "bridge",
    state: "loaded",
    transactions: bridgeTxs
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    pageType: "bridge",
    state: "empty"
  }
}`,...g.parameters?.docs?.source}}};const Ae=["SwapLoaded","SwapEmpty","SwapLoading","SwapError","SwapLoadingMore","BridgeLoaded","BridgeEmpty"];export{g as BridgeEmpty,c as BridgeLoaded,m as SwapEmpty,u as SwapError,l as SwapLoaded,d as SwapLoading,p as SwapLoadingMore,Ae as __namedExportsOrder,we as default};
