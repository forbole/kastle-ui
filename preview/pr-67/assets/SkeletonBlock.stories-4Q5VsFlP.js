import{j as o,V as a,s as i,b as d}from"./theme-CYzR7QY_.js";import{S as s}from"./SkeletonBlock-CIJh-rXn.js";import"./iframe-CjwuzOz5.js";import"./preload-helper-Zf8nSx-t.js";import"./Animated-BHHD7Qa6.js";import"./extends-CF3RwP-h.js";import"./index-Cf_-suJC.js";import"./index-BXwTTTK-.js";import"./index-Dz__hhGa.js";import"./index-CSijo8vk.js";import"./EventEmitter-DNVZYx7c.js";import"./NativeEventEmitter-DTLhOJvD.js";import"./index-DL-NNYlp.js";import"./index-Cz_8FiFD.js";const S={title:"Components/SkeletonBlock",component:s,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[e=>o.jsx(a,{style:p.decorator,children:o.jsx(e,{})})]},r={args:{width:120,height:14,borderRadius:4},argTypes:{width:{control:{type:"range",min:40,max:320,step:4}}}},t={args:{width:80,height:20,borderRadius:9999},argTypes:{width:{control:{type:"range",min:40,max:320,step:4}}}},n={args:{width:40,height:40,borderRadius:9999},argTypes:{width:{control:{type:"range",min:16,max:120,step:2}},height:{control:!1}},render:e=>o.jsx(s,{width:e.width,height:typeof e.width=="number"?e.width:40,borderRadius:9999})},p=i.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:d.bg0,padding:32}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    width: 120,
    height: 14,
    borderRadius: 4
  },
  argTypes: {
    width: {
      control: {
        type: "range",
        min: 40,
        max: 320,
        step: 4
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Rectangle — text line placeholder. Only width is adjustable.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 80,
    height: 20,
    borderRadius: 9999
  },
  argTypes: {
    width: {
      control: {
        type: "range",
        min: 40,
        max: 320,
        step: 4
      }
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Pill — chip / badge placeholder. Only width is adjustable.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    width: 40,
    height: 40,
    borderRadius: 9999
  },
  argTypes: {
    width: {
      control: {
        type: "range",
        min: 16,
        max: 120,
        step: 2
      }
    },
    height: {
      control: false
    }
  },
  render: args => <SkeletonBlock width={args.width} height={typeof args.width === "number" ? args.width : 40} borderRadius={9999} />
}`,...n.parameters?.docs?.source},description:{story:"Circle — avatar placeholder. Single size slider drives both width and height.",...n.parameters?.docs?.description}}};const C=["Rect","Pill","Circle"];export{n as Circle,t as Pill,r as Rect,C as __namedExportsOrder,S as default};
