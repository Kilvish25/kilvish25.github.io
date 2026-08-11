import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kilvish25.github.io"),
  title: "Dharmendra Ahirwar — Platform & Infrastructure Engineer",
  description:
    "I build and run the trading infrastructure of a digital-assets quant fund: real-time market data across 3 exchanges, exchange API gateways, Airflow HA, PostgreSQL, CI/CD and observability across an 11-host fleet.",
  openGraph: {
    title: "Dharmendra Ahirwar — Platform & Infrastructure Engineer",
    description:
      "Systems that trade real money, built and run by one engineer. Market data, gateways, orchestration, databases, observability.",
    url: "https://kilvish25.github.io",
    siteName: "Dharmendra Ahirwar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
