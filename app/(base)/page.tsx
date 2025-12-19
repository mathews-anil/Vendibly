import Home, { UseCase, FeaturedGuide } from "@/views/home";
import { clientWithoutCdn } from "@/sanity/lib/client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";

const useCasesQuery = `*[_type == "useCase" && defined(category)] | order(category asc) {
  title,
  "slug": slug.current,
  category,
  shortDescription,
  cardIcon {
    asset->{
      url
    },
    alt
  }
}`;

const featuredGuidesQuery = `*[_type == "guide" && featured == true] | order(_createdAt desc) [0...4] {
  title,
  "slug": slug.current,
  shortDescription,
  icon
}`;

export const revalidate = 60;

export default async function HomePage() {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["use-cases-home"],
      queryFn: () => clientWithoutCdn.fetch(useCasesQuery),
    }),
    queryClient.prefetchQuery({
      queryKey: ["featured-guides-home"],
      queryFn: () => clientWithoutCdn.fetch(featuredGuidesQuery),
    }),
  ]);

  const useCases = queryClient.getQueryData(["use-cases-home"]) as UseCase[];
  const featuredGuides = queryClient.getQueryData([
    "featured-guides-home",
  ]) as FeaturedGuide[];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Vendibly",
        description:
          "Vendibly scans your inbox to track subscriptions, renewals, invoices, and contracts automatically.",
        applicationCategory: "Subscription management software",
        operatingSystem: "Web",
        url: "https://www.vendibly.ai",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Product",
        name: "Vendibly Pro",
        description: "Subscription tracking and SaaS renewal management tool.",
        offers: {
          "@type": "Offer",
          price: "29",
          priceCurrency: "USD",
          availability: "http://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does Vendibly do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vendibly is a subscription tracker and SaaS renewal management tool that connects to Gmail or Outlook. It automatically extracts subscriptions, invoices, renewal dates, and contract terms using AI, then organizes everything into one dashboard with smart alerts before charges hit.",
            },
          },
          {
            "@type": "Question",
            name: "How does Vendibly find my subscriptions and renewals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vendibly scans your inbox for invoices, payment confirmations, subscription emails, and contracts. It uses AI to identify vendors, detect renewal dates, extract amounts, and categorize each subscription. No manual setup is needed and you can upload contracts directly if you prefer.",
            },
          },
          {
            "@type": "Question",
            name: "Does Vendibly read or store my emails?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Vendibly uses secure, read-only access to analyze subscription-related emails such as invoices and billing notices. It does not store your email content, does not access personal messages, and never sends or edits emails.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to upload contracts manually?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not necessarily. Vendibly can detect most subscriptions, invoices, and renewals directly from your inbox. Contract upload is optional and helps when you have PDFs, agreements, or older files outside your email.",
            },
          },
          {
            "@type": "Question",
            name: "Will Vendibly miss any subscriptions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vendibly captures nearly all subscriptions that generate invoices or renewal notifications in your inbox. If a tool never sends billing emails, you can add it manually or upload the contract, and Vendibly will monitor it going forward.",
            },
          },
          {
            "@type": "Question",
            name: "Are my email and data secure?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Vendibly uses OAuth for Gmail and Outlook, which means we never see your password and only receive read-only access. All data is encrypted in transit and at rest. You can disconnect Vendibly at any time from your Google or Microsoft account settings.",
            },
          },
          {
            "@type": "Question",
            name: "What inboxes does Vendibly support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vendibly currently supports Gmail and Outlook (Microsoft 365). Additional providers will be added based on user demand.",
            },
          },
          {
            "@type": "Question",
            name: "How do renewal alerts work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vendibly identifies upcoming renewals from invoices, billing emails, and contract terms. You receive smart alerts before renewal dates, giving you time to cancel, downgrade, negotiate, or update payment details. Alerts adapt to monthly and annual billing cycles.",
            },
          },
          {
            "@type": "Question",
            name: "Can Vendibly track annual contracts and recurring invoices?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Vendibly extracts renewal dates, billing periods, amounts, and contract terms for both monthly subscriptions and long-term SaaS agreements. It handles annual, multi-year, and custom billing cycles automatically.",
            },
          },
          {
            "@type": "Question",
            name: "What happens after my free trial?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You automatically move to the Free Plan. Your dashboard, inbox sync, and existing subscriptions remain intact. There is no charge unless you choose to upgrade.",
            },
          },
          {
            "@type": "Question",
            name: "Who is Vendibly for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vendibly is built for creators, freelancers, startups, small businesses, and agencies who use multiple SaaS tools and want to avoid missed renewals, surprise charges, and scattered invoices.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use Vendibly without connecting my inbox?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can add subscriptions manually or upload contracts. However, inbox scanning is the fastest and most accurate way to find everything automatically, especially older subscriptions you may have forgotten.",
            },
          },
          {
            "@type": "Question",
            name: "How accurate is Vendibly’s detection?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vendibly’s AI engine identifies subscription-related emails with high accuracy. It prioritizes invoice attachments, then email bodies, to extract vendor names, amounts, billing cycles, and renewal dates.",
            },
          },
          // {
          //   "@type": "Question",
          //   "name": "Can I export my subscription data?",
          //   "acceptedAnswer": {
          //     "@type": "Answer",
          //     "text": "Yes. You can export your subscriptions and renewal calendar as CSV or PDF for reporting, budgeting, or internal reviews."
          //   }
          // }
        ],
      },
    ],
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home useCases={useCases} featuredGuides={featuredGuides} />
    </HydrationBoundary>
  );
}
