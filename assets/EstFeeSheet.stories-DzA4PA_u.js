import{j as e,V as m,s as c,t as l,p as d,b as f}from"./theme-BR8GLPde.js";import{r as g}from"./iframe-CPNBp_1P.js";import{E as n}from"./EstFeeSheet-CaWE0J56.js";import{M as u}from"./index-H6EmFJxO.js";import{T as S}from"./index-CH8DnRWL.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DQb5dqcg.js";import"./Animated-CjD7TViO.js";import"./extends-CF3RwP-h.js";import"./index-B-H9I0SY.js";import"./index-0ZUacXjV.js";import"./index-BAyr2R3P.js";import"./NativeEventEmitter-Cq6q1MXK.js";import"./index-BPIACJPb.js";import"./index-DBnyOp0A.js";import"./index-ByeVbdj2.js";import"./external-link-BYxoDTML.js";import"./createLucideIcon-CMBOrzhh.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=g.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
