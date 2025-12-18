import { sanityFetch } from "@/sanity/lib/live";
import { vendorCategoriesQuery } from "@/sanity/lib/queries";
import VendorHubView, { VendorCategory } from "@/views/vendors/vendor-hub-view";
import { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";

export const metadata: Metadata = {
  title: "Supported Vendors | Vendibly",
  description:
    "See all the SaaS vendors, tools, and subscriptions that Vendibly automatically detects, tracks, and organizes for you.",
};

export default async function VendorsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["vendor-categories"],
    queryFn: async () => {
      const { data: categories } = await sanityFetch({
        query: vendorCategoriesQuery,
      });
      return (categories || []) as VendorCategory[];
    },
  });

  const categories = queryClient.getQueryData([
    "vendor-categories",
  ]) as VendorCategory[];

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <VendorHubView categories={categories || []} />
    </HydrationBoundary>
  );
}

export const revalidate = 60;
