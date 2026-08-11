import CaseLink from "./CaseLink";

type Entry = {
  period: string;
  role: string;
  org: string;
  summary: string;
  cases?: string[];
};

const ENTRIES: Entry[] = [
  {
    period: "2025 —",
    role: "Software Engineer",
    org: "Hillroute Capital · Delhi",
    summary:
      "Design, build, and operate the technology platform of a regulated digital-assets quant fund.",
    cases: ["market-data", "gateway", "orchestration", "database", "platform"],
  },
  {
    period: "2022 — 2024",
    role: "Senior Software Engineer",
    org: "Helloverify India",
    summary:
      "Rebuilt and re-architected the core services of a background-verification platform serving enterprise clients.",
    cases: ["migration"],
  },
  {
    period: "2020",
    role: "Software Engineer Intern",
    org: "Pirates India",
    summary:
      "Database schemas for 50,000+ daily transactions, and a Python ML recommendation engine that lifted user read-time by 25–30%.",
  },
  {
    period: "2018 — 2022",
    role: "B.Tech, Mathematics & Computing",
    org: "Indian Institute of Technology Delhi",
    summary: "Selected through JEE Advanced, 2018.",
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
              className={`grid gap-3 py-7 sm:grid-cols-[9rem_1fr] sm:gap-6 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="pt-1 font-mono text-xs text-accent">{e.period}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {e.role}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-muted">{e.org}</p>
                <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-muted">
                  {e.summary}
                </p>
                {e.cases && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.cases.map((tag) => (
                      <CaseLink key={tag} tag={tag} />
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
