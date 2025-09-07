import "./globals.css";

export const metadata = {
  title: "Purshottam Jain | Web Developer | Next.js & Modern Websites",
  description:
    "I help startups and small businesses build fast, SEO-friendly websites using Next.js, React, and Tailwind CSS. Explore my projects and hire me today.",
  keywords: [
    "Next.js developer",
    "Freelance web developer India",
    "React developer portfolio",
    "Landing page developer",
    "Affordable website design",
  ],
  openGraph: {
    title: "Purshottam Jain | Web Developer Portfolio",
    description:
      "Building fast, modern websites with Next.js, React & Tailwind. Available for freelance & startup projects.",
    url: "https://www.purshottamjain.me",
    siteName: "Purshottam Jain Portfolio",
    images: [
      {
        url: "/preview.png", // create a nice preview image for LinkedIn/WhatsApp shares
        width: 1200,
        height: 630,
        alt: "Purshottam Jain Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/pic.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/pic.jpg" type="image/x-icon" />
        {/* JSON-LD Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Purshottam Jain",
              jobTitle: "Web Developer",
              url: "https://www.purshottamjain.me",
              sameAs: [
                "https://linkedin.com/in/yourprofile",
                "https://github.com/yourgithub",
                "https://twitter.com/yourtwitter",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
