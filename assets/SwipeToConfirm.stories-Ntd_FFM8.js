import{j as r,V as g,s as S,t as u,p as D,b as y}from"./theme-Cge1cUOR.js";import{r as m}from"./iframe-crFY2r2g.js";import{S as d}from"./SwipeToConfirm-LH_srRUA.js";import{M as T}from"./index-Bx67-O33.js";import{T as f}from"./index-9py9rtBs.js";import"./preload-helper-Zf8nSx-t.js";import"./Animated-BB8zbSBu.js";import"./extends-CF3RwP-h.js";import"./index-CVvaR4yy.js";import"./index-DM2uBhM5.js";import"./index-DnbNJEnl.js";import"./NativeEventEmitter-BeQff5Pr.js";import"./index-BT36D-vb.js";import"./index-ECK0OHmG.js";import"./arrow-right-oJCOYcoM.js";import"./createLucideIcon-Bkv_DprP.js";import"./registry-BNXumi8c.js";const s=S.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:y.bg0,paddingHorizontal:20,gap:16},resetButton:{backgroundColor:D.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},resetButtonText:{color:u.t900,fontSize:16,fontWeight:"600"},statusText:{color:u.t500,fontSize:14}}),p=e=>{const t=m.useRef(null);return r.jsxs(g,{style:s.container,children:[r.jsx(d,{...e,ref:t}),r.jsx(T,{style:s.resetButton,onPress:()=>t.current?.reset(),children:r.jsx(f,{style:s.resetButtonText,children:"Reset"})})]})},H={title:"Components/SwipeToConfirm",component:d,parameters:{layout:"fullscreen"},args:{title:"Swipe to confirm",isDisabled:!1,isLoading:!1},argTypes:{onConfirm:{action:"confirmed"}}},a={render:e=>r.jsx(p,{...e})},n={render:e=>r.jsx(p,{...e}),args:{isDisabled:!0}},i={render:e=>r.jsx(p,{...e}),args:{isLoading:!0}},j=2e3,w=1500,C=e=>{const t=m.useRef(null),[o,l]=m.useState("idle"),x=m.useCallback(()=>{l("loading"),setTimeout(()=>{l("completed"),setTimeout(()=>{l("idle"),t.current?.reset()},w)},j)},[]);return r.jsxs(g,{style:s.container,children:[r.jsx(d,{...e,ref:t,onConfirm:x,isLoading:o==="loading",title:o==="completed"?"✓ Confirmed!":e.title}),r.jsxs(f,{style:s.statusText,children:[o==="idle"&&"Swipe to trigger the flow",o==="loading"&&"Processing…",o==="completed"&&"Done! Resetting in a moment…"]})]})},c={render:e=>r.jsx(C,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const U=["Default","Disabled","Loading","SwipeLoadingCompleteFlow"];export{a as Default,n as Disabled,i as Loading,c as SwipeLoadingCompleteFlow,U as __namedExportsOrder,H as default};
