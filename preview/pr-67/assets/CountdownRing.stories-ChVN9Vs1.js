import{j as r,V as h,s as y,a as v,b as x}from"./theme-CDDAum2J.js";import{R as p}from"./iframe-BxfHI4vY.js";import{C as l}from"./CountdownRing-iKHzhaMB.js";import{I as b}from"./InfoSheet-DwTaClRC.js";import"./preload-helper-Zf8nSx-t.js";import"./info-B_fx1-Si.js";import"./createLucideIcon-B_59d7vS.js";import"./registry-BNXumi8c.js";import"./index-DVXQIxiV.js";import"./index-BtM_YAzl.js";import"./extends-CF3RwP-h.js";import"./timer-DNfRWF7o.js";import"./ActionSheet-B3nJR4Z_.js";import"./Animated-Bo8hT9Ai.js";import"./index-CyRt7i1c.js";import"./index-BelhNlRa.js";import"./index-yFwTT9Ez.js";import"./NativeEventEmitter-Ddlet7B_.js";import"./index-Bfzz9Suu.js";import"./index-_Dwq83yi.js";import"./index-C6WqPlhC.js";const g={title:"Funds leave in",description:"Your protection window counting down. When it ends, funds move to your external recovery address automatically. Withdraw anytime before it ends."},f=e=>{const[s,t]=p.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(l,{...e,onPressInfo:()=>t(!0)}),r.jsx(b,{isOpen:s,onClose:()=>t(!1),title:g.title,description:g.description})]})},A={title:"Protections/Components/CountdownRing",component:l,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},render:e=>r.jsx(f,{...e}),decorators:[e=>r.jsx(h,{style:S.decorator,children:r.jsx(e,{})})]},o={args:{time:"30d:11h:44m",label:"Funds leave in"}},n={args:{time:"20h:02m:02s",label:"Funds leave in"}},a={render:e=>r.jsx(l,{...e}),args:{time:"20h:02m:02s"}},i=e=>String(e).padStart(2,"0"),j=e=>{const s=Math.floor(e/86400),t=Math.floor(e%86400/3600),m=Math.floor(e%3600/60),d=e%60;return s>0?`${s}d:${i(t)}h:${i(m)}m`:`${i(t)}h:${i(m)}m:${i(d)}s`},w=({from:e,label:s})=>{const[t,m]=p.useState(e);return p.useEffect(()=>{const d=setInterval(()=>m(u=>u>0?u-1:0),1e3);return()=>clearInterval(d)},[]),r.jsx(f,{time:j(t),label:s})},c={render:()=>r.jsx(w,{from:72122,label:"Funds leave in"})},S=y.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:x.bg0,padding:v.s5}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    time: "30d:11h:44m",
    label: "Funds leave in"
  }
}`,...o.parameters?.docs?.source},description:{story:"Long range — days : hours : minutes. Tap the caption for the explainer.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    time: "20h:02m:02s",
    label: "Funds leave in"
  }
}`,...n.parameters?.docs?.source},description:{story:"Under a day — hours : minutes : seconds, with units.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <CountdownRing {...args} />,
  args: {
    time: "20h:02m:02s"
  }
}`,...a.parameters?.docs?.source},description:{story:"Timer only, no caption — nothing to tap.",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Live from={72122} label="Funds leave in" />
}`,...c.parameters?.docs?.source},description:{story:"Live ticking — counts down every second from 20h:02m:02s.",...c.parameters?.docs?.description}}};const B=["Default","UnderOneDay","NoLabel","Ticking"];export{o as Default,a as NoLabel,c as Ticking,n as UnderOneDay,B as __namedExportsOrder,A as default};
