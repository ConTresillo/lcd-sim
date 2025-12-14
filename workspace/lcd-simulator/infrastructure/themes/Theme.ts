export interface Theme {
  brand: { primary: string; secondary: string; glass: string; warning: string };
  background: { body: string; panel: string; terminal: string; deep: string };
  lcd: {
    pixel: { on: string; off: string };
    pulse: { on: string; off: string };
    screenBg: string;
    pcbFrame: string;
    pcbTrace: string;
    pinBg: string;
    mountHole: string;
  };
  ui: {
    navbar: {
      linkDefault: string;
      linkActive: string;
      heading: string;
      headingShadow: string;
    };
    controllerPanel: {
      inputBg: string;
      inputBorder: string;
      inputText: string;
    };
    gpioPanel: {
      containerBg: string;
      containerBorder: string;
      heading: string;
      toggleLabel: string;
      label: string;
      toggleActive: { track: string; circle: string; shadow: string };
      toggleInactive: { track: string; circle: string };
    };
    statePanel: {
      containerBg: string;
      containerBorder: string;
      heading: string;
      label: string;
    };
    actionPanel: {
      dropdownBg: string;
      dropdownBorder: string;
      dropdownShadow: string;
      dropdownText: string;
      dropdownHoverBg: string;
      hexInputBg: string;
      hexInputBorder: string;
      hexInputText: string;
    };
    terminalPanel: {
      containerBg: string;
      containerBorder: string;
      containerShadow: string;
      headerText: string;
      headerBorder: string;
      logText: string;
      logHoverBg: string;
      logPrefix: string;
      logShadow: string;
      cursorText: string;
      cursorPrefix: string;
    };
    buttons: {
      neon: {
        bg: string;
        text: string;
        shadow: string;
        hoverBg: string;
        hoverText: string;
      };
      pulse: {
        active: { activeBg: string; activeText: string; activeShadow: string };
        inactive: {
          inactiveBg: string;
          inactiveText: string;
          inactiveShadow: string;
        };
      };
      scrollbar: { track: string; thumb: string };
      text: { primary: string; secondary: string };
    };
  };
}
