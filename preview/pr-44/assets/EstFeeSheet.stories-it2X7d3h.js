import{j as e,V as m,M as c,T as l,s as d,t as g,p as f,b as u}from"./theme-Cxv8bKg2.js";import{r as S}from"./iframe-CBSxfi4N.js";import{E as n}from"./EstFeeSheet-QlRPUCKz.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-DR65vFiK.js";import"./Animated-PxKX7eCo.js";import"./index-DpWCt7LK.js";import"./index-CEkq6njo.js";import"./NativeEventEmitter-dS-nP2XS.js";import"./index-Dej9jj06.js";import"./external-link-t9DvjTKN.js";import"./createLucideIcon-DI9hba1U.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=S.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(c,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(l,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=d.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0},trigger:{backgroundColor:f.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:g.t900,fontSize:16,fontWeight:"600"}}),T={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},s={render:r=>e.jsx(i,{...r})},t={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["Default","SingleFee"];export{s as Default,t as SingleFee,A as __namedExportsOrder,T as default};
