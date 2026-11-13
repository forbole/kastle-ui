import{i as W}from"./icon-DhbqID1i.js";import{j as e,V as o,t as c,s as P,a as t,b as C,e as w,c as R,f as M,g as V}from"./theme-CvdPgai5.js";import{r as _}from"./iframe-DSSG6PZI.js";import{A as L}from"./AssetImage-BLR8OUJA.js";import{I as B}from"./Input-C2106806.js";import{S as q}from"./SkeletonBlock-CPavCoEV.js";import{S as D}from"./search-C7SvtVGi.js";import{M as T}from"./index-J_frm1xP.js";import{X as H}from"./x-CPfPMq0u.js";import{F as z}from"./index-C1Qo6j1t.js";import{T as j}from"./index-CGPnJJ0x.js";import{I as X}from"./index-BuGWousj.js";import"./preload-helper-Zf8nSx-t.js";import"./index-VkfclCor.js";import"./index-5mBqr3td.js";import"./circle-alert-zFer1jBY.js";import"./createLucideIcon-DFpQLiBo.js";import"./registry-BNXumi8c.js";import"./index-rBCh4CQz.js";import"./Animated-DuRM5YS0.js";import"./extends-CF3RwP-h.js";import"./index-DCmuG3WT.js";import"./NativeEventEmitter-Cjxll_Kj.js";const K=3,$=({item:r})=>r.logo?r.logoShape==="square"?e.jsx(X,{source:r.logo,style:s.squareLogo,resizeMode:"cover"}):r.chainLogo?e.jsx(L,{variant:"chain",tokenImage:r.logo,chainImage:r.chainLogo}):e.jsx(L,{variant:"single",image:r.logo}):e.jsx(o,{style:[r.logoShape==="square"?s.squareLogo:s.circleLogo,s.logoPlaceholder],accessibilityElementsHidden:!0,importantForAccessibility:"no"}),E=({item:r,onPress:l,onRemove:d})=>e.jsxs(o,{style:s.row,children:[e.jsxs(T,{style:s.rowPress,activeOpacity:.7,onPress:l,accessibilityRole:"button",accessibilityLabel:`${r.name}${r.subtitle?`, ${r.subtitle}`:""}`,children:[e.jsx($,{item:r}),e.jsxs(o,{style:s.content,children:[e.jsx(j,{allowFontScaling:!1,numberOfLines:1,style:[R.bodyNormalMD,s.title],children:r.name}),r.subtitle?e.jsx(j,{allowFontScaling:!1,numberOfLines:1,style:[R.bodyNormalXS,s.subtitle],children:r.subtitle}):null]})]}),d?e.jsx(T,{onPress:d,hitSlop:t.s3_5,accessibilityRole:"button",accessibilityLabel:`Remove ${r.name} from recent`,children:e.jsx(H,{size:16,color:c.t500,strokeWidth:2})}):null]}),G=()=>e.jsxs(o,{style:s.row,children:[e.jsx(q,{width:t.s10,height:t.s10,borderRadius:w.full}),e.jsxs(o,{style:s.content,children:[e.jsx(q,{width:120,height:t.s4}),e.jsx(q,{width:80,height:t.s3})]})]}),Q=()=>e.jsx(j,{allowFontScaling:!1,style:[R.bodyNormalSM,s.empty],children:"Result not found"}),v=({query:r,onChangeText:l,onClose:d,state:i,recent:N=[],results:A=[],onSelect:I,onSelectRecent:k,onRemoveRecent:F})=>e.jsxs(o,{style:s.screen,children:[e.jsxs(o,{style:s.topBar,children:[e.jsx(o,{style:s.inputWrap,children:e.jsx(B,{value:r,onChangeText:l,placeholder:"Search Assets",autoFocus:!0,leftIcon:e.jsx(D,{size:16,color:c.t500,strokeWidth:2})})}),e.jsx(T,{style:s.close,onPress:d,accessibilityLabel:"Close search",children:e.jsx(H,{size:24,color:c.t900,strokeWidth:2})})]}),e.jsxs(z,{style:s.body,contentContainerStyle:s.bodyContent,keyboardShouldPersistTaps:"handled",children:[i==="default"&&N.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{style:s.sectionHeader,children:e.jsx(j,{allowFontScaling:!1,style:s.sectionTitle,children:"Recent"})}),e.jsx(o,{style:s.list,children:N.map(n=>e.jsx(E,{item:n,onPress:()=>k(n),onRemove:()=>F(n)},n.id))})]}),(i==="loading"||i==="filled"&&A.length>0)&&e.jsxs(o,{style:s.list,children:[A.map(n=>e.jsx(E,{item:n,onPress:()=>I(n)},n.id)),i==="loading"&&Array.from({length:K},(n,U)=>e.jsx(G,{},U))]}),(i==="empty"||i==="filled"&&A.length===0)&&e.jsx(Q,{})]})]}),s=P.create({screen:{flex:1,backgroundColor:C.bg0},topBar:{flexDirection:"row",alignItems:"center",gap:t.s2,paddingLeft:t.s5,paddingRight:t.s1,paddingTop:t.s3,paddingBottom:t.s3},inputWrap:{flex:1},close:{width:t.s12,height:t.s12,alignItems:"center",justifyContent:"center",borderRadius:w.lg},body:{flex:1},bodyContent:{paddingBottom:t.s6},sectionHeader:{borderTopWidth:V.bw1,borderTopColor:M.b200,paddingTop:t.s4,paddingBottom:t.s2,paddingHorizontal:t.s5},sectionTitle:{...R.bodySemiboldLG,color:c.t900},list:{paddingHorizontal:t.s5},row:{flexDirection:"row",alignItems:"center",gap:t.s3,minHeight:72,paddingVertical:t.s3_5,borderRadius:w.lg},rowPress:{flex:1,alignSelf:"stretch",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:t.s3},content:{flex:1,gap:t.s1,justifyContent:"center"},title:{color:c.t700},subtitle:{color:c.t500,lineHeight:t.s4},squareLogo:{width:t.s10,height:46,borderRadius:t.s2_5},circleLogo:{width:t.s10,height:t.s10,borderRadius:w.full},logoPlaceholder:{backgroundColor:C.bg300},empty:{color:c.t500,textAlign:"center",paddingTop:t.s10,lineHeight:void 0}});v.__docgenInfo={description:`Full-screen asset search overlay for Home (Figma \`BdTDUVIHEeOjdlHSPij0xi\`,
section "Asset search" 8696:214282). Pure UI — the parent owns the query,
the filtering, the recent list and the navigation. Safe-area / status bar
and keyboard avoidance belong to kastle-mobile.`,methods:[],displayName:"AssetSearchOverlay",props:{query:{required:!0,tsType:{name:"string"},description:"Current text in the search field."},onChangeText:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close (X) pressed."},state:{required:!0,tsType:{name:"union",raw:'"default" | "loading" | "filled" | "empty"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"loading"'},{name:"literal",value:'"filled"'},{name:"literal",value:'"empty"'}]},description:'default — nothing typed yet: shows `recent` (if any).\nloading — `results` found so far, then skeleton rows under them. The\n          search is global and Home preloads only 20 tokens, so a wider\n          search fetches more (Figma note 9339:270035).\nfilled  — `results` rows; with none, the same copy as `empty`.\nempty   — "Result not found".'},recent:{required:!1,tsType:{name:"Array",elements:[{name:"AssetSearchItem"}],raw:"AssetSearchItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},results:{required:!1,tsType:{name:"Array",elements:[{name:"AssetSearchItem"}],raw:"AssetSearchItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: AssetSearchItem) => void",signature:{arguments:[{type:{name:"AssetSearchItem"},name:"item"}],return:{name:"void"}}},description:"Result row tapped."},onSelectRecent:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: AssetSearchItem) => void",signature:{arguments:[{type:{name:"AssetSearchItem"},name:"item"}],return:{name:"void"}}},description:"Recent row tapped."},onRemoveRecent:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: AssetSearchItem) => void",signature:{arguments:[{type:{name:"AssetSearchItem"},name:"item"}],return:{name:"void"}}},description:"Small X on each recent row."}}};const a=W,xe={title:"Home/Components/AssetSearchOverlay",component:v,parameters:{layout:"fullscreen",backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},docs:{description:{component:'Home — asset search overlay (opened from the search icon in the Home\nheader). Figma `BdTDUVIHEeOjdlHSPij0xi`, section "Asset search"\n8696:214282. 未經真場景驗證 until kastle-mobile imports it.'}}},args:{query:"",state:"default",onChangeText:()=>{},onClose:()=>{},onSelect:()=>{},onSelectRecent:()=>{},onRemoveRecent:()=>{}}},O=[{id:"r1",name:"NACHO",subtitle:"Asset",logo:a,chainLogo:a},{id:"r2",name:"FREENACHO #4795",subtitle:"NFT",logo:a,logoShape:"square"},{id:"r3",name:".nicole.kas",subtitle:"KNS",logo:a,logoShape:"square"},{id:"r4",name:"No growth comes from staying comfortable.",subtitle:"TEXT",logo:a,logoShape:"square"}],x=[{id:"a1",name:"NACHO",subtitle:"Asset",logo:a,chainLogo:a},{id:"a2",name:"FREENACHO #4795",subtitle:"NFT",logo:a,logoShape:"square"},{id:"a3",name:".nacho.kas",subtitle:"KNS",logo:a,logoShape:"square"}],u={},m={args:{recent:O}},p={args:{query:"NACHO",state:"loading",results:x.slice(0,2)}},g={args:{query:"NACHO",state:"filled",results:x}},h={args:{query:"ORANGE",state:"empty"}},y={args:{query:"NACHO",state:"filled",results:[]}},f={args:{query:"NACHO",state:"filled",results:[{id:"m1",name:"UNKNOWN",subtitle:"Asset"},{id:"m2",name:"Untitled #7",subtitle:"NFT",logoShape:"square"},...x.slice(0,1)]}},S={args:{query:"long",state:"filled",results:[{id:"l1",name:"An extremely long token name that cannot possibly fit on one line",subtitle:"Asset",logo:a},...x]}},b={render:r=>{const[l,d]=_.useState(""),i=l===""?"default":l.toLowerCase().includes("nacho")?"filled":"empty";return e.jsx(v,{...r,query:l,onChangeText:d,state:i,recent:O,results:x,onRemoveRecent:()=>{}})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source},description:{story:"First open, no history: just the input, keyboard up.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    recent: RECENT
  }
}`,...m.parameters?.docs?.source},description:{story:'Opened again: "Recent" list, each row has an X to remove it.',...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    query: "NACHO",
    state: "loading",
    results: RESULTS.slice(0, 2)
  }
}`,...p.parameters?.docs?.source},description:{story:"Matched rows on top, 3 skeleton rows under them: the search is global and Home preloads only 20 tokens.",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    query: "NACHO",
    state: "filled",
    results: RESULTS
  }
}`,...g.parameters?.docs?.source},description:{story:"Matching rows; tapping one goes to that asset's page.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    query: "ORANGE",
    state: "empty"
  }
}`,...h.parameters?.docs?.source},description:{story:"Nothing matched.",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    query: "NACHO",
    state: "filled",
    results: []
  }
}`,...y.parameters?.docs?.source},description:{story:"`filled` with zero results falls back to the `empty` copy, not a blank body.",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    query: "NACHO",
    state: "filled",
    results: [{
      id: "m1",
      name: "UNKNOWN",
      subtitle: "Asset"
    }, {
      id: "m2",
      name: "Untitled #7",
      subtitle: "NFT",
      logoShape: "square"
    }, ...RESULTS.slice(0, 1)]
  }
}`,...f.parameters?.docs?.source},description:{story:"Rows without `logo` show a neutral placeholder (circle and square), never an empty slot.",...f.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    query: "long",
    state: "filled",
    results: [{
      id: "l1",
      name: "An extremely long token name that cannot possibly fit on one line",
      subtitle: "Asset",
      logo
    }, ...RESULTS]
  }
}`,...S.parameters?.docs?.source},description:{story:"Long names must ellipsise on one line, never wrap or push the row apart.",...S.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [query, setQuery] = useState("");
    const state = query === "" ? "default" : query.toLowerCase().includes("nacho") ? "filled" : "empty";
    return <AssetSearchOverlay {...args} query={query} onChangeText={setQuery} state={state} recent={RECENT} results={RESULTS} onRemoveRecent={() => {}} />;
  }
}`,...b.parameters?.docs?.source},description:{story:"Live typing: switch between the states from the input.",...b.parameters?.docs?.description}}};const we=["Default","WithRecent","Loading","Filled","Empty","FilledNoResults","MissingLogo","LongName","Interactive"];export{u as Default,h as Empty,g as Filled,y as FilledNoResults,b as Interactive,p as Loading,S as LongName,f as MissingLogo,m as WithRecent,we as __namedExportsOrder,xe as default};
