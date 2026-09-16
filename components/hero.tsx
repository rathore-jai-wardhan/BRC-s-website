"use client";

import Image from "next/image";

const MEMBER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScHOM6ZGqpXSNXnpAYkuYdIpE8ZD-XjT-rxLpDRmw1APilw7g/viewform";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
  {/* MOBILE BACKGROUND */}
  <Image
    src="/poster-mobile.png"
    alt="Bikaner desert"
    fill
    priority
    sizes="100vw"
    className="object-cover md:hidden"
  />
  {/* DESKTOP BACKGROUND */}
  <Image
    src="/poster-desktop.png"
    alt="Bikaner desert"
    fill
    priority
    sizes="100vw"
    className="object-cover hidden md:block"
  />

  <div className="absolute inset-0 bg-black/20" />

  <a
    href={MEMBER_FORM_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-45 md:bottom-25 left-1/2 -translate-x-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl whitespace-nowrap text-sm md:text-base transition-transform hover:scale-105"
  >
    Join the club
  </a>
</section>
  );
}