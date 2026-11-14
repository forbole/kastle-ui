import{j as t,V as p,s as m,t as d,p as h,b as g}from"./theme-EaGHEDeH.js";import{r as u}from"./iframe-DOgRovjb.js";import{I as c}from"./InfoSheet-B-1UbyN-.js";import{M as y}from"./index-CTSQgxXF.js";import{T as w}from"./index-BTcF033-.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CjoVVmAX.js";import"./Animated-DNjKSU2M.js";import"./extends-CF3RwP-h.js";import"./index-BZ1Nhbfz.js";import"./index-wUwFDFDT.js";import"./index-BEdIy_gZ.js";import"./index-DdlO-cV0.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-geb6Dh_a.js";import"./index-DGvV-W3G.js";import"./index-CmBEmytU.js";import"./index-_WVdSqQl.js";import"./index-IaR0DOK6.js";const n=e=>{const[l,i]=u.useState(!1);return t.jsxs(p,{style:s.container,children:[t.jsx(y,{style:s.trigger,onPress:()=>i(!0),children:t.jsx(w,{style:s.triggerText,children:"Open Info Sheet"})}),t.jsx(c,{...e,isOpen:l,onClose:()=>i(!1)})]})},s=m.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:g.bg0},trigger:{backgroundColor:h.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:d.t900,fontSize:16,fontWeight:"600"}}),K={title:"Components/InfoSheet",component:c,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},title:"Change to your balance",description:`Just like paying with cash, any extra amount from this transaction will be sent back to your wallet.

This happens when your wallet spends more than the exact amount needed.`},argTypes:{onClose:{action:"close"}}},o={render:e=>t.jsx(n,{...e})},a={render:e=>t.jsx(n,{...e}),args:{title:"Est. Fee",description:"The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions."}},r={render:e=>t.jsx(n,{...e}),args:{title:"Withdraw now?",description:"Funds will go to your recovery address right away. Only you can access it.",actions:[{label:"Back",variant:"outline"},{label:"Withdraw now",variant:"warning"}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    title: "Est. Fee",
    description: "The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions."
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    title: "Withdraw now?",
    description: "Funds will go to your recovery address right away. Only you can access it.",
    actions: [{
      label: "Back",
      variant: "outline"
    }, {
      label: "Withdraw now",
      variant: "warning"
    }]
  }
}`,...r.parameters?.docs?.source},description:{story:`Confirm variant — the same sheet with its button row shown (Figma
I12802:628368;13540:55551, the clawback "Withdraw now?" dialog).`,...r.parameters?.docs?.description}}};const M=["Default","EstimatedFee","Confirm"];export{r as Confirm,o as Default,a as EstimatedFee,M as __namedExportsOrder,K as default};
