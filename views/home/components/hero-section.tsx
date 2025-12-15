"use client";

import IconArrowRightUp from "@/components/icons/icon-arrow-right-up";
import LinkButton from "@/components/ui/linkButton";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const HeroSection = () => {
  const leftElement = useRef(null);
  const rightElement = useRef(null);

  useGSAP(() => {
    gsap.to([leftElement.current, rightElement.current], {
      autoAlpha: 1,
      x: 0,
      ease: Power4.easeInOut,
      duration: 1,
    });
  }, {});
  return (
    <section
      id="hero"
      className="relative w-full xl:h-[1200px] h-full pt-26 sm:pt-48 xl:pt-[193px] max-md:pb-14 max-xl:pb-20 isolate overflow-hidden"
    >
      {/* Background shape */}
      <div className="absolute left-0 top-0 w-full h-fit z-[-1]">
        <Image
          src={"/imgs/hero-bg-shape.png"}
          alt={"top-hero-bg"}
          width={1920}
          height={900}
          className={"max-xl:hidden xl:h-[1400px] w-full object-cover"}
          quality={100}
          priority
        />
      </div>

      {/* Content */}
      <div className="grid xl:grid-cols-[458px_auto] gap-10 w-full h-full wrapper">
        {/* Texts */}
        <div
          className="w-full space-y-4.5 sm:space-y-6 xl:space-y-10.5 flex flex-col xl:items-start items-center max-xl:text-center -translate-x-5 opacity-0"
          ref={leftElement}
        >
          <div className="max-w-[368px] w-full h-10 flex items-center gap-2.5 p-1.25  bg-white rounded-[80px] max-lg:hidden">
            <div className="bg-app-slate w-[63px] h-7.5 rounded-[60px] center text-xs font-semibold text-white font-inter">
              News!
            </div>
            <div className="flex items-center">
              <p className="text-xs sm:text-sm font-inter ">
                Update New features for active users
              </p>
              ✨
            </div>
          </div>

          <div className="space-y-3 lg:space-y-4.5 xl:w-full max-w-[460px] md:max-w-[600px] mx-auto">
            <h1 className="title-lg">Finally, vendor chaos under control.</h1>
            <div className="text-sm/5 md:text-base/[27px] font-inter text-foreground-copy">
              <p className="">
                Vendibly connects to your inbox, finds every subscription, contract, and renewal (like Canva, Google Workspace, Zoom), and turns the chaos into one clean dashboard.
              </p>
              <p className="mt-2">
                No more spreadsheets. No more surprise renewals. No more
                guesswork.
              </p>
            </div>
          </div>

          <div>
            <LinkButton
              href={"https://app.vendibly.ai/auth/signup"}
              text={"Create free account"}
              icon={<IconArrowRightUp className="w-6 h-6" />}
              className="rounded-[12px] h-[56px]"
              iconSize={24}
              moveUp
            />
          </div>
        </div>

        {/* Image */}
        <div
          ref={rightElement}
          className="xl:w-[865px] w-full xl:h-[613px] h-auto shadow-[-30px_27px_100px_rgba(0,0,0,0.10)] overflow-hidden rounded-3xl translate-x-5 opacity-0"
        >
          <Image
            src={"/imgs/Dashboard.png"}
            alt={"Vendibly dashboard showing subscriptions, invoices, and renewal dates organized automatically."}
            width={865}
            height={613}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
