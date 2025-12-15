"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { VendorCategory } from "../../vendor-hub-view";

interface HubSidebarProps {
  categories: VendorCategory[];
  activeCategory: string;
  scrollToCategory: (id: string) => void;
  visible: boolean;
}

export default function HubSidebar({
  categories,
  activeCategory,
  scrollToCategory,
  visible,
}: HubSidebarProps) {
  const sidebarRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sidebarRef.current,
      { autoAlpha: 0, x: -20 },
      { autoAlpha: 1, x: 0, duration: 1, delay: 0.3, ease: Power4.easeInOut }
    );
  }, {});

  if (!visible) return null;

  return (
    <aside
      className="hidden lg:block lg:col-span-3 sticky top-32"
      ref={sidebarRef}
    >
      <h3 className="text-xs font-bold uppercase tracking-widest text-foreground-copy/60 mb-6 pl-3">
        Categories
      </h3>
      <nav className="space-y-1 relative border-l border-gray-100 pl-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => scrollToCategory(category.id)}
            className={cn(
              "w-full text-left py-2 text-sm transition-all duration-200 border-l-2 -ml-[17px] pl-4 block",
              activeCategory === category.id
                ? "text-app-blue font-bold border-app-blue bg-transparent"
                : "text-foreground-copy hover:text-app-blue border-transparent hover:border-gray-200"
            )}
          >
            {category.title}
          </button>
        ))}
      </nav>
    </aside>
  );
}
