import{j as r,V as a,e as n,c as t,s as L}from"./theme-8QOGWT04.js";import{E as S}from"./ExploreAppCard-C3oV3koa.js";import{T as s}from"./index-CJru1tUL.js";import{M as w}from"./index-DR7f6Xxm.js";import{E as A}from"./external-link-BMgEOEWL.js";import{i as m}from"./icon-DhbqID1i.js";import"./iframe-zWxnyr7p.js";import"./preload-helper-Zf8nSx-t.js";import"./arrow-up-right-Cg2sBd6t.js";import"./createLucideIcon-Ddhol5HT.js";import"./registry-BNXumi8c.js";import"./index-BDF7tMil.js";import"./Image-C_IQzTyj.js";import"./NativeEventEmitter-Dyue3d_c.js";import"./check-ed9xp0mz.js";import"./extends-CF3RwP-h.js";const g=({apps:c=[],onAppPress:f,showSubmitLink:y=!1,onSubmitAppPress:h,title:u="Verified Apps",isLoading:x=!1,skeletonCount:b=6})=>{const k=i=>{f?.(i)};return x?r.jsxs(a,{style:e.container,children:[r.jsx(a,{style:e.header,children:r.jsx(s,{allowFontScaling:!1,style:[n.bodySemiboldMD,e.sectionTitle],children:u})}),r.jsx(a,{style:e.appsGrid,children:Array.from({length:b}).map((i,C)=>r.jsxs(a,{style:[e.appCardWrapper,e.skeletonCard],children:[r.jsx(a,{style:[e.skeleton,e.skeletonArrow]}),r.jsx(a,{style:[e.skeleton,e.skeletonIcon]}),r.jsx(a,{style:[e.skeleton,{width:"70%",height:14,marginTop:12}]}),r.jsx(a,{style:[e.skeleton,{width:"40%",height:12,marginTop:6}]})]},C))})]}):r.jsxs(a,{style:e.container,children:[r.jsx(a,{style:e.header,children:r.jsx(s,{allowFontScaling:!1,style:[n.bodySemiboldMD,e.sectionTitle],children:u})}),r.jsxs(a,{style:e.appsGrid,children:[c.map(i=>r.jsx(a,{style:e.appCardWrapper,children:r.jsx(S,{appName:i.appName,appCategory:i.appCategory,appIcon:i.appIcon,isVerified:i.isVerified,onPress:()=>k(i)})},i.id)),c.length%2!==0&&r.jsx(a,{style:e.appCardWrapper})]}),y&&r.jsxs(w,{style:e.submitLinkContainer,onPress:h,children:[r.jsxs(s,{allowFontScaling:!1,style:e.submitLinkText,children:[r.jsx(s,{allowFontScaling:!1,style:[n.bodyNormalSM,e.submitLinkNormal],children:"Want your app listed? "}),r.jsx(s,{allowFontScaling:!1,style:[n.bodyNormalSM,e.submitLinkHighlight],children:"Submit it now!"})]}),r.jsx(A,{size:16,color:t.link,strokeWidth:2,style:e.externalLinkIcon})]})]})},e=L.create({container:{width:"100%"},header:{paddingTop:12,paddingBottom:16},sectionTitle:{color:t.textSecondary,lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",gap:12,marginBottom:12},appCardWrapper:{flex:1,minWidth:0,flexBasis:"45%"},skeleton:{backgroundColor:t.backgroundSurface,borderRadius:8,opacity:.5},skeletonCard:{paddingTop:12,paddingBottom:12,paddingHorizontal:12,backgroundColor:t.backgroundSurface,borderRadius:16,borderWidth:1,borderColor:t.border,minHeight:88,position:"relative"},skeletonArrow:{position:"absolute",top:12,right:12,width:18,height:18,borderRadius:4},skeletonIcon:{width:40,height:40,borderRadius:20},submitLinkContainer:{flexDirection:"row",alignItems:"center",paddingVertical:12,paddingHorizontal:0,gap:4},submitLinkText:{flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:t.textDimmed},submitLinkHighlight:{color:t.link,textDecorationLine:"underline"}});g.__docgenInfo={description:"",methods:[],displayName:"ExploreApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"ExploreApp"}],raw:"ExploreApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: ExploreApp) => void",signature:{arguments:[{type:{name:"ExploreApp"},name:"app"}],return:{name:"void"}}},description:""},showSubmitLink:{required:!1,tsType:{name:"boolean"},description:"@default false",defaultValue:{value:"false",computed:!1}},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Verified Apps"',defaultValue:{value:'"Verified Apps"',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"@default false",defaultValue:{value:"false",computed:!1}},skeletonCount:{required:!1,tsType:{name:"number"},description:"@default 6",defaultValue:{value:"6",computed:!1}}}};const R={title:"Explore/Components/ExploreApps",component:g,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},o={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:m,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:m,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:m,isVerified:!0}]}},p={args:{...o.args,showSubmitLink:!0}},l={args:{isLoading:!0}},d={args:{isLoading:!0,skeletonCount:4}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    apps: [{
      id: "0",
      appName: "Custom DeFi",
      appCategory: "DeFi",
      appIcon: iconImage,
      isVerified: true
    }, {
      id: "1",
      appName: "Bridge App",
      appCategory: "Bridge",
      appIcon: iconImage,
      isVerified: true
    }, {
      id: "2",
      appName: "Gaming App",
      appCategory: "Gaming",
      appIcon: iconImage,
      isVerified: true
    }]
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSubmitLink: true
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    skeletonCount: 4
  }
}`,...d.parameters?.docs?.source}}};const _=["Default","WithSubmitLink","Loading","LoadingCustomCount"];export{o as Default,l as Loading,d as LoadingCustomCount,p as WithSubmitLink,_ as __namedExportsOrder,R as default};
