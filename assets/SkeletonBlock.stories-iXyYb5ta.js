import{j as o,V as a,s as i,b as d}from"./theme-8QOGWT04.js";import{S as s}from"./SkeletonBlock-DCNSW4tp.js";import"./iframe-zWxnyr7p.js";import"./preload-helper-Zf8nSx-t.js";import"./Animated-C0kAQgDx.js";import"./extends-CF3RwP-h.js";import"./index-C_2ivueB.js";import"./index-BDF7tMil.js";import"./index-DRAPD8hI.js";import"./index-BxDtMcPY.js";import"./NativeEventEmitter-Dyue3d_c.js";import"./index-D6ZXtCRJ.js";import"./index-CJru1tUL.js";const j={title:"Components/SkeletonBlock",component:s,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[e=>o.jsx(a,{style:p.decorator,children:o.jsx(e,{})})]},r={args:{width:120,height:14,borderRadius:4},argTypes:{width:{control:{type:"range",min:40,max:320,step:4}}}},t={args:{width:80,height:20,borderRadius:9999},argTypes:{width:{control:{type:"range",min:40,max:320,step:4}}}},n={args:{width:40,height:40,borderRadius:9999},argTypes:{width:{control:{type:"range",min:16,max:120,step:2}},height:{control:!1}},render:e=>o.jsx(s,{width:e.width,height:typeof e.width=="number"?e.width:40,borderRadius:9999})},p=i.create({decorator:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:d.bg0,padding:32}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Circle — avatar placeholder. Single size slider drives both width and height.",...n.parameters?.docs?.description}}};const S=["Rect","Pill","Circle"];export{n as Circle,t as Pill,r as Rect,S as __namedExportsOrder,j as default};
