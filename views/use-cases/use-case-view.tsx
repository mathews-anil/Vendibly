"use client";

import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";
import { useCaseBySlugQuery } from "@/sanity/lib/queries";
import { useUseCaseTheme } from "./hooks/use-use-case-theme";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { StackSection } from "./components/stack-section";
import { SolutionSection } from "./components/solution-section";
import { ScenariosSection } from "./components/scenarios-section";
import { PricingSection } from "./components/pricing-section";
import { FaqSection } from "./components/faq-section";
import { FinalCtaSection } from "./components/final-cta-section";
import { UseCase } from "@/types";

export default function UseCaseView({
  useCase: initialUseCase,
  slug,
}: {
  useCase: UseCase;
  slug: string;
}) {
  const { data: useCase } = useQuery({
    queryKey: ["use-case", slug],
    queryFn: async () => {
      return await client.fetch(useCaseBySlugQuery, { slug });
    },
    initialData: initialUseCase,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });

  const theme = useUseCaseTheme(useCase.theme);

  return (
    <article className="overflow-hidden relative">
      <HeroSection useCase={useCase} theme={theme} />
      <ProblemSection data={useCase.problemSection} theme={theme} />
      <StackSection data={useCase.stackSection} theme={theme} />
      <SolutionSection data={useCase.solutionSection} theme={theme} />
      <ScenariosSection data={useCase.scenariosSection} theme={theme} />
      <PricingSection data={useCase.pricingSection} theme={theme} />
      <FaqSection data={useCase.faqSection} theme={theme} />
      <FinalCtaSection data={useCase.finalCTA} theme={theme} />
    </article>
  );
}
