import{j as e,V as m,s as c,t as l,p as d,b as f}from"./theme-BwhZGvfd.js";import{r as g}from"./iframe-CJF1aQW7.js";import{E as n}from"./EstFeeSheet-C1C7gvx6.js";import{M as u}from"./index-SUFA5VvO.js";import{T as S}from"./index-yYVY87gi.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-n5bt1i0W.js";import"./Animated-BPdszKbG.js";import"./extends-CF3RwP-h.js";import"./index-BXTOMBsb.js";import"./index-DWojNNaZ.js";import"./index-D-i5o7sY.js";import"./index-B2I0zkdp.js";import"./NativeEventEmitter-DwUCYPav.js";import"./index-COqq1QiL.js";import"./index-DfIeJ3UV.js";import"./index-DWR59Bm7.js";import"./external-link-vGHilaqf.js";import"./createLucideIcon-CLWO3Abk.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=g.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),M={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
