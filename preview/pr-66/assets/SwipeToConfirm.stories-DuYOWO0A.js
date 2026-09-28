import{j as r,V as g,s as S,t as u,p as D,b as y}from"./theme-wP9RlZRM.js";import{r as c}from"./iframe-CFm_rjMm.js";import{S as d}from"./SwipeToConfirm-4t4ZkOv8.js";import{M as T}from"./index-B_Scdc6q.js";import{T as f}from"./index-B-t7h6kb.js";import"./preload-helper-Zf8nSx-t.js";import"./Animated-Bee7hbti.js";import"./extends-CF3RwP-h.js";import"./index-CDtCChKM.js";import"./index-m0Q4tz4Z.js";import"./index-IeyLb-Vx.js";import"./index-DZXGs7LO.js";import"./NativeEventEmitter-D1_kvAjs.js";import"./index-B-5JEVnn.js";import"./index-CmjvyzCy.js";import"./index-B3lzwAwJ.js";import"./arrow-right-DmpgsOpT.js";import"./createLucideIcon-qAR8mMf4.js";import"./registry-BNXumi8c.js";const s=S.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:y.bg0,paddingHorizontal:20,gap:16},resetButton:{backgroundColor:D.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},resetButtonText:{color:u.t900,fontSize:16,fontWeight:"600"},statusText:{color:u.t500,fontSize:14}}),p=e=>{const t=c.useRef(null);return r.jsxs(g,{style:s.container,children:[r.jsx(d,{...e,ref:t}),r.jsx(T,{style:s.resetButton,onPress:()=>t.current?.reset(),children:r.jsx(f,{style:s.resetButtonText,children:"Reset"})})]})},G={title:"Components/SwipeToConfirm",component:d,parameters:{layout:"fullscreen"},args:{title:"Swipe to confirm",isDisabled:!1,isLoading:!1},argTypes:{onConfirm:{action:"confirmed"}}},a={render:e=>r.jsx(p,{...e})},n={render:e=>r.jsx(p,{...e}),args:{isDisabled:!0}},i={render:e=>r.jsx(p,{...e}),args:{isLoading:!0}},j=2e3,w=1500,C=e=>{const t=c.useRef(null),[o,l]=c.useState("idle"),x=c.useCallback(()=>{l("loading"),setTimeout(()=>{l("completed"),setTimeout(()=>{l("idle"),t.current?.reset()},w)},j)},[]);return r.jsxs(g,{style:s.container,children:[r.jsx(d,{...e,ref:t,onConfirm:x,isLoading:o==="loading",title:o==="completed"?"✓ Confirmed!":e.title}),r.jsxs(f,{style:s.statusText,children:[o==="idle"&&"Swipe to trigger the flow",o==="loading"&&"Processing…",o==="completed"&&"Done! Resetting in a moment…"]})]})},m={render:e=>r.jsx(C,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <FlowDemo {...args} />
}`,...m.parameters?.docs?.source}}};const W=["Default","Disabled","Loading","SwipeLoadingCompleteFlow"];export{a as Default,n as Disabled,i as Loading,m as SwipeLoadingCompleteFlow,W as __namedExportsOrder,G as default};
