import Image from "next/image";

const contents = [
  {
    title: "Privacy Policy Overview",
    description:
      "We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website.",
  },
  {
    title: "Information We Collect",
    description:
      "We may collect personal information such as your name, email address, and any other details you provide when you contact us or use our services. We also collect non-personal information through cookies and analytics tools to improve your experience.",
  },
  {
    title: "How We Use Your Information",
    description:
      "Your information is used to provide and improve our services, respond to your inquiries, and communicate important updates. We do not sell or share your personal information with third parties except as required by law.",
  },
  {
    title: "Data Security",
    description:
      "We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure.",
  },
  {
    title: "Contact Us",
    description:
      "If you have any questions about our Privacy Policy, please contact us through the information provided on our website.",
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="relative py-10 sm:py-20 2xl:py-36 !pb-0 lg:pb-1.75">
      <div className="absolute left-0 top-0 w-full h-fit isolate z-[-1] max-lg:hidden">
        <Image
          src={"/imgs/Hero.PNG"}
          alt={"top-hero-bg"}
          width={1920}
          height={900}
          className={"img"}
          quality={100}
          priority
        />
      </div>
      <div className="wrapper mt-[88px] sm:mt-[120px] lg:mt-[200px] xl:mt-[300px]">
        <h1 className="title mb-10 sm:mb-16 md:mb-[91px]">Privacy Policy</h1>
        <div className="space-y-10 md:space-y-14 lg:space-y-[91px] pb-10 sm:pb-[78px] lg:pb-[123px] border-b border-b-foreground/15">
          {contents.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[265px_1fr] gap-5 lg:gap-[84px]"
            >
              <h2 className="text-lg/[23px] md:text-xl/[26px] lg:text-2xl/[31px] font-semibold font-outfit">
                {item.title}
              </h2>
              <p className="text-xs/[18px] sm:text-sm/[22px] lg:text-base/[27px] font-inter text-foreground-copy whitespace-pre-wrap">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
