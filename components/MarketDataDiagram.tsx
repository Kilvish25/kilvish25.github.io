/* System diagram for the market-data case study. Pure inline SVG in the
   site's palette; accent is reserved for the correctness path. */

const INK = "#e7eaf2";
const MUTED = "#8a93a6";
const LINE = "#2a3346";
const PANEL = "#0d1119";
const ACCENT = "#a3b577";

function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={PANEL}
        stroke={accent ? ACCENT : LINE}
        strokeWidth={accent ? 1.2 : 1}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 4}
        textAnchor="middle"
        fontSize="11"
        fill={INK}
        style={{ letterSpacing: "0.08em" }}
      >
        {title}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          fontSize="9.5"
          fill={MUTED}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

export default function MarketDataDiagram() {
  return (
    <div className="overflow-x-auto border border-line bg-panel/60 p-4 sm:p-6">
      <p className="mb-2 font-mono text-[0.6875rem] text-faint sm:hidden" aria-hidden="true">
        scroll →
      </p>
      <svg
        viewBox="0 0 700 345"
        role="img"
        className="h-auto w-full min-w-[640px] font-mono"
        aria-labelledby="mdd-title"
      >
        <title id="mdd-title">
          Market-data platform architecture: three exchanges feed redundant
          staggered WebSocket ingest instances and a REST validation path;
          Lua-scripted gap detection and dual-path reconciliation guard writes
          to storage; strategies read only through a freshness gate, so stale
          data is never executed on.
        </title>

        <defs>
          <marker id="arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L8,4 L0,8 z" fill={LINE} />
          </marker>
          <marker id="arrAccent" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L8,4 L0,8 z" fill={ACCENT} />
          </marker>
        </defs>

        {/* column 1 — sources */}
        <rect x={10} y={95} width={120} height={130} fill={PANEL} stroke={LINE} />
        <text x={70} y={112} textAnchor="middle" fontSize="11" fill={INK} style={{ letterSpacing: "0.08em" }}>
          EXCHANGES ×3
        </text>
        {["BINANCE", "OKX", "DERIBIT"].map((name, i) => (
          <g key={name}>
            <rect x={20} y={122 + i * 32} width={100} height={26} fill="none" stroke={LINE} strokeWidth={0.8} />
            <text x={70} y={133 + i * 32} textAnchor="middle" fontSize="8.5" fill={INK}>{name}</text>
            <text x={70} y={143 + i * 32} textAnchor="middle" fontSize="7.5" fill={MUTED}>ws · rest</text>
          </g>
        ))}
        <text x={70} y={240} textAnchor="middle" fontSize="9" fill={MUTED}>trade-level feeds</text>

        {/* column 2 — ingestion */}
        <Box x={185} y={58} w={150} h={44} title="WS INGEST · A" sub="async python" />
        <Box x={185} y={118} w={150} h={44} title="WS INGEST · B" sub="staggered replica" />
        <Box x={185} y={215} w={150} h={44} title="REST VALIDATE" sub="+ backfill" />
        {/* redundancy bracket */}
        <path d="M343,58 h5 v104 h-5" fill="none" stroke={ACCENT} strokeWidth={1} />
        <text x={260} y={178} textAnchor="middle" fontSize="8.5" fill={MUTED}>
          redundant · staggered · no double writes
        </text>

        {/* column 3 — correctness core */}
        <Box x={395} y={58} w={150} h={44} title="GAP DETECTION" sub="redis lua · atomic claim" accent />
        <Box x={395} y={132} w={150} h={44} title="STORE" sub="redis hot · postgresql" />
        <Box x={395} y={215} w={150} h={44} title="RECONCILIATION" sub="ws ↔ rest" accent />
        <Box x={395} y={292} w={150} h={40} title="DOLLAR-BAR PIPELINES" />

        {/* column 4 — consumers behind the freshness contract */}
        <rect x={565} y={88} width={128} height={200} fill="none" stroke={ACCENT} strokeWidth={1} strokeDasharray="5 4" opacity={0.75} />
        <text x={629} y={78} textAnchor="middle" fontSize="8.5" fill={ACCENT} style={{ letterSpacing: "0.06em" }}>
          FRESHNESS CONTRACT
        </text>
        <Box x={575} y={108} w={108} h={44} title="FRESHNESS GATE" sub="verify before read" />
        <Box x={575} y={222} w={108} h={44} title="STRATEGIES" sub="execution" />

        {/* edges: sources → ingestion */}
        <line x1={130} y1={120} x2={185} y2={82} stroke={LINE} markerEnd="url(#arr)" />
        <line x1={130} y1={145} x2={185} y2={140} stroke={LINE} markerEnd="url(#arr)" />
        <text x={157} y={102} textAnchor="middle" fontSize="8.5" fill={MUTED}>ws</text>
        <line x1={130} y1={200} x2={185} y2={237} stroke={LINE} markerEnd="url(#arr)" />
        <text x={150} y={228} textAnchor="middle" fontSize="8.5" fill={MUTED}>snapshots</text>

        {/* edges: ingestion → gap detection */}
        <line x1={335} y1={80} x2={395} y2={80} stroke={LINE} markerEnd="url(#arr)" />
        <line x1={335} y1={140} x2={395} y2={95} stroke={LINE} markerEnd="url(#arr)" />
        <text x={368} y={70} textAnchor="middle" fontSize="8.5" fill={MUTED}>claim</text>

        {/* gap detection → store */}
        <line x1={470} y1={102} x2={470} y2={132} stroke={LINE} markerEnd="url(#arr)" />

        {/* rest → reconciliation */}
        <line x1={335} y1={237} x2={395} y2={237} stroke={LINE} markerEnd="url(#arr)" />
        <text x={365} y={230} textAnchor="middle" fontSize="8.5" fill={MUTED}>dual path</text>

        {/* reconciliation ↔ store (accent: the tolerance) */}
        <line x1={470} y1={215} x2={470} y2={176} stroke={ACCENT} markerEnd="url(#arrAccent)" markerStart="url(#arrAccent)" />
        <text x={481} y={199} fontSize="8.5" fill={ACCENT}>0.01% tolerance</text>

        {/* store → dollar-bar (elbow left of reconciliation) */}
        <path d="M395,154 h-18 v158 h18" fill="none" stroke={LINE} markerEnd="url(#arr)" />

        {/* store → freshness gate */}
        <line x1={545} y1={148} x2={575} y2={134} stroke={LINE} markerEnd="url(#arr)" />

        {/* dollar-bar → freshness gate (elbow right) */}
        <path d="M545,312 h13 v-168 h17" fill="none" stroke={LINE} markerEnd="url(#arr)" />

        {/* gate → strategies (accent: the guarantee) */}
        <line x1={605} y1={152} x2={605} y2={222} stroke={ACCENT} markerEnd="url(#arrAccent)" />
        <text fontSize="8.5" fill={ACCENT}>
          <tspan x={614} y={185}>complete +</tspan>
          <tspan x={614} y={196}>fresh only</tspan>
        </text>
      </svg>
    </div>
  );
}
