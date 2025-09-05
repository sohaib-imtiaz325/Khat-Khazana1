import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { createPortal } from "react-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const linkBase =
  "text-neutral-800 text-[13px] lg:text-[14px] tracking-[0.2px] hover:underline underline-offset-4 whitespace-nowrap";
const linkActive = "font-semibold underline";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `${linkBase} ${isActive ? linkActive : ""}`;

  const LANGS = [
    { code: "GB", label: "English" },
    { code: "FR", label: "Français" },
    { code: "DE", label: "Deutsch" },
    { code: "PK", label: "Urdu" },
  ];

  const [lang, setLang] = useState(LANGS[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [flagOpen, setFlagOpen] = useState(false);
  const flagBtnRef = useRef(null);
  const [flagPos, setFlagPos] = useState({ top: 0, left: 0 });

  const toggleFlag = () => {
    const r = flagBtnRef.current?.getBoundingClientRect();
    if (r)
      setFlagPos({
        top: r.bottom + 8,
        left: Math.max(8, r.right - 160),
      });
    setFlagOpen((v) => !v);
  };

  useEffect(() => {
    if (!flagOpen) return;
    const onClick = (e) => {
      if (!flagBtnRef.current) return;
      if (e.target instanceof Node && !flagBtnRef.current.contains(e.target))
        setFlagOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setFlagOpen(false);
    window.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onEsc);
    };
  }, [flagOpen]);

  return (
    <header
      className="sticky top-0 z-[999] bg-no-repeat bg-top"
      style={{
        fontFamily: "Philosopher, sans-serif",
        backgroundImage: "url('/images/navbar-bg.webp')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6 py-2 flex items-center justify-between">
        {/* LEFT: Mobile Toggle + Logo+Text */}
        <div className="flex items-center gap-3">
          {/* Hamburger (mobile/tablet left) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className=" lg:hidden relative w-8 h-8 flex items-center justify-center rounded-md border border-black/10 text-neutral-900"
          >
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                }`}
            />
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                }`}
            />
          </button>

          {/* Logo + Text */}
          <a
            href="/"
            className="flex items-center mt-[10px] min-w-0"
            aria-label="Home"
          >
            <img
              src="/images/logo.webp"
              alt="Logo"
              className="h-[60px] w-[71px] ml-[10px] mt-[10px] object-contain"
            />

            {/* Text container */}
            <div className="ml-3 flex flex-col justify-center min-w-0 leading-tight">
              {/* Desktop single line */}
              <span className="hidden md:block font-title text-[22px] font-bold text-neutral-900 truncate">
                Khat Khazana
              </span>

              {/* Mobile two lines */}
              <div className="flex flex-col md:hidden">
                <span className="font-title text-[20px] font-bold text-neutral-900 truncate">
                  Khat
                </span>
                <span className="font-title text-[20px] font-bold text-neutral-900 truncate">
                  Khazana
                </span>
              </div>

              {/* Subtext */}
              <span
                className="text-neutral-900 text-[16px]"
                style={{ fontFamily: "'Ephesis', cursive", lineHeight: 1 }}
              >
                Love 1st Letter
              </span>
            </div>
          </a>
        </div>


        {/* CENTER: Desktop nav */}
        <nav
          className="hidden lg:flex items-center justify-center gap-x-6 flex-1"
          aria-label="Main"
        >
          <NavLink to="/about" className={navClass}>
            About Us
          </NavLink>
          <NavLink to="/letters" className={navClass}>
            Letters
          </NavLink>
          <NavLink to="/photographs" className={navClass}>
            Photographs
          </NavLink>
          <NavLink to="/featured" className={navClass}>
            Featured letters & Photographs
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact Us
          </NavLink>
          <NavLink to="/submission" className={navClass}>
            Submission
          </NavLink>
          <NavLink to="/shop" className={navClass}>
            Shop
          </NavLink>
        </nav>

        {/* RIGHT: Flag + Search */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Flag Dropdown */}
          <button
            ref={flagBtnRef}
            type="button"
            onClick={toggleFlag}
            className="flex items-center gap-1 rounded-full p-1"
            aria-haspopup="listbox"
            aria-expanded={flagOpen}
            title={lang.label}
          >
            <div className="w-[36.8px] h-[33.33px] rounded-full overflow-hidden ring-1 ring-black/20">
              <ReactCountryFlag
                countryCode={lang.code}
                svg
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <div className="w-[28px] h-[28px] flex items-center justify-center">
              <MdOutlineKeyboardArrowDown size={16} />
            </div>
          </button>

          {/* Search (always visible now) */}
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="relative flex items-center rounded-full"
            style={{
              width: "135.31px",
              height: "39.11px",
              border: "1.5px solid black",
            }}
          >
            <input
              type="search"
              aria-label="Search"
              className="w-full h-full pl-[24px] pr-2 bg-transparent outline-none text-[14px] text-neutral-700"
              placeholder=""
            />
            <svg
              viewBox="0 0 24 24"
              className="absolute left-2 pointer-events-none"
              style={{ width: "19.11px", height: "19.11px" }}
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.71.71l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"
              />
            </svg>
          </form>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`lg:hidden mx-auto w-fit h-fit px-3 origin-top overflow-hidden transition-all duration-300 ease-out ${menuOpen
            ? "max-h-[360px] opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-95"
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="mt-2 rounded-lg border border-black/10 bg-white p-2 shadow-sm">
          {[
            { to: "/about", label: "About Us" },
            { to: "/letters", label: "Letters" },
            { to: "/photographs", label: "Photographs" },
            { to: "/featured", label: "Featured letters & Photographs" },
            { to: "/contact", label: "Contact Us" },
            { to: "/submission", label: "Submission" },
            { to: "/shop", label: "Shop" },
          ].map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${linkBase} ${isActive ? linkActive : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {r.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Flag dropdown */}
      {flagOpen &&
        createPortal(
          <ul
            className="fixed z-[10000] w-40 rounded-md border border-black/10 bg-white shadow-lg p-1"
            style={{ top: flagPos.top, left: flagPos.left }}
            role="listbox"
          >
            {LANGS.map((opt) => (
              <li key={opt.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(opt);
                    setFlagOpen(false);
                  }}
                  className="flex items-center justify-between w-full h-[39px] px-3 rounded-md border border-black/20 bg-white hover:bg-gray-100"
                  role="option"
                  aria-selected={lang.code === opt.code}
                >
                  <ReactCountryFlag
                    countryCode={opt.code}
                    svg
                    className="w-6 h-4 rounded-sm ring-1 ring-black/15"
                  />
                  <span className="ml-2 text-sm">{opt.label}</span>
                </button>
              </li>
            ))}
          </ul>,
          document.body
        )}
    </header>
  );
}
