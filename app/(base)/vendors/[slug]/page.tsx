import { clientWithoutCdn } from "@/sanity/lib/client";
import { vendorBySlugQuery } from "@/sanity/lib/queries";
import VendorDetailView, {
  VendorDetailData,
} from "@/views/vendors/vendor-detail-view";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vendor = await clientWithoutCdn.fetch(vendorBySlugQuery, { slug });

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
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["vendor", slug],
    queryFn: async () => {
      const vendor = await clientWithoutCdn.fetch(vendorBySlugQuery, { slug });
      return vendor;
    },
  });

  const vendor = queryClient.getQueryData(["vendor", slug]);

  if (!vendor) {
    notFound();
  }

  const typedVendor = vendor as VendorDetailData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: typedVendor.title,
    applicationCategory: typedVendor.category,
    description: typedVendor.shortDescription,
    operatingSystem: "Cloud/SaaS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VendorDetailView vendor={typedVendor} slug={slug} />
    </HydrationBoundary>
  );
}
