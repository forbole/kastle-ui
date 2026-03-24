import{j as e,V as t,T as n,M as g,d as a,s as f}from"./theme-SW2ywXho.js";import{E as x}from"./ExploreAppCard-Ba2Ziq5_.js";import{E as y}from"./external-link-CWMgy1f9.js";import{i as s}from"./icon-DhbqID1i.js";import"./iframe-B6bk2Vn3.js";import"./preload-helper-Zf8nSx-t.js";import"./createLucideIcon-8aLrxoFn.js";import"./index-DFYSHgr_.js";const o=({apps:d=[],onAppPress:m,onSubmitAppPress:l})=>{const c=r=>{m?.(r)},u=()=>{l?.()};return e.jsxs(t,{style:i.container,children:[e.jsx(t,{style:i.header,children:e.jsx(n,{style:i.sectionTitle,children:"Verified Apps"})}),e.jsx(t,{style:i.appsGrid,children:d.map((r,h)=>e.jsx(t,{style:i.appCardWrapper,children:e.jsx(x,{appName:r.appName,appCategory:r.appCategory,appIcon:r.appIcon,isVerified:r.isVerified,onPress:()=>c(r)})},r.id))}),e.jsxs(g,{style:i.submitLinkContainer,onPress:u,children:[e.jsxs(n,{style:i.submitLinkText,children:[e.jsx(n,{style:i.submitLinkNormal,children:"Want your app listed? "}),e.jsx(n,{style:i.submitLinkHighlight,children:"Submit it now!"})]}),e.jsx(y,{size:16,color:a.link,strokeWidth:2,style:i.externalLinkIcon})]})]})},i=f.create({container:{width:"100%"},header:{paddingTop:12,paddingBottom:16},sectionTitle:{fontSize:16,fontWeight:"600",color:a.textSecondary,lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:8,marginBottom:12},appCardWrapper:{width:"48%",minWidth:0},submitLinkContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:12,gap:4},submitLinkText:{fontSize:14,lineHeight:16,flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:a.textDimmed,fontWeight:"400"},submitLinkHighlight:{color:a.link,fontWeight:"400",textDecorationLine:"underline"}});o.__docgenInfo={description:"",methods:[],displayName:"ExploreVerifiedApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"VerifiedApp"}],raw:"VerifiedApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: VerifiedApp) => void",signature:{arguments:[{type:{name:"VerifiedApp"},name:"app"}],return:{name:"void"}}},description:""},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={title:"Explore/Components/ExploreVerifiedApps",component:o,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},p={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:s,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:s,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:s,isVerified:!0}]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const L=["Default"];export{p as Default,L as __namedExportsOrder,w as default};
