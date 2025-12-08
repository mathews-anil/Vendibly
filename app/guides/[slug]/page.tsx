import { generateJsonLd } from "@/lib/seo";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { guideBySlugQuery } from "@/sanity/lib/queries";
import GuideDetailView from "@/views/guides/guide-detail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await client.fetch(guideBySlugQuery, { slug });

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: guide.seoTitle || guide.title,
    description: guide.seoDescription || guide.excerpt,
    openGraph: {
      images: guide.ogImage ? [urlFor(guide.ogImage).url()] : [],
    },
    alternates: {
      canonical: `https://www.vendibly.ai/guides/${slug}`,
    },
  };
}

export const revalidate = 60;

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = await client.fetch(guideBySlugQuery, { slug });

  if (!guide) {
    notFound();
  }

  const jsonLd = generateJsonLd({
    title: guide.seoTitle || guide.title,
    description: guide.seoDescription || guide.excerpt,
    slug,
    publishedAt: guide._createdAt,
    modifiedAt: guide._updatedAt,
    imageUrl: guide.ogImage ? urlFor(guide.ogImage).url() : undefined,
    urlPrefix: "guides",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideDetailView guide={guide} />
    </>
  );
}
