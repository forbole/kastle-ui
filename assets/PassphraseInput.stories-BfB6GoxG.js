import{j as o,V as c,s as u,a as i,b as l}from"./theme-BQPMGyA0.js";import{r as p}from"./iframe-DWuhBMh9.js";import{P as n}from"./PassphraseInput-DzFyYqaR.js";import"./preload-helper-Zf8nSx-t.js";import"./Input-ChlHeHtB.js";import"./index-Dz306UKS.js";import"./index-m4WpeeGG.js";import"./circle-alert-BM9egtyF.js";import"./createLucideIcon-CqNmEb8A.js";import"./registry-BNXumi8c.js";import"./index-DEi_GWca.js";import"./index-DuIDIdAw.js";import"./index-zxtS2_3A.js";import"./extends-CF3RwP-h.js";import"./eye-off-COFh3oO4.js";import"./eye-BsgCdJ84.js";const w={title:"Components/PassphraseInput",component:n,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[e=>o.jsx(c,{style:d.decorator,children:o.jsx(e,{})})]},t={render:()=>{const[e,r]=p.useState("");return o.jsx(n,{value:e,onChangeText:r})}},s={render:()=>{const[e,r]=p.useState("correct horse battery staple");return o.jsx(n,{value:e,onChangeText:r})}},a={render:()=>{const[e,r]=p.useState("wrong");return o.jsx(n,{value:e,onChangeText:r,error:"Passphrase is incorrect"})}},d=u.create({decorator:{flex:1,justifyContent:"center",backgroundColor:l.bg0,padding:i.s5}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Error state",...a.parameters?.docs?.description}}};const I=["Default","Filled","Error"];export{t as Default,a as Error,s as Filled,I as __namedExportsOrder,w as default};
