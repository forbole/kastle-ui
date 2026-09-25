import{j as o,V as c,s as u,a as i,b as l}from"./theme-q_7wiGV8.js";import{r as p}from"./iframe-CYc9jzjr.js";import{P as n}from"./PassphraseInput-D-TdETDG.js";import"./preload-helper-Zf8nSx-t.js";import"./Input-WGqunDVs.js";import"./index-B0LY_Qia.js";import"./index-COW66coR.js";import"./circle-alert-CtrF8XPI.js";import"./createLucideIcon-ChR2uSvd.js";import"./registry-BNXumi8c.js";import"./index-BRB09g9F.js";import"./index-5X-oGKJz.js";import"./extends-CF3RwP-h.js";import"./eye-off-D8J1-KJn.js";import"./eye-BsE48o4D.js";const T={title:"Components/PassphraseInput",component:n,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[e=>o.jsx(c,{style:d.decorator,children:o.jsx(e,{})})]},t={render:()=>{const[e,r]=p.useState("");return o.jsx(n,{value:e,onChangeText:r})}},s={render:()=>{const[e,r]=p.useState("correct horse battery staple");return o.jsx(n,{value:e,onChangeText:r})}},a={render:()=>{const[e,r]=p.useState("wrong");return o.jsx(n,{value:e,onChangeText:r,error:"Passphrase is incorrect"})}},d=u.create({decorator:{flex:1,justifyContent:"center",backgroundColor:l.bg0,padding:i.s5}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
