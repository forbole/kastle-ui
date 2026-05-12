import{j as e,V as m,s as c,t as l,p as d,b as g}from"./theme-D79dgY3-.js";import{r as f}from"./iframe-DYs_pdXm.js";import{E as n}from"./EstFeeSheet-BgCEqXlS.js";import{M as u,T as S}from"./index-B4MGkoRc.js";import"./preload-helper-Zf8nSx-t.js";import"./AppText-C1-HhVKN.js";import"./ActionSheet-5bBJeIy4.js";import"./Animated-CwPXqPnp.js";import"./index-DPfm6Bn_.js";import"./index-B6OhGTgo.js";import"./NativeEventEmitter-Bvm5kNGM.js";import"./index-C8JuXAID.js";import"./index-DvS_4ZNX.js";import"./external-link-DmCXV3_s.js";import"./createLucideIcon-TBZG2ece.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=f.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:g.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),$={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Default","SingleFee"];export{t as Default,s as SingleFee,V as __namedExportsOrder,$ as default};
