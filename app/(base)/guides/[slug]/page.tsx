import { notFound } from "next/navigation";
import GuideView from "@/views/guides/guide-view";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { guideBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Guide } from "@/types";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await client.fetch<Guide>(guideBySlugQuery, { slug });

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  const ogImage = guide.coverImage
    ? urlFor(guide.coverImage).width(1200).height(630).url()
    : undefined;

  return {
    title: guide.seoTitle || guide.title,
    description: guide.seoDescription || guide.lead?.slice(0, 160),
    alternates: {
      canonical: `/guides/${slug}`,
    },
    openGraph: {
      title: guide.seoTitle || guide.title,
      description: guide.seoDescription || guide.lead?.slice(0, 160),
      type: "article",
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["guide", slug],
    queryFn: async () => {
      return await client.fetch<Guide>(guideBySlugQuery, { slug });
    },
  });

  const guide = queryClient.getQueryData<Guide>(["guide", slug]);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.seoTitle || guide.title,
    description: guide.seoDescription || guide.lead?.slice(0, 160),
    image: guide.coverImage
      ? urlFor(guide.coverImage).width(1200).height(630).url()
      : undefined,
    author: {
      "@type": "Organization",
      name: "Vendibly",
      url: "https://vendibly.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "Vendibly",
      logo: {
        "@type": "ImageObject",
        url: "https://vendibly.ai/logo.png", // Ensure this path is correct or dynamic
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vendibly.ai/guides/${slug}`,
    },
    datePublished: guide._createdAt || new Date().toISOString(),
    dateModified: guide._updatedAt || new Date().toISOString(),
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideView guide={guide} slug={slug} />
    </HydrationBoundary>
  );
}
