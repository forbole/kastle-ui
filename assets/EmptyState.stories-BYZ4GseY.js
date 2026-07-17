import{j as r,V as o,s,b as i}from"./theme-C2Wfrodj.js";import{e as n,a as m,E as c}from"./error-activity-Do6t3vol.js";import"./iframe-Cees0VVP.js";import"./preload-helper-Zf8nSx-t.js";import"./index-yd_1a2AF.js";import"./extends-CF3RwP-h.js";import"./index-CDIDfjPd.js";import"./index-D0uPuLc5.js";import"./index-BY81t-fP.js";const k={title:"Components/EmptyState",component:c,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},argTypes:{imageHeight:{control:{type:"range",min:60,max:240,step:4}},imageWidth:{control:{type:"range",min:60,max:320,step:4}}},decorators:[a=>r.jsx(o,{style:p.decorator,children:r.jsx(a,{})})]},e={args:{image:n,imageHeight:160,imageWidth:192,heading:"No activity yet",subtext:"Your swaps will appear here once you make one."}},t={args:{image:m,imageHeight:160,imageWidth:192,heading:"Couldn't load activity",subtext:"Check your connection and try again.",cta:{label:"Retry",onPress:()=>console.log("retry")}}},p=s.create({decorator:{flex:1,height:600,backgroundColor:i.bg0}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    image: emptyImage,
    imageHeight: 160,
    imageWidth: 192,
    heading: "No activity yet",
    subtext: "Your swaps will appear here once you make one."
  }
}`,...e.parameters?.docs?.source},description:{story:"First-time user — no transactions yet.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    image: errorImage,
    imageHeight: 160,
    imageWidth: 192,
    heading: "Couldn't load activity",
    subtext: "Check your connection and try again.",
    cta: {
      label: "Retry",
      onPress: () => console.log("retry")
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Fetch failed — show retry CTA.",...t.parameters?.docs?.description}}};const w=["Empty","Error"];export{e as Empty,t as Error,w as __namedExportsOrder,k as default};
