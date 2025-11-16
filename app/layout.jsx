import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://purshottam.is-a.dev"),
  title: {
    default:
      "Purshottam Jain | Full Stack Developer (Next.js, React, Firebase)",
    template: "%s | Purshottam Jain",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, Tailwind & Firebase. I build fast, SEO-optimized, high-performance websites and web applications. Available for freelance and remote roles.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer India",
    "Freelance Web Developer India",
    "Tailwind CSS Developer",
    "Firebase Developer",
    "Next.js Portfolio",
    "Web Developer for Startup",
    "Hire Web Developer India",
  ],
  alternates: {
    canonical: "https://purshottam.is-a.dev",
  },
  openGraph: {
    title: "Purshottam Jain | Full Stack Developer Portfolio",
    description:
      "Portfolio of Purshottam Jain — building fast, scalable, SEO-friendly websites with Next.js, React, Tailwind & Firebase.",
    url: "https://purshottam.is-a.dev",
    siteName: "Purshottam Jain Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/pic.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview – Purshottam Jain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purshottam Jain | Full Stack Developer",
    description:
      "Building SEO-ready, high-performance applications with Next.js, React & Firebase.",
    images: ["/pic.jpg"],
  },
  icons: {
    icon: "/pic.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/pic.jpg" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />

        {/* Google Site Verifications */}
        <meta
          name="google-site-verification"
          content="jsYGiwxtNM1TKV8dNlL0SwPb7rtKww-zlgfHnJQZg-I"
        />
        <meta
          name="google-site-verification"
          content="6FEMxVX2rXlnhalfTm1dPKfNTjuGAb0iSCOwmF0qfRQ"
        />

        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Purshottam Jain",
              jobTitle: "Full Stack Developer",
              url: "https://purshottam.is-a.dev",
              image: "https://purshottam.is-a.dev/pic.jpg",
              description:
                "Full Stack Developer specializing in Next.js, React, Firebase & Tailwind CSS.",
              sameAs: [
                "https://www.linkedin.com/in/purshottam-jain24",
                "https://github.com/purshottam-jain24",
              ],
            }),
          }}
        />
      </head>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
