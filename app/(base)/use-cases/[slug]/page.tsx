import { generateJsonLd } from "@/lib/seo";
import { client } from "@/sanity/lib/client";
import { useCaseBySlugQuery } from "@/sanity/lib/queries";
import UseCaseView from "@/views/use-cases/use-case-view";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ debug?: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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
  };
}

export const revalidate = 60;

export default async function UseCaseDetailPage({
  params,
  searchParams,
}: PageProps) {
  const [{ slug }, resolvedSearchParams] = await Promise.all([
    params,
    searchParams,
  ]);
  const useCase = await client.fetch(useCaseBySlugQuery, { slug });

  if (!useCase) {
    notFound();
  }

  const jsonLd = generateJsonLd({
    title: useCase.seoTitle || useCase.title,
    description: useCase.seoDescription || useCase.heroSubheading,
    slug,
    imageUrl: useCase.heroImage?.asset?.url,
    publishedAt: useCase._createdAt,
    modifiedAt: useCase._updatedAt,
    urlPrefix: "use-cases",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UseCaseView useCase={useCase} />
    </>
  );
}
