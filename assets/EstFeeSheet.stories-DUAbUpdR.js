import{j as e,V as m,s as c,t as l,p as d,b as g}from"./theme-jkNOcyB5.js";import{r as f}from"./iframe-CVvLFgvA.js";import{E as n}from"./EstFeeSheet-DpWJzJgW.js";import{M as u,T as S}from"./index-C7mRZNmC.js";import"./preload-helper-Zf8nSx-t.js";import"./AppText-Dw7kBQP_.js";import"./ActionSheet-CMUy-t-h.js";import"./Animated-Bt9tbQz1.js";import"./index-BuzebjbG.js";import"./index-BAHhl9Ns.js";import"./NativeEventEmitter-fewnv00c.js";import"./index-DYKIPNJL.js";import"./index-BWT3AHrL.js";import"./external-link-CWKzEDUj.js";import"./createLucideIcon-o9ptNlYr.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=f.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:g.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),$={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Default","SingleFee"];export{t as Default,s as SingleFee,V as __namedExportsOrder,$ as default};
