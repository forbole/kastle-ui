import{j as t,V as f,s as d}from"./theme-BvEG2el5.js";import{r as n,R as I}from"./iframe-DE-pcUbF.js";import{A as e}from"./Animated-BbiTTNbp.js";import{M as b}from"./index-a4b8Jy4s.js";import{D as V}from"./index-D5r3Kqah.js";const c=V.get("window").height,a=300,k=({isOpen:l,onClose:u,children:y,closeOnBackdropPress:p=!0,heightRatio:v=.86})=>{const o=n.useRef(new e.Value(c)).current,r=n.useRef(new e.Value(0)).current,[g,h]=I.useState(!l),m=n.useCallback(()=>{h(!1),e.parallel([e.timing(o,{toValue:0,duration:a,useNativeDriver:!0}),e.timing(r,{toValue:1,duration:a,useNativeDriver:!0})]).start()},[o,r]),s=n.useCallback(w=>{e.parallel([e.timing(o,{toValue:c,duration:a,useNativeDriver:!0}),e.timing(r,{toValue:0,duration:a,useNativeDriver:!0})]).start(()=>{h(!0),w?.()})},[o,r]);n.useEffect(()=>{l?m():s()},[l,m,s]);const x=n.useCallback(()=>{p&&s(u)},[p,s,u]);return g?null:t.jsxs(f,{style:i.overlay,pointerEvents:"box-none",children:[t.jsx(b,{onPress:x,children:t.jsx(e.View,{style:[i.backdrop,{opacity:r}]})}),t.jsxs(e.View,{renderToHardwareTextureAndroid:!0,collapsable:!1,style:[i.sheetWrapper,{maxHeight:c*v,transform:[{translateY:o}]}],pointerEvents:"box-none",children:[t.jsx(b,{onPress:()=>s(u),children:t.jsx(f,{style:i.topTapZone})}),y]})]})},i=d.create({overlay:{...d.absoluteFillObject,zIndex:100,elevation:100,justifyContent:"flex-end"},backdrop:{...d.absoluteFillObject,backgroundColor:"rgba(0, 0, 0, 0.6)"},sheetWrapper:{position:"absolute",bottom:0,left:0,right:0,justifyContent:"flex-end"},topTapZone:{position:"absolute",top:0,left:0,right:0,height:40,zIndex:10}});k.__docgenInfo={description:`InlineActionSheet — a bottom sheet that renders in the normal view
hierarchy (no Modal) to avoid keyboard-related issues.

Usage: place this component at the root level of your screen so that its
absolute-positioned overlay can cover the full screen. It uses
KeyboardAvoidingView internally so text inputs inside the sheet will be
pushed above the keyboard automatically.

@example
// In your screen root:
<View style={{ flex: 1 }}>
  <ScreenContent />
  <InlineActionSheet isOpen={open} onClose={() => setOpen(false)}>
    <MySheetContent />
  </InlineActionSheet>
</View>`,methods:[],displayName:"InlineActionSheet",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Controls visibility"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the backdrop is pressed or the sheet is dismissed"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Sheet content"},closeOnBackdropPress:{required:!1,tsType:{name:"boolean"},description:"Dismiss when pressing the backdrop (default: true)",defaultValue:{value:"true",computed:!1}},heightRatio:{required:!1,tsType:{name:"number"},description:"Max height as a ratio of screen height (0–1). Default: 0.86",defaultValue:{value:"0.86",computed:!1}}}};export{k as I};
