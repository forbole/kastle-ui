import{j as t,V as a,s as i,a as n,b as p}from"./theme-B3bUoaGL.js";import{A as c}from"./ActionSheetListItem-Yj5-ZGPr.js";import"./iframe-Lah8nOVH.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DUUZ3-Yc.js";import"./extends-CF3RwP-h.js";import"./index-sLfTmX7D.js";import"./chevron-right-Cy-YpB6Y.js";import"./createLucideIcon-C0wvj8Ue.js";import"./registry-BNXumi8c.js";const f={title:"Components/ActionSheetListItem",component:c,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[o=>t.jsx(a,{style:d.decorator,children:t.jsx(o,{})})]},e={args:{title:"Recovery phrase or Private Key",onPress:()=>{}}},s={args:{title:"Recovery phrase with Passphrase",description:"For wallets created with a BIP39 passphrase",onPress:()=>{}}},r={args:{title:"Recovery phrase with Passphrase",description:"Coming soon",disabled:!0,onPress:()=>{}}},d=i.create({decorator:{flex:1,justifyContent:"center",backgroundColor:p.bg0,padding:n.s5}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Disabled",...r.parameters?.docs?.description}}};const x=["TitleOnly","WithDescription","Disabled"];export{r as Disabled,e as TitleOnly,s as WithDescription,x as __namedExportsOrder,f as default};
