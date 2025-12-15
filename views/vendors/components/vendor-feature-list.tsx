"use client";

// Updated: Switched to Brand Colors (Orange/Blue/Green)
import { Check, CreditCard, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { useRef } from "react";

interface FeatureItem {
  title: string;
  icon: "check" | "billing" | "invoice";
  items: string[];
}

interface VendorFeatureListProps {
  features: FeatureItem[];
}

export default function VendorFeatureList({
  features,
}: VendorFeatureListProps) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".feature-card",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: Power4.easeOut,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=100", // Start when top of container hits 100px from bottom of viewport
          },
        }
      );
    },
    { scope: containerRef }
  ); // Scope specifically to this component

  const getIcon = (icon: string) => {
    switch (icon) {
      case "billing":
        return <CreditCard className="w-6 h-6" />;
      case "invoice":
        return <FileText className="w-6 h-6" />;
      case "check":
      default:
        return <Check className="w-6 h-6" />;
    }
  };

  const getColor = (icon: string) => {
    switch (icon) {
      case "billing":
        return "text-app-orange bg-app-orange/10";
      case "invoice":
        return "text-app-blue bg-app-blue/5";
      case "check":
      default:
        return "text-app-green bg-app-green/10";
    }
  };

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white relative">
      <div className="wrapper px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:border-transparent hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 opacity-0"
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                  getColor(feature.icon)
                )}
              >
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold font-outfit text-foreground mb-6">
                {feature.title}
              </h3>
              <ul className="space-y-4">
                {feature.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                    <span className="text-foreground-copy leading-relaxed">
                      {item}
                    </span>
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
