type Entry = {
  period: string;
  role: string;
  org: string;
  summary: string;
  notes?: string[];
};

const ENTRIES: Entry[] = [
  {
    period: "2025 —",
    role: "Software Engineer",
    org: "Hillroute Capital · Delhi",
    summary:
      "Own the technology platform of a regulated digital-assets quant fund: real-time market data, exchange gateways, orchestration, databases, CI/CD and fleet-wide observability — plus incident response and mentoring.",
  },
  {
    period: "2022 — 2024",
    role: "Senior Software Engineer",
    org: "Helloverify India",
    summary:
      "Rebuilt core services in Python/Django, replacing a legacy system and increasing throughput efficiency by 200%. Architected the move to microservices (−40% downtime), tuned Gunicorn/Nginx/Celery/Redis (−70% latency), automated CI/CD with Azure DevOps, and containerised services with Docker (−30% cloud cost).",
  },
  {
    period: "2020",
    role: "Software Engineer Intern",
    org: "Pirates India",
    summary:
      "Designed schemas handling 50,000+ daily transactions (−30% query time across 100k+ records) and built a Python ML recommendation engine that lifted user read-time by 25–30%.",
  },
  {
    period: "2018 — 2022",
    role: "B.Tech, Mathematics & Computing",
    org: "Indian Institute of Technology Delhi",
    summary:
      "Selected through JEE Advanced, 2018.",
    notes: [
      "KVPY Fellowship, SX stream — 2018",
      "Dakshana Foundation Fellowship — 2016",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <div className="mb-10 flex items-center gap-5">
          <h2 className="label shrink-0 !text-ink">Experience</h2>
          <div className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
        <ol className="flex flex-col">
          {ENTRIES.map((e, i) => (
            <li
              key={e.period}
              className={`grid gap-3 py-8 sm:grid-cols-[9rem_1fr] sm:gap-6 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="pt-1 font-mono text-xs text-amber">{e.period}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {e.role}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-muted">{e.org}</p>
                <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-muted">
                  {e.summary}
                </p>
                {e.notes && (
                  <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                    {e.notes.map((n) => (
                      <li key={n} className="font-mono text-[0.6875rem] text-faint">
                        {n}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
