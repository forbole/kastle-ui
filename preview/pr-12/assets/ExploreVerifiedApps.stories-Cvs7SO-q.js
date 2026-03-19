import{j as e,V as t,T as a,c as g,d as p,S as f}from"./theme-BnZMV-ij.js";import{c as y,E as h}from"./ExploreAppCard-Ai96uWLh.js";import{i as s}from"./icon-DhbqID1i.js";import"./iframe-DFKDV4Jo.js";import"./preload-helper-Zf8nSx-t.js";const x=y("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),o=({apps:d=[],onAppPress:c,onSubmitAppPress:m})=>{const l=n=>{c?.(n)},u=()=>{m?.()};return e.jsxs(t,{style:i.container,children:[e.jsx(t,{style:i.header,children:e.jsx(a,{style:i.sectionTitle,children:"Verified Apps"})}),e.jsx(t,{style:i.appsGrid,children:d.map((n,V)=>e.jsx(t,{style:i.appCardWrapper,children:e.jsx(h,{appName:n.appName,appCategory:n.appCategory,appIcon:n.appIcon,isVerified:n.isVerified,onPress:()=>l(n)})},n.id))}),e.jsxs(g,{style:i.submitLinkContainer,onPress:u,children:[e.jsxs(a,{style:i.submitLinkText,children:[e.jsx(a,{style:i.submitLinkNormal,children:"Want your app listed? "}),e.jsx(a,{style:i.submitLinkHighlight,children:"Submit it now!"})]}),e.jsx(x,{size:16,color:p.link,strokeWidth:2,style:i.externalLinkIcon})]})]})},i=f.create({container:{width:"100%",paddingHorizontal:20},header:{paddingTop:12,paddingBottom:16},sectionTitle:{fontSize:16,fontWeight:"600",color:p.textSecondary,lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:8,marginBottom:12},appCardWrapper:{width:"48%",minWidth:0},submitLinkContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:12,gap:4},submitLinkText:{fontSize:14,lineHeight:16,flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:p.textDimmed,fontWeight:"400"},submitLinkHighlight:{color:p.link,fontWeight:"400",textDecorationLine:"underline"}});o.__docgenInfo={description:"",methods:[],displayName:"ExploreVerifiedApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"VerifiedApp"}],raw:"VerifiedApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: VerifiedApp) => void",signature:{arguments:[{type:{name:"VerifiedApp"},name:"app"}],return:{name:"void"}}},description:""},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const j={title:"Components/ExploreVerifiedApps",component:o,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},r={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:s,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:s,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:s,isVerified:!0}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,j as default};
