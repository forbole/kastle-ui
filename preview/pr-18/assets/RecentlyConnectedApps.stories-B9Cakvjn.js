import{j as e,V as p,T as s,M as l,s as f,d as a}from"./theme-BHilK-wr.js";import{r as x}from"./iframe-BQSm4J57.js";import{F as N}from"./index-8iZhKTRp.js";import{I as C}from"./index-D5NS78Yh.js";import{i as t}from"./icon-DhbqID1i.js";import"./preload-helper-Zf8nSx-t.js";const m=({apps:g=[],onAppPress:u,onRemoveApp:h})=>{const[r,y]=x.useState(!1),I=()=>{y(o=>!o)};return e.jsxs(p,{style:n.container,children:[e.jsxs(p,{style:n.header,children:[e.jsx(s,{style:n.sectionTitle,children:"Recently Connected"}),e.jsx(l,{onPress:I,children:e.jsx(s,{style:n.manageText,children:r?"Done":"Manage"})})]}),e.jsx(N,{horizontal:!0,showsHorizontalScrollIndicator:!1,contentContainerStyle:n.listContent,children:g.map(o=>e.jsxs(p,{style:n.appCardWrapper,children:[e.jsxs(l,{style:n.appCard,onPress:()=>!r&&u?.(o),activeOpacity:r?1:.7,children:[e.jsx(p,{style:n.iconFrame,children:o.appIcon?e.jsx(C,{source:o.appIcon,style:n.appIcon}):e.jsx(p,{style:n.appIconPlaceholder,children:e.jsx(s,{style:n.appIconPlaceholderText,children:o.appName?.charAt(0)?.toUpperCase()})})}),e.jsx(s,{style:n.appName,numberOfLines:1,ellipsizeMode:"tail",children:o.appName})]}),r&&e.jsx(l,{style:n.removeBadge,onPress:()=>h?.(o),hitSlop:{top:6,bottom:6,left:6,right:6},children:e.jsx(p,{style:n.removeBadgeInner,children:e.jsx(p,{style:n.removeBadgeLine})})})]},o.id))})]})},n=f.create({container:{width:"100%",gap:8},header:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:12},sectionTitle:{fontSize:16,fontWeight:"600",color:a.textSecondary,lineHeight:16},manageText:{fontSize:14,fontWeight:"500",color:a.primary,lineHeight:14},listContent:{flexDirection:"row",gap:8,paddingTop:10},appCardWrapper:{position:"relative"},appCard:{width:120,backgroundColor:a.backgroundSurface,borderColor:a.border,borderWidth:1,borderRadius:24,alignItems:"center",paddingTop:16,paddingBottom:12,paddingHorizontal:12,gap:4},iconFrame:{width:57,height:57,backgroundColor:a.backgroundSurface,borderColor:a.border,borderWidth:1,borderRadius:9999,overflow:"hidden",alignItems:"center",justifyContent:"center"},removeBadge:{position:"absolute",top:-8,right:-8,zIndex:1},removeBadgeInner:{width:22,height:22,borderRadius:11,backgroundColor:a.danger,alignItems:"center",justifyContent:"center"},removeBadgeLine:{width:10,height:2,borderRadius:1,backgroundColor:a.white},appIcon:{width:57,height:57,borderRadius:9999},appIconPlaceholder:{width:57,height:57,borderRadius:9999,backgroundColor:a.backgroundSurfaceStrong,alignItems:"center",justifyContent:"center"},appIconPlaceholderText:{fontSize:20,fontWeight:"600",color:a.textSecondary},appName:{fontSize:14,fontWeight:"400",color:a.textSecondary,lineHeight:21,height:21,textAlign:"center"}});m.__docgenInfo={description:"",methods:[],displayName:"RecentlyConnectedApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"RecentlyConnectedApp"}],raw:"RecentlyConnectedApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!0,tsType:{name:"signature",type:"function",raw:"(app: RecentlyConnectedApp) => void",signature:{arguments:[{type:{name:"RecentlyConnectedApp"},name:"app"}],return:{name:"void"}}},description:""},onRemoveApp:{required:!0,tsType:{name:"signature",type:"function",raw:"(app: RecentlyConnectedApp) => void",signature:{arguments:[{type:{name:"RecentlyConnectedApp"},name:"app"}],return:{name:"void"}}},description:""}}};const T={title:"Explore/Components/RecentlyConnectedApps",component:m,argTypes:{onAppPress:{action:"app pressed"},onRemoveApp:{action:"remove app pressed"},onManagePress:{action:"manage pressed"}}},i={args:{apps:[{id:"0",appName:"Moonbound",appIcon:t},{id:"1",appName:"Kaspa Finance",appIcon:t},{id:"2",appName:"Zealous Swap",appIcon:t},{id:"3",appName:"KaspaCom",appIcon:t},{id:"4",appName:"Another App",appIcon:t}]}},c={args:{apps:[{id:"0",appName:"Super Long App Name That Should Truncate",appIcon:t},{id:"1",appName:"Another Very Long Application Name",appIcon:t},{id:"2",appName:"Short",appIcon:t}]}},d={args:{apps:[{id:"0",appName:"Moonbound"},{id:"1",appName:"Kaspa Finance"},{id:"2",appName:"Zealous Swap"}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    apps: [{
      id: "0",
      appName: "Super Long App Name That Should Truncate",
      appIcon: iconImage
    }, {
      id: "1",
      appName: "Another Very Long Application Name",
      appIcon: iconImage
    }, {
      id: "2",
      appName: "Short",
      appIcon: iconImage
    }]
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const v=["Default","LongName","WithoutIcons"];export{i as Default,c as LongName,d as WithoutIcons,v as __namedExportsOrder,T as default};
