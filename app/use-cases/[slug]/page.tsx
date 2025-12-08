import { generateJsonLd } from "@/lib/seo";
import { client } from "@/sanity/lib/client";
import { useCaseBySlugQuery } from "@/sanity/lib/queries";
import UseCaseDetailView from "@/views/use-cases/use-case-detail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = await client.fetch(useCaseBySlugQuery, { slug });

  if (!useCase) {
    return {
      title: "Use Case Not Found",
    };
  }

  return {
    title: useCase.seoTitle || useCase.title,
    description: useCase.seoDescription || useCase.heroSubheading,
    alternates: {
      canonical: `https://www.vendibly.ai/use-cases/${slug}`,
    },
  };
}

export const revalidate = 60;

export default async function UseCaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = await client.fetch(useCaseBySlugQuery, { slug });

  if (!useCase) {
    notFound();
  }

  const jsonLd = generateJsonLd({
    title: useCase.seoTitle || useCase.title,
    description: useCase.seoDescription || useCase.heroSubheading,
    slug,
    publishedAt: useCase._createdAt,
    modifiedAt: useCase._updatedAt,
    faqs: useCase.faqs,
    urlPrefix: "use-cases",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UseCaseDetailView useCase={useCase} />
    </>
  );
}
