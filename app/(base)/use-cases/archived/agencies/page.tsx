"use client";

import IconArrowRight from "@/components/icons/icon-arrow-right";
import IconCheckMark from "@/components/icons/icon-check-mark";
import IconCaretDown from "@/components/icons/icon-caret-down";
import LinkButton from "@/components/ui/linkButton";
import { cn } from "@/lib/utils";
import { useState } from "react";

/* ---------- Local Components ---------- */
const SectionTitle = ({
  badge,
  title,
  subtitle,
  className,
  dark = false,
  align = "center",
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
  align?: "left" | "center";
}) => (
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
          dark
            ? "bg-white/10 text-white border-white/20"
            : "bg-app-blue/5 text-app-blue border-app-blue/10"
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

export default function AgencyUseCasePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <article className="overflow-hidden relative">
      {/* ───────────────────────────────────────────────────────────────────
          HERO (Feature Section)
          Background: White with creative shapes (Purple/Indigo Theme)
      ─────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-app-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-app-green/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="wrapper relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm mb-10">
            <span className="relative flex size-2.5">
              <span className="relative inline-flex rounded-full size-2.5 bg-app-blue"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-foreground-copy/70">
              Vendibly for Agencies
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-[90px] font-bold font-outfit text-app-blue leading-[1.05] tracking-tight mb-8">
            Manage client tools, <br />
            track internal spend, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-blue via-app-blue to-app-green">
              and rebill with confidence
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-foreground-copy/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            [Placeholder: Agencies juggle dozens of tools for multiple clients.
            Vendibly organizes your software stack so you never miss a renewal
            or billable expense.]
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <LinkButton
              text="Start free with Vendibly"
              href="https://app.vendibly.ai/signup"
              icon={<IconArrowRight />}
              className="h-16 px-10 text-xl font-bold bg-app-blue text-white hover:bg-app-blue/90 shadow-xl rounded-2xl border-none"
            />
            <span className="text-sm font-medium text-foreground-copy/50">
              Connect Gmail or Outlook · No credit card required
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          WHY AGENCIES LOSE CONTROL (Content Section)
          Layout: Sticky Sidebar + Grid
          Background: White
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32 border-t border-gray-100">
        <div className="wrapper">
          <div className="lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sticky Header */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                <SectionTitle
                  badge="The Challenge"
                  title="Why agencies struggle with SaaS sprawl"
                  subtitle="[Placeholder: Managing software for 10+ clients makes it nearly impossible to know who is paying for what.]"
                  align="left"
                  className="mb-8 lg:mb-0"
                />
                <div className="hidden lg:block mt-12 p-8 bg-app-blue/5 rounded-3xl border border-app-blue/10">
                  <p className="text-lg font-medium text-app-blue italic leading-relaxed">
                    &quot;[Placeholder: We lost $5k last year purely on
                    forgotten subscriptions for churned clients.]&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Client tool overlap",
                  desc: "[Placeholder: Buying the same tool twice for different teams or clients.]",
                  emoji: "🔄",
                },
                {
                  title: "Forgot to cancel",
                  desc: "[Placeholder: Client churns, but you keep paying for their dedicated seat.]",
                  emoji: "💸",
                },
                {
                  title: "Rebilling nightmares",
                  desc: "[Placeholder: Manually finding invoices to charge back to clients.]",
                  emoji: "🧾",
                },
                {
                  title: "Shadow IT",
                  desc: "[Placeholder: Designers trying new AI tools without approval.]",
                  emoji: "🕶️",
                },
                {
                  title: "Lost invoices",
                  desc: "[Placeholder: Finance chasing account managers for receipts every month.]",
                  emoji: "🕵️",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="size-12 rounded-xl bg-app-blue/5 text-2xl flex items-center justify-center mb-6 group-hover:bg-app-blue/10 transition-colors">
                    {item.emoji}
                  </div>
                  <h3 className="text-xl font-bold font-outfit text-app-blue mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground-copy/70 leading-relaxed text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
              {/* Mobile quote */}
              <div className="lg:hidden p-8 bg-app-blue/5 rounded-3xl border border-app-blue/10">
                <p className="text-lg font-medium text-app-blue italic leading-relaxed">
                  &quot;[Placeholder: We lost $5k last year purely on forgotten
                  subscriptions for churned clients.]&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          THE STACK (Feature Section)
          Background: Dark Purple/Indigo (Full Width)
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-app-blue py-32 lg:py-40 relative flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-app-green/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

        <div className="wrapper relative z-10">
          <SectionTitle
            badge="The Stack"
            title="Tools modern agencies rely on"
            subtitle="[Placeholder: Creative, Marketing, and Dev tools commonly found in agency stacks.]"
            dark
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                category: "Creative",
                tools: [
                  "Adobe Creative Cloud",
                  "Figma",
                  "Canva",
                  "Envato Elements",
                ],
                color: "bg-pink-500",
              },
              {
                category: "Project Mgmt",
                tools: ["Asana", "Monday.com", "ClickUp", "Trello"],
                color: "bg-blue-500",
              },
              {
                category: "Marketing",
                tools: ["SEMrush", "Ahrefs", "Sprout Social", "Buffer"],
                color: "bg-purple-500",
              },
              {
                category: "Client Comms",
                tools: ["Slack", "Zoom", "Google Workspace", "Loom"],
                color: "bg-yellow-500",
              },
              {
                category: "Development",
                tools: ["Webflow", "WordPress", "Shopify", "Vercel"],
                color: "bg-green-500",
              },
            ].map((group, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 backdrop-blur-md hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl font-bold font-outfit text-white mb-6 flex items-center gap-3">
                  <span
                    className={cn(
                      "size-2.5 rounded-full shadow-[0_0_15px_currentColor]",
                      group.color
                    )}
                  />
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.tools.map((tool, tIdx) => (
                    <li
                      key={tIdx}
                      className="flex items-center gap-3 text-white/70 text-base"
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full opacity-50",
                          group.color
                        )}
                      />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          SOLUTION (Content Section)
          Layout: Alternating Feature Blocks
          Background: Light Purple Tint
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-app-blue/5 py-24 lg:py-32">
        <div className="wrapper">
          <SectionTitle
            badge="The Solution"
            title="Total visibility for agency operations"
            className="mb-16"
          />

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                title: "Separate client vs internal spend",
                content:
                  "[Placeholder: Tag subscriptions to specific clients so you know exactly which costs belong to which project.]",
                bg: "bg-white",
              },
              {
                title: "Automated invoice collection",
                content:
                  "[Placeholder: No more chasing receipt emails. Vendibly pulls them directly from your inbox.]",
                bg: "bg-white",
              },
              {
                title: "Renewal alerts prevents auto-renew",
                content:
                  "[Placeholder: Get notified before expensive annual plans renew, especially for tools you no longer use.]",
                bg: "bg-white",
              },
              {
                title: "Centralized contract storage",
                content:
                  "[Placeholder: Keep all your software licenses and agreements in one searchable vault.]",
                bg: "bg-white",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col md:flex-row gap-8 p-10 rounded-[32px] border border-gray-200/50 shadow-sm",
                  feature.bg
                )}
              >
                <div className="shrink-0">
                  <div className="size-16 rounded-2xl bg-app-blue/10 text-app-blue font-outfit font-bold text-2xl flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-app-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-copy/80 leading-relaxed text-lg max-w-3xl">
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          SCENARIOS (Content Section)
          Layout: Masonry-style Grid
          Background: White
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="wrapper">
          <SectionTitle
            badge="Use Cases"
            title="How agencies actually use Vendibly"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Scenario: Client Offboarding",
                desc: "[Placeholder: Instantly identifying all tools purchased specifically for a client when they leave.]",
              },
              {
                title: "Scenario: Quarterly Budget Reviews",
                desc: "[Placeholder: Showing leadership exactly where the software budget is going.]",
              },
              {
                title: "Scenario: Tool Consolidation",
                desc: "[Placeholder: Realizing three different terms are using three different project management tools.]",
              },
              {
                title: "Scenario: Scaling Operations",
                desc: "[Placeholder: Onboarding new employees without losing track of seat costs.]",
              },
              {
                title: "Scenario: Tax Season",
                desc: "[Placeholder: Having every single software invoice ready for the accountant in one zip file.]",
              },
            ].map((scenario, i) => (
              <div
                key={i}
                className="bg-gray-50 hover:bg-white p-8 rounded-[32px] border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-xs font-bold text-app-green uppercase mb-4 tracking-widest opacity-80">
                  Scenario {i + 1}
                </div>
                <h3 className="text-xl font-bold font-outfit text-app-blue mb-4">
                  {scenario.title}
                </h3>
                <p className="text-foreground-copy/80 text-base leading-relaxed">
                  {scenario.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          FAQs (Content Section)
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white pb-32">
        <div className="wrapper max-w-3xl mx-auto">
          <SectionTitle badge="FAQ" title="Agency FAQs" />
          <div className="space-y-4">
            {[
              {
                q: "Can we track tools for multiple clients separately?",
                a: "[Placeholder Answer: Yes...]",
              },
              {
                q: "Can we connect multiple inboxes?",
                a: "[Placeholder Answer: Yes...]",
              },
              {
                q: "Does Vendibly help with client rebilling?",
                a: "[Placeholder Answer: Yes...]",
              },
              {
                q: "Can Vendibly detect duplicate subscriptions?",
                a: "[Placeholder Answer: Yes...]",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-outfit font-semibold text-app-blue text-lg pr-8">
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      "size-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 border",
                      openFaqIndex === i
                        ? "bg-app-blue text-white border-transparent rotate-180"
                        : "bg-white text-gray-400 border-gray-200"
                    )}
                  >
                    <IconCaretDown className="size-4" />
                  </span>
                </button>
                {openFaqIndex === i && (
                  <div className="px-6 pb-6 pt-0 text-foreground-copy/80 text-base leading-relaxed">
                    <div className="h-px w-full bg-gray-100 mb-4" />
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          PRICING CTA (Feature Section)
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white pb-32">
        <div className="wrapper">
          <div className="bg-app-blue rounded-[48px] p-16 md:p-32 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-app-green/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-outfit text-white mb-12 leading-[1.05]">
                Pricing that suits <br /> small and mid-size agencies
              </h2>
              <p className="text-2xl text-white/60 mb-16 max-w-3xl mx-auto font-outfit">
                [Placeholder: Scale your agency without scaling your chaos.]
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <LinkButton
                  text="Start free with Vendibly"
                  href="https://app.vendibly.ai/signup"
                  className="h-20 px-12 text-2xl font-bold bg-white text-app-blue hover:bg-gray-100 border-none rounded-2xl"
                  icon={<IconArrowRight />}
                />
                <span className="text-white/40 text-base font-medium">
                  No credit card required
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
