import MultiSectionSVG from "@/components/multi-section-svg";
import CtaSection from "@/views/home/components/cta-section";
import FaqSection from "@/views/home/components/faq-section";
import HeroSection from "@/views/home/components/hero-section";
import HowItWorksSection from "@/views/home/components/how-it-works-section";
import PricingSection from "@/views/home/components/pricing-section";
import ProcessSection from "@/views/home/components/process-section";
import TestimonialSection from "@/views/home/components/testimonial-section";
import WhoItForSection from "@/views/home/components/who-its-for-section";
import Image from "next/image";
import FooterCtaSection from "./components/footer-cta-section";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div id="process" className="scroll-mt-28 lg:scroll-mt-40"></div>
      <div className="relative overflow-hidden">
        <ProcessSection />
        <HowItWorksSection />
        <div className="max-sm:hidden absolute left-0 bottom-0 w-full h-fit z-[-1]">
          <Image
            src="/imgs/how-it-works-bg.png"
            alt="how-it-works-bg"
            width={1920}
            height={900}
            className="img"
          />
        </div>
      </div>
      <div className="relative">
        <WhoItForSection />
        <TestimonialSection />
        <PricingSection />
        <CtaSection />
        <MultiSectionSVG className="absolute inset-0 w-full h-full pointer-events-none z-[-2]" />
      </div>
      <FaqSection />
      <FooterCtaSection />
    </>
  );
};

export default Home;
