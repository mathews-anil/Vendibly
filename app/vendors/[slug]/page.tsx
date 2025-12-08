import { generateJsonLd } from "@/lib/seo";
import { client } from "@/sanity/lib/client";
import { vendorBySlugQuery } from "@/sanity/lib/queries";
import VendorDetailView from "@/views/vendors/vendor-detail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vendor = await client.fetch(vendorBySlugQuery, { slug });

  if (!vendor) {
    return {
      title: "Vendor Not Found",
    };
  }

  return {
    title: vendor.seoTitle || `${vendor.vendorName || vendor.title} Integration | Vendibly`,
    description: vendor.seoDescription || `Learn how to manage ${vendor.vendorName || vendor.title} contracts and renewals with Vendibly.`,
    alternates: {
      canonical: `https://www.vendibly.ai/vendors/${slug}`,
    },
  };
}

export const revalidate = 60;

export default async function VendorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const vendor = await client.fetch(vendorBySlugQuery, { slug });

  if (!vendor) {
    notFound();
  }

  const jsonLd = generateJsonLd({
    title:
      vendor.seoTitle ||
      `${vendor.vendorName || vendor.title} Integration | Vendibly`,
    description:
      vendor.seoDescription ||
      `Learn how to manage ${vendor.vendorName || vendor.title} contracts and renewals with Vendibly.`,
    slug,
    publishedAt: vendor._createdAt,
    modifiedAt: vendor._updatedAt,
    faqs: vendor.faqItems,
    urlPrefix: "vendors",
  });

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
