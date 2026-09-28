import{j as e,V as d,s as T,a as y,t as h,c as f,b as O}from"./theme-qo1JknhX.js";import{r as c}from"./iframe-B_J3Iy1p.js";import{E as m}from"./Entry--9pP4n25.js";import{T as g}from"./index-Bqe8kY7_.js";import{S}from"./settings-2-DlOBlk3S.js";import{A as w}from"./arrow-up-down-a6y01Rx-.js";import{E as b}from"./eye-off-C8sfl74x.js";import"./preload-helper-Zf8nSx-t.js";import"./Menu-BrmCuZ5-.js";import"./index-CDYvhEJm.js";import"./extends-CF3RwP-h.js";import"./index-D5qOe2hC.js";import"./index-ZiMnrdkK.js";import"./index-CXeNlpyY.js";import"./createLucideIcon-DQBbprBX.js";import"./registry-BNXumi8c.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,U={title:"Home/Components/Entry",component:m,parameters:{backgrounds:{default:"kastle"},viewport:{defaultViewport:"iphone14"}},decorators:[s=>e.jsx(d,{style:n.screen,children:e.jsx(s,{})})]},r={render:()=>{const[s,t]=c.useState(null),a=[{label:"Manage assets",onPress:i(()=>t("Manage assets"))}];return e.jsxs(d,{style:n.column,children:[e.jsx(m,{menuItems:a}),e.jsxs(g,{allowFontScaling:!1,style:n.lastTapped,children:["Last tapped: ",s??"(none yet)"]})]})}},l={render:()=>{const[s,t]=c.useState(!0),[a,o]=c.useState(null),u=[{label:"Manage assets",onPress:i(()=>o("Manage assets"))}];return e.jsxs(d,{style:n.column,children:[e.jsx(m,{menuItems:u,isOpen:s,onOpenChange:t}),e.jsxs(g,{allowFontScaling:!1,style:n.lastTapped,children:["Last tapped: ",a??"(none yet)"]})]})}},p={render:()=>{const[s,t]=c.useState(!0),[a,o]=c.useState(null),u=[{label:"Manage assets",icon:S,onPress:i(()=>o("Manage assets"))},{label:"Sort by",icon:w,onPress:i(()=>o("Sort by"))},{label:"Hide small balances",icon:b,onPress:i(()=>o("Hide small balances"))}];return e.jsxs(d,{style:n.column,children:[e.jsx(m,{menuItems:u,isOpen:s,onOpenChange:t}),e.jsxs(g,{allowFontScaling:!1,style:n.lastTapped,children:["Last tapped: ",a??"(none yet)"]})]})}},n=T.create({screen:{backgroundColor:O.bg0,paddingHorizontal:y.s5,paddingVertical:y.s8},column:{alignItems:"flex-end"},lastTapped:{...f.bodyNormalSM,color:h.t600,marginTop:y.s3,alignSelf:"flex-start"}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [lastTapped, setLastTapped] = useState<string | null>(null);
    const menuItems: MenuItem[] = [{
      label: "Manage assets",
      onPress: fn(() => setLastTapped("Manage assets"))
    }];
    return <View style={styles.column}>
        <Entry menuItems={menuItems} />
        <Text allowFontScaling={false} style={styles.lastTapped}>
          Last tapped: {lastTapped ?? "(none yet)"}
        </Text>
      </View>;
  }
}`,...r.parameters?.docs?.source},description:{story:'Closed, uncontrolled (no `isOpen`/`onOpenChange`) — `Entry` manages\nits own open state. Tap the icon to open the menu anchored under it,\ntap "Manage assets" to fire its `onPress` (logged to Actions and shown\nbelow) and close the menu, or tap anywhere outside to close it without\nfiring anything.',...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const [lastTapped, setLastTapped] = useState<string | null>(null);
    const menuItems: MenuItem[] = [{
      label: "Manage assets",
      onPress: fn(() => setLastTapped("Manage assets"))
    }];
    return <View style={styles.column}>
        <Entry menuItems={menuItems} isOpen={isOpen} onOpenChange={setIsOpen} />
        <Text allowFontScaling={false} style={styles.lastTapped}>
          Last tapped: {lastTapped ?? "(none yet)"}
        </Text>
      </View>;
  }
}`,...l.parameters?.docs?.source},description:{story:"Open on first render via controlled `isOpen`, before the icon was\never tapped — the menu must still appear anchored under the icon\n(not an invisible overlay). Close it and tap the icon to re-open.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const [lastTapped, setLastTapped] = useState<string | null>(null);
    const menuItems: MenuItem[] = [{
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
    }];
    return <View style={styles.column}>
        <Entry menuItems={menuItems} isOpen={isOpen} onOpenChange={setIsOpen} />
        <Text allowFontScaling={false} style={styles.lastTapped}>
          Last tapped: {lastTapped ?? "(none yet)"}
        </Text>
      </View>;
  }
}`,...p.parameters?.docs?.source},description:{story:"Open, several rows with icons — the full `menuItems` shape the host\ncan pass. Each row fires its own `onPress` and then closes the menu.",...p.parameters?.docs?.description}}};const R=["Closed","Open","MultipleItems"];export{r as Closed,p as MultipleItems,l as Open,R as __namedExportsOrder,U as default};
