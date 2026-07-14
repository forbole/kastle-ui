import{j as o,V as c,s as u,a as i,b as l}from"./theme-14-nfLmN.js";import{r as p}from"./iframe-CPbwvuc0.js";import{P as n}from"./PassphraseInput-C4Fl0lSj.js";import"./preload-helper-Zf8nSx-t.js";import"./Input-Bu3Jo90d.js";import"./index-C2cE8KhT.js";import"./index-__-rqOxc.js";import"./circle-alert-CKiDt3ko.js";import"./createLucideIcon-BO3burch.js";import"./registry-BNXumi8c.js";import"./index-CZoP2qMM.js";import"./index-Dbqfb4uO.js";import"./extends-CF3RwP-h.js";import"./eye-off-DlL4gthD.js";import"./eye-BM0daUT-.js";const T={title:"Components/PassphraseInput",component:n,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[e=>o.jsx(c,{style:d.decorator,children:o.jsx(e,{})})]},t={render:()=>{const[e,r]=p.useState("");return o.jsx(n,{value:e,onChangeText:r})}},s={render:()=>{const[e,r]=p.useState("correct horse battery staple");return o.jsx(n,{value:e,onChangeText:r})}},a={render:()=>{const[e,r]=p.useState("wrong");return o.jsx(n,{value:e,onChangeText:r,error:"Passphrase is incorrect"})}},d=u.create({decorator:{flex:1,justifyContent:"center",backgroundColor:l.bg0,padding:i.s5}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
