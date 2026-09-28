import{i as Z}from"./icon-DhbqID1i.js";import{j as e,V as d,t as y,s as _,c as w,a as l,e as L,f as ee,g as te,b as V,d as ne}from"./theme-D5QllvKu.js";import{r as h}from"./iframe-Dx-8gkZT.js";import{e as ae}from"./empty-activity-CFkvhrGl.js";import{A as se}from"./AssetImage-CSNquEmN.js";import{E as re}from"./EmptyState-BrrLSRqa.js";import{S as E}from"./SkeletonBlock-Bl3bfU81.js";import{S as oe}from"./Switch-BHrTmNA2.js";import{t as ie,C as le}from"./TokenSelectSheet-Bv726-H-.js";import{T as R}from"./index-BWFw-6wm.js";import{S as ce}from"./search-SF3SzajG.js";import{T as de}from"./index-CaMVidXf.js";import{F as q}from"./index-NvcPEbGE.js";import{K as he}from"./ActionSheet-BCvjK1FL.js";import"./preload-helper-Zf8nSx-t.js";import"./index-C8JCGSMM.js";import"./extends-CF3RwP-h.js";import"./index-C5KS9oMG.js";import"./index-BHCCxso1.js";import"./Animated-D4G_K_H6.js";import"./NativeEventEmitter-F6mcDHbX.js";import"./index-BR-Y5Sz3.js";import"./index-CxTZa0jx.js";import"./createLucideIcon-B9dIegYl.js";import"./registry-BNXumi8c.js";import"./index-DlNmS1KX.js";import"./index-BSJGRPGt.js";import"./index-BeanB3jE.js";const ue=4,pe=Array.from({length:ue},(n,r)=>`skeleton-${r}`),ge=()=>e.jsxs(d,{style:s.row,children:[e.jsxs(d,{style:s.rowLeft,children:[e.jsx(E,{width:40,height:40,borderRadius:L.full}),e.jsxs(d,{style:s.rowText,children:[e.jsx(E,{width:88,height:14,borderRadius:L.sm}),e.jsx(E,{width:64,height:12,borderRadius:L.sm})]})]}),e.jsx(E,{width:l.s12,height:l.s6,borderRadius:L.full})]}),m=({tokens:n,onToggle:r,subtitle:i="Show or hide tokens in your wallet view and total balance.",isLoading:a=!1,emptyHeading:c="No tokens yet",emptySubtext:u,noResultsHeading:p="No tokens found",noResultsSubtext:A="Try a different name",searchQuery:W="",onSearchChange:K,chainFilter:M=[],onChainFilterChange:b,chainFilters:P=[],footer:I})=>{const[B,U]=h.useState(""),[O,X]=h.useState([]),H=K!==void 0?W:B,f=h.useMemo(()=>b!==void 0?M??[]:O,[b,M,O]),G=h.useMemo(()=>{const t=H.trim().toLowerCase();let g=n;return t&&(g=g.filter(Q=>Q.name.toLowerCase().includes(t))),f.length>0&&(g=g.filter(Q=>Q.chainKeys?.some(J=>f.includes(J)))),g},[n,H,f]),$=h.useCallback(t=>{K?K(t):U(t)},[K]),Y=h.useCallback(t=>{const g=ie(f,t);b?b(g):X(g)},[f,b]),D=n.length===0,z=e.jsxs(e.Fragment,{children:[e.jsx(R,{allowFontScaling:!1,style:s.subtitle,children:i}),e.jsxs(d,{style:s.searchContainer,children:[e.jsx(ce,{size:16,color:y.t600}),e.jsx(de,{style:s.searchInput,value:H,onChangeText:$,placeholder:"Search Token",placeholderTextColor:y.t600,autoCorrect:!1,autoCapitalize:"none",clearButtonMode:"while-editing"})]}),P.length>0&&e.jsx(q,{horizontal:!0,showsHorizontalScrollIndicator:!1,data:P,keyExtractor:t=>String(t.key),contentContainerStyle:s.chipsRow,renderItem:({item:t})=>e.jsx(le,{label:t.label,logo:t.logo,isActive:f.includes(t.key),onPress:()=>Y(t.key)})})]});return a?e.jsxs(d,{style:s.container,children:[e.jsx(d,{style:s.headerSection,children:z}),e.jsx(d,{style:s.listContent,children:pe.map(t=>e.jsx(ge,{},t))})]}):e.jsxs(d,{style:s.container,children:[e.jsx(d,{style:s.headerSection,children:z}),e.jsx(q,{style:s.list,data:G,keyExtractor:t=>t.id,contentContainerStyle:s.listContent,keyboardShouldPersistTaps:"handled",onScrollBeginDrag:()=>he.dismiss(),ListFooterComponent:I?()=>e.jsx(e.Fragment,{children:I}):void 0,renderItem:({item:t})=>e.jsxs(d,{style:s.row,children:[e.jsxs(d,{style:s.rowLeft,children:[e.jsx(se,{variant:"chain",tokenImage:t.logo,chainImage:t.chainLogo,fallback:t.fallback,standard:t.standard,tokenImageSize:40,chainImageSize:16}),e.jsxs(d,{style:s.rowText,children:[e.jsxs(d,{style:s.nameRow,children:[e.jsx(R,{allowFontScaling:!1,style:s.rowName,numberOfLines:1,children:t.name}),t.networkLabel?e.jsx(R,{allowFontScaling:!1,style:s.networkLabel,numberOfLines:1,children:t.networkLabel}):null]}),e.jsx(R,{allowFontScaling:!1,style:s.rowSubLabel,numberOfLines:1,children:t.subLabel})]})]}),e.jsx(oe,{isEnabled:t.isLocked?!0:!t.isHidden,isDisabled:t.isLocked,onToggle:t.isLocked?void 0:()=>r(t.id),accessibilityLabel:[t.name,t.networkLabel,t.subLabel].filter(Boolean).join(" ")+(t.isLocked?", cannot be hidden":"")})]}),ListEmptyComponent:e.jsx(re,{image:ae,imageHeight:160,imageWidth:192,heading:D?c:p,subtext:D?u:A})})]})},s=_.create({container:{flex:1,backgroundColor:ne.backgroundScreen},list:{flex:1},listContent:{flexGrow:1,paddingHorizontal:l.s2,paddingBottom:l.s10},headerSection:{paddingHorizontal:l.s5,paddingTop:l.s4},subtitle:{...w.bodyNormalSM,color:y.t600,textAlign:"center",paddingBottom:l.s4},searchContainer:{flexDirection:"row",alignItems:"center",backgroundColor:V.bg50,borderWidth:te.bw1,borderColor:ee.b300,borderRadius:L.xl,height:l.s10,paddingHorizontal:l.s3,gap:l.s2},searchInput:{flex:1,color:y.t900,...w.bodyNormalMD,padding:0,margin:0},chipsRow:{flexDirection:"row",gap:l.s2,paddingVertical:l.s4},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:l.s3,paddingVertical:l.s3_5},rowLeft:{flexDirection:"row",alignItems:"center",gap:l.s3,flexShrink:1},rowText:{gap:l.s1,flexShrink:1},nameRow:{flexDirection:"row",alignItems:"center",gap:l.s2},rowName:{...w.bodyNormalMD,color:y.t700,flexShrink:0},networkLabel:{...w.bodyNormalXS,color:y.t400,flexShrink:1},rowSubLabel:{...w.bodyNormalXS,color:y.t500}});m.__docgenInfo={description:`Content-only screen — Figma (\`14590:112980\` → "expanded" → "default" →
\`14767:28684\`) draws this as a full page (back chevron + centred title +
subtitle, same "Top nav" pattern as TokenDetailPage/SendConfirmPage), NOT
a bottom sheet. Corrected from an earlier round that built it as an
\`ActionSheet\` — team-lead: "Figma (source of truth) draws a full page
with a back chevron, same as TokenDetailPage/SendConfirmPage."

The host route supplies its own native header (back button + title
"Manage Assets") and safe-area wrapper — same convention as every other
page in this repo (§1E boundary rule: no back button / title bar drawn
inside \`kastle-ui\`). This component starts from the subtitle.

Subtitle rendered as page body content, not left to the host header:
Figma's "Content" node nests the subtitle directly under the title in
the same block, but kastle-mobile's native header convention elsewhere
in this repo is title-only (no component here has ever passed a
subtitle to a host header, and there's no confirmed subtitle slot to
target) — so per the fallback instruction, it's built as this page's own
first content row instead of assumed into a header that may not support
it.

Entry point (\`14590:112980\` → "entry"): a small filter/settings icon
next to the Assets/NFT/Name/Text tab row on the Home Assets screen —
lives in kastle-mobile, out of scope here.

Row icon: \`AssetImage variant="chain"\` with \`standard\` — reuses D-071's
badge rule as-is (hidden for KRC20/Native, shown for KCC20/ERC20),
confirmed against this exact frame: the KRC20 row's logo has no badge
child at all, the KCC20/Kasplex-ERC20/Igra-ERC20 rows do.

Checked both frames under "expanded" for the filter/grouping chips
("< KCC20" etc.): neither \`14767:28684\` (this one) nor \`14590:113011\`
("future version (more function)") has them. The "future version" frame
instead adds a pin icon + drag-handle per row (reordering), explicitly
future scope, not built here.

\`tokens[]\` + \`onToggle(id)\` is fully controlled (no internal
hidden/shown state) — same pattern as \`TokenSelectSheet\`'s chain filter.

Settings page — loading not expected; skeleton is a fallback. Manage
Assets reads from data already in memory once the wallet's loaded, so
\`isLoading\` should rarely if ever be true in practice; it's handled
anyway (skeleton rows, same shape as \`ActivitySkeletonRow\`) rather than
left to show stale/empty content.

Search bar + chain filter chip row (Figma node \`4852:175931\`, search
directly under the subtitle) copy \`SendSelectTokenPage\`'s behaviour
exactly — same \`ChainFilterChip\`/\`ChainFilter\`/\`toggleChainFilter\`
pieces, same controlled-or-internal pattern for both search and filter,
same additive multi-select chip toggle, same "Search Token" placeholder
and input styling. Filtering is pure/local over the \`tokens\` prop
(\`name\` only, case-insensitive — not \`subLabel\`, which holds a balance
string here, not searchable text; see \`filteredTokens\`' own comment),
combined with the chain filter; it never touches \`isHidden\` — a
filtered-out token is just not rendered,
its hidden/shown state is unchanged. Locked rows go through the exact
same filter as any other row (no special-casing) — search/filter is
about which rows are visible right now, \`isLocked\` is about whether a
visible row's switch can be toggled; the two are independent.

Row layout is the Phantom pattern (Nicole's pick, round 11, 2026-09-28):
name, then a muted \`networkLabel\` on the SAME line right after it
(e.g. "NACHO  Kaspa-KRC20"); balance/\`subLabel\` stays alone on the
second line. \`networkLabel\` values are short EXCEPT KCC20/KRC20, which
need the \`-KCC20\`/\`-KRC20\` suffix since both live on Kaspa and would
otherwise collide (round 14, 2026-09-28). See
\`ManageAssetsToken.networkLabel\`'s own doc comment for the exact values.`,methods:[],displayName:"ManageAssetsPage",props:{tokens:{required:!0,tsType:{name:"Array",elements:[{name:"ManageAssetsToken"}],raw:"ManageAssetsToken[]"},description:""},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Fires with the tapped row's `id` — fully controlled, this component\ndoes not track hidden/shown state itself. The caller flips that\ntoken's `isHidden` and passes the updated `tokens` back down."},subtitle:{required:!1,tsType:{name:"string"},description:`Default matches Figma's exact copy. Rendered as page body content, not
inside a native header — see the component doc comment for why.`,defaultValue:{value:'"Show or hide tokens in your wallet view and total balance."',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emptyHeading:{required:!1,tsType:{name:"string"},description:"Empty-state heading/subtext — shown only when the `tokens` prop itself\nis empty (a genuinely empty wallet / load failure), never when search\nor the chain filter merely produced zero matches (see\n`noResultsHeading`/`noResultsSubtext` for that case). Same `EmptyState`\ncomponent + `empty-activity` illustration as `ActivityScreen`'s empty\nstate. In practice the three always-shown chain-native tokens\n(`isLocked`) mean an empty `tokens` list is a loading-failure/edge\ncase, not a normal state — exposed as overridable props anyway so the\nhost can supply different copy for that case.\n\n`emptySubtext` has no default (Nicole, round 9, 2026-09-28: \"REMOVE\nCAPTION只留NO TOKEN YET\") — heading-only by default, since `EmptyState`'s\nown `subtext` is now optional (renders nothing, not an empty line, when\nomitted). Pass it explicitly if a host wants a caption under the\nheading.",defaultValue:{value:'"No tokens yet"',computed:!1}},emptySubtext:{required:!1,tsType:{name:"string"},description:""},noResultsHeading:{required:!1,tsType:{name:"string"},description:"Shown instead of `emptyHeading`/`emptySubtext` when `tokens` is\nnon-empty but the active search/chain-filter combination matches\nnothing.",defaultValue:{value:'"No tokens found"',computed:!1}},noResultsSubtext:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Try a different name"',computed:!1}},searchQuery:{required:!1,tsType:{name:"string"},description:"Live, case-insensitive filter over `tokens` — same controlled/\nuncontrolled pattern as `SendSelectTokenPage`'s search: pass both\n`searchQuery` + `onSearchChange` to control it, or neither to let the\ncomponent manage its own state.",defaultValue:{value:'""',computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},chainFilter:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"ChainFilter[]"},description:"Additive multi-select network filter — same `ChainFilter`/\n`toggleChainFilter` semantics as `SendSelectTokenPage`/\n`TokenSelectSheet`: several chips can be active at once, empty = no\nfilter, no chip highlighted. Controlled/uncontrolled, same pattern as\n`searchQuery` above.",defaultValue:{value:"[]",computed:!1}},onChainFilterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: ChainFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"ChainFilter[]"},name:"keys"}],return:{name:"void"}}},description:""},chainFilters:{required:!1,tsType:{name:"Array",elements:[{name:"ChainFilterConfig"}],raw:"ChainFilterConfig[]"},description:"Filter chip row data — omit (or pass `[]`) to hide the chip row entirely, same as Send.",defaultValue:{value:"[]",computed:!1}},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Row shown at the bottom of the list — same slot pattern as
\`SendSelectTokenPage.footer\` (Figma shows a bottom button on this
frame too; not built here, host decides what it is and wires its
action).`}}};const o=Z,me=[{id:"kas-native",name:"KAS",subLabel:"28.3984 KAS",networkLabel:"Kaspa",logo:o,standard:"Native",isHidden:!1,isLocked:!0,chainKeys:["kaspa"]},{id:"kas-kasplex",name:"KAS",subLabel:"243 KAS",networkLabel:"Kasplex",logo:o,chainLogo:o,standard:"ERC20",isHidden:!1,isLocked:!0,chainKeys:["kasplex"]},{id:"ikas-igra",name:"iKAS",subLabel:"18.5 iKAS",networkLabel:"Igra",logo:o,chainLogo:o,standard:"ERC20",isHidden:!1,isLocked:!0,chainKeys:["igra"]}],N=[...me,{id:"nacho-kcc20",name:"NACHO",subLabel:"2,000 NACHO",networkLabel:"Kaspa-KCC20",logo:o,chainLogo:o,standard:"KCC20",isHidden:!0,chainKeys:["kaspa"]},{id:"nacho-krc20",name:"NACHO",subLabel:"750,000 NACHO",networkLabel:"Kaspa-KRC20",logo:o,chainLogo:o,standard:"KRC20",isHidden:!0,chainKeys:["krc20"]},{id:"nacho-kasplex",name:"NACHO",subLabel:"1,250 NACHO",networkLabel:"Kasplex",logo:o,chainLogo:o,standard:"ERC20",isHidden:!1,chainKeys:["kasplex"]},{id:"nacho-igra",name:"NACHO",subLabel:"3,800 NACHO",networkLabel:"Igra",logo:o,chainLogo:o,standard:"ERC20",isHidden:!1,chainKeys:["igra"]},{id:"kasper",name:"KASPER",subLabel:"1,000 KASPER",networkLabel:"Kasplex",logo:o,chainLogo:o,standard:"ERC20",isHidden:!1,chainKeys:["kasplex"]}],ye=[{key:"kaspa",label:"Kaspa",logo:o},{key:"krc20",label:"KRC20",logo:o},{key:"kasplex",label:"Kasplex",logo:o},{key:"igra",label:"Igra",logo:o}],Be={title:"Home/Screens/ManageAssetsPage",component:m,parameters:{layout:"fullscreen",backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{chainFilters:ye},decorators:[n=>e.jsx(d,{style:fe.screen,children:e.jsx(n,{})})]},j=n=>r=>n(i=>i.map(a=>a.id===r&&!a.isLocked?{...a,isHidden:!a.isHidden}:a));function k(n="",r=[]){const[i,a]=h.useState(n),[c,u]=h.useState(r);return{searchQuery:i,setSearchQuery:a,chainFilter:c,setChainFilter:u}}const C={render:n=>{const[r,i]=h.useState(N),{searchQuery:a,setSearchQuery:c,chainFilter:u,setChainFilter:p}=k();return e.jsx(m,{...n,tokens:r,onToggle:j(i),searchQuery:a,onSearchChange:c,chainFilter:u,onChainFilterChange:p})}},S={render:n=>{const[r,i]=h.useState(N.map(A=>({...A,isHidden:!A.isLocked}))),{searchQuery:a,setSearchQuery:c,chainFilter:u,setChainFilter:p}=k();return e.jsx(m,{...n,tokens:r,onToggle:j(i),searchQuery:a,onSearchChange:c,chainFilter:u,onChainFilterChange:p})}},x={render:n=>{const[r,i]=h.useState(N),{searchQuery:a,setSearchQuery:c,chainFilter:u,setChainFilter:p}=k("",["kasplex"]);return e.jsx(m,{...n,tokens:r,onToggle:j(i),searchQuery:a,onSearchChange:c,chainFilter:u,onChainFilterChange:p})}},T={render:n=>{const[r,i]=h.useState(N),{searchQuery:a,setSearchQuery:c,chainFilter:u,setChainFilter:p}=k("zzz-no-such-token");return e.jsx(m,{...n,tokens:r,onToggle:j(i),searchQuery:a,onSearchChange:c,chainFilter:u,onChainFilterChange:p})}},F={render:n=>{const{searchQuery:r,setSearchQuery:i,chainFilter:a,setChainFilter:c}=k();return e.jsx(m,{...n,tokens:[],onToggle:()=>{},isLoading:!1,searchQuery:r,onSearchChange:i,chainFilter:a,onChainFilterChange:c})}},v={render:n=>{const{searchQuery:r,setSearchQuery:i,chainFilter:a,setChainFilter:c}=k();return e.jsx(m,{...n,tokens:[],onToggle:()=>{},isLoading:!0,searchQuery:r,onSearchChange:i,chainFilter:a,onChainFilterChange:c})}},fe=_.create({screen:{flex:1,backgroundColor:V.bg0}});C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS);
    const {
      searchQuery,
      setSearchQuery,
      chainFilter,
      setChainFilter
    } = useManageAssetsControls();
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={toggleUnlocked(setTokens)} searchQuery={searchQuery} onSearchChange={setSearchQuery} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  }
}`,...C.parameters?.docs?.source},description:{story:`Mixed shown/hidden — matches Figma's own example exactly, plus the
three locked chain-native rows. Interactive: this component is fully
controlled, so the story owns the \`tokens\` state and flips \`isHidden\`
itself on \`onToggle\`. Search + chip row are ALSO explicitly controlled
from story state (see \`useManageAssetsControls\`'s doc comment) — typing
in the field and tapping chips actually filters the list. Also covers
same-name disambiguation across all 4 standards (D-064) — the 4 NACHO
rows here already span KCC20/KRC20/Kasplex-ERC20/Igra-ERC20, so the icon
corner badge (D-071, shown for KCC20/ERC20, hidden for KRC20/Native) is
visible doing its job without a separate story (round 10, 2026-09-28 —
\`SameNameAllStandards\` was near-duplicate data of this story and was
removed).`,...C.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS.map(t => ({
      ...t,
      isHidden: t.isLocked ? false : true
    })));
    const {
      searchQuery,
      setSearchQuery,
      chainFilter,
      setChainFilter
    } = useManageAssetsControls();
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={toggleUnlocked(setTokens)} searchQuery={searchQuery} onSearchChange={setSearchQuery} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  }
}`,...S.parameters?.docs?.source},description:{story:"Every token hidden except the three locked rows, which stay on — a\nlocked row's switch renders on regardless of `isHidden` (see\n`ManageAssetsPage.tsx`), so `isHidden: false` here is the data-accurate\nvalue, not just a visual coincidence. Search + chip row explicitly\ncontrolled (see `useManageAssetsControls`).",...S.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS);
    const {
      searchQuery,
      setSearchQuery,
      chainFilter,
      setChainFilter
    } = useManageAssetsControls("", ["kasplex"]);
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={toggleUnlocked(setTokens)} searchQuery={searchQuery} onSearchChange={setSearchQuery} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  }
}`,...x.parameters?.docs?.source},description:{story:`Chain filter pre-selected AND controlled from the story (React state
here instead of the component's internal state) — same pattern as
SendSelectTokenPage.stories.tsx's \`WithChainFilter\`. Genuinely
interactive: tapping a second chip adds to the selection (additive
multi-select), typing in the search field filters further on top of the
active chip(s).`,...x.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS);
    const {
      searchQuery,
      setSearchQuery,
      chainFilter,
      setChainFilter
    } = useManageAssetsControls("zzz-no-such-token");
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={toggleUnlocked(setTokens)} searchQuery={searchQuery} onSearchChange={setSearchQuery} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  }
}`,...T.parameters?.docs?.source},description:{story:'Search pre-filled with a query that matches nothing against a non-empty\n`tokens` list — exercises the "No tokens found" / "Try a different\nname" copy (`noResultsHeading`/`noResultsSubtext`), distinct from the\n`Empty` story\'s "No tokens yet" (which is for a genuinely empty `tokens`\nprop, not a search/filter with zero matches). Controlled search state\nso the field starts pre-filled but stays fully editable — type a real\ntoken name to see the list reappear, or tap a chip to combine filters.',...T.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      searchQuery,
      setSearchQuery,
      chainFilter,
      setChainFilter
    } = useManageAssetsControls();
    return <ManageAssetsPage {...args} tokens={[]} onToggle={() => {}} isLoading={false} searchQuery={searchQuery} onSearchChange={setSearchQuery} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  }
}`,...F.parameters?.docs?.source},description:{story:"Empty state — `EmptyState` component + the `empty-activity` illustration,\nsame as `ActivityScreen`'s empty state. Heading-only by default (\"No\ntokens yet\", round 9, 2026-09-28 — `emptySubtext` has no default; pass\none explicitly if a caption is wanted). Note: in real\nempty list is a loading-failure/edge case rather than a normal state —\nthis story exercises the visual regardless. Header (search + chips)\nstill renders on an empty `tokens` list, so it's explicitly controlled\nhere too, same as every other story.",...F.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      searchQuery,
      setSearchQuery,
      chainFilter,
      setChainFilter
    } = useManageAssetsControls();
    return <ManageAssetsPage {...args} tokens={[]} onToggle={() => {}} isLoading searchQuery={searchQuery} onSearchChange={setSearchQuery} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  }
}`,...v.parameters?.docs?.source},description:{story:"Loading state — settings page, loading isn't expected in practice, but\nrenders skeleton rows (not a text placeholder) as a fallback rather than\nshowing stale/empty content. `tokens` is ignored while `isLoading`.\nHeader (search + chips) stays visible during loading too (matches\nSendSelectTokenPage's own behaviour — it never hides search while\n`isLoading`), so it's explicitly controlled here as well.",...v.parameters?.docs?.description}}};const Ue=["Default","AllHidden","WithChainFilter","SearchNoResults","Empty","Loading"];export{S as AllHidden,C as Default,F as Empty,v as Loading,T as SearchNoResults,x as WithChainFilter,Ue as __namedExportsOrder,Be as default};
