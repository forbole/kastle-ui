import{j as t,V as m,c}from"./theme-DDPaIB1X.js";import{N as i}from"./NodeListItem-CuBDqeUz.js";import"./iframe-C0__Ltsv.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BQBSTirH.js";import"./extends-CF3RwP-h.js";import"./minus-5adCktkN.js";import"./createLucideIcon-CJQ7ynVx.js";import"./registry-BNXumi8c.js";import"./index-DrZ2CmGC.js";import"./index-CgXa9ahC.js";import"./check-Di25RZ4E.js";const S={title:"Custom-RPC/Components/NodeListItem",component:i,decorators:[a=>t.jsx(m,{style:{width:"100%",padding:20,backgroundColor:c.backgroundScreen},children:t.jsx(a,{})})]},e={args:{name:"Kastle node",url:"kastle-mainnet-borsh.rhyzome.co",isDefault:!0,selected:!0,onPress:()=>{}}},r={args:{name:"Community node",url:"community-node.com",onPress:()=>{}}},o={args:{name:"Home node",url:"home.com",editing:!0,onRemove:()=>{}}},n={args:{name:"Kastle node",url:"kastle-mainnet-borsh.rhyzome.co",isDefault:!0,editing:!0}},s={args:{name:"A very long node's name that truncates",url:"a-very-long-subdomain-name.example-node-host.com",onPress:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Kastle node",
    url: "kastle-mainnet-borsh.rhyzome.co",
    isDefault: true,
    selected: true,
    onPress: () => {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Community node",
    url: "community-node.com",
    onPress: () => {}
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Home node",
    url: "home.com",
    editing: true,
    onRemove: () => {}
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Kastle node",
    url: "kastle-mainnet-borsh.rhyzome.co",
    isDefault: true,
    editing: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "A very long node's name that truncates",
    url: "a-very-long-subdomain-name.example-node-host.com",
    onPress: () => {}
  }
}`,...s.parameters?.docs?.source}}};const P=["DefaultSelected","Unselected","Editing","EditingDefaultLocked","LongName"];export{e as DefaultSelected,o as Editing,n as EditingDefaultLocked,s as LongName,r as Unselected,P as __namedExportsOrder,S as default};
