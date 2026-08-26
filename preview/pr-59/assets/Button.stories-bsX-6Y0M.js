import{c as l,t as o,e as H,d as h,p as i,f as M,w as N,a as e,g as p,j as t,l as J,h as Q,i as X,s as _,o as ee,V as c,b as R}from"./theme-BQPMGyA0.js";import{r as te}from"./iframe-DWuhBMh9.js";import{M as re}from"./index-zxtS2_3A.js";import{A as oe}from"./index-CQovHtgI.js";import{T as F}from"./index-DuIDIdAw.js";import"./preload-helper-Zf8nSx-t.js";import"./extends-CF3RwP-h.js";function ae(r,n){return`${r}-${n}`}const W={xs:{height:e.s8,paddingHorizontal:e.s3_5,gap:e.s2,fontSize:p.xs},sm:{height:e.s9,paddingHorizontal:e.s4,gap:e.s2,fontSize:p.sm},md:{height:e.s10,paddingHorizontal:e.s5,gap:e.s2,fontSize:p.md},lg:{height:e.s12,paddingHorizontal:e.s6,gap:e.s3,fontSize:p.lg},xl:{height:e.s16,paddingHorizontal:e.s7,gap:e.s3,fontSize:p.lg}},ne={"negative-solid":{md:{height:e.s11}}},se={"primary-solid":{backgroundColor:i.p500,pressedBackgroundColor:i.p600,textColor:o.t800,pressedTextColor:o.t800,borderRadius:l.full},"primary-text":{textColor:i.p500,pressedTextColor:i.p700,borderRadius:l.full},"primary-transparent":{backgroundColor:N["5%"],pressedBackgroundColor:N["10%"],textColor:o.t800,pressedTextColor:o.t950,borderColor:M.b200,pressedBorderColor:M.b200,borderWidth:h.bw1,borderRadius:l["2xl"]},"primary-outline":{textColor:i.p500,pressedTextColor:i.p700,borderColor:i.p500,pressedBorderColor:i.p700,borderWidth:h.bw1,borderRadius:l.full},"secondary-outline":{textColor:o.t500,pressedTextColor:o.t700,borderColor:o.t500,pressedBorderColor:o.t700,borderWidth:h.bw1,borderRadius:l.full},"secondary-text":{textColor:o.t500,pressedTextColor:o.t700,borderRadius:l.full},"negative-solid":{backgroundColor:H.e500,pressedBackgroundColor:H.e700,textColor:o.t950,pressedTextColor:o.t950,borderRadius:l.full}},f=({action:r,variant:n,label:d,size:j="md",onPress:Y,disabled:L=!1,loading:x=!1,accessibilityLabel:Z,hug:$=!1,style:K})=>{const[V,P]=te.useState(!1),E=ae(r,n),a=se[E],v={...W[j],...ne[E]?.[j]??{}},U=V?a.pressedBackgroundColor??a.backgroundColor:a.backgroundColor,I=V?a.pressedTextColor:a.textColor,A=V?a.pressedBorderColor??a.borderColor:a.borderColor,D=Math.max(0,(44-W[j].height)/2);return t.jsx(re,{hitSlop:{top:D,bottom:D},style:[S.base,{height:v.height,paddingHorizontal:v.paddingHorizontal,gap:v.gap,borderRadius:a.borderRadius,backgroundColor:U??"transparent",borderColor:A,borderWidth:A?a.borderWidth??h.bw1:h.bw0},$&&S.hug,L&&S.disabled,K],activeOpacity:1,onPressIn:()=>P(!0),onPressOut:()=>P(!1),onPress:Y,disabled:L||x,accessibilityRole:"button",accessibilityLabel:Z??d,accessibilityState:{disabled:L||x,busy:x},children:x?t.jsx(oe,{color:I,size:"small"}):t.jsx(F,{allowFontScaling:!1,numberOfLines:1,style:[S.label,{color:I,fontSize:v.fontSize,fontFamily:X[500],fontWeight:Q.medium,letterSpacing:J.normal}],children:d})})},S=_.create({base:{flexDirection:"row",alignItems:"center",justifyContent:"center"},hug:{alignSelf:"flex-start"},disabled:{opacity:ee.o40},label:{textAlign:"center"}});f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:"Visible label."},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: GestureResponderEvent) => void",signature:{arguments:[{type:{name:"GestureResponderEvent"},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"Defaults to `label` when omitted."},hug:{required:!1,tsType:{name:"boolean"},description:'Opt-in content-hug sizing. Defaults to `false` (fill width), because the\nproduction Gluestack Button (`kastle-mobile`\'s `components/ui/button/index.tsx`)\nsets no width at all — RN\'s default `alignItems: "stretch"` then makes it\nfill its container, which is how production call sites actually behave.\n\n⚠️ `alignSelf` is a cross-axis property: it controls width only inside a\nCOLUMN parent. Inside a row it does nothing to width — it moves the button\nto the top of the row instead, overriding the row\'s `alignItems`. So `hug`\nis for a button in a column that should size to its label; it is not a\ngeneral "make me small" switch.',defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};const he={title:"Components/Button",component:f,parameters:{layout:"fullscreen"},tags:["unverified"],args:{label:"Button",size:"md",disabled:!1,loading:!1,hug:!1},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},label:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"},hug:{control:"boolean"},action:{table:{disable:!0}},variant:{table:{disable:!0}}}},ie=["xs","sm","md","lg","xl"],q=[{combo:{action:"primary",variant:"solid"},title:"primary / solid"},{combo:{action:"primary",variant:"text"},title:"primary / text (Figma: Linked)"},{combo:{action:"primary",variant:"transparent"},title:"primary / transparent"},{combo:{action:"primary",variant:"outline"},title:"primary / outline (⚠️ derived, no Figma mockup)"},{combo:{action:"secondary",variant:"outline"},title:"secondary / outline"},{combo:{action:"secondary",variant:"text"},title:"secondary / text (Figma: Linked)"},{combo:{action:"negative",variant:"solid"},title:"negative / solid"}];function G({children:r}){return t.jsx(c,{style:{flexDirection:"row",alignItems:"center",gap:e.s3,flexWrap:"wrap"},children:r})}function le({children:r}){return t.jsx(F,{allowFontScaling:!1,style:{color:o.t600,fontSize:12,marginBottom:e.s1},children:r})}const ce=_.create({screen:{flex:1,justifyContent:"center",backgroundColor:R.bg0,paddingHorizontal:e.s5,paddingVertical:e.s6}}),s={decorators:[r=>t.jsx(c,{style:ce.screen,children:t.jsx(r,{})})]},w={...s,args:{action:"primary",variant:"solid"}},C={...s,args:{action:"primary",variant:"text"}},k={...s,args:{action:"primary",variant:"transparent"}},T={...s,args:{action:"primary",variant:"outline"}},B={...s,args:{action:"secondary",variant:"outline"}},z={...s,args:{action:"secondary",variant:"text"}},O={...s,args:{action:"negative",variant:"solid"}},u={...s,args:{action:"primary",variant:"solid",disabled:!0}},m={...s,args:{action:"primary",variant:"solid",loading:!0}},g={render:r=>t.jsx(c,{style:{padding:e.s4,backgroundColor:R.bg0},children:t.jsx(c,{style:{width:160},children:t.jsx(f,{...r})})}),args:{action:"primary",variant:"solid",label:"A very long button label that should truncate"}},b={render:()=>t.jsx(c,{style:{gap:e.s6,padding:e.s4,backgroundColor:R.bg0},children:q.map(({combo:r,title:n})=>t.jsxs(c,{style:{gap:e.s2},children:[t.jsx(le,{children:n}),t.jsx(G,{children:ie.map(d=>t.jsx(f,{...r,size:d,label:d},d))})]},n))})},y={render:()=>t.jsx(c,{style:{padding:e.s4,backgroundColor:R.bg0},children:t.jsx(G,{children:q.map(({combo:r,title:n})=>t.jsx(f,{...r,size:"lg",label:n},n))})})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "solid"
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "text"
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "transparent"
  }
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "outline"
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "secondary",
    variant: "outline"
  }
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "secondary",
    variant: "text"
  }
}`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "negative",
    variant: "solid"
  }
}`,...O.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "solid",
    disabled: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Disabled state, shown on `primary`/`solid`. Not split per-action — Figma\nconfirms disabled is a uniform opacity/40 overlay across every combo (see\n`styles.disabled` in Button.tsx), so one story plus the `disabled` control\ncovers every combo's disabled look.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...inScreen,
  args: {
    action: "primary",
    variant: "solid",
    loading: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Loading state, shown on `primary`/`solid`. Not split per-action — the\nspinner is always `color={textColor}` (Button.tsx), i.e. it just inherits\nwhatever text colour the combo already uses, so flipping `action` with the\n`loading` control on in the panel already shows every combo's spinner\ncolour without a separate story per combo.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Long-label truncation.

The Button sits in a 160-wide container so \`numberOfLines={1}\` has
something to truncate against.

NB: the previous version of this story got the same geometry by passing
\`style={{ width: 160 }}\` straight to Button. The container is the honest
version of the same demo — it is not the fill-width change that made
truncation reachable here, since both versions constrain the width to 160.
What fill-width changed is real layouts: a Button in a column now takes the
container's width without the caller doing anything, so truncation is
reachable there too.`,...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"All 7 built action×variant combinations, each across all 5 sizes.\nThis is the primary state-coverage story: 35 (combo × size) Button\ninstances in the default (unpressed, enabled) state.\n\n`primary`/`outline` is derived (no Figma mockup exists for it) — see the\nDERIVED comment on its COMBO_STYLES entry in Button.tsx for the 3 verified\nsource rules it composes.\n\nNOT included, and never will be: `secondary`/`transparent`. This is not a\ngap — it is not a real variant. kastle-mobile's Gluestack `variant.transparent`\nrule hardcodes background and text colour with no `action` term, so\n`secondary`+`transparent` renders pixel-identical to `primary`+`transparent`.\nSee Button.tsx's file header and PR-DESCRIPTION.md for the citation.",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Interactive pressed-state check: press and hold (mouse down) on web preview
to see the pressed background/text colour swap defined in COMBO_STYLES.
There is no static "Pressed" story because press is a transient touch
state, not a prop — this is the same reason \`LinkButton.stories.tsx\`
doesn't have one either.`,...y.parameters?.docs?.description}}};const fe=["Primary","PrimaryText","PrimaryTransparent","PrimaryOutline","SecondaryOutline","SecondaryText","NegativeSolid","Disabled","Loading","LongLabel","AllCombosAllSizes","PressAndHoldToPreview"];export{b as AllCombosAllSizes,u as Disabled,m as Loading,g as LongLabel,O as NegativeSolid,y as PressAndHoldToPreview,w as Primary,T as PrimaryOutline,C as PrimaryText,k as PrimaryTransparent,B as SecondaryOutline,z as SecondaryText,fe as __namedExportsOrder,he as default};
