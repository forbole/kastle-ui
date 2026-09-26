import{j as e,V as n,d as l,e as u}from"./theme-CiNQ9tnV.js";import{S as t}from"./SettingRow-LmSexA7q.js";import"./iframe-BONNEfx2.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BKmf4mHU.js";import"./extends-CF3RwP-h.js";import"./chevron-right-BdxizRfm.js";import"./createLucideIcon-D_P4aotJ.js";import"./registry-BNXumi8c.js";import"./index-QM5v7C0K.js";const R={title:"Components/SettingRow",component:t,decorators:[c=>e.jsx(n,{style:{width:"100%",padding:20,backgroundColor:l.backgroundScreen},children:e.jsx(n,{style:{backgroundColor:l.backgroundSurface,borderRadius:u["2xl"],overflow:"hidden"},children:e.jsx(c,{})})})]},r={args:{label:"Custom RPC",value:"Default",onPress:()=>{}}},o={args:{label:"Change PIN",onPress:()=>{}}},s={args:{label:"Custom RPC",value:"A very long node's name that truncates",onPress:()=>{}}},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Network",value:"Mainnet",onPress:()=>{}}),e.jsx(t,{label:"Custom RPC",value:"Default",showTopDivider:!0,onPress:()=>{}})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Custom RPC",
    value: "Default",
    onPress: () => {}
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Change PIN",
    onPress: () => {}
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Custom RPC",
    value: "A very long node's name that truncates",
    onPress: () => {}
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <SettingRow label="Network" value="Mainnet" onPress={() => {}} />
      <SettingRow label="Custom RPC" value="Default" showTopDivider onPress={() => {}} />
    </>
}`,...a.parameters?.docs?.source}}};const S=["Default","ChevronOnly","LongValue","Stacked"];export{o as ChevronOnly,r as Default,s as LongValue,a as Stacked,S as __namedExportsOrder,R as default};
