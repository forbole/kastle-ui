import{j as e,V as t,b as v,a as n,t as k,s as B}from"./theme-7NxzQjFP.js";import{B as x}from"./Button-p6qWpy5G.js";import{T}from"./index-dwtQSYn0.js";import"./iframe-C4vmSYnN.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DLv7QJWE.js";import"./extends-CF3RwP-h.js";import"./index-C7q-gKfL.js";const I={title:"Components/Button",component:x,parameters:{layout:"fullscreen"},tags:["unverified"],args:{label:"Button",size:"md",disabled:!1,loading:!1,hug:!1},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},label:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"},hug:{control:"boolean"},action:{table:{disable:!0}},variant:{table:{disable:!0}}}},j=["xs","sm","md","lg","xl"],w=[{combo:{action:"primary",variant:"solid"},title:"primary / solid"},{combo:{action:"primary",variant:"text"},title:"primary / text (Figma: Linked)"},{combo:{action:"primary",variant:"transparent"},title:"primary / transparent"},{combo:{action:"primary",variant:"outline"},title:"primary / outline (⚠️ derived, no Figma mockup)"},{combo:{action:"secondary",variant:"outline"},title:"secondary / outline"},{combo:{action:"secondary",variant:"text"},title:"secondary / text (Figma: Linked)"},{combo:{action:"negative",variant:"solid"},title:"negative / solid"}];function f({children:r}){return e.jsx(t,{style:{flexDirection:"row",alignItems:"center",gap:n.s3,flexWrap:"wrap"},children:r})}function C({children:r}){return e.jsx(T,{allowFontScaling:!1,style:{color:k.t600,fontSize:12,marginBottom:n.s1},children:r})}const O=B.create({screen:{flex:1,justifyContent:"center",backgroundColor:v.bg0,paddingHorizontal:n.s5,paddingVertical:n.s6}}),a={decorators:[r=>e.jsx(t,{style:O.screen,children:e.jsx(r,{})})]},p={...a,args:{action:"primary",variant:"solid"}},m={...a,args:{action:"primary",variant:"text"}},u={...a,args:{action:"primary",variant:"transparent"}},g={...a,args:{action:"primary",variant:"outline"}},y={...a,args:{action:"secondary",variant:"outline"}},b={...a,args:{action:"secondary",variant:"text"}},h={...a,args:{action:"negative",variant:"solid"}},s={...a,args:{action:"primary",variant:"solid",disabled:!0}},i={...a,args:{action:"primary",variant:"solid",loading:!0}},c={render:r=>e.jsx(t,{style:{padding:n.s4,backgroundColor:v.bg0},children:e.jsx(t,{style:{width:160},children:e.jsx(x,{...r})})}),args:{action:"primary",variant:"solid",label:"A very long button label that should truncate"}},l={render:()=>e.jsx(t,{style:{gap:n.s6,padding:n.s4,backgroundColor:v.bg0},children:w.map(({combo:r,title:o})=>e.jsxs(t,{style:{gap:n.s2},children:[e.jsx(C,{children:o}),e.jsx(f,{children:j.map(S=>e.jsx(x,{...r,size:S,label:S},S))})]},o))})},d={render:()=>e.jsx(t,{style:{padding:n.s4,backgroundColor:v.bg0},children:e.jsx(f,{children:w.map(({combo:r,title:o})=>e.jsx(x,{...r,size:"lg",label:o},o))})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "solid"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "text"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "transparent"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "outline"
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "secondary",
    variant: "outline"
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "secondary",
    variant: "text"
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "negative",
    variant: "solid"
  }
}`,...h.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "solid",
    disabled: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Disabled state, shown on `primary`/`solid`. Not split per-action — Figma\nconfirms disabled is a uniform opacity/40 overlay across every combo (see\n`styles.disabled` in Button.tsx), so one story plus the `disabled` control\ncovers every combo's disabled look.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "solid",
    loading: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Loading state, shown on `primary`/`solid`. Not split per-action — the\nspinner is always `color={textColor}` (Button.tsx), i.e. it just inherits\nwhatever text colour the combo already uses, so flipping `action` with the\n`loading` control on in the panel already shows every combo's spinner\ncolour without a separate story per combo.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    padding: spacing.s4,
    backgroundColor: background.bg0
  }}>
      <View style={{
      width: 160
    }}>
        <Button {...args} />
      </View>
    </View>,
  args: {
    action: "primary",
    variant: "solid",
    label: "A very long button label that should truncate"
  }
}`,...c.parameters?.docs?.source},description:{story:`Long-label truncation.

The Button sits in a 160-wide container so \`numberOfLines={1}\` has
something to truncate against.

NB: the previous version of this story got the same geometry by passing
\`style={{ width: 160 }}\` straight to Button. The container is the honest
version of the same demo — it is not the fill-width change that made
truncation reachable here, since both versions constrain the width to 160.
What fill-width changed is real layouts: a Button in a column now takes the
container's width without the caller doing anything, so truncation is
reachable there too.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing.s6,
    padding: spacing.s4,
    backgroundColor: background.bg0
  }}>
      {COMBOS.map(({
      combo,
      title
    }) => <View key={title} style={{
      gap: spacing.s2
    }}>
          <SectionLabel>{title}</SectionLabel>
          <Row>
            {SIZES.map(size => <Button key={size} {...combo} size={size} label={size} />)}
          </Row>
        </View>)}
    </View>
}`,...l.parameters?.docs?.source},description:{story:"All 7 built action×variant combinations, each across all 5 sizes.\nThis is the primary state-coverage story: 35 (combo × size) Button\ninstances in the default (unpressed, enabled) state.\n\n`primary`/`outline` is derived (no Figma mockup exists for it) — see the\nDERIVED comment on its COMBO_STYLES entry in Button.tsx for the 3 verified\nsource rules it composes.\n\nNOT included, and never will be: `secondary`/`transparent`. This is not a\ngap — it is not a real variant. kastle-mobile's Gluestack `variant.transparent`\nrule hardcodes background and text colour with no `action` term, so\n`secondary`+`transparent` renders pixel-identical to `primary`+`transparent`.\nSee Button.tsx's file header and PR-DESCRIPTION.md for the citation.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    padding: spacing.s4,
    backgroundColor: background.bg0
  }}>
      <Row>
        {COMBOS.map(({
        combo,
        title
      }) => <Button key={title} {...combo} size="lg" label={title} />)}
      </Row>
    </View>
}`,...d.parameters?.docs?.source},description:{story:`Interactive pressed-state check: press and hold (mouse down) on web preview
to see the pressed background/text colour swap defined in COMBO_STYLES.
There is no static "Pressed" story because press is a transient touch
state, not a prop — this is the same reason \`LinkButton.stories.tsx\`
doesn't have one either.`,...d.parameters?.docs?.description}}};const N=["Primary","PrimaryText","PrimaryTransparent","PrimaryOutline","SecondaryOutline","SecondaryText","NegativeSolid","Disabled","Loading","LongLabel","AllCombosAllSizes","PressAndHoldToPreview"];export{l as AllCombosAllSizes,s as Disabled,i as Loading,c as LongLabel,h as NegativeSolid,d as PressAndHoldToPreview,p as Primary,g as PrimaryOutline,m as PrimaryText,u as PrimaryTransparent,y as SecondaryOutline,b as SecondaryText,N as __namedExportsOrder,I as default};
