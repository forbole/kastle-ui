import{j as e,V as r,T as i,M as u,s as b,f as p}from"./theme-BvRy3FKs.js";import{r as x}from"./iframe-BP6utfbh.js";import{F as C}from"./index-5lGPUitZ.js";import{I as A}from"./index-D5xQ9SU0.js";import{i as a}from"./icon-DhbqID1i.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DVAKC2Ru.js";const h=120,T=8,N=({apps:g=[],onAppPress:y,onRemoveApp:f,containerPaddingHorizontal:I=20})=>{const[t,S]=x.useState(!1);return e.jsxs(r,{style:n.container,children:[e.jsxs(r,{style:n.header,children:[e.jsx(i,{style:n.sectionTitle,children:"Recently Connected"}),e.jsx(u,{onPress:()=>S(o=>!o),children:e.jsx(i,{style:n.manageText,children:t?"Done":"Manage"})})]}),e.jsx(C,{horizontal:!0,showsHorizontalScrollIndicator:!1,data:g,keyExtractor:o=>o.id,style:{marginHorizontal:-I},contentContainerStyle:[n.listContent,{paddingHorizontal:I}],snapToInterval:h+T,decelerationRate:"fast",renderItem:({item:o})=>e.jsxs(r,{style:n.appCardWrapper,children:[e.jsxs(u,{style:n.appCard,onPress:()=>!t&&y?.(o),activeOpacity:t?1:.7,children:[e.jsx(r,{style:n.iconFrame,children:o.appIcon?e.jsx(A,{source:o.appIcon,style:n.appIcon}):e.jsx(r,{style:n.appIconPlaceholder,children:e.jsx(i,{style:n.appIconPlaceholderText,children:o.appName?.charAt(0)?.toUpperCase()})})}),e.jsx(i,{style:n.appName,numberOfLines:1,ellipsizeMode:"tail",children:o.appName})]}),t&&e.jsx(u,{style:n.removeBadge,onPress:()=>f?.(o),hitSlop:{top:6,bottom:6,left:6,right:6},children:e.jsx(r,{style:n.removeBadgeInner,children:e.jsx(r,{style:n.removeBadgeLine})})})]})})]})},n=b.create({container:{width:"100%",gap:8},header:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:12},sectionTitle:{fontSize:16,fontWeight:"600",color:p.textSecondary,lineHeight:16},manageText:{fontSize:14,fontWeight:"500",color:p.primary,lineHeight:14},listContent:{gap:8,paddingTop:10},appCardWrapper:{position:"relative"},appCard:{width:h,backgroundColor:p.backgroundSurface,borderColor:p.border,borderWidth:1,borderRadius:24,alignItems:"center",paddingTop:16,paddingBottom:12,paddingHorizontal:12,gap:4},iconFrame:{width:57,height:57,backgroundColor:p.backgroundSurface,borderColor:p.border,borderWidth:1,borderRadius:9999,overflow:"hidden",alignItems:"center",justifyContent:"center"},removeBadge:{position:"absolute",top:-8,right:-8,zIndex:1},removeBadgeInner:{width:22,height:22,borderRadius:11,backgroundColor:p.danger,alignItems:"center",justifyContent:"center"},removeBadgeLine:{width:10,height:2,borderRadius:1,backgroundColor:p.white},appIcon:{width:57,height:57,borderRadius:9999},appIconPlaceholder:{width:57,height:57,borderRadius:9999,backgroundColor:p.backgroundSurfaceStrong,alignItems:"center",justifyContent:"center"},appIconPlaceholderText:{fontSize:20,fontWeight:"600",color:p.textSecondary},appName:{fontSize:14,fontWeight:"400",color:p.textSecondary,lineHeight:21,height:21,textAlign:"center"}});N.__docgenInfo={description:"",methods:[],displayName:"RecentlyConnectedApps",props:{apps:{required:!1,tsType:{name:"Array",elements:[{name:"RecentlyConnectedApp"}],raw:"RecentlyConnectedApp[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAppPress:{required:!0,tsType:{name:"signature",type:"function",raw:"(app: RecentlyConnectedApp) => void",signature:{arguments:[{type:{name:"RecentlyConnectedApp"},name:"app"}],return:{name:"void"}}},description:""},onRemoveApp:{required:!0,tsType:{name:"signature",type:"function",raw:"(app: RecentlyConnectedApp) => void",signature:{arguments:[{type:{name:"RecentlyConnectedApp"},name:"app"}],return:{name:"void"}}},description:""},containerPaddingHorizontal:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const F={title:"Explore/Components/RecentlyConnectedApps",component:N,argTypes:{onAppPress:{action:"app pressed"},onRemoveApp:{action:"remove app pressed"}},decorators:[g=>e.jsx(r,{style:{marginHorizontal:20},children:e.jsx(g,{})})]},s={args:{apps:[{id:"0",appName:"Moonbound",appIcon:a},{id:"1",appName:"Kaspa Finance",appIcon:a},{id:"2",appName:"Zealous Swap",appIcon:a},{id:"3",appName:"KaspaCom",appIcon:a},{id:"4",appName:"Another App",appIcon:a},{id:"5",appName:"DeFi Hub",appIcon:a},{id:"6",appName:"KasWallet",appIcon:a},{id:"7",appName:"SpeedSwap",appIcon:a},{id:"8",appName:"NanoTrade",appIcon:a},{id:"9",appName:"Kaspa DEX",appIcon:a},{id:"10",appName:"BlockBridge",appIcon:a},{id:"11",appName:"ChainVault",appIcon:a}]}},c={args:{apps:[{id:"0",appName:"Super Long App Name That Should Truncate",appIcon:a},{id:"1",appName:"Another Very Long Application Name",appIcon:a},{id:"2",appName:"Short",appIcon:a}]}},d={args:{apps:[{id:"0",appName:"Moonbound"},{id:"1",appName:"Kaspa Finance"},{id:"2",appName:"Zealous Swap"}]}},m={args:{apps:[{id:"0",appName:"Moonbound",appIcon:a}]}},l={args:{apps:[{id:"0",appName:"Moonbound",appIcon:a},{id:"1",appName:"Kaspa Finance",appIcon:a}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    }, {
      id: "5",
      appName: "DeFi Hub",
      appIcon: iconImage
    }, {
      id: "6",
      appName: "KasWallet",
      appIcon: iconImage
    }, {
      id: "7",
      appName: "SpeedSwap",
      appIcon: iconImage
    }, {
      id: "8",
      appName: "NanoTrade",
      appIcon: iconImage
    }, {
      id: "9",
      appName: "Kaspa DEX",
      appIcon: iconImage
    }, {
      id: "10",
      appName: "BlockBridge",
      appIcon: iconImage
    }, {
      id: "11",
      appName: "ChainVault",
      appIcon: iconImage
    }]
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    apps: [{
      id: "0",
      appName: "Moonbound",
      appIcon: iconImage
    }]
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    apps: [{
      id: "0",
      appName: "Moonbound",
      appIcon: iconImage
    }, {
      id: "1",
      appName: "Kaspa Finance",
      appIcon: iconImage
    }]
  }
}`,...l.parameters?.docs?.source}}};const K=["Default","LongName","WithoutIcons","SingleApp","TwoApps"];export{s as Default,c as LongName,m as SingleApp,l as TwoApps,d as WithoutIcons,K as __namedExportsOrder,F as default};
