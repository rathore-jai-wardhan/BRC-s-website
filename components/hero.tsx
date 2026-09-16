"use client";

import Image from "next/image";

const MEMBER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScHOM6ZGqpXSNXnpAYkuYdIpE8ZD-XjT-rxLpDRmw1APilw7g/viewform";

export default function Hero({ posterImageUrl }: { posterImageUrl: string }) {
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

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 gap-6">
        <div className="relative w-[72%] max-w-[420px] aspect-[3/4]">
          {posterImageUrl && (
            <Image
              src={posterImageUrl}
              alt="Bikaner Run Club poster"
              fill
              priority
              sizes="(max-width: 768px) 72vw, 420px"
              className="object-contain drop-shadow-2xl"
            />
          )}
        </div>

        <a
          href={MEMBER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl whitespace-nowrap text-sm md:text-base transition-transform hover:scale-105"
        >
          Join the club
        </a>
      </div>
    </section>
  );
}