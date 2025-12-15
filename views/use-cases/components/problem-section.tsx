import { cn } from "@/lib/utils";
import { SectionTitle } from "./section-title";

interface ProblemSectionProps {
  data: any;
  theme: any;
}

export function ProblemSection({ data, theme }: ProblemSectionProps) {
  if (!data) return null;

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-gray-100">
      <div className="wrapper">
        <div className="lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Sticky Header */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <SectionTitle
                badge={data.badge}
                title={data.title}
                subtitle={data.subtitle}
                align="left"
                className="mb-8 lg:mb-0"
                themeStyles={theme}
              />
              {data.sidebarQuote && (
                <div
                  className={cn(
                    "hidden lg:block mt-12 p-8 rounded-3xl border",
                    theme.lightBg,
                    theme.badge.split(" ")[2]
                  )}
                >
                  <p
                    className={cn(
                      "text-lg font-medium italic leading-relaxed",
                      theme.quoteText
                    )}
                  >
                    &quot;{data.sidebarQuote}&quot;
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Content Grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {data.points?.map((item: any, i: number) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={cn(
                    "size-12 rounded-xl text-2xl flex items-center justify-center mb-6 transition-colors",
                    theme.lightBg
                  )}
                >
                  {item.emoji || "🔹"}
                </div>
                <h3 className="text-xl font-bold font-outfit text-app-blue mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground-copy/70 leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            ))}
            {/* Mobile quote */}
            {data.sidebarQuote && (
              <div
                className={cn(
                  "lg:hidden p-8 rounded-3xl border",
                  theme.lightBg,
                  theme.badge.split(" ")[2]
                )}
              >
                <p
                  className={cn(
                    "text-lg font-medium italic leading-relaxed",
                    theme.quoteText
                  )}
                >
                  &quot;{data.sidebarQuote}&quot;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
