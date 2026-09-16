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

function scrollOrGoToContact(e: React.MouseEvent) {
  e.preventDefault();
  if (window.location.pathname === "/") {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#contact";
  }
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-4 sm:px-8">
      {/* LOGO / WEBSITE NAME */}
      <Link href="/" className="text-white drop-shadow-lg font-bold tracking-wide transition-colors">
        <span className="hidden sm:inline text-2xl md:text-3xl">Bikaner Run Club™</span>
        <span className="sm:hidden text-2xl">BRC™</span>
      </Link>

      {/* DESKTOP NAVIGATION — unchanged, hover works fine here */}
      <nav className="hidden md:flex items-center gap-6 text-white font-medium">
        {navLinks.map((item) =>
          item.dropdown ? (
            <div key={item.label} className="relative group">
              <button className="text-white transition-colors hover:text-orange-600">
                {item.label}
              </button>
              <div className="absolute top-full right-0 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150">
                <div className="bg-white text-black rounded-lg shadow-xl overflow-hidden min-w-[180px]">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-3 hover:bg-orange-600 hover:text-white whitespace-nowrap transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : item.label === "Contact Us" ? (
            <a key={item.label} href="/#contact" onClick={scrollOrGoToContact} className="text-white transition-colors hover:text-orange-600">
              Contact Us
            </a>
          ) : (
            <Link key={item.href} href={item.href} className="text-white transition-colors hover:text-orange-600">
              {item.label}
            </Link>
          )
        )}
      </nav>

      {/* MOBILE MENU — now click-based, not hover-based */}
      <div className="md:hidden relative">
        <button
          className="text-white text-2xl z-50 relative"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        {mobileOpen && (
          <div className="absolute right-0 top-full pt-3 z-50">
            <div className="bg-[#0d1321]/95 backdrop-blur-sm rounded-lg shadow-xl p-4 min-w-[220px]">
              <Link href="/" className="block text-white py-2" onClick={() => setMobileOpen(false)}>
                Home
              </Link>

              <div className="mb-2">
                <span className="block text-white font-semibold py-2">Runs</span>
                <Link href="/runs/upcoming" className="block text-white/80 py-2 pl-4" onClick={() => setMobileOpen(false)}>
                  Upcoming Runs
                </Link>
                <Link href="/runs/past" className="block text-white/80 py-2 pl-4" onClick={() => setMobileOpen(false)}>
                  Past Runs
                </Link>
              </div>

              <Link href="/merchandise" className="block text-white py-2" onClick={() => setMobileOpen(false)}>
                Merchandise
              </Link>
              <Link href="/about" className="block text-white py-2" onClick={() => setMobileOpen(false)}>
                About Us
              </Link>
              <a
                href="/#contact"
                onClick={(e) => {
                  scrollOrGoToContact(e);
                  setMobileOpen(false);
                }}
                className="block text-white py-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}