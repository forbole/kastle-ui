# Kastle UI — GitHub Copilot Instructions

## Project Overview

React Native component library for the Kastle wallet, documented with Storybook (`@storybook/react-native-web-vite`). Components are written in TypeScript and rendered on web via `react-native-web` for Storybook previews.

---

## Tech Stack

| Layer | Tool |
|---|---|
| UI | React Native (`View`, `Text`, `StyleSheet`, `Pressable`, `TouchableOpacity`, …) |
| Images | `expo-image` (`Image`) |
| Icons | `lucide-react-native` |
| Font | Figtree (400 / 500 / 600 / 700) loaded via Google Fonts in Storybook |
| Language | TypeScript (strict) |
| Storybook | `@storybook/react-native-web-vite` v10 |

---

## Folder Structure

```
src/
├── components/
│   ├── AppText/           # Global text wrapper (see below)
│   ├── ActionSheet/       # Bottom sheet base
│   ├── EstFeeSheet/       # Fee breakdown sheet
│   ├── InfoSheet/         # Info/help sheet
│   ├── LinkButton/        # Linked/sm text-only button
│   ├── SwipeToConfirm/    # Swipe-to-confirm action
│   └── explore/           # Explore-screen-specific components
│       ├── ApiConnectSheet/
│       ├── Banner/
│       ├── CommitRevealSheet/
│       ├── EvmSignTxSheet/
│       ├── ExploreAppCard/
│       ├── ExploreAppDetailsScreen/
│       ├── ExploreApps/
│       ├── ExploreUrlBar/
│       ├── KaspaSignTxSheet/
│       ├── RecentlyConnectedApps/
│       ├── SignMessageSheet/
│       └── SwitchNetworkSheet/
└── config/
    └── theme.ts           # All design tokens
```

Each component folder contains:
- `ComponentName.tsx` — component implementation
- `ComponentName.stories.tsx` — Storybook stories
- `index.ts` — re-exports

---

## Design Tokens (`src/config/theme.ts`)

Always import tokens from `../../config/theme` (adjust relative path). **Never hard-code hex colours or raw numbers** that exist as tokens.

### Key tokens

```ts
// Spacing (px)
spacing.s1 = 4 | s2 = 8 | s3 = 12 | s4 = 16 | s8 = 32 | s9 = 36

// Border radius
borderRadius.xs = 2 | xl = 12 | "2xl" = 16 | "3xl" = 24 | full = 9999

// Border width
borderWidth.bw1 = 1

// Opacity
opacity.o40 = 0.4

// Text colours (dark mode)
typography.t900 = "#FFFFFF"   // primary text
typography.t700 = "#C1D5DE"   // secondary text
typography.t600 = "#9EB7C4"   // tertiary text
typography.t500 = "#7B9AAA"   // muted text

// Brand colours
primary.p500 = "#00C4E7"  // default
primary.p700 = "#4BE8FC"  // pressed/hover

// Background
background.bg50  = "#102832"  // card surface
background.bg100 = "#1A303A"  // sheet surface

// Borders
border.b100 = "#172B34"
border.b200 = "#1A303A"
border.b300 = "#1E3945"

// Flat alias object (prefer for simple cases)
colors.textPrimary | textSecondary | textMuted | border | backgroundSurface | primary | …
```

---

## `AppText` — Typography Component

**Always use `AppText` instead of React Native's `<Text>`** for all user-facing strings. `AppText` automatically maps the `weight` prop to the correct Figtree font family on both native and web.

```tsx
import { AppText } from "../../AppText";

// Props
weight?: "400" | "500" | "600" | "700"  // default: "400"

// Usage
<AppText weight="600" style={styles.title}>Hello</AppText>
<AppText style={styles.body}>Normal text</AppText>   // weight defaults to "400"
```

**Exceptions — keep plain `<Text>` for:**
- Monospace code blocks: `fontFamily: "monospace"` (e.g. `rawDetailsText`, `scriptText`)
- Emoji/icon text nodes inside icon wrappers (no font needed)

**Do NOT:**
- Set `fontWeight` in `StyleSheet` entries that are used with `AppText` — weight is managed by the `weight` prop
- Set `fontFamily` manually in `StyleSheet` for Figtree text

---

## Component Conventions

### Styling
- Use `StyleSheet.create({})` — no inline style objects for layout
- Use theme tokens; never raw hex or magic numbers
- Colours for state variants (pressed, disabled) go inline when dynamic:  
  `[styles.label, pressed && styles.labelPressed]`

### Props
- Extend the closest relevant RN prop interface (e.g. `PressableProps`, `ViewProps`)
- Use optional chaining for callbacks: `onPress?.()`, `onClose?.()`
- Export both the component and its props type from `index.ts`

### ActionSheet pattern
All bottom sheets wrap `<ActionSheet isOpen onClose>` and follow this layout:
```
container
  handlebarWrapper > handlebar (drag indicator)
  [appHeader]       (fixed, not scrollable)
  [divider]
  ScrollView        (flex content)
  bottomBar         (fixed action area)
  homeIndicator     (height: 34, iOS safe area)
```

### Storybook stories
- Use `satisfies Meta<typeof Component>` typing
- Cover: default, variants, edge cases (empty state, long strings)
- Default background: `kastle` (`#051D27`)
- Default viewport: `iphone14`

---

## Font Setup

Figtree is loaded via Google Fonts in `.storybook/preview.ts` (web only).  
On native, fonts are loaded by Expo (`Figtree_400Regular`, `Figtree_500Medium`, `Figtree_600SemiBold`, `Figtree_700Bold`).  
`AppText` handles the platform difference automatically — no manual setup needed per component.

---

## Common Patterns

### Pressable with pressed/disabled state
```tsx
<Pressable
  style={({ pressed }) => [styles.button, disabled && styles.disabled]}
  disabled={disabled}
>
  {({ pressed }) => (
    <AppText weight="500" style={[styles.label, pressed && styles.labelPressed]}>
      {label}
    </AppText>
  )}
</Pressable>
```

### Network / status badge
```tsx
<View style={styles.networkBadge}>
  <AppText weight="400" style={styles.networkBadgeText}>{label}</AppText>
</View>
// styles: backgroundColor: info.background, borderColor: info.i300, borderRadius: borderRadius.full
// text color: info.i800
```

### App header (sheet top)
```tsx
<View style={styles.appHeader}>        // flexDirection: "row", gap: 8
  <View style={styles.appIconContainer}>  // 40×40, borderRadius: "2xl", overflow: "hidden"
    {appIcon ? <Image source={appIcon} /> : <View style={styles.appIconPlaceholder}>…</View>}
  </View>
  <View style={styles.appMeta}>
    <AppText weight="600" style={styles.appTitle}>{appName}</AppText>
    <AppText weight="400" style={styles.appUrl}>{appUrl}</AppText>
  </View>
</View>
```
