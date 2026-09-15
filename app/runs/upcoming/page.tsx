import { client } from "@/sanity/lib/client";
import { upcomingRunsQuery } from "@/sanity/lib/queries";
import RunCard from "@/components/runcard";
import Footer from "@/components/footer";

export const revalidate = 30;

export default async function UpcomingRunsPage() {
  const runs = await client.fetch(upcomingRunsQuery);

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        

        <h1 className="text-4xl md:text-6xl font-bold mb-12">
          Upcoming Runs
        </h1>

        {runs.length === 0 ? (
          <p className="text-[var(--muted)]">
            No runs at the moment.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {runs.map((run: any) => (
              <RunCard
                key={run._id}
                run={run}
              />
            ))}
          </div>
        )}
      </div>

      
    </main>
  );
}