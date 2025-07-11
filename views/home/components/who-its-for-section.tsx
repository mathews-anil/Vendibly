import IconAmbient from "@/components/icons/icon-ambient";
import IconArrowRight from "@/components/icons/icon-arrow-right";
import IconBadge from "@/components/icons/icon-badge";
import IconCheckList from "@/components/icons/icon-check-list";
import IconJob from "@/components/icons/icon-job";
import IconLeadership from "@/components/icons/icon-leadership";
import IconMedal from "@/components/icons/icon-medal";
import IconRanking from "@/components/icons/icon-ranking";
import IconRating from "@/components/icons/icon-rating";
import SectionHeader from "@/components/section-header";
import LinkButton from "@/components/ui/linkButton";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const options = [
  {
    title: "Creators",
    icon: <IconLeadership />,
  },
  {
    title: "Freelancers",
    icon: <IconJob />,
  },
  {
    title: "Startups",
    icon: <IconAmbient />,
  },
  {
    title: "Agencies",
    icon: <IconCheckList />,
  },
];

const offerings = [
  {
    title: "AI-powered contract insights",
    description:
      "Know what’s in your vendor agreements without reading legalese.",
    icon: <IconRanking />,
  },
  {
    title: "Smart renewal reminders",
    description: "Never miss a cancellation window again.",
    icon: <IconMedal />,
  },
  {
    title: "Contract + invoice vault",
    description: "Every file. One dashboard. Searchable. Sharable.",
    icon: <IconBadge />,
  },
  {
    title: "Payment history tracking",
    description: "Spot recurring charges instantly.",
    icon: <IconRating />,
  },
  {
    title: (
      <>
        Slack alerts <br /> (Coming soon)
      </>
    ),
    description: "Get notified where your team already works.",
    icon: <IconRanking />,
  },
];

const WhoItForSection = () => {
  const section = useRef(null);
  const header = useRef(null);
  const offeringCard = useRef(null);

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
        .to("._cards", { autoAlpha: 1, y: 0, stagger: 0.1 }, "-=0.5");

      gsap.to(offeringCard.current, {
        opacity: 1,
        y: 0,
        ease: Power4.easeInOut,
        duration: 0.8,

        scrollTrigger: {
          trigger: offeringCard.current,
          start: "top 90%",
        },
      });
    },
    { scope: section },
  );
  return (
    <section
      ref={section}
      id="who-its-for"
      className="relative sm:pt-24 2xl:pt-36.75 pb-16 xl:pb-24 2xl:pb-[140px] overflow-hidden scroll-mt-28 lg:scroll-mt-40"
    >
      <div className="wrapper">
        <SectionHeader
          text="Benefits"
          title="Who It's For"
          className="mb-10.5 opacity-0"
          ref={header}
        />

        {/* Content */}
        <div>
          {/* Options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4.5">
            {options.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "h-[180px] md:h-[219px] bg-white center flex-col gap-5 md:gap-7.5 rounded-3xl hover:shadow-[-16.81px_50.44px_84.06px_rgba(31,29,85,0.05)] border-b border-b-transparent hover:border-b-app-green transition-all duration-300 ease-in-out",
                  "_cards opacity-0",
                )}
              >
                <div className="size-20 rounded-full border-2 border-[#0E0637]/[18%] center">
                  {item.icon}
                </div>
                <p className="text-base sm:text-[20px] font-medium font-outfit">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Offering */}
          <div
            ref={offeringCard}
            className="w-full py-10 lg:py-14.5 px-8 lg:px-12.5 rounded-[44px] bg-white flex flex-col lg:flex-row gap-20 lg:gap-0 mt-20 md:mt-[148px] opacity-0 translate-y-10 scroll-mt-28 lg:scroll-mt-40"
            id="what-we-are-offering"
          >
            <div className="shrink-0 lg:border-r-2 border-r-black/5 pr-8">
              <div className="max-w-[298px] w-full">
                <SectionHeader
                  title="What We Are Offering"
                  text="Features"
                  className="items-start text-left mb-10"
                />
                <LinkButton
                  text="Start Free"
                  href="/contact"
                  icon={<IconArrowRight />}
                  iconSize={18}
                />
              </div>
            </div>

            {/* Offers */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-1 gap-y-10 lg:pl-8">
              {offerings.map((item, index) => (
                <div key={index} className="lg:p-5 flex flex-col text-left">
                  <div className="size-[70px] rounded-full bg-[#F1F1F9] center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-base/[22.4px] sm:text-lg leading-[25.25px] font-medium font-outfit mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-sm:hidden absolute left-0 bottom-0 w-full z-[-1]">
          <Image
            src="/imgs/offering-bg.png"
            alt="offering-bg"
            width={1920}
            height={900}
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoItForSection;
