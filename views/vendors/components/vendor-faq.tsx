"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

interface FaqItem {
  question: string;
  answer: string;
}

interface VendorFaqProps {
  faqs: FaqItem[];
}

export default function VendorFaq({ faqs }: VendorFaqProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="wrapper px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-app-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground-copy/60">
            Common questions about this integration.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "bg-white group/faq mb-2 rounded-2xl sm:rounded-3xl border border-[#DCD7E7] px-5 sm:px-10 transition-all duration-300 shadow-[5px_5px_20px_rgba(0,0,0,0.05)] cursor-pointer",
                index === selectedIndex
                  ? "py-6 sm:py-8.75"
                  : "py-5 sm:pt-6.25 sm:pb-7"
              )}
              onClick={() => {
                if (selectedIndex === index) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(index);
                }
              }}
            >
              <div
                className={cn(
                  "flex justify-between items-center transition-all duration-300",
                  index === selectedIndex && "pb-3 sm:pb-5"
                )}
              >
                <div
                  className={cn(
                    "text-base/[24px] sm:text-[20px]/[30px] font-semibold font-outfit transition-all duration-300",
                    index === selectedIndex && "text-app-orange"
                  )}
                >
                  {faq.question}
                </div>
                <ChevronDown
                  className={cn(
                    "transition-all duration-300 sm:w-4 w-3",
                    index === selectedIndex && "rotate-180 text-app-orange"
                  )}
                />
              </div>

              {/* answer */}
              <AnimatePresence>
                {index === selectedIndex && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs/[16px] sm:text-base/[24px] font-inter text-foreground-copy">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
