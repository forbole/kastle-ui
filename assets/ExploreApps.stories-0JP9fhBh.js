import{j as e,V as t,T as p,M as x,f as s,s as y}from"./theme-DyXfiJsI.js";import{E as h}from"./ExploreAppCard-BTmpQk8y.js";import{E as A}from"./external-link-BlX1vy3q.js";import{i as o}from"./icon-DhbqID1i.js";import"./iframe-govM8vs5.js";import"./preload-helper-Zf8nSx-t.js";import"./createLucideIcon-DgKMnioV.js";import"./index-C8Bj-2Q3.js";const d=({apps:l=[],onAppPress:m,showSubmitLink:c=!1,onSubmitAppPress:u,title:g="Verified Apps"})=>{const f=r=>{m?.(r)};return e.jsxs(t,{style:i.container,children:[e.jsx(t,{style:i.header,children:e.jsx(p,{style:i.sectionTitle,children:g})}),e.jsx(t,{style:i.appsGrid,children:l.map((r,b)=>e.jsx(t,{style:i.appCardWrapper,children:e.jsx(h,{appName:r.appName,appCategory:r.appCategory,appIcon:r.appIcon,isVerified:r.isVerified,onPress:()=>f(r)})},r.id))}),c&&e.jsxs(x,{style:i.submitLinkContainer,onPress:u,children:[e.jsxs(p,{style:i.submitLinkText,children:[e.jsx(p,{style:i.submitLinkNormal,children:"Want your app listed? "}),e.jsx(p,{style:i.submitLinkHighlight,children:"Submit it now!"})]}),e.jsx(A,{size:16,color:s.link,strokeWidth:2,style:i.externalLinkIcon})]})]})},i=y.create({container:{width:"100%"},header:{paddingTop:12,paddingBottom:16},sectionTitle:{fontSize:16,fontWeight:"600",color:s.textSecondary,lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:8,marginBottom:12},appCardWrapper:{width:"48%",minWidth:0},submitLinkContainer:{flexDirection:"row",alignItems:"center",paddingVertical:12,paddingHorizontal:0,gap:4},submitLinkText:{fontSize:14,lineHeight:16,flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:s.textDimmed,fontWeight:"400"},submitLinkHighlight:{color:s.link,fontWeight:"400",textDecorationLine:"underline"}});d.__docgenInfo={description:"",methods:[],displayName:"ExploreApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"ExploreApp"}],raw:"ExploreApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: ExploreApp) => void",signature:{arguments:[{type:{name:"ExploreApp"},name:"app"}],return:{name:"void"}}},description:""},showSubmitLink:{required:!1,tsType:{name:"boolean"},description:"@default false",defaultValue:{value:"false",computed:!1}},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Verified Apps"',defaultValue:{value:'"Verified Apps"',computed:!1}}}};const E={title:"Explore/Components/ExploreApps",component:d,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},a={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:o,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:o,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:o,isVerified:!0}]}},n={args:{...a.args,showSubmitLink:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSubmitLink: true
  }
}`,...n.parameters?.docs?.source}}};const S=["Default","WithSubmitLink"];export{a as Default,n as WithSubmitLink,S as __namedExportsOrder,E as default};
