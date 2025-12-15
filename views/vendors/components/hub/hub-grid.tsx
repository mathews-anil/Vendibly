"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { VendorCategory } from "../../vendor-hub-view";

interface HubGridProps {
  categories: VendorCategory[];
  isSearching: boolean;
}

const getThemeClasses = (color: string) => {
  switch (color) {
    case "orange":
      return "bg-app-orange/10 text-app-orange";
    case "green":
      return "bg-app-green/10 text-app-green";
    case "blue":
    default:
      return "bg-app-blue/5 text-app-blue";
  }
};

export default function HubGrid({ categories, isSearching }: HubGridProps) {
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      gridRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 1, delay: 0.5, ease: Power4.easeInOut }
    );
  }, {});

  return (
    <div
      className={cn(
        "space-y-20 opacity-0",
        isSearching ? "col-span-12" : "lg:col-span-9"
      )}
      ref={gridRef}
    >
      {categories.length > 0 ? (
        categories.map((category) => (
          <section id={category.id} key={category.id} className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold font-outfit text-foreground">
                {category.title}
              </h2>
              <div className="h-px flex-1 bg-gray-100" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.vendors.map((vendor) => {
                const vendorColorClass = getThemeClasses(category.color);

                return (
                  <Link
                    key={vendor.title}
                    href={`/vendors/${vendor.slug}`}
                    className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-app-blue/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-transform group-hover:scale-110 group-hover:rotate-3",
                          vendorColorClass
                        )}
                      >
                        {vendor.title.charAt(0)}
                      </div>

                      <div className="bg-gray-50 rounded-full p-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-app-blue" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg font-outfit text-foreground mb-2 group-hover:text-app-blue transition-colors">
                        {vendor.title}
                      </h3>
                      <p className="text-sm text-foreground-copy leading-relaxed line-clamp-2">
                        {vendor.shortDescription ||
                          `Track ${vendor.title} with Vendibly.`}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-foreground-copy/50">
            No vendors found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
