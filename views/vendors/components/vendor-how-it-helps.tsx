"use client";

// Updated: Added Shadow and Glow Effects
import { PortableText } from "@portabletext/react";

interface VendorHowItHelpsProps {
  content: any; // Using any for PortableText content block
}

export default function VendorHowItHelps({ content }: VendorHowItHelpsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="wrapper px-4 md:px-6">
        <div className="bg-app-blue rounded-[32px] md:rounded-[48px] p-8 md:p-16 relative overflow-hidden text-center md:text-left shadow-2xl shadow-app-blue/10">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-app-green/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit text-white mb-8 md:mb-10">
              Why it matters
            </h2>
            <div className="prose prose-lg md:prose-xl prose-invert prose-p:text-white/80 prose-p:leading-relaxed prose-p:font-light max-w-none">
              <PortableText value={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
