/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#f7f7f2",
      "foreground": "#17232d",
      "border": "#d9e2e3",
      "card": "#fbfcf8",
      "cardForeground": "#17232d",
      "popover": "#fbfcf8",
      "popoverForeground": "#17232d",
      "primary": "#176b9b",
      "primaryForeground": "#f7fbfc",
      "secondary": "#e4f1f4",
      "secondaryForeground": "#17445a",
      "muted": "#edf3f3",
      "mutedForeground": "#5c6f77",
      "accent": "#d8f36a",
      "accentForeground": "#17232d",
      "destructive": "#ef4444",
      "destructiveForeground": "#fafafa",
      "input": "#d9e2e3",
      "ring": "#176b9b",
      "chart1": "#e8643c",
      "chart2": "#218f8b",
      "chart3": "#176b9b",
      "chart4": "#d8f36a",
      "chart5": "#f0a33b",
      "sidebar": "#eef4f2",
      "sidebarForeground": "#31525f",
      "sidebarBorder": "#d9e2e3",
      "sidebarPrimary": "#176b9b",
      "sidebarPrimaryForeground": "#f7fbfc",
      "sidebarAccent": "#d8f36a",
      "sidebarAccentForeground": "#17232d",
      "sidebarRing": "#176b9b"
    },
    "dark": {
      "background": "#08141d",
      "foreground": "#f3f8f9",
      "border": "#203745",
      "card": "#0d202b",
      "cardForeground": "#f3f8f9",
      "popover": "#0d202b",
      "popoverForeground": "#f3f8f9",
      "primary": "#d8f36a",
      "primaryForeground": "#13212b",
      "secondary": "#123142",
      "secondaryForeground": "#d9edf1",
      "muted": "#0f2530",
      "mutedForeground": "#9eb5bd",
      "accent": "#e8643c",
      "accentForeground": "#fff4ee",
      "destructive": "#7f1d1d",
      "destructiveForeground": "#fafafa",
      "input": "#203745",
      "ring": "#d8f36a",
      "chart1": "#5fb5d9",
      "chart2": "#43c9a2",
      "chart3": "#e8643c",
      "chart4": "#d8f36a",
      "chart5": "#f0a33b",
      "sidebar": "#0d202b",
      "sidebarForeground": "#d9edf1",
      "sidebarBorder": "#203745",
      "sidebarPrimary": "#d8f36a",
      "sidebarPrimaryForeground": "#13212b",
      "sidebarAccent": "#123142",
      "sidebarAccentForeground": "#f3f8f9",
      "sidebarRing": "#d8f36a"
    }
  },
  "fontFamily": {
    "sans": [
      "Inter",
      "sans-serif"
    ],
    "serif": [
      "Georgia",
      "serif"
    ],
    "mono": [
      "Menlo",
      "monospace"
    ]
  },
  "radius": "0.5rem",
  "spacing": "0.25rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
