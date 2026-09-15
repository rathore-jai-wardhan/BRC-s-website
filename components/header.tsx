"use client";

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
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-4 sm:px-8">
      
      {/* LOGO / WEBSITE NAME */}
      <Link
        href="/"
        className="text-white drop-shadow-lg font-bold tracking-wide transition-colors"
      >
        <span className="hidden sm:inline text-2xl md:text-3xl">
          Bikaner Run Club™
        </span>

        <span className="sm:hidden text-2xl">
          BRC™
        </span>
      </Link>

      {/* DESKTOP NAVIGATION */}
      <nav className="hidden md:flex items-center gap-6 text-white font-medium ">
        {navLinks.map((item) =>
          item.dropdown ? (
            
            /* RUNS DROPDOWN */
            <div
              key={item.label}
              className="relative group"
            >
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

            /* CONTACT US */
            <a
              key={item.label}
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();

                if (window.location.pathname === "/") {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                } else {
                  window.location.href = "/#contact";
                }
              }}
              className="text-white transition-colors hover:text-orange-600"
            >
              Contact Us
            </a>

          ) : (

            /* HOME / MERCHANDISE / ABOUT */
            <Link
              key={item.href}
              href={item.href}
              className="text-white transition-colors hover:text-orange-600"
            >
              {item.label}
            </Link>

          )
        )}
      </nav>

      {/* MOBILE MENU */}
      <div className="md:hidden group relative">
        <button
          className="text-white text-2xl"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="absolute right-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150">
          <div className="bg-[#0d1321]/95 backdrop-blur-sm rounded-lg shadow-xl p-4 min-w-[220px]">

            {/* HOME */}
            <Link
              href="/"
              className="block text-white hover:text-white py-2"
            >
              Home
            </Link>

            {/* RUNS */}
            <div className="mb-2">
              <span className="block text-white font-semibold py-2">
                Runs
              </span>

              <Link
                href="/runs/upcoming"
                className="block text-white/80 hover:text-white py-2 pl-4"
              >
                Upcoming Runs
              </Link>

              <Link
                href="/runs/past"
                className="block text-white/80 hover:text-white py-2 pl-4"
              >
                Past Runs
              </Link>
            </div>

            {/* MERCHANDISE */}
            <Link
              href="/merchandise"
              className="block text-white hover:text-white py-2"
            >
              Merchandise
            </Link>

            {/* ABOUT */}
            <Link
              href="/about"
              className="block text-white hover:text-white py-2"
            >
              About Us
            </Link>

            {/* CONTACT */}
          <a
  href="/#contact"
  onClick={(e) => {
    e.preventDefault();

    if (window.location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.location.href = "/#contact";
    }
  }}
  className="text-white transition-colors hover:text-orange-600"
>
  Contact Us
</a>
          </div>
        </div>
      </div>

    </header>
  );
}