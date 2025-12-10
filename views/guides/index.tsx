import Image from "next/image";
import Link from "next/link";

interface Guide {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

interface GuidesViewProps {
  guides: Guide[];
}

export default function GuidesView({ guides }: GuidesViewProps) {
  return (
    <main className="min-h-screen py-24 sm:py-32">
      <div className="wrapper">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="title-lg mb-6">Subscription Management Guides</h1>
          <p className="text-lg text-foreground-copy">
            Learn how to track subscriptions, manage renewals, and organize
            invoices with step-by-step guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {guide.coverImage?.asset?.url && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={guide.coverImage.asset.url}
                    alt={guide.coverImage.alt || guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold font-outfit mb-3 group-hover:text-app-green transition-colors">
                  {guide.title}
                </h2>
                <p className="text-foreground-copy text-sm line-clamp-3">
                  {guide.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
