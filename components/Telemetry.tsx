"use client";

import { useEffect, useRef, useState } from "react";

type MetricProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
};

function Metric({ target, prefix = "", suffix = "", label, context }: MetricProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const start = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const duration = 1300;
      const step = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && start(),
      { threshold: 0.15, rootMargin: "0px 0px 15% 0px" }
    );
    observer.observe(el);
    // never leave a metric stuck at 0 if the observer misses (e.g. instant anchor jump)
    const fallback = setTimeout(start, 4000);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col gap-1.5 px-5 py-5 sm:px-6">
      <span className="font-mono text-[1.7rem] font-medium leading-none text-ink tabular-nums">
        {prefix}
        {value.toLocaleString("en-US")}
        {suffix}
      </span>
      <span className="label">{label}</span>
      <span className="font-mono text-[0.6875rem] text-faint">{context}</span>
    </div>
  );
}

/* Deterministic sparkline segment; two copies loop as a seamless tape. */
const POINTS =
  "0,22 20,20 34,24 52,12 70,16 88,8 106,18 124,14 142,22 158,10 176,15 194,20 210,6 228,16 246,12 264,19 282,9 300,22";

function Tape() {
  return (
    <div className="overflow-hidden border-b border-line" aria-hidden="true">
      <div className="tape-track opacity-70">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <svg
            key={i}
            width="300"
            height="30"
            viewBox="0 0 300 30"
            className="h-[30px] w-[300px] shrink-0"
            preserveAspectRatio="none"
          >
            <polyline
              points={POINTS}
              fill="none"
              stroke="#FFB454"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

const METRICS: MetricProps[] = [
  { target: 530, suffix: "+", label: "symbols streaming", context: "trade-level, WebSocket + REST" },
  { target: 40, prefix: "~", suffix: " ms", label: "replica lag", context: "PostgreSQL hot standby" },
  { target: 3, label: "exchanges", context: "Binance · OKX · Deribit" },
  { target: 11, label: "host fleet", context: "fully instrumented" },
  { target: 105, label: "DAGs orchestrated", context: "Airflow, active-active HA" },
  { target: 80, prefix: "−", suffix: "%", label: "data lag", context: "vs. previous pipeline" },
];

export default function Telemetry() {
  return (
    <section aria-label="Platform metrics" className="border border-line bg-panel">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 sm:px-6">
        <span className="label">Platform telemetry</span>
        <span className="flex items-center gap-2.5 font-mono text-[0.6875rem] tracking-widest text-green">
          <span className="dot-live" aria-hidden="true" />
          IN PRODUCTION SINCE JAN 2025
        </span>
      </div>
      <Tape />
      <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 [&>div]:bg-panel">
        {METRICS.map((m) => (
          <Metric key={m.label} {...m} />
        ))}
      </div>
    </section>
  );
}
