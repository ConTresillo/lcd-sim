// // components/controls/MenuDropdown.tsx
// import React from 'react';
// import { ChevronDown } from 'lucide-react';
// import { useTheme } from '../../../application/shared/themeContext';
// 
// interface MenuDropdownProps {
//   value: string;
//   options: string[];
//   onChange: (val: string) => void;
// }
// 
// const MenuDropdown: React.FC<MenuDropdownProps> = ({ value, options, onChange }) => {
//   const theme = useTheme();
// 
//   return (
//     <div className="relative w-full">
//       {/* Visual shell */}
//       <div
//         style={{
//           background: theme.ui.controllerPanel.inputBg,
//           borderColor: theme.ui.controllerPanel.inputBorder,
//           color: theme.ui.controllerPanel.inputText,
//         }}
//         className="border rounded px-3 py-2 text-sm flex justify-between items-center pointer-events-none"
//       >
//         {value}
//         <ChevronDown size={14} />
//       </div>
// 
//       {/* Invisible real select */}
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//       >
//         {options.map(opt => (
//           <option key={opt} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };
// 
// export default MenuDropdown;

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../../application/shared/themeContext';

interface MenuDropdownProps {
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ value, options, onChange }) => {
  const theme = useTheme();

  return (
    <div className="relative w-full">
      <div
        style={{
          background: theme.ui.controllerPanel.inputBg,
          borderColor: theme.ui.controllerPanel.inputBorder,
          color: theme.ui.controllerPanel.inputText,
        }}
        className="border rounded px-3 py-2 text-sm flex justify-between items-center"
      >
        {value} <ChevronDown size={14} />
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MenuDropdown;