import CaseLink from "./CaseLink";

type Principle = {
  title: string;
  text: string;
  evidence: { label: string; tag: string }[];
};

const PRINCIPLES: Principle[] = [
  {
    title: "End-to-end ownership",
    text: "From architecture and implementation to deployment and production operations — and if it pages at 3 a.m., that's mine too.",
    evidence: [{ label: "zero to platform", tag: "platform" }],
  },
  {
    title: "Reliability as a feature",
    text: "High availability, disaster recovery, monitoring, and incident response designed in from the start — not bolted on after the first outage.",
    evidence: [
      { label: "0 downtime", tag: "database" },
      { label: "active-active", tag: "orchestration" },
    ],
  },
  {
    title: "Performance, measured",
    text: "Every performance number on this page comes from measurement, not intuition.",
    evidence: [
      { label: "−80% lag", tag: "market-data" },
      { label: "−70% latency", tag: "migration" },
    ],
  },
  {
    title: "Best practices, enforced",
    text: "Typed code, layered tests, CI/CD quality gates, security hardening, and documentation others can operate from.",
    evidence: [{ label: "89 tests · 5 tiers", tag: "gateway" }],
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-t border-line">
      <div className="section-shell py-20">
        <div className="section-heading">
          <div>
            <span className="eyebrow mb-3 block">04 / How I work</span>
            <h2 className="section-title">Ownership beyond the deploy.</h2>
          </div>
        </div>
        <dl className="flex flex-col">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.title}
              className={`grid gap-3 py-6 lg:grid-cols-[13rem_1fr_13rem] lg:gap-6 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <dt className="pt-0.5 font-display text-base font-semibold text-ink">
                {p.title}
              </dt>
              <dd className="max-w-2xl text-base leading-relaxed text-muted">
                {p.text}
              </dd>
              <dd className="flex flex-wrap items-start gap-2 lg:justify-end">
                {p.evidence.map((e) => (
                  <CaseLink key={e.tag} tag={e.tag}>
                    {e.label}
                  </CaseLink>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
