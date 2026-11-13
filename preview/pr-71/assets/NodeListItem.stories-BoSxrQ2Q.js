import{j as t,V as m,d as c}from"./theme-bYFjbd30.js";import{N as d}from"./NodeListItem-Cq049KOd.js";import"./iframe-DvLStzsE.js";import"./preload-helper-Zf8nSx-t.js";import"./index-B3o-eRUe.js";import"./extends-CF3RwP-h.js";import"./minus-C-8YX91j.js";import"./createLucideIcon-B_vpwc_g.js";import"./registry-BNXumi8c.js";import"./index-DC4yOEpa.js";import"./index-DeQ8fF9_.js";import"./check-DwXv795b.js";const S={title:"Custom-RPC/Components/NodeListItem",component:d,decorators:[a=>t.jsx(m,{style:{width:"100%",padding:20,backgroundColor:c.backgroundScreen},children:t.jsx(a,{})})]},e={args:{name:"Kastle node",url:"kastle-mainnet-borsh.rhyzome.co",isDefault:!0,selected:!0,onPress:()=>{}}},r={args:{name:"Community node",url:"community-node.com",onPress:()=>{}}},o={args:{name:"Home node",url:"home.com",editing:!0,onRemove:()=>{}}},n={args:{name:"Kastle node",url:"kastle-mainnet-borsh.rhyzome.co",isDefault:!0,editing:!0}},s={args:{name:"A very long node's name that truncates",url:"a-very-long-subdomain-name.example-node-host.com",onPress:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
