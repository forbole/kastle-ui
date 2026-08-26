import{j as e,V as n,e as h,r as v,s as S,d as y,c as u,a as c}from"./theme-7NxzQjFP.js";import{S as d}from"./SettingRow-BjIH8lt2.js";import{T as f}from"./index-dwtQSYn0.js";import"./iframe-C4vmSYnN.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DLv7QJWE.js";import"./extends-CF3RwP-h.js";import"./chevron-right-CnJOJiHF.js";import"./createLucideIcon-BZY-joqi.js";import"./registry-BNXumi8c.js";import"./index-C1BvqI76.js";const l=({networkValue:o,networkColor:m=v.s400,customRpcValue:p,onNetworkPress:g,onCustomRpcPress:w})=>e.jsxs(n,{style:a.group,children:[e.jsx(f,{allowFontScaling:!1,style:[h.bodySemiboldMD,a.sectionLabel],children:"Advanced Settings"}),e.jsxs(n,{style:a.card,children:[e.jsx(d,{label:"Network",value:o,valueColor:m,onPress:g}),e.jsx(d,{label:"Custom RPC",value:p,showTopDivider:!0,onPress:w})]})]}),a=S.create({group:{gap:c.s2},sectionLabel:{color:u.textSecondary,paddingVertical:c.s3},card:{backgroundColor:u.backgroundSurface,borderRadius:y["2xl"],overflow:"hidden"}});l.__docgenInfo={description:`Advanced Settings group — section label + card holding the Network and
Custom RPC rows. Matches the production kastle-mobile Settings group so it
drops into the existing Settings page cleanly.`,methods:[],displayName:"AdvancedSettingsGroup",props:{networkValue:{required:!0,tsType:{name:"string"},description:'Current network value, e.g. "Mainnet".'},networkColor:{required:!1,tsType:{name:"string"},description:"Network value colour. Defaults to mainnet teal.",defaultValue:{value:'"#14B8A6"',computed:!1}},customRpcValue:{required:!0,tsType:{name:"string"},description:'Custom RPC value — "Default" or the active node name.'},onNetworkPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCustomRpcPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const N={title:"Settings/Components/AdvancedSettingsGroup",component:l,decorators:[o=>e.jsx(n,{style:{width:"100%",padding:20,backgroundColor:u.backgroundScreen},children:e.jsx(o,{})})]},i={onNetworkPress:()=>{},onCustomRpcPress:()=>{}},t={args:{networkValue:"Mainnet",customRpcValue:"Default",...i}},r={args:{networkValue:"Mainnet",customRpcValue:"Home node",...i}},s={args:{networkValue:"Mainnet",customRpcValue:"A very long node's name that truncates",...i}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Default","CustomSelected","LongCustomName"];export{r as CustomSelected,t as Default,s as LongCustomName,T as __namedExportsOrder,N as default};
