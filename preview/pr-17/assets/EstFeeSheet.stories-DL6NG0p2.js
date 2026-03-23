import{j as e,V as c,T as m,a as l,S as d,t as g,p as f,b as S}from"./theme-BTxkoYAB.js";import{r as u}from"./iframe-B1TJtXcK.js";import{E as n}from"./EstFeeSheet-BPi26_0R.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BEfAjuNq.js";import"./Animated-r7e1KByg.js";import"./index-DJ3QHFAL.js";import"./index-URQqy3EZ.js";import"./index-yMfukjg5.js";import"./external-link-HC-KFcdw.js";import"./createLucideIcon-CPfic1fo.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,o]=u.useState(!1);return e.jsxs(c,{style:a.container,children:[e.jsx(m,{style:a.trigger,onPress:()=>o(!0),children:e.jsx(l,{style:a.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>o(!1)})]})},a=d.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:S.bg0},trigger:{backgroundColor:f.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:g.t900,fontSize:16,fontWeight:"600"}}),O={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const w=["Default","SingleFee"];export{t as Default,s as SingleFee,w as __namedExportsOrder,O as default};
