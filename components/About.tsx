export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="section-shell py-20">
        <div className="section-heading">
          <div>
            <span className="eyebrow mb-3 block">05 / About</span>
            <h2 className="section-title">A little beyond the code.</h2>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
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
          <dl className="flex flex-col gap-3 text-sm sm:pt-1">
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
