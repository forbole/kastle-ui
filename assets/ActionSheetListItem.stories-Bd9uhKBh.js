import{j as t,V as a,s as i,a as n,b as p}from"./theme-DDPaIB1X.js";import{A as c}from"./ActionSheetListItem-D8sVamUu.js";import"./iframe-C0__Ltsv.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BQBSTirH.js";import"./extends-CF3RwP-h.js";import"./index-CgXa9ahC.js";import"./chevron-right-D05GoCiC.js";import"./createLucideIcon-CJQ7ynVx.js";import"./registry-BNXumi8c.js";import"./index-DrZ2CmGC.js";const x={title:"Components/ActionSheetListItem",component:c,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[o=>t.jsx(a,{style:d.decorator,children:t.jsx(o,{})})]},e={args:{title:"Recovery phrase or Private Key",onPress:()=>{}}},s={args:{title:"Recovery phrase with Passphrase",description:"For wallets created with a BIP39 passphrase",onPress:()=>{}}},r={args:{title:"Recovery phrase with Passphrase",description:"Coming soon",disabled:!0,onPress:()=>{}}},d=i.create({decorator:{flex:1,justifyContent:"center",backgroundColor:p.bg0,padding:n.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Recovery phrase or Private Key",
    onPress: () => {}
  }
}`,...e.parameters?.docs?.source},description:{story:"Title only",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Recovery phrase with Passphrase",
    description: "For wallets created with a BIP39 passphrase",
    onPress: () => {}
  }
}`,...s.parameters?.docs?.source},description:{story:"Title with description",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Recovery phrase with Passphrase",
    description: "Coming soon",
    disabled: true,
    onPress: () => {}
  }
}`,...r.parameters?.docs?.source},description:{story:"Disabled",...r.parameters?.docs?.description}}};const R=["TitleOnly","WithDescription","Disabled"];export{r as Disabled,e as TitleOnly,s as WithDescription,R as __namedExportsOrder,x as default};
