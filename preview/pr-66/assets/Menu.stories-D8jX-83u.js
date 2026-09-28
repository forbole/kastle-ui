import{j as e,V as l,s as u,a as r,t as g,c as f,b as y}from"./theme-D5QllvKu.js";import{r as c}from"./iframe-Dx-8gkZT.js";import{M as p}from"./Menu-DCKWIXi3.js";import{S as d}from"./settings-2-BQJozSQw.js";import{T as m}from"./index-BWFw-6wm.js";import{A as T}from"./arrow-up-down-ss0zlQHb.js";import{E as b}from"./eye-off-Bbewd72g.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BHCCxso1.js";import"./extends-CF3RwP-h.js";import"./createLucideIcon-B9dIegYl.js";import"./registry-BNXumi8c.js";import"./index-C5KS9oMG.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,O={title:"Components/Menu",component:p,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[s=>e.jsx(l,{style:i.screen,children:e.jsx(s,{})})]},a={render:()=>{const[s,t]=c.useState(null);return e.jsxs(l,{children:[e.jsx(p,{items:[{label:"Manage assets",icon:d,onPress:o(()=>t("Manage assets"))}]}),e.jsxs(m,{allowFontScaling:!1,style:i.lastTapped,children:["Last tapped: ",s??"(none yet)"]})]})}},n={render:()=>{const[s,t]=c.useState(null);return e.jsxs(l,{children:[e.jsx(p,{items:[{label:"Manage assets",icon:d,onPress:o(()=>t("Manage assets"))},{label:"Sort by",icon:T,onPress:o(()=>t("Sort by"))},{label:"Hide small balances",icon:b,onPress:o(()=>t("Hide small balances"))}]}),e.jsxs(m,{allowFontScaling:!1,style:i.lastTapped,children:["Last tapped: ",s??"(none yet)"]})]})}},i=u.create({screen:{backgroundColor:y.bg0,paddingHorizontal:r.s5,paddingVertical:r.s8,alignItems:"flex-start"},lastTapped:{...f.bodyNormalSM,color:g.t600,marginTop:r.s3}});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [lastTapped, setLastTapped] = useState<string | null>(null);
    return <View>
        <Menu items={[{
        label: "Manage assets",
        icon: Settings2,
        onPress: fn(() => setLastTapped("Manage assets"))
      }]} />
        <Text allowFontScaling={false} style={styles.lastTapped}>
          Last tapped: {lastTapped ?? "(none yet)"}
        </Text>
      </View>;
  }
}`,...a.parameters?.docs?.source},description:{story:'Single item — the exact case `Home/ManageAssets/Entry` uses. Tap\n"Manage assets" to see it both logged to the Actions panel (via\n`fn()` from `storybook/test`, round 17, 2026-09-28) AND reflected in\nthe "Last tapped:" line below the menu — a visible effect, not just a\nconsole log.',...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [lastTapped, setLastTapped] = useState<string | null>(null);
    return <View>
        <Menu items={[{
        label: "Manage assets",
        icon: Settings2,
        onPress: fn(() => setLastTapped("Manage assets"))
      }, {
        label: "Sort by",
        icon: ArrowUpDown,
        onPress: fn(() => setLastTapped("Sort by"))
      }, {
        label: "Hide small balances",
        icon: EyeOff,
        onPress: fn(() => setLastTapped("Hide small balances"))
      }]} />
        <Text allowFontScaling={false} style={styles.lastTapped}>
          Last tapped: {lastTapped ?? "(none yet)"}
        </Text>
      </View>;
  }
}`,...n.parameters?.docs?.source},description:{story:`Multiple rows, mixed icons — demonstrates the full \`items[]\` shape in
one story rather than one story per row count. Tap any row to see it
both logged to the Actions panel and reflected below. (\`destructive\`
isn't exercised here — none of these three rows is actually a
destructive action; the prop exists for something like "Disconnect"/
"Remove" elsewhere, not demoed with a misleading example here.)`,...n.parameters?.docs?.description}}};const k=["Default","MultipleItems"];export{a as Default,n as MultipleItems,k as __namedExportsOrder,O as default};
