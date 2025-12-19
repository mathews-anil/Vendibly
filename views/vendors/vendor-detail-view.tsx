"use client";

import { useQuery } from "@tanstack/react-query";
import { clientWithoutCdn } from "@/sanity/lib/client";
import { vendorBySlugQuery } from "@/sanity/lib/queries";
import VendorHero from "./components/vendor-hero";
import VendorFeatureList from "./components/vendor-feature-list";
import VendorHowItHelps from "./components/vendor-how-it-helps";
import VendorFaq from "./components/vendor-faq";

export interface VendorDetailData {
  title: string;
  category: string;
  shortDescription: string;
  features: any[];
  howVendiblyHelps: any;
  faqItems: any[];
}

interface VendorDetailViewProps {
  vendor: VendorDetailData;
  slug: string;
}

export default function VendorDetailView({
  vendor: initialVendor,
  slug,
}: VendorDetailViewProps) {
  const { data: vendor } = useQuery({
    queryKey: ["vendor", slug],
    queryFn: async () => {
      return await clientWithoutCdn.fetch(vendorBySlugQuery, { slug });
    },
    initialData: initialVendor,
    staleTime: 60 * 1000,
  });

  const {
    title,
    category,
    shortDescription,
    features,
    howVendiblyHelps,
    faqItems,
  } = vendor;

  return (
    <article className="bg-white">
      <VendorHero
        title={title}
        category={category}
        description={shortDescription}
      />

      {features && features.length > 0 && (
        <VendorFeatureList features={features} />
      )}
      {howVendiblyHelps && <VendorHowItHelps content={howVendiblyHelps} />}
      {faqItems && faqItems.length > 0 && <VendorFaq faqs={faqItems} />}

      <div className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-app-blue/5 border border-app-blue/10 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-app-blue">
              Get Started
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-outfit text-app-blue">
            Track your {title} subscription and renewals
          </h2>
          <p className="text-foreground-copy/70 mb-10 max-w-2xl mx-auto text-lg">
            Vendibly keeps your invoices organized and warns you before
            renewals.
          </p>
          <a
            href="https://app.vendibly.ai/auth/signup"
            className="inline-flex items-center justify-center bg-app-blue text-white font-bold px-10 py-4 rounded-full hover:bg-app-blue/90 transition-all hover:scale-105 shadow-xl shadow-app-blue/20"
          >
            Start free with Vendibly
          </a>
        </div>
      </div>
    </article>
  );
}
