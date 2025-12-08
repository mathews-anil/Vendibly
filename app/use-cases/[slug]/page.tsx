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
  };
}

export const revalidate = 60;

export default async function UseCaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = await client.fetch(useCaseBySlugQuery, { slug });

  if (!useCase) {
    notFound();
  }

  return <UseCaseDetailView useCase={useCase} />;
}
