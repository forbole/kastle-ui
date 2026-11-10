import{j as t,V as m,s as p,t as d,p as f,b as g}from"./theme-BFTgOA-H.js";import{r as u}from"./iframe-C8ieX1Gy.js";import{E as c}from"./EstFeeSheet-D7KwY9QM.js";import{M as S}from"./index-Bg6tCG1S.js";import{T as h}from"./index-CE4ZAtnW.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CLi4Lhyy.js";import"./Animated-Ds3sGBYe.js";import"./extends-CF3RwP-h.js";import"./index-BwXV0EcN.js";import"./index-Dov8nqOm.js";import"./index-DE6cGQIb.js";import"./index-DhkFpudz.js";import"./NativeEventEmitter-CuF76sLu.js";import"./index-BeW1R1Jh.js";import"./index-BN2imlbQ.js";import"./index-DPX8gub5.js";import"./index-DTIEYTlP.js";import"./external-link-Ds1my0UB.js";import"./createLucideIcon-BNtQW39R.js";import"./registry-BNXumi8c.js";const b=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],n=e=>{const[l,i]=u.useState(!1);return t.jsxs(m,{style:o.container,children:[t.jsx(S,{style:o.trigger,onPress:()=>i(!0),children:t.jsx(h,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),t.jsx(c,{...e,isOpen:l,onClose:()=>i(!1)})]})},o=p.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:g.bg0},trigger:{backgroundColor:f.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:d.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/EstFeeSheet",component:c,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:b}},s={render:e=>t.jsx(n,{...e})},a={render:e=>t.jsx(n,{...e}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}},r={render:e=>t.jsx(n,{...e}),args:{subtitle:"The estimated total cost for this transaction",fees:[{label:"Network fees",fee:"~ 0.0001 KAS",feeUsd:"≈ $0.00 USD"},{label:"Kastle fees",fee:"1 KAS",feeUsd:"≈ $0.23 USD"},{label:"Creation fees",fee:"$11 KAS",description:"A one-time fee to create the vault on-chain. Withdraw and cancel are free."}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
"…transaction" subtitle, and a Creation-fee row with a muted note line.`,...r.parameters?.docs?.description}}};const M=["Default","SingleFee","VaultBreakdown"];export{s as Default,a as SingleFee,r as VaultBreakdown,M as __namedExportsOrder,I as default};
