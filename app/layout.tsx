import Providers from "@/providers";
import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter, Outfit } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vendibly: Track Vendor Contracts & Renewals Automatically",
  description:
    "Never miss a contract renewal again. Vendibly helps small businesses track vendors, manage subscriptions, and automate reminders — all in one clean dashboard.",
  alternates: {
    canonical: "https://vendibly.ai",
  },
  openGraph: {
    title: "Vendibly — AI-powered Vendor Contract Tracker",
    description:
      "Tired of missed renewals and scattered contracts? Vendibly auto-tracks all your vendors and subscriptions in one smart dashboard.",
    url: "https://vendibly.ai",
    type: "website",
    images: [
      {
        url: "https://vendibly.ai/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vendibly Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendibly — Smart Vendor & Contract Tracker",
    description:
      "Manage all your vendor contracts and renewals with AI. Vendibly makes it effortless to stay on top of everything.",
    images: ["https://vendibly.ai/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${outfit.variable} ${inter.variable}   ${beVietnamPro.variable} antialiased`}
      >
        <main className="relative">
          <Providers>{children}</Providers>
          <div className="w-full h-full absolute top-0 left-0 isolate -z-[100] mix-blend-overlay">
            <Image src="/imgs/page-bg.png" alt="page-bg" fill className="img" />
          </div>
          {/* <Image
                        src="page.svg"
                        alt="page-bg"
                        fill
                        className="w-full h-full absolute top-0 left-0 -z-[100] isolate object-cover mix-blend-overlay"
                        priority
                    /> */}
        </main>
      </body>
    </html>
  );
}
