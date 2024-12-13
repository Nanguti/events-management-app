import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  type?: "button" | "submit";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  type = "button",
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
