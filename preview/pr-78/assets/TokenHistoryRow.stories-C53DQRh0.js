import{i as p}from"./icon-DhbqID1i.js";import{k as u}from"./kaspa-logo-DhW_40_v.js";import{j as e,V as g,s as L,a as b,b as T}from"./theme-EaGHEDeH.js";import{T as m}from"./TokenHistoryRow-uj5uu1-n.js";import"./iframe-DOgRovjb.js";import"./preload-helper-Zf8nSx-t.js";import"./AssetImage-DbRYOgrv.js";import"./index-DGvV-W3G.js";import"./extends-CF3RwP-h.js";import"./index-wUwFDFDT.js";import"./index-CTSQgxXF.js";import"./index-BTcF033-.js";const k=p,h=u,E={title:"Token/Components/TokenHistoryRow",component:m,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{logo:k,dateLabel:"12 Nov｜11:04",fiatLabel:"≈ $9,486.17 USD"},decorators:[n=>e.jsx(g,{style:y.decorator,children:e.jsx(n,{})})]},s={args:{title:"Received",amountLabel:"+1,000.7",direction:"in"}},i={args:{title:"Sent",amountLabel:"-1,000.88",direction:"out"}},c={args:{title:"Minted TTTT",amountLabel:"+1,000,000",direction:"in"}},d={args:{title:"Deployed TTTT",amountLabel:"-1,000",direction:"out"}},o={args:{chainLogo:h,standard:"KCC20"},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...n,title:"Received from kaspa:qr3x…k7x2",amountLabel:"+37,986 NACHO",direction:"in"}),e.jsx(m,{...n,title:"Sent to kaspa:qp9m…w4hc",amountLabel:"-1,000.88 NACHO",direction:"out"})]})},t={args:{title:"Received",amountLabel:"+32,115,033,564,12345678",direction:"in",dateLabel:"28 Sep｜23:59"}},r={args:{title:"Deployed Some Extremely Long Token Name",amountLabel:"-1,000",direction:"out",dateLabel:"28 Sep｜23:59"}},l={args:{title:"Received",amountLabel:"+1,000",direction:"in",logo:void 0,logoFallback:void 0}},a={args:{title:"Received",amountLabel:"+1,000",direction:"in",onPress:()=>console.log("row pressed")}},y=L.create({decorator:{flex:1,backgroundColor:T.bg0,padding:b.s5}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+1,000.7",
    direction: "in"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Sent",
    amountLabel: "-1,000.88",
    direction: "out"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Minted TTTT",
    amountLabel: "+1,000,000",
    direction: "in"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Deployed TTTT",
    amountLabel: "-1,000",
    direction: "out"
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    chainLogo: kaspaChainLogo,
    standard: "KCC20"
  },
  render: args => <>
      <TokenHistoryRow {...args} title="Received from kaspa:qr3x…k7x2" amountLabel="+37,986 NACHO" direction="in" />
      <TokenHistoryRow {...args} title="Sent to kaspa:qp9m…w4hc" amountLabel="-1,000.88 NACHO" direction="out" />
    </>
}`,...o.parameters?.docs?.source},description:{story:"Extension row: counterparty in the title, chain badge on the logo. Incoming (teal) and outgoing (red).",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+32,115,033,564,12345678",
    direction: "in",
    dateLabel: "28 Sep｜23:59"
  }
}`,...t.parameters?.docs?.source},description:{story:"The amount + ticker always show in full; the title (address) ellipsizes first to make room.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Deployed Some Extremely Long Token Name",
    amountLabel: "-1,000",
    direction: "out",
    dateLabel: "28 Sep｜23:59"
  }
}`,...r.parameters?.docs?.source},description:{story:"Title far too long for the row: it ellipsizes, the amount column keeps its room.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+1,000",
    direction: "in",
    logo: undefined,
    logoFallback: undefined
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+1,000",
    direction: "in",
    onPress: () => console.log("row pressed")
  }
}`,...a.parameters?.docs?.source},description:{story:"With `onPress` the whole row is pressable (opacity feedback).",...a.parameters?.docs?.description}}};const O=["Received","Sent","Minted","Deployed","WithChainBadge","LongAmount","LongTitle","NoLogo","Pressed"];export{d as Deployed,t as LongAmount,r as LongTitle,c as Minted,l as NoLogo,a as Pressed,s as Received,i as Sent,o as WithChainBadge,O as __namedExportsOrder,E as default};
