import{j as r,V as g,s as S,t as u,p as D,b as y}from"./theme-BMtPSiVD.js";import{r as m}from"./iframe-BwQUZMQt.js";import{S as d}from"./SwipeToConfirm-XhBrgLfB.js";import{M as T}from"./index-stlvCIdA.js";import{T as f}from"./index-Ccr2xj_k.js";import"./preload-helper-Zf8nSx-t.js";import"./Animated-xjFMR-27.js";import"./extends-CF3RwP-h.js";import"./index-DkFxHgX3.js";import"./index-ByDU6i4n.js";import"./index-vNBP4IWG.js";import"./index-D_ghHfDS.js";import"./NativeEventEmitter-egFTkWca.js";import"./index-CVCRJxXT.js";import"./index-mNEKgtlB.js";import"./arrow-right-C6UXYtYb.js";import"./createLucideIcon-C6PWtBwk.js";import"./registry-BNXumi8c.js";const s=S.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:y.bg0,paddingHorizontal:20,gap:16},resetButton:{backgroundColor:D.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},resetButtonText:{color:u.t900,fontSize:16,fontWeight:"600"},statusText:{color:u.t500,fontSize:14}}),p=e=>{const t=m.useRef(null);return r.jsxs(g,{style:s.container,children:[r.jsx(d,{...e,ref:t}),r.jsx(T,{style:s.resetButton,onPress:()=>t.current?.reset(),children:r.jsx(f,{style:s.resetButtonText,children:"Reset"})})]})},U={title:"Components/SwipeToConfirm",component:d,parameters:{layout:"fullscreen"},args:{title:"Swipe to confirm",isDisabled:!1,isLoading:!1},argTypes:{onConfirm:{action:"confirmed"}}},a={render:e=>r.jsx(p,{...e})},n={render:e=>r.jsx(p,{...e}),args:{isDisabled:!0}},i={render:e=>r.jsx(p,{...e}),args:{isLoading:!0}},j=2e3,w=1500,C=e=>{const t=m.useRef(null),[o,l]=m.useState("idle"),x=m.useCallback(()=>{l("loading"),setTimeout(()=>{l("completed"),setTimeout(()=>{l("idle"),t.current?.reset()},w)},j)},[]);return r.jsxs(g,{style:s.container,children:[r.jsx(d,{...e,ref:t,onConfirm:x,isLoading:o==="loading",title:o==="completed"?"✓ Confirmed!":e.title}),r.jsxs(f,{style:s.statusText,children:[o==="idle"&&"Swipe to trigger the flow",o==="loading"&&"Processing…",o==="completed"&&"Done! Resetting in a moment…"]})]})},c={render:e=>r.jsx(C,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const G=["Default","Disabled","Loading","SwipeLoadingCompleteFlow"];export{a as Default,n as Disabled,i as Loading,c as SwipeLoadingCompleteFlow,G as __namedExportsOrder,U as default};
