import React from "react";
import { useNavigate } from "react-router";

interface DropdownOption {
  label: string;
  path: string;
}

interface MobileDropdownProps {
  label: string;
  options: DropdownOption[];
  onClose: () => void;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({
  label,
  options,
  onClose,
}) => {
  const navigate = useNavigate();

  return (
    <li>
      <details>
        <summary className="py-2 cursor-pointer">{label}</summary>
        <ul className="pl-4 mt-2 space-y-2">
          {options.map((opt) => (
            <li key={opt.label}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate(opt.path);
                  onClose();
                }}
                className="block w-full text-left py-1"
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
};

export default MobileDropdown;
