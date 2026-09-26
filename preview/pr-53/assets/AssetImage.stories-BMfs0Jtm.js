import{i as v}from"./icon-DhbqID1i.js";import{j as a,V as r,T as S,c as y,s as K,t as w,b as x}from"./theme-Ct9G0APZ.js";import{A as m}from"./AssetImage-C7LksbbL.js";import"./iframe-pNpgG3AI.js";import"./preload-helper-Zf8nSx-t.js";import"./index-B4tdeOaA.js";import"./extends-CF3RwP-h.js";import"./index-D4W2EZUN.js";const e=v,V={title:"Components/AssetImage",component:m,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[k=>a.jsx(r,{style:n.decorator,children:a.jsx(k,{})})]},g={args:{variant:"single",image:e,size:40}},d={args:{variant:"single",image:void 0,fallback:e,size:40}},h={args:{variant:"chain",tokenImage:e,chainImage:e,tokenImageSize:40,chainImageSize:18}},p={args:{variant:"chain",tokenImage:e,chainImage:e,tokenImageSize:56,chainImageSize:22}},C={args:{variant:"chain",tokenImage:e,chainImage:e,tokenImageSize:28,chainImageSize:14}},o={args:{variant:"chain",tokenImage:e,chainImage:e}},s={args:{variant:"chain",tokenImage:e,chainImage:e,hideChainBadge:!0}},t={args:{variant:"chain",tokenImage:e,chainImage:e,standard:"KCC20"}},i={args:{variant:"chain",tokenImage:e,chainImage:e,standard:"KRC20"}},c={render:()=>a.jsxs(r,{style:n.row,children:[a.jsxs(r,{style:n.item,children:[a.jsx(m,{variant:"chain",tokenImage:e,chainImage:e,standard:"KCC20"}),a.jsx(S,{allowFontScaling:!1,style:[y.bodyNormalXS,n.label],children:"NACHO — KCC20"})]}),a.jsxs(r,{style:n.item,children:[a.jsx(m,{variant:"chain",tokenImage:e,chainImage:e,standard:"KRC20"}),a.jsx(S,{allowFontScaling:!1,style:[y.bodyNormalXS,n.label],children:"NACHO — KRC20"})]})]})},l={render:()=>a.jsxs(r,{style:n.row,children:[a.jsxs(r,{style:n.item,children:[a.jsx(m,{variant:"chain",tokenImage:e,chainImage:e,standard:"KCC20",tokenImageSize:24,chainImageSize:12}),a.jsx(S,{allowFontScaling:!1,style:[y.bodyNormalXS,n.label],children:"NACHO — KCC20"})]}),a.jsxs(r,{style:n.item,children:[a.jsx(m,{variant:"chain",tokenImage:e,chainImage:e,standard:"KRC20",tokenImageSize:24,chainImageSize:12}),a.jsx(S,{allowFontScaling:!1,style:[y.bodyNormalXS,n.label],children:"NACHO — KRC20"})]})]})},I={args:{variant:"dual",fromImage:e,toImage:e,chainImage:e,size:40}},u={args:{variant:"dual",fromImage:e,toImage:e,chainImage:e,size:64}},n=K.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:x.bg0,padding:32},row:{flexDirection:"row",alignItems:"center",gap:32},item:{alignItems:"center",gap:8},label:{color:w.t500}});g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "single",
    image: placeholderLogo,
    size: 40
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "single",
    image: undefined,
    fallback: placeholderLogo,
    size: 40
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "chain",
    tokenImage: placeholderLogo,
    chainImage: placeholderLogo,
    tokenImageSize: 40,
    chainImageSize: 18
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "chain",
    tokenImage: placeholderLogo,
    chainImage: placeholderLogo,
    tokenImageSize: 56,
    chainImageSize: 22
  }
}`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "chain",
    tokenImage: placeholderLogo,
    chainImage: placeholderLogo,
    tokenImageSize: 28,
    chainImageSize: 14
  }
}`,...C.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "chain",
    tokenImage: placeholderLogo,
    chainImage: placeholderLogo
  }
}`,...o.parameters?.docs?.source},description:{story:"No `standard` set — plain Layer2AssetImage default (badge shows whenever chainImage is provided).",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "chain",
    tokenImage: placeholderLogo,
    chainImage: placeholderLogo,
    hideChainBadge: true
  }
}`,...s.parameters?.docs?.source},description:{story:"`hideChainBadge` — no badge at all, not even the fallback circle (was Layer2AssetImage's opt-in).",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "chain",
    tokenImage: placeholderLogo,
    chainImage: placeholderLogo,
    standard: "KCC20"
  }
}`,...t.parameters?.docs?.source},description:{story:'KCC20 — chain corner badge shows (D-071, was TokenIcon standard="KCC20").',...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "chain",
    tokenImage: placeholderLogo,
    chainImage: placeholderLogo,
    standard: "KRC20"
  }
}`,...i.parameters?.docs?.source},description:{story:"KRC20 — chain corner badge never shows, even though chainImage is provided (D-071).",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <View style={styles.row}>
      <View style={styles.item}>
        <AssetImage variant="chain" tokenImage={placeholderLogo} chainImage={placeholderLogo} standard="KCC20" />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KCC20</Text>
      </View>
      <View style={styles.item}>
        <AssetImage variant="chain" tokenImage={placeholderLogo} chainImage={placeholderLogo} standard="KRC20" />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KRC20</Text>
      </View>
    </View>
}`,...c.parameters?.docs?.source},description:{story:`Same-name KCC20 vs KRC20 comparison, at the default 40px list-row size —
"NACHO" both times, \`standard\` is the only thing that changes. Mirrors
the Home list's real KCC20 example (Figma node \`14745:450124\`, row 3,
"NACHO" — verified, teal Kaspa corner badge); the KRC20 side is a
synthetic same-name comparison, not a citation of a specific KRC20 NACHO
row in Figma.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <View style={styles.row}>
      <View style={styles.item}>
        <AssetImage variant="chain" tokenImage={placeholderLogo} chainImage={placeholderLogo} standard="KCC20" tokenImageSize={24} chainImageSize={12} />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KCC20</Text>
      </View>
      <View style={styles.item}>
        <AssetImage variant="chain" tokenImage={placeholderLogo} chainImage={placeholderLogo} standard="KRC20" tokenImageSize={24} chainImageSize={12} />
        <Text allowFontScaling={false} style={[textStyles.bodyNormalXS, styles.label]}>NACHO — KRC20</Text>
      </View>
    </View>
}`,...l.parameters?.docs?.source},description:{story:`Same-name KCC20 vs KRC20, at the Send-amount screen's small size (Figma
node \`14586:32431\` — the icon next to the big amount number, ~24px).
Nicole's Figma note: "Make sure KCC token has a logo identifier here
while KRC doesn't" — checks the badge stays legible once shrunk down.`,...l.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dual",
    fromImage: placeholderLogo,
    toImage: placeholderLogo,
    chainImage: placeholderLogo,
    size: 40
  }
}`,...I.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dual",
    fromImage: placeholderLogo,
    toImage: placeholderLogo,
    chainImage: placeholderLogo,
    size: 64
  }
}`,...u.parameters?.docs?.source}}};const H=["Single","SingleNoImage","ChainDefault","ChainLarge","ChainSmall","ChainNoStandard","ChainHiddenBadge","ChainKCC20","ChainKRC20","ChainKCC20VsKRC20","ChainSendAmountSize","DualDefault","DualLarge"];export{h as ChainDefault,s as ChainHiddenBadge,t as ChainKCC20,c as ChainKCC20VsKRC20,i as ChainKRC20,p as ChainLarge,o as ChainNoStandard,l as ChainSendAmountSize,C as ChainSmall,I as DualDefault,u as DualLarge,g as Single,d as SingleNoImage,H as __namedExportsOrder,V as default};
