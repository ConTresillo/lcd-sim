
import { Theme } from './Theme';

export const neonBlue: Theme = {
  brand: {
    primary: '#00F0FF',
    secondary: '#22d3ee',
    glass: 'rgba(255, 255, 255, 0.05)',
    warning: '#facc15',
  },

  background: {
    body: '#0f172a',
    panel: 'rgba(255,255,255,0.05)',
    terminal: '#050b14',
    deep: '#030612',
  },

  lcd: {
    pixel: {
      on: '#4DD0E1',
      off: '#0f1f22',
    },
    pulse: {
      on: '#4DD0E1',
      off: '#0f1f22',
    },
    screenBg: '#1a2e2e',
    pcbFrame: '#0c2229',
    pcbTrace: '#06b6d4',
    pinBg: '#1a1a1a',
    mountHole: '#b8860b',
  },

  ui: {
    navbar: {
      linkDefault: '#9ca3af',
      linkActive: '#00F0FF',
      heading: '#00F0FF',
      headingShadow: '0 0 10px rgba(0,240,255,0.6)',
    },

    controllerPanel: {
      inputBg: '#1e293b',
      inputBorder: '#06b6d4',
      inputText: '#22d3ee',
    },

    gpioPanel: {
      containerBg: 'rgba(255,255,255,0.05)',
      containerBorder: 'rgba(255,255,255,0.1)',
      heading: '#00F0FF',
      toggleLabel: '#22d3ee',
      label: '#9ca3af',
      toggleActive: {
        track: '#06b6d4',
        circle: '#22d3ee',
        shadow: '0 0 8px #22d3ee',
      },
      toggleInactive: {
        track: '#4b5563',
        circle: '#9ca3af',
      },
    },

    statePanel: {
      containerBg: 'rgba(255,255,255,0.05)',
      containerBorder: 'rgba(255,255,255,0.1)',
      heading: '#22d3ee',
      label: '#9ca3af',
    },

    actionPanel: {
      dropdownBg: '#1e293b',
      dropdownBorder: '#06b6d4',
      dropdownShadow: '0 0 10px rgba(34,211,238,0.2)',
      dropdownText: '#22d3ee',
      dropdownHoverBg: 'rgba(6,182,212,0.2)',
      hexInputBg: '#1e293b',
      hexInputBorder: '#06b6d4',
      hexInputText: '#22d3ee',
    },

    terminalPanel: {
      containerBg: '#050b14',
      containerBorder: 'rgba(6,182,212,0.3)',
      containerShadow: 'inner',
      headerText: '#06b6d4',
      headerBorder: 'rgba(6,182,212,0.5)',
      logText: '#22d3ee',
      logHoverBg: 'rgba(255,255,255,0.05)',
      logPrefix: '#06b6d4',
      logShadow: '0 0 2px rgba(34,211,238,0.3)',
      cursorText: '#06b6d4',
      cursorPrefix: '#0ea5e9',
    },

    buttons: {
      neon: {
        bg: 'rgba(6,182,212,0.2)',
        text: '#22d3ee',
        shadow: '0 0 10px rgba(34,211,238,0.2)',
        hoverBg: '#22d3ee',
        hoverText: 'black',
      },
      pulse: {
        active: {
          activeBg: 'rgba(34,197,94,0.25)',
          activeText: '#bbf7d0',
          activeShadow: '0 0 12px rgba(34,197,94,0.8)',
        },
        inactive: {
          inactiveBg: '#020617',
          inactiveText: '#e5e7eb',
          inactiveShadow: 'none',
        },
      },
      scrollbar: {
        track: '#1e293b',
        thumb: '#334155',
      },
      text: {
        primary: 'white',
        secondary: '#9ca3af',
      },
    },
  },
};
