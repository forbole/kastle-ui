/**
 * Kastle UI Design Tokens (Dark mode)
 *
 * Canonical source of truth for all visual values.
 * Figma reference: https://www.figma.com/design/bd49NycFuloqaJvXaib8wx/Kastle-Component--GluesStack-
 * Variable set ID: 605-2019
 *
 * All style values — colours, spacing, typography, shadows — must come from this file.
 */

// ---------------------------------------------------------------------------
// Primitive Palettes
// ---------------------------------------------------------------------------

/** Icy Blue — primary brand color ramp (dark → light) */
export const primary = {
  /** #072735 — darkest */
  p0: "#072735",
  /** #093446 */
  p50: "#093446",
  /** #0C465F */
  p100: "#0C465F",
  /** #125F78 — used for pressed */
  p200: "#125F78",
  /** #0A7694 — used for hover */
  p300: "#0A7694",
  /** #00B1D0 — used for default */
  p400: "#00B1D0",
  /** #00C4E7 — Brand color */
  p500: "#00C4E7",
  /** #13DCFF */
  p600: "#13DCFF",
  /** #4BE8FC */
  p700: "#4BE8FC",
  /** #A2F5FF */
  p800: "#A2F5FF",
  /** #CEFBFF */
  p900: "#CEFBFF",
  /** #FFFFFF */
  p950: "#FFFFFF",
} as const;

/** Daintree — secondary dark teal ramp */
export const secondary = {
  /** #09171D — darkest */
  s0: "#09171D",
  /** #102832 */
  s50: "#102832",
  /** #1A303A */
  s100: "#1A303A",
  /** #1E3945 */
  s200: "#1E3945",
  /** #203C49 */
  s300: "#203C49",
  /** #3B6273 */
  s400: "#3B6273",
  /** #3B6F86 */
  s500: "#3B6F86",
  /** #4B7D92 */
  s600: "#4B7D92",
  /** #7B9AAA */
  s700: "#7B9AAA",
  /** #9EB7C4 */
  s800: "#9EB7C4",
  /** #C1D5DE */
  s900: "#C1D5DE",
  /** #FFFFFF */
  s950: "#FFFFFF",
} as const;

/** Tertiary — amber/orange ramp (⛔️ use sparingly) */
export const tertiary = {
  t0: "#543112",
  t50: "#6C3D13",
  t100: "#824917",
  t200: "#B4621A",
  t300: "#D7751F",
  t400: "#E78128",
  t500: "#FB9D4B",
  t600: "#FDB474",
  t700: "#FED1AA",
  t800: "#FFE9D5",
  t900: "#FFF2E5",
  t950: "#FFFAF5",
} as const;

// ---------------------------------------------------------------------------
// Semantic Color Tokens
// ---------------------------------------------------------------------------

/** Background colors */
export const background = {
  /** #051D27 — Primary background */
  bg0: "#051D27",
  /** #102832 — Secondary background */
  bg50: "#102832",
  /** #1A303A — Tertiary (= secondary.s100) */
  bg100: secondary.s100,
  /** #1E3945 (= secondary.s200) */
  bg200: secondary.s200,
  /** #203C49 (= secondary.s300) */
  bg300: secondary.s300,
  /** #294E5E */
  bg400: "#294E5E",
  /** #294E5E */
  bg500: "#294E5E",
  /** #3B6F86 (= secondary.s500) */
  bg600: secondary.s500,
  /** #4B7D92 (= secondary.s600) */
  bg700: secondary.s600,
  /** #7B9AAA (= secondary.s700) */
  bg800: secondary.s700,
  /** #9EB7C4 (= secondary.s800) */
  bg900: secondary.s800,
  /** #FFFFFF (= secondary.s950) */
  bg950: secondary.s950,
  /** #1A303A — Muted background (= secondary.s100) */
  muted: secondary.s100,
} as const;

/** Border colors */
export const border = {
  /** #09171D (= secondary.s0) */
  b0: secondary.s0,
  /** #102832 (= secondary.s50) */
  b50: secondary.s50,
  /** #172B34 — Primary border */
  b100: "#172B34",
  /** #1A303A — Secondary border (= secondary.s100) */
  b200: secondary.s100,
  /** #1E3945 — Tertiary border (= secondary.s200) */
  b300: secondary.s200,
  /** #203C49 (= secondary.s300) */
  b400: secondary.s300,
  /** #3B6273 (= secondary.s400) */
  b500: secondary.s400,
  /** #3B6F86 (= secondary.s500) */
  b600: secondary.s500,
  /** #4B7D92 (= secondary.s600) */
  b700: secondary.s600,
  /** #7B9AAA (= secondary.s700) */
  b800: secondary.s700,
  /** #9EB7C4 (= secondary.s800) */
  b900: secondary.s800,
  /** #C1D5DE (= secondary.s900) */
  b950: secondary.s900,
} as const;

/** Typography / text colors */
export const typography = {
  /** #09171D (= secondary.s0) */
  t0: secondary.s0,
  /** #102832 (= secondary.s50) */
  t50: secondary.s50,
  /** #1A303A (= secondary.s100) */
  t100: secondary.s100,
  /** #1E3945 (= secondary.s200) */
  t200: secondary.s200,
  /** #3B6273 (= secondary.s400) */
  t300: secondary.s400,
  /** #4B7D92 — Tertiary text (= secondary.s600) */
  t400: secondary.s600,
  /** #7B9AAA (= secondary.s700) */
  t500: secondary.s700,
  /** #9EB7C4 — Secondary text color (= secondary.s800) */
  t600: secondary.s800,
  /** #C1D5DE (= secondary.s900) */
  t700: secondary.s900,
  /** #FFFFFF */
  t800: "#FFFFFF",
  /** #FFFFFF — Title / Primary Text */
  t900: "#FFFFFF",
  /** #FFFFFF */
  t950: "#FFFFFF",
} as const;

/** Success colors */
export const success = {
  s0: "#042F2E",
  s50: "#134E4A",
  s100: "#115E59",
  s200: "#0F766E",
  s300: "#0D9488",
  s400: "#14B8A6",
  s500: "#25B5A2",
  /** #2DD4BF — Success Color */
  s600: "#2DD4BF",
  s700: "#59DDCB",
  s800: "#5EEAD4",
  s900: "#99F6E4",
  s950: "#D3FBF3",
  background: "#042F2E",
  softBackground: "rgba(52, 131, 82, 0.24)",
} as const;

/** Error colors */
export const error = {
  e0: "#531313",
  e50: "#7F1D1D",
  e100: "#991B1B",
  e200: "#B91C1C",
  e300: "#DC2626",
  e400: "#E63535",
  e500: "#EF4444",
  /** #F96160 — Invalid/Danger Color */
  e600: "#F96160",
  e700: "#F87171",
  e800: "#FCA5A5",
  e900: "#FECACA",
  e950: "#FEE9E9",
  background: "#422B2B",
  softBackground: "rgba(83, 19, 19, 0.24)",
} as const;

/** Warning colors */
export const warning = {
  w0: "#542D12",
  w50: "#6C3813",
  w100: "#824417",
  w200: "#B45A1A",
  w300: "#D76C1F",
  w400: "#E77828",
  w500: "#FB954B",
  w600: "#FC9C58",
  w700: "#FDAD74",
  w800: "#FECDAA",
  w900: "#FFE7D5",
  w950: "#FFF9F5",
  background: "#412F23",
  softBackground: "rgba(180, 90, 26, 0.24)",
} as const;

/** Info colors — alias of Primary */
export const info = {
  i0: primary.p0,
  i50: primary.p50,
  i100: primary.p100,
  i200: primary.p200,
  i300: primary.p300,
  i400: primary.p400,
  i500: primary.p500,
  i600: primary.p600,
  i700: primary.p700,
  i800: primary.p800,
  i900: primary.p900,
  i950: primary.p950,
  background: "#1A282E",
  softBackground: "rgba(9, 115, 168, 0.24)",
} as const;

/** Indicator colors */
export const indicator = {
  /** #4B7D92 (= secondary.s600) */
  indicatorPrimary: secondary.s600,
  /** #0A7694 (= primary.p300) */
  indicatorInfo: primary.p300,
  /** #DC2626 (= error.e300) */
  indicatorError: error.e300,
} as const;

/** White alpha overlays */
export const white = {
  "1%": "rgba(255, 255, 255, 0.01)",
  "3%": "rgba(255, 255, 255, 0.03)",
  "5%": "rgba(255, 255, 255, 0.05)",
  "10%": "rgba(255, 255, 255, 0.10)",
  "15%": "rgba(255, 255, 255, 0.15)",
  "20%": "rgba(255, 255, 255, 0.20)",
  "30%": "rgba(255, 255, 255, 0.30)",
  "40%": "rgba(255, 255, 255, 0.40)",
  "50%": "rgba(255, 255, 255, 0.50)",
  "60%": "rgba(255, 255, 255, 0.60)",
  "70%": "rgba(255, 255, 255, 0.70)",
  "80%": "rgba(255, 255, 255, 0.80)",
  "90%": "rgba(255, 255, 255, 0.90)",
  "100%": "#FFFFFF",
} as const;

// ---------------------------------------------------------------------------
// Spacing Scale (Tailwind-style, values in px)
// ---------------------------------------------------------------------------
export const spacing = {
  px: 1,
  s0: 0,
  s0_5: 2,
  s1: 4,
  s1_5: 6,
  s2: 8,
  s2_5: 10,
  s3: 12,
  s3_5: 14,
  s4: 16,
  s4_5: 18,
  s5: 20,
  s6: 24,
  s7: 28,
  s8: 32,
  s9: 36,
  s10: 40,
  s11: 44,
  s12: 48,
  s16: 64,
  s20: 80,
  s24: 96,
  s32: 128,
  s40: 160,
  s48: 192,
  s56: 224,
  s64: 256,
  s72: 288,
  s80: 320,
  s96: 384,
} as const;

// ---------------------------------------------------------------------------
// Border Widths
// ---------------------------------------------------------------------------
export const borderWidth = {
  bw0: 0,
  bw1: 1,
  bw2: 2,
  bw4: 4,
  bw8: 8,
} as const;

// ---------------------------------------------------------------------------
// Border Radius
// ---------------------------------------------------------------------------
export const borderRadius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  "2xl": 16,
  "3xl": 24,
  full: 9999,
} as const;

// ---------------------------------------------------------------------------
// Opacity
// ---------------------------------------------------------------------------
export const opacity = {
  o0: 0,
  o5: 0.05,
  o10: 0.1,
  o20: 0.2,
  o25: 0.25,
  o30: 0.3,
  o40: 0.4,
  o50: 0.5,
  o60: 0.6,
  o70: 0.7,
  o75: 0.75,
  o80: 0.8,
  o90: 0.9,
  o95: 0.95,
  o100: 1,
} as const;

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

/** Font size scale — matches Figma text style sizes (2xs → 6xl) */
export const fontSize = {
  "2xs": 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
} as const;

/** Font weight — matches Figma text style families */
export const fontWeight = {
  normal: "400",   // Text-normal
  medium: "500",   // Text-medium
  semibold: "600", // Text-semibold
  bold: "700",     // Text-bold / Heading
} as const;

/** Letter spacing — headings carry +0.2 tracking per Figma */
export const letterSpacing = {
  normal: 0,
  heading: 0.2,
} as const;

/** Font family — Figtree across all text styles */
export const fontFamily = {
  default: "Figtree",
} as const;

/**
 * Convenience text style presets — matches 📌 Figma named styles.
 * Spread directly into a StyleSheet rule: `...textStyles.headingLG`
 *
 * Line heights:
 *   Per Figma, almost all styles use Auto (RN platform default ≈ 1.2×).
 *   Only three styles have explicit line height set in Figma:
 *     - bodyNormalSM        → 21 (Text-normal/sm)
 *     - bodyNormalMDRelaxed → 24 (Text-normal/md - 150% variant, paragraph use)
 *     - bodyNormalLG        → 27 (Text-normal/lg, 150%)
 */
export const textStyles = {
  // Headings — Bold (700), Auto line height, +0.2 letter spacing
  headingXS:  { fontFamily: fontFamily.default, fontSize: fontSize.sm,     fontWeight: fontWeight.bold, letterSpacing: letterSpacing.heading },
  headingSM:  { fontFamily: fontFamily.default, fontSize: fontSize.md,     fontWeight: fontWeight.bold, letterSpacing: letterSpacing.heading },
  headingMD:  { fontFamily: fontFamily.default, fontSize: fontSize.lg,     fontWeight: fontWeight.bold, letterSpacing: letterSpacing.heading },
  headingLG:  { fontFamily: fontFamily.default, fontSize: fontSize.xl,     fontWeight: fontWeight.bold, letterSpacing: letterSpacing.heading },
  headingXL:  { fontFamily: fontFamily.default, fontSize: fontSize["2xl"], fontWeight: fontWeight.bold, letterSpacing: letterSpacing.heading },
  heading2XL: { fontFamily: fontFamily.default, fontSize: fontSize["3xl"], fontWeight: fontWeight.bold, letterSpacing: letterSpacing.heading },
  heading3XL: { fontFamily: fontFamily.default, fontSize: fontSize["4xl"], fontWeight: fontWeight.bold, letterSpacing: letterSpacing.heading },
  heading4XL: { fontFamily: fontFamily.default, fontSize: fontSize["5xl"], fontWeight: fontWeight.bold, letterSpacing: letterSpacing.heading },
  heading5XL: { fontFamily: fontFamily.default, fontSize: fontSize["6xl"], fontWeight: fontWeight.bold, letterSpacing: letterSpacing.heading },

  // Body Normal — Regular (400), Auto line height except sm/lg per Figma
  bodyNormal2XS:        { fontFamily: fontFamily.default, fontSize: fontSize["2xs"], fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal },
  bodyNormalXS:         { fontFamily: fontFamily.default, fontSize: fontSize.xs,     fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal },
  bodyNormalSM:         { fontFamily: fontFamily.default, fontSize: fontSize.sm,     fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal, lineHeight: 21 },
  bodyNormalMD:         { fontFamily: fontFamily.default, fontSize: fontSize.md,     fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal },
  bodyNormalMDRelaxed:  { fontFamily: fontFamily.default, fontSize: fontSize.md,     fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal, lineHeight: 24 },
  bodyNormalLG:         { fontFamily: fontFamily.default, fontSize: fontSize.lg,     fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal, lineHeight: 27 },
  bodyNormalXL:         { fontFamily: fontFamily.default, fontSize: fontSize.xl,     fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal },
  bodyNormal2XL:        { fontFamily: fontFamily.default, fontSize: fontSize["2xl"], fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal },
  bodyNormal3XL:        { fontFamily: fontFamily.default, fontSize: fontSize["3xl"], fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal },
  bodyNormal4XL:        { fontFamily: fontFamily.default, fontSize: fontSize["4xl"], fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal },
  bodyNormal5XL:        { fontFamily: fontFamily.default, fontSize: fontSize["5xl"], fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal },
  bodyNormal6XL:        { fontFamily: fontFamily.default, fontSize: fontSize["6xl"], fontWeight: fontWeight.normal, letterSpacing: letterSpacing.normal },

  // Body Semibold — SemiBold (600), Auto line height
  bodySemibold2XS: { fontFamily: fontFamily.default, fontSize: fontSize["2xs"], fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
  bodySemiboldXS:  { fontFamily: fontFamily.default, fontSize: fontSize.xs,     fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
  bodySemiboldSM:  { fontFamily: fontFamily.default, fontSize: fontSize.sm,     fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
  bodySemiboldMD:  { fontFamily: fontFamily.default, fontSize: fontSize.md,     fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
  bodySemiboldLG:  { fontFamily: fontFamily.default, fontSize: fontSize.lg,     fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
  bodySemiboldXL:  { fontFamily: fontFamily.default, fontSize: fontSize.xl,     fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
  bodySemibold2XL: { fontFamily: fontFamily.default, fontSize: fontSize["2xl"], fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
  bodySemibold3XL: { fontFamily: fontFamily.default, fontSize: fontSize["3xl"], fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
  bodySemibold4XL: { fontFamily: fontFamily.default, fontSize: fontSize["4xl"], fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
  bodySemibold5XL: { fontFamily: fontFamily.default, fontSize: fontSize["5xl"], fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
  bodySemibold6XL: { fontFamily: fontFamily.default, fontSize: fontSize["6xl"], fontWeight: fontWeight.semibold, letterSpacing: letterSpacing.normal },
} as const;

// ---------------------------------------------------------------------------
// Shadows
// React Native: shadowRadius = blur equivalent (iOS); elevation = Android.
// ---------------------------------------------------------------------------

/**
 * Shadow presets — exact values from Figma local styles.
 * Spread into a View style: `...shadows.soft1`
 *
 * Soft: ambient glow (no direction) — use for floating cards, modals, bottom sheets.
 * Hard: directional — use for buttons, active elements that need lift.
 */
export const shadows = {
  // Soft Shadows (softShadow 1–4) — symmetric blur, no offset
  soft1: { shadowColor: "#262626", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 2 },
  soft2: { shadowColor: "#262626", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 5 },
  soft3: { shadowColor: "#262626", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 30, elevation: 8 },
  soft4: { shadowColor: "#262626", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.2, shadowRadius: 40, elevation: 12 },

  // Hard Shadows (hardShadow 1–5) — directional, simulate light source
  hard1: { shadowColor: "#262626", shadowOffset: { width: -2, height: 2  }, shadowOpacity: 0.2, shadowRadius: 8,  elevation: 4 },
  hard2: { shadowColor: "#262626", shadowOffset: { width:  0, height: 3  }, shadowOpacity: 0.2, shadowRadius: 10, elevation: 5 },
  hard3: { shadowColor: "#262626", shadowOffset: { width:  2, height: 2  }, shadowOpacity: 0.2, shadowRadius: 8,  elevation: 4 },
  hard4: { shadowColor: "#262626", shadowOffset: { width:  0, height: -3 }, shadowOpacity: 0.2, shadowRadius: 10, elevation: 5 },
  hard5: { shadowColor: "#262626", shadowOffset: { width:  0, height: 2  }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 4 },
} as const;

// ---------------------------------------------------------------------------
// Convenience alias — flat `colors` object used by components
// (maps semantic roles → resolved hex values)
// ---------------------------------------------------------------------------
export const colors = {
  // Backgrounds
  backgroundScreen: background.bg0,
  backgroundSecondary: background.bg50,
  backgroundSurface: white["5%"],
  backgroundSurfaceStrong: white["10%"],

  // Borders
  border: border.b200,
  borderSecondary: background.bg50,

  // Text
  textPrimary: typography.t900,
  textSecondary: typography.t600,
  textMuted: typography.t500,
  textDimmed: typography.t400,

  // Brand
  primary: primary.p500,
  primaryHover: primary.p300,
  primaryPressed: primary.p200,
  link: primary.p600,

  // Status
  danger: error.e600,
  errorBackground: error.background,
  success: success.s600,
  successBackground: success.background,
  warningBackground: warning.background,
  infoBackground: info.background,

  // Misc
  black: "#000000",
  white: "#FFFFFF",
} as const;

export type ColorToken = keyof typeof colors;
