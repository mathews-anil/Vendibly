import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

interface SitemapItem {
  slug: string;
  _updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.vendibly.ai";

  const query = defineQuery(`{
    "guides": *[_type == "guide"]{ "slug": slug.current, _updatedAt },
    "useCases": *[_type == "useCase"]{ "slug": slug.current, _updatedAt },
    "vendors": *[_type == "vendorProfile"]{ "slug": slug.current, _updatedAt }
  }`);

  const data = await client.fetch<{
    guides: SitemapItem[];
    useCases: SitemapItem[];
    vendors: SitemapItem[];
  }>(query);

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/vendors`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // dynamic routes: guides
  const guideRoutes: MetadataRoute.Sitemap = data.guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide._updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // dynamic routes: use cases
  const useCaseRoutes: MetadataRoute.Sitemap = data.useCases.map((useCase) => ({
    url: `${baseUrl}/use-cases/${useCase.slug}`,
    lastModified: new Date(useCase._updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // dynamic routes: vendors
  const vendorRoutes: MetadataRoute.Sitemap = data.vendors.map((vendor) => ({
    url: `${baseUrl}/vendors/${vendor.slug}`,
    lastModified: new Date(vendor._updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...guideRoutes, ...useCaseRoutes, ...vendorRoutes];
}
