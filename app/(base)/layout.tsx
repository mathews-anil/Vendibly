import Providers from "@/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Vendibly | Subscription Tracker with Smart Renewal Alerts and Inbox Scanning",
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
  return <Providers>{children}</Providers>;
}
