import{j as a,V as m,s as v,a as h,b as y}from"./theme-CI3XLjdX.js";import{r as t}from"./iframe-BRTfYPGp.js";import{T as s}from"./Textarea-CGW1_c3U.js";import"./preload-helper-Zf8nSx-t.js";import"./index-CJSFGT_l.js";import"./extends-CF3RwP-h.js";import"./index-XozokZnn.js";import"./index-ClyrT4qx.js";import"./eye-BVkvrSrW.js";import"./createLucideIcon-B1McIo9u.js";import"./registry-BNXumi8c.js";import"./index-DjhBL4d3.js";import"./index-QKHM6fOK.js";import"./index-Ca2rKSTy.js";import"./scan-line-swu-zhnT.js";import"./circle-alert-DDgg3r9W.js";const P={title:"Components/Textarea",component:s,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[e=>a.jsx(m,{style:x.decorator,children:a.jsx(e,{})})]},o={render:()=>{const[e,r]=t.useState("");return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key"})}},n={render:()=>{const[e,r]=t.useState("witch collapse practice feed shame open despair creek road again ice least");return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key"})}},c={render:()=>{const[e,r]=t.useState("not a valid phrase");return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key",error:"Invalid recovery phrase"})}},p={render:()=>{const[e,r]=t.useState("witch collapse practice feed shame open despair creek road again ice least"),[d,u]=t.useState(!0);return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key",masked:d,onPressMask:()=>u(!1)})}},l={render:()=>{const[e,r]=t.useState("");return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key",scanIcon:!1})}},i={render:()=>{const[e,r]=t.useState("witch collapse practice feed shame");return a.jsx(s,{value:e,onChangeText:r,placeholder:"Enter your recovery phrase or private key",disabled:!0})}},x=v.create({decorator:{flex:1,justifyContent:"center",backgroundColor:y.bg0,padding:h.s5}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"No scan icon",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("witch collapse practice feed shame");
    return <Textarea value={value} onChangeText={setValue} placeholder="Enter your recovery phrase or private key" disabled />;
  }
}`,...i.parameters?.docs?.source},description:{story:"Disabled",...i.parameters?.docs?.description}}};const _=["Default","Filled","Error","Masked","NoScanIcon","Disabled"];export{o as Default,i as Disabled,c as Error,n as Filled,p as Masked,l as NoScanIcon,_ as __namedExportsOrder,P as default};
