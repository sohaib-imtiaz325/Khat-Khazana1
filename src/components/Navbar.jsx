import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { createPortal } from "react-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const linkBase =
  "text-neutral-800 text-[13px] sm:text-[14px] tracking-[0.2px] hover:underline underline-offset-4 whitespace-nowrap";
const linkActive = "font-semibold underline";
const ROUTES = [
  { to: "/about", label: "About Us", end: true },
  { to: "/letters", label: "Letters" },
  { to: "/photographs", label: "Photographs" },
  { to: "/featured", label: "Featured letters & Photographs" },
  { to: "/contact", label: "Contact Us" },
  { to: "/submission", label: "Submission" },
  { to: "/shop", label: "Shop" },
];

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

  // Flag dropdown via portal (never hidden by page content)
  const [flagOpen, setFlagOpen] = useState(false);
  const flagBtnRef = useRef(null);
  const [flagPos, setFlagPos] = useState({ top: 0, left: 0 });
  const dropdownWidth = 160;

  const toggleFlag = () => {
    const r = flagBtnRef.current?.getBoundingClientRect();
    if (r)
      setFlagPos({
        top: r.bottom + 8,
        left: Math.max(8, r.right - dropdownWidth),
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
      className="sticky top-0 z-[999] bg-no-repeat bg-top overflow-visible"
      style={{
        fontFamily: "Philosopher, sans-serif",

        textTransform: "capitalize",
        backgroundImage: "url('/images/navbar-bg.png')",
        backgroundSize: "100% 100%",
      }}
      role="banner"
    >
      {/* Desktop: [1fr | auto | 1fr] => brand left, nav perfectly centered, controls right
          Mobile: 3 equal columns => hamburger left, brand center, controls right */}
      <div className="max-w-[1240px] mx-auto w-full px-3 sm:px-4 py-3 grid items-center gap-x-3 grid-cols-3 sm:grid-cols-[1fr_auto_1fr]">
        {/* LEFT COLUMN */}
        <div className="flex items-center min-w-0">
          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="sm:hidden relative w-9 h-9 flex items-center justify-center rounded-md border border-black/10 text-neutral-900"
          >
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </button>

          {/* Brand (desktop left) */}
          <a
            href="/"
            className="hidden sm:flex items-center gap-3 min-w-0"
            aria-label="Home"
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 sm:h-12 w-auto"
            />
            <span className="flex flex-col min-w-0 leading-tight">
              <span className="font-title text-[22px] sm:text-[26px] md:text-[22px] font-bold text-neutral-900">
                Khat Khazana
              </span>
              <span
                className="text-neutral-900"
                style={{
                  fontFamily: "'Ephesis', cursive",
                  fontSize: 18,
                  lineHeight: 1,
                }}
              >
                Love 1st Letter
              </span>
            </span>
          </a>
        </div>

        {/* CENTER COLUMN */}
        <div className="justify-self-center">
          {/* Brand (mobile center) */}
          <a
            href="/"
            className="sm:hidden flex items-center gap-3 min-w-0 mr-50"
            aria-label="Home"
          >
            <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="flex flex-col leading-tight">
              <span className="font-title text-[22px] font-bold text-neutral-900">
                Khat Khazana
              </span>
              <span
                className="text-neutral-900"
                style={{
                  fontFamily: "'Ephesis', cursive",
                  fontSize: 18,
                  lineHeight: 1,
                }}
              >
                Love 1st Letter
              </span>
            </span>
          </a>

          {/* Desktop nav (centered) */}
          <nav
            className="hidden sm:flex items-center justify-center gap-x-3 sm:gap-x-5 md:gap-x-6"
            aria-label="Main"
          >
            {ROUTES.map((r) => (
              <NavLink key={r.to} to={r.to} end={r.end} className={navClass}>
                {r.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* RIGHT COLUMN */}
        <div className="justify-self-end flex items-center gap-2 sm:gap-3">
          {/* Country dropdown trigger */}
          <button
            ref={flagBtnRef}
            type="button"
            onClick={toggleFlag}
            className="flex items-center gap-1 sm:gap-1 px-2 py-1 rounded-md"
            aria-haspopup="listbox"
            aria-expanded={flagOpen}
            title={lang.label}
          >
            <ReactCountryFlag
              countryCode={lang.code}
              svg
              style={{ width: 18, height: 12 }}
              className="rounded-[2px] ring-1 ring-black/15"
            />
            <div>
              <MdOutlineKeyboardArrowDown />
            </div>
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5">
              <path fill="currentColor" d="M5.5 7l4.5 6 4.5-6z" />
            </svg>
          </button>

          {/* Search */}
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center h-[28px] pl-2 pr-2 rounded-full border bg-white/70"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-neutral-700"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.71.71l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="bg-transparent outline-none pl-1 text-[12px] sm:text-[13px] placeholder:text-neutral-500 w-[95px] sm:w-[160px] md:w-[190px]"
            />
          </form>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        id="mobile-nav"
        className={`sm:hidden mx-auto max-w-[1240px] w-full px-3 sm:px-4 origin-top overflow-hidden transition-all duration-300 ease-out ${
          menuOpen
            ? "max-h-[360px] opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-95"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mt-2 rounded-lg border border-black/10 bg-white/85 backdrop-blur p-2 shadow-sm">
          {ROUTES.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              end={r.end}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${linkBase} ${
                  isActive ? linkActive : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {r.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Flag dropdown (portal) */}
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
                  className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-black/5 rounded text-left"
                  role="option"
                  aria-selected={opt.code === lang.code}
                >
                  <ReactCountryFlag
                    countryCode={opt.code}
                    svg
                    style={{ width: 16, height: 11 }}
                    className="rounded-[2px] ring-1 ring-black/15"
                  />
                  <span className="text-[12px] sm:text-[13px]">
                    {opt.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>,
          document.body
        )}
    </header>
  );
}
