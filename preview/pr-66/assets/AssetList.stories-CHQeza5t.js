import{i as b}from"./icon-DhbqID1i.js";import{j as n,V as s,s as w,a as o,b as y}from"./theme-D5QllvKu.js";import{r}from"./iframe-Dx-8gkZT.js";import{T as m}from"./TokenSelectSheet-Bv726-H-.js";import{A as f,E as T}from"./Entry-BYVs6CbQ.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BCvjK1FL.js";import"./Animated-D4G_K_H6.js";import"./extends-CF3RwP-h.js";import"./index-NvcPEbGE.js";import"./index-C5KS9oMG.js";import"./index-BR-Y5Sz3.js";import"./index-CxTZa0jx.js";import"./NativeEventEmitter-F6mcDHbX.js";import"./index-C8JCGSMM.js";import"./index-BWFw-6wm.js";import"./index-DlNmS1KX.js";import"./index-BSJGRPGt.js";import"./index-BeanB3jE.js";import"./index-BHCCxso1.js";import"./AssetImage-CSNquEmN.js";import"./search-SF3SzajG.js";import"./createLucideIcon-B9dIegYl.js";import"./registry-BNXumi8c.js";import"./index-CaMVidXf.js";import"./Segmented-BhjIG1Dp.js";import"./Menu-DCKWIXi3.js";import"./settings-2-BQJozSQw.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,e=b,C=[{label:"Assets",value:"assets"},{label:"NFT",value:"nft"},{label:"Name",value:"name"},{label:"Text",value:"text"}],Q={title:"Home/Components/AssetList",component:m,parameters:{layout:"fullscreen",backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},docs:{description:{component:'Home dashboard\'s asset list — `TokenItem variant="card"`, shown below\nthe Assets/NFT/Name/Text tab row (`AssetSwitchingTab`) and the Manage\nAssets entry icon (`Entry`), matching how they sit together in Figma\n(`BdTDUVIHEeOjdlHSPij0xi`, frame `4854:180388`, "Token Container" —\n`AssetSwitchingTab`/`Entry` themselves are demoed alone in their own\nstories files; this demo composes the three as Nicole asked, 2026-09-28).\nBordered card, 12px padding, amount + USD line, shown as a mixed list\ngrouped by name and NOT sorted (Leo sync, 2026-09-25: keep grouping,\ne.g. all "NACHO" rows together; no verified-first sort). Rendered in\nexactly the order given, matching what TokenListRow\'s own MixedList\nstory demonstrated before it was merged into TokenItem (round 5).\n\nRow spacing (`styles.row`/`styles.container`): horizontal inset and\nthe 16px gap above the list both come from Figma\'s own "Token\nContainer" (`...;1854:59135`) — `px-[20px]` (= `spacing.s5`, same as\nthis list\'s own inset) and `gap-[16px]` (= `spacing.s4`) between its\n"Token Header" row and "Balance List". `AssetSwitchingTab` already\nhugs its own content (`alignSelf: "flex-start"`, see its own doc\ncomment), so `justifyContent: "space-between"` here is enough to push\n`Entry` to the right edge — matching Figma\'s `Token Header`, which is\n`items-center justify-between`.\n\nNo custom width decorator (round 6, 2026-09-26 — Nicole/reviewer: page\nand card stories were locked to a fixed 393px frame, which broke the\niPad viewport in Storybook\'s own viewport addon). This View just fills\nits parent with `flex: 1`, same pattern NameDetailPage.stories.tsx\nuses — no decorator needed, `layout: "fullscreen"` + the viewport\naddon already handle sizing.'}}},decorators:[i=>n.jsx(s,{style:a.screen,children:n.jsx(i,{})})]},t={render:()=>{const[i,d]=r.useState("assets"),[l,c]=r.useState(!1),p=[{label:"Manage assets",onPress:x()}],g=[{name:"NACHO",symbol:"$0.230",amount:"1000000",amountUsd:"≈ $3,466 USD",logo:e,chainLogo:e,standard:"KCC20"},{name:"NACHO",symbol:"$0.230",amount:"1233608.32787357",amountUsd:"≈ $51.419 USD",logo:e,chainLogo:e,standard:"KRC20"},{name:"SCAMCOIN",symbol:"$0.00000001",amount:"500000",amountUsd:"≈ $0.005 USD",logo:e},{name:"ZEAL",symbol:"$0.230",amount:"2000000.2314",amountUsd:"≈ $204.435 USD",logo:e,chainLogo:e,standard:"KCC20"},{name:"RUGPULL",symbol:"$0.000001",amount:"999999",amountUsd:"≈ $1.00 USD",logo:e}];return n.jsxs(s,{style:a.container,children:[n.jsxs(s,{style:a.row,children:[n.jsx(f,{tabs:C,activeTab:i,onTabChange:d}),n.jsx(T,{menuItems:p,isOpen:l,onOpenChange:c})]}),n.jsx(s,{style:a.list,children:g.map((h,u)=>n.jsx(m,{variant:"card",token:h},u))})]})}},a=w.create({screen:{flex:1,backgroundColor:y.bg0},container:{flex:1,paddingHorizontal:o.s5,paddingTop:o.s4},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:o.s4},list:{flex:1,gap:o.s2}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState("assets");
    const [isEntryOpen, setIsEntryOpen] = useState(false);
    const menuItems: MenuItem[] = [{
      label: "Manage assets",
      onPress: fn()
    }];
    const tokens: TokenInfo[] = [{
      name: "NACHO",
      symbol: "$0.230",
      amount: "1000000",
      amountUsd: "≈ $3,466 USD",
      logo: placeholderLogo,
      chainLogo: placeholderLogo,
      standard: "KCC20"
    },
    // KRC20 never shows the badge (D-071) — chainLogo passed anyway to
    // prove the hide is driven by \`standard\`, not by missing data.
    {
      name: "NACHO",
      symbol: "$0.230",
      amount: "1233608.32787357",
      amountUsd: "≈ $51.419 USD",
      logo: placeholderLogo,
      chainLogo: placeholderLogo,
      standard: "KRC20"
    }, {
      name: "SCAMCOIN",
      symbol: "$0.00000001",
      amount: "500000",
      amountUsd: "≈ $0.005 USD",
      logo: placeholderLogo
    }, {
      name: "ZEAL",
      symbol: "$0.230",
      amount: "2000000.2314",
      amountUsd: "≈ $204.435 USD",
      logo: placeholderLogo,
      chainLogo: placeholderLogo,
      standard: "KCC20"
    }, {
      name: "RUGPULL",
      symbol: "$0.000001",
      amount: "999999",
      amountUsd: "≈ $1.00 USD",
      logo: placeholderLogo
    }];
    return <View style={styles.container}>
        <View style={styles.row}>
          <AssetSwitchingTab tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
          <Entry menuItems={menuItems} isOpen={isEntryOpen} onOpenChange={setIsEntryOpen} />
        </View>
        <View style={styles.list}>
          {tokens.map((t, i) => <TokenItem key={i} variant="card" token={t} />)}
        </View>
      </View>;
  }
}`,...t.parameters?.docs?.source},description:{story:`Mixed shown list — KCC20 (badge), KRC20 (no badge, D-071), and a
no-standard token side by side. Above it: the tab row (tapping a tab
switches the active pill via real story state) and the Manage Assets
entry icon (tapping it opens the menu anchored under the icon; tapping
"Manage assets" fires \`onPress\`, logged to the Actions panel via
\`fn()\`, and closes the menu — same interaction
\`AssetSwitchingTab.stories.tsx\`'s own Default story demonstrates
(Entry's own standalone story was removed, 2026-09-28, Nicole: "唔要了,
要 AssetSwitchingTab 就夠" — Entry itself is unchanged, still reused
here and in \`AssetSwitchingTab.stories.tsx\`).`,...t.parameters?.docs?.description}}};const W=["Default"];export{t as Default,W as __namedExportsOrder,Q as default};
