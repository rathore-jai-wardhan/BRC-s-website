"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Runs",
    dropdown: [
      { label: "Upcoming Runs", href: "/runs/upcoming" },
      { label: "Past Runs", href: "/runs/past" },
    ],
  },
  { label: "Merchandise", href: "/merchandise" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [runsOpen, setRunsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-4 py-4 sm:px-8">
      {/* Wordmark */}
      <Link href="/" className="text-white drop-shadow-lg font-bold tracking-wide">
        <span className="hidden sm:inline text-2xl md:text-3xl">Bikaner Run Club™</span>
        <span className="sm:hidden text-2xl">BRC™</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6 text-white font-medium">
        {navLinks.map((item) =>
          item.dropdown ? (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setRunsOpen(true)}
              onMouseLeave={() => setRunsOpen(false)}
            >
              <button className="hover:text-orange-300 transition-colors">
                {item.label}
              </button>
              {runsOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden min-w-[160px]">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-orange-50 whitespace-nowrap"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={item.href} href={item.href} className="hover:text-orange-300 transition-colors">
              {item.label}
            </Link>
          )
        )}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-navy-900/95 backdrop-blur-sm md:hidden py-4 px-4">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="mb-2">
                <span className="block text-white font-semibold py-2">{item.label}</span>
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block text-white/80 py-1 pl-4"
                    onClick={() => setMobileOpen(false)}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}