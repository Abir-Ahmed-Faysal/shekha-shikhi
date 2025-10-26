import React from "react";
import { useNavigate } from "react-router";

interface DropdownOption {
  label: string;
  path: string;
}

interface DesktopDropdownProps {
  label: string;
  options: DropdownOption[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  label,
  options,
  isOpen,
  onOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onFocus={onOpen}
        onBlur={() => setTimeout(onClose, 150)}
        className="flex items-center gap-1 text-sm py-1 px-2"
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        role="menu"
        aria-hidden={!isOpen}
        className={`absolute left-0 top-full w-64 bg-white border rounded-lg shadow-lg p-3 z-20 transform transition-all duration-150 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1 pointer-events-none"
        }`}
      >
        <ul className="grid gap-2">
          {options.map((opt) => (
            <li key={opt.label}>
              <button
                type="button"
                role="menuitem"
                onClick={() => navigate(opt.path)}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm"
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DesktopDropdown;
