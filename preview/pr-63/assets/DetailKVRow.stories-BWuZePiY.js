import{j as l,V as d,s as c,b as p}from"./theme-8QOGWT04.js";import{B as e,D as m}from"./bridgeExitCopy-B3YAgKf8.js";import{S as i}from"./StatusPill-DPxSG2UB.js";import"./iframe-zWxnyr7p.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CJru1tUL.js";import"./triangle-alert-DGK1-s2l.js";import"./createLucideIcon-Ddhol5HT.js";import"./registry-BNXumi8c.js";import"./index-BDF7tMil.js";import"./external-link-BMgEOEWL.js";import"./index-DR7f6Xxm.js";import"./extends-CF3RwP-h.js";import"./undo-2-dfEpI37Q.js";import"./circle-x-3r3jcxHz.js";import"./circle-check-BV-6WOFA.js";const V={title:"Swap-bridge-activity/Components/DetailKVRow",component:m,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},actions:{argTypesRegex:null}},decorators:[u=>l.jsx(d,{style:b.decorator,children:l.jsx(u,{})})]},t={args:{label:"Rate",value:"1 KAS ≈ 0.032799 NACHO"}},a={args:{label:"Source TX",value:"View",onPressValue:()=>console.log("open explorer")}},r={args:{label:"Provider",value:"Kurve Bridge (Kaspa ↔ Ethereum Canonical Route)"}},s={args:{label:"Status",value:e.confirmed,valueNode:l.jsx(i,{status:"pending",label:e.confirmed}),valueSubtext:e.confirmedSubtext}},o={args:{label:"Status",value:e.submitted,valueNode:l.jsx(i,{status:"pending",label:e.submitted}),valueSubtext:e.stuckSubtext,valueSubtextTone:"warning"}},n={args:{label:"Status",value:"Refunded",valueNode:l.jsx(i,{status:"refunded"}),valueSubtext:"Returned in full, fee included"}},b=c.create({decorator:{backgroundColor:p.bg100,padding:20}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Rate",
    value: "1 KAS ≈ 0.032799 NACHO"
  }
}`,...t.parameters?.docs?.source},description:{story:"Neutral label / value",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Source TX",
    value: "View",
    onPressValue: () => console.log("open explorer")
  }
}`,...a.parameters?.docs?.source},description:{story:"Explorer link — the whole row is tappable and gets an external-link icon.\nThis is the ONLY story that should render as a link; it passes `onPressValue`\nexplicitly. See the `actions` note in `meta.parameters` above.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Provider",
    value: "Kurve Bridge (Kaspa ↔ Ethereum Canonical Route)"
  }
}`,...r.parameters?.docs?.source},description:{story:"Long value — stays on one line and truncates with a tail ellipsis.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Status",
    value: BRIDGE_EXIT_COPY.confirmed,
    valueNode: <StatusPill status="pending" label={BRIDGE_EXIT_COPY.confirmed} />,
    valueSubtext: BRIDGE_EXIT_COPY.confirmedSubtext
  }
}`,...s.parameters?.docs?.source},description:{story:"Status — pill in place of the value text",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Status",
    value: BRIDGE_EXIT_COPY.submitted,
    valueNode: <StatusPill status="pending" label={BRIDGE_EXIT_COPY.submitted} />,
    valueSubtext: BRIDGE_EXIT_COPY.stuckSubtext,
    valueSubtextTone: "warning"
  }
}`,...o.parameters?.docs?.source},description:{story:`Status, past 48h — the line under the pill says why a withdraw is offered.
Uses \`valueSubtextTone="warning"\` (amber + ⚠️), matching
\`ActivityDetailSheet → BridgeRefundable\`. Nicole's call 2026-08-14: amber is the
correct rendering, the plain grey line this story used to show did not exist
anywhere in the product.`,...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Status",
    value: "Refunded",
    valueNode: <StatusPill status="refunded" />,
    valueSubtext: "Returned in full, fee included"
  }
}`,...n.parameters?.docs?.source},description:{story:"Status — refunded in full",...n.parameters?.docs?.description}}};const k=["Default","ExternalLink","LongValue","StatusConfirmed","StatusWithdrawable","StatusRefunded"];export{t as Default,a as ExternalLink,r as LongValue,s as StatusConfirmed,n as StatusRefunded,o as StatusWithdrawable,k as __namedExportsOrder,V as default};
