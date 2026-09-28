import{i as b}from"./icon-DhbqID1i.js";import{j as n,V as o,s as w,a as s,b as y}from"./theme-wP9RlZRM.js";import{r}from"./iframe-CFm_rjMm.js";import{T as m}from"./TokenSelectSheet-Cv1oJLMi.js";import{A as f,E as T}from"./Entry-DuaEugXz.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-G2gfbgQu.js";import"./Animated-Bee7hbti.js";import"./extends-CF3RwP-h.js";import"./index-CDtCChKM.js";import"./index-m0Q4tz4Z.js";import"./index-IeyLb-Vx.js";import"./index-DZXGs7LO.js";import"./NativeEventEmitter-D1_kvAjs.js";import"./index-B-5JEVnn.js";import"./index-B-t7h6kb.js";import"./index-CmjvyzCy.js";import"./index-m66UXxvk.js";import"./index-BFkkwh5T.js";import"./index-B_Scdc6q.js";import"./AssetImage-D2qczYr1.js";import"./search-CyCwQ-0S.js";import"./createLucideIcon-qAR8mMf4.js";import"./registry-BNXumi8c.js";import"./index-wq19z8jz.js";import"./Segmented-DI73hDeO.js";import"./Menu-BUUwxrI8.js";import"./settings-2-CD8J6bze.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,e=b,S=[{label:"Assets",value:"assets"},{label:"NFT",value:"nft"},{label:"Name",value:"name"},{label:"Text",value:"text"}],Q={title:"Home/AssetList",component:m,parameters:{layout:"fullscreen",backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},docs:{description:{component:'Home dashboard\'s asset list — `TokenItem variant="card"`, shown below\nthe Assets/NFT/Name/Text tab row (`AssetSwitchingTab`) and the Manage\nAssets entry icon (`Entry`), matching how they sit together in Figma\n(`BdTDUVIHEeOjdlHSPij0xi`, frame `4854:180388`, "Token Container" —\n`AssetSwitchingTab`/`Entry` themselves are demoed alone in their own\nstories files; this demo composes the three as Nicole asked, 2026-09-28).\nBordered card, 12px padding, amount + USD line, shown as a mixed list\ngrouped by name and NOT sorted (Leo sync, 2026-09-25: keep grouping,\ne.g. all "NACHO" rows together; no verified-first sort). Rendered in\nexactly the order given, matching what TokenListRow\'s own MixedList\nstory demonstrated before it was merged into TokenItem (round 5).\n\nRow spacing (`styles.row`/`styles.container`): horizontal inset and\nthe 16px gap above the list both come from Figma\'s own "Token\nContainer" (`...;1854:59135`) — `px-[20px]` (= `spacing.s5`, same as\nthis list\'s own inset) and `gap-[16px]` (= `spacing.s4`) between its\n"Token Header" row and "Balance List". `AssetSwitchingTab` already\nhugs its own content (`alignSelf: "flex-start"`, see its own doc\ncomment), so `justifyContent: "space-between"` here is enough to push\n`Entry` to the right edge — matching Figma\'s `Token Header`, which is\n`items-center justify-between`.\n\nNo custom width decorator (round 6, 2026-09-26 — Nicole/reviewer: page\nand card stories were locked to a fixed 393px frame, which broke the\niPad viewport in Storybook\'s own viewport addon). This View just fills\nits parent with `flex: 1`, same pattern NameDetailPage.stories.tsx\nuses — no decorator needed, `layout: "fullscreen"` + the viewport\naddon already handle sizing.'}}},decorators:[i=>n.jsx(o,{style:a.screen,children:n.jsx(i,{})})]},t={render:()=>{const[i,d]=r.useState("assets"),[l,c]=r.useState(!1),p=[{label:"Manage assets",onPress:x()}],g=[{name:"NACHO",symbol:"$0.230",amount:"1000000",amountUsd:"≈ $3,466 USD",logo:e,chainLogo:e,standard:"KCC20"},{name:"NACHO",symbol:"$0.230",amount:"1233608.32787357",amountUsd:"≈ $51.419 USD",logo:e,chainLogo:e,standard:"KRC20"},{name:"SCAMCOIN",symbol:"$0.00000001",amount:"500000",amountUsd:"≈ $0.005 USD",logo:e},{name:"ZEAL",symbol:"$0.230",amount:"2000000.2314",amountUsd:"≈ $204.435 USD",logo:e,chainLogo:e,standard:"KCC20"},{name:"RUGPULL",symbol:"$0.000001",amount:"999999",amountUsd:"≈ $1.00 USD",logo:e}];return n.jsxs(o,{style:a.container,children:[n.jsxs(o,{style:a.row,children:[n.jsx(f,{tabs:S,activeTab:i,onTabChange:d}),n.jsx(T,{menuItems:p,isOpen:l,onOpenChange:c})]}),n.jsx(o,{style:a.list,children:g.map((h,u)=>n.jsx(m,{variant:"card",token:h},u))})]})}},a=w.create({screen:{flex:1,backgroundColor:y.bg0},container:{flex:1,paddingHorizontal:s.s5,paddingTop:s.s4},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:s.s4},list:{flex:1,gap:s.s2}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
