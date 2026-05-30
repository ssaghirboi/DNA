"use client";

import { useState } from "react";

const SCOPE_OPTIONS = [
  "Build Digital Ecosystem From Scratch",
  "Marketing Strategy Consulting",
  "Full-Stack Custom Software",
] as const;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);


  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-neutral-200 px-6 py-24 text-center md:text-left"
    >
      <img
        src="/mountains.JPG"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      <div className="relative mx-auto max-w-3xl bg-black/70 px-8 py-12 md:px-12">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
        Leave your mark.
      </h2>
      <p className="mb-12 mx-auto max-w-xl leading-relaxed tracking-normal text-neutral-300 md:mx-0">
        Share your technological, structural, or marketing challenges. We
        architect bespoke digital ecosystems, from strategy through production.
      </p>

      {submitted ? (
        <p className="font-mono text-sm tracking-wider text-neutral-300">
          Brief received. Our team will respond within one business day.
        </p>
      ) : (
        <form action={() => setSubmitted(true)} className="space-y-10">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
            >
              Name / Company Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="organization"
              className="w-full border-b border-neutral-600 bg-transparent py-3 text-white placeholder-neutral-500 transition-colors duration-300 ease-out focus:border-white focus:outline-none"
              placeholder="Acme Corp — Jane Doe"
            />
          </div>

          <div>
            <label
              htmlFor="scope"
              className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
            >
              Project Scope / Main Objective
            </label>
            <select
              id="scope"
              name="scope"
              required
              defaultValue=""
              className="w-full cursor-pointer border-b border-neutral-600 bg-transparent py-3 text-white transition-colors duration-300 ease-out focus:border-white focus:outline-none"
            >
              <option value="" disabled className="bg-neutral-900">
                Select objective
              </option>
              {SCOPE_OPTIONS.map((option) => (
                <option key={option} value={option} className="bg-neutral-900">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="timeline"
              className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
            >
              Estimated Timeline / Goals
            </label>
            <input
              id="timeline"
              name="timeline"
              type="text"
              required
              className="w-full border-b border-neutral-600 bg-transparent py-3 text-white placeholder-neutral-500 transition-colors duration-300 ease-out focus:border-white focus:outline-none"
              placeholder="Q3 2026 launch — 3× revenue target"
            />
          </div>

          <button
            type="submit"
            className="mt-12 w-full bg-white py-4 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 ease-out hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            [ Submit DNA Brief → ]
          </button>
        </form>
      )}
      </div>
    </section>
  );
}
