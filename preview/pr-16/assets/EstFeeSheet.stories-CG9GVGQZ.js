import{j as e,V as m,S as c,t as l,p as d,b as g}from"./theme-CvEULk16.js";import{r as f}from"./iframe-h9lFp_Do.js";import{E as n}from"./EstFeeSheet-COEs2PcD.js";import{T as S,a as u}from"./index-CPcmjKTW.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BVJj9TTN.js";import"./Animated-CkHAskOG.js";import"./index-DVr_0ZAa.js";import"./index-BVddVD7P.js";import"./index-6HEEUYrb.js";import"./external-link-B4YZZWoN.js";import"./createLucideIcon-CHSluO0X.js";import"./xml-D5GVgsGz.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=f.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(S,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(u,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:g.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),T={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const A=["Default","SingleFee"];export{t as Default,s as SingleFee,A as __namedExportsOrder,T as default};
