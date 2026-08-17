import{j as e,V as m,s as c,t as l,p as d,b as f}from"./theme-BNPDQF8F.js";import{r as g}from"./iframe-D9RBSdh4.js";import{E as n}from"./EstFeeSheet-BEEWNCcB.js";import{M as u}from"./index-C_zUMvuC.js";import{T as S}from"./index-CriPBHGm.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DeoTeKX0.js";import"./Animated-BBjBI4Tv.js";import"./extends-CF3RwP-h.js";import"./index-mk6JnJxS.js";import"./index-DOtiBfGZ.js";import"./index-Dz2juhDS.js";import"./index-Br1G8Emq.js";import"./NativeEventEmitter-CfGSBIBt.js";import"./index-bEwrHws4.js";import"./index-YYrLNHCN.js";import"./index-CLEYtEIh.js";import"./external-link-Bn3NJMtR.js";import"./createLucideIcon-a9b2k8Db.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=g.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),M={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    fees: [{
      networkName: "Kaspa",
      fee: "0.00023 KAS",
      feeUsd: "≈ $0.01 USD"
    }]
  }
}`,...s.parameters?.docs?.source}}};const R=["Default","SingleFee"];export{t as Default,s as SingleFee,R as __namedExportsOrder,M as default};
