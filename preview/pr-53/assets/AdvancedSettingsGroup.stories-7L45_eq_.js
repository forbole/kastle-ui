import{j as e,V as n,T as h,c as v,G as S,s as y,e as k,d as u,a as i}from"./theme-Ct9G0APZ.js";import{S as d}from"./SettingRow-d-_U9DJ9.js";import"./iframe-pNpgG3AI.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CHgTjhcT.js";import"./extends-CF3RwP-h.js";import"./chevron-right-Bx0PpXTp.js";import"./createLucideIcon-CH6WyxvH.js";import"./registry-BNXumi8c.js";import"./index-D4W2EZUN.js";const l=({networkValue:o,networkColor:p=S.s400,customRpcValue:m,onNetworkPress:g,onCustomRpcPress:w})=>e.jsxs(n,{style:a.group,children:[e.jsx(h,{allowFontScaling:!1,style:[v.bodySemiboldMD,a.sectionLabel],children:"Advanced Settings"}),e.jsxs(n,{style:a.card,children:[e.jsx(d,{label:"Network",value:o,valueColor:p,onPress:g}),e.jsx(d,{label:"Custom RPC",value:m,showTopDivider:!0,onPress:w})]})]}),a=y.create({group:{gap:i.s2},sectionLabel:{color:u.textSecondary,paddingVertical:i.s3},card:{backgroundColor:u.backgroundSurface,borderRadius:k["2xl"],overflow:"hidden"}});l.__docgenInfo={description:`Advanced Settings group — section label + card holding the Network and
Custom RPC rows. Matches the production kastle-mobile Settings group so it
drops into the existing Settings page cleanly.`,methods:[],displayName:"AdvancedSettingsGroup",props:{networkValue:{required:!0,tsType:{name:"string"},description:'Current network value, e.g. "Mainnet".'},networkColor:{required:!1,tsType:{name:"string"},description:"Network value colour. Defaults to mainnet teal.",defaultValue:{value:'"#14B8A6"',computed:!1}},customRpcValue:{required:!0,tsType:{name:"string"},description:'Custom RPC value — "Default" or the active node name.'},onNetworkPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCustomRpcPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const D={title:"Settings/Components/AdvancedSettingsGroup",component:l,decorators:[o=>e.jsx(n,{style:{width:"100%",padding:20,backgroundColor:u.backgroundScreen},children:e.jsx(o,{})})]},c={onNetworkPress:()=>{},onCustomRpcPress:()=>{}},t={args:{networkValue:"Mainnet",customRpcValue:"Default",...c}},r={args:{networkValue:"Mainnet",customRpcValue:"Home node",...c}},s={args:{networkValue:"Mainnet",customRpcValue:"A very long node's name that truncates",...c}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    networkValue: "Mainnet",
    customRpcValue: "Default",
    ...handlers
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    networkValue: "Mainnet",
    customRpcValue: "Home node",
    ...handlers
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    networkValue: "Mainnet",
    customRpcValue: "A very long node's name that truncates",
    ...handlers
  }
}`,...s.parameters?.docs?.source}}};const N=["Default","CustomSelected","LongCustomName"];export{r as CustomSelected,t as Default,s as LongCustomName,N as __namedExportsOrder,D as default};
