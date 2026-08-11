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
    "Backend and platform engineer building real-time data pipelines, distributed services, and reliable infrastructure — from market-data platforms and API gateways to orchestration, databases, and observability.",
  openGraph: {
    title: "Dharmendra Ahirwar — Platform & Infrastructure Engineer",
    description:
      "Backend and platform engineer building real-time data pipelines, distributed services, and reliable infrastructure.",
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
