import type { Metadata } from "next";
import Image from "next/image";
import { GlobalNavigation } from "./_components/global-navigation";
import { ContactSection } from "./_components/contact-section";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "DNA: Calgary Digital Marketing & Technology Agency",
  description:
    "Calgary's full-stack digital marketing and technology agency. We build connected ecosystems, aligning your website, social networks, and data pipelines to convert attention into compounding revenue.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DNA: Calgary Digital Marketing & Technology Agency",
    description:
      "Calgary's full-stack digital marketing and technology agency. We build connected ecosystems that convert attention into compounding revenue.",
    url: "/",
    siteName: "DNA",
    images: [
      {
        url: "/966.jpg",
        width: 1200,
        height: 630,
        alt: "DNA: Calgary Digital Marketing & Technology Agency",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DNA: Calgary Digital Marketing & Technology Agency",
    description:
      "Calgary's full-stack digital marketing and technology agency. We build connected ecosystems that convert attention into compounding revenue.",
    images: ["/966.jpg"],
  },
};

/* ─── Data ──────────────────────────────────────────────────────────────── */

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

/* ─── JSON-LD ───────────────────────────────────────────────────────────── */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "DNA Services",
  itemListElement: CAPABILITIES.map((cap, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: cap.title,
      description: cap.description,
      provider: {
        "@type": "Organization",
        name: "DNA",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Calgary",
          addressRegion: "AB",
          addressCountry: "CA",
        },
      },
    },
  })),
};

/* ─── Hero ──────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <Image
        src="/966.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pb-12 pt-24 md:px-12">
        <h1 className="text-4xl font-bold leading-none tracking-tighter text-white md:text-7xl lg:text-8xl">
          Calgary&apos;s Digital Marketing &amp; Technology Agency
        </h1>
        <a
          href="#work"
          className="mt-16 inline-block cursor-pointer font-mono text-sm tracking-wider text-white/70 transition-transform duration-300 ease-out hover:translate-y-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          [ View Selected Work ↓ ]
        </a>
      </div>
    </section>
  );
}

/* ─── Manifesto ─────────────────────────────────────────────────────────── */

function ManifestoSection() {
  return (
    <section className="border-y border-neutral-200/60 bg-[#F5F5F7] px-6 py-24 md:px-12 md:py-36">
      <p className="mx-auto max-w-5xl text-2xl font-medium leading-snug tracking-tight text-neutral-900 md:text-4xl">
        We reject the fragmented approach of legacy marketing agencies. True
        modern dominance requires a singular architectural foundation. DNA acts
        as both strategic pilots and master engineers, consulting on
        market-moving strategies and building the entire technical network from
        scratch. No templates. No shortcuts. We build the infrastructure that
        allows your enterprise to scale seamlessly and leave a permanent,
        undeniable mark.
      </p>
    </section>
  );
}

/* ─── Capabilities ──────────────────────────────────────────────────────── */

function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-24 overflow-hidden px-6 py-24 md:px-12"
    >
      <Image
        src="/yyc.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="relative mx-auto max-w-7xl">
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
              } hover:bg-white/60`}
            >
              <h2 className="text-lg font-bold tracking-tight text-black md:text-xl">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed tracking-normal text-neutral-600 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Work ──────────────────────────────────────────────────────────────── */

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
            <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
              {study.title}
            </h2>
            <p className="text-3xl font-bold tracking-tighter text-black md:text-4xl">
              {study.metric}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────── */

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

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
