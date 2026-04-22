import{j as e,V as c,M as m,T as l,s as d,t as g,p as f,b as u}from"./theme-DyXfiJsI.js";import{r as S}from"./iframe-govM8vs5.js";import{E as n}from"./EstFeeSheet-C_fnke55.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-ESCa1hxp.js";import"./Animated-ffXQvZak.js";import"./index-EbOW5XAG.js";import"./index-C8Bj-2Q3.js";import"./index-htgL96ya.js";import"./external-link-BlX1vy3q.js";import"./createLucideIcon-DgKMnioV.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=S.useState(!1);return e.jsxs(c,{style:o.container,children:[e.jsx(m,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(l,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=d.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0},trigger:{backgroundColor:f.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:g.t900,fontSize:16,fontWeight:"600"}}),O={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},s={render:r=>e.jsx(i,{...r})},t={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    fees: [{
      networkName: "Kaspa",
      fee: "0.00023 KAS",
      feeUsd: "≈ $0.01 USD"
    }]
  }
}`,...t.parameters?.docs?.source}}};const w=["Default","SingleFee"];export{s as Default,t as SingleFee,w as __namedExportsOrder,O as default};
