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
      <div className="section-shell py-20">
        <div className="section-heading">
          <div>
            <span className="eyebrow mb-3 block">03 / Skills</span>
            <h2 className="section-title">The tools behind the systems.</h2>
          </div>
        </div>
        <dl className="skills-grid">
          {GROUPS.map((g) => (
            <div
              key={g.label}
              className="skill-group"
            >
              <dt className="eyebrow mb-3">{g.label}</dt>
              <dd className="text-base leading-relaxed text-muted">
                {g.items}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
