import{j as i,s as p,a as l,V as g,b as y}from"./theme-CDDAum2J.js";import{P as h}from"./ProtectionTypeCard-C_qQc_ib.js";import{F as w}from"./index-BelhNlRa.js";import{u as b}from"./index-BrDrWlAq.js";import"./iframe-BxfHI4vY.js";import"./preload-helper-Zf8nSx-t.js";import"./StatusPill-Dub2JqPN.js";import"./undo-2-CU2gv9yB.js";import"./createLucideIcon-B_59d7vS.js";import"./registry-BNXumi8c.js";import"./index-DVXQIxiV.js";import"./circle-x-BN_oOnav.js";import"./circle-check-C2nt_1V7.js";import"./Spinner-XiV4OZ2g.js";import"./Animated-Bo8hT9Ai.js";import"./extends-CF3RwP-h.js";import"./index-CyRt7i1c.js";import"./NativeEventEmitter-Ddlet7B_.js";import"./index-Bfzz9Suu.js";import"./loader-circle-DJFM5dyy.js";import"./index-BtM_YAzl.js";import"./chevron-right-fp1yDu6v.js";import"./info-B_fx1-Si.js";import"./circle-alert-Ducc6jiw.js";import"./index-yFwTT9Ez.js";const u=({cards:c})=>i.jsx(w,{contentContainerStyle:v.body,showsVerticalScrollIndicator:!1,children:c.map((d,m)=>i.jsx(h,{...d},m))}),v=p.create({body:{paddingHorizontal:l.s5,paddingVertical:l.s4,gap:l.s2}});u.__docgenInfo={description:`Body-only Protections hub: a stack of ProtectionTypeCards. Header bar +
bottom nav live in kastle-mobile (去頭去尾). Pure — data via props.`,methods:[],displayName:"ProtectionsHubScreen",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"ProtectionTypeCardProps"}],raw:"ProtectionTypeCardProps[]"},description:'Protection type cards — Vault (active) + Allowance / Legacy ("Soon").'}}};const e=[{title:"Vault",description:"Undo theft. Withdrawals wait out a delay you set, so you have time to clawback and send funds to your recovery address if something looks wrong.",status:"active",ctaLabel:"Set up",onPress:()=>{},onPressCta:()=>{}},{title:"Allowance",description:"Daily spend limits on your everyday balance.",status:"soon"},{title:"Legacy",description:"Pass your KAS on if you ever go inactive.",status:"soon"}],M={title:"Protections/Screens/ProtectionsHubScreen",component:u,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},layout:"fullscreen"},decorators:[c=>{const{height:d}=b();return i.jsx(g,{style:[S.decorator,{height:d}],children:i.jsx(c,{})})}]},s={args:{cards:[{...e[0],onFindVault:()=>{}},...e.slice(1)]}},t={args:{cards:[{...e[0],discovery:{title:"Finding your vaults",step:1,stepLabel:"Checking your addresses"}},...e.slice(1)]}},r={args:{cards:[{...e[0],notFoundResult:{}},...e.slice(1)]}},o={args:{cards:[{...e[0],pill:{label:"Locked",status:"success"},ctaLabel:void 0},...e.slice(1)]}},a={args:{cards:[{...e[0],pill:{label:"1 vault withdrawing",status:"pending"},ctaLabel:void 0},...e.slice(1)]}},n={args:{cards:[{...e[0],pill:{label:"2 vaults withdrawing",status:"pending"},ctaLabel:void 0},...e.slice(1)]}},S=p.create({decorator:{backgroundColor:y.bg0}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    cards: [{
      ...CARDS[0],
      onFindVault: () => {}
    }, ...CARDS.slice(1)]
  }
}`,...s.parameters?.docs?.source},description:{story:`No vault yet, never scanned (Figma 14889:414383) — the Vault card sells
the feature: full caption + Set up, plus the "Find it now" link for
someone who thinks they already have one.`,...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    cards: [{
      ...CARDS[0],
      discovery: {
        title: "Finding your vaults",
        step: 1,
        stepLabel: "Checking your addresses"
      }
    }, ...CARDS.slice(1)]
  }
}`,...t.parameters?.docs?.source},description:{story:`Discovery running (Figma 14882:407025), step 1 — Nicole asked for this
composed at hub level too (an earlier round of this file said Finding/
Paused wouldn't be repeated here since they're ProtectionTypeCard's own
stories; this one overrides that call). Paused is still not repeated —
Nicole didn't ask for it here.`,...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    cards: [{
      ...CARDS[0],
      notFoundResult: {}
    }, ...CARDS.slice(1)]
  }
}`,...r.parameters?.docs?.source},description:{story:`Scan finished, no vault found — Figma 14882:410159 exactly: icon +
message below Set up, no divider, no Find it now. The result toast ("no
vault found on this wallet") is app-side (kastle-mobile
useToastMessage), not drawn here.`,...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    cards: [{
      ...CARDS[0],
      pill: {
        label: "Locked",
        status: "success"
      },
      ctaLabel: undefined
    }, ...CARDS.slice(1)]
  }
}`,...o.parameters?.docs?.source},description:{story:"Vaults exist and all are locked — status pill, no CTA (Figma 13385:419530).",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    cards: [{
      ...CARDS[0],
      pill: {
        label: "1 vault withdrawing",
        status: "pending"
      },
      ctaLabel: undefined
    }, ...CARDS.slice(1)]
  }
}`,...a.parameters?.docs?.source},description:{story:"One vault counting down.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    cards: [{
      ...CARDS[0],
      pill: {
        label: "2 vaults withdrawing",
        status: "pending"
      },
      ctaLabel: undefined
    }, ...CARDS.slice(1)]
  }
}`,...n.parameters?.docs?.source},description:{story:"Several at once — the label pluralises.",...n.parameters?.docs?.description}}};const U=["NoVaultYet","Finding","NotFound","AllLocked","OneWithdrawing","TwoWithdrawing"];export{o as AllLocked,t as Finding,s as NoVaultYet,r as NotFound,a as OneWithdrawing,n as TwoWithdrawing,U as __namedExportsOrder,M as default};
