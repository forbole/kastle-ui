import{j as e,V as a,T as t,a as u,S as g}from"./index-3F6CLQeD.js";import{c as f,E as y}from"./ExploreAppCard-B8DBM7mO.js";import{i as p}from"./icon-DhbqID1i.js";import"./iframe-CDVuDSpf.js";import"./preload-helper-Zf8nSx-t.js";const h=f("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),s=({apps:o=[],onAppPress:d,onSubmitAppPress:c})=>{const m=n=>{d?.(n)},l=()=>{c?.()};return e.jsxs(a,{style:i.container,children:[e.jsx(a,{style:i.header,children:e.jsx(t,{style:i.sectionTitle,children:"Verified Apps"})}),e.jsx(a,{style:i.appsGrid,children:o.map((n,x)=>e.jsx(a,{style:i.appCardWrapper,children:e.jsx(y,{appName:n.appName,appCategory:n.appCategory,appIcon:n.appIcon,isVerified:n.isVerified,onPress:()=>m(n)})},n.id))}),e.jsxs(u,{style:i.submitLinkContainer,onPress:l,children:[e.jsxs(t,{style:i.submitLinkText,children:[e.jsx(t,{style:i.submitLinkNormal,children:"Want your app listed? "}),e.jsx(t,{style:i.submitLinkHighlight,children:"Submit it now!"})]}),e.jsx(h,{size:16,color:"#13dcff",strokeWidth:2,style:i.externalLinkIcon})]})]})},i=g.create({container:{width:"100%",paddingHorizontal:20},header:{paddingTop:12,paddingBottom:16},sectionTitle:{fontSize:16,fontWeight:"600",color:"#9eb7c4",lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:8,marginBottom:12},appCardWrapper:{width:"48%",minWidth:0},submitLinkContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:12,gap:4},submitLinkText:{fontSize:14,lineHeight:16,flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:"#4b7d92",fontWeight:"400"},submitLinkHighlight:{color:"#13dcff",fontWeight:"400",textDecorationLine:"underline"}});s.__docgenInfo={description:"",methods:[],displayName:"ExploreVerifiedApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"VerifiedApp"}],raw:"VerifiedApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: VerifiedApp) => void",signature:{arguments:[{type:{name:"VerifiedApp"},name:"app"}],return:{name:"void"}}},description:""},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const k={title:"Components/ExploreVerifiedApps",component:s,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},r={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:p,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:p,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:p,isVerified:!0}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const j=["Default"];export{r as Default,j as __namedExportsOrder,k as default};
