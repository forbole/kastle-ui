import{j as t,V as d,T as p,s as m,t as h,p as g,b as u}from"./theme-CDDAum2J.js";import{r as y}from"./iframe-BxfHI4vY.js";import{I as c}from"./InfoSheet-DwTaClRC.js";import{M as w}from"./index-BtM_YAzl.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-B3nJR4Z_.js";import"./Animated-Bo8hT9Ai.js";import"./extends-CF3RwP-h.js";import"./index-CyRt7i1c.js";import"./index-DVXQIxiV.js";import"./index-BelhNlRa.js";import"./index-yFwTT9Ez.js";import"./NativeEventEmitter-Ddlet7B_.js";import"./index-Bfzz9Suu.js";import"./index-_Dwq83yi.js";import"./index-C6WqPlhC.js";const n=e=>{const[l,i]=y.useState(!1);return t.jsxs(d,{style:s.container,children:[t.jsx(w,{style:s.trigger,onPress:()=>i(!0),children:t.jsx(p,{style:s.triggerText,children:"Open Info Sheet"})}),t.jsx(c,{...e,isOpen:l,onClose:()=>i(!1)})]})},s=m.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0},trigger:{backgroundColor:g.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:h.t900,fontSize:16,fontWeight:"600"}}),q={title:"Components/InfoSheet",component:c,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},title:"Change to your balance",description:`Just like paying with cash, any extra amount from this transaction will be sent back to your wallet.

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
I12802:628368;13540:55551, the clawback "Withdraw now?" dialog).`,...r.parameters?.docs?.description}}};const z=["Default","EstimatedFee","Confirm"];export{r as Confirm,a as Default,o as EstimatedFee,z as __namedExportsOrder,q as default};
