"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function StatusBar() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-4 px-5 font-mono text-xs">
        <a href="#top" className="text-ink">
          <span className="hidden font-medium tracking-[0.18em] sm:inline">
            DHARMENDRA AHIRWAR
          </span>
          <span className="whitespace-nowrap font-medium tracking-[0.14em] sm:hidden">
            D.AHIRWAR
          </span>
        </a>
        <nav className="flex items-center gap-3.5 sm:gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-amber"
            >
              {item.label}
            </a>
          ))}
          <span
            className="hidden select-none text-faint md:inline"
            suppressHydrationWarning
          >
            DEL {time ?? "--:--:--"} IST
          </span>
        </nav>
      </div>
    </header>
  );
}
