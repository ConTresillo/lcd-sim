// // src/components/controls/ToggleSwitch.tsx
// import React from 'react';
// import { useTheme } from '../../../application/shared/themeContext';
// 
// interface ToggleSwitchProps {
//   checked: boolean;
//   label?: string;
//   onChange: (val: boolean) => void;
// }
// 
// const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, label, onChange }) => {
//   const theme = useTheme();
// 
//   const track = checked
//     ? theme.ui.gpioPanel.toggleActive.track
//     : theme.ui.gpioPanel.toggleInactive.track;
// 
//   const knob = checked
//     ? theme.ui.gpioPanel.toggleActive.circle
//     : theme.ui.gpioPanel.toggleInactive.circle;
// 
//   return (
//     <div className="flex items-center gap-3">
//       {label && (
//         <span style={{ color: theme.ui.gpioPanel.label }} className="text-sm">
//           {label}
//         </span>
//       )}
// 
//       <button
//         onClick={() => onChange(!checked)}
//         style={{ background: track }}
//         className="w-10 h-5 rounded-full relative"
//       >
//         <span
//           style={{
//             background: knob,
//             transform: checked ? 'translateX(20px)' : 'translateX(2px)',
//           }}
//           className="absolute top-[2px] w-4 h-4 rounded-full transition"
//         />
//       </button>
//     </div>
//   );
// };
// 
// export default ToggleSwitch;

import React from 'react';
import { useTheme } from '../../../application/shared/themeContext';

interface ToggleSwitchProps {
  checked: boolean;
  label?: string;
  onChange: (val: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, label, onChange }) => {
  const theme = useTheme();
  const track = checked
    ? theme.ui.gpioPanel.toggleActive.track
    : theme.ui.gpioPanel.toggleInactive.track;
  const knob = checked
    ? theme.ui.gpioPanel.toggleActive.circle
    : theme.ui.gpioPanel.toggleInactive.circle;

  return (
    <div className="flex items-center gap-3">
      {label && (
        <span style={{ color: theme.ui.gpioPanel.label }} className="text-sm">
          {label}
        </span>
      )}

      <button
        onClick={() => onChange(!checked)}
        style={{ background: track }}
        className="w-10 h-5 rounded-full relative"
      >
        <span
          style={{
            background: knob,
            transform: checked ? 'translateX(20px)' : 'translateX(2px)',
          }}
          className="absolute top-[2px] w-4 h-4 rounded-full transition"
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;