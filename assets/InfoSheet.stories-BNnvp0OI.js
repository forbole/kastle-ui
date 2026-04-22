import{j as e,V as l,M as p,T as d,s as m,t as h,p as g,b as u}from"./theme-DyXfiJsI.js";import{r as y}from"./iframe-govM8vs5.js";import{I as n}from"./InfoSheet-C1YOHWVu.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-ESCa1hxp.js";import"./Animated-ffXQvZak.js";import"./index-EbOW5XAG.js";import"./index-C8Bj-2Q3.js";import"./index-htgL96ya.js";const i=t=>{const[c,a]=y.useState(!1);return e.jsxs(l,{style:o.container,children:[e.jsx(p,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(d,{style:o.triggerText,children:"Open Info Sheet"})}),e.jsx(n,{...t,isOpen:c,onClose:()=>a(!1)})]})},o=m.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0},trigger:{backgroundColor:g.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:h.t900,fontSize:16,fontWeight:"600"}}),E={title:"Components/InfoSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},title:"Change to your balance",description:`Just like paying with cash, any extra amount from this transaction will be sent back to your wallet.

This happens when your wallet spends more than the exact amount needed.`},argTypes:{onClose:{action:"close"}}},r={render:t=>e.jsx(i,{...t})},s={render:t=>e.jsx(i,{...t}),args:{title:"Est. Fee",description:"The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    title: "Est. Fee",
    description: "The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions."
  }
}`,...s.parameters?.docs?.source}}};const I=["Default","EstimatedFee"];export{r as Default,s as EstimatedFee,I as __namedExportsOrder,E as default};
