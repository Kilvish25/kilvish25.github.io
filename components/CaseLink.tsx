"use client";

/* Evidence chip: navigates to a case study and opens its <details> so the
   reader lands on the expanded content, not a collapsed row. */
export default function CaseLink({
  tag,
  children,
}: {
  tag: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={`#case-${tag}`}
      onClick={() => {
        const el = document.getElementById(`case-${tag}`);
        if (el instanceof HTMLDetailsElement) el.open = true;
      }}
      className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[0.6875rem] text-accent transition-colors hover:border-accent"
    >
      {children}
      <span aria-hidden="true">→ {tag}</span>
    </a>
  );
}
