import React from 'react';

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  radius?: string;
  enabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor = "#40739e", textColor = "#FFFFFF", radius = "8px", enabled = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      style={{
        backgroundColor: enabled ? backgroundColor : "#D3D3D3",
        color: enabled ? textColor : "A9A9A9",
        borderRadius: radius,
        cursor: enabled ? "pointer" : "not-allowed",
      }}
      className={`w-full py-2 text-center font-bold text-sm focus:outline-none ${enabled ? "hover:opacity-90" : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;