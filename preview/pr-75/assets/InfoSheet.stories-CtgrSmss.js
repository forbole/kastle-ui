import{j as t,V as p,s as d,t as m,p as h,b as g}from"./theme-BL901wsm.js";import{r as u}from"./iframe-D7ZVSzXT.js";import{I as c}from"./InfoSheet-DH-3ZznT.js";import{M as y}from"./index-DmxNEST0.js";import{T as w}from"./index-B6MvyGFu.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-C-Cya1f5.js";import"./Animated-ChMyxK_J.js";import"./extends-CF3RwP-h.js";import"./index-B71rpgce.js";import"./index-D352YTDK.js";import"./index-DF8hqNKG.js";import"./index-DNrp1jqU.js";import"./NativeEventEmitter-BE1gEug0.js";import"./index-DVuv6RZc.js";import"./index-BmZ3l-GP.js";import"./index-ZAh_1iL_.js";import"./index-NhLnENYY.js";const n=e=>{const[l,i]=u.useState(!1);return t.jsxs(p,{style:s.container,children:[t.jsx(y,{style:s.trigger,onPress:()=>i(!0),children:t.jsx(w,{style:s.triggerText,children:"Open Info Sheet"})}),t.jsx(c,{...e,isOpen:l,onClose:()=>i(!1)})]})},s=d.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:g.bg0},trigger:{backgroundColor:h.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:m.t900,fontSize:16,fontWeight:"600"}}),B={title:"Components/InfoSheet",component:c,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},title:"Change to your balance",description:`Just like paying with cash, any extra amount from this transaction will be sent back to your wallet.

This happens when your wallet spends more than the exact amount needed.`},argTypes:{onClose:{action:"close"}}},a={render:e=>t.jsx(n,{...e})},o={render:e=>t.jsx(n,{...e}),args:{title:"Est. Fee",description:"The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions."}},r={render:e=>t.jsx(n,{...e}),args:{title:"Withdraw now?",description:"Funds will go to your recovery address right away. Only you can access it.",actions:[{label:"Back",variant:"outline"},{label:"Withdraw now",variant:"warning"}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    title: "Est. Fee",
    description: "The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions."
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
I12802:628368;13540:55551, the clawback "Withdraw now?" dialog).`,...r.parameters?.docs?.description}}};const K=["Default","EstimatedFee","Confirm"];export{r as Confirm,a as Default,o as EstimatedFee,K as __namedExportsOrder,B as default};
