import { sanityFetch } from "@/sanity/lib/live";
import { vendorCategoriesQuery } from "@/sanity/lib/queries";
import VendorHubView from "@/views/vendors/vendor-hub-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supported Vendors | Vendibly",
  description:
    "See all the SaaS vendors, tools, and subscriptions that Vendibly automatically detects, tracks, and organizes for you.",
};

export default async function VendorsPage() {
  const { data: categories } = await sanityFetch({
    query: vendorCategoriesQuery,
  });

  return <VendorHubView categories={categories || []} />;
}
