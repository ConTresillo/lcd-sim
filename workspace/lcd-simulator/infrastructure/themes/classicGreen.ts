// infrastructure/themes/classicGreen.ts
import type { Theme } from "./Theme";

export const classicGreen: Theme = {
  core: {
    primary: "#CCFF66",              // bright yellow‑green text
    secondary: "#99FF33",            // lighter accent
    background: "#0A3B66",           // blueprint-ish blue bg
    panelBg: "rgba(0, 0, 0, 0.35)",  // darker glass panel
    glass: "rgba(0, 0, 0, 0.25)",
    warning: "#FFCC33",
    bodyFont: "'Orbitron', sans-serif",
    headingFont: "'Orbitron', sans-serif",
  },

  // --- ATOMIC COMPONENTS ---

  pulseButton: {
    border: "#b91c1c",      // deep red outline
    inactiveBg: "#111827",  // dark background like neon one
    inactiveText: "#f97373",// softer red text
    hoverBg: "#dc2626",     // a bit lighter on hover
    hoverText: "#fee2e2",   // light red text on hover
    activeBg: "#dc2626",    // solid bright red when fired
    activeText: "#fee2e2",  // readable light text
    activeShadow: "none",   // no glow for this one
},


  iconButton: {
  inactiveText: "#CCFF66",
  inactiveBg: "#1a2a1a",      // subtle dark greenish bg (pick what fits)
  border: "#CCFF66",
  hoverBg: "#99FF33",
  hoverText: "#001000",
  activeBg: "#CCFF66",
  activeText: "#001000",
  activeShadow: "now",
},


  toggleSwitch: {
trackOn: "#854d0e",                 // warm dark amber/brown [web:96]
  trackOff: "#374151",                // same neutral off track
  knobOn: "#facc15",                  // bright golden yellow (amber-400) [web:96]
  knobOff: "#d1d5db",                 // gray-300 knob off
  glow: "none", // soft golden glow from facc15 [web:100]
  },

  dataPin: {
    inactiveBg: "rgba(0, 0, 0, 0.35)",          // subtle dark fill
    inactiveBorder: "rgba(255, 255, 255, 0.15)",
    inactiveText: "#9CA3AF",

    hoverBorder: "#D4FF80",                     // lighter green outline
    hoverText: "#E5FCD1",

    activeBorder: "#CCFF66",                    // strong lime outline
    activeText: "#CCFF66",
    activeShadow: "none", // or "none" if you truly
                                                       // want zero glow
  },


  textInput: {
    background: "#10253A",
    border: "#66CC33",
    text: "#CCFF66",
    placeholder: "#4B647A",
  },

  menuDropdown: {
  border: "#CCFF66",
  background: "rgba(8,16,8,0.95)",
  text: "#CCFF66",
  shadow: "0 0 5px rgba(204,255,102,0.3)",
  disabledBorder: "rgba(148,163,184,0.5)",
  disabledText: "#6b7280",
  disabledBg: "rgba(8,16,8,0.6)",
  hoverBg: "rgba(204,255,102,0.15)",
},



  lcd: {
    pixelOn: "#55FF55",     // bright green pixels
    pixelOff: "#00330A",    // deep off‑green
    screenBg: "#006622",    // main LCD area
    pcbFrame: "#004020",    // outer plastic/pcb
    pcbTrace: "#339933",    // trace green
    pinBg: "#1A1A1A",
    mountHole: "#B8860B",
  },

  // --- CONTAINERS ---

  terminal: {
    background: "#041320",
    border: "rgba(102, 204, 51, 0.35)",
    text: "#CCFF66",
    prefix: "#99FF33",
    shadow: "none",
  },

  navbar: {
    background: "rgba(0, 0, 0, 0.35)",
    border: "rgba(204, 255, 102, 0.7)",
    heading: "#CCFF66",
    headingShadow: "none",
  },

  panel: {
    background: "rgba(0, 0, 0, 0.4)",
    border: "rgba(255, 255, 255, 0.15)",
    label: "#A1B5C8",
  },
};
