import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      <section className="px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-[0.25em] uppercase text-[var(--brand)] mb-4">
            About BRC
          </p>

          {/* TEAM — ADD PHOTOS HERE
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              The People Behind BRC
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-[var(--surface-border)] rounded-xl p-6">
                <h3 className="font-bold">Member Name</h3>
                <p className="text-[var(--muted)] text-sm">
                  Role at BRC
                </p>
              </div>

              <div className="border border-[var(--surface-border)] rounded-xl p-6">
                <h3 className="font-bold">Member Name</h3>
                <p className="text-[var(--muted)] text-sm">
                  Role at BRC
                </p>
              </div>

              <div className="border border-[var(--surface-border)] rounded-xl p-6">
                <h3 className="font-bold">Member Name</h3>
                <p className="text-[var(--muted)] text-sm">
                  Role at BRC
                </p>
              </div>
            </div>
          </section> */}

          {/* ABOUT */}
          <section className="max-w-3xl">

            <p className="text-lg leading-relaxed text-[var(--muted)]">
              Bikaner Run Club is a growing community built around running,
              fitness and showing up. What began with a few people putting
              one foot in front of the other has grown into regular runs,
              new friendships and a stronger running culture in Bikaner.
            </p>

            <p className="text-lg leading-relaxed text-[var(--muted)] mt-5">
              We run together, we keep moving, and we make room for everyone
              willing to take the first step.
            </p>
          </section>

        </div>
      </section>
      
    </main>
  );
}