import{j as t,V as p,s as m,t as d,p as h,b as g}from"./theme-DYzhAaDx.js";import{r as u}from"./iframe-D24O7SeT.js";import{I as c}from"./InfoSheet-BqOpG7Rp.js";import{M as y}from"./index-CIg8Mr94.js";import{T as w}from"./index-T6TIxRK5.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CtNGcJo5.js";import"./Animated-BI3sfg-r.js";import"./extends-CF3RwP-h.js";import"./index-ClzUkvUE.js";import"./index-vDJtv3wJ.js";import"./index-XP8vgcWJ.js";import"./index-Bsd0IIl7.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-0gcp5Jzp.js";import"./index-DLTIQwEC.js";import"./index-Bf9v-kSC.js";import"./index-B5vvSMTT.js";import"./index-Crk0kmJo.js";const n=e=>{const[l,i]=u.useState(!1);return t.jsxs(p,{style:s.container,children:[t.jsx(y,{style:s.trigger,onPress:()=>i(!0),children:t.jsx(w,{style:s.triggerText,children:"Open Info Sheet"})}),t.jsx(c,{...e,isOpen:l,onClose:()=>i(!1)})]})},s=m.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:g.bg0},trigger:{backgroundColor:h.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:d.t900,fontSize:16,fontWeight:"600"}}),K={title:"Components/InfoSheet",component:c,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},title:"Change to your balance",description:`Just like paying with cash, any extra amount from this transaction will be sent back to your wallet.

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
