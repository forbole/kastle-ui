import{i as U}from"./icon-DhbqID1i.js";import{j as e,V as s,T as o,t as m,s as j,a,d as K,c as g,f as C,g as f,w as S,e as v,b as q}from"./theme-CiNQ9tnV.js";import{S as P}from"./SwipeToConfirm-CTtls1L7.js";import{N as R}from"./NetworkTypeChip-D7Tf-UEU.js";import{F as H}from"./index-BslmBNqt.js";import{I as V}from"./index-D-ZjIVYJ.js";import{M as W}from"./index-BKmf4mHU.js";import{I as O}from"./info-C_vKvYRW.js";import"./iframe-BONNEfx2.js";import"./preload-helper-Zf8nSx-t.js";import"./Animated-DZpzYPxE.js";import"./extends-CF3RwP-h.js";import"./index-B_p013at.js";import"./index-QM5v7C0K.js";import"./NativeEventEmitter-CYKJmPxg.js";import"./index-k6tIaml9.js";import"./index-THQIcbEB.js";import"./arrow-right-D4TVoFsf.js";import"./createLucideIcon-D_P4aotJ.js";import"./registry-BNXumi8c.js";import"./index-C1ljuv1j.js";const T=({illustrationSource:u,senderAddress:k,recipientAddress:F,chipLabel:w,standard:b,amount:E,amountUsd:y,estFeeAmount:A,estFeeUsd:x,onEstFeePress:h,isConfirmDisabled:D=!1,isConfirmLoading:I=!1,confirmTitle:N="Swipe to confirm",onConfirm:L})=>e.jsxs(s,{style:r.container,children:[e.jsxs(H,{style:r.scrollView,contentContainerStyle:r.contentContainer,showsVerticalScrollIndicator:!1,children:[u&&e.jsx(s,{style:r.illustrationWrap,children:e.jsx(V,{source:u,style:r.illustration,resizeMode:"contain"})}),e.jsxs(s,{style:r.rows,children:[e.jsxs(s,{style:r.row,children:[e.jsxs(s,{style:r.rowHeader,children:[e.jsx(o,{allowFontScaling:!1,style:r.rowTitle,children:"Send from"}),e.jsx(R,{label:w,standard:b})]}),e.jsx(o,{allowFontScaling:!1,style:r.rowAddress,children:k})]}),e.jsxs(s,{style:r.row,children:[e.jsxs(s,{style:r.rowHeader,children:[e.jsx(o,{allowFontScaling:!1,style:r.rowTitle,children:"Send to"}),e.jsx(R,{label:w,standard:b})]}),e.jsx(o,{allowFontScaling:!1,style:r.rowAddress,children:F})]}),e.jsxs(s,{style:r.mergedCard,children:[e.jsx(s,{style:[r.mergedRow,r.mergedRowDivider],children:e.jsxs(s,{style:r.valueRowContent,children:[e.jsx(o,{allowFontScaling:!1,style:r.rowTitle,children:"Amount"}),e.jsxs(s,{style:r.valueColumn,children:[e.jsx(o,{allowFontScaling:!1,style:r.valueAmount,children:E}),!!y&&e.jsx(o,{allowFontScaling:!1,style:r.valueAmountUsd,children:y})]})]})}),e.jsx(W,{style:r.mergedRow,onPress:h,disabled:!h,activeOpacity:h?.7:1,children:e.jsxs(s,{style:r.valueRowContent,children:[e.jsxs(s,{style:r.feeRowLabel,children:[e.jsx(o,{allowFontScaling:!1,style:r.rowTitle,children:"Est. Fee"}),!!h&&e.jsx(O,{size:14,color:m.t900,strokeWidth:2})]}),e.jsxs(s,{style:r.valueColumn,children:[e.jsx(o,{allowFontScaling:!1,style:r.valueAmount,children:A}),!!x&&e.jsx(o,{allowFontScaling:!1,style:r.valueAmountUsd,children:x})]})]})})]})]})]}),e.jsxs(s,{style:r.bottomBar,children:[e.jsx(P,{title:N,onConfirm:L,isDisabled:D,isLoading:I}),e.jsx(s,{style:r.homeIndicator})]})]}),r=j.create({container:{flex:1,backgroundColor:K.backgroundScreen},scrollView:{flex:1},contentContainer:{paddingHorizontal:a.s5,paddingTop:a.s6,paddingBottom:a.s10,gap:a.s4},illustrationWrap:{alignItems:"center"},illustration:{width:237,height:160},rows:{gap:a.s2},row:{width:"100%",gap:a.s2,borderRadius:v["2xl"],borderWidth:f.bw1,borderColor:C.b200,backgroundColor:S["5%"],padding:a.s4},mergedCard:{width:"100%",borderRadius:v["2xl"],borderWidth:f.bw1,borderColor:C.b200,backgroundColor:S["5%"],overflow:"hidden"},mergedRow:{width:"100%",gap:a.s2,padding:a.s4},mergedRowDivider:{borderBottomWidth:f.bw1,borderBottomColor:C.b200},rowHeader:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},rowTitle:{...g.bodySemiboldMD,color:m.t900},rowAddress:{...g.bodyNormalSM,color:m.t600},valueRowContent:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},feeRowLabel:{flexDirection:"row",alignItems:"center",gap:a.s2},valueColumn:{alignItems:"flex-end",gap:a.s1},valueAmount:{...g.bodySemiboldMD,color:m.t900},valueAmountUsd:{...g.bodyNormalSM,color:m.t600},bottomBar:{backgroundColor:K.backgroundScreen,paddingHorizontal:a.s5,paddingTop:a.s3},homeIndicator:{height:34}});T.__docgenInfo={description:`Content-only screen — the host route supplies its own native header
(back button + "Confirm" title) and safe-area wrapper, same convention
as TransferConfirmPage / NameDetailPage / TokenDetailPage.

Figma nodes \`14741:398568\` (KCC20) / \`14741:398569\` (KRC20), "without
kns" — i.e. the generic token Send Confirm, as opposed to
TransferConfirmPage's KNS-name-transfer-specific one. Card style
("Textarea": \`border-radius/2xl\`, \`border/border200\`, \`white/5%\` bg,
\`spacing/4\` padding) is IDENTICAL to TransferConfirmPage's own \`row\`
style — confirmed via get_design_context, not assumed — so that pattern
is reused directly rather than re-derived.

Chip label text: Nicole confirmed "Kaspa-KCC20" (hyphen form) on both
Send-from/Send-to rows — this matches what Figma's own screen already
shows, no conversion needed. This component just renders whatever
\`chipLabel\` it's given, doesn't hardcode the text.`,methods:[],displayName:"SendConfirmPage",props:{illustrationSource:{required:!1,tsType:{name:"ImageSourcePropType"},description:`Top illustration (Figma's "sign" scroll+feather art) — caller-supplied,
not baked in. Renders nothing if omitted.`},senderAddress:{required:!0,tsType:{name:"string"},description:"Sender's wallet address."},recipientAddress:{required:!0,tsType:{name:"string"},description:"Recipient's wallet address."},chipLabel:{required:!0,tsType:{name:"string"},description:`Chip label shown on BOTH "Send from" and "Send to" rows — Figma shows
the identical label on both (e.g. "Kaspa-KCC20" / "Kaspa-KRC20", hyphen
form per Nicole's round-3 decision), not two different ones.`},standard:{required:!1,tsType:{name:"union",raw:'"KCC20" | "KRC20" | "ERC20" | "Native"',elements:[{name:"literal",value:'"KCC20"'},{name:"literal",value:'"KRC20"'},{name:"literal",value:'"ERC20"'},{name:"literal",value:'"Native"'}]},description:`Drives the chip's colour (round 5, 2026-09-26): KCC20 gets its own
raw-hex colour, everything else the token-bound "info" colour — see
NetworkTypeChip's doc comment for the full provenance (re-read live
against this exact screen: \`14741:398568\` KCC20, \`14741:398569\`
KRC20).`},amount:{required:!0,tsType:{name:"string"},description:'Formatted send amount, e.g. "1,608.32787 NACHO".'},amountUsd:{required:!1,tsType:{name:"string"},description:'Formatted USD equivalent, e.g. "≈ $24,000 USD".'},estFeeAmount:{required:!0,tsType:{name:"string"},description:'Formatted estimated fee total, e.g. "0.423354 NACHO".'},estFeeUsd:{required:!1,tsType:{name:"string"},description:'Formatted USD equivalent, e.g. "≈ $1.345 USD".'},onEstFeePress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Fires when the Est. Fee row is pressed — the fee breakdown sheet
(EstFeeSheet) is NOT rendered by this component. Per the round-3
dispatch: exposed as a plain callback so the host decides when/how to
open it, rather than this page owning sheet-open state internally
(TransferConfirmPage's own pattern does own that state — deliberately
not copied here). The info icon next to "Est. Fee" only shows when
this is provided; the row is only pressable when it's provided.`},isConfirmDisabled:{required:!1,tsType:{name:"boolean"},description:"Disables the swipe-to-confirm button, e.g. while fees are still loading.",defaultValue:{value:"false",computed:!1}},isConfirmLoading:{required:!1,tsType:{name:"boolean"},description:"Shows a loading spinner on the swipe-to-confirm button.",defaultValue:{value:"false",computed:!1}},confirmTitle:{required:!1,tsType:{name:"string"},description:"Swipe button label.",defaultValue:{value:'"Swipe to confirm"',computed:!1}},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const $=U,me={title:"Send/SendConfirmPage",component:T,parameters:{layout:"fullscreen",backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{illustrationSource:$,senderAddress:"kaspa:feevxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr7vur7",recipientAddress:"kaspa:feevxs00fycp9v7tjcjsgcj5jttkqe7t7vdfxfradj8283gk7cu9tr3u8tgas",amount:"1,608.32787 NACHO",amountUsd:"≈ $24,000 USD",estFeeAmount:"0.423354 NACHO",estFeeUsd:"≈ $1.345 USD",onConfirm:()=>{}},decorators:[u=>e.jsx(s,{style:B.screen,children:e.jsx(u,{})})]},t={args:{chipLabel:"Kaspa-KCC20",standard:"KCC20"}},n={args:{chipLabel:"Kaspa-KRC20",standard:"KRC20"}},i={name:"Kasplex-ERC20",args:{chipLabel:"Kasplex-ERC20",standard:"ERC20"}},d={name:"Igra-ERC20",args:{chipLabel:"Igra-ERC20",standard:"ERC20"}},l={args:{chipLabel:"Kaspa",standard:"Native",amount:"1,000 KAS",amountUsd:"≈ $230 USD",estFeeAmount:"0.0001 KAS",estFeeUsd:"≈ $0.023 USD"}},c={args:{chipLabel:"Kaspa-KCC20",standard:"KCC20",onEstFeePress:()=>{}}},p={args:{chipLabel:"Kaspa-KCC20",standard:"KCC20",isConfirmDisabled:!0}},B=j.create({screen:{flex:1,backgroundColor:q.bg0}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    chipLabel: "Kaspa-KCC20",
    standard: "KCC20"
  }
}`,...t.parameters?.docs?.source},description:{story:`KCC20 — Figma node 14741:398568. Chip label "Kaspa-KCC20" — hyphen form,
confirmed by Nicole (round 3). Chip colour: raw-hex teal (round 5) — see
NetworkTypeChip's doc comment.`,...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    chipLabel: "Kaspa-KRC20",
    standard: "KRC20"
  }
}`,...n.parameters?.docs?.source},description:{story:'KRC20 — Figma node 14741:398569. Chip colour: token-bound "info" (round 5).',...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Kasplex-ERC20",
  args: {
    chipLabel: "Kasplex-ERC20",
    standard: "ERC20"
  }
}`,...i.parameters?.docs?.source},description:{story:`Kasplex-ERC20 — round 6, 2026-09-26 (team-lead): ERC20 variants weren't
shown on any feature page. \`standard="ERC20"\` gets the same token-bound
"info" chip colour as KRC20 (no live Kasplex/Igra chip instance found
anywhere to read a colour from — see NetworkTypeChip's own doc comment).`,...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Igra-ERC20",
  args: {
    chipLabel: "Igra-ERC20",
    standard: "ERC20"
  }
}`,...d.parameters?.docs?.source},description:{story:"Igra-ERC20 — same standard as Kasplex-ERC20, different network name only.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    chipLabel: "Kaspa",
    standard: "Native",
    amount: "1,000 KAS",
    amountUsd: "≈ $230 USD",
    estFeeAmount: "0.0001 KAS",
    estFeeUsd: "≈ $0.023 USD"
  }
}`,...l.parameters?.docs?.source},description:{story:"Native KAS — no KCC20/KRC20-support-specific chip text; still shows the plain network chip.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    chipLabel: "Kaspa-KCC20",
    standard: "KCC20",
    onEstFeePress: () => {}
  }
}`,...c.parameters?.docs?.source},description:{story:"Est. Fee row pressable (fee breakdown callback wired) — info icon only shows when this is provided.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    chipLabel: "Kaspa-KCC20",
    standard: "KCC20",
    isConfirmDisabled: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Confirm button disabled, e.g. while fees are still loading.",...p.parameters?.docs?.description}}};const ue=["KCC20","KRC20","KasplexERC20","IgraERC20","KAS","WithFeeBreakdownTrigger","ConfirmDisabled"];export{p as ConfirmDisabled,d as IgraERC20,l as KAS,t as KCC20,n as KRC20,i as KasplexERC20,c as WithFeeBreakdownTrigger,ue as __namedExportsOrder,me as default};
