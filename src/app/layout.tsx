import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { ConnectionStatus } from "@/components/common/ConnectionStatus";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ramos-georgina-portfolio.vercel.app"),
  title: "Georgina Ramos | Frontend Developer Portfolio",
  description:
    "Portfolio of Georgina Ramos, a front-end developer and CS senior building accessible, modern web interfaces with TypeScript, React, and Next.js.",
  keywords: ["frontend developer", "portfolio", "Next.js", "React", "TypeScript", "Tailwind CSS", "Georgina Ramos"],
  authors: [{ name: "Georgina Ramos" }],
  openGraph: {
    title: "Georgina Ramos | Frontend Developer Portfolio",
    description:
      "Frontend developer building responsive, user-centered digital experiences with React, TypeScript, and modern design.",
    url: "https://ramos-georgina-portfolio.vercel.app",
    siteName: "Georgina Ramos Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgina Ramos | Frontend Developer Portfolio",
    description:
      "Frontend developer building responsive, user-centered digital experiences.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[var(--accent)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[var(--accent-contrast)] focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <ConnectionStatus />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
