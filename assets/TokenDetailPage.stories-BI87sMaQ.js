import{i as ie}from"./icon-DhbqID1i.js";import{k as le}from"./kaspa-logo-DhW_40_v.js";import{j as e,a,V as o,c as m,p as de,s as z,t as T,d as E,f as L,g as R,e as _,b as O,w as ce}from"./theme-EaGHEDeH.js";import{r as $}from"./iframe-DOgRovjb.js";import{T as pe}from"./TokenHistoryRow-uj5uu1-n.js";import{A as ue}from"./AssetImage-DbRYOgrv.js";import{S as me}from"./Segmented-mlbGKeDI.js";import{N as he}from"./NetworkTypeChip-D_kJjubW.js";import{D as n}from"./DetailKVRow-BSwLCVMz.js";import{T as u}from"./index-BTcF033-.js";import{B as fe}from"./badge-check-Bu8R--G7.js";import{F as ge}from"./index-BEdIy_gZ.js";import{F as Ce}from"./index-BZ1Nhbfz.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CTSQgxXF.js";import"./extends-CF3RwP-h.js";import"./index-DGvV-W3G.js";import"./index-wUwFDFDT.js";import"./triangle-alert-Dl8YbhdA.js";import"./createLucideIcon-DWBMUElK.js";import"./registry-BNXumi8c.js";import"./external-link-BGF5qd0N.js";import"./index-DdlO-cV0.js";import"./EventEmitter-DNVZYx7c.js";const ye=[{label:"History",value:"history"},{label:"Token info",value:"assetInfo"}],x=({name:t,subtitle:l,priceLabel:p,extraRows:S,rowsAfterNetwork:d,logo:U,chainLogo:G,fallback:X,isVerified:J=!1,standard:h,chipLabel:Q,chipIcon:Y,network:Z,covenantId:ee,idLabel:ae=h==="KCC20"?"Covenant ID":"Contract Address",variant:te="basic",totalMintedPercent:D,totalMintedFraction:N,mintCount:V,holderCount:j,transferCount:F,preallocationAmount:A,defaultMintAmount:q,decimal:P,minter:M,activeTab:H,onTabChange:re,historyContent:ne})=>{const B=J&&h==="KCC20",oe=h==="KCC20",s=[{key:"network",node:e.jsx(n,{label:"Network",value:Z,paddingVertical:a.s3_5})},...(d??[]).map(i=>({key:`after-network-${i.label}`,node:e.jsx(n,{label:i.label,value:i.value,paddingVertical:a.s3_5})})),{key:"covenantId",node:e.jsx(n,{label:ae,value:ee,paddingVertical:a.s3_5})}];return te==="full"&&(D!==void 0&&s.push({key:"totalMinted",node:e.jsx(n,{label:"Total Minted",value:"",valueNode:e.jsxs(o,{style:r.totalMintedValue,children:[e.jsx(u,{allowFontScaling:!1,style:[m.bodyNormalSM,r.totalMintedPercent],children:D}),!!N&&e.jsx(u,{allowFontScaling:!1,style:[m.bodyNormalXS,r.totalMintedFraction],children:N})]}),paddingVertical:a.s3_5})}),V!==void 0&&s.push({key:"mintCount",node:e.jsx(n,{label:"Mint Count",value:V,paddingVertical:a.s3_5})}),j!==void 0&&s.push({key:"holderCount",node:e.jsx(n,{label:"Holder Count",value:j,paddingVertical:a.s3_5})}),F!==void 0&&s.push({key:"transferCount",node:e.jsx(n,{label:"Transfer Count",value:F,paddingVertical:a.s3_5})}),A!==void 0&&s.push({key:"preallocationAmount",node:e.jsx(n,{label:"Preallocation Amount",value:A,paddingVertical:a.s3_5})}),q!==void 0&&s.push({key:"defaultMintAmount",node:e.jsx(n,{label:"Default Mint Amount",value:q,paddingVertical:a.s3_5})}),P!==void 0&&s.push({key:"decimal",node:e.jsx(n,{label:"Decimal",value:P,paddingVertical:a.s3_5})}),M!==void 0&&s.push({key:"minter",node:e.jsx(n,{label:"Minter",value:M,paddingVertical:a.s3_5})})),S?.forEach(i=>{s.push({key:`extra-${i.label}`,node:e.jsx(n,{label:i.label,value:i.value,paddingVertical:a.s3_5})})}),oe&&s.push({key:"security",node:e.jsx(n,{label:"Security",value:B?"Verified":"Unverified",valuePrefix:B?e.jsx(fe,{size:16,color:de.p500,strokeWidth:2}):void 0,paddingVertical:a.s3_5})}),e.jsxs(o,{style:r.container,children:[e.jsx(o,{style:r.segmentedWrap,children:e.jsx(me,{isFullWidth:!0,options:ye,value:H,onChange:i=>re(i)})}),H==="assetInfo"?e.jsxs(ge,{style:r.scrollView,contentContainerStyle:r.contentContainer,showsVerticalScrollIndicator:!1,children:[e.jsxs(o,{style:r.headerCard,children:[e.jsxs(o,{style:r.headerLeft,children:[e.jsx(ue,{variant:"chain",tokenImage:U,chainImage:G,fallback:X,standard:h,tokenImageSize:44,chainImageSize:20}),e.jsxs(o,{style:r.headerText,children:[e.jsx(o,{style:r.nameRow,children:e.jsx(u,{allowFontScaling:!1,style:[m.bodySemiboldLG,r.name],numberOfLines:1,children:t})}),!!l&&e.jsx(u,{allowFontScaling:!1,style:[m.bodyNormalSM,r.priceLabel],numberOfLines:1,children:l}),!!p&&e.jsx(u,{allowFontScaling:!1,style:[m.bodyNormalSM,r.priceLabel],numberOfLines:1,children:p})]})]}),e.jsx(o,{style:r.headerRight,children:e.jsx(he,{label:Q,icon:Y,standard:h})})]}),e.jsxs(o,{style:r.section,children:[e.jsx(u,{allowFontScaling:!1,style:r.sectionTitle,children:"Token Info"}),e.jsx(o,{style:r.infoCard,children:s.map((i,se)=>e.jsx(o,{style:[r.infoRow,se<s.length-1&&r.infoRowBorder],children:i.node},i.key))})]})]}):e.jsx(o,{style:r.historyWrap,children:ne})]})},r=z.create({container:{flex:1,backgroundColor:E.backgroundScreen},scrollView:{flex:1},contentContainer:{paddingHorizontal:a.s5,paddingBottom:a.s10,gap:a.s4},segmentedWrap:{paddingHorizontal:a.s5,paddingTop:a.s4,paddingBottom:a.s4},historyWrap:{flex:1},headerCard:{flexDirection:"row",alignItems:"center",borderRadius:_["2xl"],borderWidth:R.bw1,borderColor:L.b200,backgroundColor:ce["5%"],paddingVertical:a.s4},headerLeft:{flex:1,flexDirection:"row",alignItems:"center",gap:a.s3,paddingLeft:a.s3,paddingRight:a.s2},headerRight:{alignItems:"center",justifyContent:"center",paddingLeft:a.s2_5,paddingRight:a.s3},headerText:{flex:1,gap:a.s1},nameRow:{flexDirection:"row",alignItems:"center",gap:a.s1_5},name:{color:T.t900,flexShrink:1},priceLabel:{color:T.t600},section:{gap:a.s2},sectionTitle:{...m.bodySemiboldMD,color:T.t600,paddingVertical:a.s2},infoCard:{backgroundColor:O.bg50,borderWidth:R.bw1,borderColor:L.b200,borderRadius:_["2xl"],paddingHorizontal:a.s4,overflow:"hidden"},infoRow:{},infoRowBorder:{borderBottomWidth:R.bw1,borderBottomColor:L.b200},totalMintedValue:{alignItems:"flex-end"},totalMintedPercent:{color:E.success},totalMintedFraction:{color:T.t600}});x.__docgenInfo={description:`Content-only screen — the host route supplies its own native header (back
button + centered title, e.g. expo-router \`Stack.Screen\`) and safe-area
wrapper, same convention as NameDetailPage / TransferConfirmPage.

Today's Figma (nodes \`14745:449924\` verified, \`14745:450123\` unverified)
is much shorter than the original checklist: just Network, Covenant ID,
Security — no Token Type / Mint Count / Transfer Count rows. Built to
match Figma as drawn, per "Figma is source of truth" (Nicole,
2026-09-25), not the longer checklist list from the earlier round.

\`variant="full"\` (round 5 queued item B, 2026-09-26) brings the longer
list back for screens that need it — see \`variant\`'s own doc comment on
\`TokenDetailPageProps\` for the row list and Figma node.`,methods:[],displayName:"TokenDetailPage",props:{name:{required:!0,tsType:{name:"string"},description:'Token name shown in the header, e.g. "NACHO".'},subtitle:{required:!1,tsType:{name:"string"},description:"Optional second line under the name (e.g. the token's full name when `name` carries the symbol)."},priceLabel:{required:!1,tsType:{name:"string"},description:'Price line under the name, e.g. "$0.00041".'},extraRows:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]"},description:`Extra Token Info rows (label / value, caller-formatted), e.g. Standard,
Price, Value. Rendered after the standard rows and before Security, in
the order given. Pure display: the page does no formatting or hiding.`},rowsAfterNetwork:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]"},description:`Rows between Network and the ID row (label / value, caller-formatted),
e.g. Standard, Decimals — the extension's order. Pure display.`},logo:{required:!1,tsType:{name:"ImageSourcePropType"},description:""},chainLogo:{required:!1,tsType:{name:"ImageSourcePropType"},description:'Chain badge image — shown per `standard`, see AssetImage\'s `variant="chain"` (D-071).'},fallback:{required:!1,tsType:{name:"ImageSourcePropType"},description:""},isVerified:{required:!1,tsType:{name:"boolean"},description:`Drives the "Security" row's value: "Verified" with a checkmark when
true, plain "Unverified" when false. The row itself shows for KCC20
only. Verification only exists for KCC20 (Leo sync, 2026-09-25) —
KRC20/ERC20 never show the row. No badge is drawn next to the token
name in the header (Nicole, 2026-11-13).`,defaultValue:{value:"false",computed:!1}},standard:{required:!0,tsType:{name:"union",raw:'"KCC20" | "KRC20" | "ERC20" | "Native"',elements:[{name:"literal",value:'"KCC20"'},{name:"literal",value:'"KRC20"'},{name:"literal",value:'"ERC20"'},{name:"literal",value:'"Native"'}]},description:"Drives the header icon's chain-badge (D-071) and the header chip's icon."},chipLabel:{required:!0,tsType:{name:"string"},description:`Header chip label, e.g. "Kaspa-KCC20" / "Kaspa-KRC20" (hyphen form,
Nicole's round-3 decision). Figma keeps this chip on BOTH verified
and unverified Token Details — D-072 only removed the Swap select's
text label, not this one.`},chipIcon:{required:!1,tsType:{name:"ImageSourcePropType"},description:"Header chip's small leading icon — a Kaspa network glyph in Figma\n(`03783f92...svg`, `#6FC7BA` fill on white), NOT the token's own logo.\nCaller-supplied, same convention as `chainLogo`/`logo` — this\ncomponent doesn't bake in a hardcoded Kaspa asset."},network:{required:!0,tsType:{name:"string"},description:'Network row value, e.g. "Kaspa".'},covenantId:{required:!0,tsType:{name:"string"},description:'ID row value, e.g. "84b93d7f...48dj6" (caller formats the ellipsis).\nProp name kept as `covenantId` (not renamed alongside `idLabel` below\n— not asked for, avoids an unrequested API change); the label shown\nnext to it now varies by standard, see `idLabel`.'},idLabel:{required:!1,tsType:{name:"string"},description:`ID row's label — defaults to "Covenant ID" for KCC20, "Contract
Address" for every other standard (KRC20/ERC20/Native). Round 6,
2026-09-26 (team-lead): resolves the open question the previous round
left ("Leo will confirm later whether this label varies for
non-KCC20 tokens") — it does. Renamed from \`covenantIdLabel\` to this
neutral name since it's no longer a single fixed default; still an
overridable prop, not hardcoded.`,defaultValue:{value:'standard === "KCC20" ? "Covenant ID" : "Contract Address"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"basic" | "full"',elements:[{name:"literal",value:'"basic"'},{name:"literal",value:'"full"'}]},description:`"basic" (default) — the 3-row Network/Covenant ID/Security list Figma
currently draws for Token Details (\`14745:449924\`/\`14745:450123\`).
"full" — the complete Token Info list (round 5 queued item B,
2026-09-26; Nicole's source frame \`14590:112169\` → leftmost "KCC20"
section frame, node \`14576:67578\`): Network, Covenant ID, Total
Minted, Mint Count, Holder Count, Transfer Count, Preallocation
Amount, Default Mint Amount, Decimal, Minter, then Security (same
KCC20-only rule as basic, appended at the end — this exact frame
doesn't draw a Security row, but the rule is unchanged from basic per
the dispatch). All full-variant fields below are optional and
data-free props — this component renders whatever it's given and
skips any row whose value isn't passed, so Leo can wire whichever
APIs actually exist without every row needing to be ready at once.`,defaultValue:{value:'"basic"',computed:!1}},totalMintedPercent:{required:!1,tsType:{name:"string"},description:'Total Minted row\'s percentage value, e.g. "10%" — rendered in\n`colors.success` (Figma binds this exact text to\n`text/success-color`, `#2dd4bf` — an exact match to `colors.success`\nin theme.ts). Full variant only.'},totalMintedFraction:{required:!1,tsType:{name:"string"},description:'Total Minted row\'s secondary line under the percentage, e.g.\n"(2.5B / 25B)" — `typography.t600` 12px (Figma:\n`typography/typography600`, `#9eb7c4`, exact match). Full variant\nonly; only rendered when `totalMintedPercent` is also set.'},mintCount:{required:!1,tsType:{name:"string"},description:`Full variant only, e.g. "24% (480 /2,400)" — Figma draws this as one
plain string on a single line, unlike Total Minted's two-line/coloured
treatment.`},holderCount:{required:!1,tsType:{name:"string"},description:'Full variant only, e.g. "9,998,095".'},transferCount:{required:!1,tsType:{name:"string"},description:'Full variant only, e.g. "9,998,095".'},preallocationAmount:{required:!1,tsType:{name:"string"},description:'Full variant only, e.g. "1,000,000".'},defaultMintAmount:{required:!1,tsType:{name:"string"},description:'Full variant only, e.g. "9,998,095".'},decimal:{required:!1,tsType:{name:"string"},description:'Full variant only, e.g. "8".'},minter:{required:!1,tsType:{name:"string"},description:'Full variant only, e.g. "kaspa:qpzp...pnwz" (caller formats the ellipsis).'},activeTab:{required:!0,tsType:{name:"union",raw:'"history" | "assetInfo"',elements:[{name:"literal",value:'"history"'},{name:"literal",value:'"assetInfo"'}]},description:'Controlled tab — "history" | "assetInfo".'},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(tab: "history" | "assetInfo") => void',signature:{arguments:[{type:{name:"union",raw:'"history" | "assetInfo"',elements:[{name:"literal",value:'"history"'},{name:"literal",value:'"assetInfo"'}]},name:"tab"}],return:{name:"void"}}},description:""},historyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content shown under the "History" tab. Left as a slot — history is a
transaction list, which is data, not pure UI; this component doesn't
fetch or own that data.

CONTRACT: this node is rendered in a \`flex: 1\` View, NOT inside a
ScrollView. It must be its own scroller (e.g. a FlatList with its own
\`onEndReached\`) and fill the available height. Do not pass a
non-scrolling tall column — it will be clipped. Per Figma (node
2192:366853) the History tab shows only the segmented control above the
list; the token header card appears on the Token Info tab only. The
caller pads its own rows (20 horizontal) — this wrapper adds no padding.`}}};const K=ie,I=le,c=t=>{const[l,p]=$.useState("assetInfo");return e.jsx(x,{...t,activeTab:l,onTabChange:p})},Oe={title:"Token/TokenDetailPage",component:x,parameters:{layout:"fullscreen",backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{name:"NACHO",priceLabel:"$0.00041",logo:K,chainLogo:I,chipIcon:I,network:"Kaspa",covenantId:"84b93d7f...48dj6"},decorators:[t=>e.jsx(o,{style:W.screen,children:e.jsx(t,{})})]},f={name:"Default (verified KCC20)",render:t=>e.jsx(c,{...t,isVerified:!0,standard:"KCC20",chipLabel:"Kaspa-KCC20"})},be=Array.from({length:60},(t,l)=>l%2?{id:String(l),title:"Sent to kaspa:qp9m…w4hc",amount:"-1,000.88 NACHO",direction:"out"}:{id:String(l),title:"Received from kaspa:qr3x…k7x2",amount:"+37,986 NACHO",direction:"in"}),g={render:t=>{const l=()=>{const[p,S]=$.useState("history");return e.jsx(x,{...t,isVerified:!0,standard:"KCC20",chipLabel:"Kaspa-KCC20",activeTab:p,onTabChange:S,historyContent:e.jsx(Ce,{data:be,keyExtractor:d=>d.id,contentContainerStyle:W.historyList,renderItem:({item:d})=>e.jsx(pe,{title:d.title,dateLabel:"12 Nov｜18:03",amountLabel:d.amount,direction:d.direction,fiatLabel:"≈ $19.235 USD",logo:K,chainLogo:I,standard:"KCC20"})})})};return e.jsx(l,{})}},C={render:t=>e.jsx(c,{...t,isVerified:!1,standard:"KCC20",chipLabel:"Kaspa-KCC20"})},y={render:t=>e.jsx(c,{...t,name:"NACHO",subtitle:"Nacho the Kat",isVerified:!0,standard:"KCC20",chipLabel:"Kaspa-KCC20",rowsAfterNetwork:[{label:"Standard",value:"KCC-20"},{label:"Decimals",value:"6"}],extraRows:[{label:"Price",value:"$0.00041"},{label:"Value",value:"$12.40"}]})},b={render:t=>e.jsx(c,{...t,isVerified:!1,standard:"KRC20",chipLabel:"Kaspa-KRC20"})},v={render:t=>e.jsx(c,{...t,name:"KAS",isVerified:!1,standard:"Native",chipLabel:"Kaspa",covenantId:"—"})},w={name:"Full info",render:t=>e.jsx(c,{...t,name:"TTTT",logo:K,priceLabel:"$0.052",isVerified:!0,standard:"KCC20",chipLabel:"Kaspa-KCC20",variant:"full",totalMintedPercent:"10%",totalMintedFraction:"(2.5B / 25B)",mintCount:"24% (480 /2,400)",holderCount:"9,998,095",transferCount:"9,998,095",preallocationAmount:"1,000,000",defaultMintAmount:"9,998,095",decimal:"8",minter:"kaspa:qpzp...pnwz"})},k={name:"Full info — Kasplex-ERC20",render:t=>e.jsx(c,{...t,name:"TTTT",logo:K,priceLabel:"$0.052",standard:"ERC20",chipLabel:"Kasplex-ERC20",network:"Kasplex",variant:"full",totalMintedPercent:"10%",totalMintedFraction:"(2.5B / 25B)",mintCount:"24% (480 /2,400)",holderCount:"9,998,095",transferCount:"9,998,095",preallocationAmount:"1,000,000",defaultMintAmount:"9,998,095",decimal:"8",minter:"kaspa:qpzp...pnwz"})},W=z.create({screen:{flex:1,backgroundColor:O.bg0},historyList:{paddingHorizontal:a.s5,paddingBottom:a.s10}});f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Default (verified KCC20)",
  render: args => <TokenDetailPageDemo {...args} isVerified standard="KCC20" chipLabel="Kaspa-KCC20" />
}`,...f.parameters?.docs?.source},description:{story:`Verified KCC20 — mirrors Figma's NACHO example (node 14745:449924). Header
chip stays on verified and unverified ("Kaspa-KCC20", hyphen form per
Nicole's round-3 decision). No badge next to the name; the Security row
("Verified" + checkmark) is the only verified marker. KCC20 always shows
the row — see UnverifiedKCC20. KRC20 / NativeKAS have no Security row.`,...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Demo = () => {
      const [tab, setTab] = useState<"history" | "assetInfo">("history");
      return <TokenDetailPage {...args} isVerified standard="KCC20" chipLabel="Kaspa-KCC20" activeTab={tab} onTabChange={setTab} historyContent={<FlatList data={historyRows} keyExtractor={r => r.id} contentContainerStyle={storyStyles.historyList} renderItem={({
        item
      }) => <TokenHistoryRow title={item.title} dateLabel="12 Nov｜18:03" amountLabel={item.amount} direction={item.direction} fiatLabel="≈ $19.235 USD" logo={placeholderLogo} chainLogo={kaspaChainLogo} standard="KCC20" />} />} />;
    };
    return <Demo />;
  }
}`,...g.parameters?.docs?.source},description:{story:`History tab — rows are the real \`TokenHistoryRow\` (token logo + chain
badge, "Received from …" title, date, green incoming amount) like the
extension's token history. \`historyContent\` is a FlatList that scrolls by
itself inside a flex:1 View (no ScrollView around it). Segmented control
stays fixed, full width. Logo is the neutral placeholder: no NACHO asset
in this repo.`,...g.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <TokenDetailPageDemo {...args} isVerified={false} standard="KCC20" chipLabel="Kaspa-KCC20" />
}`,...C.parameters?.docs?.source},description:{story:'Unverified KCC20 — Security row still shows, reading "Unverified" with no checkmark.',...C.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <TokenDetailPageDemo {...args} name="NACHO" subtitle="Nacho the Kat" isVerified standard="KCC20" chipLabel="Kaspa-KCC20" rowsAfterNetwork={[{
    label: "Standard",
    value: "KCC-20"
  }, {
    label: "Decimals",
    value: "6"
  }]} extraRows={[{
    label: "Price",
    value: "$0.00041"
  }, {
    label: "Value",
    value: "$12.40"
  }]} />
}`,...y.parameters?.docs?.source},description:{story:"KCC20 as the app shows it: symbol as title, full name under it; Standard / Decimals after Network (extension order), Price / Value before Security.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <TokenDetailPageDemo {...args} isVerified={false} standard="KRC20" chipLabel="Kaspa-KRC20" />
}`,...b.parameters?.docs?.source},description:{story:`No Security row at all — only KCC20 gets one. ID row label
reads "Contract Address" here (round 6, 2026-09-26 — team-lead):
\`idLabel\` defaults to "Contract Address" for any non-KCC20 standard,
not overridden in this story's args, so it's automatic.`,...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <TokenDetailPageDemo {...args} name="KAS" isVerified={false} standard="Native" chipLabel="Kaspa" covenantId="—" />
}`,...v.parameters?.docs?.source},description:{story:"Native KAS — no Security row either.",...v.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Full info",
  render: args => <TokenDetailPageDemo {...args} name="TTTT" logo={placeholderLogo} priceLabel="$0.052" isVerified standard="KCC20" chipLabel="Kaspa-KCC20" variant="full" totalMintedPercent="10%" totalMintedFraction="(2.5B / 25B)" mintCount="24% (480 /2,400)" holderCount="9,998,095" transferCount="9,998,095" preallocationAmount="1,000,000" defaultMintAmount="9,998,095" decimal="8" minter="kaspa:qpzp...pnwz" />
}`,...w.parameters?.docs?.source},description:{story:`Complete Token Info list — Nicole's source frame \`14590:112169\` →
leftmost "KCC20" section frame (node \`14576:67578\`, token "TTTT").
Network stays "Kaspa" (not the frame's drawn "Kasplex") per the earlier
KCC20/KRC20 → "Kaspa" decision; Covenant ID uses the page's own default
example value, not the frame's literal placeholder text "Covenant ID".
Security row ("Verified") still appends at the end (KCC20 always shows
it), even though this specific frame doesn't draw one.`,...w.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Full info — Kasplex-ERC20",
  render: args => <TokenDetailPageDemo {...args} name="TTTT" logo={placeholderLogo} priceLabel="$0.052" standard="ERC20" chipLabel="Kasplex-ERC20" network="Kasplex" variant="full" totalMintedPercent="10%" totalMintedFraction="(2.5B / 25B)" mintCount="24% (480 /2,400)" holderCount="9,998,095" transferCount="9,998,095" preallocationAmount="1,000,000" defaultMintAmount="9,998,095" decimal="8" minter="kaspa:qpzp...pnwz" />
}`,...k.parameters?.docs?.source},description:{story:`Kasplex-ERC20 full info — round 6, 2026-09-26 (team-lead): ERC20
variants weren't shown on any feature page. Nicole's source section
\`14590:112169\` → "other token" → node \`14592:272324\` (the Kasplex
frame, same reused "TTTT" example and Token Info numbers as
FullInfo/KRC20 above — checked via screenshot, all three standard
frames share identical placeholder values). Figma draws the chip as
plain "Kasplex" — using the hyphen convention "Kasplex-ERC20" per
Nicole's round-3 decision, same as every other chip label here. ID row
reads "Contract Address" (idLabel's non-KCC20 default, not overridden).
No Security row (KCC20-only rule).

Network: "Kasplex" — NOT forced to "Kaspa" like the KCC20/KRC20 full
info stories above. That earlier decision was specifically about
KCC20/KRC20 (both run on the Kaspa L1, so Figma's drawn "Kasplex" there
was a labelling mistake); Kasplex-ERC20 tokens genuinely run on the
Kasplex network, so the frame's own drawn value is correct here, not a
mistake to override.`,...k.parameters?.docs?.description}}};const $e=["Default","HistoryTab","UnverifiedKCC20","WithPriceAndValue","KRC20","NativeKAS","FullInfo","FullInfoKasplexERC20"];export{f as Default,w as FullInfo,k as FullInfoKasplexERC20,g as HistoryTab,b as KRC20,v as NativeKAS,C as UnverifiedKCC20,y as WithPriceAndValue,$e as __namedExportsOrder,Oe as default};
