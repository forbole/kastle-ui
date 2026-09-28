import{j as e,V as a,s as d,t as A,a as o}from"./theme-D5QllvKu.js";import{S as O}from"./Segmented-BhjIG1Dp.js";import{r as c}from"./iframe-Dx-8gkZT.js";import{M as N}from"./Menu-DCKWIXi3.js";import{M as j}from"./index-BHCCxso1.js";import{S as H}from"./settings-2-BQJozSQw.js";import{M as F,a as k}from"./index-BSJGRPGt.js";import{D as E}from"./index-C5KS9oMG.js";const _=({tabs:i,activeTab:r,onTabChange:t})=>e.jsx(a,{style:C.wrap,children:e.jsx(O,{options:i,value:r,onChange:t})}),C=d.create({wrap:{alignSelf:"flex-start"}});_.__docgenInfo={description:'Home\'s Assets/NFT/Name/Text tab row — Figma (`BdTDUVIHEeOjdlHSPij0xi`,\nsection `4851:124671` "entry", frame `4854:180388`, node\n`...;1854:59135;9440:242138` "Tab Group"). Belongs to Home per Nicole\'s\nplacement rule (round 16, 2026-09-28): "睇呢個 UI belong to app 入面咩\npage，如果係 under Home，要放 Home" — this tab row switches what Home\'s own\nasset list shows, so it lives under `Home/`, split out from the combined\n`ManageAssetsEntry` component (round 15) which also held the settings\nicon; that icon is a separate, bigger feature (opens Manage Assets) and\nnow lives at `Home/ManageAssets/Entry`.\n\nReuses `Segmented` UNMODIFIED (checked against Figma\'s own tab-pill\nvalues before reuse, see `Segmented.tsx`\'s doc comment for the specific\nnumbers that matched — 4px outer padding, `border.b50` stroke, 36px\npill height, 14px horizontal padding, active pill = 8% white). No fork.\n`tabs`/`activeTab`/`onTabChange` map straight onto `Segmented`\'s own\n`options`/`value`/`onChange`.\n\nWrapped in a `View` with `alignSelf: "flex-start"` (round 18,\n2026-09-28 — Nicole: the pill row was stretching to fill the full\nwidth of whatever column container held it, leaving empty space after\n"Text"; "it should hug the content"). `Segmented` itself has no width/\nflex/`alignSelf` of its own (checked its styles again before touching\nanything — `outer` is plain padding + border, no forced width) — the\nstretch came from this component rendering `Segmented` as the sole\nchild of a plain-column flex parent, whose default `alignItems:\n"stretch"` was doing it. Fixed here, in the consumer that has the\nproblem, not in the shared `Segmented`, which stays untouched.',methods:[],displayName:"AssetSwitchingTab",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentedOption"}],raw:"AssetSwitchingTabOption[]"},description:"Assets / NFT / Name / Text — passed straight through to `Segmented`'s own `options`."},activeTab:{required:!0,tsType:{name:"string"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const h=18,u=Math.max(0,(44-(o.s2*2+h))/2),g=Math.max(0,(44-(o.s3*2+h))/2),P=({menuItems:i,isOpen:r=!1,onOpenChange:t})=>{const[w,b]=c.useState(!1),p=t!==void 0?r:w,m=c.useRef(null),[l,y]=c.useState(null),s=n=>{t?t(n):b(n)},v=()=>{if(p){s(!1);return}m.current?.measureInWindow((n,M,S,T)=>{const I=E.get("window").width;y({top:M+T+o.s2,right:Math.max(0,I-(n+S))}),s(!0)})},x=i.map(n=>({...n,onPress:()=>{n.onPress(),s(!1)}}));return e.jsxs(a,{children:[e.jsx(j,{ref:m,onPress:v,style:f.iconButton,hitSlop:{left:u,right:u,top:g,bottom:g},activeOpacity:.7,accessibilityRole:"button",accessibilityLabel:"More options",children:e.jsx(H,{size:h,color:A.t600})}),e.jsxs(F,{visible:p,transparent:!0,animationType:"none",onRequestClose:()=>s(!1),children:[e.jsx(k,{onPress:()=>s(!1),children:e.jsx(a,{style:d.absoluteFillObject})}),l&&e.jsx(a,{style:[f.menuAnchor,{top:l.top,right:l.right}],children:e.jsx(N,{items:x})})]})]})},f=d.create({iconButton:{paddingHorizontal:o.s2,paddingVertical:o.s3,alignItems:"center",justifyContent:"center"},menuAnchor:{position:"absolute"}});P.__docgenInfo={description:`Entry to Manage Assets — the settings/filter icon that opens a menu.
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
16's static anchoring used, now computed instead of assumed.`,methods:[],displayName:"Entry",props:{menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu rows shown on tap — same shape as the shared `Menu`'s own `items`."},isOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled-or-internal, same pattern as `SendSelectTokenPage`'s\n`searchQuery`/`onSearchChange`: pass both `isOpen` + `onOpenChange`\nto control it, or neither to let this component manage its own\nopen/closed state.",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};export{_ as A,P as E};
