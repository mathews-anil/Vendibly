import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../sanity/env";

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.SANITY_API_TOKEN,
});

const guides = [
  {
    title:
      "How Email Sync Finds All Your Subscriptions in Gmail and Outlook Automatically",
    slug: "find-subscriptions-in-gmail-and-outlook",
    seoTitle:
      "Vendibly | Email Sync: Find All Your Subscriptions in Gmail and Outlook Automatically",
    seoDescription:
      "Vendibly’s email sync connects to Gmail or Outlook, scans the last 6 months of receipts and billing emails, and automatically finds your subscriptions, renewal dates, and invoices so you can track everything in one dashboard.",
    lead: "Most people have no idea how many subscriptions they are actually paying for. Charges sit in email receipts, billing notifications, and “your trial is renewing” messages that you either swipe away or never see. Instead of manually checking bank statements or scrolling through years of emails, Vendibly’s Email sync feature connects to Gmail or Outlook, scans your inbox, and automatically builds a complete picture of your subscriptions and renewals. This article explains exactly how that works, why it is safe, and how it helps you stay ahead of renewals without spreadsheets or manual tracking.",
    featured: true,
    icon: "/icons/email-sync.png",
    sections: [
      {
        title: "Why inbox-based subscription tracking works so well",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "When you sign up for a SaaS tool, streaming service, or business app, almost everything important passes through your inbox:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [{ _type: "span", text: "Welcome emails" }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [{ _type: "span", text: "Invoice PDFs and receipts" }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              { _type: "span", text: "“Your plan has renewed” notifications" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              { _type: "span", text: "“Your card is expiring” notices" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              { _type: "span", text: "Trial ending and price change warnings" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Consumer and business subscription apps increasingly rely on inbox data or SMS to track recurring payments and subscriptions, because those messages contain reliable structured information about vendors, amounts, and billing cycles.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [{ _type: "span", text: "The pattern is proven:" }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "number",
            children: [
              {
                _type: "span",
                text: "Email is the single source of truth for subscriptions.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "number",
            children: [
              {
                _type: "span",
                text: "If you can read those billing signals reliably, you can reconstruct the subscription list.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly takes that same idea and builds it specifically for freelancers, startups, and small teams who need subscription tracking plus renewal intelligence rather than just a consumer bill list.",
              },
            ],
          },
        ],
      },
      {
        title: "What Vendibly’s Email sync actually does",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "At a high level, Email sync does four things:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "number",
            children: [
              {
                _type: "span",
                text: "Connects to your inbox securely using OAuth (Gmail or Outlook)",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "number",
            children: [
              {
                _type: "span",
                text: "Scans up to the last 6 months of subscription-related emails",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "number",
            children: [
              {
                _type: "span",
                text: "Uses AI to extract vendors, amounts, billing periods, and renewal dates",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "number",
            children: [
              {
                _type: "span",
                text: "Creates structured vendor records and a renewal calendar inside Vendibly",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              { _type: "span", text: "Step 1 – Secure connection via OAuth" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "When you click Email sync from your onboarding or dashboard:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "You choose Gmail or Outlook / Microsoft 365",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "You complete the standard OAuth flow directly with Google or Microsoft",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Vendibly never sees your password and cannot send emails on your behalf",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly only requests the scopes it needs to:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              { _type: "span", text: "Read email headers and bodies" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Access invoice attachments and billing messages",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "For Pro/Plus, run periodic scans in the background",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "No sending, deleting, or editing permissions are required.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              { _type: "span", text: "Step 2 – One-time historical scan" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Once OAuth succeeds, Vendibly performs a single historical scan:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              { _type: "span", text: "Time window: last 6 months of emails" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Sources: PDF invoices, HTML receipts, Payment confirmations, “Your plan renewed” messages, Subscription notifications",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Emails are filtered and parsed specifically for vendor subscriptions and contracts, with attachment-first parsing and AI extraction.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              { _type: "span", text: "For Free users:", marks: ["strong"] },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [{ _type: "span", text: "The scan runs once." }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Vendibly disconnects the OAuth token after the scan completes.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "You see “Last scanned: [timestamp] (Vendibly Free)” and a prompt to upgrade if you want ongoing scans.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "For Pro / Plus users:",
                marks: ["strong"],
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "The same 6-month scan runs on upgrade or first connection.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "OAuth is retained (securely) for ongoing scans.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "You see both “Last scanned” and “Next automatic scan” in the UI.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              {
                _type: "span",
                text: "Step 3 – AI extraction and vendor creation",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Behind the scenes, Vendibly uses the VendoIQ parsing layer to turn messy email content into clean vendor records.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "For each relevant email, the system tries to extract:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [{ _type: "span", text: "Vendor name (normalized)" }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              { _type: "span", text: "Amount (and currency, where present)" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Billing period (monthly, yearly, quarterly, etc.)",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Renewal date or next expected charge date",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Status (active, cancelled, trial, expired)",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Contract details when present (uploaded contracts or attached PDFs)",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Those fields become structured entries in the Vendors table and feed:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [{ _type: "span", text: "Your vendor list" }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [{ _type: "span", text: "Your renewal calendar" }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              { _type: "span", text: "Your upcoming payments summary" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              { _type: "span", text: "Risk markers and later AI summaries" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Because the logic prioritizes attachment parsing and deduplication, duplicate emails do not create duplicate vendors. Vendor names are normalized and combined with billing periods and dates to avoid clutter.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              {
                _type: "span",
                text: "Step 4 – Weekly incremental scans (Pro / Plus)",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "On Pro and Plus plans, Vendibly schedules a weekly incremental scan:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "It checks only new emails since the last scan",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "It looks for new subscriptions, renewals, invoices, and notices",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "It updates vendor records and the renewal calendar with new data",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "If the user triggers a manual “Scan now” action, they see:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              { _type: "span", text: "“Scanning your inbox for new vendors…”" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Then “Scan complete. Next automatic scan: [date].”",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "This keeps your dashboard up to date with zero ongoing manual work.",
              },
            ],
          },
        ],
      },
      {
        title: "What Email sync finds (and what it does not)",
        content: [
          {
            _type: "block",
            style: "h3",
            children: [
              {
                _type: "span",
                text: "Subscriptions and renewals Email sync detects well",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Email sync is extremely effective at detecting subscriptions that:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Send recurring invoices or billing receipts",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Send “your subscription renewed” emails",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Send “your card will be charged on…” style notices",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Send trial ending, upgrade, or downgrade messages",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [{ _type: "span", text: "These commonly include:" }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "SaaS tools (Notion, Slack, Zoom, Canva, HubSpot, Monday, etc.)",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Cloud services (Google Workspace, Microsoft 365, hosting, storage)",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Marketing tools (email platforms, analytics, landing page builders)",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Operational tools (CRM, helpdesk, scheduling, payroll add-ons)",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              { _type: "span", text: "Edge cases and manual additions" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "There are cases where Email sync may not see a subscription:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "The tool never sends invoices or renewal emails",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "All communication happens inside an in-app portal",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "The subscription is paid via wire with separate offline contracts",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "The email address used for billing is different from the email connected",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              { _type: "span", text: "For these, Vendibly lets you:" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [{ _type: "span", text: "Add vendors manually" }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Upload contracts that AI will parse and convert into vendor records",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Once added, these vendors behave like others in the calendar and reminders.",
              },
            ],
          },
        ],
      },
      {
        title: "Privacy and security: what Email sync can and cannot do",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Inbox access is always the biggest psychological barrier. People worry (rightly) about tools reading the wrong emails or storing sensitive content.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly’s Email sync is designed so that:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "It uses OAuth for access, meaning you never share your password.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "On Free, tokens are not stored after the one-time scan; there are no background jobs for free users.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "On Pro and Plus, tokens are stored securely to allow weekly scans.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Access is read-only: no sending, editing, or deleting emails.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly follows this same principle but applies it directly to:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [{ _type: "span", text: "Vendor records" }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [{ _type: "span", text: "Subscription tracking" }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [{ _type: "span", text: "Renewal intelligence" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "So you get the benefits of automation without handing full control of your inbox to a third party.",
              },
            ],
          },
        ],
      },
      {
        title: "How Email sync powers the rest of Vendibly",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Email sync is not just a convenience feature. It powers almost everything else in Vendibly’s product.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "Vendor list and dashboard" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Every time Email sync detects a vendor, it creates or updates a vendor record with:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Name, Renewal date, Amount, Billing period, Status, Links to relevant emails or contracts",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Your dashboard then aggregates this into: Total vendors, Upcoming payments, Renewals this month, Timeline events",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              { _type: "span", text: "Renewal calendar and reminders" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "From extracted renewal dates, Vendibly generates calendar events and sends reminders: 7, 3, and 1 days before renewal. With labels such as Upcoming and Overdue for visual clarity. These events are kept up to date as Email sync discovers new charges or changed billing dates.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              { _type: "span", text: "AI contract summaries and insights" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "When you upload contracts or when emails contain attached agreements, Vendibly’s AI layer can: Summarize key contract terms, Highlight renewal type and termination clauses, Tag vendors as recurring, fixed-term, or one-off. Over time, this contributes to richer insights about your SaaS stack and vendor commitments.",
              },
            ],
          },
        ],
      },
      {
        title: "Free vs Pro – what changes with Email sync",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "The difference between Free and Pro is simple and very intentional:",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [{ _type: "span", text: "Free Plan", marks: ["strong"] }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "One-time 6-month scan via Email sync. Up to 5 vendors in your account. 30-day calendar view. No background jobs, no ongoing sync; tokens disconnected after scan.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "This gives a clean snapshot of your current subscriptions and renewals without any ongoing inbox connection.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [{ _type: "span", text: "Pro Plan", marks: ["strong"] }],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "Unlimited vendors. Continuous inbox sync with weekly scans. Full-year calendar view. AI contract summaries and exportable reports (CSV, PDF).",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "This turns Email sync from a one-time discovery tool into a continuous monitoring system.",
              },
            ],
          },
        ],
      },
      {
        title: "When should you use Email sync?",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "You should use Email sync if you have more than a handful of tools, pay for software across multiple cards, have ever been surprised by a renewal, or want a complete picture of your SaaS stack without manually listing everything.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Compared to manually entering subscriptions into a tracker or spreadsheet, inbox-based discovery gives you a much more accurate baseline and dramatically reduces setup friction.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Existing subscription tracking tools in consumer and SMB space report that automating subscription detection is the main reason people adopt them and stay engaged.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly adds to that by focusing on business-grade vendors, contracts, and renewals rather than just personal media subscriptions.",
              },
            ],
          },
        ],
      },
      {
        title: "Summary",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Email sync is the fastest way to get from “I have no idea what I’m paying for” to “I can see every subscription and renewal in one place.” By connecting securely to Gmail or Outlook, scanning the last 6 months of receipts and billing emails, and using AI to build structured vendor records, Vendibly turns your inbox into a real subscription intelligence layer for your business.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            listItem: "bullet",
            children: [
              {
                _type: "span",
                text: "No manual data entry. No hunting through old invoices. No guessing when renewals are coming.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Just connect once, let the scan complete, and let Vendibly handle the subscriptions and renewals you would otherwise miss.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "How Smart Renewal Reminders Help You Stay Ahead of Every Charge",
    slug: "set-subscription-renewal-reminders",
    seoTitle: "Vendibly | Smart Renewal Reminders: Stay Ahead of Every Charge",
    seoDescription:
      "Vendibly’s smart renewal reminders automatically extract renewal dates from emails and contracts, place them on a calendar, and alert you 7, 3, and 1 days before charges hit.",
    lead: "Keeping track of subscription renewals is one of the hardest parts of managing a modern software stack. Renewals happen monthly, quarterly, or annually, and businesses often miss them because renewal dates hide inside emails, vendors auto-renew by default, prices change quietly, contrast terms require notice periods, and multiple team members sign up for tools over time. A missed renewal can mean paying for software you no longer use, being locked into another annual cycle, or scrambling to update a card before service interruption. Vendibly’s smart renewal reminders solve this problem by automatically extracting renewal dates from emails and contracts, placing them in a calendar, and alerting you before charges hit.",
    featured: true,
    icon: "/icons/smart-renewal.png",
    sections: [
      {
        title:
          "Why renewal reminders matter for SMBs, freelancers, and startups",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "When researchers studied how people manage recurring payments, they found a clear pattern: users lose track of renewals because billing signals are fragmented, inconsistent, and often ignored in email inboxes.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "The typical business deals with: dozens of SaaS tools, multiple credit cards, separate departments/people buying tools independently, invoices arriving at inconsistent intervals, contracts stored in PDFs, drives, or inbox threads.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Renewals slip through the cracks not because people are careless, but because no system centralizes the signals.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "This is why renewal reminders consistently appear as a top feature in subscription and spend management tools. They prevent accidental spend and give teams enough time to adjust usage, budgets, and contracts.",
              },
            ],
          },
        ],
      },
      {
        title: "How Vendibly identifies your renewal dates automatically",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly is designed to determine your renewal dates with a high degree of reliability, using multiple data sources and extraction methods:",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "1. Email Sync identification" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "From the inbox scan, VendoIQ extracts: renewal dates, invoice due dates, monthly/annual billing cycles, trial end dates, 'your plan will renew on' messages, invoice attachments containing billing information.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "This aligns with the Email Sync engine: attachment-first parsing, fallback to email body, and structured record extraction (vendor, billing period, renewal date, amount, status).",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "2. Contract Upload parsing" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "If you upload a contract, Vendibly reads: renewal terms (auto-renewal, manual renewal, fixed-term), cancellation windows (30 days, 60 days, etc.), commitment periods, multi-year renewal cycles.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              { _type: "span", text: "3. AI inference when dates are missing" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Some vendors do not explicitly state renewal dates. In these cases, Vendibly: infers the date based on billing patterns, identifies monthly cycles from invoice cadence, recognizes annual cycles from historical charges, flags ambiguous dates for manual confirmation.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              {
                _type: "span",
                text: "4. Deduplication ensures no duplicate reminders",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "If multiple invoices reference the same period: records are normalized, only the most accurate invoice is used, overlapping billing periods are merged. This prevents duplicate alerts and cluttered calendars.",
              },
            ],
          },
        ],
      },
      {
        title: "How smart renewal reminders work inside Vendibly",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly sends reminders at precise intervals designed around actual user behavior patterns and contract risk windows.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              {
                _type: "span",
                text: "Reminder timing: 7, 3, and 1 days before renewal",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "According to Vendibly’s spec: Reminders are sent 7 days before renewal (primary alert), then 3 days before (action window), then 1 day before (final alert).",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "This cadence reflects research that shows users need multiple warning points because they often fail to act on a single alert — especially across long annual cycles.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "Delivery method" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Renewal reminders appear as: Email notifications via Resend, Calendar-based indicators in Vendibly, Dashboard alerts in the vendor list, Overdue labels for late charges.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "These reminders help you cancel before auto-renew, downgrade or switch plans, update expired cards, avoid unexpected payment failures, and re-evaluate tools you no longer need.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              { _type: "span", text: "Plan differences (Free vs Pro)" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Free plan: Tracks 5 vendors, Tracks renewal dates, Shows 30 days of upcoming renewals, Sends reminders based on extracted dates, Does not auto-scan the inbox after setup (no weekly updates).",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Pro plan: Unlimited vendors, Full-year calendar, Weekly incremental inbox scans, More accurate, continuously updated renewal alerts, Exportable CSV + PDF reports.",
              },
            ],
          },
        ],
      },
      {
        title: "Summary",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly’s smart renewal reminders help you stay ahead of payments, prevent unwanted renewals, and reduce wasted spend — automatically. By combining inbox scanning, contract parsing, renewal date extraction, and a structured renewal calendar, Vendibly gives freelancers, founders, and teams a clear view of what’s coming and enough time to act on it.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "You don’t have to guess. You don’t have to remember. You don’t have to hunt through emails or spreadsheets. Just turn on Email sync, and Vendibly takes care of the rest.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title:
      "How to Organize All Your Subscriptions, Invoices, and Contracts in One Place",
    slug: "organize-subscription-invoices-from-email",
    seoTitle:
      "Vendibly | Auto-organized Vault: Organize Subscriptions, Invoices, and Contracts",
    seoDescription:
      "Vendibly automatically pulls all subscription-related documents, invoices, renewal dates, and contracts from your inbox and uploads into a single clean space.",
    lead: "Businesses sign up for dozens of SaaS tools every year. Invoices sit in email threads, contracts live in PDFs scattered across laptops, and renewal dates hide inside billing notifications. When you need to check a contract term or confirm a renewal date, you’re left digging through folders, search bars, or old Slack messages. Vendibly’s auto-organized vault solves this by pulling all subscription-related documents and data from your inbox and uploads into a single clean space. Every subscription, invoice, renewal date, and contract is structured, categorized, and easy to review.",
    featured: true,
    icon: "/icons/auto-organized.png",
    sections: [
      {
        title: "Why subscription and contract organization is so difficult",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Across SMBs, freelancers, and startups, contract and subscription management fails for predictable reasons: Invoices arrive on different days and formats, Contracts live across email threads/drives/desktops, Renewal dates are buried in PDFs, Team members sign up independently, SaaS vendors default to auto-renewal.",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Studies and market data show that subscription visibility is one of the most overlooked causes of wasted software spend. A centralized vault eliminates this chaos by giving you one place to store everything, automatically.",
              },
            ],
          },
        ],
      },
      {
        title:
          "How Vendibly builds your subscription and contract vault automatically",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly uses a combination of inbox scanning, contract uploads, and AI extraction to create a structured, self-updating subscription record for your business.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              {
                _type: "span",
                text: "Step 1 — Inbox scanning pulls in invoices and emails",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "When you connect Gmail or Outlook through Email sync, Vendibly: scans the last 6 months of emails, looks for invoices/receipts/renewal notices, downloads and prioritizes PDF attachments, extracts contract-like data.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              {
                _type: "span",
                text: "Step 2 — Contract uploads become structured records",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "If you upload a PDF, DOCX, or image of a contract, Vendibly extracts: vendor name, contract term, renewal window, billing period, effective dates, termination clauses, linked invoice details.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              {
                _type: "span",
                text: "Step 3 — AI extraction turns documents into clean vendor entries",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Each document—email or contract—is parsed into a structured vendor record, drawn from Vendibly’s official data schema for the VendoIQ extraction layer. This record powers your entire vault, dashboard, and renewal calendar.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              {
                _type: "span",
                text: "Step 4 — Deduplication ensures a clean vault",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly automatically avoids duplicates by normalizing vendor names, comparing billing periods/ renewal dates, using fingerprint hashes, and keeping the most complete record. This prevents duplicate entries.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              {
                _type: "span",
                text: "Step 5 — Weekly inbox updates keep the vault current (Pro)",
              },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "On Pro: Vendibly re-scans new emails weekly, updates vendor records with new invoices, adds new vendors, flags missing invoices. Free users still get a full vault after the initial scan, but without continuous syncing.",
              },
            ],
          },
        ],
      },
      {
        title: "What the auto-organized vault includes",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly’s vault is not just a file folder. It is a structured, searchable record of:",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "Subscriptions" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Names, Plans, Billing periods, Monthly vs annual cost, Status",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "Invoices" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "All relevant PDF and email invoices, Amounts, Currencies, Dates, Attachments",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "Contracts" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Uploaded PDFs/DOCX, Parsed terms, Renewal type, Termination windows",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "Renewal dates" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Extracted/inferred dates, Synced with calendar, Highlighted with reminders",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "Vendor timeline" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Every action logged (e.g. “Parsed invoice attachment”, “Vendor updated”).",
              },
            ],
          },
        ],
      },
      {
        title: "Summary",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly’s auto-organized vault gives you all invoices, contracts, subscription details, renewal dates, and metadata in one structured place, without manual maintenance. By combining inbox scanning, AI extraction, smart deduplication, and ongoing updates, Vendibly transforms scattered documents and hidden renewals into a clean, reliable source of truth for your entire SaaS stack. No more hunting. No more searching. No more chaos. Everything is where it should be — automatically.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title:
      "How Vendibly’s Renewal Calendar Keeps You Ahead of Subscription and Contract Deadlines",
    slug: "create-a-subscription-renewal-calendar",
    seoTitle:
      "Vendibly | Renewal Calendar: Ahead of Subscription and Contract Deadlines",
    seoDescription:
      "Vendibly’s Renewal calendar gives you a complete visual timeline of every upcoming payment, renewal, and contract date — updated automatically from your inbox and uploaded documents.",
    lead: "Tracking renewal dates manually is nearly impossible. Most businesses rely on spreadsheets, calendar reminders, or scattered emails to keep track of when subscriptions or contracts renew. That system fails as soon as invoices shift, vendors change billing cycles, or new tools are added by team members. Vendibly’s Renewal calendar gives you a complete visual timeline of every upcoming payment, renewal, and contract date — updated automatically from your inbox and uploaded documents. Instead of guessing or digging through emails, you see exactly what’s renewing and when, all in one place.",
    featured: true,
    icon: "/icons/renewal-calendar.png",
    sections: [
      {
        title: "Why renewal calendars matter",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Research into software spend shows that teams overspend not because they intend to, but because renewals catch them by surprise. Emails get ignored, invoices come at irregular intervals, and annual contracts renew quietly unless cancelled early. Organizations that adopt renewal management tools consistently reduce wasted spend because they gain visibility and time to take action. A renewal calendar centralizes: subscription renewals, upcoming payments, contract end dates, invoice cycles, free trial expirations, overdue or failed payments. Without relying on memory or old spreadsheets.",
              },
            ],
          },
        ],
      },
      {
        title: "How Vendibly builds your renewal calendar automatically",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "The power of Vendibly’s calendar comes from the extraction layer behind it. Instead of manually entering dates, Vendibly pulls renewal information from:",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "1. Email Sync" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "From the 6-month inbox scan (Free or Pro), Vendibly extracts: renewal dates, invoice dates, billing cycles, trial end dates, contract renewal notifications, recurring charge confirmations. Email signals are the most reliable markers for subscription renewals.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "2. Contract uploads" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "If you upload a PDF or DOCX contract, Vendibly identifies: renewal type (auto-renewing, fixed-term), renewal window (30-day notice, etc.), precise end-of-term dates. These are then added to the calendar with the same accuracy as inbox-derived dates.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [
              { _type: "span", text: "3. Weekly incremental scans (Pro)" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "On Pro, Vendibly continues scanning new emails each week, updating: changed renewal dates, new invoices, plan upgrades or downgrades, newly added subscriptions. The calendar never goes stale because data is always being refreshed from primary sources.",
              },
            ],
          },
        ],
      },
      {
        title: "The design of Vendibly’s renewal calendar",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "The renewal calendar is designed to be lightweight, clear, and focused specifically on upcoming actions.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "Full calendar view" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Month grid layout, Clickable renewal events, Clean labels for visibility, Works on desktop and auto-switches on mobile.",
              },
            ],
          },
          {
            _type: "block",
            style: "h3",
            children: [{ _type: "span", text: "Mobile list view" }],
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "The system automatically switches to a vertical mobile-friendly timeline: Upcoming month’s renewals, Overdue items, Vendor names, Amounts and billing periods, Status indicators. This ensures renewals are visible even on small screens.",
              },
            ],
          },
        ],
      },
      {
        title: "Summary",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "Vendibly’s renewal calendar gives you a complete, continuously updated view of every subscription, contract, and upcoming renewal. By combining inbox scanning, contract parsing, structured event logic, and smart reminders, it helps you avoid surprises, reduce waste, and plan your SaaS spend with confidence. You no longer have to maintain spreadsheets, set dozens of reminders, or rely on fragmented email searches. Just open the calendar — everything you need is already there.",
              },
            ],
          },
        ],
      },
    ],
  },
];

async function seedGuides() {
  console.log("Seeding guides...");
  for (const guide of guides) {
    console.log(`Creating guide: ${guide.title}`);
    await client.createOrReplace({
      _id: `guide-${guide.slug}`,
      _type: "guide",
      ...guide,
      slug: {
        _type: "slug",
        current: guide.slug,
      },
    });
  }
  console.log("Guides seeded successfully!");
}

seedGuides().catch((err) => {
  console.error("Error seeding guides:", err);
  process.exit(1);
});
