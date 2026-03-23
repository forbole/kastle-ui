import{j as r,V as g,T as S,a as f,S as D,t as u,p as y,b as T}from"./theme-DPeAEYg0.js";import{r as l}from"./iframe-BoPf2WTg.js";import{S as m}from"./SwipeToConfirm-Dot-yRLk.js";import"./preload-helper-Zf8nSx-t.js";import"./Animated-D3_SOzBQ.js";import"./index-BBYsvbWd.js";import"./index-B0pVRBDd.js";import"./createLucideIcon-WIdzhpSi.js";const o=D.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:T.bg0,paddingHorizontal:20,gap:16},resetButton:{backgroundColor:y.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},resetButtonText:{color:u.t900,fontSize:16,fontWeight:"600"},statusText:{color:u.t500,fontSize:14}}),p=e=>{const t=l.useRef(null);return r.jsxs(g,{style:o.container,children:[r.jsx(m,{...e,ref:t}),r.jsx(S,{style:o.resetButton,onPress:()=>t.current?.reset(),children:r.jsx(f,{style:o.resetButtonText,children:"Reset"})})]})},k={title:"Components/SwipeToConfirm",component:m,parameters:{layout:"fullscreen"},args:{title:"Swipe to confirm",isDisabled:!1,isLoading:!1},argTypes:{onConfirm:{action:"confirmed"}}},a={render:e=>r.jsx(p,{...e})},n={render:e=>r.jsx(p,{...e}),args:{isDisabled:!0}},i={render:e=>r.jsx(p,{...e}),args:{isLoading:!0}},j=2e3,w=1500,C=e=>{const t=l.useRef(null),[s,d]=l.useState("idle"),x=l.useCallback(()=>{d("loading"),setTimeout(()=>{d("completed"),setTimeout(()=>{d("idle"),t.current?.reset()},w)},j)},[]);return r.jsxs(g,{style:o.container,children:[r.jsx(m,{...e,ref:t,onConfirm:x,isLoading:s==="loading",title:s==="completed"?"✓ Confirmed!":e.title}),r.jsxs(f,{style:o.statusText,children:[s==="idle"&&"Swipe to trigger the flow",s==="loading"&&"Processing…",s==="completed"&&"Done! Resetting in a moment…"]})]})},c={render:e=>r.jsx(C,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Demo {...args} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Demo {...args} />,
  args: {
    isDisabled: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Demo {...args} />,
  args: {
    isLoading: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <FlowDemo {...args} />
}`,...c.parameters?.docs?.source}}};const z=["Default","Disabled","Loading","SwipeLoadingCompleteFlow"];export{a as Default,n as Disabled,i as Loading,c as SwipeLoadingCompleteFlow,z as __namedExportsOrder,k as default};
