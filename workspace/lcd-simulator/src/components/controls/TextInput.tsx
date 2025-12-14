// // components/controls/TextInput.tsx
// import React from 'react';
// import { useTheme } from '../../../application/shared/themeContext';
// 
// type Variant = 'plain' | 'terminal';
// 
// interface TextInputProps {
//   value: string;
//   onChange: (val: string) => void;
//   placeholder?: string;
//   onEnter?: () => void;
//   variant?: Variant;
// }
// 
// const TextInput: React.FC<TextInputProps> = ({
//   value,
//   onChange,
//   placeholder,
//   onEnter,
//   variant = 'plain',
// }) => {
//   const theme = useTheme();
// 
//   const wrapperStyle =
//     variant === 'terminal'
//       ? {
//           background: theme.ui.terminalPanel.containerBg,
//           borderColor: theme.ui.terminalPanel.containerBorder,
//         }
//       : {
//           background: theme.ui.controllerPanel.inputBg,
//           borderColor: theme.ui.controllerPanel.inputBorder,
//         };
// 
//   return (
//     <div
//       style={wrapperStyle}
//       className="border rounded px-3 py-2"
//     >
//       <input
//         className="bg-transparent w-full outline-none font-mono text-sm"
//         style={{ color: theme.ui.controllerPanel.inputText }}
//         value={value}
//         placeholder={placeholder}
//         onChange={(e) => onChange(e.target.value)}
//         onKeyDown={(e) => e.key === 'Enter' && onEnter?.()}
//       />
//     </div>
//   );
// };
// 
// export default TextInput;

import React from 'react';
import { useTheme } from '../../../application/shared/themeContext';

interface TextInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        background: theme.ui.controllerPanel.inputBg,
        borderColor: theme.ui.controllerPanel.inputBorder,
      }}
      className="border rounded px-3 py-2"
    >
      <input
        className="bg-transparent w-full outline-none font-mono text-sm"
        style={{ color: theme.ui.controllerPanel.inputText }}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;