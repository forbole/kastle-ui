import{j as o,V as c,s as u,a as i,b as l}from"./theme-Cge1cUOR.js";import{r as p}from"./iframe-crFY2r2g.js";import{P as n}from"./PassphraseInput-CyjUS38u.js";import"./preload-helper-Zf8nSx-t.js";import"./Input-B7IzJJYB.js";import"./index-BJ3UWEnG.js";import"./index-DnbNJEnl.js";import"./circle-alert-Drk0MXo9.js";import"./createLucideIcon-Bkv_DprP.js";import"./registry-BNXumi8c.js";import"./index-9py9rtBs.js";import"./index-Bx67-O33.js";import"./extends-CF3RwP-h.js";import"./eye-off-BZgHGHFI.js";import"./eye-pHoOuoRH.js";const T={title:"Components/PassphraseInput",component:n,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[e=>o.jsx(c,{style:d.decorator,children:o.jsx(e,{})})]},t={render:()=>{const[e,r]=p.useState("");return o.jsx(n,{value:e,onChangeText:r})}},s={render:()=>{const[e,r]=p.useState("correct horse battery staple");return o.jsx(n,{value:e,onChangeText:r})}},a={render:()=>{const[e,r]=p.useState("wrong");return o.jsx(n,{value:e,onChangeText:r,error:"Passphrase is incorrect"})}},d=u.create({decorator:{flex:1,justifyContent:"center",backgroundColor:l.bg0,padding:i.s5}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <PassphraseInput value={value} onChangeText={setValue} />;
  }
}`,...t.parameters?.docs?.source},description:{story:"Empty — masked, eye-off icon, default placeholder",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("correct horse battery staple");
    return <PassphraseInput value={value} onChangeText={setValue} />;
  }
}`,...s.parameters?.docs?.source},description:{story:"Filled — tap eye to toggle masked / plain",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("wrong");
    return <PassphraseInput value={value} onChangeText={setValue} error="Passphrase is incorrect" />;
  }
}`,...a.parameters?.docs?.source},description:{story:"Error state",...a.parameters?.docs?.description}}};const w=["Default","Filled","Error"];export{t as Default,a as Error,s as Filled,w as __namedExportsOrder,T as default};
