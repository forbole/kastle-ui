import{j as p,V as y,s as v,a as l,b as h}from"./theme-CDDAum2J.js";import{P as m}from"./ProtectionTypeCard-C_qQc_ib.js";import"./iframe-BxfHI4vY.js";import"./preload-helper-Zf8nSx-t.js";import"./StatusPill-Dub2JqPN.js";import"./undo-2-CU2gv9yB.js";import"./createLucideIcon-B_59d7vS.js";import"./registry-BNXumi8c.js";import"./index-DVXQIxiV.js";import"./circle-x-BN_oOnav.js";import"./circle-check-C2nt_1V7.js";import"./Spinner-XiV4OZ2g.js";import"./Animated-Bo8hT9Ai.js";import"./extends-CF3RwP-h.js";import"./index-CyRt7i1c.js";import"./index-BelhNlRa.js";import"./index-yFwTT9Ez.js";import"./NativeEventEmitter-Ddlet7B_.js";import"./index-Bfzz9Suu.js";import"./loader-circle-DJFM5dyy.js";import"./index-BtM_YAzl.js";import"./chevron-right-fp1yDu6v.js";import"./info-B_fx1-Si.js";import"./circle-alert-Ducc6jiw.js";const z={title:"Protections/Components/ProtectionTypeCard",component:m,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{onPress:()=>{},onPressCta:()=>{}},decorators:[c=>p.jsx(y,{style:S.decorator,children:p.jsx(c,{})})]},i={title:"Vault",description:"Undo theft. Withdrawals wait out a delay you set, so you have time to clawback and send funds to your recovery address if something looks wrong."},e={args:{...i,status:"active",ctaLabel:"Set up",onFindVault:()=>{}}},u=["Checking your addresses","Looking for vault markers","Reading vault details","Confirming the vault on-chain","Getting the latest balance"],t={args:{...i,status:"active",ctaLabel:"Set up",step:1},argTypes:{step:{control:{type:"range",min:1,max:5,step:1}}},render:({step:c,...g})=>{const d=Math.min(Math.max(c??1,1),u.length);return p.jsx(m,{...g,discovery:{title:"Finding your vaults",step:d,stepLabel:u[d-1]}})}},s={args:{...i,status:"active",ctaLabel:"Set up",discoveryPaused:{title:"Finding your vaults",step:2,totalSteps:5}}},a={args:{...i,status:"active",ctaLabel:"Set up",notFoundResult:{}}},o={args:{...i,status:"active",ctaLabel:"Set up",discoveryFailed:{}}},r={args:{title:"Allowance",description:"Daily spend limits on your everyday balance.",status:"soon"}},n={args:{title:"Legacy",description:"Pass your KAS on if you ever go inactive.",status:"soon"}},S=v.create({decorator:{flex:1,backgroundColor:h.bg0,paddingHorizontal:l.s5,paddingVertical:l.s6}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...vaultCopy,
    status: "active",
    ctaLabel: "Set up",
    onFindVault: () => {}
  }
}`,...e.parameters?.docs?.source},description:{story:`Vault — active, before any scan has run (Figma 14889:414383): the "Set
up" CTA plus the "Set one up before? Find it now" link. The link drops
once a scan has happened, found or not.`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...vaultCopy,
    status: "active",
    ctaLabel: "Set up",
    step: 1
  } as FindingArgs,
  argTypes: {
    step: {
      control: {
        type: "range",
        min: 1,
        max: 5,
        step: 1
      }
    }
  },
  render: ({
    step,
    ...args
  }) => {
    const s = Math.min(Math.max(step ?? 1, 1), FINDING_STEPS.length);
    return <ProtectionTypeCard {...args} discovery={{
      title: "Finding your vaults",
      step: s,
      stepLabel: FINDING_STEPS[s - 1]
    }} />;
  }
}`,...t.parameters?.docs?.source},description:{story:`Finding — background discovery in progress (Figma 14882:407025). The bar
fill is driven by \`step / totalSteps\` in code — the Figma frames all show
the same ~50% fill regardless of step; Nicole approved fixing it here.
Use the \`step\` control (1–5) to preview every step on this one story
instead of five near-identical stories. The fill glides between steps
(AnimatedProgressFill), so dragging the control shows the motion too.

Data wiring: the \`step\` control IS the real prop — pass
\`discovery={{ title, step, stepLabel }}\` from the discovery pipeline
(1 = checking addresses … 5 = latest balance). Step labels: FINDING_STEPS.`,...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...vaultCopy,
    status: "active",
    ctaLabel: "Set up",
    discoveryPaused: {
      title: "Finding your vaults",
      step: 2,
      totalSteps: 5
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Paused / auto-retrying (Figma 14910:416365, "error" variant) — the
progress bar stays visible; the step row keeps the spinner (same as
Finding) + a stalled label. No button — it retries on its own.
⚠️ Icon deviates from Figma 14910:416365 (which draws a red
alert-circle) per Nicole 2026-09-29 — Paused is not a warning or error,
so it stays muted. Figma is to be updated.`,...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...vaultCopy,
    status: "active",
    ctaLabel: "Set up",
    notFoundResult: {}
  }
}`,...a.parameters?.docs?.source},description:{story:"Not found — Figma 14882:410159 exactly: description, Set up, one\ncentred icon+message row below it, no divider, no Find it now (Figma\nhas none in this frame). Icon is Lucide `Info` in `colors.textSecondary`\n— Nicole's call, overrides Figma's own red icon binding.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...vaultCopy,
    status: "active",
    ctaLabel: "Set up",
    discoveryFailed: {}
  }
}`,...o.parameters?.docs?.source},description:{story:`Failed (Figma 14910:416345, NEW) — Set up stays visible, a red
alert-circle + message row sits below it. No link — Figma draws none
(an earlier round of this story added a "Try again" link; Nicole's
frame has no retry affordance, so it was removed).`,...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Allowance",
    description: "Daily spend limits on your everyday balance.",
    status: "soon"
  }
}`,...r.parameters?.docs?.source},description:{story:"Allowance — coming soon.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Legacy",
    description: "Pass your KAS on if you ever go inactive.",
    status: "soon"
  }
}`,...n.parameters?.docs?.source},description:{story:"Legacy — coming soon.",...n.parameters?.docs?.description}}};const H=["Active","Finding","Paused","NotFound","Failed","SoonAllowance","SoonLegacy"];export{e as Active,o as Failed,t as Finding,a as NotFound,s as Paused,r as SoonAllowance,n as SoonLegacy,H as __namedExportsOrder,z as default};
