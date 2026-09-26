import{j as t,V as m,T as p,s as d,t as f,p as g,b as u}from"./theme-CmBBLDAF.js";import{r as S}from"./iframe-D2lw4O5V.js";import{E as c}from"./EstFeeSheet-D1CD1dTv.js";import{M as h}from"./index-DUuqBE2O.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-RW9stg6R.js";import"./Animated-q1ZRg4zM.js";import"./extends-CF3RwP-h.js";import"./index-Cyy321jU.js";import"./index-Cno7ZKKB.js";import"./index-CTXIk2iS.js";import"./index-NhR-Mmwv.js";import"./NativeEventEmitter-BuY5xwFq.js";import"./index-D3jspRUy.js";import"./index-CAdSb3-P.js";import"./index-qQstPjFE.js";import"./external-link-DdKhSSZd.js";import"./createLucideIcon-CctySh2A.js";import"./registry-BNXumi8c.js";const b=[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"},{networkName:"Kasplex",fee:"0.00150 KAS",feeUsd:"≈ $0.05 USD"}],n=e=>{const[l,i]=S.useState(!1);return t.jsxs(m,{style:o.container,children:[t.jsx(h,{style:o.trigger,onPress:()=>i(!0),children:t.jsx(p,{style:o.triggerText,children:"Open Est. Fee Sheet"})}),t.jsx(c,{...e,isOpen:l,onClose:()=>i(!1)})]})},o=d.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0},trigger:{backgroundColor:g.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:f.t900,fontSize:16,fontWeight:"600"}}),z={title:"Components/EstFeeSheet",component:c,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},fees:b}},s={render:e=>t.jsx(n,{...e})},a={render:e=>t.jsx(n,{...e}),args:{fees:[{networkName:"Kaspa",fee:"0.00023 KAS",feeUsd:"≈ $0.01 USD"}]}},r={render:e=>t.jsx(n,{...e}),args:{subtitle:"The estimated total cost for this transaction",fees:[{label:"Network fees",fee:"~ 0.0001 KAS",feeUsd:"≈ $0.00 USD"},{label:"Kastle fees",fee:"1 KAS",feeUsd:"≈ $0.23 USD"},{label:"Creation fees",fee:"$11 KAS",description:"A one-time fee to create the vault on-chain. Withdraw and cancel are free."}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
"…transaction" subtitle, and a Creation-fee row with a muted note line.`,...r.parameters?.docs?.description}}};const B=["Default","SingleFee","VaultBreakdown"];export{s as Default,a as SingleFee,r as VaultBreakdown,B as __namedExportsOrder,z as default};
