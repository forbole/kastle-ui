import{j as e,V as m,T as c,s as l,t as d,p as g,b as f}from"./theme-CiNQ9tnV.js";import{r as u}from"./iframe-BONNEfx2.js";import{E as n}from"./EstFeeSheet-DVokgn6F.js";import{M as S}from"./index-BKmf4mHU.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DEtOxdri.js";import"./Animated-DZpzYPxE.js";import"./extends-CF3RwP-h.js";import"./index-B_p013at.js";import"./index-QM5v7C0K.js";import"./index-BslmBNqt.js";import"./index-C1ljuv1j.js";import"./NativeEventEmitter-CYKJmPxg.js";import"./index-D-ZjIVYJ.js";import"./index-k6tIaml9.js";import"./index-C0GAc4go.js";import"./external-link-B73An4rW.js";import"./createLucideIcon-D_P4aotJ.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=u.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(S,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(c,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=l.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:g.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:d.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
