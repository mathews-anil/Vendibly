"use client";

import IconCaretDown from "@/components/icons/icon-caret-down";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { SectionTitle } from "./section-title";

interface FaqSectionProps {
  data: any;
  theme: any;
}

export function FaqSection({ data, theme }: FaqSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (!data) return null;

  return (
    <section className="bg-white pb-32">
      <div className="wrapper max-w-3xl mx-auto">
        <SectionTitle
          badge={data.badge}
          title={data.title}
          themeStyles={theme}
        />
        <div className="space-y-4">
          {data.faqs?.map((faq: any, i: number) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-outfit font-semibold text-app-blue text-lg pr-8">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "size-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 border",
                    openFaqIndex === i
                      ? cn(
                          "text-white border-transparent rotate-180",
                          theme.primaryBg
                        )
                      : "bg-white text-gray-400 border-gray-200"
                  )}
                >
                  <IconCaretDown className="size-4" />
                </span>
              </button>
              {openFaqIndex === i && (
                <div className="px-6 pb-6 pt-0 text-foreground-copy/80 text-base leading-relaxed">
                  <div className="h-px w-full bg-gray-100 mb-4" />
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
