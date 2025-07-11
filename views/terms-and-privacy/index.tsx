import Image from "next/image";

const contents = [
  {
    title: "Personal Statement",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "What are cookies?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
  },
  {
    title: "Personal Statement",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "What information do we gather specifically?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  },
  {
    title: "Website Media",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const TermsAndPrivacy = () => {
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

      {/* Content */}
      <div className="wrapper mt-[88px] sm:mt-[120px] lg:mt-[200px] xl:mt-[300px]">
        {/* Heading */}
        <h1 className="title mb-10 sm:mb-16 md:mb-[91px]">Terms and Privacy</h1>

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

export default TermsAndPrivacy;
