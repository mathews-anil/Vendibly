"use client";

import { useUseCaseTheme } from "./hooks/use-use-case-theme";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { StackSection } from "./components/stack-section";
import { SolutionSection } from "./components/solution-section";
import { ScenariosSection } from "./components/scenarios-section";
import { PricingSection } from "./components/pricing-section";
import { FaqSection } from "./components/faq-section";
import { FinalCtaSection } from "./components/final-cta-section";

export default function UseCaseView({ useCase }: { useCase: any }) {
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
