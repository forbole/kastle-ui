import{i as m}from"./icon-DhbqID1i.js";import{j as e,V as l,s as K,a as p,b as g}from"./theme-q_7wiGV8.js";import{N as s}from"./NetworkTypeChip-vwN1hgVG.js";import"./iframe-CYc9jzjr.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DqUHJdwI.js";import"./extends-CF3RwP-h.js";import"./index-BRB09g9F.js";const a=m,k={title:"Components/NetworkTypeChip",component:s,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[C=>e.jsx(l,{style:i.decorator,children:e.jsx(C,{})})]},r={args:{label:"Kaspa-KCC20",icon:a,standard:"KCC20"}},o={args:{label:"Kaspa-KRC20",icon:a,standard:"KRC20"}},t={args:{label:"Kasplex-ERC20",icon:a,standard:"ERC20"}},n={args:{label:"Igra-ERC20",icon:a,standard:"ERC20"}},c={args:{label:"Kaspa",icon:a,standard:"Native"}},d={render:()=>e.jsxs(l,{style:i.column,children:[e.jsx(s,{label:"Kaspa-KCC20",icon:a,standard:"KCC20"}),e.jsx(s,{label:"Kaspa-KRC20",icon:a,standard:"KRC20"}),e.jsx(s,{label:"Kasplex-ERC20",icon:a,standard:"ERC20"}),e.jsx(s,{label:"Igra-ERC20",icon:a,standard:"ERC20"}),e.jsx(s,{label:"Kaspa",icon:a,standard:"Native"})]})},i=K.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:g.bg0,padding:p.s5,gap:p.s3},column:{gap:p.s3,alignItems:"flex-start"}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Kaspa-KCC20",
    icon: placeholderLogo,
    standard: "KCC20"
  }
}`,...r.parameters?.docs?.source},description:{story:"Kaspa-KCC20 — its own raw-hex colour (no exact theme.ts token match).",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Kaspa-KRC20",
    icon: placeholderLogo,
    standard: "KRC20"
  }
}`,...o.parameters?.docs?.source},description:{story:'Kaspa-KRC20 — token-bound "info" colour.',...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Kasplex-ERC20",
    icon: placeholderLogo,
    standard: "ERC20"
  }
}`,...t.parameters?.docs?.source},description:{story:"Kasplex-ERC20 — no live instance found yet; defaults to the same token-bound colour as KRC20.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Igra-ERC20",
    icon: placeholderLogo,
    standard: "ERC20"
  }
}`,...n.parameters?.docs?.source},description:{story:"Igra-ERC20 — same standard as Kasplex-ERC20, different network name only.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Kaspa",
    icon: placeholderLogo,
    standard: "Native"
  }
}`,...c.parameters?.docs?.source},description:{story:"Native KAS.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <View style={styles.column}>
      <NetworkTypeChip label="Kaspa-KCC20" icon={placeholderLogo} standard="KCC20" />
      <NetworkTypeChip label="Kaspa-KRC20" icon={placeholderLogo} standard="KRC20" />
      <NetworkTypeChip label="Kasplex-ERC20" icon={placeholderLogo} standard="ERC20" />
      <NetworkTypeChip label="Igra-ERC20" icon={placeholderLogo} standard="ERC20" />
      <NetworkTypeChip label="Kaspa" icon={placeholderLogo} standard="Native" />
    </View>
}`,...d.parameters?.docs?.source},description:{story:"All standards, side by side — shows the KCC20 vs everything-else colour split.",...d.parameters?.docs?.description}}};const N=["KCC20","KRC20","KasplexERC20","IgraERC20","NativeKaspa","AllVariants"];export{d as AllVariants,n as IgraERC20,r as KCC20,o as KRC20,t as KasplexERC20,c as NativeKaspa,N as __namedExportsOrder,k as default};
