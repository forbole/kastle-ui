import{j as e,V as m,M as c,T as l,s as d,t as g,p as f,b as u}from"./theme-BkPLgMkY.js";import{r as S}from"./iframe-B_t0ALk5.js";import{E as n}from"./EstFeeSheet-C1sNUdy4.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-KAJ68uJm.js";import"./Animated-B0sJ6mFA.js";import"./index-xedTFUtY.js";import"./NativeEventEmitter-DjhItbpj.js";import"./index-m-rS8RhU.js";import"./external-link-E5sKEu7r.js";import"./createLucideIcon-MX9oL9Ng.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=S.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(c,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(l,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=d.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0},trigger:{backgroundColor:f.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:g.t900,fontSize:16,fontWeight:"600"}}),w={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},s={render:r=>e.jsx(i,{...r})},t={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const T=["Default","SingleFee"];export{s as Default,t as SingleFee,T as __namedExportsOrder,w as default};
