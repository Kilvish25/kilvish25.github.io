const PRINCIPLES: { title: string; text: string }[] = [
  {
    title: "End-to-end ownership",
    text: "From architecture and implementation to testing, deployment, and production operations — I take systems the whole way, then keep them healthy. If it pages at 3 a.m., that's mine too.",
  },
  {
    title: "Reliability as a feature",
    text: "High availability, disaster recovery, monitoring, and incident response are designed in from the start — redundant instances, hot standbys, graceful deploys, alerting with escalation.",
  },
  {
    title: "Performance, measured",
    text: "Latency budgets, load tests, and profiling before optimisation. Every performance claim on this page — lag cut 80%, latency down 70% — comes from measurement, not intuition.",
  },
  {
    title: "Best practices, enforced",
    text: "Typed code, layered test pyramids, CI/CD quality gates, security hardening, and documentation thorough enough that others can operate what I build.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-t border-line">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <div className="mb-10 flex items-center gap-5">
          <h2 className="label shrink-0 !text-ink">How I work</h2>
          <div className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="bg-panel p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
