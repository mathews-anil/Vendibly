import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
  align?: "left" | "center";
  themeStyles: any;
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  className,
  dark = false,
  align = "center",
  themeStyles,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-20",
        align === "center"
          ? "text-center max-w-4xl mx-auto"
          : "text-left max-w-xl",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border",
            dark ? "bg-white/10 text-white border-white/20" : themeStyles.badge
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-4xl md:text-5xl font-bold font-outfit leading-[1.1] mb-6 tracking-tight",
          dark ? "text-white" : "text-app-blue"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg leading-relaxed font-light",
            dark ? "text-white/70" : "text-foreground-copy/80",
            align === "center" ? "max-w-2xl mx-auto" : ""
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
