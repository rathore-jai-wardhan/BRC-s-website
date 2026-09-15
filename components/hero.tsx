"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "./header";

const registerLabels = ["Join the Club"];

export default function Hero({
  posterImageUrl,
  registerUrl,
}: {
  posterImageUrl: string;
  registerUrl: string;
}) {
  const [label, setLabel] = useState(registerLabels[0]);

  useEffect(() => {
    setLabel(registerLabels[Math.floor(Math.random() * registerLabels.length)]);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black">
      <Image src="/desert-bg.png" alt="Desert background" fill priority className="object-cover opacity-90" />
      <Header />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative w-[65%] max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4]">
          <Image
            src={posterImageUrl}
            alt="Bikaner Run Club Poster"
            fill
            className="object-contain drop-shadow-2xl"
          />
          <a
            href={registerUrl}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg whitespace-nowrap text-xs sm:text-sm md:text-base transition-transform hover:scale-105"
          >
            Register to become a member — {label}
          </a>
        </div>
      </div>
    </section>
  );
}