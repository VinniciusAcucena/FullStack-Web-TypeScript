import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  className = "",
  disabled = false,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md text-gray-50 bg-gray-800 hover:bg-gray-950 cursor-pointer ${disabled ? "text-gray-950 bg-gray-100 hover:bg-gray-100" : "text-gray-50 bg-gray-800 hover:bg-gray-950"} ${className}`}
    >
      {children}
    </button>
  );
}
