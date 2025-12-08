import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { PortableTextBlock } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface GuideDetailProps {
  guide: {
    title: string;
    coverImage: SanityImageSource;
    body: PortableTextBlock[];
    faqs: { question: string; answer: string }[];
    ctaButton: { text: string; url: string };
  };
}

const GuideDetailView = ({ guide }: GuideDetailProps) => {
  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-outfit text-app-blue text-center">{guide.title}</h1>
        
        {guide.coverImage && (
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={urlFor(guide.coverImage).url()}
              alt={guide.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-headings:font-outfit prose-headings:text-app-blue prose-p:text-foreground-copy prose-a:text-app-orange">
          <PortableText value={guide.body} />
        </div>

        {guide.faqs && guide.faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 font-outfit text-app-blue">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {guide.faqs.map((faq, index: number) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 font-outfit text-app-blue">{faq.question}</h3>
                  <p className="text-foreground-copy">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {guide.ctaButton && (
          <div className="mt-16 text-center bg-app-blue/5 p-10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 font-outfit text-app-blue">Ready to get started?</h2>
            <Link 
              href={guide.ctaButton.url}
              className="inline-flex gap-2 px-6 h-[52px] rounded-[14px] items-center justify-center text-lg leading-5.5 text-nowrap font-semibold font-outfit cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-app-orange text-white hover:shadow-[0px_10px_20px_rgba(255,106,61,0.25)]"
            >
              {guide.ctaButton.text}
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default GuideDetailView;
