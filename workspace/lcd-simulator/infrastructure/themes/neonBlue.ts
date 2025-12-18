import type { Theme } from './Theme';

export const neonBlue: Theme = {
  core: {
  primary: "#00F0FF",
  secondary: "#22d3ee",
  background: "#0f172a",
  panelBg: "rgba(255,255,255,0.05)",
  glass: "rgba(255, 255, 255, 0.05)",
  warning: "#facc15",
  bodyFont: "'Orbitron', sans-serif",
  headingFont: "'Orbitron', sans-serif",
  },

  // --- ATOMIC COMPONENTS ---

  pulseButton: {
    border: "#facc15",                 // thin yellow outline
    inactiveBg: "#111827",             // dark slate-ish fill
    inactiveText: "#facc15",           // same yellow as border
    hoverBg: "#facc15",                // slightly lighter on hover
    hoverText: "#00010a",              // softer warm text
    activeBg: "#facc15",               // full yellow when fired
    activeText: "#00010a",
    activeShadow: "0 0 22px rgba(250, 204, 21, 0.95)", // big glow
},


  iconButton: {
  inactiveText: "#00F0FF",
  inactiveBg: "rgba(0,240,255,0.08)",       // subtle fill
  border: "#00F0FF",
  hoverBg: "#00F0FF",                       // full cyan
  hoverText: "#00111a",                     // dark text
  activeBg: "#00F0FF",
  activeText: "#00111a",
  activeShadow: "0 0 16px rgba(0,240,255,0.9)",
},



  toggleSwitch: {
    trackOn: "#075985",
    trackOff: "#374151",
    knobOn: "#22d3ee",
    knobOff: "#d1d5db",
    glow: "0 0 18px rgba(34, 211, 238, 0.55)",
  },

dataPin: {
  inactiveBg: "#020617",
  inactiveBorder: "#1f2937",
  inactiveText: "#4b5563",
  hoverBorder: "#9ca3af",
  hoverText: "#e5e7eb",
  activeBorder: "#22d3ee",
  activeText: "#e0faff",
  activeShadow: "0 0 18px rgba(34, 211, 238, 0.9)",
},


  textInput: {
  border: "rgba(148, 163, 184, 0.4)",
  background: "#020617",
  text: "#e5e7eb",
  placeholder: "rgba(148, 163, 184, 0.7)",
  focusBorder: "#22d3ee",
  focusShadow: "0 0 16px rgba(34, 211, 238, 0.55)",
},

  // in neonBlue theme
  menuDropdown: {
  border: "#22d3ee",
  background: "rgba(15,23,42,0.9)",
  text: "#a5f3fc",
  shadow: "0 0 5px rgba(34,211,238,0.2)",
  disabledBorder: "rgba(148,163,184,0.5)",
  disabledText: "#6b7280",
  disabledBg: "rgba(15,23,42,0.6)",
  hoverBg: "rgba(34,211,238,0.15)",
},




  lcd: {
    pixelOn: '#4DD0E1',
    pixelOff: '#0f1f22',
    screenBg: '#1a2e2e',
    pcbFrame: '#0c2229',
    pcbTrace: '#06b6d4',
    pinBg: '#1a1a1a',
    mountHole: '#b8860b',
  },

  // --- CONTAINERS ---

  terminal: {
    background: '#050b14',
    border: 'rgba(6,182,212,0.3)',
    text: '#22d3ee',
    prefix: '#06b6d4',
    shadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
  },

  navbar: {
    background: 'rgba(255,255,255,0.05)',
    border: 'rgba(0,240,255,0.6)',
    heading: '#00F0FF',
    headingShadow: '0 0 10px rgba(0,240,255,0.6)',
  },

  panel: {
    background: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.1)',
    label: '#9ca3af',
  },
};