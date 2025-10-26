import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { Download } from "lucide-react";
import DesktopDropdown from "./DesktopDropdown";
import MobileDropdown from "./MobileDropdown";
import SearchOverlay from "./SearchOverlay";

type DropdownOption = { label: string; path: string };
type NavItem =
  | { label: string; path: string }
  | { label: string; dropdown: DropdownOption[] };

const NAV_ITEMS: NavItem[] = [
  { label: "হোম", path: "/" },
  {
    label: "ক্লাস ১–৫",
    dropdown: [
      { label: "Class 1", path: "/courses/1" },
      { label: "Class 2", path: "/courses/2" },
      { label: "Class 3", path: "/courses/3" },
      { label: "Class 4", path: "/courses/4" },
      { label: "Class 5", path: "/courses/5" },
    ],
  },
  {
    label: "স্কিলস",
    dropdown: [
      { label: "All Courses", path: "/courses/all" },
      { label: "Handwriting", path: "/courses/hand-writing" },
      { label: "Translation", path: "/courses/translation" },
      { label: "প্রফেশনাল স্কিল", path: "/courses/professional-skill" },
      { label: "কম্পিউটার স্কিল", path: "/courses/computer-skill" },
    ],
  },
  { label: "বিজ্ঞানচিন্তা", path: "/about" },
  { label: "জানা অজানাAI", path: "/ai" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setOpenIndex(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
        setMobileSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <nav
        ref={navRef}
        className="flex items-center justify-between py-4 max-w-[1190px] mx-auto px-4"
      >
        {/* Logo + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            className="btn btn-ghost lg:hidden p-2"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  mobileOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/TMCkP53J/image.png"
              alt="শেখাশিখি"
              className="h-12 md:h-14 w-auto"
            />
          </NavLink>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          {NAV_ITEMS.map((item, idx) =>
            "dropdown" in item ? (
              <DesktopDropdown
                key={item.label}
                label={item.label}
                options={item.dropdown}
                isOpen={openIndex === idx}
                onOpen={() => setOpenIndex(idx)}
                onClose={() => setOpenIndex(null)}
              />
            ) : (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Desktop search + download + login */}
        <div className="hidden lg:flex items-center gap-3">
          <input
            type="search"
            placeholder="কোর্স বা বিষয় খুঁজুন..."
            className="input input-ghost focus:outline-none input-sm w-56"
          />
          <a
            href="/download"
            className="btn btn-ghost btn-sm flex items-center gap-2"
          >
            <Download className="text-gray-600" /> ডাউনলোড
          </a>
          <NavLink
            to="/login"
            className="text-sm px-6 py-3 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            লগ ইন/সাইন আপ
          </NavLink>
        </div>

        {/* Mobile search button */}
        <button
          aria-label="Open search"
          className="lg:hidden p-2"
          onClick={() => setMobileSearchOpen(true)}
        >
          🔍
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-max-h duration-200 overflow-hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="px-4 pb-4 space-y-2 font-medium">
          {NAV_ITEMS.map((item) =>
            "dropdown" in item ? (
              <MobileDropdown
                key={item.label}
                label={item.label}
                options={item.dropdown}
                onClose={() => setMobileOpen(false)}
              />
            ) : (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2"
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Search Overlay */}
      <SearchOverlay
        isOpen={mobileSearchOpen}
        onClose={() => setMobileSearchOpen(false)}
      />
    </header>
  );
};

export default Navbar;
