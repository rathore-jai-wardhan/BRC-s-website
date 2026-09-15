"use client";

import Image from "next/image";

const MEMBER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScHOM6ZGqpXSNXnpAYkuYdIpE8ZD-XjT-rxLpDRmw1APilw7g/viewform";

export default function Hero({
  posterImageUrl,
}: {
  posterImageUrl: string;
}) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">

      {/* DESERT BACKGROUND */}
      <Image
        src="/desert.png"
        alt="Bikaner desert"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />


      {/* POSTER */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <div className="relative w-[72%] max-w-[420px] aspect-[3/4]">

          {posterImageUrl && (
            <Image
              src={posterImageUrl}
              alt="Bikaner Run Club poster"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          )}

          {/* JOIN THE CLUB BUTTON */}
          <a
            href={MEMBER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl whitespace-nowrap text-sm md:text-base transition-transform hover:scale-105"
          >
            Join the club
          </a>

        </div>
      </div>

    </section>
  );
}