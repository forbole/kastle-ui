import{i as T}from"./icon-DhbqID1i.js";import{j as r,V as y,c as x,s as f,t as C,p as E,b as S}from"./theme-qo1JknhX.js";import{r as L}from"./iframe-B_J3Iy1p.js";import{a as k,T as b}from"./TokenSelectSheet-CmCq-WZV.js";import{M as F}from"./index-CDYvhEJm.js";import{T as N}from"./index-Bqe8kY7_.js";import"./preload-helper-Zf8nSx-t.js";import"./ActionSheet-CwZKNgJG.js";import"./Animated-By0aX-69.js";import"./extends-CF3RwP-h.js";import"./index-BL2HFhuA.js";import"./index-D5qOe2hC.js";import"./index-DDuQQy7E.js";import"./index-DSzgnnKZ.js";import"./NativeEventEmitter-D0_Owwaq.js";import"./index-K9NcUoUm.js";import"./index-5wn_UjdG.js";import"./index-ZiMnrdkK.js";import"./index-CXeNlpyY.js";import"./AssetImage-C6Y-sBXY.js";import"./search-BM4hagwL.js";import"./createLucideIcon-DQBbprBX.js";import"./registry-BNXumi8c.js";import"./index-BojJprCp.js";const o=T,u=[{name:"KAS",symbol:"KAS",amount:"12.345678",logo:o,chainLogo:o},{name:"Wrapped KAS",symbol:"WKAS",amount:"0.5",logo:o,chainLogo:o},{name:"iKAS",symbol:"iKAS",amount:"3.14",logo:o,chainLogo:o},{name:"WiKAS",symbol:"WiKAS",logo:o,chainLogo:o},{name:"SomeToken",symbol:"STK",logo:o,chainLogo:o}],j=[{key:"evm_kas",label:"Kaspa",logo:o},{key:"krc20",label:"KRC20",logo:o},{key:"kasplex",label:"Kasplex",logo:o},{key:"igra",label:"Igra",logo:o}],a=e=>{const[s,t]=L.useState(e.isOpen??!0);return r.jsxs(y,{style:h.container,children:[r.jsx(F,{style:h.triggerBtn,onPress:()=>t(!0),children:r.jsx(N,{allowFontScaling:!1,style:[x.bodySemiboldMD,h.triggerText],children:"Open Token Select"})}),r.jsx(k,{...e,isOpen:s,onClose:()=>t(!1)})]})},$={title:"Swap/TokenSelectSheet",component:k,parameters:{layout:"fullscreen",backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},args:{isOpen:!0,onClose:()=>{},tokens:u,chainFilters:j,renderItem:(e,{onPress:s})=>r.jsx(b,{token:e,isDisabled:!1,onPress:s})},argTypes:{isOpen:{control:{type:"boolean"}},onClose:{action:"close"},onChainFilterChange:{action:"chainFilterChanged"},onSearchChange:{action:"searchChanged"}},decorators:[e=>r.jsx(y,{style:h.decorator,children:r.jsx(e,{})})]},n={render:e=>r.jsx(a,{...e})},i={render:e=>r.jsx(a,{...e,renderItem:(s,{onPress:t})=>r.jsx(b,{token:s,isDisabled:s.symbol===u[0].symbol,onPress:t})})},c={render:e=>{const[s,t]=L.useState(["kasplex"]);return r.jsx(a,{...e,chainFilter:s,onChainFilterChange:t})}},m={render:e=>r.jsx(a,{...e}),args:{tokens:[],isLoading:!0}},l={render:e=>r.jsx(a,{...e}),args:{tokens:[],isLoading:!1}},p={render:e=>r.jsx(a,{...e}),args:{tokens:u.map(e=>({...e,logo:void 0}))}},d={render:e=>r.jsx(a,{...e}),args:{tokens:[{name:"SuperLongTokenNameThatMightOverflow",symbol:"SLTN",chainLogo:o}]}},g={render:e=>r.jsx(a,{...e}),args:{tokens:[{name:"SuperLongTokenNameThatMightOverflow",symbol:"VERYLONGSYMBOL",amount:"9999999.123456",logo:o,chainLogo:o},{name:"AnotherExtremelyLongTokenNameForEdgeCaseTesting",symbol:"AELTFECT",amount:"0.000001",chainLogo:o}]}},h=f.create({decorator:{flex:1,backgroundColor:S.bg0},container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:S.bg0},triggerBtn:{backgroundColor:E.p500,borderRadius:9999,paddingHorizontal:24,paddingVertical:12},triggerText:{color:C.t900,fontSize:16}});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />
}`,...n.parameters?.docs?.source},description:{story:"Default: shows all tokens",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} renderItem={(token, {
    onPress
  }) => <TokenItem token={token} isDisabled={token.symbol === SAMPLE_TOKENS[0].symbol} onPress={onPress} />} />
}`,...i.parameters?.docs?.source},description:{story:"With a disabled token (first token)",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [chainFilter, setChainFilter] = useState<ChainFilter[]>(["kasplex"]);
    return <SheetDemo {...args} chainFilter={chainFilter} onChainFilterChange={setChainFilter} />;
  }
}`,...c.parameters?.docs?.source},description:{story:"With a chain filter pre-selected (controlled)",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    tokens: [],
    isLoading: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Loading state",...m.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    tokens: [],
    isLoading: false
  }
}`,...l.parameters?.docs?.source},description:{story:"Empty state",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    tokens: SAMPLE_TOKENS.map(t => ({
      ...t,
      logo: undefined
    }))
  }
}`,...p.parameters?.docs?.source},description:{story:"Tokens without logos — shows the letter placeholder",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    tokens: [{
      name: "SuperLongTokenNameThatMightOverflow",
      symbol: "SLTN",
      chainLogo: placeholderLogo
    }]
  }
}`,...d.parameters?.docs?.source},description:{story:"Long token name / address edge case",...d.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <SheetDemo {...args} />,
  args: {
    tokens: [{
      name: "SuperLongTokenNameThatMightOverflow",
      symbol: "VERYLONGSYMBOL",
      amount: "9999999.123456",
      logo: placeholderLogo,
      chainLogo: placeholderLogo
    }, {
      name: "AnotherExtremelyLongTokenNameForEdgeCaseTesting",
      symbol: "AELTFECT",
      amount: "0.000001",
      chainLogo: placeholderLogo
    }]
  }
}`,...g.parameters?.docs?.source},description:{story:"Long token name with a large balance amount",...g.parameters?.docs?.description}}};const ee=["Default","WithDisabled","WithChainFilter","Loading","Empty","NoLogos","LongNames","LongNamesWithAmount"];export{n as Default,l as Empty,m as Loading,d as LongNames,g as LongNamesWithAmount,p as NoLogos,c as WithChainFilter,i as WithDisabled,ee as __namedExportsOrder,$ as default};
