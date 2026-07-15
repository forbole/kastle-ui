import{j as e,V as m,s as c,t as l,p as d,b as f}from"./theme-C_cWzS-4.js";import{r as g}from"./iframe-DMIFxX_x.js";import{E as n}from"./EstFeeSheet-DwRSwZVX.js";import{M as u}from"./index-C55DuxNb.js";import{T as S}from"./index-BpPZ0Km4.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CKEJjanY.js";import"./Animated-CSX_C8Li.js";import"./extends-CF3RwP-h.js";import"./index-DIq3v3EI.js";import"./index-DngH4mLp.js";import"./index-BEsuBgQz.js";import"./NativeEventEmitter-DJKniD8T.js";import"./index-HYeq8y_O.js";import"./index-BFF45njc.js";import"./index-D3kUof-0.js";import"./external-link-UR1P07Lf.js";import"./createLucideIcon-BONm68I-.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=g.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
