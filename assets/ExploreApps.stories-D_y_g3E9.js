import{j as e,V as a,M as x,k as s,s as y}from"./theme-D1l4JLyH.js";import{A as p}from"./AppText-BlyIOzen.js";import{E as h}from"./ExploreAppCard-DAtxhVzW.js";import{E as A}from"./external-link-BZ69MOfJ.js";import{i as o}from"./icon-DhbqID1i.js";import"./iframe-D2JW07zU.js";import"./preload-helper-Zf8nSx-t.js";import"./check-Czl3zPwJ.js";import"./createLucideIcon-B75lcZ-Y.js";import"./registry-BNXumi8c.js";import"./Image-D97a3Xle.js";import"./NativeEventEmitter-Ugd1sO1d.js";const m=({apps:d=[],onAppPress:l,showSubmitLink:c=!1,onSubmitAppPress:u,title:g="Verified Apps"})=>{const f=r=>{l?.(r)};return e.jsxs(a,{style:i.container,children:[e.jsx(a,{style:i.header,children:e.jsx(p,{weight:"600",style:i.sectionTitle,children:g})}),e.jsx(a,{style:i.appsGrid,children:d.map((r,b)=>e.jsx(a,{style:i.appCardWrapper,children:e.jsx(h,{appName:r.appName,appCategory:r.appCategory,appIcon:r.appIcon,isVerified:r.isVerified,onPress:()=>f(r)})},r.id))}),c&&e.jsxs(x,{style:i.submitLinkContainer,onPress:u,children:[e.jsxs(p,{style:i.submitLinkText,children:[e.jsx(p,{weight:"400",style:i.submitLinkNormal,children:"Want your app listed? "}),e.jsx(p,{weight:"400",style:i.submitLinkHighlight,children:"Submit it now!"})]}),e.jsx(A,{size:16,color:s.link,strokeWidth:2,style:i.externalLinkIcon})]})]})},i=y.create({container:{width:"100%"},header:{paddingTop:12,paddingBottom:16},sectionTitle:{fontSize:16,color:s.textSecondary,lineHeight:16},appsGrid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:8,marginBottom:12},appCardWrapper:{width:"48%",minWidth:0},submitLinkContainer:{flexDirection:"row",alignItems:"center",paddingVertical:12,paddingHorizontal:0,gap:4},submitLinkText:{fontSize:14,lineHeight:16,flexWrap:"wrap"},externalLinkIcon:{marginTop:-1},submitLinkNormal:{color:s.textDimmed},submitLinkHighlight:{color:s.link,textDecorationLine:"underline"}});m.__docgenInfo={description:"",methods:[],displayName:"ExploreApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"ExploreApp"}],raw:"ExploreApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: ExploreApp) => void",signature:{arguments:[{type:{name:"ExploreApp"},name:"app"}],return:{name:"void"}}},description:""},showSubmitLink:{required:!1,tsType:{name:"boolean"},description:"@default false",defaultValue:{value:"false",computed:!1}},onSubmitAppPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:'@default "Verified Apps"',defaultValue:{value:'"Verified Apps"',computed:!1}}}};const W={title:"Explore/Components/ExploreApps",component:m,argTypes:{onAppPress:{action:"app pressed"},onSubmitAppPress:{action:"submit app pressed"}}},t={args:{apps:[{id:"0",appName:"Custom DeFi",appCategory:"DeFi",appIcon:o,isVerified:!0},{id:"1",appName:"Bridge App",appCategory:"Bridge",appIcon:o,isVerified:!0},{id:"2",appName:"Gaming App",appCategory:"Gaming",appIcon:o,isVerified:!0}]}},n={args:{...t.args,showSubmitLink:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSubmitLink: true
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","WithSubmitLink"];export{t as Default,n as WithSubmitLink,v as __namedExportsOrder,W as default};
