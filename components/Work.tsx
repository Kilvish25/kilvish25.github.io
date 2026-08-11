type CaseStudy = {
  tag: string;
  org: string;
  title: string;
  oneLiner: string;
  metrics: string[];
  problem: string;
  approach: string;
  outcome: string;
};

const CASES: CaseStudy[] = [
  {
    tag: "market-data",
    org: "Hillroute · 2025",
    title: "Real-time market-data platform",
    oneLiner:
      "Trade-level ingestion across three exchanges, with correctness guarantees strategies can trust.",
    metrics: ["530+ symbols", "3 exchanges", "−80% data lag", "0.01% reconciliation"],
    problem:
      "Strategies were reading lagging, gap-prone data, and the cost showed up directly as execution slippage. There was no way to know whether a feed was complete before trading on it.",
    approach:
      "Built from scratch in async Python/FastAPI: WebSocket trade-level streams with REST validation and backfill, and dollar-bar aggregation pipelines. Correctness is engineered in — Lua-scripted atomic gap detection lets redundant staggered instances run without double-writing, dual-path WebSocket/REST reconciliation holds a 0.01% tolerance, and a freshness contract lets downstream strategies verify data before reading it.",
    outcome:
      "Data lag cut by over 80%, execution slippage materially reduced, and no strategy ever executes on stale or incomplete data.",
  },
  {
    tag: "gateway",
    org: "Hillroute · 2025",
    title: "Centralised exchange API gateway",
    oneLiner:
      "One controlled path to every exchange, ending rate-limit contention and exchange-side bans.",
    metrics: ["150 endpoints", "89 automated tests", "5-tier test pyramid"],
    problem:
      "Every service hit exchange APIs independently. Rate-limit budgets collided across services, and exchange-side bans could stop the whole fund from trading.",
    approach:
      "A single gateway in front of every exchange, with a Redis-Lua distributed rate limiter and weight-aware, multi-egress failover. Verified by 89 automated tests across a five-tier pyramid: unit, integration, load and chaos.",
    outcome:
      "Cross-service rate-limit contention eliminated, and exchange-side bans stopped entirely.",
  },
  {
    tag: "orchestration",
    org: "Hillroute · 2026",
    title: "Airflow, active-active",
    oneLiner: "An orchestration layer where a deploy can never interrupt a live trade.",
    metrics: ["105 DAGs", "7 worker hosts", "8 queues", "2.9 → 3.1"],
    problem:
      "Workflows lived in scattered cron entries with no visibility or audit trail, and the scheduler was a single point of failure. Deploying during trading hours was a risk.",
    approach:
      "Upgraded Airflow 2.9 to 3.1 and re-architected it to active-active high availability on CeleryExecutor — 105 DAGs, 8 routing queues, 7 worker hosts. Releases gracefully drain in-flight tasks; cron workflows were migrated into DAGs for visibility and auditability.",
    outcome:
      "The orchestration layer deploys at any hour without touching a live trade, and every scheduled job is visible and auditable.",
  },
  {
    tag: "database",
    org: "Hillroute · 2026",
    title: "PostgreSQL estate, moved live",
    oneLiner:
      "Zero-downtime migration of every production database, then a hot standby to close the DR gap.",
    metrics: ["0 downtime", "~40 ms replay lag", "60M-row read tier"],
    problem:
      "The fund's system of record sat on aging hardware with no disaster-recovery story — the platform's largest single risk.",
    approach:
      "Executed a staged, zero-downtime migration of the entire PostgreSQL estate to new hardware, then added a streaming hot standby. Built a DuckDB read tier mirroring a 60M-row dataset so research and backtesting never contend with production trading.",
    outcome:
      "The DR gap is closed with ~40 ms replay lag, and analytics load is fully isolated from the trading path.",
  },
  {
    tag: "platform",
    org: "Hillroute · 2025–26",
    title: "Zero to platform engineering",
    oneLiner:
      "CI/CD, staging, observability and hardening for a fleet that previously had none.",
    metrics: ["12 pipelines", "11 hosts instrumented", "~31k lines of docs"],
    problem:
      "No CI/CD, no monitoring, no staging environment: every deploy was manual, and failures were silent until they hurt.",
    approach:
      "Took the organisation from zero to 12 automated pipelines on a shared, resource-capped self-hosted runner pool, with a staging environment enforcing fail-closed production isolation. Fleet-wide observability with Prometheus, Grafana, Alertmanager and custom exporters; zero-trust private networking; host-hardening baselines; phone escalation for risk-critical jobs.",
    outcome:
      "A supervised, observable, documented platform — backed by the organisation's engineering conventions and ~31,000 lines of architecture and runbook documentation.",
  },
  {
    tag: "migration",
    org: "Helloverify · 2022–24",
    title: "Legacy monolith to microservices",
    oneLiner:
      "Rebuilt a background-verification platform's core services and re-architected them for scale.",
    metrics: ["+200% throughput", "−40% downtime", "−70% latency", "−30% cloud cost"],
    problem:
      "A legacy system had hit its scaling limits: throughput bottlenecks, recurring downtime, and infrastructure costs growing faster than traffic.",
    approach:
      "Rebuilt the core services in Python/Django, then architected the migration to microservices. Optimised database schemas and indexing, tuned the Gunicorn/Nginx/Celery/Redis stack, containerised services with Docker, and automated CI/CD with Azure DevOps — with SonarQube and SCA/SAST/DAST gates in the pipeline.",
    outcome:
      "Throughput efficiency up 200%, downtime down 40%, latency down 70%, cloud costs down 30% — and deployments 50% faster with quality gates built in.",
  },
];

function Detail({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
      <span className="label pt-0.5">{label}</span>
      <p className="text-[0.95rem] leading-relaxed text-muted">{text}</p>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <div className="mb-10 flex items-center gap-5">
        <h2 className="label shrink-0 !text-ink">Selected work</h2>
        <div className="h-px flex-1 bg-line" aria-hidden="true" />
        <span className="font-mono text-[0.6875rem] text-faint">
          production systems · 2022—
        </span>
      </div>
      <div className="case">
        {CASES.map((c) => (
          <details key={c.tag}>
            <summary className="group grid gap-2 py-6 pl-5 pr-4 sm:grid-cols-[9rem_1fr_auto] sm:gap-6">
              <span className="pt-1">
                <span className="block font-mono text-xs font-medium text-amber">
                  {c.tag}
                </span>
                <span className="mt-1 block font-mono text-[0.6875rem] text-faint">
                  {c.org}
                </span>
              </span>
              <span>
                <span className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-amber sm:text-2xl">
                  {c.title}
                </span>
                <span className="mt-1.5 block text-[0.95rem] leading-relaxed text-muted">
                  {c.oneLiner}
                </span>
                <span className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.6875rem] text-faint">
                  {c.metrics.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </span>
              </span>
              <span
                className="expand-icon hidden pt-1 font-mono text-lg text-muted sm:block"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div className="flex flex-col gap-5 pb-8 pl-5 pr-4 sm:pl-[15rem] sm:pr-16">
              <Detail label="Problem" text={c.problem} />
              <Detail label="Approach" text={c.approach} />
              <Detail label="Outcome" text={c.outcome} />
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
