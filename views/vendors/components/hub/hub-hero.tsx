"use client";

import { Search } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";

interface HubHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function HubHero({ searchQuery, setSearchQuery }: HubHeroProps) {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      heroRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 1, ease: Power4.easeInOut }
    );
  }, {});

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 bg-app-blue overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-app-green/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div
        className="wrapper relative z-10 px-4 md:px-6 text-center opacity-0"
        ref={heroRef}
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 ring-1 ring-white/10 shadow-lg shadow-black/20">
          <span className="w-2 h-2 rounded-full bg-app-green animate-pulse" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-white/80">
            Auto-Detection Enabled
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-outfit text-white mb-6 tracking-tight leading-[1.1]">
          Vendibly{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-green to-white">
            Supported Vendors
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          We automatically detect, track, and organize subscriptions from these
          tools.
        </p>

        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-white/50 group-focus-within:text-app-green transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search 100+ supported integrations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-app-green/50 focus:outline-none focus:ring-1 focus:ring-app-green/50 transition-all shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
