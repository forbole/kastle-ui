import{j as e,V as m,s as c,t as l,p as d,b as f}from"./theme-ryBZVJ3B.js";import{r as g}from"./iframe-BZw4JuSd.js";import{E as n}from"./EstFeeSheet-CZjH04iA.js";import{M as u}from"./index-CNv0kb6Y.js";import{T as S}from"./index-008s76Nf.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-C6PnLcjt.js";import"./Animated-hNOnZeDo.js";import"./extends-CF3RwP-h.js";import"./index-CcXMfRBg.js";import"./index-BfnTma-C.js";import"./index-7wvGmLUx.js";import"./NativeEventEmitter-DrJ2mfDZ.js";import"./index-C9zZRynE.js";import"./index-B91G9c4N.js";import"./index-CezPzD5f.js";import"./external-link-7bWTlshy.js";import"./createLucideIcon-BdiV1HJI.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=g.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const M=["Default","SingleFee"];export{t as Default,s as SingleFee,M as __namedExportsOrder,I as default};
