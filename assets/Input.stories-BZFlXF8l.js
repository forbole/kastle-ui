import{j as r,t as p,V as i,s as u,a as h,b as m}from"./theme-B3bUoaGL.js";import{r as d}from"./iframe-Lah8nOVH.js";import{I as a}from"./Input-INanbUp_.js";import{S as x}from"./search-yIcP4LVj.js";import"./preload-helper-Zf8nSx-t.js";import"./index-B_ZjKzDS.js";import"./index-CI5ve4E_.js";import"./circle-alert-Br6QayZb.js";import"./createLucideIcon-C0wvj8Ue.js";import"./registry-BNXumi8c.js";import"./index-sLfTmX7D.js";const k={title:"Components/Input",component:a,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[e=>r.jsx(i,{style:g.decorator,children:r.jsx(e,{})})]},o={render:()=>{const[e,t]=d.useState("");return r.jsx(a,{value:e,onChangeText:t,placeholder:"Placeholder Text"})}},s={render:()=>{const[e,t]=d.useState("kaspa:qz0c...");return r.jsx(a,{value:e,onChangeText:t,placeholder:"Placeholder Text"})}},n={render:()=>{const[e,t]=d.useState("invalid input");return r.jsx(a,{value:e,onChangeText:t,placeholder:"Placeholder Text",error:"Oh, invalid"})}},l={render:()=>r.jsx(a,{value:"",onChangeText:()=>{},placeholder:"Placeholder Text",disabled:!0})},c={render:()=>{const[e,t]=d.useState("");return r.jsx(a,{value:e,onChangeText:t,placeholder:"Search",leftIcon:r.jsx(x,{size:20,color:p.t600,strokeWidth:2})})}},g=u.create({decorator:{flex:1,justifyContent:"center",backgroundColor:m.bg0,padding:h.s5}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <Input value={value} onChangeText={setValue} placeholder="Placeholder Text" />;
  }
}`,...o.parameters?.docs?.source},description:{story:"Empty — placeholder visible",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("kaspa:qz0c...");
    return <Input value={value} onChangeText={setValue} placeholder="Placeholder Text" />;
  }
}`,...s.parameters?.docs?.source},description:{story:"Filled with text",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("invalid input");
    return <Input value={value} onChangeText={setValue} placeholder="Placeholder Text" error="Oh, invalid" />;
  }
}`,...n.parameters?.docs?.source},description:{story:"Error state — red border + message",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Input value="" onChangeText={() => {}} placeholder="Placeholder Text" disabled />
}`,...l.parameters?.docs?.source},description:{story:"Disabled — 40% opacity, not editable",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <Input value={value} onChangeText={setValue} placeholder="Search" leftIcon={<Search size={20} color={typography.t600} strokeWidth={2} />} />;
  }
}`,...c.parameters?.docs?.source},description:{story:"With leadingIcon slot — demonstrates the icon slot (not eye toggle; see PassphraseInput for that).",...c.parameters?.docs?.description}}};const E=["Default","Filled","Error","Disabled","WithIcon"];export{o as Default,l as Disabled,n as Error,s as Filled,c as WithIcon,E as __namedExportsOrder,k as default};
