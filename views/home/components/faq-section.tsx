"use client";

import IconCaretDown from "@/components/icons/icon-caret-down";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "Is Vendibly secure?",
    answer: "Yes. We use bank-level encryption and never sell your data.",
  },
  {
    question: "Can I import existing contracts?",
    answer: "Absolutely. Drag, drop, done.",
  },
  {
    question: "What happens after 14 days?",
    answer: "You’ll stay on the free plan unless you upgrade. No surprises.",
  },
];

const FaqSection = () => {
  const section = useRef(null);
  const left = useRef(null);
  const right = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top 75%",
          },

          defaults: { ease: Power4.easeInOut, duration: 0.5 },
        })
        .to(left.current, { autoAlpha: 1, x: 0 })
        .to(right.current, { autoAlpha: 1, y: 0 }, "-=0.25");
    },
    { scope: section },
  );
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  return (
    <section
      ref={section}
      id="faq"
      className="mt-24 sm:mt-48 lg:mt-72 xl:mt-[500px] 2xl:mt-[800px] scroll-mt-28 lg:scroll-mt-40"
    >
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row gap-11.5">
          <div
            className="max-w-[430px] w-full space-y-5 opacity-0 -translate-x-7"
            ref={left}
          >
            <h1 className="title">Frequently Asked Questions</h1>
            <p className="text-copy">
              Let&apos;s explore how we can help your business thrive in the
              ever-evolving marketing landscape.
            </p>
            {/* <LinkButton
              text={"Get organized for free"}
              href={"#"}
              className="bg-app-slate md:mt-8 hover:shadow-[0px_10px_20px_rgba(55,65,81,0.25)] max-lg:hidden"
              icon={<IconArrowRightUp className="w-6 h-6" />}
              iconSize={24}
              moveUp
            /> */}
          </div>

          <div className="flex-1 w-full opacity-0 translate-y-7" ref={right}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white group/faq mb-2 rounded-2xl sm:rounded-3xl border border-[#DCD7E7] px-5 sm:px-10 transition-all duration-300 shadow-[5px_5px_20px_rgba(0,0,0,0.05)] cursor-pointer",
                  index === selectedIndex
                    ? "py-6 sm:py-8.75"
                    : "py-5 sm:pt-6.25 sm:pb-7",
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
                    index === selectedIndex && "pb-3 sm:pb-5",
                  )}
                >
                  <div
                    className={cn(
                      "text-base/[24px] sm:text-[20px]/[30px] font-semibold font-outfit transition-all duration-300",
                      index === selectedIndex && "text-app-orange",
                    )}
                  >
                    {faq.question}
                  </div>
                  <IconCaretDown
                    className={cn(
                      "transition-all duration-300 sm:w-4 w-3",
                      index === selectedIndex && "rotate-180 text-app-orange",
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
      </div>
    </section>
  );
};

export default FaqSection;
