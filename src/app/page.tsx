"use client";

import { useState, type FormEvent } from "react";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
] as const;

const CAPABILITIES = [
  {
    title: "Growth Marketing & Strategy Consulting",
    description:
      "High-level go-to-market roadmaps, performance paid media, cross-channel customer acquisition strategies, and brand positioning frameworks.",
  },
  {
    title: "Full-Stack Digital Ecosystems",
    description:
      "Custom web applications engineered completely from scratch, secure enterprise architecture, high-performance E-commerce platforms, and API orchestrations.",
  },
  {
    title: "Social Network Synchronization",
    description:
      "Turning fragmented channels (LinkedIn, Instagram, X, YouTube) into a unified, automated distribution engine that drives traffic to your core software solutions.",
  },
  {
    title: "Analytics & Infrastructure Optimization",
    description:
      "Building data foundations from the ground up, advanced conversion rate optimization (CRO), business intelligence tracking, and predictive attribution modeling.",
  },
] as const;

const CASE_STUDIES = [
  {
    category: "Full-Stack Dev & Paid Media",
    title: "The Growth Engine Strategy",
    metric: "+142% Conversion Rate",
    placeholder: "Case Study 01",
  },
  {
    category: "Ecosystem Architecture & CRO",
    title: "Unified Digital Pipeline",
    metric: "$3.4M Pipeline Engineered",
    placeholder: "Case Study 02",
  },
] as const;

const SCOPE_OPTIONS = [
  "Build Digital Ecosystem From Scratch",
  "Marketing Strategy Consulting",
  "Full-Stack Custom Software",
] as const;

/* ─── Navigation ───────────────────────────────────────────────────────── */

function GlobalNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-neutral-200/50 bg-white/70 px-6 py-4 backdrop-blur-md md:px-12">
      <a
        href="#"
        className="text-xl font-black tracking-tighter text-black transition-colors duration-300 ease-out hover:text-neutral-600"
        onClick={closeMobile}
      >
        DNA
      </a>

      <nav
        className="hidden items-center gap-10 md:flex"
        aria-label="Primary"
      >
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

/* ─── Hero ───────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-12 pt-24 md:px-12">
      <h1 className="text-4xl font-bold leading-none tracking-tighter text-black md:text-7xl lg:text-8xl">
        We build digital infrastructure that scales.
      </h1>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl">
        DNA is an elite full-stack digital marketing, technology, and brand
        acceleration agency. We engineer connected ecosystems—aligning your
        website, social networks, and data pipelines to help your brand leave
        its mark and convert attention into compounding revenue.
      </p>
      <a
        href="#work"
        className="mt-16 inline-block cursor-pointer font-mono text-sm tracking-wider text-black transition-transform duration-300 ease-out hover:translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        [ View Selected Work ↓ ]
      </a>
    </section>
  );
}

/* ─── Manifesto ────────────────────────────────────────────────────────── */

function ManifestoSection() {
  return (
    <section className="border-y border-neutral-200/60 bg-[#F5F5F7] px-6 py-24 md:px-12 md:py-36">
      <p className="mx-auto max-w-5xl text-2xl font-medium leading-snug tracking-tight text-neutral-900 md:text-4xl">
        We reject the fragmented approach of legacy marketing agencies. True
        modern dominance requires a singular architectural foundation. DNA acts
        as both strategic pilots and master engineers—consulting on
        market-moving strategies and building the entire technical network from
        scratch. No templates. No shortcuts. We build the infrastructure that
        allows your enterprise to scale seamlessly and leave a permanent,
        undeniable mark.
      </p>
    </section>
  );
}

/* ─── Capabilities ───────────────────────────────────────────────────────── */

function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-12"
    >
      <p className="mb-10 font-mono text-xs uppercase tracking-wider text-neutral-500">
        01 / CORE CAPABILITIES
      </p>
      <div className="grid grid-cols-1 border border-neutral-200 md:grid-cols-2">
        {CAPABILITIES.map((item, index) => (
          <article
            key={item.title}
            className={`group border-neutral-200 p-8 transition-all duration-300 ease-out md:p-12 ${
              index % 2 === 0 ? "md:border-r" : ""
            } ${index < 2 ? "border-b md:border-b" : ""} ${
              index % 2 === 0 && index < CAPABILITIES.length - 1
                ? "md:border-b"
                : ""
            } hover:bg-[#F5F5F7]/60`}
          >
            <h3 className="text-lg font-bold tracking-tight text-black md:text-xl">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed tracking-normal text-neutral-600 md:text-base">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── Work ───────────────────────────────────────────────────────────────── */

function WorkSection() {
  return (
    <section
      id="work"
      className="mx-auto max-w-7xl scroll-mt-24 border-t border-neutral-200 px-6 py-24 md:px-12"
    >
      <p className="mb-10 font-mono text-xs uppercase tracking-wider text-neutral-500">
        02 / SELECTED EXPERIENCES
      </p>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
        {CASE_STUDIES.map((study) => (
          <article key={study.title} className="space-y-5">
            <div className="flex aspect-video items-center justify-center border border-neutral-200 bg-[#F5F5F7]">
              <span className="font-mono text-xs uppercase text-neutral-400">
                {study.placeholder}
              </span>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              {study.category}
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
              {study.title}
            </h3>
            <p className="text-3xl font-bold tracking-tighter text-black md:text-4xl">
              {study.metric}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────────────── */

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl scroll-mt-24 border-t border-neutral-200 px-6 py-24 text-center md:text-left"
    >
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
        Leave your mark.
      </h2>
      <p className="mb-12 max-w-xl text-neutral-600 leading-relaxed tracking-normal md:mx-0 mx-auto">
        Share your technological, structural, or marketing challenges. We
        architect bespoke digital ecosystems—from strategy through production.
      </p>

      {submitted ? (
        <p className="font-mono text-sm tracking-wider text-neutral-600">
          Brief received. Our team will respond within one business day.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-500"
            >
              Name / Company Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="organization"
              className="w-full border-b border-neutral-300 bg-transparent py-3 text-black transition-colors duration-300 ease-out focus:border-black focus:outline-none"
              placeholder="Acme Corp — Jane Doe"
            />
          </div>

          <div>
            <label
              htmlFor="scope"
              className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-500"
            >
              Project Scope / Main Objective
            </label>
            <select
              id="scope"
              name="scope"
              required
              defaultValue=""
              className="w-full cursor-pointer border-b border-neutral-300 bg-transparent py-3 text-black transition-colors duration-300 ease-out focus:border-black focus:outline-none"
            >
              <option value="" disabled>
                Select objective
              </option>
              {SCOPE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="timeline"
              className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-500"
            >
              Estimated Timeline / Goals
            </label>
            <input
              id="timeline"
              name="timeline"
              type="text"
              required
              className="w-full border-b border-neutral-300 bg-transparent py-3 text-black transition-colors duration-300 ease-out focus:border-black focus:outline-none"
              placeholder="Q3 2026 launch — 3× revenue target"
            />
          </div>

          <button
            type="submit"
            className="mt-12 w-full bg-black py-4 font-mono text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 ease-out hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            [ Submit DNA Brief → ]
          </button>
        </form>
      )}
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */

function InstitutionalFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 border-t border-neutral-200 px-6 py-12 text-xs font-mono text-neutral-400 md:flex-row md:space-y-0 md:px-12">
      <p>© 2026 DNA. All rights reserved.</p>
      <p className="flex items-center gap-1.5 text-neutral-600">
        <span className="text-emerald-500" aria-hidden>
          ●
        </span>
        <span>Booking enterprise projects for Q3/Q4 2026</span>
      </p>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <GlobalNavigation />
      <main>
        <HeroSection />
        <ManifestoSection />
        <CapabilitiesSection />
        <WorkSection />
        <ContactSection />
      </main>
      <InstitutionalFooter />
    </div>
  );
}
