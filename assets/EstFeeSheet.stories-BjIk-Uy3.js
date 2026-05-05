import{j as e,V as m,M as c,T as l,s as d,t as g,p as f,b as u}from"./theme-3sNqIkYC.js";import{r as S}from"./iframe-Co5fnNh-.js";import{E as n}from"./EstFeeSheet-Bi4hL34g.js";import"./preload-helper-Zf8nSx-t.js";import"./AppText-B7-C5DFI.js";import"./ActionSheet-B6ANZSAB.js";import"./Animated-DEbg-kwl.js";import"./index-DhtFF_yK.js";import"./index-C3UqOVCm.js";import"./NativeEventEmitter-BMBSx1eZ.js";import"./index-I-0beJAP.js";import"./index-Jrihayem.js";import"./external-link-Bbc0yHP6.js";import"./createLucideIcon-CmTdsVAH.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=S.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(c,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(l,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=d.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0},trigger:{backgroundColor:f.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:g.t900,fontSize:16,fontWeight:"600"}}),N={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const $=["Default","SingleFee"];export{t as Default,s as SingleFee,$ as __namedExportsOrder,N as default};
