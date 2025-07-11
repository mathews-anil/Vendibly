import IconQuote from "@/components/icons/icon-quote";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const TestimonialSection = () => {
  const testimonialCard = useRef(null);

  useGSAP(() => {
    gsap.to(testimonialCard.current, {
      opacity: 1,
      y: 0,
      ease: Power4.easeInOut,
      duration: 0.8,

      scrollTrigger: {
        trigger: testimonialCard.current,
        start: "top 90%",
      },
    });
  }, {});
  return (
    <section
      id="testimonials"
      className="pt-8 md:pt-16 xl:pt-24 pb-16 md:pb-18 xl:pb-20 opacity-0 translate-y-10"
      ref={testimonialCard}
    >
      <div className="wrapper">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[60px] p-4 md:p-6.5 border-2 border-dashed border-app-orange rounded-[20px]">
          <div className="md:order-1 order-2 w-full px-8.5 py-6 bg-white rounded-[26px] shadow-[-16.81px_50.44px_84.06px_rgba(31,29,85,0.05),0px_4px_4px_rgba(0,0,0,0.05]">
            <IconQuote className="mt-6" />
            <p className="mt-4 text-lg/[28px] text-foreground-copy font-medium font-inter">
              &quot;We built Vendibly because we were drowning in vendor chaos
              ourselves. This is the tool we wish we had years ago.&quot;
            </p>

            <div className="mt-10 lg:mt-[98px] flex items-center gap-3">
              <div className="size-12 rounded-full">
                <Image
                  src={"/imgs/client.png"}
                  alt=""
                  width={100}
                  height={100}
                  className="img"
                />
              </div>
              <p className="text-base font-semibold font-inter tracking-[0.01px]">
                The Vendibly Team
              </p>
            </div>
          </div>
          <div className="md:order-2 order-1">
            <div className="w-full h-full">
              <Image
                src={"/imgs/testimonial-Illustration.png"}
                alt=""
                width={497}
                height={382}
                className="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
