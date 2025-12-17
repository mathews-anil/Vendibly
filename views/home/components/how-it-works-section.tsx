"use client";

import IconAction from "@/components/icons/icon-action";
import IconAlert from "@/components/icons/icon-alert";
import IconVendor from "@/components/icons/icon-vendor";
import SectionHeader from "@/components/section-header";
import { StepLine1, StepLine2 } from "@/components/ui/StepLines";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Link from "next/link";
import { useRef } from "react";

const process = [
  {
    step: "Step 1",
    title: (
      <>
        Add your{" "}
        <Link
          href="/vendors"
          className="hover:text-app-orange transition-colors"
        >
          vendors
        </Link>
      </>
    ),
    description:
      "Connect your email and Vendibly auto-detects your subscriptions and invoices.",
    color: "#ff6a3d",
    icon: <IconVendor className="w-6 md:w-8 lg:w-10" />,
    className: "_left -translate-x-5 opacity-0",
  },
  {
    step: "Step 2",
    title: "Get smart alerts",
    description: "Renewal dates and upcoming charges tracked automatically.",
    color: "#00c999",
    icon: <IconAlert className="w-6 md:w-8 lg:w-10" />,
    className: "_center -translate-x-5 opacity-0",
  },
  {
    step: "Step 3",
    title: "Take action",
    description:
      "Cancel or adjust your subscriptions without searching. No stress.",
    color: "#374151",
    icon: <IconAction className="w-6 md:w-8 lg:w-10" />,
    className: "_right -translate-x-5 opacity-0",
  },
];

const HowItWorksSection = () => {
  const header = useRef(null);
  const section = useRef(null);

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
        .to(["._left", "._line1", "._center", "._line2", "._right"], {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
        });
    },
    { scope: section }
  );
  return (
    <section
      ref={section}
      id="how-it-works"
      className="relative pb-24 md:pb-32 2xl:pb-[154px] scroll-mt-28 lg:scroll-mt-40"
    >
      {/* Container */}
      <div className="wrapper">
        <SectionHeader
          text="Steps"
          title="How it works"
          className="mb-16 md:mb-20 opacity-0"
          ref={header}
        />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12 xl:gap-[124px] relative">
          {process.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col justify-start items-center gap-10 xl:gap-12.5 text-center md:aspect-square",
                item.className
              )}
            >
              {/* Box */}
              <div
                className={cn(
                  "size-16 md:size-20 lg:size-24 xl:size-[120px] rounded-xl md:rounded-[20px] center",
                  index === 0 &&
                    "shadow-[0px_100px_80px_rgba(255,106,61,0.07),0px_64.81px_46.85px_rgba(255,106,61,0.0531),0px_38.52px_25.48px_rgba(255,106,61,0.0425),0px_20px_13px_rgba(255,106,61,0.035),0px_8.15px_6.52px_rgba(255,106,61,0.0275),0px_1.85px_3.15px_rgba(255,106,61,0.0169)]",
                  index === 1 &&
                    "shadow-[0px_100px_80px_rgba(0,201,153,0.07),0px_64.81px_46.85px_rgba(0,201,153,0.0531),0px_38.52px_25.48px_rgba(0,201,153,0.0425),0px_20px_13px_rgba(0,201,153,0.035),0px_8.15px_6.52px_rgba(0,201,153,0.0275),0px_1.85px_3.15px_rgba(0,201,153,0.0169)]",
                  index === 2 &&
                    "shadow-[0px_100px_80px_rgba(36,46,73,0.07),0px_64.81px_46.85px_rgba(36,46,73,0.0531),0px_38.52px_25.48px_rgba(36,46,73,0.0425),0px_20px_13px_rgba(36,46,73,0.035),0px_8.15px_6.52px_rgba(36,46,73,0.0275),0px_1.85px_3.15px_rgba(36,46,73,0.0169)]"
                )}
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>

              <div className="space-y-3">
                <p
                  className={cn("text-[22px] font-bold font-inter")}
                  style={{ color: item.color }}
                >
                  {item.step}
                </p>
                <p className="text-2xl leading-[31px] font-semibold font-outfit">
                  {item.title}
                </p>
                <p className="text-base leading-[155%] text-foreground-copy font-inter">
                  {item.description}
                </p>
              </div>
              {/* <div className="max-md:block hidden center w-f">
                                    <StepLine1 className="rotate-90" />
                                </div> */}
            </div>
          ))}
          {/* <StepLine1 className="absolute top-[60px] left-[266px] w-[204px]" /> */}
          <StepLine1 className="max-md:hidden _line1 opacity-0 absolute top-11 xl:top-[60px] left-[25%] lg:left-[24%] xl:left-[266px] w-[120px] lg:w-[170px] xl:w-[204px]" />
          <StepLine2 className="max-md:hidden _line2 opacity-0 absolute top-11 xl:top-[60px] right-[25%] lg:right-[24%] xl:right-[266px] w-[120px] lg:w-[170px] xl:w-[204px]" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
