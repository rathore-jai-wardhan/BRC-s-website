export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0d1321] text-white px-6 py-12 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* CONTACT */}
        <p className="text-sm tracking-[0.25em] uppercase text-[var(--brand)] mb-3">
          Get in Touch
        </p>

        <div className="space-y-3 text-white/70">
          {/* EMAIL */}
          <p>team@bikanerrunclub.in</p>

          {/* PHONE */}
          <p>+91 94624 75332</p>

          {/* SOCIALS */}
          <div className="pt-5">
            <p className="text-sm tracking-[0.25em] uppercase text-[var(--brand)] mb-3">
              Socials
            </p>

            <div className="space-y-2">
              <a
                href="https://www.instagram.com/bikanerrunclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-600 transition-colors"
              >
                Bikaner Run Club
              </a>

              <a
                href="https://www.instagram.com/bikanermarathon/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-600 transition-colors"
              >
                Bikaner Marathon
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 pt-5 border-t border-white/10 text-sm text-white/40">
          © {new Date().getFullYear()} Bikaner Run Club
        </div>
      </div>
    </footer>
  );
}