import React, { useState, memo } from "react";
import { Font5x7 } from "../../utils/CharMap";

const Cell = ({ char, row, col, isActiveCursor, cursorStyle, onCellClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // CURSOR MODES
  const cursorVisible = isActiveCursor && cursorStyle !== "Hidden";
  const cursorUnderline = cursorVisible && cursorStyle === "Underline";
  const cursorBlock = cursorVisible && cursorStyle === "Blinking Block";

  // CHARACTER PIXEL DATA
  const charCode = char ? char.charCodeAt(0) : 32;
  const charData = Font5x7[charCode] || Font5x7[32];

  return (
    <div
      className={`
        flex flex-col gap-[1px] cursor-pointer
        transition-transform duration-75 ease-out
        ${cursorBlock ? "animate-pulse" : ""}
        ${isHovered ? "scale-[1.1] bg-slate-800 rounded-sm" : "scale-100"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCellClick?.(row, col)}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((rowPixel) => (
        <div key={rowPixel} className="flex gap-[1px]">
          {[0, 1, 2, 3, 4].map((colPixel) => {
            const colByte = charData[colPixel];
            const isCharacterOn =
              rowPixel < 7 ? (colByte >> rowPixel) & 1 : 0;

            let pixelClasses = "";

            // PRIORITY 1 - Underline
            if (cursorUnderline && rowPixel === 7) {
              pixelClasses =
                "bg-cyan-300 shadow-[0_0_4px_#22d3ee] opacity-100";
            }
            // PRIORITY 2 - Block cursor
            else if (cursorBlock) {
              pixelClasses =
                "bg-cyan-500 shadow-[0_0_4px_#22d3ee] opacity-100";
            }
            // PRIORITY 3 - Character ON pixel
            else if (isCharacterOn) {
              pixelClasses =
                "bg-cyan-300 shadow-[0_0_4px_#22d3ee] opacity-100";
            }
            // PRIORITY 4 - Background OFF pixel
            else {
              pixelClasses =
                "bg-[#0f1f22] border border-cyan-900/20 opacity-100";
            }

            return (
              <div
                key={colPixel}
                className={`
                  w-[2px] h-[2px] md:w-[3px] md:h-[3px]
                  rounded-[0.5px]
                  transition-colors duration-200
                  ${pixelClasses}
                `}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default memo(Cell);
