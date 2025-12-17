import IconArrowRight from "@/components/icons/icon-arrow-right";
import LinkButton from "@/components/ui/linkButton";
import { cn } from "@/lib/utils";

interface FinalCtaSectionProps {
  data: any;
  theme: any;
}

export function FinalCtaSection({ data, theme }: FinalCtaSectionProps) {
  if (!data) return null;

  return (
    <section className="bg-white pb-32">
      <div className="wrapper">
        <div
          className={cn(
            "rounded-[48px] p-16 md:p-32 text-center overflow-hidden relative",
            theme.darkSection
          )}
        >
          <div
            className={cn(
              "absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20",
              theme.primaryBg
            )}
          />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl lg:text-[90px] font-bold font-outfit text-white mb-8 leading-[1.05] tracking-tight">
              {data.heading}
            </h2>
            <p className="text-2xl md:text-3xl text-white/60 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
              {data.subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <LinkButton
                text={data.buttonText || "Start free"}
                href={data.buttonUrl || "https://app.vendibly.ai"}
                className={cn(
                  "h-20 px-12 text-xl font-bold bg-white hover:bg-gray-100 border-none rounded-2xl",
                  theme.primaryText
                )}
                icon={<IconArrowRight />}
                iconSize={18}
              />
              {data.footerText && (
                <span className="text-white/40 text-base font-medium">
                  {data.footerText}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
