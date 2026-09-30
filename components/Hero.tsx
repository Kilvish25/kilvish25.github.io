import Image from "next/image";
import Telemetry from "./Telemetry";

export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-grid">
        <div>
          <p className="eyebrow mb-6">Platform &amp; infrastructure engineer</p>
          <h1 className="hero-name">Dharmendra<br /><span className="text-accent">Ahirwar.</span></h1>
          <p className="hero-statement">Reliable systems.<br />From architecture to production.</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            I build and operate trading infrastructure at Hillroute Capital —
            real-time data, resilient backends, and platforms built to stay up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/Dharmendra-Ahirwar-Resume.pdf" className="button-primary">View résumé <span className="button-meta">PDF</span></a>
            <a href="mailto:dharmendra.ahirwar101@gmail.com" className="button-secondary">Get in touch</a>
          </div>
          <a href="#work" className="mt-6 inline-block text-sm text-muted underline decoration-line underline-offset-4 hover:text-accent">Explore selected work</a>
        </div>
        <aside className="profile-card" aria-label="Background at a glance">
          <div className="profile-photo">
            <Image src="/images/profile.png" alt="Dharmendra Ahirwar" width={800} height={802} priority sizes="(min-width: 1024px) 300px, 140px" />
          </div>
          <div className="profile-facts">
            <p className="eyebrow">Currently</p>
            <p className="mt-2 font-display text-xl font-semibold">Software Engineer</p>
            <p className="mt-1 text-muted">Hillroute Capital</p>
            <div className="mt-5 border-t border-line pt-5">
              <p className="font-medium text-ink">IIT Delhi</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">B.Tech · Mathematics &amp; Computing</p>
            </div>
            <p className="mt-5 text-sm text-muted">Delhi, India · IST</p>
          </div>
        </aside>
      </div>
      <div className="mt-14 sm:mt-20">
        <p className="eyebrow mb-5">Selected engineering outcomes</p>
        <Telemetry />
      </div>
    </section>
  );
}
