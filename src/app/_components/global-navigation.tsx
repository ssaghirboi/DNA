"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
] as const;

export function GlobalNavigation() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className="fixed right-6 top-6 z-50 flex flex-col gap-[5px] md:right-12 md:top-8"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span
          className={`block h-px w-6 transition-all duration-300 ease-out ${
            open ? "translate-y-[7px] rotate-45 bg-white" : "bg-black"
          }`}
        />
        <span
          className={`block h-px w-6 bg-black transition-all duration-300 ease-out ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-px w-6 transition-all duration-300 ease-out ${
            open ? "-translate-y-[7px] -rotate-45 bg-white" : "bg-black"
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-black px-8 transition-opacity duration-300 ease-out md:px-16 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-5xl font-bold tracking-tighter text-white transition-opacity duration-200 hover:opacity-50 md:text-7xl lg:text-8xl"
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="mt-14 inline-flex w-fit rounded-full border border-white/40 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-white"
          onClick={close}
        >
          Let&apos;s Build
        </a>
      </div>
    </>
  );
}
