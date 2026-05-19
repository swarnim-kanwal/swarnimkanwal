import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  title: "Swarnim Kanwal — Frontend Developer",
  description:
    "Frontend developer building clean, responsive web products — with code, design sense, and AI as a daily tool. Currently shipping features on a US healthcare platform.",
  keywords: [
    "frontend developer",
    "web developer",
    "React",
    "Next.js",
    "UI/UX",
    "Figma",
    "Swarnim Kanwal",
  ],
  authors: [{ name: "Swarnim Kanwal", url: "https://swarnimkanwal.dev" }],
  openGraph: {
    title: "Swarnim Kanwal — Frontend Developer",
    description:
      "Frontend developer building clean, responsive web products — with code, design sense, and AI as a daily tool.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarnim Kanwal — Frontend Developer",
    description:
      "Frontend developer building clean, responsive web products — with code, design sense, and AI as a daily tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#0A0A0B] text-[#EDEDED] dark:bg-[#0A0A0B] dark:text-[#EDEDED] min-h-screen transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
