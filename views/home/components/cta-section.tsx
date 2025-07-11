"use client";

import IconArrowRightUp from "@/components/icons/icon-arrow-right-up";
import LinkButton from "@/components/ui/linkButton";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const CtaSection = () => {
  const section = useRef(null);
  const left = useRef(null);
  const right = useRef(null);

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
        .to(left.current, { autoAlpha: 1, x: 0 })
        .to(right.current, { autoAlpha: 1, y: 0 }, "-=0.25");
    },
    { scope: section },
  );
  return (
    <section ref={section} id="cta" className="relative">
      <div className="wrapper cta max-2xl:translate-y-[20%] max-lg:translate-y-[10%] max-md:translate-y-8">
        <div className="flex flex-col lg:flex-row items-center gap-[77px]">
          <div
            className="lg:order-1 order-2 max-lg:self-start -translate-x-7 opacity-0"
            ref={left}
          >
            <h1 className="title lg:text-white mb-2">
              Start free. No credit card needed.
            </h1>
            <p className="text-copy font-semibold lg:text-white">
              Includes a{" "}
              <span className="text-sm/[17.6px] md:text-lg/[28px] lg:text-2xl/[37.2px] font-extrabold">
                14-day Pro trial
              </span>{" "}
              so you can explore the full power of Vendibly.
            </p>
            <LinkButton
              text={"Get organized for free"}
              href={"#"}
              className=" bg-app-slate mt-8 hover:shadow-[0px_10px_20px_rgba(55,65,81,0.25)]"
              icon={<IconArrowRightUp className="w-6 h-6" />}
              iconSize={24}
              moveUp
            />
          </div>
          <div
            className="lg:order-2 order-1 opacity-0 translate-y-7"
            ref={right}
          >
            <div className="w-full h-full">
              <Image
                src={"/imgs/cta-img.png"}
                alt={"cta"}
                width={632}
                height={456}
                className={"img"}
              />
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/imgs/cta-bg.png"
        alt="how-it-works-bg"
        width={1920}
        height={900}
        className="img absolute left-0 top-0 w-full h-fit z-[-3] cta-bg"
      />
    </section>
  );
};

export default CtaSection;
