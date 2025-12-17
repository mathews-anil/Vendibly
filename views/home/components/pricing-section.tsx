"use client";

import ElementSVG from "@/components/element-svg";
import IconArrowRight from "@/components/icons/icon-arrow-right";
import IconCheckMark from "@/components/icons/icon-check-mark";
import IconDiamond from "@/components/icons/icon-diamond";
import IconGems from "@/components/icons/icon-gems";
import SectionHeader from "@/components/section-header";
import LinkButton from "@/components/ui/linkButton";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Link from "next/link";
import { useRef } from "react";

const pricing = [
  {
    title: "Free",
    price: "0.00",
    priceSuffix: "/ Month",
    subtitle: (
      <>
        For getting started with{" "}
        <Link
          href="/vendors"
          className="hover:text-app-green transition-colors font-semibold"
        >
          vendor
        </Link>{" "}
        control.
      </>
    ),
    features: [
      "Manage up to 5 vendors",
      "Smart renewal reminders",
      "Auto-organized vendor vault",
      "30-day calendar view",
      "Email inbox sync trial",
    ],
    note: "Upgrade anytime to keep your inbox in continuous sync.",
    icon: <IconGems className="w-8 lg:w-10" />,
    ctaText: "Create free account",
    ctaUrl: "https://app.vendibly.ai/auth/signup",
    highlight: false,
  },
  {
    title: "Pro",
    price: "19",
    priceSuffix: "/ Month billed annually",
    subtitle: "For power users and solo founders.",
    features: [
      <>
        Unlimited{" "}
        <Link
          href="/vendors"
          className="hover:text-app-green transition-colors font-semibold"
        >
          vendors
        </Link>
      </>,
      "Automatic inbox sync with renewal alerts",
      "AI-powered contract summaries",
      "Full renewal calendar view",
      "Exportable reports (CSV, PDF)",
      "1 inbox sync included",
    ],
    note: "Add more inboxes: +$9/month each",
    icon: <IconDiamond className="w-8 lg:w-10" />,
    ctaText: "Start 14-day free trial",
    ctaUrl: "https://app.vendibly.ai/auth/signup",
    highlight: true,
  },
  {
    title: "Plus",
    price: null,
    priceSuffix: null,
    subtitle: "For teams and growing startups.",
    features: [
      "Everything in Pro",
      "Shared team dashboard",
      "Slack alerts built in",
      "Team access with roles",
      "Vendor tags and folders",
      "Advanced export options",
      "3 inbox syncs included",
    ],
    note: "Add more inboxes: +$9/month each",
    icon: <IconGems className="w-8 lg:w-10" />,
    ctaText: "Join Waitlist",
    ctaUrl: "https://forms.gle/tJUF8kug3T4PfaCs5",
    highlight: false,
  },
];

const PricingSection = () => {
  const section = useRef(null);
  const header = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top 80%",
          },

          defaults: { ease: Power4.easeInOut, duration: 0.5 },
        })
        .to(header.current, { autoAlpha: 1 })
        .to("._cards", { autoAlpha: 1, x: 0, stagger: 0.1 }, "-=0.5")
        .to("._cardMiddle", { y: -28 });
    },
    { scope: section }
  );
  return (
    <section
      ref={section}
      id="pricing"
      className="pb-10 relative scroll-mt-28 lg:scroll-mt-40"
    >
      <ElementSVG className="w-12 sm:w-24 md:w-32 lg:w-40 2xl:w-fit absolute top-[-5%] sm:top-0 2xl:top-10 right-[5%] 2xl:right-[5%]" />
      <div className="wrapper">
        <SectionHeader
          text="Pricing"
          title="Simple pricing. Big control."
          className="mb-10 lg:mb-[84px] opacity-0"
          ref={header}
        />

        {/* Content */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {pricing.map((item, index) => (
            <div
              key={index}
              className={cn(
                "p-5 lg:p-8 rounded-3xl flex flex-col justify-between bg-white shadow-[8px_24px_96px_rgba(126,138,253,0.08)] _cards opacity-0 -translate-x-7",
                index === 1 && "xl:-translate-y-7"
              )}
            >
              <div className="space-y-6 lg:space-y-12">
                <div className="flex justify-between items-center">
                  {item.icon}
                  {item.highlight && (
                    <div className="max-w-[132.1px] w-full py-2.5 rounded-[45px] bg-app-orange/10 text-xs font-bold uppercase text-app-orange text-center font-inter">
                      POPULAR PLAN
                    </div>
                  )}
                </div>
                <div className="space-y-6 lg:space-y-8">
                  <div className="space-y-2 lg:space-y-4">
                    <h3 className="text-3xl/[34px] lg:text-[34px]/[36px] font-bold font-outfit text-app-green">
                      {item.title}
                    </h3>
                    <p className="text-base font-inter text-foreground-copy">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base lg:text-lg font-semibold font-outfit">
                      Key Features:
                    </p>
                    <ul className="space-y-2 lg:space-y-3">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <IconCheckMark className="shrink-0" />
                          <p className="text-sm lg:text-base font-inter font-medium">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    {item.note && (
                      <p className="text-sm text-foreground-copy font-inter italic">
                        {item.note}
                      </p>
                    )}
                  </div>
                  {item.price !== null ? (
                    <h3 className="text-3xl/[34px] lg:text-[32px]/[36px] font-bold font-outfit">
                      ${item.price}{" "}
                      <span className="text-sm lg:text-base font-normal text-foreground-copy">
                        {item.priceSuffix}
                      </span>
                    </h3>
                  ) : (
                    <h3 className="text-2xl/[34px] lg:text-[28px]/[36px] font-bold font-outfit text-app-green">
                      Join the Waitlist
                    </h3>
                  )}
                </div>
              </div>
              <LinkButton
                href={item.ctaUrl}
                text={item.ctaText}
                className={cn(
                  "w-full h-12 mt-6 lg:mt-12 lg:h-[54px] bg-transparent rounded-[10px] border border-app-orange hover:shadow-[0px_10px_20px_rgba(255,106,61,0.25)]",
                  item.highlight
                    ? "text-white bg-app-orange"
                    : "text-app-orange hover:bg-app-orange hover:text-white"
                )}
                icon={<IconArrowRight className="w-4.5 h-4.5" />}
                iconSize={18}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
