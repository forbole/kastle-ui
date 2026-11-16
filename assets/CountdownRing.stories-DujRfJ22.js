import{j as r,V as h,s as y,a as v,b as x}from"./theme-CkMMdLwS.js";import{R as p}from"./iframe-V_2_tdAM.js";import{C as l}from"./CountdownRing-D-utIW1T.js";import{I as b}from"./InfoSheet-Bs5MLDW8.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Deh8TsCW.js";import"./info-CcG3LxeJ.js";import"./createLucideIcon-zWUAFxB2.js";import"./registry-BNXumi8c.js";import"./index-CATfkrsY.js";import"./index-CLvPcPP9.js";import"./extends-CF3RwP-h.js";import"./timer-vatkEp0Z.js";import"./ActionSheet-Dv15CkbQ.js";import"./Animated-B_kPtmXD.js";import"./index-DRdS6d_q.js";import"./index-s12-EVeH.js";import"./index-CBWOs78p.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-BPUdZtDr.js";import"./index-g2wItwL9.js";import"./index-BCFeCHGC.js";import"./index-BYHyjroj.js";import"./index-B_wIMOrn.js";const g={title:"Funds leave in",description:"Your protection window counting down. When it ends, funds move to your external recovery address automatically. Withdraw anytime before it ends."},f=e=>{const[o,t]=p.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(l,{...e,onPressInfo:()=>t(!0)}),r.jsx(b,{isOpen:o,onClose:()=>t(!1),title:g.title,description:g.description})]})},H={title:"Protections/Components/CountdownRing",component:l,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},render:e=>r.jsx(f,{...e}),decorators:[e=>r.jsx(h,{style:S.decorator,children:r.jsx(e,{})})]},s={args:{time:"30d:11h:44m",label:"Funds leave in"}},n={args:{time:"20h:02m:02s",label:"Funds leave in"}},a={render:e=>r.jsx(l,{...e}),args:{time:"20h:02m:02s"}},i=e=>String(e).padStart(2,"0"),j=e=>{const o=Math.floor(e/86400),t=Math.floor(e%86400/3600),m=Math.floor(e%3600/60),d=e%60;return o>0?`${o}d:${i(t)}h:${i(m)}m`:`${i(t)}h:${i(m)}m:${i(d)}s`},w=({from:e,label:o})=>{const[t,m]=p.useState(e);return p.useEffect(()=>{const d=setInterval(()=>m(u=>u>0?u-1:0),1e3);return()=>clearInterval(d)},[]),r.jsx(f,{time:j(t),label:o})},c={render:()=>r.jsx(w,{from:72122,label:"Funds leave in"})},S=y.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:x.bg0,padding:v.s5}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    time: "30d:11h:44m",
    label: "Funds leave in"
  }
}`,...s.parameters?.docs?.source},description:{story:"Long range — days : hours : minutes. Tap the caption for the explainer.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Live ticking — counts down every second from 20h:02m:02s.",...c.parameters?.docs?.description}}};const J=["Default","UnderOneDay","NoLabel","Ticking"];export{s as Default,a as NoLabel,c as Ticking,n as UnderOneDay,J as __namedExportsOrder,H as default};
