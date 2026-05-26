import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: replace with production domain when deployed
const BASE_URL = "https://www.yourdomain.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "DNA: Calgary Digital Marketing & Technology Agency",
    template: "%s | DNA",
  },
  description:
    "Calgary's full-stack digital marketing and technology agency. We build connected ecosystems, aligning your website, social networks, and data pipelines to convert attention into compounding revenue.",
  openGraph: {
    siteName: "DNA",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DNA",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`, // TODO: add logo file
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
    streetAddress: "TODO_STREET_ADDRESS",
    postalCode: "TODO_POSTAL_CODE",
  },
  telephone: "TODO_PHONE",
  email: "TODO_EMAIL",
  sameAs: [
    // TODO: add social profile URLs
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DNA",
  url: BASE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
