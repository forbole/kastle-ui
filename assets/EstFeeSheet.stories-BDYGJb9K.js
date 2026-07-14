import{j as e,V as m,s as c,t as l,p as d,b as f}from"./theme-14-nfLmN.js";import{r as g}from"./iframe-CPbwvuc0.js";import{E as n}from"./EstFeeSheet-CpUQTKkM.js";import{M as u}from"./index-Dbqfb4uO.js";import{T as S}from"./index-CZoP2qMM.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-C0el_i-k.js";import"./Animated-Brkf8_Px.js";import"./extends-CF3RwP-h.js";import"./index-_8ZDvJ7S.js";import"./index-Cy12RGvu.js";import"./index-__-rqOxc.js";import"./NativeEventEmitter-C0DBSGgs.js";import"./index-B3NIqY4i.js";import"./index-69CWC28t.js";import"./index-DCUv0GKH.js";import"./external-link-DbexJ34Q.js";import"./createLucideIcon-BO3burch.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=g.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
