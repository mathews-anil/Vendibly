import { cn } from "@/lib/utils";
import { SectionTitle } from "./section-title";

interface SolutionSectionProps {
  data: any;
  theme: any;
}

export function SolutionSection({ data, theme }: SolutionSectionProps) {
  if (!data) return null;

  return (
    <section className={cn("py-24 lg:py-32", theme.lightBg)}>
      <div className="wrapper">
        <SectionTitle
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
          className="mb-16"
          themeStyles={theme}
        />

        <div className="max-w-5xl mx-auto space-y-8">
          {data.features?.map((feature: any, i: number) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-8 p-10 rounded-[32px] border border-gray-200/50 shadow-sm bg-white"
            >
              <div className="shrink-0">
                <div
                  className={cn(
                    "size-16 rounded-2xl font-outfit font-bold text-2xl flex items-center justify-center bg-gray-50",
                    theme.primaryText
                  )}
                >
                  {i + 1}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-outfit text-app-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground-copy/80 leading-relaxed text-lg max-w-3xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
