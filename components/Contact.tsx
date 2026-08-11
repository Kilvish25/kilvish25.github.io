const LINKS = [
  { label: "linkedin.com/in/kilvish25", href: "https://linkedin.com/in/kilvish25" },
  { label: "Résumé (PDF)", href: "/Dharmendra-Ahirwar-Resume.pdf" },
  { label: "github.com/Kilvish25", href: "https://github.com/Kilvish25" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
        <p className="label mb-6">Contact</p>
        <h2
          className="font-display font-bold leading-tight tracking-tight text-ink"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)", fontStretch: "112%" }}
        >
          Building something that has to stay up?
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:dharmendra.ahirwar101@gmail.com"
            className="bg-amber px-5 py-2.5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            dharmendra.ahirwar101@gmail.com
          </a>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-amber hover:text-amber"
            >
              {l.label}
            </a>
          ))}
        </div>
        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <span className="font-mono text-[0.6875rem] text-faint">
            © 2026 Dharmendra Ahirwar · Delhi, India
          </span>
          <span className="font-mono text-[0.6875rem] text-faint">
            built by hand · Next.js · no trackers
          </span>
        </footer>
      </div>
    </section>
  );
}
