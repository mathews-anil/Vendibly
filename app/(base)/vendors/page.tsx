import { client } from "@/sanity/lib/client";
import { vendorsQuery } from "@/sanity/lib/queries";
import VendorsView from "@/views/vendors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supported Vendors | Vendibly",
  description: "Browse our supported vendors and learn how to manage them with Vendibly.",
};

export const revalidate = 60;

export default async function VendorsPage() {
  const vendors = await client.fetch(vendorsQuery);
  return <VendorsView vendors={vendors} />;
}
