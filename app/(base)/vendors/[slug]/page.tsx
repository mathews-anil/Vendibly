import { sanityFetch } from "@/sanity/lib/live";
import { vendorBySlugQuery } from "@/sanity/lib/queries";
import VendorDetailView from "@/views/vendors/vendor-detail-view";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data: vendor } = await sanityFetch({
    query: vendorBySlugQuery,
    params: { slug },
  });

  if (!vendor) {
    return {
      title: "Vendor Not Found | Vendibly",
    };
  }

  return {
    title: vendor.seoTitle || `Track ${vendor.title} Subscriptions | Vendibly`,
    description:
      vendor.seoDescription ||
      `Learn how Vendibly automates invoice tracking and renewal management for ${vendor.title}.`,
    alternates: {
      canonical: `https://www.vendibly.ai/vendors/${vendor.slug}`,
    },
    openGraph: {
      title: vendor.seoTitle || `Track ${vendor.title} with Vendibly`,
      description:
        vendor.seoDescription ||
        `Automated invoice and renewal tracking for ${vendor.title}.`,
      type: "article",
    },
  };
}

export const revalidate = 60;

export default async function VendorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: vendor } = await sanityFetch({
    query: vendorBySlugQuery,
    params: { slug },
  });

  if (!vendor) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: vendor.title,
    applicationCategory: vendor.category,
    description: vendor.shortDescription,
    operatingSystem: "Cloud/SaaS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VendorDetailView vendor={vendor} />
    </>
  );
}
