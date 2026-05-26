import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "DNA is Calgary's full-stack digital marketing and technology agency. We engineer connected ecosystems with no templates and no shortcuts, helping brands scale and leave a permanent mark.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About DNA: Calgary's Digital Marketing & Technology Agency",
    description:
      "DNA is Calgary's full-stack digital marketing and technology agency. We engineer connected ecosystems that help brands scale and leave a permanent mark.",
    url: "/about",
    images: [
      {
        url: "/966.jpg",
        width: 1200,
        height: 630,
        alt: "DNA: Calgary Digital Marketing & Technology Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About DNA: Calgary's Digital Marketing & Technology Agency",
    description:
      "Calgary's full-stack digital marketing and technology agency. No templates. No shortcuts.",
    images: ["/966.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <header className="flex w-full items-center justify-between border-b border-neutral-200/50 px-6 py-4 md:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity duration-300 ease-out hover:opacity-70"
        >
          <img src="/DNA-logo.png" alt="" aria-hidden="true" className="h-10 w-auto" />
          <span className="text-sm font-black tracking-widest text-black">DNA</span>
        </Link>
        <Link
          href="/#contact"
          className="rounded-full bg-black px-5 py-1.5 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-neutral-800"
        >
          Let&apos;s Build
        </Link>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-36">
        <p className="mb-10 font-mono text-xs uppercase tracking-wider text-neutral-500">
          About DNA
        </p>

        <h1 className="text-4xl font-bold leading-none tracking-tighter text-black md:text-6xl lg:text-7xl">
          Calgary&apos;s Full-Stack Digital Marketing &amp; Technology Agency
        </h1>

        <div className="mt-16 max-w-3xl space-y-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
          <p>
            DNA is an elite full-stack digital marketing, technology, and brand
            acceleration agency based in Calgary, AB. We engineer connected
            ecosystems, aligning your website, social networks, and data
            pipelines to help your brand leave its mark and convert attention
            into compounding revenue.
          </p>
          <p>
            We reject the fragmented approach of legacy marketing agencies. True
            modern dominance requires a singular architectural foundation. DNA
            acts as both strategic pilots and master engineers, consulting on
            market-moving strategies and building the entire technical network
            from scratch.
          </p>
          <p>
            No templates. No shortcuts. We build the infrastructure that allows
            your enterprise to scale seamlessly and leave a permanent,
            undeniable mark.
          </p>
        </div>

        <div className="mt-20">
          <Link
            href="/#contact"
            className="inline-block bg-black px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 ease-out hover:bg-neutral-900"
          >
            [ Start a Project → ]
          </Link>
        </div>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 border-t border-neutral-200 px-6 py-12 text-xs font-mono text-neutral-400 md:flex-row md:space-y-0 md:px-12">
        <p>© 2026 DNA. All rights reserved.</p>
        <p className="flex items-center gap-1.5 text-neutral-600">
          <span className="text-emerald-500" aria-hidden>
            ●
          </span>
          <span>Booking enterprise projects for Q3/Q4 2026</span>
        </p>
      </footer>
    </div>
  );
}
