import { client } from "@/sanity/lib/client";
import { upcomingRunsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export const revalidate = 30;

export default async function Home() {
  const runs = await client.fetch(upcomingRunsQuery);

  const firstRun = runs?.[0];

  return (
    <main>

      {/* HERO */}
         <Hero/>

      {/* MEMBERSHIP */}
      <section className="px-6 py-20 md:py-28 bg-[#f4f0e8] text-[#0d1321]">
        <div className="max-w-5xl mx-auto text-center">


          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Rooted in Bikaner
            <br />
            Built around running
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-black/60 mb-8">
            A growing running community built around regular runs
           and showing up.
          </p>

        </div>
      </section>

      {/* COLLABORATORS */}
      <section className="px-6 py-14 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-8">
            Proudly running with
          </p>

          <div className="flex justify-center items-center gap-12 flex-wrap text-black/50">
            <span className="text-sm">
              Sponsors & Collaborators
            </span>
          </div>

        </div>
      </section>
     <Footer />
    </main>
  );
}