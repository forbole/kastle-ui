import{j as e,V as t,d as a,S as g}from"./theme-CvEULk16.js";import{E as f}from"./ExploreAppCard-4MnUVAAx.js";import{a as n,T as y}from"./index-CPcmjKTW.js";import{E as x}from"./external-link-B4YZZWoN.js";import{i as s}from"./icon-DhbqID1i.js";import"./iframe-h9lFp_Do.js";import"./preload-helper-Zf8nSx-t.js";import"./createLucideIcon-CHSluO0X.js";import"./xml-D5GVgsGz.js";import"./index-BVddVD7P.js";const o=({apps:d=[],onAppPress:m,onSubmitAppPress:l})=>{const c=r=>{m?.(r)},u=()=>{l?.()};return e.jsxs(t,{style:i.container,children:[e.jsx(t,{style:i.header,children:e.jsx(n,{style:i.sectionTitle,children:"Verified Apps"})}),e.jsx(t,{style:i.appsGrid,children:d.map((r,h)=>e.jsx(t,{style:i.appCardWrapper,children:e.jsx(f,{appName:r.appName,appCategory:r.appCategory,appIcon:r.appIcon,isVerified:r.isVerified,onPress:()=>c(r)})},r.id))}),e.jsxs(y,{style:i.submitLinkContainer,onPress:u,children:[e.jsxs(n,{style:i.submitLinkText,children:[e.jsx(n,{style:i.submitLinkNormal,children:"Want your app listed? "}),e.jsx(n,{style:i.submitLinkHighlight,children:"Submit it now!"})]}),e.jsx(x,{size:16,color:a.link,strokeWidth:2,style:i.externalLinkIcon})]})]})},i=g.create({container:{width:"100%",paddingHorizontal:20},header:{paddingTop:12,paddingBottom:16},sectionTitle:{fontSize:16,fontWeight:"600",color:a.textSecondary,lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:8,marginBottom:12},appCardWrapper:{width:"48%",minWidth:0},submitLinkContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:12,gap:4},submitLinkText:{fontSize:14,lineHeight:16,flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:a.textDimmed,fontWeight:"400"},submitLinkHighlight:{color:a.link,fontWeight:"400",textDecorationLine:"underline"}});o.__docgenInfo={description:"",methods:[],displayName:"ExploreVerifiedApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"VerifiedApp"}],raw:"VerifiedApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: VerifiedApp) => void",signature:{arguments:[{type:{name:"VerifiedApp"},name:"app"}],return:{name:"void"}}},description:""},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const N={title:"Components/ExploreVerifiedApps",component:o,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},p={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:s,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:s,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:s,isVerified:!0}]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const S=["Default"];export{p as Default,S as __namedExportsOrder,N as default};
