import{j as e,V as m,s as c,t as l,p as d,b as f}from"./theme-B9mp4-_h.js";import{r as g}from"./iframe-hC_aJl6b.js";import{E as n}from"./EstFeeSheet-BTYB361m.js";import{M as u}from"./index-BW4yjOiT.js";import{T as S}from"./index-MsyEsATm.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BLVuwoTt.js";import"./Animated-BtkpUvaF.js";import"./extends-CF3RwP-h.js";import"./index-Dwg8D77b.js";import"./index-44RgKMCO.js";import"./index-C6Gbbr0i.js";import"./NativeEventEmitter-lG8wx1_v.js";import"./index-ZDeFGlxY.js";import"./index-Cw2B6y_B.js";import"./index-DdVIjhR_.js";import"./external-link-DAOoAHsN.js";import"./createLucideIcon-QqRFLs5k.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=g.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
