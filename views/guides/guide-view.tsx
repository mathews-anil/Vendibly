"use client";

import { Guide } from "@/types";
import LinkButton from "@/components/ui/linkButton";
import IconArrowRight from "@/components/icons/icon-arrow-right";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";

export default function GuideView({ guide }: { guide: Guide }) {
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentId = "";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < 150) {
          currentId = section.id;
        }
      });
      setActiveHash(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article className="bg-white">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-56 lg:pb-32 bg-app-blue overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-app-green/10 rounded-full blur-[80px] md:blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-[60px] md:blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="wrapper relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-8">
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/90">
              {guide.settings?.heroTag || "Vendibly Guides"}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-outfit text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
            {guide.title}
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto">
            {guide.lead}
          </p>
        </div>
      </section>

      <div className="wrapper py-12 md:py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-outfit">
                {guide.settings?.tocTitle || "Table of Contents"}
              </h3>
              <nav className="space-y-1 relative border-l border-gray-100 pl-4">
                {guide.sections?.map((section, idx) => {
                  if (!section.title) return null;
                  const id = `section-${idx}`;
                  return (
                    <a
                      key={idx}
                      href={`#${id}`}
                      className={cn(
                        "block text-sm py-2 transition-all duration-200 border-l-2 -ml-[17px] pl-4",
                        activeHash === id
                          ? "text-app-blue font-bold border-app-blue"
                          : "text-gray-500 hover:text-app-blue border-transparent hover:border-gray-200"
                      )}
                    >
                      {section.title}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-12 p-6 bg-app-blue/5 rounded-2xl border border-app-blue/10">
                <h4 className="font-bold text-app-blue mb-2">
                  {guide.settings?.sidebarCta?.title || "Get organized today"}
                </h4>
                <p className="text-sm text-foreground-copy/70 mb-4">
                  {guide.settings?.sidebarCta?.text ||
                    "Stop tracking subscriptions manually."}
                </p>
                <LinkButton
                  text={guide.settings?.sidebarCta?.buttonText || "Start Free"}
                  href={
                    guide.settings?.sidebarCta?.buttonUrl ||
                    "https://app.vendibly.ai/signup"
                  }
                  className="w-full justify-center bg-app-blue text-white text-sm py-3"
                />
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5 md:-mt-16 ">
            <div className="prose prose-base md:prose-lg max-w-none prose-headings:font-outfit prose-headings:font-bold prose-headings:text-app-blue prose-p:text-foreground-copy/80 prose-li:text-foreground-copy/80 prose-strong:text-app-blue">
              {guide.sections?.map((section, idx) => (
                <section
                  key={idx}
                  id={`section-${idx}`}
                  className="scroll-mt-32 mb-12 md:mb-16"
                >
                  {section.title && (
                    <h2
                      className={cn(
                        "text-2xl md:text-3xl font-bold mb-4 md:mb-6",
                        idx === 0 && "mt-0"
                      )}
                    >
                      {section.title}
                    </h2>
                  )}
                  <div className="space-y-6">
                    <PortableText value={section.content} />
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-gray-100">
              <div className="bg-app-blue rounded-2xl md:rounded-[32px] p-6 md:p-10 lg:p-16 text-center overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-app-green/10 rounded-full blur-[40px] md:blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                    {guide.settings?.bottomCta?.title ||
                      "Start tracking your subscriptions automatically"}
                  </h2>
                  <p className="text-white/70 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg">
                    {guide.settings?.bottomCta?.text ||
                      "Join thousands of founders, freelancers, and agencies who trust Vendibly to manage their software spend."}
                  </p>
                  <LinkButton
                    text={
                      guide.settings?.bottomCta?.buttonText ||
                      "Get Started for Free"
                    }
                    href={
                      guide.settings?.bottomCta?.buttonUrl ||
                      "https://app.vendibly.ai/signup"
                    }
                    icon={<IconArrowRight />}
                    iconSize={24}
                    className="bg-white text-app-blue hover:bg-white/90 border-none font-bold px-6 py-3 md:px-8 md:py-4 h-auto text-base md:text-lg w-full md:w-auto justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
