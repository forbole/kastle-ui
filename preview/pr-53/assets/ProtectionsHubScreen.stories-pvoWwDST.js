import{j as o,s as l,a as c,V as u,b as m}from"./theme-BqYMy_pQ.js";import{P as g}from"./ProtectionTypeCard-kuwIOAVM.js";import{F as y}from"./index-B0EZDTTD.js";import{u as b}from"./index-BucTO3Dp.js";import"./iframe-DyX1_DgY.js";import"./preload-helper-Zf8nSx-t.js";import"./StatusPill-BYuE-gY2.js";import"./clock-fading-D38eyxTK.js";import"./createLucideIcon-DvNJsJek.js";import"./registry-BNXumi8c.js";import"./index-BjH-MALJ.js";import"./circle-x-C2sd9K0i.js";import"./circle-check-CtrKR7Lg.js";import"./index-CFW6ixWj.js";import"./index-cChUFaRk.js";import"./extends-CF3RwP-h.js";import"./chevron-right-CzvFIyiE.js";import"./index-D6VibFAM.js";const d=({cards:n})=>o.jsx(y,{contentContainerStyle:w.body,showsVerticalScrollIndicator:!1,children:n.map((i,p)=>o.jsx(g,{...i},p))}),w=l.create({body:{paddingHorizontal:c.s5,paddingVertical:c.s4,gap:c.s2}});d.__docgenInfo={description:`Body-only Protections hub: a stack of ProtectionTypeCards. Header bar +
bottom nav live in kastle-mobile (去頭去尾). Pure — data via props.`,methods:[],displayName:"ProtectionsHubScreen",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"ProtectionTypeCardProps"}],raw:"ProtectionTypeCardProps[]"},description:'Protection type cards — Vault (active) + Allowance / Legacy ("Soon").'}}};const e=[{title:"Vault",description:"Undo theft. Withdrawals wait out a delay you set, so you have time to clawback and send funds to your recovery address if something looks wrong.",status:"active",ctaLabel:"Set up",onPress:()=>{},onPressCta:()=>{}},{title:"Allowance",description:"Daily spend limits on your everyday balance.",status:"soon"},{title:"Legacy",description:"Pass your KAS on if you ever go inactive.",status:"soon"}],O={title:"Protections/Screens/ProtectionsHubScreen",component:d,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},layout:"fullscreen"},decorators:[n=>{const{height:i}=b();return o.jsx(u,{style:[h.decorator,{height:i}],children:o.jsx(n,{})})}]},t={args:{cards:e}},a={args:{cards:[{...e[0],pill:{label:"Locked",status:"success"},ctaLabel:void 0},...e.slice(1)]}},s={args:{cards:[{...e[0],pill:{label:"1 vault withdrawing",status:"pending"},ctaLabel:void 0},...e.slice(1)]}},r={args:{cards:[{...e[0],pill:{label:"2 vaults withdrawing",status:"pending"},ctaLabel:void 0},...e.slice(1)]}},h=l.create({decorator:{backgroundColor:m.bg0}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    cards: CARDS
  }
}`,...t.parameters?.docs?.source},description:{story:`No vault yet (Figma 12744:292828) — the Vault card sells the feature:
full caption + Set up.`,...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Vaults exist and all are locked — status pill, no CTA (Figma 13385:419530).",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"One vault counting down.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Several at once — the label pluralises.",...r.parameters?.docs?.description}}};const _=["NoVaultYet","AllLocked","OneWithdrawing","TwoWithdrawing"];export{a as AllLocked,t as NoVaultYet,s as OneWithdrawing,r as TwoWithdrawing,_ as __namedExportsOrder,O as default};
