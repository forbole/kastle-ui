import{j as e,V as l,S as p,t as m,p as d,b as h}from"./theme-CvEULk16.js";import{r as g}from"./iframe-h9lFp_Do.js";import{I as n}from"./InfoSheet-Co8DZs2Q.js";import{T as u,a as y}from"./index-CPcmjKTW.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-BVJj9TTN.js";import"./Animated-CkHAskOG.js";import"./index-DVr_0ZAa.js";import"./index-BVddVD7P.js";import"./index-6HEEUYrb.js";const i=t=>{const[c,a]=g.useState(!1);return e.jsxs(l,{style:o.container,children:[e.jsx(u,{style:o.trigger,onPress:()=>a(!0),children:e.jsx(y,{style:o.triggerText,children:"Open Info Sheet"})}),e.jsx(n,{...t,isOpen:c,onClose:()=>a(!1)})]})},o=p.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:h.bg0},trigger:{backgroundColor:d.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},triggerText:{color:m.t900,fontSize:16,fontWeight:"600"}}),I={title:"Components/InfoSheet",component:n,parameters:{layout:"fullscreen"},args:{isOpen:!1,onClose:()=>{},title:"Change to your balance",description:`Just like paying with cash, any extra amount from this transaction will be sent back to your wallet.

This happens when your wallet spends more than the exact amount needed.`},argTypes:{onClose:{action:"close"}}},r={render:t=>e.jsx(i,{...t})},s={render:t=>e.jsx(i,{...t}),args:{title:"Est. Fee",description:"The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    title: "Est. Fee",
    description: "The estimated network fee required to process this transaction on the Kaspa blockchain. The actual fee may vary slightly based on network conditions."
  }
}`,...s.parameters?.docs?.source}}};const O=["Default","EstimatedFee"];export{r as Default,s as EstimatedFee,O as __namedExportsOrder,I as default};
