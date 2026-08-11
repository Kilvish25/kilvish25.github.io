import Telemetry from "./Telemetry";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:pt-40">
      <p className="label mb-6">
        Dharmendra Ahirwar · Platform &amp; Infrastructure Engineer
      </p>
      <h1
        className="font-display font-bold leading-[0.98] tracking-tight text-ink [text-wrap:balance]"
        style={{ fontSize: "clamp(2.6rem, 7vw, 5.2rem)", fontStretch: "112%" }}
      >
        <span className="block">Reliable systems,</span>
        <span className="block text-amber">engineered end to end.</span>
      </h1>
      <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
        I design, build, and operate the trading platform at Hillroute
        Capital, a regulated digital-assets quant fund — real-time market
        data, exchange gateways, orchestration, databases, and the
        observability that keeps it all honest. Reliability and performance
        are engineered in from the first commit, not patched in after.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="bg-amber px-5 py-2.5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          View the work ↓
        </a>
        <a
          href="/Dharmendra-Ahirwar-Resume.pdf"
          className="border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-amber hover:text-amber"
        >
          Résumé (PDF)
        </a>
        <span className="font-mono text-xs text-faint">
          IIT Delhi · Mathematics &amp; Computing
        </span>
      </div>
      <div className="mt-16">
        <Telemetry />
      </div>
    </section>
  );
}
