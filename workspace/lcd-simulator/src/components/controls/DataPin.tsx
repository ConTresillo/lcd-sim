import React from 'react';
import { useTheme } from '../../../application/shared/themeContext';

interface DataPinProps {
  label: string;
  active: boolean;
  onClick?: () => void;
}

const DataPin: React.FC<DataPinProps> = ({ label, active, onClick }) => {
  const theme = useTheme();

  const style = active
    ? {
        borderColor: theme.brand.primary,
        background: theme.brand.glass,
        color: theme.brand.primary,
        boxShadow: theme.ui.buttons.neon.shadow,
        transform: 'scale(1.1)',
      }
    : {
        borderColor: theme.ui.gpioPanel.containerBorder,
        background: 'transparent',
        color: theme.ui.buttons.text.secondary,
      };

  return (
    <div
      onClick={onClick}
      style={style}
      className="w-10 h-10 rounded border flex items-center justify-center font-mono text-sm select-none cursor-pointer transition-all duration-75 ease-out hover:scale-110"
    >
      {label}
    </div>
  );
};

export default DataPin;
