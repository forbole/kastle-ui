import{j as n,V as l,s as p,a as m,b as u}from"./theme-wP9RlZRM.js";import{r as b}from"./iframe-CFm_rjMm.js";import{S as i}from"./Switch-BKPkAXIm.js";import"./preload-helper-Zf8nSx-t.js";import"./index-B_Scdc6q.js";import"./extends-CF3RwP-h.js";const y={title:"Components/Switch",component:i,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[o=>n.jsx(l,{style:g.decorator,children:n.jsx(o,{})})]},a={args:{isEnabled:!0}},t={args:{isEnabled:!1}},e={render:()=>{const[o,c]=b.useState(!0);return n.jsx(i,{isEnabled:o,onToggle:()=>c(d=>!d)})}},s={args:{isEnabled:!0,isDisabled:!0}},r={args:{isEnabled:!1,isDisabled:!0}},g=p.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:u.bg0,padding:m.s5}});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isEnabled: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isEnabled: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isEnabled, setIsEnabled] = useState(true);
    return <Switch isEnabled={isEnabled} onToggle={() => setIsEnabled(v => !v)} />;
  }
}`,...e.parameters?.docs?.source},description:{story:"Interactive — tap to toggle (uncontrolled demo via local story state).",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isEnabled: true,
    isDisabled: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Disabled + on — D-075: 40% opacity on the whole track+knob, not a colour change.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isEnabled: false,
    isDisabled: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Disabled + off — same 40% dim applied to the off-state colour/position.",...r.parameters?.docs?.description}}};const O=["On","Off","Interactive","DisabledOn","DisabledOff"];export{r as DisabledOff,s as DisabledOn,e as Interactive,t as Off,a as On,O as __namedExportsOrder,y as default};
