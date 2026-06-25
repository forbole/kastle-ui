import{h as l,j as t,V as c,s as p,b as i}from"./theme-C2FM7K18.js";import{D as d}from"./DetailKVRow-C5K4omzk.js";import"./iframe-C3dWk1Jw.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DFpyT7cP.js";import"./external-link-CqjSVgIe.js";import"./createLucideIcon-C3WFeuMh.js";import"./registry-BNXumi8c.js";import"./index-ZdXRCi0U.js";import"./extends-CF3RwP-h.js";const h={title:"Swap-bridge-activity/Components/DetailKVRow",component:d,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[n=>t.jsx(c,{style:u.decorator,children:t.jsx(n,{})})]},e={args:{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"}},r={args:{label:"Swap To",value:"+1,232.4456 NACHO",valueColor:l.success}},a={args:{label:"Swap From",value:"-1000 KAS",valueColor:l.danger}},o={args:{label:"TX Hash",value:"9dhd...432ds",onPressValue:()=>console.log("open explorer")}},s={args:{label:"From",value:"240,000,000.123456 KAS (Kaspa Mainnet)"}},u=p.create({decorator:{backgroundColor:i.bg100,padding:20}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Long value — wraps onto second line",...s.parameters?.docs?.description}}};const x=["Default","ValuePositive","ValueNegative","Pressable","LongValue"];export{e as Default,s as LongValue,o as Pressable,a as ValueNegative,r as ValuePositive,x as __namedExportsOrder,h as default};
