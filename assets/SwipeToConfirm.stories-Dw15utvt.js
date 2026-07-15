import{j as r,V as g,s as S,t as u,p as D,b as y}from"./theme-C_cWzS-4.js";import{r as m}from"./iframe-DMIFxX_x.js";import{S as d}from"./SwipeToConfirm-DN1-1Aw2.js";import{M as T}from"./index-C55DuxNb.js";import{T as f}from"./index-BpPZ0Km4.js";import"./preload-helper-Zf8nSx-t.js";import"./Animated-CSX_C8Li.js";import"./extends-CF3RwP-h.js";import"./index-DIq3v3EI.js";import"./index-DngH4mLp.js";import"./index-BEsuBgQz.js";import"./NativeEventEmitter-DJKniD8T.js";import"./index-HYeq8y_O.js";import"./index-4GFSxsD0.js";import"./arrow-right-CFGPfHlY.js";import"./createLucideIcon-BONm68I-.js";import"./registry-BNXumi8c.js";const s=S.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:y.bg0,paddingHorizontal:20,gap:16},resetButton:{backgroundColor:D.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},resetButtonText:{color:u.t900,fontSize:16,fontWeight:"600"},statusText:{color:u.t500,fontSize:14}}),p=e=>{const t=m.useRef(null);return r.jsxs(g,{style:s.container,children:[r.jsx(d,{...e,ref:t}),r.jsx(T,{style:s.resetButton,onPress:()=>t.current?.reset(),children:r.jsx(f,{style:s.resetButtonText,children:"Reset"})})]})},H={title:"Components/SwipeToConfirm",component:d,parameters:{layout:"fullscreen"},args:{title:"Swipe to confirm",isDisabled:!1,isLoading:!1},argTypes:{onConfirm:{action:"confirmed"}}},a={render:e=>r.jsx(p,{...e})},n={render:e=>r.jsx(p,{...e}),args:{isDisabled:!0}},i={render:e=>r.jsx(p,{...e}),args:{isLoading:!0}},j=2e3,w=1500,C=e=>{const t=m.useRef(null),[o,l]=m.useState("idle"),x=m.useCallback(()=>{l("loading"),setTimeout(()=>{l("completed"),setTimeout(()=>{l("idle"),t.current?.reset()},w)},j)},[]);return r.jsxs(g,{style:s.container,children:[r.jsx(d,{...e,ref:t,onConfirm:x,isLoading:o==="loading",title:o==="completed"?"✓ Confirmed!":e.title}),r.jsxs(f,{style:s.statusText,children:[o==="idle"&&"Swipe to trigger the flow",o==="loading"&&"Processing…",o==="completed"&&"Done! Resetting in a moment…"]})]})},c={render:e=>r.jsx(C,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
