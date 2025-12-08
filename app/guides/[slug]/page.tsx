import { client } from "@/sanity/lib/client";
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
      images: guide.ogImage ? [guide.ogImage] : [],
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

  return <GuideDetailView guide={guide} />;
}
