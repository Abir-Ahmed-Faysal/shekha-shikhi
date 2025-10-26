import React, { useEffect, useRef } from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <button onClick={onClose} className="p-2">
          ←
        </button>
        <input
          ref={inputRef}
          type="search"
          placeholder="কোর্স বা বিষয় খুঁজুন..."
          className="flex-1 ml-2 text-sm border rounded-full px-3 py-2"
        />
        <button onClick={onClose} className="p-2">
          ✕
        </button>
      </div>
    </div>
  );
};

export default SearchOverlay;
