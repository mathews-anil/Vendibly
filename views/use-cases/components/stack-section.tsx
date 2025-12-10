import { cn } from "@/lib/utils";
import { SectionTitle } from "./section-title";

interface StackSectionProps {
  data: any;
  theme: any;
}

export function StackSection({ data, theme }: StackSectionProps) {
  if (!data) return null;

  return (
    <section
      className={cn(
        "py-32 lg:py-40 relative flex flex-col justify-center overflow-hidden",
        theme.darkSection
      )}
    >
      {/* Abstract shapes for bg */}
      <div
        className={cn(
          "absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 opacity-20",
          theme.primaryBg
        )}
      />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="wrapper relative z-10">
        <SectionTitle
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
          dark
          themeStyles={theme}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {data.categories?.map((group: any, idx: number) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl font-bold font-outfit text-white mb-6 flex items-center gap-3">
                <span
                  className={cn(
                    "size-2.5 rounded-full shadow-[0_0_15px_currentColor]",
                    group.color || "bg-white"
                  )}
                />
                {group.categoryName}
              </h3>
              <ul className="space-y-3">
                {group.tools?.map((tool: string, tIdx: number) => (
                  <li
                    key={tIdx}
                    className="flex items-center gap-3 text-white/70 text-base"
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full opacity-50",
                        group.color || "bg-white"
                      )}
                    />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
