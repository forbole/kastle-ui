import{j as o,V as c,s as u,a as i,b as l}from"./theme-BtKapHSy.js";import{r as p}from"./iframe-BknR4Qgk.js";import{P as n}from"./PassphraseInput-1JU1YXm3.js";import"./preload-helper-Zf8nSx-t.js";import"./Input-T3YeR6m_.js";import"./index-BzooAZ2z.js";import"./index-BmanuUWc.js";import"./circle-alert-BRWm6_by.js";import"./createLucideIcon-Bb93KJRL.js";import"./registry-BNXumi8c.js";import"./index-3l-Jjoce.js";import"./index-DwjPW7rc.js";import"./index-Bo4pje1R.js";import"./extends-CF3RwP-h.js";import"./eye-off-BMDkfGqY.js";import"./eye-C-SfLtQ2.js";const w={title:"Components/PassphraseInput",component:n,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[e=>o.jsx(c,{style:d.decorator,children:o.jsx(e,{})})]},t={render:()=>{const[e,r]=p.useState("");return o.jsx(n,{value:e,onChangeText:r})}},s={render:()=>{const[e,r]=p.useState("correct horse battery staple");return o.jsx(n,{value:e,onChangeText:r})}},a={render:()=>{const[e,r]=p.useState("wrong");return o.jsx(n,{value:e,onChangeText:r,error:"Passphrase is incorrect"})}},d=u.create({decorator:{flex:1,justifyContent:"center",backgroundColor:l.bg0,padding:i.s5}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
