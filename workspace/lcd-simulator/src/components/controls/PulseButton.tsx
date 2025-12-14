// // components/controls/PulseButton.tsx
// import React from 'react';
// import { useTheme } from '../../../application/shared/themeContext';
// 
// interface PulseButtonProps {
//   active: boolean;
//   label: string;
//   onClick?: () => void;
//   onPulse?: () => void; // <-- added for ControllerTest
// }
// 
// const PulseButton: React.FC<PulseButtonProps> = ({ active, label, onClick, onPulse }) => {
//   const theme = useTheme();
// 
//   const style = active
//     ? theme.ui.buttons.pulse.active
//     : theme.ui.buttons.pulse.inactive;
// 
//   return (
//     <button
//       onClick={() => {
//         if (onClick) onClick();
//         if (onPulse) onPulse(); // <-- call onPulse if provided
//       }}
//       style={{
//         background: style.activeBg ?? style.inactiveBg,
//         color: style.activeText ?? style.inactiveText,
//         boxShadow: style.activeShadow ?? style.inactiveShadow,
//       }}
//       className="px-4 py-2 rounded font-semibold transition"
//     >
//       {label}
//     </button>
//   );
// };
// 
// export default PulseButton;

import React from 'react';
import { useTheme } from '../../../application/shared/themeContext';

interface PulseButtonProps {
  active: boolean;
  label: string;
  onClick?: () => void;
  onPulse?: () => void;
}

const PulseButton: React.FC<PulseButtonProps> = ({ active, label, onClick, onPulse }) => {
  const theme = useTheme();
  const style = active
    ? theme.ui.buttons.pulse.active
    : theme.ui.buttons.pulse.inactive;

  return (
    <button
      onClick={() => {
        if (onClick) onClick();
        if (onPulse) onPulse();
      }}
      style={{
        background: style.activeBg ?? style.inactiveBg,
        color: style.activeText ?? style.inactiveText,
        boxShadow: style.activeShadow ?? style.inactiveShadow,
      }}
      className="px-4 py-2 rounded font-semibold transition"
    >
      {label}
    </button>
  );
};

export default PulseButton;