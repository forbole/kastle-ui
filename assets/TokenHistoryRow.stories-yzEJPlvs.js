import{i as D}from"./icon-DhbqID1i.js";import{d as r,j as e,V as i,c as l,s as T,a as t,e as j,g as M,b as O}from"./theme-CvtKae92.js";import{A as F}from"./AssetImage-ZpITO-Ug.js";import{M as I}from"./index-yxtjKpYJ.js";import{T as d}from"./index-B570ok8F.js";import"./iframe-D_g5qihE.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CFpIXNa1.js";import"./extends-CF3RwP-h.js";import"./index-CgXQfuNp.js";const q={in:r.success,out:r.danger,neutral:r.textPrimary},h=({title:b,dateLabel:L,amountLabel:S,direction:x="neutral",fiatLabel:f,logo:w,logoFallback:v,onPress:y,testID:k})=>{const R=q[x];return e.jsxs(I,{style:o.card,onPress:y,disabled:!y,activeOpacity:.7,accessibilityRole:y?"button":void 0,testID:k,children:[e.jsx(F,{variant:"single",image:w,fallback:v,size:40}),e.jsxs(i,{style:o.content,children:[e.jsxs(i,{style:o.middle,children:[e.jsx(d,{allowFontScaling:!1,style:[l.bodySemiboldMD,o.title],numberOfLines:1,children:b}),e.jsx(d,{allowFontScaling:!1,style:[l.bodyNormalXS,o.secondary],numberOfLines:1,children:L})]}),e.jsxs(i,{style:o.right,children:[e.jsx(i,{style:o.amountRow,children:e.jsx(d,{allowFontScaling:!1,style:[l.bodySemiboldMD,o.amountNumber,{color:R}],numberOfLines:1,ellipsizeMode:"tail",children:S})}),f?e.jsx(d,{allowFontScaling:!1,style:[l.bodyNormalXS,o.secondary],numberOfLines:1,children:f}):null]})]})]})},o=T.create({card:{flexDirection:"row",alignItems:"center",height:t.s16,backgroundColor:r.backgroundSurface,borderWidth:M.bw1,borderColor:r.border,borderRadius:j["2xl"],paddingHorizontal:t.s3,marginBottom:t.s2,gap:t.s3},content:{flex:1,minWidth:0,flexDirection:"row",alignItems:"center",gap:t.s2},middle:{flexShrink:1,gap:t.s1_5},title:{color:r.textPrimary},secondary:{color:r.textSecondary},right:{flex:1,minWidth:t.s24,alignItems:"flex-end",gap:t.s1_5},amountRow:{flexDirection:"row",alignItems:"baseline",justifyContent:"flex-end",width:"100%"},amountNumber:{flexShrink:1}});h.__docgenInfo={description:"One row of a token page's History tab (KAS / KRC-20 / KCC-20).",methods:[],displayName:"TokenHistoryRow",props:{title:{required:!0,tsType:{name:"string"},description:'Row title, e.g. "Received", "Sent", "Minted TTTT", "Deployed TTTT".'},dateLabel:{required:!0,tsType:{name:"string"},description:'Pre-formatted by the host, including the year. Format "D MMM YYYY | HH:mm", e.g. "8 Oct 2026 | 02:03".'},amountLabel:{required:!0,tsType:{name:"string"},description:'Amount as displayed, including sign, e.g. "+1,000,000" or "-1,000.88". Ellipsizes at the tail if too long.'},direction:{required:!1,tsType:{name:"union",raw:'"in" | "out" | "neutral"',elements:[{name:"literal",value:'"in"'},{name:"literal",value:'"out"'},{name:"literal",value:'"neutral"'}]},description:'Sets the amount colour: `"in"` = success green, `"out"` = danger red, `"neutral"` = textPrimary. Default `"neutral"`.',defaultValue:{value:'"neutral"',computed:!1}},fiatLabel:{required:!1,tsType:{name:"string"},description:'Fiat equivalent as displayed, e.g. "≈ $9,486.17 USD". Line is omitted when undefined.'},logo:{required:!1,tsType:{name:"ImageSourcePropType"},description:"Token logo. Falls back to `logoFallback`, then to AssetImage's plain circle."},logoFallback:{required:!1,tsType:{name:"ImageSourcePropType"},description:"Image shown when `logo` is undefined or fails to load."},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Tap handler. When omitted the row is not pressable and shows no press feedback."},testID:{required:!1,tsType:{name:"string"},description:""}}};const C=D,U={title:"Token/Components/TokenHistoryRow",component:h,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{logo:C,dateLabel:"8 Oct 2026 | 02:03",fiatLabel:"≈ $9,486.17 USD"},decorators:[b=>e.jsx(i,{style:N.decorator,children:e.jsx(b,{})})]},c={args:{title:"Received",amountLabel:"+1,000.7",direction:"in"}},m={args:{title:"Sent",amountLabel:"-1,000.88",direction:"out"}},u={args:{title:"Minted TTTT",amountLabel:"+1,000,000",direction:"in"}},p={args:{title:"Deployed TTTT",amountLabel:"-1,000",direction:"out"}},a={args:{title:"Received",amountLabel:"+32,115,033,564,12345678",direction:"in",dateLabel:"28 Sep 2026 | 23:59"}},n={args:{title:"Deployed Some Extremely Long Token Name",amountLabel:"-1,000",direction:"out",dateLabel:"28 Sep 2026 | 23:59"}},g={args:{title:"Received",amountLabel:"+1,000",direction:"in",logo:void 0,logoFallback:void 0}},s={args:{title:"Received",amountLabel:"+1,000",direction:"in",onPress:()=>console.log("row pressed")}},N=T.create({decorator:{flex:1,backgroundColor:O.bg0,padding:t.s5}});c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+1,000.7",
    direction: "in"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Sent",
    amountLabel: "-1,000.88",
    direction: "out"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Minted TTTT",
    amountLabel: "+1,000,000",
    direction: "in"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Deployed TTTT",
    amountLabel: "-1,000",
    direction: "out"
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+32,115,033,564,12345678",
    direction: "in",
    dateLabel: "28 Sep 2026 | 23:59"
  }
}`,...a.parameters?.docs?.source},description:{story:"Figma wraps this to two lines; we ellipsize instead so the 64px card never overflows.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Deployed Some Extremely Long Token Name",
    amountLabel: "-1,000",
    direction: "out",
    dateLabel: "28 Sep 2026 | 23:59"
  }
}`,...n.parameters?.docs?.source},description:{story:"Title far too long for the row: it ellipsizes, the amount column keeps its room.",...n.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+1,000",
    direction: "in",
    logo: undefined,
    logoFallback: undefined
  }
}`,...g.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Received",
    amountLabel: "+1,000",
    direction: "in",
    onPress: () => console.log("row pressed")
  }
}`,...s.parameters?.docs?.source},description:{story:"With `onPress` the whole row is pressable (opacity feedback).",...s.parameters?.docs?.description}}};const $=["Received","Sent","Minted","Deployed","LongAmount","LongTitle","NoLogo","Pressed"];export{p as Deployed,a as LongAmount,n as LongTitle,u as Minted,g as NoLogo,s as Pressed,c as Received,m as Sent,$ as __namedExportsOrder,U as default};
