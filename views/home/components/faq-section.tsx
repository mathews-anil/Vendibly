"use client";

import IconCaretDown from "@/components/icons/icon-caret-down";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "What does Vendibly do?",
    answer: (
      <>
        Vendibly is a subscription tracker and SaaS renewal management tool that
        connects to Gmail or Outlook. It automatically extracts subscriptions,
        invoices, renewal dates, and contract terms using AI, then organizes
        everything into one dashboard with smart alerts before charges hit.
      </>
    ),
  },
  {
    question: "How does Vendibly find my subscriptions and renewals?",
    answer: (
      <>
        Vendibly scans your inbox for invoices, payment confirmations,
        subscription emails, and contracts. It uses AI to identify{" "}
        <Link
          href="/vendors"
          className="hover:text-app-green transition-colors font-semibold"
        >
          vendors
        </Link>
        , detect renewal dates, extract amounts, and categorize each
        subscription. No manual setup is needed and you can upload contracts
        directly if you prefer.
      </>
    ),
  },
  {
    question: "Does Vendibly read or store my emails?",
    answer: (
      <>
        No. Vendibly uses secure, read-only access to analyze
        subscription-related emails such as invoices and billing notices. It
        does not store your email content, does not access personal messages,
        and never sends or edits emails.
      </>
    ),
  },
  {
    question: "Do I need to upload contracts manually?",
    answer: (
      <>
        Not necessarily. Vendibly can detect most subscriptions, invoices, and
        renewals directly from your inbox. Contract upload is optional and helps
        when you have PDFs, agreements, or older files outside your email.
      </>
    ),
  },
  {
    question: "Will Vendibly miss any subscriptions?",
    answer: (
      <>
        Vendibly captures nearly all subscriptions that generate invoices or
        renewal notifications in your inbox. If a tool never sends billing
        emails, you can add it manually or upload the contract, and Vendibly
        will monitor it going forward.
      </>
    ),
  },
  {
    question: "Are my email and data secure?",
    answer: (
      <>
        Yes. Vendibly uses OAuth for Gmail and Outlook, which means we never see
        your password and only receive read-only access. All data is encrypted
        in transit and at rest. You can disconnect Vendibly at any time from
        your Google or Microsoft account settings.
      </>
    ),
  },
  {
    question: "What inboxes does Vendibly support?",
    answer: (
      <>
        Vendibly currently supports Gmail and Outlook (Microsoft 365).
        Additional providers will be added based on user demand.
      </>
    ),
  },
  {
    question: "How do renewal alerts work?",
    answer: (
      <>
        Vendibly identifies upcoming renewals from invoices, billing emails, and
        contract terms. You receive smart alerts before renewal dates, giving
        you time to cancel, downgrade, negotiate, or update payment details.
        Alerts adapt to monthly and annual billing cycles.
      </>
    ),
  },
  {
    question: "Can Vendibly track annual contracts and recurring invoices?",
    answer: (
      <>
        Yes. Vendibly extracts renewal dates, billing periods, amounts, and
        contract terms for both monthly subscriptions and long-term SaaS
        agreements. It handles annual, multi-year, and custom billing cycles
        automatically.
      </>
    ),
  },
  {
    question: "What happens after my free trial?",
    answer: (
      <>
        You automatically move to the Free Plan. Your dashboard, inbox sync, and
        existing subscriptions remain intact. There is no charge unless you
        choose to upgrade.
      </>
    ),
  },
  {
    question: "Who is Vendibly for?",
    answer: (
      <>
        Vendibly is built for creators, freelancers, startups, small businesses,
        and agencies who use multiple SaaS tools and want to avoid missed
        renewals, surprise charges, and scattered invoices.
      </>
    ),
  },
  {
    question: "Can I use Vendibly without connecting my inbox?",
    answer: (
      <>
        Yes. You can add subscriptions manually or upload contracts. However,
        inbox scanning is the fastest and most accurate way to find everything
        automatically, especially older subscriptions you may have forgotten.
      </>
    ),
  },
  {
    question: "How accurate is Vendibly's detection?",
    answer: (
      <>
        Vendibly's AI engine identifies subscription-related emails with high
        accuracy. It prioritizes invoice attachments, then email bodies, to
        extract{" "}
        <Link
          href="/vendors"
          className="hover:text-app-green transition-colors font-semibold"
        >
          vendor
        </Link>{" "}
        names, amounts, billing cycles, and renewal dates.
      </>
    ),
  },
  // {
  //     question: "Can I export my subscription data?",
  //     answer: "Yes. You can export your subscriptions and renewal calendar as CSV or PDF for reporting, budgeting, or internal reviews.",
  // },
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
    { scope: section }
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
            <h2 className="title">Frequently Asked Questions</h2>
            <p className="text-copy">
              Everything you need to know before getting started.
            </p>
            {/* <LinkButton
              text={"Get organized for free"}
              href={"#"}
              className="bg-app-slate md:mt-8 hover:shadow-[0px_10px_20px_rgba(55,65,81,0.25)] max-lg:hidden"
              icon={<IconArrowRightUp className="w-6 h-6" />}
              iconSize={18}
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
                  <IconCaretDown
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
      </div>
    </section>
  );
};

export default FaqSection;
