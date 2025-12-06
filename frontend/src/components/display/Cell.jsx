import React, { useState, memo } from 'react';
import { Font5x7 } from '../../utils/CharMap';

// Props are cleaned up to only contain structural elements
const Cell = ({ char, onCellClick, row, col }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
      onCellClick?.(row, col);
  };

  // --- CHARACTER DATA ---
  const charCode = char ? char.charCodeAt(0) : 32;
  const charData = Font5x7[charCode] || Font5x7[32];

  return (
    <div
        className={`
            relative flex flex-col gap-[1px]
            cursor-pointer 
            transition-transform duration-75 ease-out
            
            ${isHovered ? 'scale-[1.1] bg-slate-800 rounded-sm' : 'scale-100'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
    >
      {/* Loop through 8 Rows (0 to 7) */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((rowPixel) => (
        <div key={rowPixel} className="flex gap-[1px]">

          {/* Loop through 5 Columns */}
          {[0, 1, 2, 3, 4].map((colPixel) => {
            const colByte = charData[colPixel];
            // Row index < 7 for the standard 5x7 font data rows. Row 7 is empty space.
            const isCharacterPixelOn = rowPixel < 7 ? (colByte >> rowPixel) & 1 : 0;

            let pixelClasses = '';

            // --- PIXEL RENDERING LOGIC (Simple Character/Background) ---

            if (isCharacterPixelOn) {
                // SCENARIO 1: STANDARD CHARACTER PIXEL
                pixelClasses = 'bg-cyan-300 shadow-[0_0_4px_#22d3ee] opacity-100';
            }
            else {
                // SCENARIO 2: STANDARD OFF PIXEL (Empty space)
                pixelClasses = 'bg-[#0f1f22] border border-cyan-900/20 opacity-100';
            }

            return (
              <div
                key={colPixel}
                // Apply the calculated classes
                className={`w-[2px] h-[2px] md:w-[3px] md:h-[3px] rounded-[0.5px] transition-colors duration-200 ${pixelClasses}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default memo(Cell);