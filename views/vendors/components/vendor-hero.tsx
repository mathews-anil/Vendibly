"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { useRef } from "react";

interface VendorHeroProps {
  title: string;
  category: string;
  description: string;
}

export default function VendorHero({
  title,
  category,
  description,
}: VendorHeroProps) {
  const containerRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: Power4.easeInOut, duration: 1 },
      });

      tl.fromTo(
        breadcrumbRef.current,
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0 }
      ).fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        "-=0.8"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-app-blue"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-app-green/10 rounded-full blur-[80px] md:blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-[60px] md:blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="wrapper relative z-10 px-4 md:px-6">
        {/* Breadcrumbs */}
        <nav
          ref={breadcrumbRef}
          className="flex items-center gap-2 text-sm text-white/50 mb-10 font-medium opacity-0"
        >
          <Link href="/vendors" className="hover:text-white transition-colors">
            Vendors
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{title}</span>
        </nav>

        <div
          ref={contentRef}
          className="max-w-5xl flex flex-col md:flex-row items-center gap-8 md:gap-12 opacity-0"
        >
          {/* Logo Placeholder */}
          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl flex items-center justify-center text-4xl md:text-6xl font-bold text-app-blue shadow-2xl shadow-black/20">
            {title.charAt(0)}
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-app-green">
                {category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-6 leading-[1.1] tracking-tight">
              <span className="text-white">
                {title} Subscription & Renewal Tracking
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
