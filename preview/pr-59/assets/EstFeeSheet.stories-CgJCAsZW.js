import{j as e,V as m,s as c,t as l,p as d,b as f}from"./theme-Bd05M4rB.js";import{r as g}from"./iframe-Bex8TNAw.js";import{E as n}from"./EstFeeSheet-BF9hmWKk.js";import{M as u}from"./index-aIOH_YtL.js";import{T as S}from"./index-BPpj8co9.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BM59VBRL.js";import"./Animated-3W-6LII2.js";import"./extends-CF3RwP-h.js";import"./index-DL27yOwu.js";import"./index-C1KtGHAW.js";import"./index-DQGqaH-X.js";import"./index-DM7WyEBK.js";import"./NativeEventEmitter-CuNMg47i.js";import"./index-DWgjaQ3k.js";import"./index-vHSYMIj8.js";import"./index-CSUFvXYJ.js";import"./external-link-B59mpJY-.js";import"./createLucideIcon-rYFkDqfE.js";import"./registry-BNXumi8c.js";const x=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],i=r=>{const[p,a]=g.useState(!1);return e.jsxs(m,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(S,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),e.jsx(n,{...r,isOpen:p,onClose:()=>a(!1)})]})},o=c.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:f.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:l.t900,fontSize:16,fontWeight:"600"}}),M={title:"Components/EstFeeSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:x}},t={render:r=>e.jsx(i,{...r})},s={render:r=>e.jsx(i,{...r}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const R=["Default","SingleFee"];export{t as Default,s as SingleFee,R as __namedExportsOrder,M as default};
