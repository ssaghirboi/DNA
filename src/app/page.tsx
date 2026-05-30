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
    subtitle: "",
    metric: "+142% Conversion Rate",
    placeholder: "Case Study 01",
    image: "",
    href: "",
  },
  {
    category: "Web Design & Development",
    title: "AHL",
    subtitle: "A local hockey league right here in Calgary.",
    metric: "Full Digital Presence Built",
    placeholder: "Case Study 02",
    image: "/ahl-logo-v2.png",
    href: "https://ahl-ten.vercel.app/",
  },
];

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
    <>
      <h1 className="sr-only">
        Calgary&apos;s Digital Marketing &amp; Technology Agency
      </h1>

      {/* Logo — tight to top, negative margins clip PNG internal whitespace */}
      <div className="px-6 md:px-10">
        <div className="mx-auto max-w-3xl overflow-hidden">
          <img
            src="/DNA-LOGO-LAST.svg"
            alt="DNA"
            className="w-full"
            style={{ marginTop: "-5%", marginBottom: "-5%" }}
          />
        </div>
        <div className="flex justify-between pb-3 pt-1">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            Leave your mark.
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            Calgary, AB
          </p>
        </div>
      </div>

      {/* 966 — full width, directly below, no gap */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <Image
          src="/966.jpg"
          alt="Mountain lake landscape at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </>
  );
}

/* ─── Manifesto ─────────────────────────────────────────────────────────── */

function ManifestoSection() {
  return (
    <section className="border-y border-neutral-200/60 bg-[#F5F5F7] px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <h2 className="whitespace-nowrap text-5xl font-black tracking-tighter text-purple-600 md:text-6xl lg:text-7xl">
            WHAT WE DO.
          </h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-neutral-600">
            We act as both strategic pilots and master engineers, consulting on
            market-moving strategies and building the entire technical network
            from scratch. No templates. No shortcuts.
          </p>
        </div>
        <div className="flex flex-col justify-center divide-y divide-neutral-300">
          {CAPABILITIES.map((cap) => (
            <p
              key={cap.title}
              className="py-5 font-mono text-sm uppercase tracking-widest text-neutral-800 md:text-base"
            >
              {cap.title}
            </p>
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
      className="relative scroll-mt-24 overflow-hidden border-t border-neutral-200 px-6 py-24 md:px-12"
    >
      <Image
        src="/saddle-dome.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-75"
      />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="mb-10 text-5xl font-black tracking-tighter text-blue-500 md:text-6xl lg:text-7xl">
          WHO WE WORK WITH.
        </h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          {CASE_STUDIES.map((study) => (
            <article key={study.title} className="space-y-5 bg-white/85 p-6">
              {study.href ? (
                <a href={study.href} target="_blank" rel="noopener noreferrer" className="group block space-y-5">
                  <div className="flex aspect-video items-center justify-center overflow-hidden border border-neutral-200 bg-[#F5F5F7] transition-opacity duration-200 group-hover:opacity-80">
                    {study.image ? (
                      <img src={study.image} alt={study.title} className="h-full w-full object-contain p-8" />
                    ) : (
                      <span className="font-mono text-xs uppercase text-neutral-400">{study.placeholder}</span>
                    )}
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">{study.category}</p>
                  <h2 className="text-2xl font-bold tracking-tight text-black underline-offset-4 group-hover:underline md:text-3xl">{study.title}</h2>
                  {study.subtitle && <p className="text-sm leading-relaxed text-neutral-500">{study.subtitle}</p>}
                </a>
              ) : (
                <>
                  <div className="flex aspect-video items-center justify-center overflow-hidden border border-neutral-200 bg-[#F5F5F7]">
                    {study.image ? (
                      <img src={study.image} alt={study.title} className="h-full w-full object-contain p-8" />
                    ) : (
                      <span className="font-mono text-xs uppercase text-neutral-400">{study.placeholder}</span>
                    )}
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">{study.category}</p>
                  <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">{study.title}</h2>
                  {study.subtitle && <p className="text-sm leading-relaxed text-neutral-500">{study.subtitle}</p>}
                </>
              )}
              <p className="text-3xl font-bold tracking-tighter text-black md:text-4xl">
                {study.metric}
              </p>
            </article>
          ))}
        </div>
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
        <WorkSection />
        <ContactSection />
      </main>
      <InstitutionalFooter />
    </div>
  );
}
