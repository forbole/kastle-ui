import{j as o,V as d,s as l,a as p,b as m}from"./theme-MCKW7A70.js";import{r as u}from"./iframe-CEQ2x2Sj.js";import{S as n}from"./Switch-D34nYnHV.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BaWkcwS2.js";import"./extends-CF3RwP-h.js";const I={title:"Components/Switch",component:n,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[t=>o.jsx(d,{style:g.decorator,children:o.jsx(t,{})})]},r={args:{isEnabled:!0}},s={args:{isEnabled:!1}},e={render:()=>{const[t,c]=u.useState(!0);return o.jsx(n,{isEnabled:t,onToggle:()=>c(i=>!i)})}},a={args:{isEnabled:!0,isDisabled:!0}},g=l.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:m.bg0,padding:p.s5}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isEnabled: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isEnabled: false
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isEnabled, setIsEnabled] = useState(true);
    return <Switch isEnabled={isEnabled} onToggle={() => setIsEnabled(v => !v)} />;
  }
}`,...e.parameters?.docs?.source},description:{story:"Interactive — tap to toggle (uncontrolled demo via local story state).",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isEnabled: true,
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};const h=["On","Off","Interactive","Disabled"];export{a as Disabled,e as Interactive,s as Off,r as On,h as __namedExportsOrder,I as default};
