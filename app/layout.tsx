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
  title: "Vendibly | Subscription Tracker with Smart Renewal Alerts and Inbox Scanning",
  description:
    "Vendibly scans Gmail or Outlook to find your subscriptions, renewals, contracts, and invoices automatically. See everything in one dashboard with smart alerts before charges hit.",
  alternates: {
    canonical: "https://www.vendibly.ai/",
  },
  openGraph: {
    title: "Vendibly | Subscription Tracker with Smart Renewal Alerts",
    description:
      "Vendibly scans Gmail or Outlook to find your subscriptions, renewals, contracts, and invoices automatically. Stay ahead of every charge.",
    url: "https://www.vendibly.ai/",
    type: "website",
    images: [
      {
        url: "https://www.vendibly.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vendibly Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendibly | Subscription Tracker with Smart Renewal Alerts",
    description:
      "Vendibly finds and organizes your subscriptions, invoices, and renewals automatically.",
    images: ["https://www.vendibly.ai/og-image.jpg"],
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
