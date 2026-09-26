import{i as l}from"./icon-DhbqID1i.js";import{j as n,V as s,s as p,a,b as c}from"./theme-CmBBLDAF.js";import{T as r}from"./TokenSelectSheet-B6KAyhZ3.js";import"./iframe-D2lw4O5V.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-RW9stg6R.js";import"./Animated-q1ZRg4zM.js";import"./extends-CF3RwP-h.js";import"./index-Cyy321jU.js";import"./index-Cno7ZKKB.js";import"./index-CTXIk2iS.js";import"./index-NhR-Mmwv.js";import"./NativeEventEmitter-BuY5xwFq.js";import"./index-D3jspRUy.js";import"./index-CAdSb3-P.js";import"./index-qQstPjFE.js";import"./index-DUuqBE2O.js";import"./AssetImage-DRQ3xSWj.js";import"./search-DIRFS3uq.js";import"./createLucideIcon-CctySh2A.js";import"./registry-BNXumi8c.js";import"./index-DpY_482i.js";const o=l,H={title:"Home/AssetList",component:r,parameters:{layout:"fullscreen",backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},docs:{description:{component:`Home dashboard's asset list — \`TokenItem variant="card"\`. Bordered
card, 12px padding, amount + USD line, shown as a mixed list grouped
by name and NOT sorted (Leo sync, 2026-09-25: keep grouping, e.g. all
"NACHO" rows together; no verified-first sort). Rendered in exactly
the order given, matching what TokenListRow's own MixedList story
demonstrated before it was merged into TokenItem (round 5).

No custom width decorator (round 6, 2026-09-26 — Nicole/reviewer: page
and card stories were locked to a fixed 393px frame, which broke the
iPad viewport in Storybook's own viewport addon). This View just fills
its parent with \`flex: 1\`, same pattern NameDetailPage.stories.tsx
uses — no decorator needed, \`layout: "fullscreen"\` + the viewport
addon already handle sizing.`}}},decorators:[t=>n.jsx(s,{style:d.screen,children:n.jsx(t,{})})]},e={render:()=>{const t=[{name:"NACHO",symbol:"$0.230",amount:"1000000",amountUsd:"≈ $3,466 USD",logo:o,chainLogo:o,standard:"KCC20"},{name:"NACHO",symbol:"$0.230",amount:"1233608.32787357",amountUsd:"≈ $51.419 USD",logo:o,chainLogo:o,standard:"KRC20"},{name:"SCAMCOIN",symbol:"$0.00000001",amount:"500000",amountUsd:"≈ $0.005 USD",logo:o},{name:"ZEAL",symbol:"$0.230",amount:"2000000.2314",amountUsd:"≈ $204.435 USD",logo:o,chainLogo:o,standard:"KCC20"},{name:"RUGPULL",symbol:"$0.000001",amount:"999999",amountUsd:"≈ $1.00 USD",logo:o}];return n.jsx(s,{style:d.list,children:t.map((i,m)=>n.jsx(r,{variant:"card",token:i},m))})}},d=p.create({screen:{flex:1,backgroundColor:c.bg0},list:{flex:1,paddingHorizontal:a.s5,paddingTop:a.s4,gap:a.s2}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
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
    return <View style={styles.list}>
        {tokens.map((t, i) => <TokenItem key={i} variant="card" token={t} />)}
      </View>;
  }
}`,...e.parameters?.docs?.source},description:{story:`Mixed shown list — KCC20 (badge), KRC20 (no badge, D-071), and a
no-standard token side by side.`,...e.parameters?.docs?.description}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,H as default};
