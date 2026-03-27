import{j as e,V as t,T as n,M as f,f as s,s as x}from"./theme-B4dBemxe.js";import{E as y}from"./ExploreAppCard-C0t8aP8L.js";import{E as h}from"./external-link-B0rqo0mG.js";import{i as o}from"./icon-DhbqID1i.js";import"./iframe-BoVk9AT6.js";import"./preload-helper-Zf8nSx-t.js";import"./createLucideIcon-DdvmFGKQ.js";import"./index-0oan-NF5.js";const d=({apps:m=[],onAppPress:l,showSubmitLink:c=!1,onSubmitAppPress:u})=>{const g=r=>{l?.(r)};return e.jsxs(t,{style:i.container,children:[e.jsx(t,{style:i.header,children:e.jsx(n,{style:i.sectionTitle,children:"Verified Apps"})}),e.jsx(t,{style:i.appsGrid,children:m.map((r,V)=>e.jsx(t,{style:i.appCardWrapper,children:e.jsx(y,{appName:r.appName,appCategory:r.appCategory,appIcon:r.appIcon,isVerified:r.isVerified,onPress:()=>g(r)})},r.id))}),c&&e.jsxs(f,{style:i.submitLinkContainer,onPress:u,children:[e.jsxs(n,{style:i.submitLinkText,children:[e.jsx(n,{style:i.submitLinkNormal,children:"Want your app listed? "}),e.jsx(n,{style:i.submitLinkHighlight,children:"Submit it now!"})]}),e.jsx(h,{size:16,color:s.link,strokeWidth:2,style:i.externalLinkIcon})]})]})},i=x.create({container:{width:"100%"},header:{paddingTop:12,paddingBottom:16},sectionTitle:{fontSize:16,fontWeight:"600",color:s.textSecondary,lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:8,marginBottom:12},appCardWrapper:{width:"48%",minWidth:0},submitLinkContainer:{flexDirection:"row",alignItems:"center",paddingVertical:12,paddingHorizontal:0,gap:4},submitLinkText:{fontSize:14,lineHeight:16,flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:s.textDimmed,fontWeight:"400"},submitLinkHighlight:{color:s.link,fontWeight:"400",textDecorationLine:"underline"}});d.__docgenInfo={description:"",methods:[],displayName:"ExploreVerifiedApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"VerifiedApp"}],raw:"VerifiedApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: VerifiedApp) => void",signature:{arguments:[{type:{name:"VerifiedApp"},name:"app"}],return:{name:"void"}}},description:""},showSubmitLink:{required:!1,tsType:{name:"boolean"},description:"@default false",defaultValue:{value:"false",computed:!1}},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const T={title:"Explore/Components/ExploreVerifiedApps",component:d,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},a={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:o,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:o,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:o,isVerified:!0}]}},p={args:{...a.args,showSubmitLink:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSubmitLink: true
  }
}`,...p.parameters?.docs?.source}}};const S=["Default","WithSubmitLink"];export{a as Default,p as WithSubmitLink,S as __namedExportsOrder,T as default};
