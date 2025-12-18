// 1. Define Atomic Interfaces
export interface PulseButtonTheme {
  border: string;
  inactiveBg: string;
  inactiveText: string;
  hoverBg: string;
  hoverText: string;
  activeBg: string;
  activeText: string;
  activeShadow: string;
}

export interface IconButtonTheme {
  inactiveText: string;
  inactiveBg: string;
  border: string;
  hoverBg: string;
  hoverText: string;
  activeBg: string;
  activeText: string;
  activeShadow: string;
}

export interface ToggleSwitchTheme {
  trackOn: string;
  trackOff: string;
  knobOn: string;
  knobOff: string;
  glow: string;
}

export interface DataPinTheme {
  inactiveBg: string,
  inactiveBorder: string,
  inactiveText: string,
  hoverBorder: string,
  hoverText: string,
  activeBorder: string,
  activeText: string,
  activeShadow: string,
}

export interface TextInputTheme {
  border: string;
  background: string;
  text: string;
  placeholder: string;
  focusBorder: string;
  focusShadow: string;
}

export interface MenuDropdownTheme {
  border: string;
  background: string;
  text: string;
  shadow: string;
  disabledBorder: string;
  disabledText: string;
  disabledBg: string;
  hoverBg: string;
}

export interface LcdTheme {
  pixelOn: string;
  pixelOff: string;
  screenBg: string;
  pcbFrame: string;
  pcbTrace: string;
  pinBg: string;
  mountHole: string;
}

export interface TerminalTheme {
  background: string;
  border: string;
  text: string;
  prefix: string;
  shadow: string;
}

export interface NavbarTheme {
  background: string;
  border: string;
  heading: string;
  headingShadow: string;
}

// 2. The Main Theme Contract (Flat & Modular)
export interface Theme {
  // Core Brand Colors (Optional usage, good for reference)
    core: {
    primary: string;
    secondary: string;
    background: string;
    panelBg: string;
    glass: string;
    warning: string;
    bodyFont: string;
    headingFont: string;
  };

  // Component Themes (Independent)
  pulseButton: PulseButtonTheme;
  iconButton: IconButtonTheme;
  toggleSwitch: ToggleSwitchTheme;
  dataPin: DataPinTheme;
  textInput: TextInputTheme;
  menuDropdown: MenuDropdownTheme;
  lcd: LcdTheme;
  
  // Container/Layout Themes
  terminal: TerminalTheme;
  navbar: NavbarTheme;
  
  // Generic Panel Styles (fallback)
  panel: {
    border: string;
    background: string;
    label: string;
  };
}