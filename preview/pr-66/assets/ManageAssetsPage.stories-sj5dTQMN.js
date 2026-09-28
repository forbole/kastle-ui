import{i as S}from"./icon-DhbqID1i.js";import{j as s,V as c,c as C,s as T,t as k,a as l,d as x,b as H}from"./theme-MCKW7A70.js";import{r as w}from"./iframe-CEQ2x2Sj.js";import{A}from"./AssetImage-iG6hOyka.js";import{S as v}from"./Switch-D34nYnHV.js";import{F as E}from"./index-B38bI2Ya.js";import{T as y}from"./index-BM7YNmEh.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DAFIQ0Qv.js";import"./extends-CF3RwP-h.js";import"./index-CVD2KRKh.js";import"./index-BaWkcwS2.js";import"./index-b4goAUR3.js";import"./index-DGZaVrSz.js";import"./EventEmitter-DNVZYx7c.js";const p=({tokens:o,onToggle:i,subtitle:d="Show or hide tokens in your wallet view and total balance.",isLoading:t=!1})=>s.jsx(c,{style:r.container,children:s.jsx(E,{style:r.list,data:o,keyExtractor:e=>e.id,contentContainerStyle:r.listContent,ListHeaderComponent:s.jsx(y,{allowFontScaling:!1,style:r.subtitle,children:d}),renderItem:({item:e})=>s.jsxs(c,{style:r.row,children:[s.jsxs(c,{style:r.rowLeft,children:[s.jsx(A,{variant:"chain",tokenImage:e.logo,chainImage:e.chainLogo,fallback:e.fallback,standard:e.standard,tokenImageSize:40,chainImageSize:16}),s.jsxs(c,{style:r.rowText,children:[s.jsx(y,{allowFontScaling:!1,style:r.rowName,numberOfLines:1,children:e.name}),s.jsx(y,{allowFontScaling:!1,style:r.rowSubLabel,numberOfLines:1,children:e.subLabel})]})]}),s.jsx(v,{isEnabled:!e.isHidden,onToggle:()=>i(e.id),accessibilityLabel:`${e.name} ${e.subLabel}`})]}),ListEmptyComponent:s.jsx(c,{style:r.emptyContainer,children:s.jsx(y,{allowFontScaling:!1,style:[C.bodyNormalSM,r.emptyText],children:t?"Loading tokens…":"No tokens available"})})})}),r=T.create({container:{flex:1,backgroundColor:x.backgroundScreen},list:{flex:1},listContent:{paddingHorizontal:l.s2,paddingTop:l.s4,paddingBottom:l.s10},subtitle:{...C.bodyNormalSM,color:k.t600,textAlign:"center",paddingBottom:l.s4},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:l.s3,paddingVertical:l.s3_5},rowLeft:{flexDirection:"row",alignItems:"center",gap:l.s3,flexShrink:1},rowText:{gap:l.s1,flexShrink:1},rowName:{...C.bodyNormalMD,color:k.t700},rowSubLabel:{...C.bodyNormalXS,color:k.t500},emptyContainer:{paddingVertical:l.s8,alignItems:"center"},emptyText:{color:k.t500}});p.__docgenInfo={description:`Content-only screen — Figma (\`14590:112980\` → "expanded" → "default" →
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
hidden/shown state) — same pattern as \`TokenSelectSheet\`'s chain filter.`,methods:[],displayName:"ManageAssetsPage",props:{tokens:{required:!0,tsType:{name:"Array",elements:[{name:"ManageAssetsToken"}],raw:"ManageAssetsToken[]"},description:""},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Fires with the tapped row's `id` — fully controlled, this component\ndoes not track hidden/shown state itself. The caller flips that\ntoken's `isHidden` and passes the updated `tokens` back down."},subtitle:{required:!1,tsType:{name:"string"},description:`Default matches Figma's exact copy. Rendered as page body content, not
inside a native header — see the component doc comment for why.`,defaultValue:{value:'"Show or hide tokens in your wallet view and total balance."',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const a=S,L=[{id:"kas",name:"KAS",subLabel:"Kaspa",logo:a,standard:"Native",isHidden:!1},{id:"nacho-kcc20",name:"NACHO",subLabel:"Kaspa-KCC20",logo:a,chainLogo:a,standard:"KCC20",isHidden:!0},{id:"nacho-krc20",name:"NACHO",subLabel:"Kaspa-KRC20",logo:a,chainLogo:a,standard:"KRC20",isHidden:!0},{id:"nacho-kasplex",name:"NACHO",subLabel:"Kasplex-ERC20",logo:a,chainLogo:a,standard:"ERC20",isHidden:!1},{id:"nacho-igra",name:"NACHO",subLabel:"Igra-ERC20",logo:a,chainLogo:a,standard:"ERC20",isHidden:!1}],X={title:"Token/ManageAssetsPage",component:p,parameters:{layout:"fullscreen",backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[o=>s.jsx(c,{style:K.screen,children:s.jsx(o,{})})]},g={render:o=>{const[i,d]=w.useState(L);return s.jsx(p,{...o,tokens:i,onToggle:t=>d(e=>e.map(n=>n.id===t?{...n,isHidden:!n.isHidden}:n))})}},m={render:o=>{const[i,d]=w.useState(L.map(t=>({...t,isHidden:!1})));return s.jsx(p,{...o,tokens:i,onToggle:t=>d(e=>e.map(n=>n.id===t?{...n,isHidden:!n.isHidden}:n))})}},u={render:o=>{const[i,d]=w.useState(L.map(t=>({...t,isHidden:!0})));return s.jsx(p,{...o,tokens:i,onToggle:t=>d(e=>e.map(n=>n.id===t?{...n,isHidden:!n.isHidden}:n))})}},h={render:o=>{const[i,d]=w.useState([{id:"1",name:"NACHO",subLabel:"Kaspa-KCC20",logo:a,chainLogo:a,standard:"KCC20",isHidden:!1},{id:"2",name:"NACHO",subLabel:"Kaspa-KRC20",logo:a,chainLogo:a,standard:"KRC20",isHidden:!1},{id:"3",name:"NACHO",subLabel:"Kasplex-ERC20",logo:a,chainLogo:a,standard:"ERC20",isHidden:!1},{id:"4",name:"NACHO",subLabel:"Igra-ERC20",logo:a,chainLogo:a,standard:"ERC20",isHidden:!1}]);return s.jsx(p,{...o,tokens:i,onToggle:t=>d(e=>e.map(n=>n.id===t?{...n,isHidden:!n.isHidden}:n))})}},f={args:{tokens:[],onToggle:()=>{},isLoading:!1}},b={args:{tokens:[],onToggle:()=>{},isLoading:!0}},K=T.create({screen:{flex:1,backgroundColor:H.bg0}});g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS);
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={id => setTokens(prev => prev.map(t => t.id === id ? {
      ...t,
      isHidden: !t.isHidden
    } : t))} />;
  }
}`,...g.parameters?.docs?.source},description:{story:"Mixed shown/hidden — matches Figma's own example exactly. Interactive:\nthis component is fully controlled, so the story owns the `tokens`\nstate and flips `isHidden` itself on `onToggle`.",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS.map(t => ({
      ...t,
      isHidden: false
    })));
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={id => setTokens(prev => prev.map(t => t.id === id ? {
      ...t,
      isHidden: !t.isHidden
    } : t))} />;
  }
}`,...m.parameters?.docs?.source},description:{story:"Every token shown (all switches on).",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tokens, setTokens] = useState(SAMPLE_TOKENS.map(t => ({
      ...t,
      isHidden: true
    })));
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={id => setTokens(prev => prev.map(t => t.id === id ? {
      ...t,
      isHidden: !t.isHidden
    } : t))} />;
  }
}`,...u.parameters?.docs?.source},description:{story:"Every token hidden (all switches off).",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tokens, setTokens] = useState<ManageAssetsToken[]>([{
      id: "1",
      name: "NACHO",
      subLabel: "Kaspa-KCC20",
      logo: placeholderLogo,
      chainLogo: placeholderLogo,
      standard: "KCC20",
      isHidden: false
    },
    // KRC20 never shows the badge (D-071) — chainLogo passed anyway, to
    // prove the hide is driven by \`standard\`, not by missing data.
    {
      id: "2",
      name: "NACHO",
      subLabel: "Kaspa-KRC20",
      logo: placeholderLogo,
      chainLogo: placeholderLogo,
      standard: "KRC20",
      isHidden: false
    }, {
      id: "3",
      name: "NACHO",
      subLabel: "Kasplex-ERC20",
      logo: placeholderLogo,
      chainLogo: placeholderLogo,
      standard: "ERC20",
      isHidden: false
    }, {
      id: "4",
      name: "NACHO",
      subLabel: "Igra-ERC20",
      logo: placeholderLogo,
      chainLogo: placeholderLogo,
      standard: "ERC20",
      isHidden: false
    }]);
    return <ManageAssetsPage {...args} tokens={tokens} onToggle={id => setTokens(prev => prev.map(t => t.id === id ? {
      ...t,
      isHidden: !t.isHidden
    } : t))} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`Same-name disambiguation across all 4 standards (D-064) — icon corner
badge is the only visual distinguisher for KCC20 vs the others (D-071),
sub-label carries the standard text for all 4.`,...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tokens: [],
    onToggle: () => {},
    isLoading: false
  }
}`,...f.parameters?.docs?.source},description:{story:"Empty state.",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tokens: [],
    onToggle: () => {},
    isLoading: true
  }
}`,...b.parameters?.docs?.source},description:{story:"Loading state.",...b.parameters?.docs?.description}}};const G=["Default","AllShown","AllHidden","SameNameAllStandards","Empty","Loading"];export{u as AllHidden,m as AllShown,g as Default,f as Empty,b as Loading,h as SameNameAllStandards,G as __namedExportsOrder,X as default};
