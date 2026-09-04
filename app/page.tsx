import { client } from '@/sanity/lib/client'
import { upcomingRunsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export default async function Home() {
  const runs = await client.fetch(upcomingRunsQuery)

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
        Upcoming Runs
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {runs.map((run: any) => {
          const accentColor = run.runType === 'thursday' ? 'var(--accent-thursday)' : 'var(--accent-sunday)'
          const cardBorder = '1px solid ' + accentColor

          return (
            <div key={run._id} className="rounded-xl p-5 shadow-lg" style={{ backgroundColor: 'var(--surface)', border: cardBorder }}>
              {run.posterImage && (
                <img src={urlFor(run.posterImage).width(500).url()} alt={run.title} className="rounded-lg mb-4 w-full max-w-[280px] mx-auto" />
              )}
              <h2 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>{run.title}</h2>
              <p className="capitalize text-sm font-semibold mb-1" style={{ color: accentColor }}>{run.runType}</p>
             <p className="text-zinc-400 text-sm mt-1 mb-3">
               {new Date(run.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })} · {run.time}
            </p>
              <p style={{ color: 'var(--muted)' }}>{run.venue}</p>
              {run.guest && <p style={{ color: 'var(--muted)' }}>Guest: {run.guest}</p>}
              <a href={run.registrationFormUrl} target="_blank" className="inline-block mt-3 px-5 py-2.5 rounded-lg font-medium" style={{ backgroundColor: 'var(--brand)', color: '#fff' }}>
                Register Now
              </a>
            </div>
          )
        })}
      </div>

      <section className="mt-12 pt-8" style={{ borderTop: '1px solid var(--surface-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Join the Club</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="rounded-xl p-5 flex-1" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--surface-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>New here? Become a member</h3>
            <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>One-time registration.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScHOM6ZGqpXSNXnpAYkuYdIpE8ZD-XjT-rxLpDRmw1APilw7g/viewform" target="_blank" className="inline-block px-5 py-2.5 rounded-lg font-medium" style={{ backgroundColor: 'var(--brand)', color: '#fff' }}>
              Register as Member
            </a>
          </div>
          <div className="rounded-xl p-5 flex-1" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--surface-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Already a member?</h3>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>Register for this week's run above.</p>
          </div>
        </div>
      </section>
    </main>
  )
}