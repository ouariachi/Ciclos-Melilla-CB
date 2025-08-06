import type { Metadata } from "next";
import "./globals.css";
import CookiesBanner from "@/components/CookiesBanner";
import Footer from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: {
    default: "Ciclos Melilla CB",
    template: "%s - Ciclos Melilla CB",
  },
  description: "Bicicletas diseñadas para ganar y construidas para durar. Distribuidor oficial de Specialized en Melilla.",
  keywords: [
    "bicicletas",
    "melilla",
    "bicicletas melilla",
    "bicicletas specialized",
    "tienda de bicicletas",
    "ciclos melilla"
  ],
  icons: {
    icon: "https://res.cloudinary.com/doaywtxph/image/upload/v1753745297/CIclosMelillaCB/logo.webp",
  },
  openGraph: {
    title: "Ciclos Melilla CB",
    type: "website",
    url: "https://ciclosmelilla.com",
    images: [
      {
        url: "https://res.cloudinary.com/doaywtxph/image/upload/v1753745297/CIclosMelillaCB/logo.png",
        alt: "Ciclos Melilla CB Logo",
      },
    ],
    description: "Bicicletas diseñadas para ganar y construidas para durar. Distribuidor oficial de Specialized en Melilla.",
    siteName: "Ciclos Melilla CB",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://ciclosmelilla.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="relative h-min bg-background text-foreground font-clash-display w-screen overflow-x-hidden min-h-[100dvh]">
        <CookiesBanner />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
