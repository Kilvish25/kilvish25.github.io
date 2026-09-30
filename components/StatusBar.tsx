const NAV = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function StatusBar() {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="section-shell header-inner">
        <a href="#top" className="wordmark" aria-label="Dharmendra Ahirwar, back to top">da<span className="text-accent">.</span></a>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-4 sm:gap-x-8">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-accent">{item.label}</a>
          ))}
        </nav>
        <a href="/Dharmendra-Ahirwar-Resume.pdf" className="header-resume">Résumé <span className="text-faint">PDF</span></a>
      </div>
    </header>
  );
}
