import IconCheckMark from "@/components/icons/icon-check-mark";
import LinkButton from "@/components/ui/linkButton";
import { cn } from "@/lib/utils";
import { SectionTitle } from "./section-title";

interface PricingSectionProps {
  data: any;
  theme: any;
}

export function PricingSection({ data, theme }: PricingSectionProps) {
  if (!data) return null;

  return (
    <section className="bg-white pb-32 pt-10">
      <div className="wrapper">
        <SectionTitle
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
          themeStyles={theme}
        />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          {data.pricingRef?.plans?.map((plan: any, i: number) => {
            const isPro = plan.badge || plan.price !== "0";
            return (
              <div
                key={i}
                className={cn(
                  "rounded-[32px] p-8 lg:p-10 transition-colors relative",
                  isPro
                    ? "bg-[#0B0F19] text-white shadow-2xl"
                    : "bg-white border border-gray-200 hover:border-gray-300"
                )}
              >
                {isPro && plan.badge && (
                  <div className="absolute top-0 right-0 p-8">
                    <div className="bg-app-green text-[#0B0F19] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <h3
                  className={cn(
                    "text-2xl font-bold font-outfit mb-4",
                    isPro ? "text-white" : "text-app-blue"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mb-8 h-12 text-lg",
                    isPro ? "text-white/60" : "text-foreground-copy/70"
                  )}
                >
                  {plan.subtitle}
                </p>

                <LinkButton
                  text={plan.ctaText || "Get Started"}
                  href={plan.ctaUrl || "#"}
                  className={cn(
                    "w-full justify-center mb-8 rounded-xl h-12 font-semibold border",
                    isPro
                      ? "bg-app-blue text-white hover:bg-app-blue/90 border-none"
                      : "bg-gray-50 text-app-blue hover:bg-gray-100 border-gray-200"
                  )}
                />

                <ul className="space-y-4">
                  {plan.features?.map((feat: string, fIdx: number) => (
                    <li
                      key={fIdx}
                      className={cn(
                        "flex items-center gap-3 text-base",
                        isPro ? "text-white/90" : "text-foreground-copy/80"
                      )}
                    >
                      <div
                        className={cn(
                          "size-5 rounded-full flex items-center justify-center shrink-0",
                          isPro ? "bg-app-green" : "bg-app-green/10"
                        )}
                      >
                        <IconCheckMark
                          className={cn(
                            "size-3",
                            isPro ? "text-[#0B0F19]" : "text-app-green"
                          )}
                        />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
