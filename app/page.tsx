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
          <div
            key={run._id}
            className={`bg-[#1a1a1c] border rounded-lg p-4 shadow ${
            run.runType === 'thursday' ? 'border-orange-500' : 'border-green-500'
            }`}
          >
            {run.posterImage && (
               <img
                src={urlFor(run.posterImage).width(500).url()}
                alt={run.title}
                className="rounded mb-4 w-full max-w-[280px] mx-auto"
               />
            )}
            <h2 className="text-xl font-semibold">{run.title}</h2>
            <p className="capitalize text-sm text-gray-400">{run.runType}</p>
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
        <section className="p-8 border-t mt-8">
          <h2 className="text-2xl font-bold mb-4">Join the Club</h2>
           <div className="flex flex-col md:flex-row gap-4">
            <div className="border rounded-lg p-4 flex-1">
              <h3 className="font-semibold mb-1">New here? Become a member</h3>
               <p className="text-sm text-gray-500 mb-3">One-time — takes 30 seconds, lets us keep in touch.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScHOM6ZGqpXSNXnpAYkuYdIpE8ZD-XjT-rxLpDRmw1APilw7g/viewform" target="_blank" className="inline-block px-4 py-2 bg-black text-white rounded">
                 Register as Member
                </a>
            </div>
            <div className="border rounded-lg p-4 flex-1">
             <h3 className="font-semibold mb-1">Already a member?</h3>
               <p className="text-sm text-gray-500 mb-3">Register for this week's run</p>
            </div>
         </div>
        </section>  
      </div>
    </main>
  )

}