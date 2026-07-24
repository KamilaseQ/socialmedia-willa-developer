import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Oferta social media dla Willa Developer",
  title:
    "Social media, które pomagają sprzedawać gotowe inwestycje | Willa Developer",
  description:
    "Kompleksowa obsługa Facebooka, Instagrama, TikToka, YouTube, LinkedIna i X nastawiona na szybszą sprzedaż gotowych inwestycji Willa Developer.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Social media, które pomagają sprzedawać gotowe inwestycje",
    description:
      "Od pustych kanałów do regularnej komunikacji, która buduje zainteresowanie i wspiera sprzedaż inwestycji Willa Developer.",
    type: "website",
    locale: "pl_PL",
    siteName: "Oferta social media dla Willa Developer",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Oferta social media dla Willa Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social media, które pomagają sprzedawać gotowe inwestycje",
    description:
      "Kompleksowa obsługa social mediów dla Willa Developer, nastawiona na efekt sprzedażowy.",
    images: ["/og.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
  other: {
    "apple-mobile-web-app-title": "Willa Developer",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151414",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
