import{i as u}from"./icon-DhbqID1i.js";import{j as d,V as p,s as f,b as I}from"./theme-8QOGWT04.js";import{D as l}from"./DualAssetImage-C1Mo4lNO.js";import"./iframe-zWxnyr7p.js";import"./preload-helper-Zf8nSx-t.js";import"./index-D6ZXtCRJ.js";import"./extends-CF3RwP-h.js";import"./index-BDF7tMil.js";const e=u,v={title:"Components/DualAssetImage",component:l,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{fromImage:e,toImage:e,chainImage:e,fallback:e,size:40},argTypes:{size:{control:{type:"range",min:24,max:96,step:2}},tokenSize:{control:{type:"range",min:12,max:64,step:2}},chainSize:{control:{type:"range",min:8,max:32,step:2}}},decorators:[m=>d.jsx(p,{style:g.decorator,children:d.jsx(m,{})})]},r={},a={args:{size:64}},o={args:{size:28}},s={args:{fromImage:void 0,fallback:void 0}},t={args:{toImage:void 0,fallback:void 0}},n={args:{chainImage:void 0,fallback:void 0}},i={args:{fromImage:void 0,toImage:void 0,chainImage:void 0,fallback:void 0}},c={render:()=>d.jsx(p,{style:g.row,children:[24,32,40,56,72].map(m=>d.jsx(l,{fromImage:e,toImage:e,chainImage:e,size:m},m))})},g=f.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:I.bg0,padding:32},row:{flexDirection:"row",alignItems:"center",gap:24}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Default — 40x40 bounding box",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 64
  }
}`,...a.parameters?.docs?.source},description:{story:"Larger size",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 28
  }
}`,...o.parameters?.docs?.source},description:{story:"Smaller size",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fromImage: undefined,
    fallback: undefined
  }
}`,...s.parameters?.docs?.source},description:{story:"No from-image — plain coloured circle",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    toImage: undefined,
    fallback: undefined
  }
}`,...t.parameters?.docs?.source},description:{story:"No to-image — plain coloured circle",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    chainImage: undefined,
    fallback: undefined
  }
}`,...n.parameters?.docs?.source},description:{story:"No chain image — plain coloured circle",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fromImage: undefined,
    toImage: undefined,
    chainImage: undefined,
    fallback: undefined
  }
}`,...i.parameters?.docs?.source},description:{story:"No images — all three fall back to plain coloured circles",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <View style={styles.row}>
      {([24, 32, 40, 56, 72] as const).map(size => <DualAssetImage key={size} fromImage={placeholderLogo} toImage={placeholderLogo} chainImage={placeholderLogo} size={size} />)}
    </View>
}`,...c.parameters?.docs?.source},description:{story:"Side-by-side size comparison",...c.parameters?.docs?.description}}};const w=["Default","Large","Small","NoFromImage","NoToImage","NoChainImage","NoImages","SizeComparison"];export{r as Default,a as Large,n as NoChainImage,s as NoFromImage,i as NoImages,t as NoToImage,c as SizeComparison,o as Small,w as __namedExportsOrder,v as default};
