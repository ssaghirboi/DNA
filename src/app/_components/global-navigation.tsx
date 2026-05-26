"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
] as const;

export function GlobalNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-neutral-200/50 bg-white/70 px-6 py-4 backdrop-blur-md md:px-12">
      <a
        href="#"
        className="flex items-center gap-3 transition-opacity duration-300 ease-out hover:opacity-70"
        onClick={closeMobile}
      >
        <img src="/DNA-logo.png" alt="" aria-hidden="true" className="h-10 w-auto" />
        <span className="text-sm font-black tracking-widest text-black">DNA</span>
      </a>

      <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-black transition-colors duration-300 ease-out hover:text-neutral-500"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden rounded-full bg-black px-5 py-1.5 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-neutral-800 sm:inline-block"
        >
          Let&apos;s Build
        </a>

        <button
          type="button"
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            className={`block h-px w-5 bg-black transition-all duration-300 ease-out ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-black transition-all duration-300 ease-out ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-b border-neutral-200/50 bg-white/95 px-6 py-6 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-black transition-colors duration-300 ease-out hover:text-neutral-500"
                onClick={closeMobile}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex w-fit rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-neutral-800"
              onClick={closeMobile}
            >
              Let&apos;s Build
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
