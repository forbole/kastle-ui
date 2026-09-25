import{j as e,V as m,T as c,s as l,t as d,p as g,b as f}from"./theme-q_7wiGV8.js";import{r as u}from"./iframe-CYc9jzjr.js";import{E as n}from"./EstFeeSheet-CJksa08I.js";import{M as S}from"./index-5X-oGKJz.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-Vz47ZONN.js";import"./Animated-CkCh2B2v.js";import"./extends-CF3RwP-h.js";import"./index-Dfp5NBhs.js";import"./index-BRB09g9F.js";import"./index-DOpztuU1.js";import"./index-COW66coR.js";import"./NativeEventEmitter-xTeerVT7.js";import"./index-DqUHJdwI.js";import"./index-OMEVJfBv.js";import"./index-Dazu6cre.js";import"./external-link-3SkTRFGj.js";import"./createLucideIcon-ChR2uSvd.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=u.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(S,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(c,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=l.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:g.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:d.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
