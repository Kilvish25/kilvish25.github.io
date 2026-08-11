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
    "Software engineer who designs, builds, and operates reliable, high-performance systems end to end — architecture, implementation, testing, deployment, observability, and incident response.",
  openGraph: {
    title: "Dharmendra Ahirwar — Platform & Infrastructure Engineer",
    description:
      "Reliable systems, engineered end to end — architecture through production operations.",
    url: "https://kilvish25.github.io",
    siteName: "Dharmendra Ahirwar",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharmendra Ahirwar — Platform & Infrastructure Engineer",
    description:
      "Reliable systems, engineered end to end — architecture through production operations.",
    images: ["/og.png"],
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
