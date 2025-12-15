import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

interface VendorDetailProps {
  vendor: {
    title: string;
    vendorName: string;
    category: string;
    whatItIsFor: PortableTextBlock[];
    billing: PortableTextBlock[];
    invoices: PortableTextBlock[];
    howVendiblyHelps: PortableTextBlock[];
    faqItems: { question: string; answer: string }[];
  };
}

const VendorDetailView = ({ vendor }: VendorDetailProps) => {
  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-app-blue/5 text-app-blue rounded-full text-sm font-medium mb-4">{vendor.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-app-blue">{vendor.vendorName || vendor.title}</h1>
        </div>

        <div className="grid gap-12">
          {vendor.whatItIsFor && (
            <section>
              <h2 className="text-2xl font-bold mb-4 font-outfit text-app-blue">What it&apos;s for</h2>
              <div className="prose prose-lg max-w-none text-foreground-copy">
                <PortableText value={vendor.whatItIsFor} />
              </div>
            </section>
          )}

          {vendor.billing && (
            <section>
              <h2 className="text-2xl font-bold mb-4 font-outfit text-app-blue">Billing</h2>
              <div className="prose prose-lg max-w-none text-foreground-copy">
                <PortableText value={vendor.billing} />
              </div>
            </section>
          )}

          {vendor.invoices && (
            <section>
              <h2 className="text-2xl font-bold mb-4 font-outfit text-app-blue">Invoices</h2>
              <div className="prose prose-lg max-w-none text-foreground-copy">
                <PortableText value={vendor.invoices} />
              </div>
            </section>
          )}

          {vendor.howVendiblyHelps && (
            <section className="bg-app-green/5 p-8 rounded-2xl border border-app-green/10">
              <h2 className="text-2xl font-bold mb-4 font-outfit text-app-blue">How Vendibly Helps</h2>
              <div className="prose prose-lg max-w-none text-foreground-copy">
                <PortableText value={vendor.howVendiblyHelps} />
              </div>
            </section>
          )}
        </div>

        {vendor.faqItems && vendor.faqItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 font-outfit text-app-blue">FAQs</h2>
            <div className="space-y-6">
              {vendor.faqItems.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 font-outfit text-app-blue">{faq.question}</h3>
                  <p className="text-foreground-copy">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default VendorDetailView;
