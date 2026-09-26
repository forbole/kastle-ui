import{i as _}from"./icon-DhbqID1i.js";import{j as n,V as k,T as $,c as A,t as C,s as j,a as r,e as G,f as U,g as Y,b as D,d as Q}from"./theme-CiNQ9tnV.js";import{r as o}from"./iframe-BONNEfx2.js";import{t as Z,T as J,C as X}from"./TokenSelectSheet-KFSpcuR4.js";import{S as ee}from"./search-B6x1xTpd.js";import{T as ae}from"./index-LXmpFb67.js";import{F as N}from"./index-B_p013at.js";import{K as ne}from"./ActionSheet-DEtOxdri.js";import"./preload-helper-Zf8nSx-t.js";import"./AssetImage-CJiF48Z2.js";import"./index-D-ZjIVYJ.js";import"./extends-CF3RwP-h.js";import"./index-QM5v7C0K.js";import"./Animated-DZpzYPxE.js";import"./NativeEventEmitter-CYKJmPxg.js";import"./index-BslmBNqt.js";import"./index-C1ljuv1j.js";import"./index-BKmf4mHU.js";import"./createLucideIcon-D_P4aotJ.js";import"./registry-BNXumi8c.js";import"./index-k6tIaml9.js";import"./index-C0GAc4go.js";const y=({tokens:s=[],searchQuery:b="",onSearchChange:l,chainFilter:T=[],onChainFilterChange:c,isLoading:w=!1,chainFilters:v=[],renderItem:x,onTokenPress:I,footer:K})=>{const[P,E]=o.useState(""),[R,q]=o.useState([]),S=l!==void 0?b:P,d=o.useMemo(()=>c!==void 0?T??[]:R,[c,T,R]),V=o.useMemo(()=>{const a=S.trim().toLowerCase();let t=s;return a&&(t=t.filter(f=>f.name.toLowerCase().includes(a)||(f.symbol?.toLowerCase().includes(a)??!1))),d.length>0&&(t=t.filter(f=>f.chainKeys?.some(W=>d.includes(W)))),t},[s,S,d]),H=o.useCallback(a=>{l?l(a):E(a)},[l]),O=o.useCallback(a=>{const t=Z(d,a);c?c(t):q(t)},[d,c]),F=o.useCallback(a=>{I?.(a)},[I]),L=o.useCallback((a,{onPress:t})=>n.jsx(J,{token:a,isDisabled:!1,onPress:t,flush:!0}),[]),z=o.useCallback(({item:a})=>n.jsx(n.Fragment,{children:(x??L)(a,{onPress:F})}),[x,L,F]),B=o.useCallback((a,t)=>`${a.symbol??a.name}-${t}`,[]),M=o.useCallback(()=>n.jsx(k,{style:i.emptyContainer,children:n.jsx($,{allowFontScaling:!1,style:[A.bodyNormalSM,i.emptyText],children:w?"Loading tokens…":"No tokens available"})}),[w]);return n.jsxs(k,{style:i.container,children:[n.jsxs(k,{style:i.searchContainer,children:[n.jsx(ee,{size:16,color:C.t600}),n.jsx(ae,{style:i.searchInput,value:S,onChangeText:H,placeholder:"Search Token",placeholderTextColor:C.t600,autoCorrect:!1,autoCapitalize:"none",clearButtonMode:"while-editing"})]}),v.length>0&&n.jsx(N,{horizontal:!0,showsHorizontalScrollIndicator:!1,data:v,keyExtractor:a=>String(a.key),contentContainerStyle:i.chipsRow,renderItem:({item:a})=>n.jsx(X,{label:a.label,logo:a.logo,isActive:d.includes(a.key),onPress:()=>O(a.key)})}),n.jsx(N,{data:V,renderItem:z,keyExtractor:B,ListEmptyComponent:M,ListFooterComponent:K?()=>n.jsx(n.Fragment,{children:K}):void 0,initialNumToRender:12,maxToRenderPerBatch:12,windowSize:5,removeClippedSubviews:!0,keyboardShouldPersistTaps:"handled",onScrollBeginDrag:()=>ne.dismiss(),style:i.list,contentContainerStyle:i.listContent})]})},i=j.create({container:{flex:1,backgroundColor:Q.backgroundScreen,paddingHorizontal:r.s5,paddingTop:r.s4},searchContainer:{flexDirection:"row",alignItems:"center",backgroundColor:D.bg50,borderWidth:Y.bw1,borderColor:U.b300,borderRadius:G.xl,height:r.s10,paddingHorizontal:r.s3,gap:r.s2},searchInput:{flex:1,color:C.t900,...A.bodyNormalMD,padding:0,margin:0},chipsRow:{flexDirection:"row",gap:r.s2,paddingVertical:r.s4},list:{flex:1},listContent:{paddingBottom:r.s2},emptyContainer:{paddingVertical:r.s8,alignItems:"center"},emptyText:{color:C.t500}});y.__docgenInfo={description:`Content-only screen — Send's token select (Figma node \`14741:396213\`).
The host route supplies the back button + "Select token" title (repo
boundary: nav/header live in kastle-mobile), same convention as
NameDetailPage / TokenDetailPage. Unlike Swap's TokenSelectSheet this is
a full page, not a bottom sheet — no ActionSheet wrapper, no handle, no
"Select Asset" heading (that text is the host's title bar in this
design, not in-page content).

Rows reuse the same \`TokenItem\` Swap select uses — the row markup in
Figma is structurally identical (logo + standard-driven corner badge +
name + optional secondary line + amount), rendered \`flush\` (round 3:
Figma's dropdown-item rows have zero internal horizontal padding here,
unlike the shared TokenItem default which also feeds the production
Swap/Bridge sheet — see TokenItem's \`flush\` prop doc comment). No
verified checkmark on this screen at all (round 3, 2026-09-26 — Leo
approved Nicole's proposal: verified only exists on Token Details now;
\`TokenInfo.isVerified\` was removed). Contract address is passed as
\`TokenInfo.symbol\` (already optional/conditional in TokenItem) — native
KAS has none, KRC20/KCC20 tokens do (Nicole's Figma note). No KCC20/
KRC20 text label (D-072).

Network filter chips (Kaspa/KRC20/Kasplex/Igra) actually filter the list
— pure, local, by \`TokenInfo.chainKeys\`. Toggle behaviour (round 5,
2026-09-26 — corrected to match production): additive multi-select via
the shared \`toggleChainFilter\` (same function \`TokenSelectSheet\`'s own
chips use), NOT the single-select "replace with just this one" this
screen had before — several chips can be active at once, empty = no
filter, no chip highlighted (was previously drawn as "all chips active"
by default, which doesn't match production's empty-array default
either). Works uncontrolled (internal state) or controlled
(\`chainFilter\`/\`onChainFilterChange\`), same as search.`,methods:[],displayName:"SendSelectTokenPage",props:{tokens:{required:!1,tsType:{name:"Array",elements:[{name:"TokenInfo"}],raw:"TokenInfo[]"},description:"",defaultValue:{value:"[]",computed:!1}},searchQuery:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},chainFilter:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"ChainFilter[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChainFilterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: ChainFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"ChainFilter[]"},name:"keys"}],return:{name:"void"}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chainFilters:{required:!1,tsType:{name:"Array",elements:[{name:"ChainFilterConfig"}],raw:"ChainFilterConfig[]"},description:"",defaultValue:{value:"[]",computed:!1}},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(token: TokenInfo, params: RenderItemParams) => React.ReactNode",signature:{arguments:[{type:{name:"TokenInfo"},name:"token"},{type:{name:"RenderItemParams"},name:"params"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom renderer for each token row — defaults to the shared TokenItem
(same one Swap select uses), so passing nothing reuses it as-is.`},onTokenPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(token: TokenInfo) => void",signature:{arguments:[{type:{name:"TokenInfo"},name:"token"}],return:{name:"void"}}},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Row shown at the bottom of the list (Figma's "Import Wallet Button",
node \`I14741:396213;14741:386568\`). Left as a slot, not built here —
its action wires to data (custom token import), out of this
component's pure-UI scope.`}}};const e=_,te=[{name:"Kaspa",amount:"2000.9473245",logo:e,standard:"Native",chainKeys:["kaspa"]},{name:"STICK",symbol:"vn384gs...c83gd",amount:"2235.454365",logo:e,chainLogo:e,standard:"KCC20",chainKeys:["kaspa"]},{name:"KASPY",symbol:"vn384gs...c83gd",amount:"1500000000",logo:e,chainLogo:e,standard:"KCC20",chainKeys:["kaspa"]},{name:"SZAR",symbol:"1663d3...3c5dek",amount:"3250.785432",logo:e,chainLogo:e,standard:"KCC20",chainKeys:["kaspa"]},{name:"NACHO",symbol:"1663d3...3c5dek",amount:"2500000000",logo:e,chainLogo:e,standard:"ERC20",chainKeys:["kasplex"]},{name:"GHOAD",symbol:"1663d3...3c5dek",amount:"5432.000000",logo:e,chainLogo:e,standard:"ERC20",chainKeys:["kasplex","igra"]},{name:"KASPER",amount:"6789.123456",logo:e,chainLogo:e,standard:"ERC20",chainKeys:["igra"]},{name:"TTTT",amount:"3800000000",logo:e,chainLogo:e,standard:"ERC20",chainKeys:["igra"]},{name:"KASPY",symbol:"1663d3...3c5dek",amount:"4100000000",logo:e,chainLogo:e,standard:"ERC20",chainKeys:["igra"]}],oe=[{key:"kaspa",label:"Kaspa",logo:e},{key:"krc20",label:"KRC20",logo:e},{key:"kasplex",label:"Kasplex",logo:e},{key:"igra",label:"Igra",logo:e}],Re={title:"Send/SendSelectTokenPage",component:y,parameters:{layout:"fullscreen",backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{tokens:te,chainFilters:oe},decorators:[s=>n.jsx(k,{style:se.screen,children:n.jsx(s,{})})]},m={render:s=>n.jsx(y,{...s})},p={render:s=>{const[b,l]=o.useState(["kasplex"]);return n.jsx(y,{...s,chainFilter:b,onChainFilterChange:l})}},h={render:s=>n.jsx(y,{...s,tokens:[{name:"NACHO",symbol:"1663d3...3c5dek",amount:"2500000000",logo:e,chainLogo:e,standard:"KCC20"},{name:"NACHO",symbol:"1663d3...3c5dek",amount:"750000",logo:e,chainLogo:e,standard:"KRC20"}]})},u={args:{tokens:[],isLoading:!1}},g={args:{tokens:[],isLoading:!0}},se=j.create({screen:{flex:1,backgroundColor:D.bg0}});m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <SendSelectTokenPage {...args} />
}`,...m.parameters?.docs?.source},description:{story:`Default — no chip active, full list shows (round 5, 2026-09-26:
corrected to match production TokenSelectSheet's own default, which is
an empty filter array with no chip highlighted — this used to draw
every chip as active by default, which doesn't match production).
Genuinely interactive in Storybook — SendSelectTokenPage is uncontrolled
here (no chainFilter/onChainFilterChange passed), so tapping a chip
actually filters the list via its internal state; no story-level
wiring needed. Tapping multiple chips now ADDS to the selection
(additive multi-select, shared \`toggleChainFilter\` logic), not a
single-select replace.`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [chainFilter, setChainFilter] = useState<ChainFilter[]>(["kasplex"]);
    return <SendSelectTokenPage {...args} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  }
}`,...p.parameters?.docs?.source},description:{story:`Chain filter pre-selected AND controlled from the story (React state
here instead of the component's internal state) — demonstrates the
controlled path still filters correctly. Multi-select (round 5,
2026-09-26): tapping a second chip here adds it rather than replacing
"kasplex".`,...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <SendSelectTokenPage {...args} tokens={[{
    name: "NACHO",
    symbol: "1663d3...3c5dek",
    amount: "2500000000",
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
    standard: "KCC20"
  },
  // KRC20 never shows the badge (D-071) — chainLogo passed anyway,
  // to prove the hide is driven by \`standard\`, not by missing data.
  {
    name: "NACHO",
    symbol: "1663d3...3c5dek",
    amount: "750000",
    logo: placeholderLogo,
    chainLogo: placeholderLogo,
    standard: "KRC20"
  }]} />
}`,...h.parameters?.docs?.source},description:{story:`Same-name disambiguation by standard (D-064) — no verified checkmark on
this screen at all (round 3, 2026-09-26 — Leo approved Nicole's
proposal: verified only exists on Token Details now; \`isVerified\` was
removed from TokenInfo). Only the icon's corner badge (D-071)
distinguishes KCC20 from KRC20.`,...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tokens: [],
    isLoading: false
  }
}`,...u.parameters?.docs?.source},description:{story:"Empty state.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tokens: [],
    isLoading: true
  }
}`,...g.parameters?.docs?.source},description:{story:"Loading state.",...g.parameters?.docs?.description}}};const Fe=["Default","WithChainFilter","SameNameByStandard","Empty","Loading"];export{m as Default,u as Empty,g as Loading,h as SameNameByStandard,p as WithChainFilter,Fe as __namedExportsOrder,Re as default};
