import{j as e,V as t,T as s,a as d,I,S as f,c as a}from"./theme-WdeuT6W7.js";import{r as x}from"./iframe-C8J6GUX2.js";import{S as C}from"./index-BnAIddxs.js";import{i as r}from"./icon-DhbqID1i.js";import"./preload-helper-Zf8nSx-t.js";const l=({apps:m=[],onAppPress:g,onRemoveApp:u})=>{const[p,h]=x.useState(!1),y=()=>{h(o=>!o)};return e.jsxs(t,{style:n.container,children:[e.jsxs(t,{style:n.header,children:[e.jsx(s,{style:n.sectionTitle,children:"Recently Connected"}),e.jsx(d,{onPress:y,children:e.jsx(s,{style:n.manageText,children:p?"Done":"Manage"})})]}),e.jsx(C,{horizontal:!0,showsHorizontalScrollIndicator:!1,contentContainerStyle:n.listContent,children:m.map(o=>e.jsxs(t,{style:n.appCardWrapper,children:[e.jsxs(d,{style:n.appCard,onPress:()=>!p&&g?.(o),activeOpacity:p?1:.7,children:[e.jsx(t,{style:n.iconFrame,children:o.appIcon?e.jsx(I,{source:o.appIcon,style:n.appIcon}):e.jsx(t,{style:n.appIconPlaceholder,children:e.jsx(s,{style:n.appIconPlaceholderText,children:o.appName?.charAt(0)?.toUpperCase()})})}),e.jsx(s,{style:n.appName,numberOfLines:1,ellipsizeMode:"tail",children:o.appName})]}),p&&e.jsx(d,{style:n.removeBadge,onPress:()=>u?.(o),hitSlop:{top:6,bottom:6,left:6,right:6},children:e.jsx(t,{style:n.removeBadgeInner,children:e.jsx(t,{style:n.removeBadgeLine})})})]},o.id))})]})},n=f.create({container:{width:"100%",gap:8},header:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:12},sectionTitle:{fontSize:16,fontWeight:"600",color:a.textSecondary,lineHeight:16},manageText:{fontSize:14,fontWeight:"500",color:a.primary,lineHeight:14},listContent:{flexDirection:"row",gap:8,paddingTop:10},appCardWrapper:{position:"relative"},appCard:{width:110,backgroundColor:a.backgroundSurface,borderColor:a.border,borderWidth:1,borderRadius:24,alignItems:"center",paddingTop:16,paddingBottom:12,paddingHorizontal:12,gap:4},iconFrame:{width:57,height:57,backgroundColor:a.backgroundSurface,borderColor:a.border,borderWidth:1,borderRadius:9999,overflow:"hidden",alignItems:"center",justifyContent:"center"},removeBadge:{position:"absolute",top:-8,right:-8,zIndex:1},removeBadgeInner:{width:22,height:22,borderRadius:11,backgroundColor:a.danger,alignItems:"center",justifyContent:"center"},removeBadgeLine:{width:10,height:2,borderRadius:1,backgroundColor:a.white},appIcon:{width:57,height:57,borderRadius:9999},appIconPlaceholder:{width:57,height:57,borderRadius:9999,backgroundColor:a.backgroundSurfaceStrong,alignItems:"center",justifyContent:"center"},appIconPlaceholderText:{fontSize:20,fontWeight:"600",color:a.textSecondary},appName:{fontSize:14,fontWeight:"400",color:a.textSecondary,lineHeight:21,height:21,textAlign:"center",width:"100%"}});l.__docgenInfo={description:"",methods:[],displayName:"RecentlyConnectedApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"RecentlyConnectedApp"}],raw:"RecentlyConnectedApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!0,tsType:{name:"signature",type:"function",raw:"(app: RecentlyConnectedApp) => void",signature:{arguments:[{type:{name:"RecentlyConnectedApp"},name:"app"}],return:{name:"void"}}},description:""},onRemoveApp:{required:!0,tsType:{name:"signature",type:"function",raw:"(app: RecentlyConnectedApp) => void",signature:{arguments:[{type:{name:"RecentlyConnectedApp"},name:"app"}],return:{name:"void"}}},description:""}}};const A={title:"Components/RecentlyConnectedApps",component:l,argTypes:{onAppPress:{action:"app pressed"},onRemoveApp:{action:"remove app pressed"},onManagePress:{action:"manage pressed"}}},i={args:{apps:[{id:"0",appName:"Moonbound",appIcon:r},{id:"1",appName:"Kaspa Finance",appIcon:r},{id:"2",appName:"Zealous Swap",appIcon:r},{id:"3",appName:"KaspaCom",appIcon:r},{id:"4",appName:"Another App",appIcon:r}]}},c={args:{apps:[{id:"0",appName:"Moonbound"},{id:"1",appName:"Kaspa Finance"},{id:"2",appName:"Zealous Swap"}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      appName: "Moonbound"
    }, {
      id: "1",
      appName: "Kaspa Finance"
    }, {
      id: "2",
      appName: "Zealous Swap"
    }]
  }
}`,...c.parameters?.docs?.source}}};const R=["Default","WithoutIcons"];export{i as Default,c as WithoutIcons,R as __namedExportsOrder,A as default};
