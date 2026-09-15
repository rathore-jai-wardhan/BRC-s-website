import { urlFor } from "@/sanity/lib/image";

type Run = {
  _id: string;
  title: string;
  runType: "thursday" | "sunday";
  date: string;
  time: string;
  venue: string;
  description?: string;
  guest?: string;
  activities?: string[];
  posterImage?: any;
  registrationFormUrl?: string;
  routePdfUrl?: string;
};

export default function RunCard({
  run,
  past = false,
}: {
  run: Run;
  past?: boolean;
}) {
  return (
    <article className="rounded-2xl overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)]">

      {run.posterImage && (
        <img
          src={urlFor(run.posterImage).width(900).url()}
          alt={run.title}
          className="w-full aspect-[4/3] object-cover"
        />
      )}

      <div className="p-5 md:p-6">

        <p
          className="text-sm font-semibold uppercase tracking-wider mb-2"
          style={{
            color:
              run.runType === "thursday"
                ? "var(--accent-thursday)"
                : "var(--accent-sunday)",
          }}
        >
          {run.runType} Run
        </p>

        <h2 className="text-2xl font-bold mb-3">
          {run.title}
        </h2>

        <p className="text-sm text-[var(--muted)] mb-1">
          {new Date(run.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <p className="text-sm text-[var(--muted)] mb-1">
          {run.time} · {run.venue}
        </p>

        {run.guest && (
          <p className="text-sm text-[var(--muted)] mt-2">
            Guest: {run.guest}
          </p>
        )}

        {run.description && (
          <p className="text-sm text-[var(--muted)] mt-3">
            {run.description}
          </p>
        )}

        {run.activities && run.activities.length > 0 && (
          <div className="mt-3">
            <p className="text-sm font-semibold">Activities</p>
            <ul className="text-sm text-[var(--muted)] list-disc pl-5">
              {run.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-5">

          {!past && run.registrationFormUrl && (
            <a
              href={run.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[var(--brand)] text-white font-medium hover:bg-[var(--brand-hover)] transition"
            >
              Register Now
            </a>
          )}

          {run.routePdfUrl && (
            <a
              href={run.routePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-[var(--surface-border)] hover:border-[var(--brand)] transition"
            >
              Route Info
            </a>
          )}

        </div>

      </div>
    </article>
  );
}