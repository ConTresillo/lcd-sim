// components/controls/IconButton.tsx
import React from 'react';
import { useTheme } from '../../../application/shared/themeContext';

interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  active?: boolean;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  active = false,
  onClick,
}) => {
  const theme = useTheme();

  const inactiveColor = theme.ui.buttons.text.secondary;

  return (
    <button
      onClick={onClick}
      style={{
        color: active ? theme.brand.primary : inactiveColor,
        borderColor: active ? theme.brand.primary : 'transparent',
        boxShadow: active ? theme.ui.buttons.neon.shadow : 'none',
      }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition"
    >
      {icon}
      {label}
    </button>
  );
};

export default IconButton;
