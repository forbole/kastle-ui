import{j as e,V as c,M as m,T as l,s as d,t as g,p as f,b as u}from"./theme-C-slt_aA.js";import{r as S}from"./iframe-B5cZQtS8.js";import{E as n}from"./EstFeeSheet-DSo2_zbH.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-Fy-dLI-s.js";import"./Animated-5Ka5bC_2.js";import"./index-DK9UCC6I.js";import"./index-BbU2rj3e.js";import"./index-D4uRZm3H.js";import"./external-link-B0a1YRms.js";import"./createLucideIcon-k_29ZnZB.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=S.useState(!1);return e.jsxs(c,{style:o.container,children:[e.jsx(m,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(l,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=d.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0},trigger:{backgroundColor:f.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:g.t900,fontSize:16,fontWeight:"600"}}),O={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},s={render:r=>e.jsx(i,{...r})},t={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    fees: [{
      networkName: "Kaspa",
      fee: "0.00023 KAS",
      feeUsd: "≈ $0.01 USD"
    }]
  }
}`,...t.parameters?.docs?.source}}};const w=["Default","SingleFee"];export{s as Default,t as SingleFee,w as __namedExportsOrder,O as default};
