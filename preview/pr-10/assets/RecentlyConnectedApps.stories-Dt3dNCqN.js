import{j as e,V as o,T as p,a as c,I as y,S as I}from"./index-3F6CLQeD.js";import{r as f}from"./iframe-CDVuDSpf.js";import{S as C}from"./index-BG93NPpe.js";import{i as t}from"./icon-DhbqID1i.js";import"./preload-helper-Zf8nSx-t.js";const d=({apps:l=[],onAppPress:m,onRemoveApp:g})=>{const[r,h]=f.useState(!1),u=()=>{h(a=>!a)};return e.jsxs(o,{style:n.container,children:[e.jsxs(o,{style:n.header,children:[e.jsx(p,{style:n.sectionTitle,children:"Recently Connected"}),e.jsx(c,{onPress:u,children:e.jsx(p,{style:n.manageText,children:r?"Done":"Manage"})})]}),e.jsx(C,{horizontal:!0,showsHorizontalScrollIndicator:!1,contentContainerStyle:n.listContent,children:l.map(a=>e.jsxs(o,{style:n.appCardWrapper,children:[e.jsxs(c,{style:n.appCard,onPress:()=>!r&&m?.(a),activeOpacity:r?1:.7,children:[e.jsx(o,{style:n.iconFrame,children:a.appIcon?e.jsx(y,{source:a.appIcon,style:n.appIcon}):e.jsx(o,{style:n.appIconPlaceholder,children:e.jsx(p,{style:n.appIconPlaceholderText,children:a.appName?.charAt(0)?.toUpperCase()})})}),e.jsx(p,{style:n.appName,numberOfLines:2,children:a.appName})]}),r&&e.jsx(c,{style:n.removeBadge,onPress:()=>g?.(a),hitSlop:{top:6,bottom:6,left:6,right:6},children:e.jsx(o,{style:n.removeBadgeInner,children:e.jsx(o,{style:n.removeBadgeLine})})})]},a.id))})]})},n=I.create({container:{width:"100%",gap:8},header:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:12},sectionTitle:{fontSize:16,fontWeight:"600",color:"#9eb7c4",lineHeight:16},manageText:{fontSize:14,fontWeight:"500",color:"#00c4e7",lineHeight:14},listContent:{flexDirection:"row",gap:8,paddingTop:10},appCardWrapper:{position:"relative"},appCard:{width:110,backgroundColor:"rgba(255, 255, 255, 0.05)",borderColor:"#1a303a",borderWidth:1,borderRadius:24,alignItems:"center",paddingTop:16,paddingBottom:12,paddingHorizontal:12,gap:4},iconFrame:{width:57,height:57,backgroundColor:"rgba(255, 255, 255, 0.05)",borderColor:"#1a303a",borderWidth:1,borderRadius:9999,overflow:"hidden",alignItems:"center",justifyContent:"center"},removeBadge:{position:"absolute",top:-8,right:-8,zIndex:1},removeBadgeInner:{width:22,height:22,borderRadius:11,backgroundColor:"#F96160",alignItems:"center",justifyContent:"center"},removeBadgeLine:{width:10,height:2,borderRadius:1,backgroundColor:"#ffffff"},appIcon:{width:57,height:57,borderRadius:9999},appIconPlaceholder:{width:57,height:57,borderRadius:9999,backgroundColor:"rgba(255, 255, 255, 0.1)",alignItems:"center",justifyContent:"center"},appIconPlaceholderText:{fontSize:20,fontWeight:"600",color:"#9eb7c4"},appName:{fontSize:14,fontWeight:"400",color:"#9eb7c4",lineHeight:21,textAlign:"center"}});d.__docgenInfo={description:"",methods:[],displayName:"RecentlyConnectedApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"RecentlyConnectedApp"}],raw:"RecentlyConnectedApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!0,tsType:{name:"signature",type:"function",raw:"(app: RecentlyConnectedApp) => void",signature:{arguments:[{type:{name:"RecentlyConnectedApp"},name:"app"}],return:{name:"void"}}},description:""},onRemoveApp:{required:!0,tsType:{name:"signature",type:"function",raw:"(app: RecentlyConnectedApp) => void",signature:{arguments:[{type:{name:"RecentlyConnectedApp"},name:"app"}],return:{name:"void"}}},description:""}}};const A={title:"Components/RecentlyConnectedApps",component:d,argTypes:{onAppPress:{action:"app pressed"},onRemoveApp:{action:"remove app pressed"},onManagePress:{action:"manage pressed"}}},s={args:{apps:[{id:"0",appName:"Moonbound",appIcon:t},{id:"1",appName:"Kaspa Finance",appIcon:t},{id:"2",appName:"Zealous Swap",appIcon:t},{id:"3",appName:"KaspaCom",appIcon:t},{id:"4",appName:"Another App",appIcon:t}]}},i={args:{apps:[{id:"0",appName:"Moonbound"},{id:"1",appName:"Kaspa Finance"},{id:"2",appName:"Zealous Swap"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    apps: [{
      id: "0",
      appName: "Moonbound",
      appIcon: iconImage
    }, {
      id: "1",
      appName: "Kaspa Finance",
      appIcon: iconImage
    }, {
      id: "2",
      appName: "Zealous Swap",
      appIcon: iconImage
    }, {
      id: "3",
      appName: "KaspaCom",
      appIcon: iconImage
    }, {
      id: "4",
      appName: "Another App",
      appIcon: iconImage
    }]
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    apps: [{
      id: "0",
      appName: "Moonbound"
    }, {
      id: "1",
      appName: "Kaspa Finance"
    }, {
      id: "2",
      appName: "Zealous Swap"
    }]
  }
}`,...i.parameters?.docs?.source}}};const R=["Default","WithoutIcons"];export{s as Default,i as WithoutIcons,R as __namedExportsOrder,A as default};
