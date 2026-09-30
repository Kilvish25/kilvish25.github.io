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
      className="case-link inline-flex min-h-9 items-center border border-line px-3 py-1.5 text-sm text-accent transition-colors hover:border-accent"
    >
      {children ?? tag.replaceAll("-", " ")}
    </a>
  );
}
