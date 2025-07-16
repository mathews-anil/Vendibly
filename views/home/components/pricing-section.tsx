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
import { useRef } from "react";

const features = [
  { label: "Manage up to 5 vendors", disabled: false },
  { label: "Smart renewal reminders" },
  { label: "Auto-organized vendor vault" },
  { label: "Basic calendar view (30 days)" },
  { label: "Email inbox sync (1 account)" },

  { label: "Unlimited vendors" },
  { label: "AI-powered contract summaries" },
  { label: "Full calendar view" },
  { label: "Exportable reports (CSV, PDF)" },
  { label: "Priority support" },

  { label: "Everything in Pro" },
  { label: "Shared team dashboard" },
  { label: "Slack alerts" },
  { label: "Team access with roles" },
  { label: "Vendor tags and folders" },
  { label: "Advanced export options" },
];

const pricing = [
  {
    title: "Free",
    price: 0,
    subtitle: "For getting started with vendor control",
    features: [features[0], features[1], features[2], features[3], features[4]],
    icon: <IconGems className="w-8 lg:w-10" />,
    url: "https://forms.gle/tJUF8kug3T4PfaCs5",
  },
  {
    title: "Pro",
    price: 9,
    subtitle: "For power users and solo founders",
    features: [features[5], features[6], features[7], features[8], features[9]],
    icon: <IconDiamond className="w-8 lg:w-10" />,
    url: "https://forms.gle/tJUF8kug3T4PfaCs5",
  },
  {
    title: "Plus",
    price: 19,
    subtitle: "For teams and growing startups",
    features: [
      features[10],
      features[11],
      features[12],
      features[13],
      features[14],
      features[15],
    ],
    icon: <IconGems className="w-8 lg:w-10" />,
    url: "https://forms.gle/tJUF8kug3T4PfaCs5",
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
    { scope: section },
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
                index === 1 && "xl:-translate-y-7",
              )}
            >
              <div className="space-y-6 lg:space-y-12">
                <div className="flex justify-between items-center">
                  {item.icon}
                  {index === 1 && (
                    <div className="max-w-[132.1px] w-full py-2.5 rounded-[45px] bg-app-orange/10 text-xs font-bold uppercase text-app-orange text-center font-inter">
                      POPULAR PLAN
                    </div>
                  )}
                </div>
                <div className="space-y-6 lg:space-y-8">
                  <div className="space-y-2 lg:space-y-4">
                    <h1 className="text-3xl/[34px] lg:text-[34px]/[36px] font-bold font-outfit text-app-green">
                      {item.title}
                    </h1>
                    <p className="text-base font-inter text-foreground-copy">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base lg:text-lg font-semibold font-outfit">
                      Key Features:
                    </p>
                    <ul className="space-y-2 lg:space-y-3">
                      {item.features
                        .filter((feature) => !feature.disabled)
                        .map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <IconCheckMark className="shrink-0" />
                            <p className="text-sm lg:text-base font-inter font-medium">
                              {feature.label}
                            </p>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <h1 className="text-3xl/[34px] lg:text-[32px]/[36px] font-bold font-outfit">
                    ${item.price}.00{" "}
                    <span className="text-sm lg:text-base font-normal text-foreground-copy">
                      / Month
                    </span>
                  </h1>
                </div>
              </div>
              <LinkButton
                href={item.url}
                text="Get early access to this plan"
                className={cn(
                  "w-full h-12 mt-6 lg:mt-12 lg:h-[54px] bg-transparent rounded-[10px] border border-app-orange hover:shadow-[0px_10px_20px_rgba(255,106,61,0.25)]",
                  index === 1
                    ? "text-white bg-app-orange"
                    : "text-app-orange hover:bg-app-orange hover:text-white",
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
