import{j as a,V as d,s as m,a as v,b as h}from"./theme-DsIVqOpk.js";import{r as t}from"./iframe-Be-tza-6.js";import{T as s}from"./Textarea-DnzoSFFv.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Bdrro2xU.js";import"./extends-CF3RwP-h.js";import"./index-D3gmiGVC.js";import"./index-C_FmmCNT.js";import"./eye-CaABbLIk.js";import"./createLucideIcon-Bg0PyGW2.js";import"./registry-BNXumi8c.js";import"./index-CQ0gql0M.js";import"./index-ChVMjmX5.js";import"./index-BpFmmIEq.js";import"./scan-line-D0xmkLWQ.js";import"./circle-alert-B1hsmG_9.js";const D={title:"Components/Textarea",component:s,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[e=>a.jsx(d,{style:y.decorator,children:a.jsx(e,{})})]},o={render:()=>{const[e,r]=t.useState("");return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key"})}},n={render:()=>{const[e,r]=t.useState("witch collapse practice feed shame open despair creek road again ice least");return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key"})}},c={render:()=>{const[e,r]=t.useState("not a valid phrase");return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key",error:"Invalid recovery phrase"})}},p={render:()=>{const[e,r]=t.useState("witch collapse practice feed shame open despair creek road again ice least"),[i,u]=t.useState(!0);return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key",masked:i,onPressMask:()=>u(!1)})}},l={render:()=>{const[e,r]=t.useState("");return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key",scanIcon:!1})}},y=m.create({decorator:{flex:1,justifyContent:"center",backgroundColor:h.bg0,padding:v.s5}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <Textarea value={value} onChangeText={setValue} placeholder="Enter your recovery phrase or private key" />;
  }
}`,...o.parameters?.docs?.source},description:{story:"Empty — placeholder, scan icon visible",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("witch collapse practice feed shame open despair creek road again ice least");
    return <Textarea value={value} onChangeText={setValue} placeholder="Enter your recovery phrase or private key" />;
  }
}`,...n.parameters?.docs?.source},description:{story:"Filled with a recovery phrase",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("not a valid phrase");
    return <Textarea value={value} onChangeText={setValue} placeholder="Enter your recovery phrase or private key" error="Invalid recovery phrase" />;
  }
}`,...c.parameters?.docs?.source},description:{story:"Error state",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("witch collapse practice feed shame open despair creek road again ice least");
    const [masked, setMasked] = useState(true);
    return <Textarea value={value} onChangeText={setValue} placeholder="Enter your recovery phrase or private key" masked={masked} onPressMask={() => setMasked(false)} />;
  }
}`,...p.parameters?.docs?.source},description:{story:"Masked — blur overlay, tap to reveal",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <Textarea value={value} onChangeText={setValue} placeholder="Enter your recovery phrase or private key" scanIcon={false} />;
  }
}`,...l.parameters?.docs?.source},description:{story:"No scan icon",...l.parameters?.docs?.description}}};const P=["Default","Filled","Error","Masked","NoScanIcon"];export{o as Default,c as Error,n as Filled,p as Masked,l as NoScanIcon,P as __namedExportsOrder,D as default};
