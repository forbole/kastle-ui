import{j as r,V as a,M as C,k as t,s as A}from"./theme-nYRcdwUJ.js";import{A as s}from"./AppText-BS93OeJE.js";import{E as L}from"./ExploreAppCard-s7pRnbrQ.js";import{E as j}from"./external-link-BVPDZANH.js";import{i as l}from"./icon-DhbqID1i.js";import"./iframe-CsW_bbWU.js";import"./preload-helper-Zf8nSx-t.js";import"./arrow-up-right-DNgEuit5.js";import"./createLucideIcon-DxMf4yY-.js";import"./registry-BNXumi8c.js";import"./Image-CtDSLYxm.js";import"./NativeEventEmitter-XzadFRz5.js";import"./check-xK5lCErA.js";const c=({apps:m=[],onAppPress:g,showSubmitLink:f=!1,onSubmitAppPress:h,title:u="Verified Apps",isLoading:x=!1,skeletonCount:y=6})=>{const k=i=>{g?.(i)};return x?r.jsxs(a,{style:e.container,children:[r.jsx(a,{style:e.header,children:r.jsx(s,{weight:"600",style:e.sectionTitle,children:u})}),r.jsx(a,{style:e.appsGrid,children:Array.from({length:y}).map((i,b)=>r.jsxs(a,{style:[e.appCardWrapper,e.skeletonCard],children:[r.jsx(a,{style:[e.skeleton,e.skeletonArrow]}),r.jsx(a,{style:[e.skeleton,e.skeletonIcon]}),r.jsx(a,{style:[e.skeleton,{width:"70%",height:14,marginTop:12}]}),r.jsx(a,{style:[e.skeleton,{width:"40%",height:12,marginTop:6}]})]},b))})]}):r.jsxs(a,{style:e.container,children:[r.jsx(a,{style:e.header,children:r.jsx(s,{weight:"600",style:e.sectionTitle,children:u})}),r.jsxs(a,{style:e.appsGrid,children:[m.map(i=>r.jsx(a,{style:e.appCardWrapper,children:r.jsx(L,{appName:i.appName,appCategory:i.appCategory,appIcon:i.appIcon,isVerified:i.isVerified,onPress:()=>k(i)})},i.id)),m.length%2!==0&&r.jsx(a,{style:e.appCardWrapper})]}),f&&r.jsxs(C,{style:e.submitLinkContainer,onPress:h,children:[r.jsxs(s,{style:e.submitLinkText,children:[r.jsx(s,{weight:"400",style:e.submitLinkNormal,children:"Want your app listed? "}),r.jsx(s,{weight:"400",style:e.submitLinkHighlight,children:"Submit it now!"})]}),r.jsx(j,{size:16,color:t.link,strokeWidth:2,style:e.externalLinkIcon})]})]})},e=A.create({container:{width:"100%"},header:{paddingTop:12,paddingBottom:16},sectionTitle:{fontSize:16,color:t.textSecondary,lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",gap:12,marginBottom:12},appCardWrapper:{flex:1,minWidth:0,flexBasis:"45%"},skeleton:{backgroundColor:t.backgroundSurface,borderRadius:8,opacity:.5},skeletonCard:{paddingTop:12,paddingBottom:12,paddingHorizontal:12,backgroundColor:t.backgroundSurface,borderRadius:16,borderWidth:1,borderColor:t.border,minHeight:88,position:"relative"},skeletonArrow:{position:"absolute",top:12,right:12,width:18,height:18,borderRadius:4},skeletonIcon:{width:40,height:40,borderRadius:20},submitLinkContainer:{flexDirection:"row",alignItems:"center",paddingVertical:12,paddingHorizontal:0,gap:4},submitLinkText:{fontSize:14,lineHeight:16,flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:t.textDimmed},submitLinkHighlight:{color:t.link,textDecorationLine:"underline"}});c.__docgenInfo={description:"",methods:[],displayName:"ExploreApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"ExploreApp"}],raw:"ExploreApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: ExploreApp) => void",signature:{arguments:[{type:{name:"ExploreApp"},name:"app"}],return:{name:"void"}}},description:""},showSubmitLink:{required:!1,tsType:{name:"boolean"},description:"@default false",defaultValue:{value:"false",computed:!1}},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Verified Apps"',defaultValue:{value:'"Verified Apps"',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"@default false",defaultValue:{value:"false",computed:!1}},skeletonCount:{required:!1,tsType:{name:"number"},description:"@default 6",defaultValue:{value:"6",computed:!1}}}};const H={title:"Explore/Components/ExploreApps",component:c,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},o={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:l,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:l,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:l,isVerified:!0}]}},n={args:{...o.args,showSubmitLink:!0}},p={args:{isLoading:!0}},d={args:{isLoading:!0,skeletonCount:4}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSubmitLink: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    skeletonCount: 4
  }
}`,...d.parameters?.docs?.source}}};const P=["Default","WithSubmitLink","Loading","LoadingCustomCount"];export{o as Default,p as Loading,d as LoadingCustomCount,n as WithSubmitLink,P as __namedExportsOrder,H as default};
