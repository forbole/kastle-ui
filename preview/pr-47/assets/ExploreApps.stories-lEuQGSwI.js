import{j as r,V as i,h as t,s as C}from"./theme-Br3UXtQO.js";import{A as s}from"./AppText-CDytHUIv.js";import{E as A}from"./ExploreAppCard-BpUW43VB.js";import{M as L}from"./index-CAMOA1qm.js";import{E as j}from"./external-link-C0tpRIf-.js";import{i as l}from"./icon-DhbqID1i.js";import"./iframe-JF4SOhmV.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CQPoNSoe.js";import"./arrow-up-right-9jrojgP-.js";import"./createLucideIcon-BQiQhgXK.js";import"./registry-BNXumi8c.js";import"./Image-sYlaeH5x.js";import"./NativeEventEmitter-W6TJjB5k.js";import"./check-D5Z8w2It.js";import"./extends-CF3RwP-h.js";const c=({apps:m=[],onAppPress:g,showSubmitLink:f=!1,onSubmitAppPress:h,title:u="Verified Apps",isLoading:x=!1,skeletonCount:y=6})=>{const k=a=>{g?.(a)};return x?r.jsxs(i,{style:e.container,children:[r.jsx(i,{style:e.header,children:r.jsx(s,{weight:"600",style:e.sectionTitle,children:u})}),r.jsx(i,{style:e.appsGrid,children:Array.from({length:y}).map((a,b)=>r.jsxs(i,{style:[e.appCardWrapper,e.skeletonCard],children:[r.jsx(i,{style:[e.skeleton,e.skeletonArrow]}),r.jsx(i,{style:[e.skeleton,e.skeletonIcon]}),r.jsx(i,{style:[e.skeleton,{width:"70%",height:14,marginTop:12}]}),r.jsx(i,{style:[e.skeleton,{width:"40%",height:12,marginTop:6}]})]},b))})]}):r.jsxs(i,{style:e.container,children:[r.jsx(i,{style:e.header,children:r.jsx(s,{weight:"600",style:e.sectionTitle,children:u})}),r.jsxs(i,{style:e.appsGrid,children:[m.map(a=>r.jsx(i,{style:e.appCardWrapper,children:r.jsx(A,{appName:a.appName,appCategory:a.appCategory,appIcon:a.appIcon,isVerified:a.isVerified,onPress:()=>k(a)})},a.id)),m.length%2!==0&&r.jsx(i,{style:e.appCardWrapper})]}),f&&r.jsxs(L,{style:e.submitLinkContainer,onPress:h,children:[r.jsxs(s,{style:e.submitLinkText,children:[r.jsx(s,{weight:"400",style:e.submitLinkNormal,children:"Want your app listed? "}),r.jsx(s,{weight:"400",style:e.submitLinkHighlight,children:"Submit it now!"})]}),r.jsx(j,{size:16,color:t.link,strokeWidth:2,style:e.externalLinkIcon})]})]})},e=C.create({container:{width:"100%"},header:{paddingTop:12,paddingBottom:16},sectionTitle:{fontSize:16,color:t.textSecondary,lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",gap:12,marginBottom:12},appCardWrapper:{flex:1,minWidth:0,flexBasis:"45%"},skeleton:{backgroundColor:t.backgroundSurface,borderRadius:8,opacity:.5},skeletonCard:{paddingTop:12,paddingBottom:12,paddingHorizontal:12,backgroundColor:t.backgroundSurface,borderRadius:16,borderWidth:1,borderColor:t.border,minHeight:88,position:"relative"},skeletonArrow:{position:"absolute",top:12,right:12,width:18,height:18,borderRadius:4},skeletonIcon:{width:40,height:40,borderRadius:20},submitLinkContainer:{flexDirection:"row",alignItems:"center",paddingVertical:12,paddingHorizontal:0,gap:4},submitLinkText:{fontSize:14,lineHeight:16,flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:t.textDimmed},submitLinkHighlight:{color:t.link,textDecorationLine:"underline"}});c.__docgenInfo={description:"",methods:[],displayName:"ExploreApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"ExploreApp"}],raw:"ExploreApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: ExploreApp) => void",signature:{arguments:[{type:{name:"ExploreApp"},name:"app"}],return:{name:"void"}}},description:""},showSubmitLink:{required:!1,tsType:{name:"boolean"},description:"@default false",defaultValue:{value:"false",computed:!1}},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Verified Apps"',defaultValue:{value:'"Verified Apps"',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"@default false",defaultValue:{value:"false",computed:!1}},skeletonCount:{required:!1,tsType:{name:"number"},description:"@default 6",defaultValue:{value:"6",computed:!1}}}};const R={title:"Explore/Components/ExploreApps",component:c,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},o={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:l,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:l,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:l,isVerified:!0}]}},n={args:{...o.args,showSubmitLink:!0}},p={args:{isLoading:!0}},d={args:{isLoading:!0,skeletonCount:4}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const _=["Default","WithSubmitLink","Loading","LoadingCustomCount"];export{o as Default,p as Loading,d as LoadingCustomCount,n as WithSubmitLink,_ as __namedExportsOrder,R as default};
