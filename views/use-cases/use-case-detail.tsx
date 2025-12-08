import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface UseCaseDetailProps {
  useCase: {
    title: string;
    heroHeading: string;
    heroSubheading: string;
    bodySections: {
      heading: string;
      content: PortableTextBlock[];
      image: SanityImageSource;
    }[];
    finalCTA: {
      heading: string;
      subheading: string;
      buttonText: string;
      buttonUrl: string;
    };
    faqs?: { question: string; answer: string }[];
  };
}

const UseCaseDetailView = ({ useCase }: UseCaseDetailProps) => {
  return (
    <article className="pt-32 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit text-app-blue">{useCase.heroHeading || useCase.title}</h1>
        <p className="text-xl text-foreground-copy max-w-3xl mx-auto">{useCase.heroSubheading}</p>
      </div>

      {/* Sections */}
      <div className="container mx-auto px-4 space-y-24">
        {useCase.bodySections && useCase.bodySections.map((section, index) => (
          <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 font-outfit text-app-blue">{section.heading}</h2>
              <div className="prose prose-lg max-w-none text-foreground-copy">
                <PortableText value={section.content} />
              </div>
            </div>
            {section.image && (
              <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={urlFor(section.image).url()}
                  alt={section.heading}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Final CTA */}
      {useCase.finalCTA && (
        <div className="container mx-auto px-4 mt-24">
          <div className="bg-app-blue text-white rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">{useCase.finalCTA.heading}</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{useCase.finalCTA.subheading}</p>
              <Link 
                href={useCase.finalCTA.buttonUrl}
                className="inline-block bg-app-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-app-orange transition-colors"
              >
                {useCase.finalCTA.buttonText}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* FAQs */}
      {useCase.faqs && useCase.faqs.length > 0 && (
        <div className="container mx-auto px-4 mt-24 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 font-outfit text-app-blue text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {useCase.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-2 font-outfit text-app-blue">{faq.question}</h3>
                <p className="text-foreground-copy">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default UseCaseDetailView;
