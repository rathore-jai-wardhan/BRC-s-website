import { client } from '@/sanity/lib/client'
import { upcomingRunsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export default async function Home() {
  const runs = await client.fetch(upcomingRunsQuery)

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Runs</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {runs.map((run: any) => (
          <div key={run._id} className="border rounded-lg p-4 shadow">
            {run.posterImage && (
              <img
                src={urlFor(run.posterImage).width(500).url()}
                alt={run.title}
                className="rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold">{run.title}</h2>
            <p className="capitalize text-sm text-gray-500">{run.runType} Run</p>
            <p>{run.date} · {run.time}</p>
            <p>{run.venue}</p>
            {run.guest && <p>Guest: {run.guest}</p>}
            <a
              href={run.registrationFormUrl}
              target="_blank"
              className="inline-block mt-3 px-4 py-2 bg-black text-white rounded"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}