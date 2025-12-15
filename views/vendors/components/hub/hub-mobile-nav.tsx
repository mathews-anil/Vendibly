"use client";

import { ChevronRight } from "lucide-react";
import { VendorCategory } from "../../vendor-hub-view";

interface HubMobileNavProps {
  categories: VendorCategory[];
  activeCategory: string;
  scrollToCategory: (id: string) => void;
  visible: boolean;
}

export default function HubMobileNav({
  categories,
  activeCategory,
  scrollToCategory,
  visible,
}: HubMobileNavProps) {
  if (!visible) return null;

  return (
    <div className="lg:hidden sticky top-[70px] sm:top-[96px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 py-3 px-4 shadow-sm transition-[top] duration-200">
      <label className="sr-only" htmlFor="mobile-category">
        Select Category
      </label>
      <div className="relative">
        <select
          id="mobile-category"
          value={activeCategory}
          onChange={(e) => scrollToCategory(e.target.value)}
          className="w-full appearance-none bg-gray-50 border border-gray-200 text-foreground text-sm rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-app-blue/20 cursor-pointer font-medium"
        >
          <option value="" disabled>
            Jump to Category...
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-app-blue">
          <ChevronRight className="h-4 w-4 rotate-90" />
        </div>
      </div>
    </div>
  );
}
