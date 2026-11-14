import{i as O}from"./icon-DhbqID1i.js";import{k as H}from"./kaspa-logo-DhW_40_v.js";import{d as b,N as M,Q as W,j as e,a as t,V as l,c as L,s as C,k,i as S,l as v,e as P,f as K,g as z,b as N}from"./theme-BL901wsm.js";import{A as R}from"./AssetImage-Bj0B3l4P.js";import{M as E}from"./index-DmxNEST0.js";import{T as d}from"./index-B6MvyGFu.js";import"./iframe-D7ZVSzXT.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DVuv6RZc.js";import"./extends-CF3RwP-h.js";import"./index-D352YTDK.js";const _={in:W.s400,out:M.e500,neutral:b.textPrimary},h=({title:a,dateLabel:I,amountLabel:j,direction:F="neutral",fiatLabel:f,logo:T,logoFallback:w,chainLogo:x,standard:q,onPress:y,testID:A})=>{const D=_[F];return e.jsxs(E,{style:o.card,onPress:y,disabled:!y,activeOpacity:.7,accessibilityRole:y?"button":void 0,testID:A,children:[x?e.jsx(R,{variant:"chain",tokenImage:T,chainImage:x,fallback:w,standard:q,tokenImageSize:t.s8,chainImageSize:t.s3_5}):e.jsx(R,{variant:"single",image:T,fallback:w,size:t.s8}),e.jsxs(l,{style:o.content,children:[e.jsxs(l,{style:o.middle,children:[e.jsx(d,{allowFontScaling:!1,style:o.title,numberOfLines:1,children:a}),e.jsx(d,{allowFontScaling:!1,style:[L.bodyNormalXS,o.secondary],numberOfLines:1,children:I})]}),e.jsxs(l,{style:o.right,children:[e.jsx(l,{style:o.amountRow,children:e.jsx(d,{allowFontScaling:!1,style:[o.amountNumber,{color:D}],numberOfLines:1,children:j})}),f?e.jsx(d,{allowFontScaling:!1,style:[L.bodyNormalXS,o.secondary],numberOfLines:1,children:f}):null]})]})]})},o=C.create({card:{flexDirection:"row",alignItems:"center",minHeight:t.s16,backgroundColor:N.bg50,borderWidth:z.bw1,borderColor:K.b400,borderRadius:P.xl,padding:t.s3,marginBottom:t.s2,gap:t.s2},content:{flex:1,minWidth:0,flexDirection:"row",alignItems:"center",gap:t.s2},middle:{flex:1,minWidth:0,gap:t.s1},title:{fontFamily:v[500],fontWeight:S.medium,fontSize:k.sm,color:b.textPrimary},secondary:{color:b.textMuted},right:{flexShrink:0,alignSelf:"flex-start",alignItems:"flex-end",gap:t.s1},amountRow:{flexDirection:"row",alignItems:"baseline",justifyContent:"flex-end"},amountNumber:{fontFamily:v[500],fontWeight:S.medium,fontSize:k.sm}});h.__docgenInfo={description:`One row of a token page's History tab (KAS / KRC-20 / KCC-20).

Follows the extension's designed history row
(kastle \`ui/popup/history/HistoryRow.tsx\`, \`DesignedRow\`) per Nicole,
2026-11-13 — this deliberately replaces the earlier Figma 64px card look:
bg50 card, b400 border, 12 radius, p-3, 8 gap after a 32px logo (14px
chain badge), title and amount 14/500, date and fiat 12/400. Height is
content-driven (two lines) with a 64 minimum so FlatList rows stay uniform.`,methods:[],displayName:"TokenHistoryRow",props:{title:{required:!0,tsType:{name:"string"},description:`Row title, e.g. "Received", "Sent", "Minted TTTT", "Deployed TTTT". The
host may carry the counterparty in it, as the extension does:
"Received from kaspa:qr3x…k7x2" / "Sent to kaspa:qp9m…w4hc" (host
shortens the address: prefix + 4 + … + 4). A long title ellipsizes at the tail.`},dateLabel:{required:!0,tsType:{name:"string"},description:'Pre-formatted by the host, extension style: "D MMM｜HH:mm" with a full-width bar (U+FF5C, no spaces), e.g. "12 Nov｜11:04". The year is added only outside the current year ("12 Nov 2025｜11:04").'},amountLabel:{required:!0,tsType:{name:"string"},description:'Amount as displayed, including sign, e.g. "+1,000,000" or "-1,000.88". Always shown in full; the title gives way first.'},direction:{required:!1,tsType:{name:"union",raw:'"in" | "out" | "neutral"',elements:[{name:"literal",value:'"in"'},{name:"literal",value:'"out"'},{name:"literal",value:'"neutral"'}]},description:'Sets the amount colour: `"in"` = success.s400 (#14B8A6), `"out"` = error.e500 (#EF4444), `"neutral"` = textPrimary. Default `"neutral"`.',defaultValue:{value:'"neutral"',computed:!1}},fiatLabel:{required:!1,tsType:{name:"string"},description:'Fiat equivalent as displayed, e.g. "≈ $9,486.17 USD". Line is omitted when undefined.'},logo:{required:!1,tsType:{name:"ImageSourcePropType"},description:"Token logo. Falls back to `logoFallback`, then to AssetImage's plain circle."},logoFallback:{required:!1,tsType:{name:"ImageSourcePropType"},description:"Image shown when `logo` is undefined or fails to load."},chainLogo:{required:!1,tsType:{name:"ImageSourcePropType"},description:`Chain badge on the token logo's corner, as the extension's row draws it.
When set the logo renders as AssetImage \`variant="chain"\`; when omitted
the row keeps the plain single logo.`},standard:{required:!1,tsType:{name:"union",raw:'"KCC20" | "KRC20" | "ERC20" | "Native"',elements:[{name:"literal",value:'"KCC20"'},{name:"literal",value:'"KRC20"'},{name:"literal",value:'"ERC20"'},{name:"literal",value:'"Native"'}]},description:"Drives AssetImage's badge rule (KRC20 / Native never show a badge). Only used with `chainLogo`."},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Tap handler. When omitted the row is not pressable and shows no press feedback."},testID:{required:!1,tsType:{name:"string"},description:""}}};const B=O,U=H,re={title:"Token/Components/TokenHistoryRow",component:h,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{logo:B,dateLabel:"12 Nov｜11:04",fiatLabel:"≈ $9,486.17 USD"},decorators:[a=>e.jsx(l,{style:V.decorator,children:e.jsx(a,{})})]},c={args:{title:"Received",amountLabel:"+1,000.7",direction:"in"}},m={args:{title:"Sent",amountLabel:"-1,000.88",direction:"out"}},p={args:{title:"Minted TTTT",amountLabel:"+1,000,000",direction:"in"}},u={args:{title:"Deployed TTTT",amountLabel:"-1,000",direction:"out"}},r={args:{chainLogo:U,standard:"KCC20"},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(h,{...a,title:"Received from kaspa:qr3x…k7x2",amountLabel:"+37,986 NACHO",direction:"in"}),e.jsx(h,{...a,title:"Sent to kaspa:qp9m…w4hc",amountLabel:"-1,000.88 NACHO",direction:"out"})]})},n={args:{title:"Received",amountLabel:"+32,115,033,564,12345678",direction:"in",dateLabel:"28 Sep｜23:59"}},s={args:{title:"Deployed Some Extremely Long Token Name",amountLabel:"-1,000",direction:"out",dateLabel:"28 Sep｜23:59"}},g={args:{title:"Received",amountLabel:"+1,000",direction:"in",logo:void 0,logoFallback:void 0}},i={args:{title:"Received",amountLabel:"+1,000",direction:"in",onPress:()=>console.log("row pressed")}},V=C.create({decorator:{flex:1,backgroundColor:N.bg0,padding:t.s5}});c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+1,000.7",
    direction: "in"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Sent",
    amountLabel: "-1,000.88",
    direction: "out"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Minted TTTT",
    amountLabel: "+1,000,000",
    direction: "in"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Deployed TTTT",
    amountLabel: "-1,000",
    direction: "out"
  }
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    chainLogo: kaspaChainLogo,
    standard: "KCC20"
  },
  render: args => <>
      <TokenHistoryRow {...args} title="Received from kaspa:qr3x…k7x2" amountLabel="+37,986 NACHO" direction="in" />
      <TokenHistoryRow {...args} title="Sent to kaspa:qp9m…w4hc" amountLabel="-1,000.88 NACHO" direction="out" />
    </>
}`,...r.parameters?.docs?.source},description:{story:"Extension row: counterparty in the title, chain badge on the logo. Incoming (teal) and outgoing (red).",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+32,115,033,564,12345678",
    direction: "in",
    dateLabel: "28 Sep｜23:59"
  }
}`,...n.parameters?.docs?.source},description:{story:"The amount + ticker always show in full; the title (address) ellipsizes first to make room.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Deployed Some Extremely Long Token Name",
    amountLabel: "-1,000",
    direction: "out",
    dateLabel: "28 Sep｜23:59"
  }
}`,...s.parameters?.docs?.source},description:{story:"Title far too long for the row: it ellipsizes, the amount column keeps its room.",...s.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+1,000",
    direction: "in",
    logo: undefined,
    logoFallback: undefined
  }
}`,...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+1,000",
    direction: "in",
    onPress: () => console.log("row pressed")
  }
}`,...i.parameters?.docs?.source},description:{story:"With `onPress` the whole row is pressable (opacity feedback).",...i.parameters?.docs?.description}}};const ne=["Received","Sent","Minted","Deployed","WithChainBadge","LongAmount","LongTitle","NoLogo","Pressed"];export{u as Deployed,n as LongAmount,s as LongTitle,p as Minted,g as NoLogo,i as Pressed,c as Received,m as Sent,r as WithChainBadge,ne as __namedExportsOrder,re as default};
