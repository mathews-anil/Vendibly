import { cn } from "@/lib/utils";
import { SectionTitle } from "./section-title";

interface ScenariosSectionProps {
  data: any;
  theme: any;
}

export function ScenariosSection({ data, theme }: ScenariosSectionProps) {
  if (!data) return null;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="wrapper">
        <SectionTitle
          badge={data.badge}
          title={data.title}
          themeStyles={theme}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {data.scenarios?.map((scenario: any, i: number) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-white p-8 rounded-[32px] border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={cn(
                  "text-xs font-bold uppercase mb-4 tracking-widest opacity-80",
                  theme.primaryText
                )}
              >
                Scenario {i + 1}
              </div>
              <h3 className="text-xl font-bold font-outfit text-app-blue mb-4">
                {scenario.title}
              </h3>
              <p className="text-foreground-copy/80 text-base leading-relaxed">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
