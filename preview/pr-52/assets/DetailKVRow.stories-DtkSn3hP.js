import{c as l,j as t,V as c,s as p,b as i}from"./theme-DglJhicK.js";import{D as d}from"./DetailKVRow-CDg5ACv5.js";import"./iframe-CU-Zjm2b.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Bz88AlIB.js";import"./external-link-D1rru5O1.js";import"./createLucideIcon-BD6Rl3dZ.js";import"./registry-BNXumi8c.js";import"./index-CXWo9_IW.js";import"./index-6GpvJ_gk.js";import"./extends-CF3RwP-h.js";const y={title:"Swap-bridge-activity/Components/DetailKVRow",component:d,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[n=>t.jsx(c,{style:u.decorator,children:t.jsx(n,{})})]},e={args:{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"}},r={args:{label:"Swap To",value:"+1,232.4456 NACHO",valueColor:l.success}},a={args:{label:"Swap From",value:"-1000 KAS",valueColor:l.danger}},o={args:{label:"TX Hash",value:"9dhd...432ds",onPressValue:()=>console.log("open explorer")}},s={args:{label:"From",value:"240,000,000.123456 KAS (Kaspa Mainnet)"}},u=p.create({decorator:{backgroundColor:i.bg100,padding:20}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Rate",
    value: "1 KAS ≈ 0.032799 NACHO"
  }
}`,...e.parameters?.docs?.source},description:{story:"Neutral label / value",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Swap To",
    value: "+1,232.4456 NACHO",
    valueColor: colors.success
  }
}`,...r.parameters?.docs?.source},description:{story:"Coloured value — green (positive)",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Swap From",
    value: "-1000 KAS",
    valueColor: colors.danger
  }
}`,...a.parameters?.docs?.source},description:{story:"Coloured value — red (negative)",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "TX Hash",
    value: "9dhd...432ds",
    onPressValue: () => console.log("open explorer")
  }
}`,...o.parameters?.docs?.source},description:{story:"Pressable — external link icon, whole row tappable",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "From",
    value: "240,000,000.123456 KAS (Kaspa Mainnet)"
  }
}`,...s.parameters?.docs?.source},description:{story:"Long value — wraps onto second line",...s.parameters?.docs?.description}}};const h=["Default","ValuePositive","ValueNegative","Pressable","LongValue"];export{e as Default,s as LongValue,o as Pressable,a as ValueNegative,r as ValuePositive,h as __namedExportsOrder,y as default};
