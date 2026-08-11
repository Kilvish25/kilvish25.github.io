export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <div className="mb-10 flex items-center gap-5">
          <h2 className="label shrink-0 !text-ink">About</h2>
          <div className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
        <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:gap-16">
          <div className="max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-muted">
            <p>
              I&apos;m Dharmendra — Delhi-based, and happiest building systems
              that keep their promises: to users, to the services downstream,
              and to whoever operates them next.
            </p>
            <p>
              The long way here: a Dakshana Fellowship (2016) → JEE Advanced →
              IIT Delhi, Mathematics &amp; Computing, with a KVPY Fellowship en
              route.
            </p>
          </div>
          <dl className="flex flex-col gap-3 font-mono text-xs sm:pt-1">
            <div className="flex gap-3">
              <dt className="text-faint">location</dt>
              <dd className="text-muted">Delhi, India · IST</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-faint">focus</dt>
              <dd className="text-muted">real-time data · reliability engineering</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
