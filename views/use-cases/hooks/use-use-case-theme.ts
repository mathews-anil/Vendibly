import { useMemo } from "react";

const THEME_CONFIG: Record<string, any> = {
  startup: {
    badge: "bg-green-500/10 text-green-600 border-green-500/20",
    textGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500",
    primaryBg: "bg-green-500",
    primaryText: "text-green-600",
    button: "bg-green-600 text-white hover:bg-green-700",
    darkSection: "bg-[#0B0F19]",
    accents: "green",
    quoteText: "text-green-700",
    lightBg: "bg-green-500/5",
    blob1: "bg-green-500/5",
    blob2: "bg-blue-500/5",
  },
  agency: {
    badge: "bg-app-blue/5 text-app-blue border-app-blue/10",
    textGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-app-blue via-app-blue to-app-green",
    primaryBg: "bg-app-blue",
    primaryText: "text-app-blue",
    button: "bg-app-blue text-white hover:bg-app-blue/90",
    darkSection: "bg-app-blue",
    accents: "blue",
    quoteText: "text-app-blue",
    lightBg: "bg-app-blue/5",
    blob1: "bg-app-blue/5",
    blob2: "bg-app-green/5",
  },
  freelancer: {
    badge: "bg-app-orange/10 text-app-orange border-app-orange/20",
    textGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-app-orange via-app-orange to-red-500",
    primaryBg: "bg-app-orange",
    primaryText: "text-app-orange",
    button: "bg-app-orange text-white hover:bg-app-orange/90",
    darkSection: "bg-app-blue", // Dark blue bg for "Stack"/CTA as requested
    accents: "orange",
    quoteText: "text-app-orange",
    lightBg: "bg-app-orange/5",
    blob1: "bg-app-orange/5",
    blob2: "bg-app-orange/5",
  },
};

export function useUseCaseTheme(themeKey: string = "startup") {
  const theme = useMemo(() => {
    return THEME_CONFIG[themeKey] || THEME_CONFIG.startup;
  }, [themeKey]);

  return theme;
}
