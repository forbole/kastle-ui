import{p as d,N as l}from"./NotificationBanner-DxYlqzzA.js";import{d as s,j as t,V as p,s as m,a as i,b as h}from"./theme-wP9RlZRM.js";import{S as a}from"./LinkButton-CgqXKWkB.js";import{S as g}from"./sparkles-D09w4TC8.js";import"./index-B-t7h6kb.js";import"./iframe-CFm_rjMm.js";import"./preload-helper-Zf8nSx-t.js";import"./index-B_Scdc6q.js";import"./extends-CF3RwP-h.js";import"./Image-CzhEyamJ.js";import"./NativeEventEmitter-D1_kvAjs.js";import"./index-m0Q4tz4Z.js";import"./registry-BNXumi8c.js";import"./index-B-5JEVnn.js";import"./createLucideIcon-qAR8mMf4.js";const n=d,T={title:"Components/NotificationBanner",component:l,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{onPress:()=>{},onPressCta:()=>{}},decorators:[c=>t.jsx(p,{style:u.decorator,children:t.jsx(c,{})})]},e={args:{title:"Protections 🆕",description:"Delay your withdrawals. Recover your funds if something looks wrong.",icon:t.jsx(a,{size:18,color:s.white,strokeWidth:2}),ctaLabel:"Set up now",image:n,art:"bleedRight",borderColor:s.primary,onPressDismiss:()=>{}}},o={args:{title:"New feature",description:"Swap and bridge across chains right inside your wallet.",icon:t.jsx(g,{size:18,color:s.white,strokeWidth:2}),ctaLabel:"Try it",art:"cover",onPressDismiss:void 0}},r={args:{title:"Protections 🆕",description:"Delay your withdrawals. Recover your funds if something looks wrong.",icon:t.jsx(a,{size:18,color:s.white,strokeWidth:2}),ctaLabel:"Set up now",image:n,art:"bleedRight",borderColor:s.primary,onPressDismiss:void 0}},u=m.create({decorator:{flex:1,backgroundColor:h.bg0,paddingHorizontal:i.s5,paddingVertical:i.s6}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Protections 🆕",
    description: "Delay your withdrawals. Recover your funds if something looks wrong.",
    icon: <Shield size={18} color={colors.white} strokeWidth={2} />,
    ctaLabel: "Set up now",
    image: VAULT_ART,
    art: "bleedRight",
    borderColor: colors.primary,
    onPressDismiss: () => {}
  }
}`,...e.parameters?.docs?.source},description:{story:"`bleedRight` — a graphic hugs the right and the copy reserves its zone\n(the home Protections banner).",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "New feature",
    description: "Swap and bridge across chains right inside your wallet.",
    icon: <Sparkles size={18} color={colors.white} strokeWidth={2} />,
    ctaLabel: "Try it",
    art: "cover",
    // undefined suppresses Storybook's auto-mocked on* action
    onPressDismiss: undefined
  }
}`,...o.parameters?.docs?.source},description:{story:"`cover` — a faded full-bleed image, copy runs full width (explore banners).",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Protections 🆕",
    description: "Delay your withdrawals. Recover your funds if something looks wrong.",
    icon: <Shield size={18} color={colors.white} strokeWidth={2} />,
    ctaLabel: "Set up now",
    image: VAULT_ART,
    art: "bleedRight",
    borderColor: colors.primary,
    onPressDismiss: undefined
  }
}`,...r.parameters?.docs?.source},description:{story:"No dismiss — the × is a toggle; omit the handler to hide it.",...r.parameters?.docs?.description}}};const j=["BleedRight","Cover","NoDismiss"];export{e as BleedRight,o as Cover,r as NoDismiss,j as __namedExportsOrder,T as default};
