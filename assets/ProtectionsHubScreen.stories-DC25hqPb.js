import{j as o,s as l,a as c,V as u,b as m}from"./theme-CmBBLDAF.js";import{P as g}from"./ProtectionTypeCard-D2WDcXMk.js";import{F as y}from"./index-CTXIk2iS.js";import{u as b}from"./index-CgdPi1lu.js";import"./iframe-D2lw4O5V.js";import"./preload-helper-Zf8nSx-t.js";import"./StatusPill-s10VirAx.js";import"./undo-2-Hh9HWZW7.js";import"./createLucideIcon-CctySh2A.js";import"./registry-BNXumi8c.js";import"./index-Cno7ZKKB.js";import"./circle-x-ivHtxa8v.js";import"./circle-check-gj1rzCE2.js";import"./index-DUuqBE2O.js";import"./extends-CF3RwP-h.js";import"./chevron-right-CAA3vszo.js";import"./index-NhR-Mmwv.js";const d=({cards:n})=>o.jsx(y,{contentContainerStyle:w.body,showsVerticalScrollIndicator:!1,children:n.map((i,p)=>o.jsx(g,{...i},p))}),w=l.create({body:{paddingHorizontal:c.s5,paddingVertical:c.s4,gap:c.s2}});d.__docgenInfo={description:`Body-only Protections hub: a stack of ProtectionTypeCards. Header bar +
bottom nav live in kastle-mobile (去頭去尾). Pure — data via props.`,methods:[],displayName:"ProtectionsHubScreen",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"ProtectionTypeCardProps"}],raw:"ProtectionTypeCardProps[]"},description:'Protection type cards — Vault (active) + Allowance / Legacy ("Soon").'}}};const e=[{title:"Vault",description:"Undo theft. Withdrawals wait out a delay you set, so you have time to clawback and send funds to your recovery address if something looks wrong.",status:"active",ctaLabel:"Set up",onPress:()=>{},onPressCta:()=>{}},{title:"Allowance",description:"Daily spend limits on your everyday balance.",status:"soon"},{title:"Legacy",description:"Pass your KAS on if you ever go inactive.",status:"soon"}],N={title:"Protections/Screens/ProtectionsHubScreen",component:d,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},layout:"fullscreen"},decorators:[n=>{const{height:i}=b();return o.jsx(u,{style:[h.decorator,{height:i}],children:o.jsx(n,{})})}]},t={args:{cards:e}},a={args:{cards:[{...e[0],pill:{label:"Locked",status:"success"},ctaLabel:void 0},...e.slice(1)]}},s={args:{cards:[{...e[0],pill:{label:"1 vault withdrawing",status:"pending"},ctaLabel:void 0},...e.slice(1)]}},r={args:{cards:[{...e[0],pill:{label:"2 vaults withdrawing",status:"pending"},ctaLabel:void 0},...e.slice(1)]}},h=l.create({decorator:{backgroundColor:m.bg0}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Several at once — the label pluralises.",...r.parameters?.docs?.description}}};const O=["NoVaultYet","AllLocked","OneWithdrawing","TwoWithdrawing"];export{a as AllLocked,t as NoVaultYet,s as OneWithdrawing,r as TwoWithdrawing,O as __namedExportsOrder,N as default};
