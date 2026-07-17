import{j as i,V as d,s as l,b as u}from"./theme-BqYMy_pQ.js";import{B as p}from"./BottomActionBar-We7U5db2.js";import"./iframe-DyX1_DgY.js";import"./preload-helper-Zf8nSx-t.js";import"./info-CamKWV75.js";import"./createLucideIcon-DvNJsJek.js";import"./registry-BNXumi8c.js";import"./index-BjH-MALJ.js";import"./index-CFW6ixWj.js";import"./index-cChUFaRk.js";import"./extends-CF3RwP-h.js";const S={title:"Components/BottomActionBar",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"},layout:"fullscreen"},decorators:[c=>i.jsx(d,{style:m.decorator,children:i.jsx(c,{})})]},e={args:{buttons:[{label:"Continue",onPress:()=>{}}]}},r={args:{buttons:[{label:"Continue",disabled:!0}]}},s={args:{message:{text:"How a Vault works?",variant:"info",onPress:()=>{}},buttons:[{label:"Continue",onPress:()=>{}}]}},a={args:{message:{text:"Oh, you don’t have enough funds",variant:"error"},buttons:[{label:"Continue",onPress:()=>{}}]}},t={args:{buttons:[{label:"Withdraw",variant:"outline",onPress:()=>{}}]}},o={args:{message:{text:"Wasn't you? Withdraw now,  funds can only go to your recovery address.",variant:"error"},buttons:[{label:"Withdraw now",variant:"warning",onPress:()=>{}}]}},n={args:{buttons:[{label:"Set up a Vault",onPress:()=>{}},{label:"Maybe later",variant:"outline",onPress:()=>{}}]}},m=l.create({decorator:{flex:1,justifyContent:"flex-end",backgroundColor:u.bg0}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    buttons: [{
      label: "Continue",
      onPress: () => {}
    }]
  }
}`,...e.parameters?.docs?.source},description:{story:"Single primary CTA.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    buttons: [{
      label: "Continue",
      disabled: true
    }]
  }
}`,...r.parameters?.docs?.source},description:{story:"Disabled CTA — nothing entered yet.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    message: {
      text: "How a Vault works?",
      variant: "info",
      onPress: () => {}
    },
    buttons: [{
      label: "Continue",
      onPress: () => {}
    }]
  }
}`,...s.parameters?.docs?.source},description:{story:"Info link above the CTA (create-vault amount step).",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    message: {
      text: "Oh, you don’t have enough funds",
      variant: "error"
    },
    buttons: [{
      label: "Continue",
      onPress: () => {}
    }]
  }
}`,...a.parameters?.docs?.source},description:{story:"Validation error above the CTA (Figma 12831:678052).",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    buttons: [{
      label: "Withdraw",
      variant: "outline",
      onPress: () => {}
    }]
  }
}`,...t.parameters?.docs?.source},description:{story:"Outline-only action (vault detail, locked).",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    message: {
      text: "Wasn't you? Withdraw now,  funds can only go to your recovery address.",
      variant: "error"
    },
    buttons: [{
      label: "Withdraw now",
      variant: "warning",
      onPress: () => {}
    }]
  }
}`,...o.parameters?.docs?.source},description:{story:"Orange action + danger line (vault detail, withdrawing).",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    buttons: [{
      label: "Set up a Vault",
      onPress: () => {}
    }, {
      label: "Maybe later",
      variant: "outline",
      onPress: () => {}
    }]
  }
}`,...n.parameters?.docs?.source},description:{story:"Stacked pair — primary over outline.",...n.parameters?.docs?.description}}};const k=["Primary","Disabled","WithInfoMessage","WithErrorMessage","Outline","WarningWithDanger","Stacked"];export{r as Disabled,t as Outline,e as Primary,n as Stacked,o as WarningWithDanger,a as WithErrorMessage,s as WithInfoMessage,k as __namedExportsOrder,S as default};
