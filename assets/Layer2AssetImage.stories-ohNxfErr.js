import{i as d}from"./icon-DhbqID1i.js";import{j as i,V as m,s as l,b as I}from"./theme-C2FM7K18.js";import{L as p}from"./Layer2AssetImage-B0oNtvky.js";import"./iframe-C3dWk1Jw.js";import"./preload-helper-Zf8nSx-t.js";import"./index-C_Nt7_G4.js";import"./extends-CF3RwP-h.js";const c=d,x={title:"Components/Layer2AssetImage",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{tokenImage:c,chainImage:c,tokenImageSize:40,chainImageSize:18},argTypes:{tokenImageSize:{control:{type:"range",min:24,max:80,step:2}},chainImageSize:{control:{type:"range",min:12,max:32,step:2}}},decorators:[e=>i.jsx(m,{style:g.decorator,children:i.jsx(e,{})})]},a={},r={args:{tokenImageSize:56,chainImageSize:22}},o={args:{tokenImageSize:28,chainImageSize:14}},s={args:{tokenImage:void 0}},t={args:{chainImage:void 0}},n={render:()=>i.jsx(m,{style:g.row,children:[28,36,40,48,56].map(e=>i.jsx(p,{tokenImage:c,chainImage:c,tokenImageSize:e,chainImageSize:Math.round(e*.45)},e))})},g=l.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:I.bg0,padding:32},row:{flexDirection:"row",alignItems:"center",gap:24}});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:"Default — 40px token with 18px chain badge",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tokenImageSize: 56,
    chainImageSize: 22
  }
}`,...r.parameters?.docs?.source},description:{story:"Larger token size",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tokenImageSize: 28,
    chainImageSize: 14
  }
}`,...o.parameters?.docs?.source},description:{story:"Small token size",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tokenImage: undefined
  }
}`,...s.parameters?.docs?.source},description:{story:"No token image — falls back to kaspa icon",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    chainImage: undefined
  }
}`,...t.parameters?.docs?.source},description:{story:"No chain image — falls back to kaspa icon",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <View style={styles.row}>
      {([28, 36, 40, 48, 56] as const).map(size => <Layer2AssetImage key={size} tokenImage={placeholderLogo} chainImage={placeholderLogo} tokenImageSize={size} chainImageSize={Math.round(size * 0.45)} />)}
    </View>
}`,...n.parameters?.docs?.source},description:{story:"Side-by-side comparison of multiple sizes",...n.parameters?.docs?.description}}};const w=["Default","Large","Small","NoTokenImage","NoChainImage","SizeComparison"];export{a as Default,r as Large,t as NoChainImage,s as NoTokenImage,n as SizeComparison,o as Small,w as __namedExportsOrder,x as default};
