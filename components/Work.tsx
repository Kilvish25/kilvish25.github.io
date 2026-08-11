import MarketDataDiagram from "./MarketDataDiagram";

type Bullet = { head: string; text: string };

type CaseStudy = {
  tag: string;
  org: string;
  title: string;
  oneLiner: string;
  metrics: string[];
  problem: string;
  approach: Bullet[];
  outcome: string;
  featured?: boolean;
};

const CASES: CaseStudy[] = [
  {
    tag: "market-data",
    org: "Hillroute · 2025",
    title: "Real-time market-data platform",
    oneLiner:
      "Trade-level ingestion across three exchanges, with correctness guarantees strategies can trust.",
    metrics: ["0.01% reconciliation tolerance", "dual-path WS/REST"],
    problem:
      "Strategies were reading lagging, gap-prone data, and the cost showed up directly as execution slippage. There was no way to know whether a feed was complete before trading on it.",
    approach: [
      {
        head: "WebSocket + REST, dual path",
        text: "async Python/FastAPI trade-level streams with REST validation, backfill, and dollar-bar aggregation",
      },
      {
        head: "Atomic gap detection (Redis Lua)",
        text: "redundant staggered instances run concurrently without double-writing",
      },
      {
        head: "Reconciliation at 0.01% tolerance",
        text: "WebSocket and REST paths continuously cross-checked",
      },
      {
        head: "Freshness contract",
        text: "strategies verify data completeness before reading — stale data is unreadable by design",
      },
    ],
    outcome:
      "Data lag cut by over 80%, execution slippage materially reduced, and no strategy ever executes on stale or incomplete data.",
    featured: true,
  },
  {
    tag: "gateway",
    org: "Hillroute · 2025",
    title: "Centralised exchange API gateway",
    oneLiner:
      "One controlled path to every exchange, ending rate-limit contention and exchange-side bans.",
    metrics: ["150 endpoints", "89 automated tests"],
    problem:
      "Every service hit exchange APIs independently. Rate-limit budgets collided across services, and exchange-side bans could stop the whole fund from trading.",
    approach: [
      {
        head: "Distributed rate limiter (Redis Lua)",
        text: "one shared, atomic budget across every consuming service",
      },
      {
        head: "Weight-aware multi-egress failover",
        text: "requests routed by remaining exchange quota, not round-robin",
      },
      {
        head: "Five-tier test pyramid",
        text: "89 automated tests — unit, integration, load, and chaos",
      },
    ],
    outcome:
      "Cross-service rate-limit contention eliminated, and exchange-side bans stopped entirely.",
  },
  {
    tag: "orchestration",
    org: "Hillroute · 2026",
    title: "Airflow, active-active",
    oneLiner: "An orchestration layer where a deploy can never interrupt a live trade.",
    metrics: ["105 DAGs", "7 worker hosts", "Airflow 2.9 → 3.1 zero-stop upgrade"],
    problem:
      "Workflows lived in scattered cron entries with no visibility or audit trail, and the scheduler was a single point of failure. Deploying during trading hours was a risk.",
    approach: [
      {
        head: "Active-active high availability",
        text: "re-architected on CeleryExecutor — 105 DAGs, 8 routing queues, 7 worker hosts",
      },
      {
        head: "Graceful drain on release",
        text: "in-flight tasks complete before workers restart; deploys can't interrupt a trade",
      },
      {
        head: "Cron → DAG migration",
        text: "every scheduled job made visible, retryable, and auditable",
      },
    ],
    outcome:
      "The orchestration layer deploys at any hour without touching a live trade, and every scheduled job is visible and auditable.",
  },
  {
    tag: "database",
    org: "Hillroute · 2026",
    title: "PostgreSQL estate, moved live",
    oneLiner:
      "Zero-downtime migration of every production database, then a hot standby to close the DR gap.",
    metrics: ["~40 ms replay lag", "60M-row read tier"],
    problem:
      "The fund's system of record sat on aging hardware with no disaster-recovery story — the platform's largest single risk.",
    approach: [
      {
        head: "Staged zero-downtime migration",
        text: "the entire PostgreSQL estate moved to new hardware with trading uninterrupted",
      },
      {
        head: "Streaming hot standby",
        text: "continuous replication closed the disaster-recovery gap",
      },
      {
        head: "DuckDB read tier",
        text: "a 60M-row mirror so research and backtesting never contend with production",
      },
    ],
    outcome:
      "The DR gap is closed with ~40 ms replay lag, and analytics load is fully isolated from the trading path.",
  },
  {
    tag: "platform",
    org: "Hillroute · 2025–26",
    title: "Zero to platform engineering",
    oneLiner:
      "CI/CD, staging, observability and hardening for a fleet that previously had none.",
    metrics: ["12 pipelines", "11 hosts instrumented", "31k-line runbook corpus"],
    problem:
      "No CI/CD, no monitoring, no staging environment: every deploy was manual, and failures were silent until they hurt.",
    approach: [
      {
        head: "12 pipelines from zero",
        text: "on a shared, resource-capped self-hosted runner pool, with a fail-closed staging environment",
      },
      {
        head: "Fleet-wide observability",
        text: "Prometheus, Grafana, Alertmanager and custom exporters on all 11 hosts; phone escalation for risk-critical jobs",
      },
      {
        head: "Hardening + conventions",
        text: "zero-trust private networking, host baselines, and ~31,000 lines of architecture and runbook documentation",
      },
    ],
    outcome:
      "A supervised, observable, documented platform that anyone on the team can operate.",
  },
  {
    tag: "migration",
    org: "Helloverify · 2022–24",
    title: "Legacy monolith to microservices",
    oneLiner:
      "Rebuilt a background-verification platform's core services and re-architected them for scale.",
    metrics: ["+200% throughput", "−40% downtime", "−70% latency"],
    problem:
      "A legacy system had hit its scaling limits: throughput bottlenecks, recurring downtime, and infrastructure costs growing faster than traffic.",
    approach: [
      {
        head: "Core services rebuilt",
        text: "Python/Django rewrite, then a staged migration to microservices",
      },
      {
        head: "Stack tuned end to end",
        text: "database schemas and indexing, Gunicorn/Nginx/Celery/Redis configuration, Docker packaging",
      },
      {
        head: "Quality gates in CI/CD",
        text: "Azure DevOps pipelines with SonarQube and SCA/SAST/DAST scanning built in",
      },
    ],
    outcome:
      "Throughput efficiency up 200%, downtime down 40%, latency down 70%, cloud costs down 30% — with deployments 50% faster.",
  },
];

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
      <span className="label pt-0.5">{label}</span>
      <div className="text-[0.95rem] leading-relaxed text-muted">{children}</div>
    </div>
  );
}

function CaseBody({ c }: { c: CaseStudy }) {
  return (
    <div className="flex flex-col gap-5 pb-8 pl-5 pr-4 sm:pl-[15rem] sm:pr-16">
      <Detail label="Problem">
        <p>{c.problem}</p>
      </Detail>
      {c.featured && (
        <Detail label="System">
          <MarketDataDiagram />
        </Detail>
      )}
      <Detail label="Approach">
        <ul className="flex flex-col gap-2">
          {c.approach.map((b) => (
            <li key={b.head} className="flex gap-3">
              <span aria-hidden="true" className="select-none pt-[0.55em] font-mono text-[0.5rem] leading-none text-accent">
                ▪
              </span>
              <span>
                <strong className="font-medium text-ink">{b.head}</strong>
                {" — "}
                {b.text}
              </span>
            </li>
          ))}
        </ul>
      </Detail>
      <Detail label="Outcome">
        <p>{c.outcome}</p>
      </Detail>
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
          <details key={c.tag} id={`case-${c.tag}`} open={c.featured}>
            <summary className="group grid gap-2 py-6 pl-5 pr-12 sm:grid-cols-[9rem_1fr_auto] sm:gap-6 sm:pr-4">
              <span className="pt-1">
                <span className="block font-mono text-xs font-medium text-accent">
                  {c.tag}
                </span>
                <span className="mt-1 block font-mono text-[0.6875rem] text-faint">
                  {c.org}
                </span>
              </span>
              <span>
                <span className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent sm:text-2xl">
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
                className="expand-icon absolute right-4 top-7 font-mono text-lg text-muted sm:static sm:pt-1"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <CaseBody c={c} />
          </details>
        ))}
      </div>
    </section>
  );
}
