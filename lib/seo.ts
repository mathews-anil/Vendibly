type BaseJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt: string;
  imageUrl?: string;
  faqs?: { question: string; answer: string }[];
  urlPrefix: "guides" | "vendors" | "use-cases";
};

export function generateJsonLd({
  title,
  description,
  slug,
  publishedAt,
  modifiedAt,
  imageUrl,
  faqs,
  urlPrefix,
}: BaseJsonLdProps) {
  const url = `https://www.vendibly.ai/${urlPrefix}/${slug}`;

  const article = {
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: "Vendibly",
      url: "https://www.vendibly.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "Vendibly",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vendibly.ai/imgs/logo.png",
      },
    },
    datePublished: publishedAt,
    dateModified: modifiedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const graph: {
    "@context": string;
    "@graph": object[];
  } = {
    "@context": "https://schema.org",
    "@graph": [article],
  };

  if (faqs && faqs.length > 0) {
    const faqPage = {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
    graph["@graph"].push(faqPage);
  }

  return graph;
}
