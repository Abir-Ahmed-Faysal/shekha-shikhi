import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { Download } from "lucide-react";


interface NavItem {
  label: string;
  path?: string;
  dropdown?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: "হোম", path: "/" },
  { label: "ক্লাস ১-৫", path: "/courses/primary" },
  { label: "ক্লাস ৬-১২", path: "/courses/secondary" },
  {
    label: "সকল কোর্স",
    dropdown: [
      { label: "এস.এস.সি (SSC)", path: "/courses/ssc" },
      { label: "এইচ.এস.সি (HSC)", path: "/courses/hsc" },
      { label: "সব কোর্স দেখুন →", path: "/all-courses" },
    ],
  },
  { label: "স্কিলস", path: "/skill" },
  { label: "বিজ্ঞানচিন্তা", path: "/about" },
  { label: "জানা অজানাAI", path: "/ai" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lang, setLang] = useState<"bn" | "en">("bn");

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (!searchContainerRef.current) return;
      if (
        searchOpen &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSearchOpen(false);
    }
    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [searchOpen]);

  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 80);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  const handleCloseMobile = () => setMobileOpen(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[rgb(84,104,255)] font-semibold"
      : "hover:text-[rgb(84,104,255)]";

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-between  py-4 md:py-4 max-w-6xl mx-auto">
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            className="btn btn-ghost lg:hidden p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
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

        {/* Right: All NavLinks + Search + Buttons */}
        <div className="flex items-center gap-4">
          {/* Desktop NavLinks */}
          <ul className="hidden lg:flex items-center gap-5 font-medium text-gray-700">
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.label} className="relative  group">
                  <button className="flex text-xm items-center gap-1">
                    {item.label}
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
                  <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-150 absolute left-0 top-full mt-3 w-72 bg-white border rounded-lg shadow-lg p-4 z-20">
                    <div className="grid grid-cols-2 gap-3">
                      {item.dropdown!.slice(0, 2).map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className="block p-2 rounded hover:bg-gray-50"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                    <hr className="my-3" />
                    <NavLink
                      to={item.dropdown![item.dropdown!.length - 1].path}
                      className="text-sm text-[rgb(84,104,255)] font-medium"
                    >
                      {item.dropdown![item.dropdown!.length - 1].label}
                    </NavLink>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink to={item.path!} className={linkClass}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* Search */}
          <div
            ref={searchContainerRef}
            className={`flex items-center border rounded-full px-2 transition-all duration-200 overflow-hidden ${
              searchOpen ? "w-40 sm:w-56 md:w-64" : "w-10"
            }`}
            aria-expanded={searchOpen}
          >
            <button
              aria-label={searchOpen ? "Close search" : "Open search"}
              className="p-2"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                />
              </svg>
            </button>
            <input
              ref={searchInputRef}
              type="search"
              placeholder="কোর্স বা বিষয় খুঁজুন..."
              onFocus={() => setSearchOpen(true)}
              className={`input input-ghost focus:outline-none input-sm w-full text-sm transition-opacity duration-150 ${
                searchOpen
                  ? "opacity-100 pointer-events-auto translate-x-0"
                  : "opacity-0 pointer-events-none -translate-x-2"
              }`}
            />
          </div>

          {/* Lang switch */}
          <button
            onClick={() => setLang(lang === "bn" ? "en" : "bn")}
            className="btn btn-ghost btn-xs normal-case"
          >
            {lang === "bn" ? "বাংলা" : "English"}
          </button>

          {/* Download */}
          <a
            href="/download"
            className="hidden md:inline-flex items-center gap-2 btn btn-ghost btn-sm normal-case"
          >
            <Download className="text-gray-600" />
            ডাউনলোড
          </a>

          <NavLink
            to="/login"
            className="text-sm px-6 py-3 rounded-xl border border-[rgb(84,104,255)] text-[rgb(84,104,255)] hover:bg-[rgb(84,104,255)] hover:text-white transition-colors duration-200"
          >
            লগ ইন<span className="hidden md:inline-block">/সাইন আপ</span>
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-max-h duration-200 overflow-hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4">
          <ul className="space-y-2 font-medium">
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.label}>
                  <details>
                    <summary className="py-2 cursor-pointer">
                      {item.label}
                    </summary>
                    <ul className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((sub) => (
                        <li key={sub.path}>
                          <NavLink
                            to={sub.path}
                            onClick={handleCloseMobile}
                            className="block py-1"
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink
                    to={item.path!}
                    onClick={handleCloseMobile}
                    className="block py-2"
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}

            <li>
              <a
                href="/download"
                onClick={handleCloseMobile}
                className="block py-2"
              >
                ডাউনলোড
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
