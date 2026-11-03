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
  title: "Georgina Ramos | Portfolio",
  description:
    "Portfolio of Georgina Ramos, a front-end focused developer building polished digital products with TypeScript, React, and modern product design.",
  keywords: ["frontend developer", "portfolio", "Next.js", "React", "TypeScript"],
  openGraph: {
    title: "Georgina Ramos | Portfolio",
    description:
      "Front-end focused developer building responsive, user-centered digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full">
        <ConnectionStatus />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
