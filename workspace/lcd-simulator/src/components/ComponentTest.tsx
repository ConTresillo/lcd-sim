import React, { useState } from "react";
import { useTheme } from "./themes/ThemeProvider";

// controls
import { DataPin } from "./controls/DataPin";
import { IconButton } from "./controls/IconButton";
import { MenuDropdown } from "./controls/MenuDropdown";
import { PulseButton } from "./controls/PulseButton";
import { TextInput } from "./controls/TextInput";
import { ToggleSwitch } from "./controls/ToggleSwitch";


type ControlKey =
  | "dataPin"
  | "iconButton"
  | "menuDropdown"
  | "pulseButton"
  | "textInput"
  | "toggleSwitch";

const controlOptions: { value: ControlKey; label: string }[] = [
  { value: "dataPin", label: "DataPin" },
  { value: "iconButton", label: "Icon Button" },
  { value: "menuDropdown", label: "Menu Dropdown" },
  { value: "pulseButton", label: "Pulse Button" },
  { value: "textInput", label: "Text Input" },
  { value: "toggleSwitch", label: "Toggle Switch" },
];

const ComponentTest: React.FC = () => {
  const { theme } = useTheme();

  const [selectedControl, setSelectedControl] =
    useState<ControlKey>("dataPin");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // DataPin state
  const [isDataPinActive, setIsDataPinActive] = useState(false);

  // MenuDropdown state
  const [menuValue, setMenuValue] = useState("Clear Display");

  // PulseButton state
  const [en, setEn] = useState(false);

  // TextInput state
  const [hexInput, setHexInput] = useState("");

  const handlePulse = () => {
    setEn(true);
    setTimeout(() => setEn(false), 200);
  };

  const current = controlOptions.find((o) => o.value === selectedControl)!;

  const [toggleOn, setToggleOn] = useState(false);

  const renderControl = () => {
    switch (selectedControl) {
      case "dataPin":
        return (
          <DataPin
            label="D0"
            active={isDataPinActive}
            onClick={() => setIsDataPinActive((v) => !v)}
          />
        );

      case "iconButton":
        return (
          <IconButton
            label="EXECUTE"
            onClick={() => {
              console.log("EXECUTE from ComponentTest");
            }}
          />
        );

      case "menuDropdown":
        return (
          <MenuDropdown
            value={menuValue}
            options={[
              "Clear Display",
              "Return Home",
              "Move Cursor Left",
              "Move Cursor Right",
            ]}
            onChange={(v) => {
              setMenuValue(v);
              console.log("Menu changed:", v);
            }}
          />
        );

      case "pulseButton":
        return (
          <PulseButton
            label="EN"
            isActive={en}
            onClick={handlePulse}
          />
        );

      case "textInput":
        return (
          <TextInput
            value={hexInput}
            placeholder="e.g. 0x4A"
            onChange={setHexInput}
          />
        );

      case "toggleSwitch":
          return (
            <ToggleSwitch
              active={toggleOn}
              onClick={() => setToggleOn((v) => !v)}
            />
          );

      default:
        return (
          <div className="text-sm opacity-80">
            Component under construction.
          </div>
        );
    }
  };

  return (
    <div
      className="min-h-screen flex items-start justify-center p-6"
      style={{ backgroundColor: theme.core.background }}
    >
      <div
        className="w-full max-w-xl rounded-xl p-4"
        style={{
          background: theme.panel.background,
          border: `1px solid ${theme.panel.border}`,
          boxShadow: theme.menuDropdown.shadow,
          fontFamily: theme.core.bodyFont,
          color: theme.core.primary,
        }}
      >
        <h1
          className="mb-4 text-sm"
          style={{
            fontFamily: theme.core.headingFont,
            color: theme.navbar.heading,
          }}
        >
          Controls Playground
        </h1>

        {/* control selector */}
        <div className="mb-4 inline-block relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((o) => !o)}
            className="px-3 py-2 rounded-md text-sm w-64 text-left"
            style={{
              background: theme.menuDropdown.background,
              border: `1px solid ${theme.menuDropdown.border}`,
              color: theme.menuDropdown.text,
              boxShadow: theme.menuDropdown.shadow,
              fontFamily: theme.core.bodyFont,
            }}
          >
            {current.label}
            <span className="float-right opacity-70">▾</span>
          </button>

          {isDropdownOpen && (
            <div
              className="absolute mt-1 w-64 rounded-md overflow-hidden z-10"
              style={{
                background: theme.menuDropdown.background,
                border: `1px solid ${theme.menuDropdown.border}`,
                boxShadow: theme.menuDropdown.shadow,
              }}
            >
              {controlOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setSelectedControl(opt.value);
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-sm"
                  style={{
                    color: theme.menuDropdown.text,
                    background:
                      opt.value === current.value
                        ? theme.menuDropdown.hoverBg
                        : "transparent",
                    fontFamily: theme.core.bodyFont,
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* demo area */}
        <div
          className="mt-4 p-4 rounded-lg"
          style={{
            background: theme.panel.background,
            border: `1px solid ${theme.panel.border}`,
          }}
        >
          {renderControl()}
        </div>
      </div>
    </div>
  );
};

export default ComponentTest;
