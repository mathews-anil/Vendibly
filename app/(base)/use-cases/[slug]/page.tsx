import { generateJsonLd } from "@/lib/seo";
import { client } from "@/sanity/lib/client";
import { useCaseBySlugQuery } from "@/sanity/lib/queries";
import UseCaseView from "@/views/use-cases/use-case-view";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import { UseCase } from "@/types";

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
  const [{ slug }] = await Promise.all([params, searchParams]);

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["use-case", slug],
    queryFn: async () => {
      return await client.fetch(useCaseBySlugQuery, { slug });
    },
  });

  const useCase = queryClient.getQueryData(["use-case", slug]);

  if (!useCase) {
    notFound();
  }

  const typedUseCase = useCase as UseCase;

  const jsonLd = generateJsonLd({
    title: typedUseCase.seoTitle || typedUseCase.title,
    description: typedUseCase.seoDescription || typedUseCase.heroSubheading,
    slug,
    imageUrl: typedUseCase.heroImage?.asset?.url,
    publishedAt: typedUseCase._createdAt,
    modifiedAt: typedUseCase._updatedAt,
    urlPrefix: "use-cases",
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UseCaseView useCase={typedUseCase} slug={slug} />
    </HydrationBoundary>
  );
}
