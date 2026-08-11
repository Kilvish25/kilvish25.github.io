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
  // initialize at the real value so crawlers, previews, and no-JS visitors
  // never see a board of zeros; the count-up only runs client-side
  const [value, setValue] = useState(target);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
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

/* Deterministic long-period sparkline; two copies loop as a seamless tape.
   The segment is 1200px wide so the repeat is imperceptible on any viewport. */
const POINTS =
  "0,21 18,19 30,23 46,14 62,17 80,9 96,18 110,15 128,22 142,11 160,16 178,20 192,7 210,15 226,12 240,19 258,10 274,14 290,21 306,17 320,24 338,13 352,18 368,8 384,16 400,12 418,20 434,9 448,15 466,19 480,6 498,14 514,18 528,11 546,16 562,22 578,10 592,17 610,13 626,19 640,8 658,15 674,21 688,12 706,18 722,14 738,23 752,9 770,16 786,20 800,11 818,17 834,7 848,14 866,19 882,12 898,16 914,22 930,10 946,18 960,13 978,20 994,15 1010,8 1026,17 1040,12 1058,19 1074,14 1088,21 1106,9 1122,16 1138,18 1152,11 1170,15 1186,13 1200,21";

function Tape() {
  return (
    <div className="overflow-hidden border-b border-line" aria-hidden="true">
      <div className="tape-track opacity-70">
        {[0, 1].map((i) => (
          <svg
            key={i}
            width="1200"
            height="30"
            viewBox="0 0 1200 30"
            className="h-[30px] w-[1200px] shrink-0"
            preserveAspectRatio="none"
          >
            <polyline
              points={POINTS}
              fill="none"
              stroke="#A3B577"
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
  { target: 4, suffix: "+", label: "years in production", context: "backend & platform engineering" },
  { target: 530, suffix: "+", label: "symbols streaming", context: "trade-level · 3 exchanges" },
  { target: 0, label: "downtime", context: "PostgreSQL estate, migrated live" },
  { target: 80, prefix: "−", suffix: "%", label: "data lag", context: "market-data platform rebuild" },
];

export default function Telemetry() {
  return (
    <section aria-label="Career metrics" className="border border-line bg-panel">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 sm:px-6">
        <span className="label">Engineering telemetry</span>
        <span className="flex items-center gap-2.5 font-mono text-[0.6875rem] tracking-widest text-green">
          <span className="dot-live" aria-hidden="true" />
          SHIPPING SINCE 2020
        </span>
      </div>
      <Tape />
      <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4 [&>div]:bg-panel">
        {METRICS.map((m) => (
          <Metric key={m.label} {...m} />
        ))}
      </div>
    </section>
  );
}
