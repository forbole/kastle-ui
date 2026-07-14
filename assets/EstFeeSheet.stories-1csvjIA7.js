import{j as e,V as m,s as c,t as l,p as d,b as f}from"./theme-Cge1cUOR.js";import{r as g}from"./iframe-crFY2r2g.js";import{E as n}from"./EstFeeSheet-BcFtt_g0.js";import{M as u}from"./index-Bx67-O33.js";import{T as S}from"./index-9py9rtBs.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DjSafreu.js";import"./Animated-BB8zbSBu.js";import"./extends-CF3RwP-h.js";import"./index-CVvaR4yy.js";import"./index-DM2uBhM5.js";import"./index-DnbNJEnl.js";import"./NativeEventEmitter-BeQff5Pr.js";import"./index-BT36D-vb.js";import"./index-GhWTLUDh.js";import"./index-B0hYYW8z.js";import"./external-link-BgsNCiRF.js";import"./createLucideIcon-Bkv_DprP.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=g.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
