import{p as d,N as l}from"./NotificationBanner-CZ_BCztJ.js";import{d as s,j as t,V as p,s as m,a as i,b as h}from"./theme-CYzR7QY_.js";import{S as a}from"./shield-Bkxb-xLe.js";import{S as g}from"./sparkles-cWUl9Gbe.js";import"./LinkButton-Cx6D7eWx.js";import"./iframe-CjwuzOz5.js";import"./preload-helper-Zf8nSx-t.js";import"./index-0_vQxOdj.js";import"./extends-CF3RwP-h.js";import"./index-Cz_8FiFD.js";import"./x-D5ntAe-X.js";import"./createLucideIcon-BWxZFN1U.js";import"./registry-BNXumi8c.js";import"./index-BXwTTTK-.js";import"./index-BFPHsprA.js";import"./index-DL-NNYlp.js";import"./Image-BQiZUSwq.js";import"./NativeEventEmitter-DTLhOJvD.js";import"./EventEmitter-DNVZYx7c.js";const n=d,W={title:"Components/NotificationBanner",component:l,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{onPress:()=>{},onPressCta:()=>{}},decorators:[c=>t.jsx(p,{style:u.decorator,children:t.jsx(c,{})})]},o={args:{title:"Protections 🆕",description:"Delay your withdrawals. Recover your funds if something looks wrong.",icon:t.jsx(a,{size:18,color:s.white,strokeWidth:2}),ctaLabel:"Set up now",image:n,art:"bleedRight",borderColor:s.primary,onPressDismiss:()=>{}}},e={args:{title:"New feature",description:"Swap and bridge across chains right inside your wallet.",icon:t.jsx(g,{size:18,color:s.white,strokeWidth:2}),ctaLabel:"Try it",art:"cover",onPressDismiss:void 0}},r={args:{title:"Protections 🆕",description:"Delay your withdrawals. Recover your funds if something looks wrong.",icon:t.jsx(a,{size:18,color:s.white,strokeWidth:2}),ctaLabel:"Set up now",image:n,art:"bleedRight",borderColor:s.primary,onPressDismiss:void 0}},u=m.create({decorator:{flex:1,backgroundColor:h.bg0,paddingHorizontal:i.s5,paddingVertical:i.s6}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"`bleedRight` — a graphic hugs the right and the copy reserves its zone\n(the home Protections banner).",...o.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "New feature",
    description: "Swap and bridge across chains right inside your wallet.",
    icon: <Sparkles size={18} color={colors.white} strokeWidth={2} />,
    ctaLabel: "Try it",
    art: "cover",
    // undefined suppresses Storybook's auto-mocked on* action
    onPressDismiss: undefined
  }
}`,...e.parameters?.docs?.source},description:{story:"`cover` — a faded full-bleed image, copy runs full width (explore banners).",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"No dismiss — the × is a toggle; omit the handler to hide it.",...r.parameters?.docs?.description}}};const B=["BleedRight","Cover","NoDismiss"];export{o as BleedRight,e as Cover,r as NoDismiss,B as __namedExportsOrder,W as default};
