"use client";

import MultiSectionSVG from "@/components/multi-section-svg";
import CtaSection from "@/views/home/components/cta-section";
import FaqSection from "@/views/home/components/faq-section";
import HeroSection from "@/views/home/components/hero-section";
import HowItWorksSection from "@/views/home/components/how-it-works-section";
import PricingSection from "@/views/home/components/pricing-section";
import ProcessSection from "@/views/home/components/process-section";
import TestimonialSection from "@/views/home/components/testimonial-section";
import WhoItForSection from "@/views/home/components/who-its-for-section";
import Image from "next/image";
import FooterCtaSection from "./components/footer-cta-section";
import { useQuery } from "@tanstack/react-query";
import { clientWithoutCdn } from "@/sanity/lib/client";

export interface UseCase {
  title: string;
  slug: string;
  category: string;
  shortDescription?: string;
}

export interface FeaturedGuide {
  title: string;
  slug: string;
  shortDescription?: string;
  icon?: string;
}

interface HomeProps {
  useCases: UseCase[];
  featuredGuides: FeaturedGuide[];
}

const useCasesQuery = `*[_type == "useCase" && defined(category)] | order(category asc) {
  title,
  "slug": slug.current,
  category,
  shortDescription,
  cardIcon {
    asset->{
      url
    },
    alt
  }
}`;

const featuredGuidesQuery = `*[_type == "guide" && featured == true] | order(_createdAt desc) [0...4] {
  title,
  "slug": slug.current,
  shortDescription,
  icon
}`;

const Home = ({
  useCases: initialUseCases,
  featuredGuides: initialFeaturedGuides,
}: HomeProps) => {
  const { data: useCases } = useQuery({
    queryKey: ["use-cases-home"],
    queryFn: () => clientWithoutCdn.fetch(useCasesQuery),
    initialData: initialUseCases,
    staleTime: 60 * 1000, // Consider data fresh for 60 seconds
  });

  const { data: featuredGuides } = useQuery({
    queryKey: ["featured-guides-home"],
    queryFn: () => clientWithoutCdn.fetch(featuredGuidesQuery),
    initialData: initialFeaturedGuides,
    staleTime: 60 * 1000, // Consider data fresh for 60 seconds
  });

  return (
    <>
      <HeroSection />
      <div id="process" className="scroll-mt-28 lg:scroll-mt-40"></div>
      <div className="relative overflow-hidden">
        <ProcessSection />
        <HowItWorksSection />
        <div className="max-sm:hidden absolute left-0 bottom-0 w-full h-fit z-[-1]">
          <Image
            src="/imgs/how-it-works-bg.png"
            alt="how-it-works-bg"
            width={1920}
            height={900}
            className="img"
          />
        </div>
      </div>
      <div className="relative">
        <WhoItForSection useCases={useCases} featuredGuides={featuredGuides} />
        <TestimonialSection />
        <PricingSection />
        <CtaSection />
        <MultiSectionSVG className="absolute inset-0 w-full h-full pointer-events-none z-[-2]" />
      </div>
      <FaqSection />
      <FooterCtaSection />
    </>
  );
};

export default Home;
