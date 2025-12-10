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

export default function StartupUseCasePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <article className="overflow-hidden relative">
      {/* ───────────────────────────────────────────────────────────────────
          HERO (Feature Section)
          Background: White with creative shapes
      ─────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-app-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-app-green/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="wrapper relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm mb-10">
            <span className="relative flex size-2.5">
              <span className="relative inline-flex rounded-full size-2.5 bg-app-green"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-foreground-copy/70">
              Vendibly for Startups
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-[90px] font-bold font-outfit text-app-blue leading-[1.05] tracking-tight mb-8">
            Track every SaaS <br />
            subscription, renewal, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-green via-app-blue to-app-blue">
              and invoice automatically
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-foreground-copy/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            Startups move fast and accumulate tools even faster. Vendibly
            connects to Gmail or Outlook and organizes your entire stack into
            one clean dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <LinkButton
              text="Start free with Vendibly"
              href="https://app.vendibly.ai/signup"
              icon={<IconArrowRight />}
              className="h-16 px-10 text-xl font-bold bg-app-blue text-white hover:bg-app-blue/90 shadow-xl rounded-2xl"
            />
            <span className="text-sm font-medium text-foreground-copy/50">
              Connect Gmail or Outlook · No credit card required
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          WHY STARTUPS LOSE CONTROL (Content Section)
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
                  badge="The Problem"
                  title="Why startups lose control of their SaaS stack"
                  subtitle="Startup SaaS sprawl is not a mystery. It happens for predictable reasons."
                  align="left"
                  className="mb-8 lg:mb-0"
                />
                <div className="hidden lg:block mt-12 p-8 bg-app-blue/5 rounded-3xl border border-app-blue/10">
                  <p className="text-lg font-medium text-app-blue italic leading-relaxed">
                    &quot;Startups don’t waste money because they’re reckless —
                    they waste money because subscription visibility is broken
                    by default.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Anyone can buy software",
                  desc: "Engineers buy dev tools. Marketing buys analytics. Founders buy everything else.",
                  emoji: "💳",
                },
                {
                  title: "Trials quietly convert",
                  desc: "Figma. Intercom. Loom. Free trials become $20–$150/user monthly, silently.",
                  emoji: "👻",
                },
                {
                  title: "No one sees renewals",
                  desc: "Slack, HubSpot, GitHub... They renew automatically — often without a reminder.",
                  emoji: "📅",
                },
                {
                  title: "Invoices scatter everywhere",
                  desc: "Some go to billing@, some to personal emails, some to outdated accounts.",
                  emoji: "📨",
                },
                {
                  title: "Spreadsheets die fast",
                  desc: "They start clean. They die fast. Nobody updates them manually.",
                  emoji: "📉",
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
                  &quot;Subscription visibility is broken by default.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          THE STACK (Feature Section)
          Background: Dark Navy (Full Width)
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0B0F19] py-32 lg:py-40 relative flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-app-blue/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-app-green/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

        <div className="wrapper relative z-10">
          <SectionTitle
            badge="The Stack"
            title="What SaaS tools startups actually pay for"
            subtitle="Real vendors. Real subscriptions. All detectable by Vendibly."
            dark
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                category: "Product & Design",
                tools: ["Figma", "Miro", "Zeplin", "Adobe Creative Cloud"],
                color: "bg-pink-500",
              },
              {
                category: "Engineering & DevOps",
                tools: [
                  "GitHub",
                  "Sentry",
                  "LogRocket",
                  "Vercel",
                  "Render",
                  "Datadog",
                  "PostHog",
                ],
                color: "bg-blue-500",
              },
              {
                category: "Collaboration & Ops",
                tools: [
                  "Slack",
                  "Notion",
                  "Google Workspace",
                  "Zoom",
                  "Loom",
                  "Calendly",
                ],
                color: "bg-yellow-500",
              },
              {
                category: "Marketing & Growth",
                tools: [
                  "Webflow",
                  "Framer",
                  "Mailchimp",
                  "HubSpot Starter",
                  "Ahrefs",
                  "SEMrush",
                  "Supermetrics",
                ],
                color: "bg-orange-500",
              },
              {
                category: "Support & Comms",
                tools: ["Intercom", "Crisp", "Zendesk"],
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
          <div className="text-center mt-12">
            <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">
              And 20,000+ more apps
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          SOLUTION (Content Section)
          Layout: Alternating Feature Blocks
          Background: Light Gray
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="wrapper">
          <SectionTitle
            badge="The Solution"
            title="How Vendibly helps startups stay lean and in control"
            className="mb-16"
          />

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                title: "Email Sync finds subscriptions",
                content:
                  "Connect Gmail or Outlook. Vendibly scans the last 6 months of emails to identify active subscriptions, billing cycles, and price changes instantly.",
                bg: "bg-white",
              },
              {
                title: "A clean vendor dashboard",
                content:
                  "Every tool becomes a structured vendor entry with name, amount, billing period, and next renewal date. You finally see your real SaaS footprint.",
                bg: "bg-white",
              },
              {
                title: "Smart renewal alerts",
                content:
                  "Vendibly warns you 7, 3, and 1 day before a subscription renews. This gives you time to cancel or renegotiate before charges hit.",
                bg: "bg-white",
              },
              {
                title: "Renewal calendar for forecasting",
                content:
                  "See all renewals coming this week or month. Startups love speed but need predictability. This is where chaos becomes clarity.",
                bg: "bg-white",
              },
              {
                title: "Auto-organized invoice vault",
                content:
                  "Vendibly stores all SaaS invoices, billing PDFs, and contracts. When tax season or audits come, everything is already in one place.",
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
                  <div className="size-16 rounded-2xl bg-gray-100 text-app-blue font-outfit font-bold text-2xl flex items-center justify-center">
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

          <div className="mt-16 text-center">
            <LinkButton
              text="Start free with Vendibly"
              href="https://app.vendibly.ai/signup"
              icon={<IconArrowRight />}
              className="bg-app-blue text-white hover:bg-app-blue/90 h-14 px-10 rounded-xl text-lg font-bold shadow-lg shadow-app-blue/20"
            />
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
            title="How real startups use Vendibly"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Cleaning up SaaS bloat",
                desc: "Vendibly exposes duplicate subscriptions and old trials eating budget.",
              },
              {
                title: "Preparing for renewals",
                desc: "Teams finally see when tools like HubSpot, GitHub, or Notion renew.",
              },
              {
                title: "Post-fundraise discipline",
                desc: "Visibility matters when you go from chaos to structured burn.",
              },
              {
                title: "Onboarding finance hires",
                desc: "They get instant clarity instead of spending weeks reconstructing spend.",
              },
              {
                title: "Improving margins",
                desc: "Knowing true software spend influences hiring, pricing, profitability, and runway.",
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
          PRICING (Content Section)
          Layout: Standard
          Background: White
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white pb-32 pt-10">
        <div className="wrapper">
          <SectionTitle badge="Pricing" title="Pricing for early-stage teams" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            {/* Free Plan */}
            <div className="bg-white border border-gray-200 rounded-[32px] p-8 lg:p-10 hover:border-gray-300 transition-colors">
              <h3 className="text-2xl font-bold font-outfit text-app-blue mb-4">
                Free
              </h3>
              <p className="text-foreground-copy/70 mb-8 h-12 text-lg">
                Perfect for founders who want clarity now.
              </p>
              <LinkButton
                text="Start Free"
                href="https://app.vendibly.ai/signup"
                className="w-full justify-center bg-gray-50 text-app-blue hover:bg-gray-100 border border-gray-200 mb-8 rounded-xl h-12 font-semibold"
              />
              <ul className="space-y-4">
                {[
                  "One-time inbox scan",
                  "Up to 5 vendors",
                  "30-day renewal calendar",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-foreground-copy/80 text-base"
                  >
                    <div className="size-5 rounded-full bg-app-green/10 flex items-center justify-center shrink-0">
                      <IconCheckMark className="size-3 text-app-green" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-[#0B0F19] text-white rounded-[32px] p-8 lg:p-10 shadow-2xl">
              <div className="absolute top-0 right-0 p-8">
                <div className="bg-app-green text-[#0B0F19] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              </div>

              <h3 className="text-2xl font-bold font-outfit mb-4">Pro</h3>
              <p className="text-white/60 mb-8 h-12 text-lg">
                Built for teams that want continuous visibility.
              </p>
              <LinkButton
                text="Get Started"
                href="https://app.vendibly.ai/signup"
                className="w-full justify-center bg-app-blue text-white hover:bg-app-blue/90 border-none mb-8 rounded-xl h-12 font-bold"
              />
              <ul className="space-y-4">
                {[
                  "Unlimited vendors",
                  "Weekly inbox sync",
                  "Full-year renewal calendar",
                  "Contract vault + AI summaries",
                  "Exports and reports",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white/90 text-base"
                  >
                    <div className="size-5 rounded-full bg-app-green flex items-center justify-center shrink-0">
                      <IconCheckMark className="size-3 text-[#0B0F19]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          FAQs (Content Section)
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white pb-32">
        <div className="wrapper max-w-3xl mx-auto">
          <SectionTitle badge="FAQ" title="Startup FAQs" />
          <div className="space-y-4">
            {[
              {
                q: "We have multiple team members using different emails. Will Vendibly still work?",
                a: "Yes. Connect any inbox where invoices land. Many startups forward all SaaS receipts to a shared billing inbox.",
              },
              {
                q: "Can Vendibly track multi-year or enterprise contracts?",
                a: "Yes. Upload the contract and Vendibly extracts the renewal window automatically.",
              },
              {
                q: "Is this a replacement for a full procurement system?",
                a: "No. Vendibly is intentionally lighter and made for early-stage teams who need clarity, not bureaucracy.",
              },
              {
                q: "How accurate is renewal tracking?",
                a: "Vendibly extracts renewals from invoices, receipts, contract files, and past billing patterns.",
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
          FINAL CTA (Feature Section)
          Background: Bold Dark Navy with Gradients
      ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white pb-32">
        <div className="wrapper">
          <div className="bg-[#0B0F19] rounded-[48px] p-16 md:p-32 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-app-blue/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-app-green/20 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-outfit text-white mb-12 leading-[1.05]">
                Know exactly what your <br /> startup is paying for.
              </h2>
              <p className="text-2xl text-white/60 mb-16 max-w-3xl mx-auto font-outfit">
                Every subscription. Every invoice. Every renewal.
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
