import CaseLink from "./CaseLink";

const ACHIEVEMENTS = [
  { value: "80%+", label: "less market-data lag", context: "Real-time trading platform", tag: "market-data" },
  { value: "0", label: "migration downtime", context: "Production PostgreSQL estate", tag: "database" },
  { value: "200%", label: "higher throughput efficiency", context: "Core services at Helloverify", tag: "migration" },
];

export default function Telemetry() {
  return (
    <section aria-label="Selected engineering outcomes" className="impact-grid">
      {ACHIEVEMENTS.map((achievement) => (
        <div key={achievement.tag} className="impact-item">
          <p className="impact-value">{achievement.value}</p>
          <p className="mt-2 font-medium text-ink">{achievement.label}</p>
          <p className="mb-4 mt-1 text-sm text-muted">{achievement.context}</p>
          <CaseLink tag={achievement.tag}>View case study</CaseLink>
        </div>
      ))}
    </section>
  );
}
