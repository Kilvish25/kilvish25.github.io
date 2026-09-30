const LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/kilvish25" },
  { label: "Résumé (PDF)", href: "/Dharmendra-Ahirwar-Resume.pdf" },
  { label: "GitHub", href: "https://github.com/Kilvish25" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-band border-t border-line">
      <div className="section-shell py-20">
        <p className="eyebrow mb-6">06 / Contact</p>
        <h2
          className="font-display font-bold leading-tight tracking-tight text-ink"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)", fontStretch: "112%" }}
        >
          Let’s build something reliable.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">Have a backend, platform, or infrastructure role in mind? Let’s talk about the team and the systems you’re building.</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:dharmendra.ahirwar101@gmail.com"
            className="button-primary contact-email"
          >
            dharmendra.ahirwar101@gmail.com
          </a>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="button-secondary"
            >
              {l.label}
            </a>
          ))}
        </div>
        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <span className="text-sm text-faint">
            © 2026 Dharmendra Ahirwar · Delhi, India
          </span>
          <span className="text-sm text-faint">
            Next.js · GitHub Pages · no trackers
          </span>
        </footer>
      </div>
    </section>
  );
}
