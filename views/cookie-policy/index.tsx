import Image from "next/image";

const contents = [
  {
    title: "Cookie Policy Overview",
    description:
      "This Cookie Policy explains how we use cookies and similar technologies on our website. By using our site, you consent to the use of cookies as described in this policy.",
  },
  {
    title: "What Are Cookies?",
    description:
      "Cookies are small text files stored on your device by your web browser. They help us remember your preferences, understand how you use our site, and improve your experience.",
  },
  {
    title: "Types of Cookies We Use",
    description:
      "We use both session and persistent cookies for essential website functionality, analytics, and to remember your preferences. Third-party cookies may also be used for analytics and advertising purposes.",
  },
  {
    title: "Managing Cookies",
    description:
      "You can control and delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.",
  },
  {
    title: "Contact Us",
    description:
      "If you have any questions about our Cookie Policy, please contact us through the information provided on our website.",
  },
];

const CookiePolicy = () => {
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
        <h1 className="title mb-10 sm:mb-16 md:mb-[91px]">Cookie Policy</h1>
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

export default CookiePolicy;
