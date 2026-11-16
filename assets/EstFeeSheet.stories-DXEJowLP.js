import{j as t,V as m,s as p,t as d,p as f,b as g}from"./theme-DYzhAaDx.js";import{r as u}from"./iframe-D24O7SeT.js";import{E as c}from"./EstFeeSheet-BOvLocFz.js";import{M as S}from"./index-CIg8Mr94.js";import{T as h}from"./index-T6TIxRK5.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CtNGcJo5.js";import"./Animated-BI3sfg-r.js";import"./extends-CF3RwP-h.js";import"./index-ClzUkvUE.js";import"./index-vDJtv3wJ.js";import"./index-XP8vgcWJ.js";import"./index-Bsd0IIl7.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-0gcp5Jzp.js";import"./index-DLTIQwEC.js";import"./index-Bf9v-kSC.js";import"./index-B5vvSMTT.js";import"./index-Crk0kmJo.js";import"./external-link-BVbVif0f.js";import"./createLucideIcon-DLhpeO6J.js";import"./registry-BNXumi8c.js";const b=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],n=e=>{const[l,i]=u.useState(!1);return t.jsxs(m,{style:o.container,children:[t.jsx(S,{style:o.trigger,onPress:()=>i(!0),children:t.jsx(h,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),t.jsx(c,{...e,isOpen:l,onClose:()=>i(!1)})]})},o=p.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:g.bg0},trigger:{backgroundColor:f.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:d.t900,fontSize:16,fontWeight:"600"}}),M={title:"Components/EstFeeSheet",component:c,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:b}},s={render:e=>t.jsx(n,{...e})},a={render:e=>t.jsx(n,{...e}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}},r={render:e=>t.jsx(n,{...e}),args:{subtitle:"The estimated total cost for this transaction",fees:[{label:"Network fees",fee:"~ 0.0001 KAS",feeUsd:"≈ $0.00 USD"},{label:"Kastle fees",fee:"1 KAS",feeUsd:"≈ $0.23 USD"},{label:"Creation fees",fee:"$11 KAS",description:"A one-time fee to create the vault on-chain. Withdraw and cancel are free."}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    fees: [{
      networkName: "Kaspa",
      fee: "0.00023 KAS",
      feeUsd: "≈ $0.01 USD"
    }]
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    subtitle: "The estimated total cost for this transaction",
    fees: [{
      label: "Network fees",
      fee: "~ 0.0001 KAS",
      feeUsd: "≈ $0.00 USD"
    }, {
      label: "Kastle fees",
      fee: "1 KAS",
      feeUsd: "≈ $0.23 USD"
    }, {
      label: "Creation fees",
      fee: "$11 KAS",
      description: "A one-time fee to create the vault on-chain. Withdraw and cancel are free."
    }]
  }
}`,...r.parameters?.docs?.source},description:{story:`Vault creation breakdown (Figma 13350:255308) — free-form labels, the
"…transaction" subtitle, and a Creation-fee row with a muted note line.`,...r.parameters?.docs?.description}}};const R=["Default","SingleFee","VaultBreakdown"];export{s as Default,a as SingleFee,r as VaultBreakdown,R as __namedExportsOrder,M as default};
