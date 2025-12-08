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
  };
}

export const revalidate = 60;

export default async function VendorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const vendor = await client.fetch(vendorBySlugQuery, { slug });

  if (!vendor) {
    notFound();
  }

  return <VendorDetailView vendor={vendor} />;
}
