import{j as r,V as g,s as S,t as u,p as D,b as y}from"./theme-BrnOGujP.js";import{r as c}from"./iframe-Bid9LiEz.js";import{S as d}from"./SwipeToConfirm-Cml0RFZa.js";import{M as T}from"./index-Di1UIHR6.js";import{T as f}from"./index-Byg0i5su.js";import"./preload-helper-Zf8nSx-t.js";import"./Animated-BWjFaXSq.js";import"./extends-CF3RwP-h.js";import"./index-By0C7WAp.js";import"./index-DBPZPp3W.js";import"./index-BP7_va3E.js";import"./index-DtzJT2q5.js";import"./NativeEventEmitter-DVicevGX.js";import"./index-DUba3Omf.js";import"./index-St5aPUzd.js";import"./index-uvispa33.js";import"./arrow-right-CxUJyVJG.js";import"./createLucideIcon-DGFHsTCF.js";import"./registry-BNXumi8c.js";const s=S.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:y.bg0,paddingHorizontal:20,gap:16},resetButton:{backgroundColor:D.p500,paddingHorizontal:24,paddingVertical:12,borderRadius:9999},resetButtonText:{color:u.t900,fontSize:16,fontWeight:"600"},statusText:{color:u.t500,fontSize:14}}),p=e=>{const t=c.useRef(null);return r.jsxs(g,{style:s.container,children:[r.jsx(d,{...e,ref:t}),r.jsx(T,{style:s.resetButton,onPress:()=>t.current?.reset(),children:r.jsx(f,{style:s.resetButtonText,children:"Reset"})})]})},G={title:"Components/SwipeToConfirm",component:d,parameters:{layout:"fullscreen"},args:{title:"Swipe to confirm",isDisabled:!1,isLoading:!1},argTypes:{onConfirm:{action:"confirmed"}}},a={render:e=>r.jsx(p,{...e})},n={render:e=>r.jsx(p,{...e}),args:{isDisabled:!0}},i={render:e=>r.jsx(p,{...e}),args:{isLoading:!0}},j=2e3,w=1500,C=e=>{const t=c.useRef(null),[o,l]=c.useState("idle"),x=c.useCallback(()=>{l("loading"),setTimeout(()=>{l("completed"),setTimeout(()=>{l("idle"),t.current?.reset()},w)},j)},[]);return r.jsxs(g,{style:s.container,children:[r.jsx(d,{...e,ref:t,onConfirm:x,isLoading:o==="loading",title:o==="completed"?"✓ Confirmed!":e.title}),r.jsxs(f,{style:s.statusText,children:[o==="idle"&&"Swipe to trigger the flow",o==="loading"&&"Processing…",o==="completed"&&"Done! Resetting in a moment…"]})]})},m={render:e=>r.jsx(C,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
