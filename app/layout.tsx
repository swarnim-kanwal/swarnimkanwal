import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundFX } from "@/components/BackgroundFX";
import { CursorGlow } from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Swarnim Kanwal — Developer",
  description:
    "Developer specialising in web UI and healthcare system integration. Currently integrating Waystar into the Aztute platform via Mirth Connect, EDI processing, and API automation.",
  keywords: [
    "developer",
    "frontend developer",
    "healthcare integration",
    "Mirth Connect",
    "EDI",
    "API integration",
    "Swarnim Kanwal",
  ],
  authors: [{ name: "Swarnim Kanwal", url: "https://swarnimkanwal.dev" }],
  openGraph: {
    title: "Swarnim Kanwal — Developer",
    description:
      "Developer specialising in web UI and healthcare system integration — Mirth Connect, EDI, API automation, and clean frontend work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarnim Kanwal — Developer",
    description:
      "Developer specialising in web UI and healthcare system integration — Mirth Connect, EDI, API automation, and clean frontend work.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#06000F] text-[#EDEDED] min-h-screen relative">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <BackgroundFX />
          <CursorGlow />
          {children}
          <div className="grain" aria-hidden="true" />
          <div className="vignette" aria-hidden="true" />
        </ThemeProvider>
      </body>
    </html>
  );
}
