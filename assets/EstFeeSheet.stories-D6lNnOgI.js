import{j as e,V as m,s as c,t as l,p as d,b as f}from"./theme-3E0Q3OwC.js";import{r as g}from"./iframe-CiAE8p3U.js";import{E as n}from"./EstFeeSheet-DXA8yBj1.js";import{M as u}from"./index-D68Um0Eu.js";import{T as S}from"./index-CrU1b8Ao.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-o2xmTmbr.js";import"./Animated-C6ueNfQ2.js";import"./extends-CF3RwP-h.js";import"./index-BqYkYxIN.js";import"./index-nfsn9lH_.js";import"./index-WDh66eDM.js";import"./NativeEventEmitter-B0mHFpFv.js";import"./index-BcZSbV0I.js";import"./index-jR0qdBgt.js";import"./index-Nuk7D1Ca.js";import"./external-link-4hPqznnr.js";import"./createLucideIcon-BxdLEERx.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=g.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
