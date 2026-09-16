import Image from "next/image";
import Footer from "@/components/footer";

export default function MerchandisePage() {
  return (
    <main className="min-h-screen relative flex items-center justify-center bg-[#0d1321] text-white overflow-hidden">
      <Image
        src="/merch-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />

      <div className="relative z-10 text-center px-6">
        <p className="text-sm tracking-[0.3em] uppercase text-orange-400 mb-4">BRC Merchandise</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-5">Coming Soon.</h1>
        <p className="text-white/60 max-w-md mx-auto">
          Something worth wearing on the road is in the works.
        </p>
      </div>
    </main>
  );
}