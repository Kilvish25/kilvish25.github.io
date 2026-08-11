const GROUPS: { label: string; items: string }[] = [
  {
    label: "Languages",
    items: "Python · SQL · TypeScript/JavaScript · Java · C++ · Shell",
  },
  {
    label: "Backend",
    items:
      "FastAPI · Django · asyncio · Celery · WebSockets · REST/OpenAPI · Gunicorn · Nginx",
  },
  {
    label: "Data & storage",
    items:
      "PostgreSQL · Redis (Sentinel, Lua) · DuckDB · MongoDB · SQLAlchemy · streaming replication",
  },
  {
    label: "Streaming & orchestration",
    items: "Apache Airflow (Celery, active-active HA) · Kafka · RabbitMQ · event-driven pipelines",
  },
  {
    label: "Infrastructure",
    items:
      "Linux · systemd · Docker · GitHub Actions · Terraform · Ansible · Kubernetes · Tailscale · AWS · Azure",
  },
  {
    label: "Reliability",
    items:
      "Prometheus · Grafana · Alertmanager · ELK · SLOs · HA/DR · incident response · security hardening",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <div className="mb-10 flex items-center gap-5">
          <h2 className="label shrink-0 !text-ink">Skills</h2>
          <div className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
        <dl className="flex flex-col">
          {GROUPS.map((g, i) => (
            <div
              key={g.label}
              className={`grid gap-2 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <dt className="label pt-1">{g.label}</dt>
              <dd className="text-[0.95rem] leading-relaxed text-ink">
                {g.items}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
