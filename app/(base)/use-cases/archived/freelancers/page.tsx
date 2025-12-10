"use client";

import IconArrowRight from "@/components/icons/icon-arrow-right";
import IconCheckMark from "@/components/icons/icon-check-mark";
import IconCaretDown from "@/components/icons/icon-caret-down";
import LinkButton from "@/components/ui/linkButton";
import { cn } from "@/lib/utils";
import { useState } from "react";

/* ---------- Local Components (Reused) ---------- */
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
            : "bg-app-orange/10 text-app-orange border-app-orange/20"
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

export default function FreelancerUseCasePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <article className="overflow-hidden relative">
      {/* ───────────────────────────────────────────────────────────────────
          HERO (Feature Section)
          Background: White with creative shapes (Orange/Warm Theme)
      ─────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-app-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-app-orange/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="wrapper relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm mb-10">
            <span className="relative flex size-2.5">
              <span className="relative inline-flex rounded-full size-2.5 bg-app-orange"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-foreground-copy/70">
              Vendibly for Freelancers
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-[90px] font-bold font-outfit text-app-blue leading-[1.05] tracking-tight mb-8">
            Stay on top of your <br />
            subscriptions so you <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-orange via-app-orange to-red-500">
              keep more of your profit
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-foreground-copy/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            [Placeholder: As a freelancer, every dollar saved is a dollar
            earned. Vendibly helps you track your business expenses
            effortlessy.]
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <LinkButton
              text="Start free with Vendibly"
              href="https://app.vendibly.ai/signup"
              icon={<IconArrowRight />}
              className="h-16 px-10 text-xl font-bold bg-app-orange text-white hover:bg-app-orange/90 shadow-xl rounded-2xl border-none"
            />
            <span className="text-sm font-medium text-foreground-copy/50">
              Connect Gmail or Outlook · No credit card required
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          THE CHALLENGE (Content Section)
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
                  title="Why freelancers overpay for software"
                  subtitle="[Placeholder: Small recurring costs add up to thousands in lost income every year.]"
                  align="left"
                  className="mb-8 lg:mb-0"
                />
                <div className="hidden lg:block mt-12 p-8 bg-app-orange/5 rounded-3xl border border-app-orange/10">
                  <p className="text-lg font-medium text-app-orange italic leading-relaxed">
                    &quot;[Placeholder: I realized I was paying for 3 different
                    calendar apps at the same time.]&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Forgotten free trials",
                  desc: "[Placeholder: Signing up for a tool to test it, then forgetting to cancel before the charge hits.]",
                  emoji: "🕰️",
                },
                {
                  title: "Personal vs Business",
                  desc: "[Placeholder: Having hard time separating what is tax deductible and what is personal.]",
                  emoji: "🧾",
                },
                {
                  title: "Subscriptions creep",
                  desc: "[Placeholder: $10 here, $20 there. Suddenly you are spending $500/mo on tools.]",
                  emoji: "📈",
                },
                {
                  title: "Missed deductions",
                  desc: "[Placeholder: Forgetting to claim software expenses because invoices are lost in email.]",
                  emoji: "💰",
                },
                {
                  title: "Time wasted admin",
                  desc: "[Placeholder: Spending hours every month finding receipts for your accountant.]",
                  emoji: "⏳",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="size-12 rounded-xl bg-app-orange/5 text-2xl flex items-center justify-center mb-6 group-hover:bg-app-orange/10 transition-colors">
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
              <div className="lg:hidden p-8 bg-app-orange/5 rounded-3xl border border-app-orange/10">
                <p className="text-lg font-medium text-app-orange italic leading-relaxed">
                  &quot;[Placeholder: I realized I was paying for 3 different
                  calendar apps at the same time.]&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          THE STACK (Feature Section)
          Background: Warm Dark Brown/Red (Full Width)
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-app-blue py-32 lg:py-40 relative flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-app-orange/20 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

        <div className="wrapper relative z-10">
          <SectionTitle
            badge="The Stack"
            title="Essential freelancer toolkit"
            subtitle="[Placeholder: The most common tools used by independent professionals.]"
            dark
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                category: "Productivity",
                tools: ["Notion", "Evernote", "Todoist", "Calendly"],
                color: "bg-green-500",
              },
              {
                category: "Finance",
                tools: ["QuickBooks", "FreshBooks", "Wave", "PayPal"],
                color: "bg-blue-500",
              },
              {
                category: "Design/Creative",
                tools: ["Canva", "Figma", "Adobe CC", "Webflow"],
                color: "bg-pink-500",
              },
              {
                category: "Communication",
                tools: ["Slack", "Zoom", "Google Meet", "Loom"],
                color: "bg-yellow-500",
              },
              {
                category: "Writing/AI",
                tools: ["ChatGPT", "Jasper", "Grammarly", "Copy.ai"],
                color: "bg-purple-500",
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
          Background: Light Orange Tint
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-app-orange/5 py-24 lg:py-32">
        <div className="wrapper">
          <SectionTitle
            badge="The Solution"
            title="Your personal finance assistant"
            className="mb-16"
          />

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                title: "Catch every deduction",
                content:
                  "[Placeholder: Because Vendibly connects to email, it finds invoices you might have missed in your bank statement.]",
                bg: "bg-white",
              },
              {
                title: "One click unsubscribe",
                content:
                  "[Placeholder: See a tool you don't use anymore? Get the link to cancel it instantly.]",
                bg: "bg-white",
              },
              {
                title: "Contract management",
                content:
                  "[Placeholder: Keep track of your own freelance contracts and client agreements in one place.]",
                bg: "bg-white",
              },
              {
                title: "Monthly spend alerts",
                content:
                  "[Placeholder: Get a notification if your monthly software spend exceeds your budget.]",
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
                  <div className="size-16 rounded-2xl bg-app-orange/10 text-app-orange font-outfit font-bold text-2xl flex items-center justify-center">
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
            title="How freelancers actually use Vendibly"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Scenario 5: Cleaning up old inboxes",
                desc: "[Placeholder: Connecting an old work email to find forgotten subscriptions.]",
              },
              {
                title: "Scenario: Tax Prep Week",
                desc: "[Placeholder: Downloading all PDF invoices for the year in one click.]",
              },
              {
                title: "Scenario: Client Reimbursement",
                desc: "[Placeholder: Proving to a client that you paid for a specific stock image or font.]",
              },
              {
                title: "Scenario: Cash Flow Crunch",
                desc: "[Placeholder: identifying which $50/mo subscriptions can be paused to save cash.]",
              },
              {
                title: "Scenario: New Laptop Setup",
                desc: "[Placeholder: Knowing exactly which apps to install because you have a full list.]",
              },
            ].map((scenario, i) => (
              <div
                key={i}
                className="bg-gray-50 hover:bg-white p-8 rounded-[32px] border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-xs font-bold text-app-orange uppercase mb-4 tracking-widest opacity-80">
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
          <SectionTitle badge="FAQ" title="Freelancer FAQs" />
          <div className="space-y-4">
            {[
              {
                q: "Do I need accounting knowledge?",
                a: "[Placeholder Answer: No...]",
              },
              {
                q: "What if I use more than one email?",
                a: "[Placeholder Answer: Yes...]",
              },
              {
                q: "Will Vendibly mix work and personal tools?",
                a: "[Placeholder Answer: No...]",
              },
              {
                q: "Do I have to upload invoices manually?",
                a: "[Placeholder Answer: No...]",
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
                        ? "bg-app-orange text-white border-transparent rotate-180"
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
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-app-orange/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-outfit text-white mb-12 leading-[1.05]">
                Pricing that makes <br /> sense for freelancers
              </h2>
              <p className="text-2xl text-white/60 mb-16 max-w-3xl mx-auto font-outfit">
                [Placeholder: Simple, affordable pricing to keep your overhead
                low.]
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <LinkButton
                  text="Start free with Vendibly"
                  href="https://app.vendibly.ai/signup"
                  className="h-20 px-12 text-2xl font-bold bg-white text-app-orange hover:bg-gray-100 border-none rounded-2xl"
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
