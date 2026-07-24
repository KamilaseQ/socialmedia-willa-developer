import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social media, które wspierają sprzedaż | Willa Developer",
  description:
    "Sprzedażowa oferta prowadzenia Facebooka, Instagrama, LinkedIna i X od zera dla Willa Developer.",
  openGraph: {
    title: "Social media, które wspierają sprzedaż Willa Developer",
    description:
      "Od pustych kanałów do regularnej komunikacji i zapytań o gotowe inwestycje.",
    type: "website",
    locale: "pl_PL",
    siteName: "Oferta social media dla Willa Developer",
  },
  robots: {
    index: false,
    follow: false,
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
