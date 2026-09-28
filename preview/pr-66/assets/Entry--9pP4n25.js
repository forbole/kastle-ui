import{a as s,j as e,V as i,t as j,s as c}from"./theme-qo1JknhX.js";import{r}from"./iframe-B_J3Iy1p.js";import{M as A}from"./Menu-BrmCuZ5-.js";import{D as E}from"./index-D5qOe2hC.js";import{M as _}from"./index-CDYvhEJm.js";import{S as k}from"./settings-2-DlOBlk3S.js";import{M as F,a as C}from"./index-ZiMnrdkK.js";const d=18,m=Math.max(0,(44-(s.s2*2+d))/2),g=Math.max(0,(44-(s.s3*2+d))/2),N=({menuItems:b,isOpen:w=!1,onOpenChange:l})=>{const[y,v]=r.useState(!1),t=l!==void 0?w:y,h=r.useRef(null),[o,p]=r.useState(null),u=n=>{l?l(n):v(n)};r.useEffect(()=>{if(!t)return;let n=!1;return h.current?.measureInWindow((M,I,O,S)=>{if(n)return;const T=E.get("window").width;p({top:I+S+s.s2,right:Math.max(0,T-(M+O))})}),()=>{n=!0,p(null)}},[t]);const a=()=>u(!1),x=b.map(n=>({...n,onPress:()=>{n.onPress(),a()}}));return e.jsxs(i,{children:[e.jsx(_,{ref:h,onPress:()=>u(!t),style:f.iconButton,hitSlop:{left:m,right:m,top:g,bottom:g},activeOpacity:.7,accessibilityRole:"button",accessibilityLabel:"More options",accessibilityState:{expanded:t},children:e.jsx(k,{size:d,color:j.t600})}),e.jsx(F,{visible:t&&o!==null,transparent:!0,animationType:"none",onRequestClose:a,children:e.jsxs(i,{style:c.absoluteFillObject,onAccessibilityEscape:a,children:[e.jsx(C,{onPress:a,accessibilityRole:"button",accessibilityLabel:"Close menu",children:e.jsx(i,{style:c.absoluteFillObject})}),o&&e.jsx(i,{style:[f.menuAnchor,{top:o.top,right:o.right}],children:e.jsx(A,{items:x})})]})})]})},f=c.create({iconButton:{paddingHorizontal:s.s2,paddingVertical:s.s3,alignItems:"center",justifyContent:"center"},menuAnchor:{position:"absolute"}});N.__docgenInfo={description:`Entry to Manage Assets — the settings/filter icon that opens a menu.
Figma (\`BdTDUVIHEeOjdlHSPij0xi\`, section \`4851:124671\` "entry", frame
\`4854:180388\`, icon node \`...1854:59135;4803:104347\` "settings-2",
itself named **"more options"** in Figma — hence the accessibility
label below; menu frame \`4804:175256\`). Split out (round 16,
2026-09-28, Nicole's placement rule — "if it's a bigger feature, it
gets its own section") from the combined \`ManageAssetsEntry\` built
round 15, which also held the Assets/NFT/Name/Text tab row; that row
is Home-scoped and now lives at \`Home/AssetSwitchingTab\`. This icon
opens the bigger "Manage Assets" feature, so it lives under
\`Home/ManageAssets/\` next to \`ManageAssetsPage\`.

Icon: lucide \`Settings2\` — Figma's own layer is literally named
"settings-2", a direct match to the lucide export name. 18×18 (Figma
exact). Colour \`typography.t600\` is a visual-match inference (Figma
returns the icon as a pre-rendered SVG asset reference with no
attached fill/variable — neither \`get_design_context\` nor
\`get_variable_defs\` resolve it), not an independently confirmed token.

Menu content: shared \`Menu\` component (\`src/components/Menu\`) —
checked \`explore/ExploreUrlBar/ExploreUrlBarMenu\` first per
instructions, did not reuse/modify it (see \`Menu.tsx\`'s own doc
comment for why). Copy is "Manage assets" here, matching an earlier
round's explicit instruction — NOT "Manage account", which is what
Figma's own popover frame (\`4804:175256\`) actually renders; that
mismatch was flagged in round 15 and resolved in the caller's favour,
not silently — the host supplies \`menuItems\`, so this component has no
opinion on the text itself, it only renders whatever labels it's given.

Open/close (round 17, 2026-09-28 — reviewer FAIL on the round-16
version, replaced): a transparent RN \`Modal\`, same base pattern
\`ActionSheet.tsx\` uses (\`Modal transparent\` + a \`TouchableWithoutFeedback\`
backdrop). Round 16 avoided \`Modal\` to keep the menu a normal sibling
of the icon for simple relative anchoring — that traded away real
defects: on web the giant \`Dimensions\`-sized backdrop widened the
whole document (393px → 1110px, visible scrollbars/layout shift), and
on native, touches outside the wrapping view's own bounds are never
delivered to it at all (React Native does not hit-test past a view's
layout box the way web's overflow-visible does) and \`zIndex\` only
orders **siblings** — neither the backdrop nor the menu could reliably
sit above whatever renders after this component in a real screen. A
\`Modal\` renders at the OS window root, sidestepping both problems.

The one thing \`Modal\` costs is anchoring: its content is portalled out
of this component's view tree, so \`position: "absolute", top: "100%"\`
(round 16's trick) no longer lands under the icon. Recovered with
\`measureInWindow\` — the icon's \`View\` ref is measured **fresh on every
open** (not once on mount, since the icon's on-screen position can
change between opens, e.g. after a keyboard, orientation change, or a
scroll), and the menu is positioned \`right = icon's right edge\`,
\`top = icon's bottom edge + spacing.s2\` (8px) — same numbers round
16's static anchoring used, now computed instead of assumed.

The measurement runs in an effect keyed on \`open\`, not in the icon's
press handler, so a host that opens it via controlled \`isOpen\` (before
the icon was ever tapped) still gets a positioned menu. The \`Modal\`
itself stays hidden until that measurement lands — it is never shown
without its menu, which would be an invisible full-screen overlay
swallowing the next tap.`,methods:[],displayName:"Entry",props:{menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu rows shown on tap — same shape as the shared `Menu`'s own `items`."},isOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled-or-internal, same pattern as `SendSelectTokenPage`'s\n`searchQuery`/`onSearchChange`: pass both `isOpen` + `onOpenChange`\nto control it, or neither to let this component manage its own\nopen/closed state.",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};export{N as E};
