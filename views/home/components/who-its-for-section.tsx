"use client";

import IconAmbient from "@/components/icons/icon-ambient";
import IconArrowRight from "@/components/icons/icon-arrow-right";
import IconCheckList from "@/components/icons/icon-check-list";
import IconJob from "@/components/icons/icon-job";
import IconLeadership from "@/components/icons/icon-leadership";
import SectionHeader from "@/components/section-header";
import LinkButton from "@/components/ui/linkButton";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface UseCase {
  title: string;
  slug: string;
  category: string;
  shortDescription?: string;
  cardIcon?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

interface FeaturedGuide {
  title: string;
  slug: string;
  shortDescription?: string;
  icon?: string;
}

interface WhoItForSectionProps {
  useCases: UseCase[];
  featuredGuides: FeaturedGuide[];
}

// Icon mapping for use case categories
const categoryIcons = {
  creators: <IconLeadership />,
  freelancers: <IconJob />,
  startups: <IconAmbient />,
  agencies: <IconCheckList />,
};

// Fallback static options if no data from Sanity
const fallbackOptions = [
  {
    title: "Creators",
    icon: <IconLeadership />,
    href: "/use-cases/creators",
    text: (
      <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
        Manage sponsors and tools like{" "}
        <span className="font-semibold">Canva</span> or{" "}
        <span className="font-semibold">ConvertKit,</span> without the mess.
      </p>
    ),
  },
  {
    title: "Freelancers",
    icon: <IconJob />,
    href: "/use-cases/freelancers",
    text: (
      <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
        Keep track of contracts and apps like{" "}
        <span className="font-semibold">Notion</span> or{" "}
        <span className="font-semibold">Google Workspace,</span> all in one
        place.
      </p>
    ),
  },
  {
    title: "Startups",
    icon: <IconAmbient />,
    href: "/use-cases/startups",
    text: (
      <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
        Stay on top of services like{" "}
        <span className="font-semibold"> Figma, Stripe,</span> and{" "}
        <span className="font-semibold">AWS,</span> automatically.
      </p>
    ),
  },
  {
    title: "Agencies",
    icon: <IconCheckList />,
    href: "/use-cases/agencies",
    text: (
      <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
        Track recurring tools like{" "}
        <span className="font-semibold">Slack, Semrush,</span> and{" "}
        <span className="font-semibold">Adobe</span> across every client.
      </p>
    ),
  },
];

// Default descriptions for use case categories (fallback)
const defaultUseCaseDescriptions: Record<string, React.ReactNode> = {
  creators: (
    <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
      Manage sponsors and tools like{" "}
      <span className="font-semibold">Canva</span> or{" "}
      <span className="font-semibold">ConvertKit,</span> without the mess.
    </p>
  ),
  freelancers: (
    <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
      Keep track of contracts and apps like{" "}
      <span className="font-semibold">Notion</span> or{" "}
      <span className="font-semibold">Google Workspace,</span> all in one place.
    </p>
  ),
  startups: (
    <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
      Stay on top of services like{" "}
      <span className="font-semibold"> Figma, Stripe,</span> and{" "}
      <span className="font-semibold">AWS,</span> automatically.
    </p>
  ),
  agencies: (
    <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
      Track recurring tools like{" "}
      <span className="font-semibold">Slack, Semrush,</span> and{" "}
      <span className="font-semibold">Adobe</span> across every client.
    </p>
  ),
};

// Fallback offerings if no featured guides
const fallbackOfferings = [
  {
    title: "Email sync",
    description:
      "Vendibly auto-scans your inbox to find every vendor, contract, and renewal.",
    icon: "/icons/email-sync.png",
    href: "/guides/find-subscriptions-in-gmail-and-outlook",
  },
  {
    title: "Smart renewal reminders",
    description:
      "Get alerts before contracts renew, so you can cancel or renegotiate in time.",
    icon: "/icons/smart-renewal.png",
    href: "/guides/set-subscription-renewal-reminders",
  },
  {
    title: "Auto-organized vault",
    description:
      "All your contracts and invoices, finally in one place, searchable and stress-free.",
    icon: "/icons/auto-organized.png",
    href: "/guides/organize-subscription-invoices-from-email",
  },
  {
    title: "Renewal calendar",
    description:
      "See all upcoming charges and contract deadlines in one visual calendar.",
    icon: "/icons/renewal-calendar.png",
    href: "/guides/create-a-subscription-renewal-calendar",
  },
  {
    title: "Downloadable reports",
    description:
      "Export clean summaries of vendor activity, payments, and renewal dates.",
    icon: "/icons/downloadable-report.png",
  },
  {
    title: "AI-powered contract insights",
    description:
      "Skip the legalese. Vendibly highlights key terms, notice periods, and risks.",
    icon: "/icons/ai-powered.png",
  },
  {
    title: "Shared team access",
    description:
      "Manage vendors together with shared access, roles, and built-in clarity.",
    icon: "/icons/shared-team.png",
  },
];

const WhoItForSection = ({ useCases, featuredGuides }: WhoItForSectionProps) => {
  // Transform Sanity data into component format
  const options = useCases.length > 0 
    ? useCases.map((useCase) => ({
        title: useCase.title,
        icon: useCase.cardIcon?.asset?.url ? (
          <Image 
            src={useCase.cardIcon.asset.url} 
            alt={useCase.cardIcon.alt || useCase.title} 
            width={40} 
            height={40} 
            className="w-10 h-10 object-contain"
          />
        ) : (
          categoryIcons[useCase.category as keyof typeof categoryIcons] || <IconLeadership />
        ),
        href: `/use-cases/${useCase.slug}`,
        text: useCase.shortDescription ? (
          <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
            {useCase.shortDescription}
          </p>
        ) : defaultUseCaseDescriptions[useCase.category] || null,
      }))
    : fallbackOptions;

  const offerings = featuredGuides.length > 0
    ? [
        ...featuredGuides.map((guide) => ({
          title: guide.title,
          description: guide.shortDescription || "",
          icon: guide.icon || "/icons/email-sync.png",
          href: `/guides/${guide.slug}`,
        })),
        // Add remaining static offerings if less than 7 featured guides
        ...fallbackOfferings.slice(featuredGuides.length),
      ]
    : fallbackOfferings;

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
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "px-5.5 py-8.5 bg-white center flex-col gap-5 md:gap-7.5 rounded-3xl hover:shadow-[-16.81px_50.44px_84.06px_rgba(31,29,85,0.05)] border-b border-b-transparent hover:border-b-app-green transition-all duration-300 ease-in-out cursor-pointer",
                  "_cards opacity-0 text-center",
                )}
              >
                <div className="size-20 rounded-full border-2 border-[#0E0637]/[18%] center">
                  {item.icon}
                </div>
                <p className="text-base sm:text-[20px] font-medium font-outfit">
                  {item.title}
                </p>
                <>{item.text}</>
              </Link>
            ))}
          </div>

          {/* Offering */}
          <div
            ref={offeringCard}
            className="w-full py-10 lg:py-14.5 px-8 lg:px-12.5 rounded-4xl md:rounded-[44px] bg-white flex flex-col lg:flex-row gap-14 lg:gap-0 mt-20 md:mt-[148px] opacity-0 translate-y-10 scroll-mt-28 lg:scroll-mt-40"
            id="what-we-are-offering"
          >
            <div className="shrink-0 lg:border-r-2 border-r-black/5 pr-8">
              <div className="max-w-[298px] w-full">
                <SectionHeader
                  title="What We Are Offering"
                  text="Features"
                  className="items-start text-left mb-2.5 lg:mb-4"
                />
                <p className="text-copy mb-5 md:mb-7 lg:mb-10">
                  Everything you need to control your vendors, in one smart
                  dashboard.
                </p>
                <LinkButton
                  text="Get early access"
                  href="https://forms.gle/tJUF8kug3T4PfaCs5"
                  icon={<IconArrowRight />}
                  iconSize={18}
                />
              </div>
            </div>

            {/* Offers */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-1 gap-y-10 lg:pl-8">
              {offerings.map((item, index) => {
                const content = (
                  <>
                    <div className="size-[70px] rounded-full bg-[#F1F1F9] center mb-4">
                      <div>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={34}
                          height={34}
                        />
                      </div>
                    </div>
                    <h4 className="text-base/[22.4px] sm:text-lg leading-[25.25px] font-medium font-outfit mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm/[18px] sm:text-base/[24px] text-foreground-copy font-inter">
                      {item.description}
                    </p>
                  </>
                );

                return item.href ? (
                  <Link
                    key={index}
                    href={item.href}
                    className="lg:p-5 flex flex-col text-left hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={index} className="lg:p-5 flex flex-col text-left">
                    {content}
                  </div>
                );
              })}
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
