// // src/components/controls/ControllerTest.tsx
// import React, { useState } from 'react';
// import { Power, Trash2 } from 'lucide-react';
// 
// import MenuDropdown from './MenuDropdown';
// import TextInput from './TextInput';
// import IconButton from './IconButton';
// import DataPin from './DataPin';
// import PulseButton from './PulseButton';
// import ToggleSwitch from './ToggleSwitch';
// 
// import { useTheme } from '../../../application/shared/themeContext';
// 
// const ControllerTest: React.FC = () => {
//   const theme = useTheme();
//   const [dropdown, setDropdown] = useState('8-bit');
//   const [text, setText] = useState('');
//   const [pins, setPins] = useState<boolean[]>(Array(8).fill(false));
//   const [pulse, setPulse] = useState(false);
//   const [toggle, setToggle] = useState(false);
// 
//   return (
//     <div
//       className="min-h-screen p-8 space-y-8"
//       style={{ background: theme.background.body }}
//     >
//       {/* HEADER */}
//       <div className="flex items-center gap-4">
//         <IconButton icon={<Power size={16} />} label="Power" active />
//         <IconButton icon={<Trash2 size={16} />} label="Clear" />
//       </div>
// 
//       {/* DROPDOWN */}
//       <div className="max-w-xs">
//         <MenuDropdown
//           value={dropdown}
//           options={['4-bit', '8-bit', 'I2C']}
//           onChange={setDropdown}
//         />
//       </div>
// 
//       {/* TEXT INPUT */}
//       <div className="max-w-xs">
//         <TextInput
//           value={text}
//           onChange={setText}
//           placeholder="Enter command..."
//         />
//       </div>
// 
//       {/* DATA PINS */}
//       <div className="flex gap-3">
//         {pins.map((on, i) => (
//           <DataPin
//             key={i}
//             label={`D${i}`}
//             active={on}
//             onClick={() =>
//               setPins((prev) =>
//                 prev.map((v, idx) => (idx === i ? !v : v))
//               )
//             }
//           />
//         ))}
//       </div>
// 
//       {/* TOGGLE + PULSE */}
//       <div className="flex items-center gap-6">
//         <ToggleSwitch
//           label="Backlight"
//           checked={toggle} // ✅ fixed
//           onChange={setToggle}
//         />
// 
//         <PulseButton
//           label="EN"
//           active={pulse}
//           onPulse={() => {
//             setPulse(true);
//             setTimeout(() => setPulse(false), 120);
//           }}
//         />
//       </div>
//     </div>
//   );
// };
// 
// export default ControllerTest;

import React, { useState } from 'react';
import { Power, Trash2 } from 'lucide-react';
import MenuDropdown from './MenuDropdown';
import TextInput from './TextInput';
import IconButton from './IconButton';
import DataPin from './DataPin';
import PulseButton from './PulseButton';
import ToggleSwitch from './ToggleSwitch';
import { useTheme } from '../../../application/shared/themeContext';

const ControllerTest: React.FC = () => {
  const theme = useTheme();
  const [dropdown, setDropdown] = useState('8-bit');
  const [text, setText] = useState('');
  const [pins, setPins] = useState<boolean[]>(Array(8).fill(false));
  const [pulse, setPulse] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="min-h-screen p-8 space-y-8"
      style={{ background: theme.background.body }}
    >
      <div className="flex items-center gap-4">
        <IconButton icon={<Power size={16} />} label="Power" active />
        <IconButton icon={<Trash2 size={16} />} label="Clear" />
      </div>

      <div className="max-w-xs">
        <MenuDropdown
          value={dropdown}
          options={['4-bit', '8-bit', 'I2C']}
          onChange={setDropdown}
        />
      </div>

      <div className="max-w-xs">
        <TextInput
          value={text}
          onChange={setText}
          placeholder="Enter command..."
        />
      </div>

      <div className="flex gap-3">
        {pins.map((on, i) => (
          <DataPin
            key={i}
            label={`D${i}`}
            active={on}
            onClick={() =>
              setPins((prev) =>
                prev.map((v, idx) => (idx === i ? !v : v))
              )
            }
          />
        ))}
      </div>

      <div className="flex items-center gap-6">
        <ToggleSwitch label="Backlight" checked={toggle} onChange={setToggle} />
        <PulseButton
          label="EN"
          active={pulse}
          onPulse={() => {
            setPulse(true);
            setTimeout(() => setPulse(false), 120);
          }}
        />
      </div>
    </div>
  );
};

export default ControllerTest;