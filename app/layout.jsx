import "./globals.css";

export const metadata = {
  title: "Purshottam Jain - Portfolio",
  description: "Purshottam Jain - Full stack developer portfolio",
  icons: {
    icon: "/pic.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/pic.jpg" type="image/x-icon" className="rounded-full" />
      </head>
      <body>{children}</body>
    </html>
  );
}
