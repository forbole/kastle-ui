import{j as e,V as l,M as p,T as m,s as d,t as h,p as g,b as u}from"./theme-BvRy3FKs.js";import{r as y}from"./iframe-BP6utfbh.js";import{I as n}from"./InfoSheet-C7xoJuwQ.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-0SB4YC9G.js";import"./Animated-BoqXMXjd.js";import"./index-5lGPUitZ.js";import"./index-DVAKC2Ru.js";import"./index-D5xQ9SU0.js";import"./index-Bd-qoFt2.js";const i=t=>{const[c,a]=y.useState(!1);return e.jsxs(l,{style:o.container,children:[e.jsx(p,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(m,{style:o.triggerText,children:"Open Info Sheet"})}),e.jsx(n,{...t,isOpen:c,onClose:()=>a(!1)})]})},o=d.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0},trigger:{backgroundColor:g.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:h.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/InfoSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},title:"Change to your balance",description:`Just like paying with cash, any extra amount from this transaction will be sent back to your wallet.

This happens when your wallet spends more than the exact amount needed.`},argTypes:{onClose:{action:"close"}}},r={render:t=>e.jsx(i,{...t})},s={render:t=>e.jsx(i,{...t}),args:{title:"Est. Fee",description:"The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    title: "Est. Fee",
    description: "The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions."
  }
}`,...s.parameters?.docs?.source}}};const O=["Default","EstimatedFee"];export{r as Default,s as EstimatedFee,O as __namedExportsOrder,I as default};
