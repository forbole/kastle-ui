import{j as s,V as n,s as c,a,b as l}from"./theme-09mISNsL.js";import{A as p}from"./Alert-HfwVKrx_.js";import"./iframe-Ct00E-B2.js";import"./preload-helper-Zf8nSx-t.js";import"./circle-x-CVAGMUhL.js";import"./createLucideIcon-P9BBITrf.js";import"./registry-BNXumi8c.js";import"./index-J2tUWZ5M.js";import"./triangle-alert-dFM_6_LD.js";import"./circle-check-4CyvQsdj.js";import"./info-BlZxQW8L.js";import"./index-CFkunfUf.js";const I={title:"Components/Alert",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[i=>s.jsx(n,{style:d.decorator,children:s.jsx(i,{})})]},e={args:{severity:"info",title:"Good to know",children:"Delivery of this parcel generated 93.2% less carbon dioxide in the last mile."}},r={args:{severity:"warning",title:"Wrong passphrase won't show an error",children:"It will import a different wallet with no balance. Double-check before continuing."}},t={args:{severity:"error",title:"Import failed",children:"Something went wrong while importing your wallet. Please check your recovery phrase and passphrase, then try again."}},o={args:{severity:"success",title:"Wallet imported",children:"Your wallet is ready to use."}},d=c.create({decorator:{flex:1,justifyContent:"center",backgroundColor:l.bg0,padding:a.s5,gap:a.s4}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    severity: "info",
    title: "Good to know",
    children: "Delivery of this parcel generated 93.2% less carbon dioxide in the last mile."
  }
}`,...e.parameters?.docs?.source},description:{story:"Info",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    severity: "warning",
    title: "Wrong passphrase won't show an error",
    children: "It will import a different wallet with no balance. Double-check before continuing."
  }
}`,...r.parameters?.docs?.source},description:{story:"Warning",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    severity: "error",
    title: "Import failed",
    children: "Something went wrong while importing your wallet. Please check your recovery phrase and passphrase, then try again."
  }
}`,...t.parameters?.docs?.source},description:{story:"Error — long text wrap",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    severity: "success",
    title: "Wallet imported",
    children: "Your wallet is ready to use."
  }
}`,...o.parameters?.docs?.source},description:{story:"Success",...o.parameters?.docs?.description}}};const W=["Info","Warning","Error","Success"];export{t as Error,e as Info,o as Success,r as Warning,W as __namedExportsOrder,I as default};
