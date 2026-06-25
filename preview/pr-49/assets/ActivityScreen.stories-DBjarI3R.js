import{i as U}from"./icon-DhbqID1i.js";import{j as t,V as o,s as w,a as b,h as A}from"./theme-CL7NXbIA.js";import{E as f,e as N,a as k}from"./error-activity-C4ryzKf8.js";import{r as D}from"./iframe-BnEUwZY2.js";import{A as H}from"./ActivityRow-DDXPbUUk.js";import{A as y}from"./ActivitySkeletonRow-CipdLyT-.js";import{A as V}from"./ActivityDetailSheet-BH1AJ5hz.js";import{F as j}from"./index-DrEIVA9S.js";import{I as R}from"./index-yUsgcQkg.js";import"./index-hDCl_D-7.js";import"./index-BQQAAL43.js";import"./extends-CF3RwP-h.js";import"./preload-helper-Zf8nSx-t.js";import"./DualAssetImage-C8GuQN9H.js";import"./SkeletonBlock-Bz3XFABr.js";import"./Animated-D653l1xW.js";import"./index-CcLxvWZG.js";import"./NativeEventEmitter-DpRExVgb.js";import"./ActionSheet-DxPGuHGH.js";import"./index-BqTcNUrj.js";import"./index-D73qtkBr.js";import"./StatusPill-B7ulovZP.js";import"./clock-fading-BqrJMxzf.js";import"./createLucideIcon--cjG9rrY.js";import"./registry-BNXumi8c.js";import"./circle-x-CjooGVeb.js";import"./AssetTransferCard-Cr01b-Tm.js";import"./Layer2AssetImage-nGInG5Rt.js";import"./arrow-right-EEyKKzDD.js";import"./DetailKVRow-DHWCQTSY.js";import"./external-link-D6YlGPxX.js";import"./index-DtKzB0Rm.js";const T=({pageType:n,state:S,transactions:I=[],loadingMore:x=!1,onRetry:h})=>{const[r,v]=D.useState(null),C=n==="swap"?"No activity yet":"No bridges yet",O=n==="swap"?"Your swaps will appear here once you make one.":"Your bridge transactions will appear here.";return S==="loading"?t.jsx(o,{style:s.root,children:t.jsx(o,{style:s.list,children:Array.from({length:4}).map((a,K)=>t.jsx(y,{},K))})}):S==="empty"?t.jsx(o,{style:s.root,children:t.jsx(f,{image:N,imageHeight:160,imageWidth:192,heading:C,subtext:O})}):S==="error"?t.jsx(o,{style:s.root,children:t.jsx(f,{image:k,imageHeight:160,imageWidth:192,heading:"Couldn't load activity",subtext:"Check your connection and try again.",cta:h?{label:"Retry",onPress:h}:void 0})}):t.jsxs(o,{style:s.root,children:[t.jsxs(j,{style:s.list,contentContainerStyle:s.listContent,showsVerticalScrollIndicator:!1,children:[I.map(a=>t.jsx(H,{title:a.title,pair:a.pair,dateTime:a.dateTime,amountNumber:a.amountNumber,amountSymbol:a.amountSymbol,amountUsd:a.amountUsd,isPositive:a.isPositive,onPress:()=>v(a)},a.id)),x&&t.jsxs(t.Fragment,{children:[t.jsx(y,{}),t.jsx(y,{})]})]}),r&&t.jsx(V,{visible:!!r,onClose:()=>v(null),title:r.sheetTitle,subtitle:r.sheetSubtitle,status:r.status,transfer:r.transfer,details:r.details})]})},s=w.create({root:{flex:1,width:"100%",backgroundColor:A.backgroundScreen},list:{flex:1,width:"100%",paddingHorizontal:b.s5,paddingTop:b.s3},listContent:{paddingBottom:b.s6}});T.__docgenInfo={description:`Body-only screen for Swap / Bridge activity history.
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"sheetTitle",value:{name:"string",required:!0},description:"Title shown at the top of the detail sheet (mirrors row title format)."},{key:"sheetSubtitle",value:{name:"string",required:!0},description:'Subtitle under the sheet title, e.g. "8 Oct, 2025 | 02:03".'},{key:"status",value:{name:"union",raw:'"success" | "failed" | "pending"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"failed"'},{name:"literal",value:'"pending"'}],required:!1},description:"Status pill rendered next to the subtitle."},{key:"transfer",value:{name:"AssetTransferCardProps",required:!0},description:"Boxed From → To + Sent / Received card."},{key:"details",value:{name:'ActivityDetailSheetProps["details"]',raw:'ActivityDetailSheetProps["details"]',required:!0},description:"Standalone label/value rows below the transfer card."}]}}]}],raw:"ActivityScreenItem[]"},description:'Required when state === "loaded".',defaultValue:{value:"[]",computed:!1}},loadingMore:{required:!1,tsType:{name:"boolean"},description:"Show 2 skeleton rows at end of list while fetching next page.",defaultValue:{value:"false",computed:!1}},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Retry handler for the error state."}}};const e=U,i=t.jsx(R,{source:e,style:{width:20,height:20,borderRadius:10}}),P=[{id:"s1",title:"Swapped",pair:{fromImage:e,toImage:e,chainImage:e,fallback:e},dateTime:"8 Oct | 02:03",amountNumber:"+1,000,000.87",amountSymbol:"NACHO",amountUsd:"≈ $9,486.17 USD",isPositive:!0,sheetTitle:"Swap KAS → NACHO",sheetSubtitle:"8 Oct, 2025 | 02:03",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"1,000 KAS",sentUsd:"≈ $9,486.17 USD",receivedAmount:"1,000,000.87 NACHO",receivedUsd:"≈ $9,486.17 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:i},{label:"Transaction",value:"View",onPressValue:()=>{}}]},{id:"s2",title:"Swapped",pair:{fromImage:e,toImage:e,chainImage:e,fallback:e},dateTime:"8 Oct | 02:03",amountNumber:"+21.4545",amountSymbol:"NACHO",amountUsd:"≈ $1,454.55 USD",isPositive:!0,sheetTitle:"Swap KAS → NACHO",sheetSubtitle:"8 Oct, 2025 | 02:03",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"0.5 KAS",sentUsd:"≈ $1,454.55 USD",receivedAmount:"21.4545 NACHO",receivedUsd:"≈ $1,454.55 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 42.91 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:i},{label:"Transaction",value:"View",onPressValue:()=>{}}]},{id:"s3",title:"Swapped",pair:{fromImage:e,toImage:e,chainImage:e,fallback:e},dateTime:"5 Oct | 11:30",amountNumber:"+87.484822",amountSymbol:"NACHO",amountUsd:"≈ $98.45 USD",isPositive:!0,sheetTitle:"Swap KAS → NACHO",sheetSubtitle:"5 Oct, 2025 | 11:30",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"NACHO",toChainImage:e,fallback:e,sentLabel:"Paid",sentAmount:"2 KAS",sentUsd:"≈ $98.45 USD",receivedAmount:"87.484822 NACHO",receivedUsd:"≈ $98.45 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Rate",value:"1 KAS ≈ 43.74 NACHO"},{label:"Slippage",value:"0.3%"},{label:"Provider",value:"Zealous Swap",valuePrefix:i},{label:"Transaction",value:"View",onPressValue:()=>{}}]}],B=[{id:"b1",title:"Bridged",pair:{fromImage:e,toImage:e,chainImage:e,fallback:e},dateTime:"8 Oct | 03:45",amountNumber:"+1,000,000.8",amountSymbol:"NACHO",amountUsd:"≈ $9,486.17 USD",isPositive:!0,sheetTitle:"Bridge KAS (Kaspa → Kasplex)",sheetSubtitle:"8 Oct, 2025 | 03:45",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"1,000,000 NACHO",sentUsd:"≈ $9,486.17 USD",receivedAmount:"1,000,000.8 NACHO",receivedUsd:"≈ $9,486.17 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Provider",value:"Kurve Bridge",valuePrefix:i},{label:"Source TX",value:"View",onPressValue:()=>{}},{label:"Destination TX",value:"View",onPressValue:()=>{}}]},{id:"b2",title:"Bridged",pair:{fromImage:e,toImage:e,chainImage:e,fallback:e},dateTime:"7 Oct | 11:00",amountNumber:"+240",amountSymbol:"KAS",amountUsd:"≈ $240.00 USD",isPositive:!0,sheetTitle:"Bridge KAS (Kasplex → Kaspa)",sheetSubtitle:"7 Oct, 2025 | 11:00",status:"success",transfer:{fromImage:e,fromSymbol:"KAS",fromChainImage:e,toImage:e,toSymbol:"KAS",toChainImage:e,fallback:e,sentLabel:"Sent",sentAmount:"240 KAS",sentUsd:"≈ $240.00 USD",receivedAmount:"240 KAS",receivedUsd:"≈ $240.00 USD"},details:[{label:"Fees",value:"0.0002 KAS"},{label:"Provider",value:"Kurve Bridge",valuePrefix:i},{label:"Source TX",value:"View",onPressValue:()=>{}},{label:"Destination TX",value:"View",onPressValue:()=>{}}]}],he={title:"Swap-bridge-activity/Screens/ActivityScreen",component:T,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},layout:"fullscreen"},decorators:[n=>t.jsx(o,{style:$.frame,children:t.jsx(n,{})})]},l={args:{pageType:"swap",state:"loaded",transactions:P}},m={args:{pageType:"swap",state:"empty"}},d={args:{pageType:"swap",state:"loading"}},u={args:{pageType:"swap",state:"error",onRetry:()=>console.log("retry")}},p={args:{pageType:"swap",state:"loaded",transactions:P,loadingMore:!0}},c={args:{pageType:"bridge",state:"loaded",transactions:B}},g={args:{pageType:"bridge",state:"empty"}},$=w.create({frame:{flex:1,width:"100%",backgroundColor:A.backgroundScreen}});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const ve=["SwapLoaded","SwapEmpty","SwapLoading","SwapError","SwapLoadingMore","BridgeLoaded","BridgeEmpty"];export{g as BridgeEmpty,c as BridgeLoaded,m as SwapEmpty,u as SwapError,l as SwapLoaded,d as SwapLoading,p as SwapLoadingMore,ve as __namedExportsOrder,he as default};
