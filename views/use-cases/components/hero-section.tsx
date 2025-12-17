import IconArrowRight from "@/components/icons/icon-arrow-right";
import LinkButton from "@/components/ui/linkButton";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  useCase: any;
  theme: any;
}

export function HeroSection({ useCase, theme }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      {/* Abstract shapes */}
      <div
        className={cn(
          "absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none",
          theme.blob1
        )}
      />
      <div
        className={cn(
          "absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none",
          theme.blob2
        )}
      />

      <div className="wrapper relative z-10 text-center max-w-5xl mx-auto">
        {useCase.heroBadge && (
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm mb-10">
            <span className="relative flex size-2.5">
              <span
                className={cn(
                  "relative inline-flex rounded-full size-2.5",
                  theme.primaryBg
                )}
              ></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-foreground-copy/70">
              {useCase.heroBadge}
            </span>
          </div>
        )}

        <h1 className="text-6xl md:text-7xl lg:text-[90px] font-bold font-outfit text-app-blue leading-[1.05] tracking-tight mb-8">
          <span className={theme.textGradient}>{useCase.heroHeading}</span>
        </h1>

        <p className="text-2xl md:text-3xl text-foreground-copy/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
          {useCase.heroSubheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <LinkButton
            text={useCase.heroButtonText || "Start free with Vendibly"}
            href={useCase.heroButtonUrl || "https://app.vendibly.ai/signup"}
            icon={<IconArrowRight />}
            className={cn(
              "h-16 px-10 text-xl font-bold shadow-xl rounded-2xl border-none",
              theme.button
            )}
            iconSize={18}
          />
          {useCase.heroFooterText && (
            <span className="text-sm font-medium text-foreground-copy/50">
              {useCase.heroFooterText}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
