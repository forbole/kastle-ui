import{j as e,V as n,a as r,T as g,o as p,S as f}from"./theme-Cbj_yGlo.js";import{E as y}from"./ExploreAppCard-BpV5Y66R.js";import{c as h}from"./createLucideIcon-C6cNdf8y.js";import{i as s}from"./icon-DhbqID1i.js";import"./iframe-DJQzv2sY.js";import"./preload-helper-Zf8nSx-t.js";import"./index-tro63mcA.js";const x=h("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),o=({apps:d=[],onAppPress:m,onSubmitAppPress:c})=>{const l=t=>{m?.(t)},u=()=>{c?.()};return e.jsxs(n,{style:i.container,children:[e.jsx(n,{style:i.header,children:e.jsx(r,{style:i.sectionTitle,children:"Verified Apps"})}),e.jsx(n,{style:i.appsGrid,children:d.map((t,V)=>e.jsx(n,{style:i.appCardWrapper,children:e.jsx(y,{appName:t.appName,appCategory:t.appCategory,appIcon:t.appIcon,isVerified:t.isVerified,onPress:()=>l(t)})},t.id))}),e.jsxs(g,{style:i.submitLinkContainer,onPress:u,children:[e.jsxs(r,{style:i.submitLinkText,children:[e.jsx(r,{style:i.submitLinkNormal,children:"Want your app listed? "}),e.jsx(r,{style:i.submitLinkHighlight,children:"Submit it now!"})]}),e.jsx(x,{size:16,color:p.link,strokeWidth:2,style:i.externalLinkIcon})]})]})},i=f.create({container:{width:"100%",paddingHorizontal:20},header:{paddingTop:12,paddingBottom:16},sectionTitle:{fontSize:16,fontWeight:"600",color:p.textSecondary,lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:8,marginBottom:12},appCardWrapper:{width:"48%",minWidth:0},submitLinkContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:12,gap:4},submitLinkText:{fontSize:14,lineHeight:16,flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:p.textDimmed,fontWeight:"400"},submitLinkHighlight:{color:p.link,fontWeight:"400",textDecorationLine:"underline"}});o.__docgenInfo={description:"",methods:[],displayName:"ExploreVerifiedApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"VerifiedApp"}],raw:"VerifiedApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: VerifiedApp) => void",signature:{arguments:[{type:{name:"VerifiedApp"},name:"app"}],return:{name:"void"}}},description:""},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={title:"Components/ExploreVerifiedApps",component:o,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},a={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:s,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:s,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:s,isVerified:!0}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const T=["Default"];export{a as Default,T as __namedExportsOrder,w as default};
